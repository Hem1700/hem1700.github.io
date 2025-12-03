import SocialIcons from "./SocialIcons";
import { useReveal } from "../hooks/useReveal";

export default function About({ data, socials }) {
  const [ref, visible] = useReveal();

  return (
    <section className={`about reveal ${visible ? "visible" : ""}`} id="about" ref={ref}>
      <div className="container about-container">
        <div className="about-photo">
          <img src={data.image} alt="Hem Parekh" style={{ maxWidth: "100%", borderRadius: "10px" }} />
        </div>
        <div className="about-content">
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          <SocialIcons links={socials} />
        </div>
      </div>
    </section>
  );
}
