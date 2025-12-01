export default function SocialIcons({ links = [] }) {
  return (
    <div className="social-icons">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label || "Social link"}>
          <i className={link.icon} />
        </a>
      ))}
    </div>
  );
}
