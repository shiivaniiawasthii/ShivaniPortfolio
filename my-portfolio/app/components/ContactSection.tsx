"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-section text-foreground transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Contact</h2>

        <motion.form
          className="grid md:grid-cols-2 gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <input
            placeholder="Your name"
            className="p-3 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:border-foreground transition"
          />

          <input
            placeholder="Your email"
            className="p-3 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:border-foreground transition"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="p-3 bg-background border border-foreground/20 rounded-lg md:col-span-2 focus:outline-none focus:border-foreground transition"
          />

          <div className="md:col-span-2 flex gap-4">
            <button
              type="submit"
              className="px-5 py-3 bg-card text-foreground border border-foreground/20 rounded-lg hover:opacity-80 transition"
            >
              Send
            </button>

            <a
              href="mailto:hello@example.com"
              className="px-5 py-3 bg-background text-foreground border border-foreground/20 rounded-lg hover:bg-card transition"
            >
              Email me
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
