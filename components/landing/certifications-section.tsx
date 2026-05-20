"use client";

import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, Download, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    platform: "Coursera",
    issuedDate: "Aug 2025",
    credentialId: "IK0NN1EBMZQX",
    verifyUrl: "https://coursera.org/verify/IK0NN1EBMZQX",
    certificatePdf: "/certificates/foundations-of-cybersecurity.pdf",
    description: "Core concepts including threat detection, security controls, risk management, and protecting systems and data. A solid foundation for understanding how the security world works.",
    skills: ["Threat Detection", "Security Controls", "Risk Management", "Data Protection"],
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    platform: "Coursera",
    issuedDate: "Sep 2025",
    credentialId: "ABGWZQHD7Q14",
    verifyUrl: "https://coursera.org/verify/ABGWZQHD7Q14",
    certificatePdf: "/certificates/manage-security-risks.pdf",
    description: "Advanced security frameworks and controls, risk identification and analysis, threat response, compliance auditing, SIEM tools, and incident response skills applied in the APAC Cybersecurity Clinic.",
    skills: ["Security Frameworks", "Compliance Auditing", "SIEM Tools", "Incident Response"],
  },
];

function CertificationCard({ cert, index, isVisible }: { cert: typeof certifications[0]; index: number; isVisible: boolean }) {
  return (
    <div 
      className={`group p-6 lg:p-8 rounded-2xl bg-card border border-border transition-all duration-700 hover:border-primary/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
          <Award className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl lg:text-2xl font-display text-foreground group-hover:text-primary transition-colors mb-1">
            {cert.title}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="w-4 h-4" />
            <span>{cert.issuer}</span>
            <span className="text-border">|</span>
            <span>{cert.platform}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6">
        {cert.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cert.skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Issued {cert.issuedDate}</span>
          </div>
          <span className="text-border">|</span>
          <span className="font-mono text-xs">ID: {cert.credentialId}</span>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-border hover:border-primary hover:text-primary"
            asChild
          >
            <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Verify
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-border hover:border-primary hover:text-primary"
            asChild
          >
            <a href={cert.certificatePdf} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              View PDF
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function CertificationsSection() {
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
      id="certifications"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary" />
            Certifications
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Credentials & Achievements
          </h2>
          <p 
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Professional certifications validating my cybersecurity knowledge and skills.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={cert.credentialId} 
              cert={cert} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Currently Pursuing */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm text-muted-foreground mb-4">Continuing to learn and grow in cybersecurity</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Google Cybersecurity Certificate", "CompTIA Security+", "Ethical Hacking"].map((item) => (
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
