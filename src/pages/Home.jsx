import { NavLink } from "react-router";
import {
  Cpu,
  Layers,
  Boxes,
  Wrench,
  Atom,
  Wind,
  Server,
  Container,
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-300">
            Dzameshie Dev Hub
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            A developer hub for projects, infrastructure, and continuous growth.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Welcome to my corner of the internet — a place where I build
            projects, experiment with infrastructure, and grow through
            real-world systems and applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/projects"
              className="rounded-xl border border-cyan-400/30 px-6 py-3 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              View Projects
            </NavLink>

            <NavLink
              to="/lab"
              className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Explore the Lab
            </NavLink>

            <a
              href="https://github.com/YOUR-GITHUB-USERNAME"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan-400/30 px-6 py-3 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
              <Cpu size={14} />
              Current Focus
            </div>

            <h3 className="mt-3 text-lg font-semibold text-white">
              Frontend Systems
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Polished interfaces, stronger architecture, and steady full-stack
              growth.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
              <Layers size={14} />
              Core Stack
            </div>

            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Atom size={16} className="text-cyan-300" />
                <span>React</span>
              </li>
              <li className="flex items-center gap-3">
                <Wind size={16} className="text-cyan-300" />
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-3">
                <Server size={16} className="text-cyan-300" />
                <span>Node.js</span>
              </li>
              <li className="flex items-center gap-3">
                <Container size={16} className="text-cyan-300" />
                <span>Docker</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
              <Boxes size={14} />
              Lab Environment
            </div>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              <li>Self-hosted development environment</li>
              <li>Raspberry Pi homelab systems</li>
              <li>Dockerized service stacks</li>
              <li>Infrastructure experimentation</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
              <Wrench size={14} />
              Current Build
            </div>

            <h3 className="mt-3 text-lg font-semibold text-white">
              Bakery Ordering Platform
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Active development focused on customer ordering flow, clean UI,
              and real small-business functionality.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 pt-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Selected projects and systems work.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              A snapshot of the applications and infrastructure-focused work
              that best reflects how I build, learn, and solve real problems.
            </p>
          </div>

          <NavLink
            to="/projects"
            className="inline-flex w-fit rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            View All Projects
          </NavLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Application
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Job Tracker App
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A workflow-focused application for tracking job applications,
              interview stages, and follow-ups through a cleaner and more
              organized interface.
            </p>
            <p className="mt-4 text-sm text-cyan-300">
              React • Tailwind • Node.js
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Client Project
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Bakery Ordering Platform
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A customer-focused ordering experience being built for a real
              bakery, with emphasis on product browsing, inquiry flow, and clean
              small-business UX.
            </p>
            <p className="mt-4 text-sm text-cyan-300">
              React • Tailwind • UI/UX
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Infrastructure
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Self-Hosted Infrastructure Lab
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A hands-on self-hosted environment for experimenting with
              Dockerized services, Raspberry Pi systems, routing, and practical
              infrastructure workflows.
            </p>
            <p className="mt-4 text-sm text-cyan-300">
              Docker • Linux • Raspberry Pi • Cloudflare
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}