"use client";

import { useState, useMemo } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";
import { cn } from "@/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const TABS = ["Technologies", "Industries", "Applications", "Substrates"];
const FILTERS = [
  "Laser",
  "Inkjet",
  "Thermal",
  "3D Printing",
  "Dot Matrix",
  "LED",
];
const ITEMS_PER_PAGE = 9;

interface CaseStudy {
  id: string;
  image: string;
  tags: [string, string];
  title: string;
  excerpt: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    image: "/images/case-color-calibration.jpg",
    tags: ["Case Study", "Commercial Printing"],
    title:
      "Albright Press Reduces Waste by 38% With Automated Color Calibration",
    excerpt:
      "Inconsistent color matching across their fleet of 12 wide-format printers was driving up material costs. Automated spectrophotometer integration now calibrates every job in seconds.",
  },
  {
    id: "2",
    image: "/images/case-label-printing.jpg",
    tags: ["Case Study", "Packaging & Labels"],
    title: "Pinnacle Packaging Doubles Output With High-Speed Digital Labeling",
    excerpt:
      "Switching from flexo to digital inset for short-run labels delivered instant ROI. They now deliver 48-hour turnaround on custom packaging with zero setup waste.",
  },
  {
    id: "3",
    image: "/images/case-3d-printing.jpg",
    tags: ["Case Study", "3D Printing & Prototyping"],
    title: "Axiom Engineering Cuts Prototype Lead Time From 3 Weeks to 2 Days",
    excerpt:
      "Their multi-material 3D printer fleet now produces functional prototypes overnight. Design-iteration cycles that once took weeks now happen within a single sprint.",
  },
  {
    id: "4",
    image: "/images/case-managed-print.jpg",
    tags: ["Case Study", "Managed Print Services"],
    title: "Lakewood School District Saves $220K Annually on Print Management",
    excerpt:
      "With 1,400 staff across 28 buildings, unmanaged printing was straining an already-tight budget. Centralized fleet monitoring and pull-printing cut costs by 41% in the first year.",
  },
  {
    id: "5",
    image: "/images/case-textile-dtg.jpg",
    tags: ["Case Study", "Textile & DTG"],
    title:
      "ThreadCraft Studios Scales Custom Apparel With Direct-to-Garment Printing",
    excerpt:
      "On-demand garment printing let them eliminate risk entirely. Each order prints in under 90 seconds with photographic color accuracy on cotton and polyester blends.",
  },
  {
    id: "6",
    image: "/images/case-signage.jpg",
    tags: ["Case Study", "Large Format & Signage"],
    title:
      "Metro Displays Delivers Same-Day Signage With UV Flatbed Technology",
    excerpt:
      "Retail clients demanded faster turnaround on point-of-sale displays. UV-curable flatbed printing on rigid substrates now ships same-day for orders placed before noon.",
  },
  {
    id: "7",
    image: "/images/case-labels-packaging-2.jpg",
    tags: ["Case Study", "Digital Labels & Packaging"],
    title:
      "Harvest & Vine Cuts Label Turnaround From Weeks to Hours With Digital Press",
    excerpt:
      "Seasonal craft beverage labels required overstock at term changes. Switching to digital label printing eliminated dead stock and enabled 24-hour turnaround on short runs of 500+.",
  },
  {
    id: "8",
    image: "/images/case-prepress-workflow.jpg",
    tags: ["Case Study", "Production & Workflow"],
    title:
      "Pinnacle Print Group Doubles Output After Automating Prepress Workflow",
    excerpt:
      "Manual file checks and color proofing created a two-day bottleneck. Automated preflight and soft-proofing now push jobs to press in under 30 minutes.",
  },
  {
    id: "9",
    image: "/images/case-warehouse.jpg",
    tags: ["Case Study", "Beer & Publication Printing"],
    title:
      "Rediloaf Publishing Launches Print-on-Demand With Zero Warehouse Overhead",
    excerpt:
      "Maintaining inventory for 3,000 titles was unsustainable. Digital book printing with automated binding now fulfills single-copy orders within 48 hours of purchase.",
  },
  {
    id: "10",
    image: "/images/case-label-printing.jpg",
    tags: ["Case Study", "Packaging & Labels"],
    title: "Pinnacle Packaging Doubles Output With High-Speed Digital Labeling",
    excerpt:
      "Switching from flexo to digital inset for short-run labels delivered instant ROI. They now deliver 48-hour turnaround on custom packaging with zero setup waste.",
  },
  {
    id: "11",
    image: "/images/case-color-calibration.jpg",
    tags: ["Case Study", "Commercial Printing"],
    title:
      "Albright Press Reduces Waste by 38% With Automated Color Calibration",
    excerpt:
      "Inconsistent color matching across their fleet of 12 wide-format printers was driving up material costs. Automated spectrophotometer integration now calibrates every job in seconds.",
  },
  {
    id: "12",
    image: "/images/case-3d-printing.jpg",
    tags: ["Case Study", "3D Printing & Prototyping"],
    title: "Axiom Engineering Cuts Prototype Lead Time From 3 Weeks to 2 Days",
    excerpt:
      "Their multi-material 3D printer fleet now produces functional prototypes overnight. Design-iteration cycles that once took weeks now happen within a single sprint.",
  },
  {
    id: "13",
    image: "/images/case-managed-print.jpg",
    tags: ["Case Study", "Managed Print Services"],
    title: "Lakewood School District Saves $220K Annually on Print Management",
    excerpt:
      "With 1,400 staff across 28 buildings, unmanaged printing was straining an already-tight budget. Centralized fleet monitoring and pull-printing cut costs by 41% in the first year.",
  },
  {
    id: "14",
    image: "/images/case-textile-dtg.jpg",
    tags: ["Case Study", "Textile & DTG"],
    title:
      "ThreadCraft Studios Scales Custom Apparel With Direct-to-Garment Printing",
    excerpt:
      "On-demand garment printing let them eliminate risk entirely. Each order prints in under 90 seconds with photographic color accuracy on cotton and polyester blends.",
  },
  {
    id: "15",
    image: "/images/case-signage.jpg",
    tags: ["Case Study", "Large Format & Signage"],
    title:
      "Metro Displays Delivers Same-Day Signage With UV Flatbed Technology",
    excerpt:
      "Retail clients demanded faster turnaround on point-of-sale displays. UV-curable flatbed printing on rigid substrates now ships same-day for orders placed before noon.",
  },
  {
    id: "16",
    image: "/images/case-warehouse.jpg",
    tags: ["Case Study", "Beer & Publication Printing"],
    title:
      "Rediloaf Publishing Launches Print-on-Demand With Zero Warehouse Overhead",
    excerpt:
      "Maintaining inventory for 3,000 titles was unsustainable. Digital book printing with automated binding now fulfills single-copy orders within 48 hours of purchase.",
  },
  {
    id: "17",
    image: "/images/case-prepress-workflow.jpg",
    tags: ["Case Study", "Production & Workflow"],
    title:
      "Pinnacle Print Group Doubles Output After Automating Prepress Workflow",
    excerpt:
      "Manual file checks and color proofing created a two-day bottleneck. Automated preflight and soft-proofing now push jobs to press in under 30 minutes.",
  },
  {
    id: "18",
    image: "/images/case-labels-packaging-2.jpg",
    tags: ["Case Study", "Digital Labels & Packaging"],
    title:
      "Harvest & Vine Cuts Label Turnaround From Weeks to Hours With Digital Press",
    excerpt:
      "Seasonal craft beverage labels required overstock at term changes. Switching to digital label printing eliminated dead stock and enabled 24-hour turnaround on short runs of 500+.",
  },
];

