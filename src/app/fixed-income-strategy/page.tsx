import Container from "@/components/elements/container";
import Footer from "@/components/layout/footer2";
import Navbar from "@/components/layout/navbar2";
import ExploreStrategies from "@/components/widgets/explore-strategies";
import FixedIncomeStrategyHero from "@/components/widgets/fixedincome-hero";
import CtaBanner from "@/components/widgets/payden-discover";
import RelatedInsights from "@/components/widgets/relatedInsights";
import Strategies from "@/components/widgets/strategies";

export default function FixedIncomeStrategy() {
  return (
    <Container
      width="fullWidth"
      className="flex-col items-center justify-center overflow-hidden"
    >
      <Navbar />
      <FixedIncomeStrategyHero />
      <Strategies />
      <RelatedInsights />
      <ExploreStrategies />
      <CtaBanner />
      <Footer />
    </Container>
  );
}
