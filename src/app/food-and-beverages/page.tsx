import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";
import Link from "@/components/elements/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import TwoColumnTextSection from "@/components/widgets/two-column-text-section";
import PainPointsSection from "@/components/widgets/point-section";
import SuccessStories from "@/components/widgets/data-coding-successStory";
import ProductVideoCarousel from "@/components/widgets/carousel";
import FeaturedProducts, {
  Product,
} from "@/components/widgets/featuredProducts";
import Poster from "@/components/widgets/poster";
import SurfaceGrid from "@/components/widgets/food-grid";

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
const PRODUCTS: Product[] = [
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

const SURFACES = [
  {
    id: "Glass bottles and jars",
    label: "Glass bottles and jars",
    image: "/images/food-grid1.webp",
    description:
      "Consistent adhesion and clean coding on bottles, tubs and pump bottles without smudging or lifting.",
  },
  {
    id: "Plastic bottles and containers",
    label: "Plastic bottles and containers",
    image: "/images/food-grid2.webp",
    description:
      "Crisp, permanent codes on glass bottles and vials, calibrated for condensation and curved surfaces.",
  },
  {
    id: "Flexible films and packaging",
    label: "Flexible films and\n packaging",
    image: "/images/food-grid3.webp",
    description:
      "High-contrast codes on cans and metal containers that hold up through cold-chain handling and transit.",
  },
  {
    id: "Aluminum and metal cans",
    label: "Aluminum and metal\n cans",
    image: "/images/food-grid4.webp",
    description:
      "Large-character carton and case marking that stays legible through warehouse handling and storage.",
  },
  {
    id: "Plastic bags and pouches",
    label: "Plastic bags and\n pouches",
    image: "/images/food-grid5.webp",
    description:
      "Large-character carton and case marking that stays legible through warehouse handling and storage.",
  },
  {
    id: "Paper and paperboard packaging",
    label: "Paper and paperboard packaging",
    image: "/images/food-grid6.webp",
    description:
      "Large-character carton and case marking that stays legible through warehouse handling and storage.",
  },
  {
    id: "Cardboard and corrugated cases",
    label: "Cardboard and\n corrugated cases",
    image: "/images/food-grid7.webp",
    description:
      "Large-character carton and case marking that stays legible through warehouse handling and storage.",
  },
  {
    id: "Coated and glossy cartons",
    label: "Coated and glossy\n cartons",
    image: "/images/food-grid8.webp",
    description:
      "Large-character carton and case marking that stays legible through warehouse handling and storage.",
  },
  {
    id: "Labels",
    label: "Labels",
    image: "/images/food-grid9.webp",
    description:
      "Large-character carton and case marking that stays legible through warehouse handling and storage.",
  },
  {
    id: "Bottle caps",
    label: "Bottle caps",
    image: "/images/food-grid10.webp",
    description:
      "Large-character carton and case marking that stays legible through warehouse handling and storage.",
  },
];

type HeroCta = {
  label: string;
  href: string;
};

type SplitHeroProps = {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
};

export default function SplitHero() {
  return (
    <>
      <Navbar />
      <Container width="fullWidth" className="flex-col items-center">
        <Container className="3xl:max-w-[120rem] w-full 2xl:max-w-360 grid gap-6 px-4 pt-20 pb-10 md:grid-cols-2 lg:px-16 lg:pt-28 lg:pb-20">
          <Container className="flex-col justify-start gap-6 lg:gap-8">
            <Typography className="m-0 font-outfit text-[44px] leading-[1.1] font-semibold tracking-[-1px] text-[#272631] lg:text-[80px] lg:leading-[1.1]">
              From Production Line to Store Shelf, Keep It Simple
            </Typography>

            <Typography className="m-0 font-inter text-[16px] leading-6 text-[#525159] lg:text-[16px] lg:leading-7 lg:max-w-[95%]">
              Simplify the process that prepares your products for the market
              with reliable coding, marking, labeling, and packaging solutions
              built for growing food and beverage operations
            </Typography>

            <Container className="mt-2 w-full flex-col gap-4 md:w-auto md:flex-row lg:mt-4">
              <Link
                href="/"
                className="flex w-full items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-[#9A1A1C] px-6 py-3.5 text-center font-outfit text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-red-950 hover:text-white md:w-auto"
              >
                Find my printer
              </Link>

              <Link
                href="/"
                className="flex w-full items-center justify-center whitespace-nowrap rounded-full border border-[#770000] bg-white px-6 py-3.5 text-center font-outfit text-[16px] font-semibold text-[#770000] transition-colors duration-200 hover:bg-red-50 hover:text-[#770000] md:w-auto"
              >
                Watch it in action
              </Link>
            </Container>
          </Container>

          <Container className="relative aspect-2/1 w-full overflow-hidden rounded-3xl bg-neutral-200 md:aspect-auto md:min-h-[320px] lg:min-h-[540px]">
            <Media
              src="/images/food-hero.webp"
              alt="hero"
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Container>
        </Container>
      </Container>
      <TwoColumnTextSection
        heading="About the Solution"
        description="Food and beverage production comes with a lot to keep track of, from applying clear date and lot codes to labeling products, moving them through production, and preparing cases for distribution. Sneed helps simplify those processes with practical coding, marking, packaging, and labeling solutions designed to improve efficiency without adding unnecessary complexity. Whether you are coding your first products by hand or automating more of your production line, our solutions can help you maintain consistent product identification, improve traceability, reduce manual processes, and keep up as demand grows. "
        image="/images/food-two-col-text.webp"
        imageAlt="Automated marking system printing a batch code on a box"
      />
      <PainPointsSection
        heading={"Customer Pain\n Points We Help Solve"}
        points={[
          "Inconsistent or illegible date, lot, and batch codes",
          "Manual coding, labeling, and packaging processes that slow production",
          "Growing production volumes that make existing processes difficult to maintain",
          "The need for better product traceability and identification",
          "Equipment that is overly complicated to operate or maintain",
          "Preparing products and cases for retail and distribution",
        ]}
      />
      <SurfaceGrid
        heading="Built for every surface"
        intro={
          "Our SNEED-JET® printers can code and mark a wide range of food and beverage products, packaging materials, and secondary packaging, including,\nbut not limited to:"
        }
        items={SURFACES}
      />
      <PainPointsSection
        variant="dark"
        heading={"Advantages Specific\n to This Industry"}
        points={[
          {
            title: "Code Every Batch With Confidence",
            description:
              "Apply clear date, lot, batch, and other traceability information to help identify food and beverage products as they move from production through distribution.",
          },
          {
            title: "Keep Up With Changing SKUs",
            description:
              "Quickly update codes and messages when switching between flavors, recipes, package sizes, production runs, or seasonal products.",
          },
          {
            title: "Print Across Diverse Packaging",
            description:
              "Code bottles, cans, jars, pouches, cartons, cases, and other common food and beverage packaging with ink options suited for porous and nonporous surfaces.",
          },
          {
            title: "Prepare Products for Retail Growth",
            description:
              "Build more consistent coding, labeling, and packaging processes as production increases and your products move into larger retail and distribution channels.",
          },
          {
            title: "Reduce Hands On Packaging Work",
            description:
              "Automate repetitive tasks such as inline coding, case forming, case sealing, labeling, and product handling as production volume grows.",
          },
          {
            title: "Verify Your Packaging Before You Buy",
            description:
              "Send your actual bottles, cans, pouches, cartons, or other packaging to our Print Sample Lab to test print quality, adhesion, and application fit before choosing a solution.",
          },
        ]}
      />
      <SuccessStories />
      <ProductVideoCarousel
        heading="See how it works in action"
        videos={DATE_CODING_VIDEOS}
      />
      <FeaturedProducts
        heading="Featured Products"
        description="Every system shares the same ink chemistry, controller, and service network — scaled from compact benchtop to heavy industrial deployment."
        products={PRODUCTS}
      />
      <Poster
        image="/images/ctabanner.png"
        eyebrow="Take Action now"
        heading="Get Your Products Shelf Ready"
        description="Find the coding, labeling, and packaging solutions you need to move your food and beverage products from production to the shelf with confidence."
        cta={{ label: "Start the product finder", href: "/find-my-printer" }}
      />
      <Footer />
    </>
  );
}
