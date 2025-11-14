export default function Skill({ name, level }: { name: string; level: number }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <div className="flex justify-between">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{level}%</p>
      </div>

      <div className="mt-3 bg-pink-200 rounded-full h-2 overflow-hidden">
        <div className="bg-pink-600 h-full rounded-full" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
