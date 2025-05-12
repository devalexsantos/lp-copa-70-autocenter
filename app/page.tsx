import { About } from "./components/About";
import { Advantages } from "./components/Advantages";
import { AutoCenterVideo } from "./components/AutoCenterVideo";
import { DifferentialRuler } from "./components/DifferentialRuler";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InfraGallery } from "./components/IngraGallery";
import { MegaPromotion } from "./components/MegaPromotion";
import { PreventiveMaintenance } from "./components/PreventiveMaintenance";
import { Testimonials } from "./components/Testimonials";
import { UntrustedAutoCentersDisadvantages } from "./components/UntrustedAutoCentersDisadvantages";
import { WhyChoose } from "./components/WhyChoose";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <DifferentialRuler />
      <UntrustedAutoCentersDisadvantages />
      <Advantages />
      <MegaPromotion />
      <PreventiveMaintenance />
      <InfraGallery />
      <AutoCenterVideo />
      <Testimonials />
      <WhyChoose />
      <About />
      <Footer />
    </div>
  );
}
