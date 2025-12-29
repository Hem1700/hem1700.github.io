export default function HotkeyOverlay({ scanlinesOn, noiseOn, onToggleScanlines, onToggleNoise, onResetLayout }) {
  return (
    <div className="hud-hotkey-overlay">
      <div className="hud-hotkey-header">
        <span className="led on" />
        <span className="hud-label">HUD CONTROLS</span>
      </div>
      <ul className="hud-hotkey-list">
        <li>
          <code>Ctrl/Cmd + Shift + R</code>
          <span>Reset window layout</span>
          <button type="button" onClick={onResetLayout}>Reset</button>
        </li>
        <li>
          <code>Ctrl/Cmd + Shift + S</code>
          <span>Scanlines {scanlinesOn ? "ON" : "OFF"}</span>
          <button type="button" onClick={onToggleScanlines}>{scanlinesOn ? "Disable" : "Enable"}</button>
        </li>
        <li>
          <code>Ctrl/Cmd + Shift + N</code>
          <span>Noise {noiseOn ? "ON" : "OFF"}</span>
          <button type="button" onClick={onToggleNoise}>{noiseOn ? "Disable" : "Enable"}</button>
        </li>
      </ul>
    </div>
  );
}
