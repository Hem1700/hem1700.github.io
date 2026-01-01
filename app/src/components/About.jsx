import SocialIcons from "./SocialIcons";
import { useReveal } from "../hooks/useReveal";

export default function About({ data, socials }) {
  const [ref, visible] = useReveal();

  return (
    <section className={`section about reveal ${visible ? "visible" : ""}`} id="about" ref={ref}>
      <div className="container about-grid">
        <div className="about-copy">
          <div className="eyebrow">About</div>
          <h2 className="section-title">{data.title}</h2>
          <p className="lead">{data.text}</p>
          <SocialIcons links={socials} />
        </div>
        <div className="about-media">
          <img src={data.image} alt={data.title} />
        </div>
      </div>
    </section>
  );
}
