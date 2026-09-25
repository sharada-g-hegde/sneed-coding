import Container from "@/components/elements/container";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import BlogsMobile from "@/components/widgets/blog";
import SeriesLineup from "@/components/widgets/cards";
import ProductVideoCarousel from "@/components/widgets/carousel";
import FaqSection from "@/components/widgets/faq";
import FeaturedProducts, {
  type Product,
  type ProductCategory,
} from "@/components/widgets/featuredProducts";
import LetsMeetForm from "@/components/widgets/form";
import Gallery from "@/components/widgets/gallery";

import Hero from "@/components/widgets/hero";
import HeroVedioCarousel from "@/components/widgets/hero-carousel";
import Homefaq from "@/components/widgets/home-faq";
import CategoryGridSection from "@/components/widgets/industries";
import IndustriesSection from "@/components/widgets/industries";
import NumbersSection from "@/components/widgets/numberSection";
import Poster from "@/components/widgets/poster";
import TwoColumnTextSection from "@/components/widgets/two-column-text-section";

const INDUSTRIES = [
  {
    id: "food-beverage",
    label: "Food & Beverage",
    image: "/images/Category_Card.webp",
    description: "Labels and packaging built to survive ice baths...",
  },
  {
    id: "pharmaceutical",
    label: "Pharmaceutical",
    image: "/images/Category_Card__1_.webp",
    description: "Tamper-evident, chemical-resistant materials...",
  },
  {
    id: "cosmetics",
    label: "Cosmetics",
    image: "/images/Category_Card__2_.webp",
    description: "Premium finishes and foil detailing...",
  },
  {
    id: "industrial",
    label: "Industrial Manufacturing",
    image: "/images/Category_Card__3_.webp",
    description: "Durable identification that withstands heat, oil...",
  },
  {
    id: "consumer-goods",
    label: "Consumer Goods",
    image: "/images/Category_Card__4_.webp",
    description: "Consistent brand color and print quality...",
  },
];

const CATEGORIES: ProductCategory[] = [
  { id: "inkjet-Coders", label: "Inkjet Coders" },
  { id: "Case Coding Printers", label: "Case Coding Printers" },
  {
    id: "Portable Handheld Inkjet Printers",
    label: "Portable Handheld Inkjet Printers",
  },
  { id: "Carton / Case / Box Sealers", label: "Carton / Case / Box Sealers" },
  { id: "Case / Box Erectors", label: "Case / Box Erectors" },
  { id: "Labeling Machines", label: "Labeling Machines" },
  { id: "Conveyors", label: "Conveyors" },
];

const PRODUCTS: Record<string, Product[]> = {
  "inkjet-Coders": [
    {
      id: "titan-600",
      sku: "SNEED-JET",
      image: "/images/product-1.webp",
      rating: 4,
      reviewCount: 32,
      title: "SNEED-JET® Titan Printer",
      //   description: "High-speed inkjet for cases, cartons, and pallets.",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      originalPrice: 155500,
      price: 136000,
      href: "/products/titan-600",
    },
    {
      id: "freedom-42",
      sku: "SNEED-JET",
      image: "/images/product-2.webp",
      rating: 4,
      reviewCount: 128,
      title: "SNEED-JET® Titan 22 Dual Head Inkjet Coder",
      //   description: "Compact thermal inkjet...",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 233200,
      originalPrice: 291200,
      href: "/products/freedom-42",
    },
    {
      id: "freedom-44",
      sku: "SJ-TITAN-600",
      image: "/images/product-3.webp",
      rating: 4,
      reviewCount: 128,
      title: "SNEED-JET\u00ae Freedom 44, Four Printhead Case Coder",
      //   description: "Top-and-bottom case sealing for high-volume lines.",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 6250,
      originalPrice: 6850,
      href: "/products/freedom-44",
    },
    {
      id: "titan-t6",
      sku: "SJ-TITAN-600",
      image: "/images/product-4.webp",
      rating: 4,
      reviewCount: 128,
      title: "SNEED-JET\u00ae Titan T6 Handheld Printer",
      //   description: "Top-and-bottom case sealing for high-volume lines.",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 6250,
      originalPrice: 6850,
      href: "/products/titan-t6",
    },
  ],
  "Case Coding Printers": [
    {
      id: "coder-placeholder-1",
      sku: "SJ-TITAN-600",
      image: "/images/product-1.webp",
      recommended: true,
      rating: 4,
      reviewCount: 128,
      title: "SNEED-JET\u00ae Titan T6 Handheld Printer",
      //   description:
      //     "Supporting description text that provides more context for the card content. Supporting description text that provides more context for the card content.",
      // //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 299800,
      originalPrice: 349000,
      href: "/products/case-coder-1",
    },
    {
      id: "coder-placeholder-2",
      sku: "SJ-TITAN-600",
      image: "/images/product-2.webp",
      recommended: true,
      rating: 4,
      reviewCount: 128,
      title: "SNEED-JET\u00ae Titan T6 Handheld Printer",
      //   description:"Supporting description text that provides more context for the card content. Supporting description text that provides more context for the card content.",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 299999,
      originalPrice: 349999,
      href: "/products/case-coder-2",
    },
  ],
};
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
      <FeaturedProducts
        heading="Featured Products"
        description="Every system shares the same ink chemistry, controller, and service network — scaled from compact benchtop to heavy industrial deployment."
        categories={CATEGORIES}
        products={PRODUCTS}
      />
      <CategoryGridSection heading="We fit every line" items={INDUSTRIES} />
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
