import Card from "./Card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold">About</h2>

        <p className="mt-4 text-pink-600">
          I'm a frontend developer focused on clean UI, accessibility & animations.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card title="Location" subtitle="India" />
          <Card title="Experience" subtitle="3+ years" />
          <Card title="Open to" subtitle="Full-time / Contract" />
        </div>
      </div>
    </section>
  );
}
