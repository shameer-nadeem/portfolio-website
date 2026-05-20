"use client";

import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/shameer-nadeem", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shameer-nadeem", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/shameer.nadeem/", icon: Instagram },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-border">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-10 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">
                  <span className="text-primary">{"<"}</span>SN<span className="text-primary">{"/>"}</span>
                </span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Computer Science student at BNU passionate about cybersecurity, AI, and building innovative solutions. 
                Also running SNF Studio Space on the side.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                      aria-label={link.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-foreground">Navigation</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-medium mb-6 text-foreground">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:shameernadeem1210@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Email Me
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/shameer-nadeem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/snfstudiospace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    SNF Studio Space
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-primary" /> using Next.js & Tailwind
          </p>

          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Shameer Nadeem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
