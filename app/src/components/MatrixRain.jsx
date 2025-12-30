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
    let drops = Array.from({ length: columns }, () => ({ y: Math.random() * 20, speed: 1 + Math.random() * 2 }));
    const charset = "アカサタナハマヤラワ0123456789日田由止育宇禾水火木金土文ﾊﾐﾋﾑﾍﾎｱｶｻﾀﾅﾊﾏ";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;

      drops.forEach((drop, idx) => {
        const text = charset[Math.floor(Math.random() * charset.length)];
        const x = idx * fontSize;
        const y = drop.y * fontSize;

        // head
        ctx.fillStyle = "rgba(57, 255, 20, 0.9)";
        ctx.fillText(text, x, y);
        // tail glow
        ctx.fillStyle = "rgba(57, 255, 20, 0.25)";
        ctx.fillText(text, x, y - fontSize);

        drop.y += drop.speed;
        if (drop.y * fontSize > height && Math.random() > 0.96) {
          drop.y = 0;
          drop.speed = 1 + Math.random() * 2;
        }
      });
      rafRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => ({ y: Math.random() * 20, speed: 1 + Math.random() * 2 }));
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
