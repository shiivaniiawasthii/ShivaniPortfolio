import { motion } from "framer-motion";

export default function TimelineItem({
  year,
  title,
  desc,
}: {
  year: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        p-4 rounded-xl shadow flex gap-4
        bg-card text-card-foreground
      "
    >
      {/* Year Circle */}
      <div
        className="
          w-12 h-12 rounded-full flex items-center justify-center font-semibold
          bg-primary text-primary-foreground
        "
      >
        {year}
      </div>

      {/* Text Section */}
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
  );
}
