import { motion } from "framer-motion";
import { projects } from "../data/project";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary">Projects</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="p-4 rounded-xl shadow bg-card text-card-foreground"
            >
              <img
                src={p.image}
                className="rounded-lg w-full h-40 object-cover"
              />

              <div className="mt-3 font-semibold text-lg">{p.title}</div>
              <div className="text-sm text-muted-foreground">
                {p.description}
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  className="text-sm px-3 py-2 rounded bg-primary text-primary-foreground"
                >
                  GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  className="text-sm px-3 py-2 rounded border border-primary"
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
