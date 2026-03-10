import { futureItems } from "../../data/labData";
import SectionHeader from "../ui/SectionHeader";
import InfoCard from "../ui/InfoCard";

export default function LabFuture() {
  return (
    <section className="bg-slate-950 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Next"
          title="Future Improvements"
          description="This lab is ongoing. I want it to keep evolving as both a technical learning environment and a stronger infrastructure case study."
        />

        <InfoCard title="What I Want to Improve">
          <ul className="space-y-3 text-sm text-slate-300">
            {futureItems.map((item) => (
              <li key={item} className="border-b border-white/5 pb-3 last:border-b-0">
                {item}
              </li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </section>
  );
}