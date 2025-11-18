"use client";

import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function MobileNav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border border-border rounded-md bg-card text-card-foreground"
      >
        Menu
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-card rounded-lg shadow py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md ${
                active === item.id ? "bg-accent text-accent-foreground font-semibold" : ""
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
