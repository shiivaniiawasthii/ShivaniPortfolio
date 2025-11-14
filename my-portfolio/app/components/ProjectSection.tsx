import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <ProjectCard 
            title="Portfolio Website" 
            desc="Next.js + animations" 
            link="#" 
          />
          <ProjectCard 
            title="Dashboard App" 
            desc="Reusable UI & charts" 
            link="#" 
          />
          <ProjectCard 
            title="E-commerce UI" 
            desc="Checkout flow & animations" 
            link="#" 
          />
        </div>
      </div>
    </section>
  );
}
