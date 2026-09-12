"use client";

import { useEffect, useRef } from "react";

type Spark = { x: number; y: number; vx: number; vy: number; life: number };

export function SparkBadge() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sparks: Spark[] = [];
    let frame = 0;
    let animationFrame = 0;

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const size = Math.min(canvas.clientWidth, canvas.clientHeight);
      canvas.width = size * pixelRatio;
      canvas.height = size * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = () => {
      const size = canvas.clientWidth;
      const center = size / 2;
      context.clearRect(0, 0, size, size);
      context.globalCompositeOperation = "lighter";
      if (!reducedMotion && frame % 3 === 0) {
        const angle = Math.random() * Math.PI * 2;
        const radius = size * (0.22 + Math.random() * 0.22);
        sparks.push({ x: center + Math.cos(angle) * radius, y: center + Math.sin(angle) * radius, vx: (center - (center + Math.cos(angle) * radius)) * 0.012, vy: (center - (center + Math.sin(angle) * radius)) * 0.012, life: 1 });
      }
      for (let index = sparks.length - 1; index >= 0; index -= 1) {
        const spark = sparks[index];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.life -= reducedMotion ? 0.03 : 0.012;
        if (spark.life <= 0) sparks.splice(index, 1);
        else {
          context.fillStyle = `rgba(80, 227, 194, ${spark.life})`;
          context.fillRect(spark.x, spark.y, 1.5, 1.5);
        }
      }
      context.globalCompositeOperation = "source-over";
      context.strokeStyle = "rgba(80, 227, 194, .45)";
      context.lineWidth = 1;
      context.beginPath();
      context.arc(center, center, size * 0.27, 0, Math.PI * 2);
      context.stroke();
      context.strokeStyle = "rgba(237, 237, 237, .14)";
      context.beginPath();
      context.arc(center, center, size * 0.39, 0, Math.PI * 2);
      context.stroke();
      frame += 1;
      if (!reducedMotion) animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div className="spark-badge" aria-hidden="true"><canvas ref={canvasRef} /><span>BUILD<br /><b>USEFUL</b><br />THINGS</span></div>;
}
