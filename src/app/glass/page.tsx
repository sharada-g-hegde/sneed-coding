"use client";

import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";
import Link from "@/components/elements/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import IndustriesSection from "@/components/widgets/date-coding-grid2";

import FeaturedProducts, {
  type Product,
} from "@/components/widgets/featuredProducts";
import SuccessStories from "@/components/widgets/data-coding-successStory";
import DateCodingfaq from "@/components/widgets/date-coding-faq";
import DateCodingGrid from "@/components/widgets/date-coding-grid3";
import HeadingWithCopy from "@/components/widgets/two-column-text";
import BentoCardGrid from "@/components/widgets/bento-card-grid";
import CategoryGridSection from "@/components/widgets/industries";
import ProductVideoCarousel from "@/components/widgets/carousel";
import FaqSection from "@/components/widgets/faq";

const SUBSTRATES = [
  {
    id: "Date & Lot Coding",
    label: "Date & Lot Coding",
    image: "/images/glass-grid-1.webp",
    description:
      "Consistent adhesion and clean coding on bottles, tubs and pump bottles without smudging or lifting.",
  },
  {
    id: "Barcode & QR Printing",
    label: "Barcode & QR Printing",
    image: "/images/glass-grid-2.webp",
    description:
      "Crisp, permanent codes on glass bottles and vials, calibrated for condensation and curved surfaces.",
  },
  {
    id: "Decorative Marking",
    label: "Decorative Marking",
    image: "/images/glass-grid-3.webp",
    description:
      "High-contrast codes on cans and metal containers that hold up through cold-chain handling and transit.",
  },
  {
    id: "Serialization",
    label: "Serialization",
    image: "/images/glass-grid-4.webp",
    description:
      "Large-character carton and case marking that stays legible through warehouse handling and storage.",
  },
];
const INK_ITEMS = [
  {
    id: "uv-curable",
    label: "UV-Curable Ink",
    image: "/images/date-coding-1.webp",
    description:
      "Instantly cures under UV light for scratch- and smudge-resistant codes on cosmetic and personal care packaging.",
  },
  {
    id: "mek-solvent",
    label: "MEK-Based Solvent Ink",
    image: "/images/date-coding-2.webp",
    description:
      "Fast-drying, high-adhesion ink built for glass and non-porous surfaces in lab and chemical packaging.",
  },
  {
    id: "thermal-inkjet",
    label: "Thermal Inkjet (TIJ)",
    image: "/images/date-coding-3.webp",
    description:
      "Crisp, high-resolution codes on cans and flexible pouches, ideal for beverage and snack lines.",
  },
];

