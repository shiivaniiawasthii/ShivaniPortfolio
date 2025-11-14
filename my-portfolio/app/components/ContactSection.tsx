"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Contact</h2>

        <motion.form 
          className="grid md:grid-cols-2 gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <input 
            placeholder="Your name" 
            className="p-3 border rounded-lg"
          />
          <input 
            placeholder="Your email" 
            className="p-3 border rounded-lg"
          />
          <textarea 
            rows={5} 
            placeholder="Message" 
            className="p-3 border rounded-lg md:col-span-2"
          />

          <div className="md:col-span-2 flex gap-4">
            <button 
              type="submit" 
              className="px-5 py-3 bg-pink-600 text-white rounded-lg"
            >
              Send
            </button>
            <a 
              href="mailto:hello@example.com" 
              className="px-5 py-3 border rounded-lg"
            >
              Email me
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
