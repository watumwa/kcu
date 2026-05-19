import UnderConstruction from "@/components/common/UnderConstruction";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function CatchAllPage() {
  return (
    <>
      <Navbar />
      <UnderConstruction title="Page Under Construction" path="This page" />
      <Footer />
    </>
  );
}
