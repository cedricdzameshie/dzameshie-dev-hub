import { overviewData } from "../../data/labData";
import SectionHeader from "../ui/SectionHeader";
import InfoCard from "../ui/InfoCard";

export default function LabOverview() {
  return (
    <section className="bg-slate-950 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeader
            eyebrow="Overview"
            title={overviewData.title}
            description={overviewData.paragraphs[0]}
          />

          <p className="max-w-3xl text-base leading-8 text-slate-300">
            {overviewData.paragraphs[1]}
          </p>
        </div>

        <div className="grid gap-4 self-start">
          {overviewData.highlights.map((highlight) => (
            <InfoCard key={highlight} title={highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}