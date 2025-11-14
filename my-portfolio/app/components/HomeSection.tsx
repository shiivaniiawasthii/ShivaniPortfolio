"use client";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-5xl font-extrabold">
            Hi, I’m Shivani — a Frontend Engineer building interfaces.
          </h1>

          <p className="mt-4 text-pink-600 max-w-xl">
            I build beautiful, high-performance web experiences using React, Next.js & TailwindCSS.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-3 bg-pink-600 text-white rounded-lg">
              View Projects
            </a>
            <a href="/resume.pdf" download className="px-5 py-3 border rounded-lg">
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT PROFILE CARD */}
        <ProfileCard />
      </div>
    </section>
  );
}