function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  return (
    <Container className="items-center gap-2">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(Math.max(1, page - 1))}
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#E7E7EA] text-gray-500 hover:border-[#9B1B32]/40 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={16} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          className={cn(
            "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[14px] font-semibold transition-colors",
            p === page
              ? "bg-[#9B1B32] text-white"
              : "text-gray-500 hover:bg-[#F3F1EC]",
          )}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#E7E7EA] text-gray-500 hover:border-[#9B1B32]/40 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={16} />
      </button>
    </Container>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Container
      className={cn(
        "flex-col overflow-hidden rounded-2xl border border-[#E7E7EA]", // mobile/tablet: bordered card
        "lg:overflow-visible lg:rounded-none lg:border-0", // desktop: borderless, image-over-text
      )}
    >
      <Container className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200 lg:aspect-[4/3] lg:rounded-2xl">
        <Media
          src={study.image}
          alt={study.title}
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
      </Container>

      <Container className="flex-col p-4 lg:mt-3 lg:p-0">
        <Container className="items-center gap-2">
          <span className="rounded-full border border-[#24232D]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#24232D]">
            {study.tags[0]}
          </span>
          <span className="rounded-full border border-[#24232D]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#24232D]">
            {study.tags[1]}
          </span>
        </Container>

        <Typography className="m-0 mt-3 font-outfit text-[16px] font-bold leading-snug text-[#24232D] lg:text-[17px]">
          {study.title}
        </Typography>

        <Typography className="m-0 mt-2 text-[13.5px] leading-snug text-gray-500">
          {study.excerpt}
        </Typography>

        <button
          type="button"
          className="mt-3 flex w-fit cursor-pointer items-center gap-1 text-[14px] font-semibold text-[#9B1B32] hover:opacity-80"
        >
          Read More
          <ChevronRight size={15} />
        </button>
      </Container>
    </Container>
  );
}

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Laser",
    "Inkjet",
  ]);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(CASE_STUDIES.length / ITEMS_PER_PAGE),
  );

  const paginatedStudies = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return CASE_STUDIES.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  const changePage = (nextPage: number) => {
    setPage(nextPage);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <Container className="flex-col mt-10 lg:mt-20 bg-white px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-14">
        <Container width="fullWidth" className="mx-auto max-w-325 flex-col">
          {/* Heading */}
          <Typography className="m-0 font-outfit text-[26px] font-bold leading-tight text-[#24232D] lg:text-[34px]">
            Case studies
          </Typography>

          <Container className="mt-6 items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-8">
            {TABS.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "shrink-0 cursor-pointer whitespace-nowrap pb-2 font-outfit text-[15px] font-bold transition-colors lg:text-[17px]",
                    isActive
                      ? "border-b-2 border-[#9B1B32] text-[#9B1B32]"
                      : "border-b-2 border-transparent text-[#24232D] hover:text-[#9B1B32]",
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </Container>

          <Container className="mt-4 items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FILTERS.map((filter) => {
              const isActive = activeFilters.includes(filter);
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => toggleFilter(filter)}
                  className={cn(
                    "shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors",
                    isActive
                      ? "bg-[#9B1B32] text-white"
                      : "border border-[#E7E7EA] text-gray-500 hover:border-[#9B1B32]/40",
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </Container>

          <Container
            width="fullWidth"
            className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:mt-8 lg:grid-cols-3 lg:gap-y-10"
          >
            {paginatedStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </Container>

          {totalPages > 1 && (
            <Container className="mt-10 items-center justify-center lg:justify-start">
              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={changePage}
              />
            </Container>
          )}
        </Container>
      </Container>
      <Footer />
    </>
  );
}
