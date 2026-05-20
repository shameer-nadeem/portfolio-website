"use client";

import { useEffect, useRef, useState } from "react";
import { Construction, Rocket, Code2, Sparkles } from "lucide-react";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary" />
            Featured Work
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Projects
          </h2>
        </div>

        {/* Coming Soon Card */}
        <div 
          className={`relative overflow-hidden rounded-2xl border border-border bg-card p-12 lg:p-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          </div>

          {/* Animated grid background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute h-px bg-primary/50"
                style={{
                  top: `${16.67 * (i + 1)}%`,
                  left: 0,
                  right: 0,
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute w-px bg-primary/50"
                style={{
                  left: `${12.5 * (i + 1)}%`,
                  top: 0,
                  bottom: 0,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Construction className="w-12 h-12 text-primary" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center animate-bounce">
                <Code2 className="w-4 h-4 text-accent" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center animate-pulse">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-3xl lg:text-4xl font-display text-foreground mb-4">
              Projects Coming Soon
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              I&apos;m currently working on some exciting projects that I can&apos;t wait to share. 
              As a student, I&apos;m building my portfolio with meaningful work in cybersecurity, 
              AI/ML, and software development.
            </p>

            {/* What to expect */}
            <div className="grid sm:grid-cols-3 gap-6 w-full max-w-3xl">
              {[
                { icon: "shield", label: "Cybersecurity Tools", desc: "Security-focused applications" },
                { icon: "brain", label: "AI/ML Projects", desc: "Computer vision & automation" },
                { icon: "code", label: "Full-Stack Apps", desc: "Web & mobile development" },
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className={`p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <p className="text-sm font-medium text-foreground mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
              <Rocket className="w-4 h-4 text-primary" />
              <span>Check back soon or connect with me on</span>
              <a 
                href="https://github.com/shameer-nadeem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
