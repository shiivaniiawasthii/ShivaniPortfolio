"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="p-4 bg-card text-card-foreground rounded-2xl shadow-lg max-w-sm mx-auto">

        {/* Profile Image */}
        <div className="w-80 h-80 rounded-full overflow-hidden mx-auto relative">
          <Image
            src="/profile.jpeg"
            alt="Profile Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <h3 className="text-center font-semibold mt-4 text-foreground">
          Design + Code
        </h3>

        <p className="mt-2 text-center text-primary">
          I combine design thinking with clean code to deliver great UI.
        </p>
      </div>
    </motion.div>
  );
}
