import SocialIcons from "./SocialIcons";

export default function BlogIntro({ data }) {
  return (
    <header className="blog-welcome-section">
      <div className="container text-center">
        <h1>
          Hi there <span className="wave">👋</span>, welcome to my Blog
        </h1>
        <p className="blog-subtitle">{data.subtitle}</p>
      </div>
    </header>
  );
}
