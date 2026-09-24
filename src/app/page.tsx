import Container from "@/components/elements/container";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import BlogsMobile from "@/components/widgets/blog";
import SeriesLineup from "@/components/widgets/cards";
import ProductVideoCarousel from "@/components/widgets/carousel";
import FaqSection from "@/components/widgets/faq";
import FeaturedProducts from "@/components/widgets/featuredProducts";
import LetsMeetForm from "@/components/widgets/form";
import Gallery from "@/components/widgets/gallery";

import Hero from "@/components/widgets/hero";
import HeroVedioCarousel from "@/components/widgets/hero-carousel";
import Homefaq from "@/components/widgets/home-faq";
import IndustriesSection from "@/components/widgets/industries";
import NumbersSection from "@/components/widgets/numberSection";
import Poster from "@/components/widgets/poster";
import TwoColumnTextSection from "@/components/widgets/two-column-text-section";

export default function Home() {
  return (
    <Container
      width="fullWidth"
      className="flex-col items-center justify-center overflow-hidden"
    >
      <Navbar />
      <Hero />
      <Gallery />
      <NumbersSection />
      <FeaturedProducts />
      <IndustriesSection />
      {/* <PrinterFitWizard /> */}
      <HeroVedioCarousel />
      <SeriesLineup />
      <TwoColumnTextSection />
      <Homefaq />
      {/* <CustomerReviewsMobile /> */}
      <Poster />
      {/* <BlogsMobile /> */}
      {/* <LetsMeetForm /> */}
      <Footer />
    </Container>
  );
}
