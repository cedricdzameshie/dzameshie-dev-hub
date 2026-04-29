import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import LabGalleryCard from "./LabGalleryCard";

import dashboardOverviewImg from "../../assets/lab/screenshots/dashboard-overview1.png";
import monitoringSnapshotImg from "../../assets/lab/screenshots/monitoring-snapshot.png";
import containerOrganizationImg from "../../assets/lab/screenshots/container-organization.png";

export default function LabGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      title: "Dashboard Overview",
      description: "A curated look at the homelab structure and presentation.",
      image: dashboardOverviewImg,
    },
    {
      title: "Monitoring Snapshot",
      description: "A safe visual showing system health and service awareness.",
      image: monitoringSnapshotImg,
    },
    {
      title: "Container Organization",
      description: "A screenshot focused on how the stack is organized and managed.",
      image: containerOrganizationImg,
    },
  ];

  return (
    <section id="gallery" className="bg-slate-950 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="Screenshots & Demo Ideas"
          description="Curated screenshots and sanitized visuals that show how the homelab is structured, monitored, and organized."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <LabGalleryCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              onClick={() => setSelectedImage(item.image)}
            />
          ))}
        </div>
      </div>

      {/* 🔥 Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full preview"
            className="max-h-full max-w-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}