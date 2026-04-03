import SectionHeader from "../ui/SectionHeader";
import InfoCard from "../ui/InfoCard";

function HighLevelDiagram() {
  const blocks = [
    "Internet",
    "DNS / Routing",
    "Secure Remote Access",
    "Raspberry Pi Host",
    "Docker Services",
    "Infrastructure / Monitoring / Dev / Experiments",
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      {blocks.map((block, index) => (
        <div key={block} className="flex flex-col items-center">
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm text-cyan-200">
            {block}
          </div>

          {index !== blocks.length - 1 && (
            <div className="h-6 w-px bg-cyan-400/30" />
          )}
        </div>
      ))}
    </div>
  );
}

function DiagramNode({ title }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-slate-300">
      {title}
    </div>
  );
}

function InternalDiagram() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-white">
        Raspberry Pi Host
      </div>

      <div className="h-6 w-px bg-white/20" />

      <div className="rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-white">
        Docker Engine
      </div>

      <div className="h-6 w-px bg-white/20" />

      <div className="grid w-full gap-4 md:grid-cols-2">
        <DiagramNode title="Reverse Proxy / Routing" />
        <DiagramNode title="Monitoring Layer" />
        <DiagramNode title="Dev Services" />
        <DiagramNode title="Experiment Services" />
        <DiagramNode title="Infrastructure Tools" />
        <DiagramNode title="Private Internal Services" />
      </div>
    </div>
  );
}

export default function LabArchitecture() {
  return (
    <section
      id="architecture"
      className="bg-slate-900 px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Architecture"
          title="Architecture Overview"
          description="This section shows how the lab is put together — starting with a high-level view and then breaking down how everything is organized behind the scenes."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard
            title="High-Level Diagram"
            description="A simplified view of how traffic flows through the lab — from external access down to the services running on the system."
          >
            <div className="mt-6">
              <HighLevelDiagram />
            </div>
          </InfoCard>

          <InfoCard
            title="Internal Organization Diagram"
            description="A closer look at how the system is structured internally, including how services are grouped and managed within the environment."
          >
            <div className="mt-6">
              <InternalDiagram />
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}