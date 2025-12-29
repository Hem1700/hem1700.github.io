import { useId } from "react";
import { useDraggableWindow } from "../hooks/useDraggableWindow";

export default function HudWindow({
  title,
  subtitle,
  id,
  children,
  initialPosition = { x: 0, y: 0 },
  initialSize,
}) {
  const internalId = useId();
  const windowId = id || `window-${internalId}`;

  const { nodeRef, handleRef, resizerRef, position, size, isDragging, isResizing } = useDraggableWindow(
    initialPosition,
    initialSize,
    `hud:window:${windowId}`,
  );

  return (
    <section
      className={`hud-window ${isDragging ? "dragging" : ""} ${isResizing ? "resizing" : ""}`}
      id={windowId}
      ref={nodeRef}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        width: size?.width ? `${size.width}px` : undefined,
        height: size?.height ? `${size.height}px` : undefined,
      }}
    >
      <div className="hud-window__chrome">
        <div className="hud-window__header" ref={handleRef} title="drag to reposition">
          <div className="hud-window__title">
            <span className="led on" />
            <span className="hud-label">{title}</span>
          </div>
          <div className="hud-window__meta">
            <span className="hud-chip">{subtitle || "interactive"}</span>
            <span className="hud-chip ghost">drag / resize</span>
          </div>
        </div>
        <div className="hud-window__body">
          <div className="hud-scanline" />
          {children}
        </div>
      </div>
      <div className="hud-window__resizer" ref={resizerRef} title="resize" />
    </section>
  );
}
