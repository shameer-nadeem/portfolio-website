"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const roles = ["build", "secure", "innovate", "code"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-primary/30"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-primary/30"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary">
            <span className="w-8 h-px bg-primary" />
            Computer Science Student | Studio Rental Entrepreneur
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-[clamp(3rem,10vw,8rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-foreground">Hi, I&apos;m</span>
            <span className="block text-primary text-glow">Shameer Nadeem</span>
            <span className="block text-foreground/80">
              I{" "}
              <span className="relative inline-block">
                <span 
                  key={roleIndex}
                  className="inline-flex text-primary"
                >
                  {roles[roleIndex].split("").map((char, i) => (
                    <span
                      key={`${roleIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30" />
              </span>
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p 
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A second year Computer Science student passionate about solving problems with code, 
            exploring cybersecurity, and applying AI to practical challenges.
          </p>
          
          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-full group glow"
              asChild
            >
              <a href="#experience">
                View Experience
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-base rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
      </div>
      
      {/* Social links */}
      <div 
        className={`absolute bottom-24 left-6 lg:left-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6">
          <a 
            href="https://github.com/shameer-nadeem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/shameer-nadeem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:shameernadeem1210@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <div className="w-px h-16 bg-primary/30 mx-auto" />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono">Scroll</span>
          <div className="w-px h-8 bg-primary/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
