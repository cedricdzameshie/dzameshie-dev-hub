import { heroData } from "../../data/labData";
import BadgePill from "../ui/BadgePill";

export default function LabHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {heroData.eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {heroData.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {heroData.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroData.badges.map((badge) => (
              <BadgePill key={badge}>{badge}</BadgePill>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={heroData.primaryCta.href}
              className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-300"
            >
              {heroData.primaryCta.label}
            </a>

            <a
              href={heroData.secondaryCta.href}
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              {heroData.secondaryCta.label}
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroData.stats.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}