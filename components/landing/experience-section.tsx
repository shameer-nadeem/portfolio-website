"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, Award, Calendar, Camera, Shield, Brain, Palette } from "lucide-react";

const experiences = [
  {
    type: "experience",
    title: "SNF Studio Space — Owner & Studio Manager",
    organization: "Self-Employed",
    location: "Lahore, Pakistan",
    period: "2 Years",
    description: "I run my own photography studio that I started two years ago. The studio has an infinity wall and I rent it out to photographers, influencers, and brands. I handle everything myself including client bookings, managing the space, and running the Instagram page to attract the right audience.",
    highlights: ["Entrepreneurship", "Client Management", "Social Media Marketing", "Space Management"],
    icon: Camera,
  },
  {
    type: "experience",
    title: "APAC Cybersecurity Clinic — Student Fellow",
    organization: "Beaconhouse National University",
    location: "Lahore, Pakistan",
    period: "2 Semesters | Ongoing",
    description: "Currently part of Pakistan's first Google-backed cybersecurity clinic at BNU, supported by Google.org and The Asia Foundation. The program trains university students to work directly with small businesses on real cybersecurity problems. Working on risk assessments, cyber hygiene, and helping local SMEs understand how to protect themselves from cyber threats.",
    highlights: ["Google-backed Program", "Risk Assessments", "SME Security Consulting", "Cyber Hygiene"],
    icon: Shield,
  },
  {
    type: "experience",
    title: "AI Intern",
    organization: "Salesflo",
    location: "Lahore, Pakistan",
    period: "1 Month",
    description: "Interned at Salesflo where I worked on a real AI project in retail. Built and trained custom AI models using Roboflow, wrote Python automation scripts, and worked on planogram compliance tracking. It showed me how AI can actually replace manual audit processes and make faster business decisions.",
    highlights: ["Computer Vision", "Roboflow", "Python Automation", "Retail Analytics"],
    icon: Brain,
  },
  {
    type: "experience",
    title: "Junior Graphic Designer",
    organization: "Captics.co",
    location: "Lahore, Pakistan",
    period: "3 Months",
    description: "Worked as a junior graphic designer at Captics where I got hands-on experience working on real design projects and sharpened my visual communication skills.",
    highlights: ["Visual Design", "Brand Communication", "Creative Projects"],
    icon: Palette,
  },
];

function TimelineItem({ item, index, isVisible }: { item: typeof experiences[0]; index: number; isVisible: boolean }) {
  const Icon = item.icon;

  return (
    <div 
      className={`relative flex items-start gap-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line and dot */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0 z-10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        {index < experiences.length - 1 && (
          <div className="w-0.5 h-full bg-border absolute top-12 left-6" />
        )}
      </div>

      {/* Mobile icon */}
      <div className="lg:hidden w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-1">{item.organization}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary font-mono">
              <Calendar className="w-4 h-4" />
              {item.period}
            </div>
          </div>

          {/* Location */}
          <p className="text-sm text-muted-foreground mb-4">{item.location}</p>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {item.highlights.map((highlight) => (
              <span 
                key={highlight}
                className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary/30"
    >
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary" />
            Work Experience
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            My Journey
          </h2>
          <p 
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From running my own studio to working on Google-backed cybersecurity initiatives.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((item, index) => (
            <TimelineItem 
              key={`${item.title}-${index}`}
              item={item} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
