import SocialIcons from "./SocialIcons";

export default function About({ data, socials }) {
  return (
    <section className="about" id="about">
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
