export default function BlogIntro({ data }) {
  return (
    <header className="blog-welcome-section">
      <div className="container">
        <div className="eyebrow">Ops log</div>
        <h1>{data.title}</h1>
        <p className="lead">{data.subtitle}</p>
      </div>
    </header>
  );
}
