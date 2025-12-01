export default function Hero({ data }) {
  return (
    <header className="hero" id="home">
      <div className="hero-content container">
        <h1>
          Hello, I'm <span className="highlight">{data.highlight}</span>.
        </h1>
        <img src={data.image} className="heading-image" alt="Heading" />
        <p>{data.blurb}</p>
        <div className="scroll-down-arrow">
          <a href="#about" className="arrow-link">
            <span>&#8595;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
