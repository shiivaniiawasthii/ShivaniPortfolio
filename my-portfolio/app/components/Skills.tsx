export default function Skill({ name, level }: { name: string; level: number }) {
  return (
    <div className="p-4 rounded-xl shadow bg-card text-card-foreground">
      <div className="flex justify-between">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{level}%</p>
      </div>

      {/* Track */}
      <div className="mt-3 h-2 rounded-full overflow-hidden bg-secondary">
        {/* Progress Bar */}
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
