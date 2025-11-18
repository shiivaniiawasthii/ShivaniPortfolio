"use client";

import MobileNav from "./MobileNav";
import { ModeToggle } from "./ToggleBtn";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active }: { active: string }) {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-3 
        bg-background/60 backdrop-blur 
        rounded-full shadow flex justify-between
        transition-colors duration-300"
      >
        {/* Left side - Logo */}
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 
            bg-primary text-primary-foreground 
            rounded-full flex items-center justify-center font-semibold"
          >
            SA
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-foreground">
              Shivani Awasthi
            </p>
            <p className="text-xs text-primary">
              Frontend Engineer
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`
                  px-3 py-2 rounded-md text-sm transition
                  ${
                    active === item.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ModeToggle />

        {/* Mobile */}
        <div className="md:hidden">
          <MobileNav active={active} />
        </div>
      </nav>
    </header>
  );
}
