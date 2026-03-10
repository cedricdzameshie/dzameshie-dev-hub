import { hardwareItems } from "../../data/labData";
import SectionHeader from "../ui/SectionHeader";
import InfoCard from "../ui/InfoCard";

export default function LabHardware() {
  return (
    <section className="bg-slate-900 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Environment"
          title="Hardware & Environment"
          description="The lab is centered around a Raspberry Pi-based setup designed for practical self-hosting, experimentation, and infrastructure learning."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {hardwareItems.map((item) => (
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