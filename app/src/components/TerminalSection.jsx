export default function TerminalSection({ title, id, children }) {
  return (
    <section className="terminal-section" id={id}>
      <div className="terminal-header">{`> ${title.toUpperCase()}`}</div>
      <div className="terminal-body">{children}</div>
      <div className="terminal-divider">------------------------------------------------------------</div>
    </section>
  );
}
