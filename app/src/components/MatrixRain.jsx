import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return () => {};

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);
    const charset = "アカサタナハマヤラワ0123456789日田由止育宇禾水火木金土文";

    const draw = () => {
      ctx.fillStyle = "rgba(2, 3, 4, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "rgba(57, 255, 20, 0.75)";
      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;

      drops.forEach((y, idx) => {
        const text = charset[Math.floor(Math.random() * charset.length)];
        const x = idx * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > height && Math.random() > 0.975) {
          drops[idx] = 0;
        }
        drops[idx] = y + 1;
      });
      rafRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    };

    window.addEventListener("resize", onResize);
    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}
