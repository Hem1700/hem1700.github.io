import { useState } from "react";
import { Link } from "react-router-dom";
import TerminalSection from "../components/TerminalSection";
import { blogs } from "../data/content";

export default function BlogsPage() {
  return (
    <div className="terminal-feed">
      <TerminalSection title="blogs">
        <ul className="terminal-list">
          {blogs.map((b) => (
            <li key={b.slug}>
              <Link to={`/blog/${b.slug}`}>{b.title}</Link> — {b.excerpt}
            </li>
          ))}
        </ul>
      </TerminalSection>
    </div>
  );
}
