export default function CertBadge({ issuer = "Cert" }) {
  const initial = issuer?.[0]?.toUpperCase() || "C";
  return <div className="cert-badge">{initial}</div>;
}
