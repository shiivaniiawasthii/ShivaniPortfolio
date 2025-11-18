"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/About";
import SkillsSection from "./components/SkillsSection";
import TimelineSection from "./components/TimeLineSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

export default function Page() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section")
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar active={active} />

      <main className="pt-10">
        <HomeSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="py-10 text-center text-muted text-sm">
        © {new Date().getFullYear()} Shivani Awasthi • Built with Next.js
      </footer>
    </div>
  );
}
