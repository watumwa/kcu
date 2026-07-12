import AboutSection from "@/components/home/AboutSection";
import AdmissionsBanner from "@/components/home/AdmissionsBanner";
import AdmissionPopup from "@/components/home/AdmissionPopup";
import Collaborations from "@/components/home/Collaborations";
import Hero from "@/components/home/Hero";
import NewsEvents from "@/components/home/NewsEvents";
import ProgrammeHighlight from "@/components/home/ProgrammeHighlight";
import QuickLinks from "@/components/home/QuickLinks";
import SchoolsSection from "@/components/home/SchoolsSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const revalidate = 600;

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Hero />
        <ProgrammeHighlight />
        <QuickLinks />
        <AboutSection />
        <SchoolsSection />
        <AdmissionsBanner />
        <NewsEvents />
        <Collaborations />
        <AdmissionPopup />
      </main>
      <Footer />
    </>
  );
}
