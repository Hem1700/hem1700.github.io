import { useState } from "react";
import TerminalSection from "../components/TerminalSection";
import { blogs } from "../data/content";

export default function BlogsPage() {
  return (
    <div className="terminal-feed">
      <TerminalSection title="blogs">
        <ul className="terminal-list">
          {blogs.map((b) => (
            <li key={b.slug}>
              {b.title} — {b.excerpt}
            </li>
          ))}
        </ul>
      </TerminalSection>
    </div>
  );
}
