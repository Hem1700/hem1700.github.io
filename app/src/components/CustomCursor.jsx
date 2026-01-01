import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return () => {};

    let x = 0;
    let y = 0;
    let raf = null;

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
    };

    const animate = () => {
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cursor-w" aria-hidden="true">
      <div ref={cursorRef} className="cursor-dot" />
    </div>
  );
}
