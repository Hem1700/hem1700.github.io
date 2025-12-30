export default function TerminalSection({ title, children }) {
  return (
    <section className="terminal-section">
      <div className="terminal-header">{`> ${title.toUpperCase()}`}</div>
      <div className="terminal-body">{children}</div>
      <div className="terminal-divider">------------------------------------------------------------</div>
    </section>
  );
}
