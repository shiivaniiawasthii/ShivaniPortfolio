import TimelineItem from "./TimelineItem";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 bg-section text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Timeline</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <TimelineItem year="2025" title="Frontend Engineer at Acme" desc="UI revamp & accessibility improvements." />
          <TimelineItem year="2024" title="Freelancer" desc="Landing pages & dashboards for startups." />
          <TimelineItem year="2023" title="UI/UX Bootcamp" desc="Design + frontend training." />
          <TimelineItem year="2022" title="Started Web Dev" desc="First React apps & deep dive into CSS." />
        </div>
      </div>
    </section>
  );
}
