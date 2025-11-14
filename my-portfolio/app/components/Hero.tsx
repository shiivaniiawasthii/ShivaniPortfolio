import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-5xl font-extrabold">
            Hi, I’m <span className="text-pink-500">Shivani</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Frontend Engineer crafting delightful interfaces with React, Next,
            Tailwind & animations.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg"
            >
              View Projects
            </a>
            <a
              className="border border-pink-400 px-6 py-3 rounded-lg"
              href="/resume.pdf"
              download
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-full h-72 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 rounded-3xl shadow-lg"></div>
        </motion.div>
      </div>
    </section>
  );
}
