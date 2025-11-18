import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 bg-section-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-5xl font-extrabold text-foreground">
            Hi, I’m{" "}
            <span className="text-primary">
              Shivani
            </span>
          </h1>

          <p className="mt-4 text-foreground/80">
            Frontend Engineer crafting delightful interfaces with React, Next,
            Tailwind & animations.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground transition-colors"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg border border-primary text-primary transition-colors"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE / PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-72 bg-card rounded-3xl shadow-lg"></div>
        </motion.div>
      </div>
    </section>
  );
}
