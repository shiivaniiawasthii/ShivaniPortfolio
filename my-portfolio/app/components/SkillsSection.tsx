import Skill from "./Skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Skill name="React" level={90} />
          <Skill name="Next.js" level={85} />
          <Skill name="TypeScript" level={80} />
          <Skill name="TailwindCSS" level={88} />
          <Skill name="Framer Motion" level={70} />
          <Skill name="Testing" level={60} />
        </div>
      </div>
    </section>
  );
}
