import SectionHeader from "../ui/SectionHeader";
import LabGalleryCard from "./LabGalleryCard";

export default function LabGallery() {
  const galleryItems = [
    {
      title: "Dashboard Overview",
      description: "A curated look at the homelab structure and presentation.",
    },
    {
      title: "Monitoring Snapshot",
      description: "A safe visual showing system health and service awareness.",
    },
    {
      title: "Container Organization",
      description: "A screenshot focused on how the stack is organized and managed.",
    },
  ];

  return (
    <section id="gallery" className="bg-slate-950 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="Screenshots & Demo Ideas"
          description="This section will hold curated screenshots, sanitized visuals, and short demo content that support the lab case study."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <LabGalleryCard
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