"use client";

import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];

export default function MobileNav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 border rounded-md">
        Menu
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 text-sm ${
                active === item.id ? "bg-pink-100 font-semibold" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
