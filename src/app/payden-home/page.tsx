import Footer from "@/components/layout/footer2";
import Navbar from "@/components/layout/navbar2";
import CtaBanner from "@/components/widgets/payden-discover";
import Glance from "@/components/widgets/payden-glance";
import PaydenHomeHero from "@/components/widgets/payden-home-hero";
import Investement from "@/components/widgets/payden-investments";
import PaydenTwoColumnText from "@/components/widgets/payden-two-column-text";

export default function PaydenFund() {
  return (
    <>
      <Navbar />
      <PaydenHomeHero />
      <Glance />
      <PaydenTwoColumnText />
      <Investement />
      <CtaBanner />

      <Footer />
    </>
  );
}
