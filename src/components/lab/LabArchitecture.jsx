import SectionHeader from "../ui/SectionHeader";
import InfoCard from "../ui/InfoCard";

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
          description="This section will show clean high-level diagrams of the homelab structure, routing layers, and service organization."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard
            title="High-Level Diagram"
            description="A recruiter-friendly view showing internet access, routing, secure access, host environment, and service categories."
          />
          <InfoCard
            title="Internal Organization Diagram"
            description="A more technical view showing how Docker services, monitoring, routing, and experiments are grouped without exposing sensitive internal details."
          />
        </div>
      </div>
    </section>
  );
}