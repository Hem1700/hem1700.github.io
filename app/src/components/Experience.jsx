export default function Experience({ items }) {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>EXPERIENCE</h2>
          </div>
        </div>
        <div className="timeline-container">
          <div className="timeline">
            {items.map((item) => (
              <div className="timeline-item" key={`${item.range}-${item.role}`}>
                <div className="year">{item.range}</div>
                <div className="content">
                  <h3>{item.role}</h3>
                  <h4>{item.org}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
