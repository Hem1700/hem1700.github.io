import post0012 from "../posts/0012.html?raw";
import post0160 from "../posts/0160.html?raw";
import post1001 from "../posts/1001.html?raw";
import post11882 from "../posts/11882.html?raw";
import post23397 from "../posts/23397.html?raw";
import post40982 from "../posts/40982.html?raw";
import postCow from "../posts/cow.html?raw";
import postFirmware from "../posts/firmware_llm_annotator.html?raw";
import postPoodle from "../posts/poodle.html?raw";
import postRobot from "../posts/robot.html?raw";
import postSymlinks from "../posts/symlinks.html?raw";
import postTsa from "../posts/transient_scheduler_attacks_tsa_blog.html?raw";
import postReact2shellToyLab from "../posts/react2shell-toy-lab.html?raw";
import postKernelSurfaceAudit from "../posts/kernel_surface_audit_blog.html?raw";
import postCve202226318 from "../posts/cve-2022-26318-re-blog.html?raw";
import postVillagerInsideOut from "../posts/villager_inside_out.html?raw";
import postLlmMultistageAttacks from "../posts/llm_multistage_attacks_technical_breakdown_full.html?raw";
import postLlmAssistedBinaryDiffing from "../posts/llm_assisted_binary_diffing_blog.html?raw";

export const posts = {
  "llm_assisted_binary_diffing_blog": {
    title: "LLM-Assisted Binary Diffing: Finding 1-Days Before PoCs Drop",
    slug: "llm_assisted_binary_diffing_blog",
    content: postLlmAssistedBinaryDiffing,
  },
  "llm_multistage_attacks_technical_breakdown_full": {
    title: "On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown",
    slug: "llm_multistage_attacks_technical_breakdown_full",
    content: postLlmMultistageAttacks,
  },
  "villager_inside_out": {
    title: "Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)",
    slug: "villager_inside_out",
    content: postVillagerInsideOut,
  },
  "firmware_llm_annotator": {
    title: "Firmware Exploration: LLM as Your Annotator",
    slug: "firmware_llm_annotator",
    content: postFirmware,
  },
  "transient_scheduler_attacks_tsa_blog": {
    title: "Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",
    slug: "transient_scheduler_attacks_tsa_blog",
    content: postTsa,
  },
  "kernel_surface_audit_blog": {
    title: "Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",
    slug: "kernel_surface_audit_blog",
    content: postKernelSurfaceAudit,
  },
  "cve-2022-26318-re-blog": {
    title: "Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",
    slug: "cve-2022-26318-re-blog",
    content: postCve202226318,
  },
  "react2shell-toy-lab": {
    title: "From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny \"Fake Flight\" Server",
    slug: "react2shell-toy-lab",
    content: postReact2shellToyLab,
  },
  "1001": {
    title: "CVE-2024–1001",
    slug: "1001",
    content: post1001,
  },
  "0012": {
    title: "CVE-2024–0012",
    slug: "0012",
    content: post0012,
  },
  "40982": {
    title: "CVE-2022–40982",
    slug: "40982",
    content: post40982,
  },
  "cow": {
    title: "CVE-2016–5195",
    slug: "cow",
    content: postCow,
  },
  "symlinks": {
    title: "Symbolic Links (Symlinks) in Linux",
    slug: "symlinks",
    content: postSymlinks,
  },
  "23397": {
    title: "CVE-2023–23397",
    slug: "23397",
    content: post23397,
  },
  "0160": {
    title: "CVE-2014-0160",
    slug: "0160",
    content: post0160,
  },
  "11882": {
    title: "CVE-2017-11882",
    slug: "11882",
    content: post11882,
  },
  "robot": {
    title: "ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",
    slug: "robot",
    content: postRobot,
  },
  "poodle": {
    title: "ZOMBIE POODLE and GOLDENDOODLE ATTACKS",
    slug: "poodle",
    content: postPoodle,
  },
};
