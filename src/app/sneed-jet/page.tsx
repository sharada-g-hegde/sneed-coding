"use client";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ProductVideoCarousel from "@/components/widgets/carousel";
import DarkSuccessStories from "@/components/widgets/dark-successstory";
import SuccessStories from "@/components/widgets/data-coding-successStory";
import FaqSection from "@/components/widgets/faq";
import FeaturedProducts, {
  Product,
} from "@/components/widgets/featuredProducts";
import CustomerReviewsMobile from "@/components/widgets/rating";
import BentoCardGrid from "@/components/widgets/sneed-bentocard";
import ProductDetailHero from "@/components/widgets/sneed-jet-hero";
import PainPointsSection from "@/components/widgets/sneed-painpoint";
import VideoBenefitsSection from "@/components/widgets/sneed-vedio-grid";
import JobCardsSection from "@/components/widgets/two-column-text-and-grid";

const FAQS = [
  {
    question: "Do you offer bulk discounts for multiple lines?",
    answer:
      "The Titan 500 uses the same core thermal inkjet technology as printers costing $5,000–$10,000+, at a fraction of the price — without sacrificing print quality or speed.",
  },
  {
    question: "How fast can I get a printer installed?",
    answer:
      "Most orders ship within 2-3 business days, and our team can walk you through setup over a call the same week your printer arrives.",
  },
  {
    question: "What ink types are available?",
    answer:
      "We stock standard, fast-dry, and food-safe cartridges compatible with plastic, glass, cardboard, and metal substrates.",
  },
  {
    question: "What's the total cost of ownership — ink, maintenance, etc.?",
    answer:
      "Beyond the printer itself, expect routine cartridge replacement and an annual maintenance check — most customers spend a fraction of what dedicated industrial systems cost to run.",
  },
];
const GLASS_PRODUCTS: Product[] = [
  {
    id: "titan-600",
    sku: "SNEED-JET",
    image: "/images/product-1.webp",
    rating: 4,
    reviewCount: 32,
    title: "SNEED-JET® Titan Printer",
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
    price: 6250,
    originalPrice: 6850,
    href: "/products/titan-t6",
  },
  {
    id: "coder-placeholder-1",
    sku: "SJ-TITAN-600",
    image: "/images/product-1.webp",
    recommended: true,
    rating: 4,
    reviewCount: 128,
    title: "SNEED-JET\u00ae Titan T6 Handheld Printer",
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
    price: 299999,
    originalPrice: 349999,
    href: "/products/case-coder-2",
  },
];
const DATE_CODING_VIDEOS = [
  {
    title: "SNEED-JET® Titan Printer",
    youtubeId: "LewByX7gX_I",
    description:
      "Explore five real-world SNEED-JET® Titan applications, from bright-ink printing to packaging and automated production lines.",
    duration: "2:34",
  },
  {
    title: "SNEED-JET® Titan — Provincial Spirits",
    youtubeId: "LewByX7gX_I",
    description:
      "See a SNEED-JET® Titan printer coding kombucha bottles with white ink for high-contrast date and lot codes.",
    duration: "2:34",
  },
  {
    title: "SNEED-JET® Titan — Fake Meats",
    youtubeId: "l71-IEzfRNQ",
    description:
      "See how Fake Meats integrated the SNEED-JET® Titan into a pouch-filling production line for date coding.",
    duration: "2:34",
  },
  {
    title: "SNEED-JET® Titan — Granola Factory",
    youtubeId: "l71-IEzfRNQ",
    description:
      "Watch a SNEED-JET® Titan integrated with a flow wrapper for clean and precise date-code printing.",
    duration: "2:34",
  },
];

export default function SneedJet() {
  return (
    <>
      <Navbar />
      <ProductDetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Printers", href: "/printers" },
        ]}
        currentLabel="SNEED-JET® Titan Printer"
        images={[
          "/images/product-1.webp",
          "/images/product-2.webp",
          "/images/product-3.webp",
          "/images/product-4.webp",
          "/images/product-1.webp",
          "/images/product-3.webp",
          "/images/product-2.webp",
          "/images/product-4.webp",
        ]}
        badge="Bestseller"
        title="SNEED-JET® Titan Printer"
        rating={4.5}
        reviewCount={32}
        price={136400}
        originalPrice={155900}
        description="Marks colors, barcodes, logos, and variable data on porous, semi-porous, and non-porous substrates — with HP® maintenance-free print technology."
        guaranteeText="30-Day Performance Guarantee — full refund if returned within 30 days."
        onAddToCart={(quantity) => console.log("add to cart", quantity)}
      />
      <PainPointsSection
        heading={"Technology\n features"}
        description="The SNEED-JET® Titan Printer is great for marking colors (black, white, yellow, blue, green, and red) on porous, semi-porous, and non-porous substrates. It can also print on glass, plastics, metal, boxes, and much more. It can print high-resolution alphanumeric text, barcodes, logos, and static and variable information. The SNEED-JET® Titan Printer comes equipped with built-in counters for marking date and time codes, lot codes, batch codes, and much more."
        points={[
          {
            title: "High-Speed Printing",
            description:
              "Up to 70 meters per minute (230 fpm) for fast-moving production lines.",
          },
          {
            title: "Maintenance-Free Ink",
            description:
              "HP® cartridges double as printheads — swap colors in under 30 seconds, no service required.",
          },
          {
            title: "Multi-Substrate Versatility",
            description:
              "Marks glass, plastics, metal, concrete, pipe, and boxes — porous to non-porous.",
          },
          {
            title: "10 Languages Supported",
            description:
              "English, Spanish, Portuguese, Italian, Russian, Turkish, Arabic, Korean, and Chinese.",
          },
        ]}
      />
      <VideoBenefitsSection
        heading="More benefits You'll love"
        videos={[
          { label: "Craft Brewing", youtubeId: "LewByX7gX_I" },
          { label: "Wet Wipes", youtubeId: "LewByX7gX_I" },
          { label: "Bottle Printing", youtubeId: "LewByX7gX_I" },
        ]}
      />
      <FaqSection heading="Description" faqs={FAQS} />
      <BentoCardGrid
        heading="Trusted across these industries"
        items={[
          {
            id: "food-beverage",
            label: "Food & Beverage",
            image: "/images/food-hero.webp",
            description: "Clear, permanent codes on jars, bottles and cartons.",
          },
          {
            id: "consumer-goods",
            label: "Consumer Goods",
            image: "/images/food-grid5.webp",
            description:
              "Crisp branding and batch codes on boxes and packaging.",
          },
          {
            id: "industrial-manufacturing",
            label: "Industrial Manufacturing",
            image: "/images/food-grid6.webp",
            description: "Durable marking for high-speed production lines.",
          },
        ]}
      />
      <CustomerReviewsMobile />
      <ProductVideoCarousel
        heading="See how it works in action"
        videos={DATE_CODING_VIDEOS}
      />
      <DarkSuccessStories bgClassName="bg-red-900" />
      <JobCardsSection
        heading="Built for the jobs you actually run"
        items={[
          {
            id: "date-coding",
            label: "Date Coding",
            image: "/images/2-column-card-1.webp",
            description: "Consistent, clean date codes on any substrate.",
          },
          {
            id: "lot-coding",
            label: "Lot Coding",
            image: "/images/2-column-card-2.webp",
            description: "Permanent lot codes for full traceability.",
          },
        ]}
      />
      <FaqSection heading="Questions about the Titan 500" faqs={FAQS} />
      <FeaturedProducts heading="You may also like" products={GLASS_PRODUCTS} />

      <Footer />
    </>
  );
}
