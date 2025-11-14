import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <motion.a
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      href={link}
      className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
    >
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-pink-600 mt-2">{desc}</p>
      <p className="text-xs text-gray-500 mt-4">View →</p>
    </motion.a>
  );
}
