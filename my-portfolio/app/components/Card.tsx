export default function Card({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="font-semibold mt-2">{subtitle}</p>
    </div>
  );
}
