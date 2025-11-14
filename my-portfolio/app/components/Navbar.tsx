"use client";

import MobileNav from "./MobileNav";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];

export default function Navbar({ active }: { active: string }) {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-3 bg-white/60 backdrop-blur rounded-full shadow flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold">
            SA
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold">Shivani Awasthi</p>
            <p className="text-xs text-pink-600">Frontend Engineer</p>
          </div>
        </div>

        <ul className="hidden md:flex gap-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-md text-sm ${
                  active === item.id ? "bg-pink-600 text-white" : "hover:bg-pink-100"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <MobileNav active={active} />
        </div>
      </nav>
    </header>
  );
}
