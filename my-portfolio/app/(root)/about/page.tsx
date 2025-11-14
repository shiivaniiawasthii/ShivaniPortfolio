import Timeline from "@/app/components/TimelineItem";

export default function About() {
  return (
    <main className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-gray-700 max-w-2xl">
        Hi, I am Shivani Awasthi, a frontend developer passionate about
        building beautiful user experiences...
      </p>

      <Timeline year={""} title={""} desc={""} />
    </main>
  );
}
