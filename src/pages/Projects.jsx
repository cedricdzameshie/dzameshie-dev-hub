import { Link } from "react-router";
import { useRef, useState } from "react";
import {
  Search,
  Boxes,
  Wrench,
  Bug,
  Sparkles,
  ArrowDown,
  Github,
  Monitor,
} from "lucide-react";

/* =========================
   COMPONENT: PROCESS STEP
========================= */
function ProcessStep({ icon, title, text }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </article>
  );
}

/* =========================
   COMPONENT: TIMELINE STEP
========================= */
function TimelineStep({ icon, label, title, children, isLast = false }) {
  return (
    <div className="relative pl-14">
      {!isLast && (
        <div className="absolute left-[19px] top-12 h-[calc(100%+2rem)] w-px bg-white/10" />
      )}

      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-cyan-300">
        {icon}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          {label}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        <div className="mt-3 space-y-4 text-sm leading-7 text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}

/* =========================
   PAGE: PROJECTS
========================= */
export default function Projects() {
  const [activeProject, setActiveProject] = useState("job-tracker");
  const storyTopRef = useRef(null);

  /* =========================
     HANDLER: PROJECT SWITCH
  ========================= */
  const handleProjectChange = (project) => {
    setActiveProject(project);

    requestAnimationFrame(() => {
      storyTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div className="space-y-20">
      {/* =========================
          SECTION: PROJECTS HERO
      ========================= */}
      <section className="max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-300">
          Projects
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Projects built through experimentation, iteration, and real problem solving.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I learn by building real systems. Each project starts with an idea,
          moves through experimentation and debugging, and ends with a working
          solution and lessons learned along the way.
        </p>

        <div className="mt-8">
          <a
            href="https://github.com/cedricdzameshie"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            <Github size={16} />
            View GitHub
          </a>
        </div>
      </section>

      {/* =========================
          SECTION: HOW I BUILD SOFTWARE
      ========================= */}
      <section className="border-t border-white/10 pt-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            How I Build Software
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            My process from idea to working system.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            I usually start simple, break the problem into smaller pieces, build
            the first version, debug what is not working, and refine the
            experience as I learn more about the project.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <ProcessStep
            icon={<Search size={18} />}
            title="Understand"
            text="Figure out what the project actually needs to do before adding features."
          />
          <ProcessStep
            icon={<Boxes size={18} />}
            title="Break Down"
            text="Separate the project into smaller parts so the problem feels manageable."
          />
          <ProcessStep
            icon={<Wrench size={18} />}
            title="Build"
            text="Create a first working version before worrying too much about polish."
          />
          <ProcessStep
            icon={<Bug size={18} />}
            title="Debug"
            text="Fix the parts that break, behave strangely, or get more complex than expected."
          />
          <ProcessStep
            icon={<Sparkles size={18} />}
            title="Improve"
            text="Refine the structure, clean up the UI, and make the experience better."
          />
        </div>
      </section>

      {/* =========================
          SECTION: PROJECT STORIES
      ========================= */}
      <section className="border-t border-white/10 pt-20">
        {/* Scroll target for project switching */}
        <div ref={storyTopRef} className="scroll-mt-28" />

        {/* =========================
            SUBSECTION: PROJECT STORIES INTRO
        ========================= */}
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Project Stories
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            A closer look at how I build through experimentation.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300">
            This section is where I go deeper into the thinking behind each
            project — the original idea, what seemed simple at first, what got
            difficult, how I worked through it, and what I learned along the
            way.
          </p>
        </div>

        {/* =========================
            SUBSECTION: PROJECT SELECTOR
        ========================= */}
        <div className="sticky top-20 z-30 mt-10 border-y border-white/10 bg-slate-950/85 py-4 backdrop-blur">
          <div className="grid gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => handleProjectChange("job-tracker")}
              className={`rounded-2xl p-4 text-left transition ${
                activeProject === "job-tracker"
                  ? "border border-cyan-400/30 bg-cyan-400/10"
                  : "border border-white/10 bg-white/[0.03] hover:border-cyan-400/30 hover:bg-white/[0.05]"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.25em] ${
                  activeProject === "job-tracker"
                    ? "text-cyan-300"
                    : "text-slate-400"
                }`}
              >
                Application
              </p>
              <h3 className="mt-2 text-base font-semibold text-white">
                Job Tracker App
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Workflow tracking, filters, status updates, and practical React
                problem solving.
              </p>
            </button>

            <button
              type="button"
              onClick={() => handleProjectChange("bakery")}
              className={`rounded-2xl p-4 text-left transition ${
                activeProject === "bakery"
                  ? "border border-cyan-400/30 bg-cyan-400/10"
                  : "border border-white/10 bg-white/[0.03] hover:border-cyan-400/30 hover:bg-white/[0.05]"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.25em] ${
                  activeProject === "bakery" ? "text-cyan-300" : "text-slate-400"
                }`}
              >
                Client Project
              </p>
              <h3 className="mt-2 text-base font-semibold text-white">
                Bakery Ordering Platform
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Product presentation, pricing logic, and a real business use case.
              </p>
            </button>

            <button
  type="button"
  onClick={() => handleProjectChange("lab")}
  className={`rounded-2xl p-4 text-left transition ${
    activeProject === "lab"
      ? "border border-cyan-400/30 bg-cyan-400/10"
      : "border border-white/10 bg-white/[0.03] hover:border-cyan-400/30 hover:bg-white/[0.05]"
  }`}
>
  <p
    className={`text-xs uppercase tracking-[0.25em] ${
      activeProject === "lab" ? "text-cyan-300" : "text-slate-400"
    }`}
  >
    Infrastructure
  </p>
  <h3 className="mt-2 text-base font-semibold text-white">
    Self-Hosted Lab
  </h3>
  <p className="mt-2 text-sm leading-6 text-slate-300">
    Docker, Raspberry Pi, self-hosting, and hands-on systems learning.
  </p>
</button>
          </div>
        </div>

        {/* =========================
            PROJECT BLOCK: JOB TRACKER
        ========================= */}
        {activeProject === "job-tracker" && (
  <div key="job-tracker" className="mt-12 animate-[fadeIn_.4s_ease]">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  Project Story
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Job Tracker App
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  A lightweight application built to track job applications by
                  company, role, date applied, and status, while helping me
                  learn how to structure a practical React workflow.
                </p>
                <p className="mt-4 text-sm text-cyan-300">
                  React • Tailwind CSS • Node.js
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/cedricdzameshie/job-tracker-app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-12">
                <TimelineStep
                  icon={<Search size={16} />}
                  label="Idea"
                  title="A simple tracker that became more involved than I expected."
                >
                  <p>
                    I wanted a simple place to keep track of the jobs I applied
                    to without having to mentally juggle company names,
                    positions, dates, and application statuses.
                  </p>
                  <p>
                    The original idea sounded straightforward: add a company,
                    role, date, and status, then be able to look back at
                    everything in one place.
                  </p>
                </TimelineStep>

                <TimelineStep
                  icon={<Boxes size={16} />}
                  label="Build"
                  title="Starting with the core workflow first."
                >
                  <p>
                    I began with two main areas: a form for adding new
                    applications and a list for showing the applications already
                    entered.
                  </p>
                  <p>
                    Once that was working, I started layering in filters,
                    sorting, editing, and status tracking while trying to keep
                    the interface simple.
                  </p>
                </TimelineStep>

                <TimelineStep
                  icon={<Bug size={16} />}
                  label="Challenges"
                  title="The details were trickier than they looked."
                >
                  <p>
                    At first I thought this project would be pretty simple, but
                    once I started adding filters, edit states, and keeping the
                    form and list working together, I ran into more complexity
                    than I expected.
                  </p>
                  <p>
                    Small things that looked easy on paper needed more careful
                    structure once the UI had to react to updates correctly.
                  </p>
                </TimelineStep>

                <TimelineStep
                  icon={<Wrench size={16} />}
                  label="Solutions"
                  title="Breaking the problem into smaller pieces."
                >
                  <p>
                    When parts of the interface stopped behaving the way I
                    expected, I stepped back and worked through one behavior at
                    a time instead of trying to fix everything at once.
                  </p>
                  <p>
                    I used VS Code debugging, React documentation, and small
                    experiments with component structure to figure out what was
                    affecting the UI.
                  </p>
                </TimelineStep>

                <TimelineStep
                  icon={<Sparkles size={16} />}
                  label="Outcome"
                  title="A practical project that taught me a lot."
                  isLast
                >
                  <p>
                    The app now lets users add applications, track statuses,
                    filter results, sort entries, and edit or remove items
                    through a cleaner workflow.
                  </p>
                  <p>
                    More importantly, it taught me that even simple ideas become
                    more complex once real interactions are involved, and that
                    building is the fastest way for me to learn.
                  </p>
                </TimelineStep>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                    <Monitor size={14} />
                    Project Preview
                  </div>

                  <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full"
                    >
                      <source src="/job-tracker-demo2.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Short demo showing how applications can be added, edited,
                    and filtered inside the Job Tracker interface.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    What I Learned
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li>Even simple ideas can hide more complexity than expected.</li>
                    <li>Breaking a problem into smaller parts makes debugging easier.</li>
                    <li>Working software teaches me faster than theory alone.</li>
                    <li>Functionality first, refinement second, works well for me.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Tools Used
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li>VS Code debugging</li>
                    <li>React documentation</li>
                    <li>Component experimentation</li>
                    <li>Iterative testing and refinement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center">
              <ArrowDown className="text-slate-500" size={22} />
            </div>
          </div>
        )}

        {/* =========================
            PROJECT BLOCK: BAKERY
        ========================= */}
        {activeProject === "bakery" && (
  <div key="bakery" className="mt-12 animate-[fadeIn_.4s_ease]">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  Project Story
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Bakery Ordering Platform
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  A customer-facing website built for a real home bakery
                  business. The goal was to present products in a more polished
                  way than social media and create a clearer experience for
                  customers browsing the menu.
                </p>
                <p className="mt-4 text-sm text-cyan-300">
                  React • Tailwind CSS • UI / UX Design
                </p>

                <div className="mt-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  Actively Being Developed
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/cedricdzameshie/BakeryBulochka"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-12">
                <TimelineStep
                  icon={<Search size={16} />}
                  label="Idea"
                  title="A dedicated space for the bakery."
                >
                  <p>
                    My wife runs a small bakery and most of her work was being
                    shared through Instagram posts. While that works for
                    exposure, I felt her products deserved a space where
                    everything could be displayed more clearly and professionally.
                  </p>
                  <p>
                    I wanted to build a website where customers could browse the
                    full menu, understand pricing based on quantity, and explore
                    products in a cleaner layout.
                  </p>
                </TimelineStep>

                <TimelineStep
                  icon={<Boxes size={16} />}
                  label="Build"
                  title="Focusing on the customer browsing experience."
                >
                  <p>
                    I started by designing the structure of the menu and
                    building reusable product components so items could be
                    displayed consistently across the site.
                  </p>
                  <p>
                    The main focus was keeping the interface simple while still
                    showing product information, pricing, and categories clearly.
                  </p>
                </TimelineStep>

                <TimelineStep
                  icon={<Bug size={16} />}
                  label="Challenges"
                  title="Menu structure and pricing logic."
                >
                  <p>
                    One of the more complicated parts of the project was
                    handling pricing based on quantity. Different products have
                    different pricing rules, and presenting that information
                    clearly took more experimentation than I expected.
                  </p>
                  <p>
                    I also had to think ahead about how the backend and admin
                    tools might eventually work, even though those pieces have
                    not been built yet.
                  </p>
                </TimelineStep>

                <TimelineStep
                  icon={<Wrench size={16} />}
                  label="Solutions"
                  title="Designing the frontend to grow later."
                >
                  <p>
                    I experimented with different ways of structuring the
                    product data so the menu could scale as more products are
                    added.
                  </p>
                  <p>
                    Building reusable components helped keep the layout
                    consistent and made it easier to adjust the design as the
                    site evolved.
                  </p>
                </TimelineStep>

                <TimelineStep
                  icon={<Sparkles size={16} />}
                  label="Current Status"
                  title="An active project with more features planned."
                  isLast
                >
                  <p>
                    The current version focuses on the customer-facing frontend
                    experience.
                  </p>
                  <p>
                    Future updates will include backend functionality, an admin
                    dashboard for managing products and pricing, and an ordering
                    workflow for the bakery.
                  </p>
                </TimelineStep>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                    <Monitor size={14} />
                    Project Preview
                  </div>

                  <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full"
                    >
                      <source src="/bakery-demo.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Demo showing the bakery menu layout and product browsing
                    experience.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    What I Learned
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li>Real business projects change how design decisions are made.</li>
                    <li>Pricing and menu structure can get complex quickly.</li>
                    <li>Reusable components make it easier to scale the UI later.</li>
                    <li>Working on real needs makes learning more exciting and focused.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    What’s Next
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li>Backend ordering workflow</li>
                    <li>Admin dashboard for products and pricing</li>
                    <li>Expanded ordering and management features</li>
                    <li>Further refinement as the bakery grows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          
        )}

      {activeProject === "lab" && (
  <div key="lab" className="mt-12 animate-[fadeIn_.4s_ease]">
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          Project Story
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Self-Hosted Lab
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          A Raspberry Pi based self-hosted environment built to experiment with
          Docker, cloud routing, personal file storage, and running real
          services from my own hardware.
        </p>
        <p className="mt-4 text-sm text-cyan-300">
          Raspberry Pi • Docker • Cloudflare • Self-Hosting
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/cedricdzameshie"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </div>

    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-12">
        <TimelineStep
          icon={<Search size={16} />}
          label="Idea"
          title="Can I actually build my own self-hosted environment?"
        >
          <p>
            I had seen people online running large homelabs with racks of
            servers, networking equipment, and complex systems. I did not have
            anything that advanced, but I did have a Raspberry Pi and the
            curiosity to try.
          </p>
          <p>
            The original idea was simple: see if I could run a few services
            locally and learn how self-hosting actually works instead of only
            reading about it.
          </p>
        </TimelineStep>

        <TimelineStep
          icon={<Boxes size={16} />}
          label="Build"
          title="Starting small and learning through experimentation."
        >
          <p>
            I began by setting up the Raspberry Pi environment and learning how
            to run services using Docker containers. This gave me a way to test
            different tools while keeping the system manageable.
          </p>
          <p>
            Over time, the lab grew into a small personal infrastructure where I
            could host services, move files between devices on my network, and
            experiment with new ideas in a working environment.
          </p>
        </TimelineStep>

        <TimelineStep
          icon={<Bug size={16} />}
          label="Challenges"
          title="A lot of trial, error, and rebuilding."
        >
          <p>
            This project involved a lot of research and command line learning.
            Several times I misconfigured something badly enough that I had to
            wipe the system and re-image the SD card just to start over.
          </p>
          <p>
            Setting up remote access and Cloudflare routing was especially
            stressful because small mistakes could break connectivity
            completely. Solving those issues took patience, documentation, and
            a lot of troubleshooting.
          </p>
        </TimelineStep>

        <TimelineStep
          icon={<Wrench size={16} />}
          label="Solutions"
          title="Learning by breaking things and rebuilding."
        >
          <p>
            Instead of trying to understand everything at once, I focused on one
            problem at a time. When something broke, I traced it back step by
            step until I understood where the issue came from.
          </p>
          <p>
            That process helped me become more comfortable with command line
            tools, Docker configuration, and networking concepts that felt
            unfamiliar when I first started.
          </p>
        </TimelineStep>

        <TimelineStep
          icon={<Sparkles size={16} />}
          label="Outcome"
          title="From curiosity project to real infrastructure."
          isLast
        >
          <p>
            What started as a simple “can I do this?” experiment turned into a
            real self-hosted environment that I now use to run services and test
            new ideas.
          </p>
          <p>
            It also became part of the foundation for my own developer
            infrastructure, including services connected to this portfolio
            through Cloudflare routing.
          </p>
          <p>
            The lab continues to evolve as I learn more about containers,
            networking, and system management.
          </p>
        </TimelineStep>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
            <Monitor size={14} />
            Project Preview
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            >
              <source src="/homelab-demo.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Preview of the self-hosted environment and dashboard used for
            running services and experimenting with infrastructure.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            What I Learned
          </p>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <li>Self-hosting requires patience and a willingness to break things.</li>
            <li>Docker containers make experimenting with services much easier.</li>
            <li>Networking mistakes can cause major issues, but solving them builds real understanding.</li>
            <li>Hands-on infrastructure projects teach lessons that tutorials cannot.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            What’s Next
          </p>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <li>Expanding the containerized services running in the lab.</li>
            <li>Documenting the full architecture and system setup.</li>
            <li>Testing additional self-hosted tools and automation.</li>
            <li>Using the lab as a sandbox for infrastructure learning.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)}        
</section>
    </div>
  );
}