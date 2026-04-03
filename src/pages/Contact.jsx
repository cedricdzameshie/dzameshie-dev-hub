export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
        Contact
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
        Let’s connect.
      </h1>

      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
        If you’d like to connect, talk about opportunities, or follow the work
        I’m building, you can reach me through the links below.
      </p>

      {/* CONTACT LINKS */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <a
          href="https://github.com/cedricdzameshie"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            GitHub
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white">
            cedricdzameshie
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Explore my repositories, experiments, and ongoing development work.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/cedric-dzameshie-587628b1/"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            LinkedIn
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white">
            Cedric Dzameshie
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Connect with me professionally and follow my career growth.
          </p>
        </a>

        <a
          href="mailto:cedric.dzameshie@protonmail.com"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Email
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white">
            Reach Out
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Send me a message for opportunities, collaboration, or questions
            about my work.
          </p>
        </a>
      </div>
    </section>
  );
}