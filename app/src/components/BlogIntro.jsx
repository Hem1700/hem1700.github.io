import SocialIcons from "./SocialIcons";

export default function BlogIntro({ data }) {
  return (
    <header className="blog-welcome-section">
      <div className="container text-center">
        <h1 className="glitchy" data-text={data.title}>
          {data.title}
        </h1>
        <p className="blog-subtitle">{data.subtitle}</p>
      </div>
    </header>
  );
}
