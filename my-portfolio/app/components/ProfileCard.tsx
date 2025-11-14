"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="p-4 bg-white rounded-2xl shadow-lg max-w-sm mx-auto">
        
        <div className="w-80 h-80 rounded-full overflow-hidden mx-auto relative">
          <Image
            src="/profile.jpeg"
            alt="Profile Image"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-center font-semibold mt-4">Design + Code</h3>
        <p className="mt-2 text-center text-pink-600">
          I combine design thinking with clean code to deliver great UI.
        </p>
      </div>
    </motion.div>
  );
}
