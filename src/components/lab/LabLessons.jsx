import { lessonItems } from "../../data/labData";
import SectionHeader from "../ui/SectionHeader";
import InfoCard from "../ui/InfoCard";

export default function LabLessons() {
  return (
    <section className="bg-slate-900 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Lessons"
          title="What I Learned"
          description="The lab has helped me connect technical concepts to practical systems work and think more clearly about how services are built, managed, and presented."
        />

        <InfoCard title="Key Takeaways">
          <ul className="space-y-3 text-sm text-slate-300">
            {lessonItems.map((item) => (
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