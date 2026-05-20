"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <div 
            className={`relative h-[400px] lg:h-[500px] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <AnimatedTetrahedron />
          </div>
          
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
              <span className="w-8 h-px bg-primary" />
              About Me
            </span>
            
            <h2 
              className={`text-4xl lg:text-5xl font-display tracking-tight mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Driven by curiosity,
              <br />
              <span className="text-primary">building for the future.</span>
            </h2>
            
            <div 
              className={`space-y-6 text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p>
                I&apos;m a second year Computer Science student passionate about solving problems 
                with code, exploring cybersecurity, and applying AI to practical challenges.
              </p>
              <p>
                Outside of academics, I manage an independent studio space where I handle bookings, 
                space management, social media and production. This entrepreneurial experience has 
                taught me valuable skills in business operations and client management.
              </p>
              <p>
                When I&apos;m not coding or studying, you can find me at my photography studio space.{" "}
                <a 
                  href="https://www.instagram.com/snfstudiospace" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @snfstudiospace
                </a>
              </p>
            </div>
            
            {/* Quick facts */}
            <div 
              className={`grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-border transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {[
                { label: "Focus Area", value: "Cybersecurity & AI" },
                { label: "Location", value: "Lahore, Pakistan" },
                { label: "Languages", value: "Python, C++, Dart" },
                { label: "Side Hustle", value: "SNF Studio Space" },
              ].map((fact) => (
                <div key={fact.label}>
                  <p className="text-xs font-mono text-primary mb-1">{fact.label}</p>
                  <p className="text-foreground font-medium">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
