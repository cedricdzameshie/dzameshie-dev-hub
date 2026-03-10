import { monitoringStats } from "../../data/labData";
import SectionHeader from "../ui/SectionHeader";
import StatCard from "../ui/StatCard";

export default function LabMonitoring() {
  return (
    <section className="bg-slate-950 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Monitoring"
          title="Monitoring & Observability"
          description="A big part of the lab is learning how to watch system health, spot issues earlier, and understand how services behave over time."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {monitoringStats.map((item) => (
            <StatCard key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}