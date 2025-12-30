import { useId } from "react";

export default function HudWindow({
  title,
  subtitle,
  id,
  children,
}) {
  const internalId = useId();
  const windowId = id || `window-${internalId}`;

  return (
    <section className="hud-window" id={windowId}>
      <div className="hud-window__chrome">
        <div className="hud-window__header">
          <div className="hud-window__title">
            <span className="led on" />
            <span className="hud-label">{title}</span>
          </div>
          <div className="hud-window__meta">
            <span className="hud-chip">{subtitle || "interactive"}</span>
            <span className="hud-chip ghost">matrix-synced</span>
          </div>
        </div>
        <div className="hud-window__body">
          <div className="hud-scanline" />
          {children}
        </div>
      </div>
    </section>
  );
}
