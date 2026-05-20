import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { EducationSection } from "@/components/landing/education-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { SkillsSection } from "@/components/landing/skills-section";
import { ExperienceSection } from "@/components/landing/experience-section";
import { CertificationsSection } from "@/components/landing/certifications-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
