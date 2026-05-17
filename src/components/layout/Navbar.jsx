import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/lab", label: "Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
        <div>
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-wide text-white"
            onClick={() => setMenuOpen(false)}
          >
            Dzameshie Dev Hub
          </NavLink>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
            Projects • Systems • Experiments
          </p>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-5 text-sm text-slate-300">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  [
                    "transition-colors duration-200 hover:text-cyan-300",
                    isActive ? "text-cyan-300" : "text-slate-300",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a
            href="https://github.com/cedricdzameshie"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-xl px-4 py-3 text-sm font-medium transition",
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-300",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="https://github.com/cedricdzameshie"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl border border-cyan-400/30 px-4 py-3 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}