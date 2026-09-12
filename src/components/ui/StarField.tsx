import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number; // current alpha phase
  s: number; // speed of alpha change
}

const STAR_COUNT = 160;

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let frameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const seedStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.7,
        r: Math.random() * 1.3 + 0.3,
        a: Math.random(),
        s: Math.random() * 0.015 + 0.003,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#f2eefc";
      for (const star of stars) {
        star.a += star.s;
        if (star.a > 1 || star.a < 0) star.s *= -1;
        ctx.globalAlpha = Math.abs(Math.sin(star.a));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      frameId = requestAnimationFrame(draw);
    };

    resize();
    seedStars();
    draw();

    const handleResize = () => {
      resize();
      seedStars();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
    />
  );
}