const Glass_INDUSTRIES = [
  {
    id: "beverage",
    label: "Beverage",
    image: "/images/glass-grid-5.webp",
    description: "Labels and packaging built to survive ice baths...",
  },
  {
    id: "pharmaceutical",
    label: "Pharmaceutical",
    image: "/images/glass-grid-6.webp",
    description: "Tamper-evident, chemical-resistant materials...",
  },
  {
    id: "cosmetics",
    label: "Cosmetics",
    image: "/images/glass-grid-7.webp",
    description: "Premium finishes and foil detailing...",
  },
  {
    id: "industrial",
    label: "Industrial Manufacturing",
    image: "/images/glass-grid-8.webp",
    description: "Durable identification that withstands heat, oil...",
  },
  {
    id: "consumer-goods",
    label: "Consumer Goods",
    image: "/images/glass-grid-9.webp",
    description: "Consistent brand color and print quality...",
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
const Substrates_ITEMS = [
  {
    id: "Metal & Aluminum",
    label: "Metal & Aluminum",
    image: "/images/glass-grid-10.webp",
    description:
      "Instantly cures under UV light for scratch- and smudge-resistant codes on cosmetic and personal care packaging.",
  },
  {
    id: "Plastic & PET",
    label: "Plastic & PET",
    image: "/images/glass-grid-11.webp",
    description:
      "Fast-drying, high-adhesion ink built for glass and non-porous surfaces in lab and chemical packaging.",
  },
  {
    id: "Ceramics",
    label: "Ceramics",
    image: "/images/glass-grid-12.webp",
    description:
      "Crisp, high-resolution codes on cans and flexible pouches, ideal for beverage and snack lines.",
  },
];

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

export default function DateCodingHero() {
  return (
    <>
      <Navbar />
      <Container
        width="fullWidth"
        className="relative items-center justify-center lg:p-2"
      >
        <Container
          width="pageWidth"
          className="relative 3xl:max-w-[120rem] 2xl:max-w-360 lg:min-h-screen items-center justify-center"
        >
          <Media
            src="/images/glass-hero.png"
            alt="Aluminum cans with date codes on a production line"
            fill
            className="absolute inset-0 h-full w-full object-cover rounded-3xl"
          />

          <Container className="relative z-10 flex-col gap-6 lg:gap-8 items-center justify-center h-full px-4 lg:px-6 pt-22 pb-10 lg:pt-6 lg:pb-6 lg:mt-10 text-center">
            <Typography className="font-outfit font-extrabold text-white text-[44px] leading-[1.05] tracking-[-1px] lg:text-[80px] lg:tracking-[-1px]">
              Printing on Glass <br /> Techniques & Innovation
            </Typography>

            <Typography className="font-inter text-[16px] lg:leading-6! mx-auto text-white md:max-w-[69%]">
              Explore the art and science of glass printing — from UV-curable
              inks to ceramic fusing, discover methods that bring vivid, lasting
              designs to any glass surface.
            </Typography>

            <Container className="lg:mt-4 w-full items-center justify-center max-w-[340px] lg:max-w-none flex-col lg:flex-row lg:items-center gap-4">
              <Link
                href="/products"
                className="whitespace-nowrap w-full items-center justify-center lg:w-auto text-center font-outfit rounded-full bg-[#9A1A1C] px-6 py-3 lg:py-3 text-[16px] font-semibold border border-transparent hover:border-[#9A1A1C] text-white transition-colors hover:text-white hover:bg-[#7f1628]"
              >
                Find my printer
              </Link>

              <Link
                href="/videos"
                className="whitespace-nowrap w-full items-center justify-center lg:w-auto text-center font-outfit rounded-full bg-white px-6 py-3 lg:py-3 text-[16px] font-semibold text-[#770000] hover:text-[#770000] transition-colors hover:bg-red-100"
              >
                Watch it in action
              </Link>
            </Container>
          </Container>
        </Container>
      </Container>
      <HeadingWithCopy
        heading="Why Printing on Glass Is Different"
        paragraphs={[
          "Glass is a non-porous, ultra-smooth substrate with near-zero surface energy, making ink adhesion the primary challenge. Unlike cardboard or plastic, glass requires specialized ink chemistry - typically UV-curable or solvent-based inks - that can bond to silicate surfaces without pre-treatment. Surface condensation on cold-filled bottles, curvature of round containers, and the need for chemical resistance (wash-down, sterilization) add further complexity. Proper curing (UV LED or forced air) is critical to achieve durable, smudge-proof marks that withstand the supply chain.",
        ]}
      />

      <BentoCardGrid
        heading="Recommended Ink & Print Technology"
        items={INK_ITEMS}
        wideIndexes={[]}
      />
      <BentoCardGrid
        heading="Common Applications on Glass"
        items={SUBSTRATES}
      />

      <CategoryGridSection
        heading="Industries Using Glass Substrates"
        items={Glass_INDUSTRIES}
      />
      <IndustriesSection />

      <FeaturedProducts
        heading="Recommended Printers for Glass"
        products={GLASS_PRODUCTS}
      />
      <ProductVideoCarousel
        heading="More benefits You'll love"
        videos={DATE_CODING_VIDEOS}
      />

      <SuccessStories />
      <FaqSection heading="FAQ" faqs={FAQS} />
      <BentoCardGrid
        heading="Related Substrates"
        items={Substrates_ITEMS}
        wideIndexes={[]}
      />
      <Footer />
    </>
  );
}
