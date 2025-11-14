"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/About";
import SkillsSection from "./components/SkillsSection";
import TimelineSection from "./components/TimeLineSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import ResumeSection from "./components/ResumeSection";

export default function Page() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section")) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 text-pink-900">
      <Navbar active={active} />

      <main className="pt-10">
        <HomeSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <ResumeSection />
      </main>

      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Shivani Awasthi • Built with Next.js
      </footer>
    </div>
  );
}
