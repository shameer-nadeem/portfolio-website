"use client";

import { useEffect } from "react";

export function InteractionLayer() {
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal-on-scroll, .skill-fill").forEach((node) => reveal.observe(node));
    return () => reveal.disconnect();
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".glass-panel, .tilt-card"));
    const handlers = cards.map((card) => {
      const move = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateY(-2px)`;
        card.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
        card.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`);
      };
      const leave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      return { card, move, leave };
    });
    return () => handlers.forEach(({ card, move, leave }) => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", leave);
    });
  }, []);

  return null;
}
