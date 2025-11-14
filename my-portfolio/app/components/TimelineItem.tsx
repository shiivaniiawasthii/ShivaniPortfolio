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
      className="p-4 bg-white rounded-xl shadow flex gap-4"
    >
      <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center font-semibold">
        {year}
      </div>

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-pink-600">{desc}</p>
      </div>
    </motion.div>
  );
}
