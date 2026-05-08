#!/usr/bin/env node
/**
 * prerender.js — build-time SEO prerenderer for HEM-OS
 *
 * After `vite build`, this script:
 *   1. For each blog post, reads the source HTML, extracts a description,
 *      clones dist/index.html with injected <title> + meta/OG tags, and
 *      writes it to dist/blog/<slug>/index.html.
 *   2. Writes dist/sitemap.xml listing all post URLs + the home URL.
 *
 * Run via: npm run build:seo
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Config ──────────────────────────────────────────────────────────────────

const SITE_URL = "https://hem1700.github.io";
const SITE_NAME = "Hem Parekh";
const SITE_DESCRIPTION =
  "Security and Privacy Engineer. Writing about CVEs, reverse engineering, LLMs, and systems security.";

const DIST_DIR = path.join(__dirname, "dist");
const POSTS_SRC_DIR = path.join(__dirname, "src", "posts");

// Slug → { title, file } — mirrors app/src/data/posts.js
const POSTS = [
  {
    slug: "llm_assisted_binary_diffing_blog",
    title: "LLM-Assisted Binary Diffing: Finding 1-Days Before PoCs Drop",
    file: "llm_assisted_binary_diffing_blog.html",
  },
  {
    slug: "llm_multistage_attacks_technical_breakdown_full",
    title:
      "On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown",
    file: "llm_multistage_attacks_technical_breakdown_full.html",
  },
  {
    slug: "villager_inside_out",
    title:
      "Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)",
    file: "villager_inside_out.html",
  },
  {
    slug: "firmware_llm_annotator",
    title: "Firmware Exploration: LLM as Your Annotator",
    file: "firmware_llm_annotator.html",
  },
  {
    slug: "transient_scheduler_attacks_tsa_blog",
    title:
      "Transient Scheduler Attacks on CPUs: Exploiting AMD's New Microarchitectural Leak",
    file: "transient_scheduler_attacks_tsa_blog.html",
  },
  {
    slug: "kernel_surface_audit_blog",
    title: "Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",
    file: "kernel_surface_audit_blog.html",
  },
  {
    slug: "cve-2022-26318-re-blog",
    title:
      "Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",
    file: "cve-2022-26318-re-blog.html",
  },
  {
    slug: "react2shell-toy-lab",
    title:
      'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',
    file: "react2shell-toy-lab.html",
  },
  { slug: "1001", title: "CVE-2024–1001", file: "1001.html" },
  { slug: "0012", title: "CVE-2024–0012", file: "0012.html" },
  { slug: "40982", title: "CVE-2022–40982", file: "40982.html" },
  { slug: "cow", title: "CVE-2016–5195", file: "cow.html" },
  {
    slug: "symlinks",
    title: "Symbolic Links (Symlinks) in Linux",
    file: "symlinks.html",
  },
  { slug: "23397", title: "CVE-2023–23397", file: "23397.html" },
  { slug: "0160", title: "CVE-2014-0160", file: "0160.html" },
  { slug: "11882", title: "CVE-2017-11882", file: "11882.html" },
  {
    slug: "robot",
    title: "ROBOT (Return of Bleichenbacher's Oracle Threat) Attack",
    file: "robot.html",
  },
  {
    slug: "poodle",
    title: "ZOMBIE POODLE and GOLDENDOODLE ATTACKS",
    file: "poodle.html",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Strip HTML tags and collapse whitespace from a string.
 */
function stripHtml(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extract the first meaningful paragraph of plain text from post HTML.
 * Falls back to the post title if nothing suitable is found.
 */
function extractDescription(html, fallback) {
  // Try to grab body content first
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;

  // Split on block-level tags to find paragraph chunks
  const chunks = body
    .split(/<\/?(p|div|li|h[1-6]|section|article)[^>]*>/i)
    .map(stripHtml)
    .filter((t) => t.length > 60); // at least a meaningful sentence

  if (chunks.length > 0) {
    const desc = chunks[0].slice(0, 160).trim();
    // Trim at last word boundary
    const lastSpace = desc.lastIndexOf(" ");
    return lastSpace > 80 ? desc.slice(0, lastSpace) + "…" : desc;
  }

  return fallback;
}

/**
 * Escape a string for use inside an HTML attribute value.
 */
function escAttr(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Inject SEO meta tags into the built index.html <head>.
 */
function injectMeta(indexHtml, { title, description, url }) {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const metaTags = `
    <title>${escAttr(fullTitle)}</title>
    <meta name="description" content="${escAttr(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="${escAttr(SITE_NAME)}" />
    <meta property="og:title" content="${escAttr(fullTitle)}" />
    <meta property="og:description" content="${escAttr(description)}" />
    <meta property="og:url" content="${escAttr(url)}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escAttr(fullTitle)}" />
    <meta name="twitter:description" content="${escAttr(description)}" />
    <link rel="canonical" href="${escAttr(url)}" />`;

  // Replace the existing <title> tag and insert meta tags after it
  return indexHtml.replace(
    /<title>[^<]*<\/title>/i,
    metaTags
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

function main() {
  const indexHtml = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf8");

  let generated = 0;
  const sitemapUrls = [SITE_URL + "/"];

  for (const post of POSTS) {
    const srcPath = path.join(POSTS_SRC_DIR, post.file);

    if (!fs.existsSync(srcPath)) {
      console.warn(`  ⚠ Post source not found: ${post.file} — skipping`);
      continue;
    }

    const postHtml = fs.readFileSync(srcPath, "utf8");
    const description = extractDescription(postHtml, post.title);
    const url = `${SITE_URL}/blog/${post.slug}`;

    const rendered = injectMeta(indexHtml, {
      title: post.title,
      description,
      url,
    });

    const outDir = path.join(DIST_DIR, "blog", post.slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), rendered, "utf8");

    sitemapUrls.push(url);
    generated++;
    console.log(`  ✓ /blog/${post.slug}`);
  }

  // Also patch the root index.html with site-level meta tags
  const homeHtml = injectMeta(indexHtml, {
    title: `${SITE_NAME} — Security & Privacy Engineer`,
    description: SITE_DESCRIPTION,
    url: SITE_URL + "/",
  });
  // For home, we want just the plain title without the " — Hem Parekh" suffix
  const homeHtmlFixed = homeHtml.replace(
    `<title>${escAttr(`${SITE_NAME} — Security &amp; Privacy Engineer — ${SITE_NAME}`)}</title>`,
    `<title>${escAttr(`${SITE_NAME} — Security & Privacy Engineer`)}</title>`
  );
  fs.writeFileSync(path.join(DIST_DIR, "index.html"), homeHtmlFixed, "utf8");
  // Also patch 404.html (GitHub Pages SPA fallback) with same home meta
  fs.writeFileSync(path.join(DIST_DIR, "404.html"), homeHtmlFixed, "utf8");
  console.log(`  ✓ / (home meta tags + 404.html)`);

  // Write sitemap.xml
  const today = new Date().toISOString().slice(0, 10);
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u === SITE_URL + "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${u === SITE_URL + "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml, "utf8");
  console.log(`  ✓ sitemap.xml (${sitemapUrls.length} URLs)`);

  // Write robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST_DIR, "robots.txt"), robotsTxt, "utf8");
  console.log(`  ✓ robots.txt`);

  console.log(`\nPrerender complete: ${generated} posts + sitemap + robots.txt`);
}

main();
