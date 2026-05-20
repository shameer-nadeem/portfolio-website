"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

export function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary/30"
    >
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
              <span className="w-8 h-px bg-primary" />
              Get in Touch
            </span>
            
            <h2 
              className={`text-4xl lg:text-5xl font-display tracking-tight mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Let&apos;s connect.
            </h2>
            
            <p 
              className={`text-lg text-muted-foreground leading-relaxed mb-12 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Whether you&apos;re interested in collaborating on a project, discussing cybersecurity, 
              or just want to say hi - I&apos;d love to hear from you!
            </p>

            {/* Contact Info */}
            <div 
              className={`space-y-6 mb-12 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a 
                href="mailto:shameernadeem1210@gmail.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">shameernadeem1210@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div 
              className={`flex gap-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {[
                { icon: Github, href: "https://github.com/shameer-nadeem", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shameer-nadeem", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form className="p-8 lg:p-10 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-display mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 text-base glow"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
