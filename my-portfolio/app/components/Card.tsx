export default function Card({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-4 bg-card text-card-foreground rounded-xl shadow transition-colors duration-300">
      <p className="text-sm opacity-80">{title}</p>
      <p className="font-semibold mt-2">{subtitle}</p>
    </div>
  );
}
