import { stackItems } from "../../data/labData";
import SectionHeader from "../ui/SectionHeader";
import InfoCard from "../ui/InfoCard";

export default function LabStackGrid() {
  return (
    <section className="bg-slate-950 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Stack"
          title="Infrastructure Stack"
          description="These are the core layers and tools that shape how the homelab is organized, accessed, and maintained."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stackItems.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}