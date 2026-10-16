import Container from "@/components/elements/container";
import Footer from "@/components/layout/footer2";
import Navbar from "@/components/layout/navbar2";
import Disclosures from "@/components/widgets/disclosures";
import AvailableFunds from "@/components/widgets/payden-fund";
import FundsHero from "@/components/widgets/payden-hero";

export default function PaydenFund() {
  return (
    <>
      <Container
        width="fullWidth"
        className="flex-col items-center justify-center overflow-hidden"
      >
        <Navbar />
        <FundsHero />
        <AvailableFunds />
        <Disclosures />
        <Footer />
      </Container>
    </>
  );
}
