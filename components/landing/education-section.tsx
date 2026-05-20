"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

const courses = [
  "Calculus",
  "Advanced Database Management Systems",
  "Artificial Intelligence",
  "Analysis of Algorithms",
  "Cybersecurity",
  "Applied Physics",
  "Computer Organization and Assembly Language",
  "Programming Fundamentals",
  "Data Structures",
  "Database Systems",
  "Digital Logic Design",
  "Discrete Mathematics",
  "Mobile Computing",
  "Object Oriented Programming",
  "Probability and Statistics",
  "Software Engineering",
  "Multivariable Calculus",
];

export function EducationSection() {
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
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary/30"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary" />
            Education
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Academic Background
          </h2>
        </div>

        {/* Education Card */}
        <div 
          className={`max-w-4xl mx-auto p-8 lg:p-12 rounded-2xl bg-card border border-border transition-all duration-700 hover:border-primary/50 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left - Main Info */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-display text-foreground mb-2">
                    BSc Computer Science
                  </h3>
                  <p className="text-lg text-primary font-medium">
                    Beaconhouse National University (BNU)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="text-foreground font-medium">2024 - 2028</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">CGPA</p>
                    <p className="text-foreground font-medium">3.07</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Currently in my second year, focusing on core computer science fundamentals 
                with a growing interest in cybersecurity, artificial intelligence, and 
                practical applications of machine learning.
              </p>
            </div>
          </div>

          {/* Coursework */}
          <div className="mt-10 pt-10 border-t border-border">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-display text-foreground">Relevant Coursework</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span 
                  key={course}
                  className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
