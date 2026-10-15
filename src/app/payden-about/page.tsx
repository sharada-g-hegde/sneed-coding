import Footer from "@/components/layout/footer2";
import Navbar from "@/components/layout/navbar2";
import AboutHero from "@/components/widgets/payden-about-hero";
import Clients from "@/components/widgets/payden-clients";
import Descipline from "@/components/widgets/payden-descipline";
import Locations from "@/components/widgets/payden-locations";
import Milestone from "@/components/widgets/payden-mailestones";
import OurStory from "@/components/widgets/payden-ourStory";
import Team from "@/components/widgets/payden-team";

export default function PaydenAbout() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <Milestone />
      <Descipline />
      <Clients />
      <Team />
      <Locations />

      <Footer />
    </>
  );
}
