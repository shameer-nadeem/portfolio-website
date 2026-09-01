"use client";

import { useEffect, useRef } from "react";

export function WireframeCube() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let rotation = 0;
    let targetX = 0.35;
    let targetY = -0.25;
    let currentX = targetX;
    let currentY = targetY;
    const points = [-1, 1].flatMap((z) => [-1, 1].flatMap((y) => [-1, 1].map((x) => ({ x, y, z }))));
    const edges = [[0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]];
    const resize = () => { const dpr = Math.min(window.devicePixelRatio, 2); canvas.width = canvas.clientWidth * dpr; canvas.height = canvas.clientHeight * dpr; context.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const pointer = (event: PointerEvent) => { targetX = (event.clientX / window.innerWidth - 0.5) * 1.4; targetY = (event.clientY / window.innerHeight - 0.5) * -1.1; };
    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      context.clearRect(0, 0, w, h);
      currentX += (targetX - currentX) * 0.04; currentY += (targetY - currentY) * 0.04;
      if (!reduced) rotation += 0.006;
      const projected = points.map((p) => { const y = p.y * Math.cos(currentY) - p.z * Math.sin(currentY); const z = p.y * Math.sin(currentY) + p.z * Math.cos(currentY); const x = p.x * Math.cos(rotation + currentX) - z * Math.sin(rotation + currentX); const depth = p.x * Math.sin(rotation + currentX) + z * Math.cos(rotation + currentX); const scale = 110 / (depth + 4); return { x: w * 0.5 + x * scale, y: h * 0.5 + y * scale }; });
      context.lineWidth = 1.25; context.strokeStyle = "rgba(74, 222, 171, .75)"; context.shadowColor = "rgba(74, 222, 171, .65)"; context.shadowBlur = 18;
      edges.forEach(([a,b]) => { context.beginPath(); context.moveTo(projected[a].x, projected[a].y); context.lineTo(projected[b].x, projected[b].y); context.stroke(); });
      context.shadowBlur = 0;
      if (!reduced) frame = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", resize); window.addEventListener("pointermove", pointer); resize(); draw();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", pointer); };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="hidden md:block absolute inset-0 h-full w-full pointer-events-none" />;
}
