"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "C++", level: 80 },
      { name: "Dart", level: 75 },
      { name: "Assembly (8086)", level: 65 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Artificial Intelligence", level: 75 },
      { name: "Machine Learning", level: 70 },
      { name: "Computer Vision (YOLO, Roboflow)", level: 75 },
      { name: "AI Model Training", level: 70 },
      { name: "Retail Analytics", level: 65 },
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      { name: "Incident Response", level: 70 },
      { name: "Risk Analysis", level: 75 },
      { name: "Compliance Auditing", level: 70 },
      { name: "SIEM", level: 65 },
      { name: "Cyber Hygiene", level: 80 },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "Flutter", level: 75 },
      { name: "Git/GitHub", level: 85 },
      { name: "MongoDB/NoSQL", level: 75 },
      { name: "Mobile App Development", level: 70 },
      { name: "Photography & Studio Management", level: 90 },
    ],
  },
];

function SkillBar({ skill, isVisible, delay }: { skill: { name: string; level: number }; isVisible: boolean; delay: number }) {
  return (
    <div 
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs font-mono text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay + 200}ms`
          }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, index, isVisible }: { category: typeof skillCategories[0]; index: number; isVisible: boolean }) {
  return (
    <div 
      className={`p-6 lg:p-8 rounded-2xl bg-card border border-border transition-all duration-700 hover:border-primary/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl font-display text-foreground mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-primary" />
        {category.title}
      </h3>
      <div className="space-y-5">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar 
            key={skill.name} 
            skill={skill} 
            isVisible={isVisible}
            delay={index * 150 + skillIndex * 100}
          />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary" />
            Technical Skills
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            My Tech Stack
          </h2>
          <p 
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Technologies and tools I use to bring ideas to life and solve real-world problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title} 
              category={category} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Additional skills */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm text-muted-foreground mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Structures",
              "Algorithms",
              "Object Oriented Programming",
              "Digital Logic Design",
              "Probability & Statistics",
              "Planogram Compliance",
            ].map((item) => (
              <span 
                key={item}
                className="px-4 py-2 text-sm bg-card border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
