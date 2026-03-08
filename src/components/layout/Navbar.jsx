import { NavLink } from "react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/lab", label: "Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
        <div>
          <NavLink to="/" className="text-lg font-semibold tracking-wide text-white">
            Dzameshie Dev Hub
          </NavLink>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
            Projects • Systems • Experiments
          </p>
        </div>

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
            href="https://github.com/YOUR-GITHUB-USERNAME"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}