import { serviceGroups } from "../../data/labData";
import SectionHeader from "../ui/SectionHeader";
import InfoCard from "../ui/InfoCard";

export default function LabServices() {
  return (
    <section className="bg-slate-900 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Service Categories"
          description="The lab is organized around infrastructure, monitoring, development, and experimentation rather than exposing sensitive internal services directly."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {serviceGroups.map((group) => (
            <InfoCard key={group.title} title={group.title}>
              <ul className="space-y-3 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-white/5 pb-3 last:border-b-0">
                    {item}
                  </li>
                ))}
              </ul>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}