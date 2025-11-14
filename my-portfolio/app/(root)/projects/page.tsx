import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Amplifai Studio",
      description: "AI-powered innovation management platform built in Next.js",
      link: "https://github.com/",
    },
    {
      title: "Portfolio Site",
      description: "Personal site to showcase skills and projects",
      link: "https://github.com/",
    },
  ];

  return (
    <main className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </main>
  );
}
