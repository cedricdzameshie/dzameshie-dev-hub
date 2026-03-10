import LabHero from "../components/lab/LabHero";
import LabOverview from "../components/lab/LabOverview";
import LabHardware from "../components/lab/LabHardware";
import LabStackGrid from "../components/lab/LabStackGrid";
import LabServices from "../components/lab/LabServices";
import LabMonitoring from "../components/lab/LabMonitoring";
import LabArchitecture from "../components/lab/LabArchitecture";
import LabGallery from "../components/lab/LabGallery";
import LabLessons from "../components/lab/LabLessons";
import LabFuture from "../components/lab/LabFuture";

export default function Lab() {
  return (
    <>
      <LabHero />
      <LabOverview />
      <LabHardware />
      <LabStackGrid />
      <LabServices />
      <LabMonitoring />
      <LabArchitecture />
      <LabGallery />
      <LabLessons />
      <LabFuture />
    </>
  );
}