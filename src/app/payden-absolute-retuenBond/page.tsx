import Container from "@/components/elements/container";
import Footer from "@/components/layout/footer2";
import Navbar from "@/components/layout/navbar2";
import ReturnBondHero from "@/components/widgets/return-bond-hero";

export default function ReturnBond() {
  return (
    <Container
      width="fullWidth"
      className="flex-col items-center justify-center max-lg:pb-4"
    >
      <Navbar />
      <ReturnBondHero />
      <Footer />
    </Container>
  );
}
