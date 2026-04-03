export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      
      {/* HERO */}
      <h1 className="text-4xl font-bold text-white">
        About Me
      </h1>

      <p className="mt-4 max-w-2xl text-slate-300 leading-7">
        I’m a developer focused on building clean user interfaces, growing into
        full-stack development, and exploring infrastructure through hands-on
        projects.
      </p>

      {/* WHO I AM */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white">
          Who I Am
        </h2>

        <p className="mt-4 text-slate-300 leading-7">
          I’m currently transitioning into software development after years of
          experience in customer support and problem-solving. That background
          taught me how to break down complex issues, communicate clearly, and
          stay patient when working through challenges.
        </p>

        <p className="mt-4 text-slate-300 leading-7">
          I enjoy building things that feel practical and usable — whether that’s
          a frontend interface, a full-stack application, or a self-hosted
          environment running on my own hardware.
        </p>

        <p className="mt-4 text-slate-300 leading-7">
          I don’t need to know everything before I start. I’m comfortable
          researching, testing, rebuilding, and working through problems until
          things actually make sense and function the way they should.
        </p>
      </div>

      {/* HOW I WORK */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white">
          How I Work
        </h2>

        <ul className="mt-4 space-y-3 text-slate-300">
          <li>• I learn by building real projects, not just following tutorials</li>
          <li>• I break problems into smaller pieces and solve them step by step</li>
          <li>• I iterate quickly instead of waiting for perfect solutions</li>
          <li>• I enjoy understanding how systems work end-to-end</li>
        </ul>
      </div>

      {/* WHAT I'M WORKING ON */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white">
          What I’m Working On
        </h2>

        <ul className="mt-4 space-y-3 text-slate-300">
          <li>• Building full-stack applications with React, Node.js, and PostgreSQL</li>
          <li>• Developing a Recipe Vault app for real-world use</li>
          <li>• Improving my portfolio with modern UI and real project breakdowns</li>
          <li>• Running a Raspberry Pi homelab to learn Docker, networking, and infrastructure</li>
          <li>• Expanding into backend systems and scalable architecture concepts</li>
        </ul>
      </div>

      {/* TOOLKIT */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white">
          Toolkit
        </h2>

        <p className="mt-4 text-slate-300 leading-7">
          I primarily work with modern web technologies and continue expanding
          into backend and infrastructure tools.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "React",
            "Tailwind",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}