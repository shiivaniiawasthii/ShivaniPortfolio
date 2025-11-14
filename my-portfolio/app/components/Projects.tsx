import { motion } from "framer-motion";
import { projects } from "../data/project";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-500">Projects</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow"
            >
              <img
                src={p.image}
                className="rounded-lg w-full h-40 object-cover"
              />

              <div className="mt-3 font-semibold text-lg">{p.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {p.description}
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  className="text-sm px-3 py-2 bg-gray-800 text-white rounded"
                >
                  GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  className="text-sm px-3 py-2 border border-pink-400 rounded"
                >
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
