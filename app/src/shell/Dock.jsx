import { APPS, DOCK_ORDER } from "../data/apps";

export default function Dock({ onLaunch, openApps }) {
  return (
    <div className="dk">
      {DOCK_ORDER.map((id) => {
        const meta = APPS[id];
        const initial = meta.title.split(" ")[0][0];
        const label = meta.title.split("—")[0].trim();
        return (
          <div key={id} className="ic" data-app={id} onClick={() => onLaunch(id)}>
            <div className={`gly ${meta.g}`}>{initial}</div>
            <div className="dock-label">{label}</div>
            <div className="lbl">{label}</div>
            {openApps.includes(id) && <div className="run" />}
          </div>
        );
      })}
    </div>
  );
}
