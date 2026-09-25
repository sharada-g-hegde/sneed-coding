"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";
import { cn } from "@/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LetsMeetForm from "@/components/widgets/form";

const TABS = [
  "Technologies",
  "Industries",
  "Applications",
  "Substrates",
] as const;
type Tab = (typeof TABS)[number];

const TAB_FILTERS: Record<Tab, string[]> = {
  Technologies: [
    "Laser",
    "Inkjet",
    "Thermal",
    "3D Printing",
    "Dot Matrix",
    "LED",
  ],
  Industries: [
    "Food & Beverage",
    "Pharmaceutical",
    "Packaging",
    "Publishing",
    "Education",
  ],
  Applications: [
    "Labeling",
    "Signage",
    "Prototyping",
    "Prepress",
    "Print-on-Demand",
  ],
  Substrates: ["Paper", "Plastic", "Textile", "Rigid Board", "Glass"],
};

// Maps each tab to the CaseStudy field it filters against
const TAB_FIELD: Record<Tab, keyof CaseStudy> = {
  Technologies: "technologies",
  Industries: "industries",
  Applications: "applications",
  Substrates: "substrates",
};

const ITEMS_PER_PAGE = 9;

interface CaseStudy {
  id: string;
  image: string;
  tags: [string, string];
  title: string;
  excerpt: string;
  technologies: string[];
  industries: string[];
  applications: string[];
  substrates: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    image: "/images/expandimage-1.webp",
    tags: ["Case Study", "Commercial Printing"],
    title:
      "Albright Press Reduces Waste by 38% With Automated Color Calibration",
    excerpt:
      "Inconsistent color matching across their fleet of 12 wide-format printers was driving up material costs. Automated spectrophotometer integration now calibrates every job in seconds.",
    technologies: ["Inkjet"],
    industries: ["Publishing"],
    applications: ["Prepress"],
    substrates: ["Paper"],
  },
  {
    id: "2",
    image: "/images/exapandible-2.webp",
    tags: ["Case Study", "Packaging & Labels"],
    title: "Pinnacle Packaging Doubles Output With High-Speed Digital Labeling",
    excerpt:
      "Switching from flexo to digital inset for short-run labels delivered instant ROI. They now deliver 48-hour turnaround on custom packaging with zero setup waste.",
    technologies: ["Inkjet", "Thermal"],
    industries: ["Packaging"],
    applications: ["Labeling"],
    substrates: ["Plastic", "Paper"],
  },
  {
    id: "3",
    image: "/images/exapandable-3.webp",
    tags: ["Case Study", "3D Printing & Prototyping"],
    title: "Axiom Engineering Cuts Prototype Lead Time From 3 Weeks to 2 Days",
    excerpt:
      "Their multi-material 3D printer fleet now produces functional prototypes overnight. Design-iteration cycles that once took weeks now happen within a single sprint.",
    technologies: ["3D Printing"],
    industries: ["Education"],
    applications: ["Prototyping"],
    substrates: ["Plastic"],
  },
  {
    id: "4",
    image: "/images/expandable-4.webp",
    tags: ["Case Study", "Managed Print Services"],
    title: "Lakewood School District Saves $220K Annually on Print Management",
    excerpt:
      "With 1,400 staff across 28 buildings, unmanaged printing was straining an already-tight budget. Centralized fleet monitoring and pull-printing cut costs by 41% in the first year.",
    technologies: ["Laser", "Dot Matrix"],
    industries: ["Education"],
    applications: ["Prepress"],
    substrates: ["Paper"],
  },
  {
    id: "5",
    image: "/images/expandable-5.webp",
    tags: ["Case Study", "Textile & DTG"],
    title:
      "ThreadCraft Studios Scales Custom Apparel With Direct-to-Garment Printing",
    excerpt:
      "On-demand garment printing let them eliminate risk entirely. Each order prints in under 90 seconds with photographic color accuracy on cotton and polyester blends.",
    technologies: ["Inkjet"],
    industries: ["Packaging"],
    applications: ["Print-on-Demand"],
    substrates: ["Textile"],
  },
  {
    id: "6",
    image: "/images/expandimage-1.webp",
    tags: ["Case Study", "Large Format & Signage"],
    title:
      "Metro Displays Delivers Same-Day Signage With UV Flatbed Technology",
    excerpt:
      "Retail clients demanded faster turnaround on point-of-sale displays. UV-curable flatbed printing on rigid substrates now ships same-day for orders placed before noon.",
    technologies: ["Inkjet", "LED"],
    industries: ["Packaging"],
    applications: ["Signage"],
    substrates: ["Rigid Board", "Glass"],
  },
  {
    id: "7",
    image: "/images/exapandible-2.webp",
    tags: ["Case Study", "Digital Labels & Packaging"],
    title:
      "Harvest & Vine Cuts Label Turnaround From Weeks to Hours With Digital Press",
    excerpt:
      "Seasonal craft beverage labels required overstock at term changes. Switching to digital label printing eliminated dead stock and enabled 24-hour turnaround on short runs of 500+.",
    technologies: ["Inkjet", "Thermal"],
    industries: ["Food & Beverage"],
    applications: ["Labeling"],
    substrates: ["Paper", "Plastic"],
  },
  {
    id: "8",
    image: "/images/expandable-5.webp",
    tags: ["Case Study", "Production & Workflow"],
    title:
      "Pinnacle Print Group Doubles Output After Automating Prepress Workflow",
    excerpt:
      "Manual file checks and color proofing created a two-day bottleneck. Automated preflight and soft-proofing now push jobs to press in under 30 minutes.",
    technologies: ["Laser"],
    industries: ["Publishing"],
    applications: ["Prepress"],
    substrates: ["Paper"],
  },
  {
    id: "9",
    image: "/images/gallery-1.jpg",
    tags: ["Case Study", "Beer & Publication Printing"],
    title:
      "Rediloaf Publishing Launches Print-on-Demand With Zero Warehouse Overhead",
    excerpt:
      "Maintaining inventory for 3,000 titles was unsustainable. Digital book printing with automated binding now fulfills single-copy orders within 48 hours of purchase.",
    technologies: ["Laser", "Inkjet"],
    industries: ["Publishing"],
    applications: ["Print-on-Demand"],
    substrates: ["Paper"],
  },
  {
    id: "10",
    image: "/images/gallery-2.jpg",
    tags: ["Case Study", "Packaging & Labels"],
    title: "Pinnacle Packaging Doubles Output With High-Speed Digital Labeling",
    excerpt:
      "Switching from flexo to digital inset for short-run labels delivered instant ROI. They now deliver 48-hour turnaround on custom packaging with zero setup waste.",
    technologies: ["Inkjet", "Thermal"],
    industries: ["Packaging"],
    applications: ["Labeling"],
    substrates: ["Plastic", "Paper"],
  },
  {
    id: "11",
    image: "/images/gallery-3.jpg",
    tags: ["Case Study", "Commercial Printing"],
    title:
      "Albright Press Reduces Waste by 38% With Automated Color Calibration",
    excerpt:
      "Inconsistent color matching across their fleet of 12 wide-format printers was driving up material costs. Automated spectrophotometer integration now calibrates every job in seconds.",
    technologies: ["Inkjet"],
    industries: ["Publishing"],
    applications: ["Prepress"],
    substrates: ["Paper"],
  },
  {
    id: "12",
    image: "/images/gallery-4.jpg",
    tags: ["Case Study", "3D Printing & Prototyping"],
    title: "Axiom Engineering Cuts Prototype Lead Time From 3 Weeks to 2 Days",
    excerpt:
      "Their multi-material 3D printer fleet now produces functional prototypes overnight. Design-iteration cycles that once took weeks now happen within a single sprint.",
    technologies: ["3D Printing"],
    industries: ["Education"],
    applications: ["Prototyping"],
    substrates: ["Plastic"],
  },
  {
    id: "13",
    image: "/images/gallery-1.jpg",
    tags: ["Case Study", "Managed Print Services"],
    title: "Lakewood School District Saves $220K Annually on Print Management",
    excerpt:
      "With 1,400 staff across 28 buildings, unmanaged printing was straining an already-tight budget. Centralized fleet monitoring and pull-printing cut costs by 41% in the first year.",
    technologies: ["Laser", "Dot Matrix"],
    industries: ["Education"],
    applications: ["Prepress"],
    substrates: ["Paper"],
  },
  {
    id: "14",
    image: "/images/exapandable-3.webp",
    tags: ["Case Study", "Textile & DTG"],
    title:
      "ThreadCraft Studios Scales Custom Apparel With Direct-to-Garment Printing",
    excerpt:
      "On-demand garment printing let them eliminate risk entirely. Each order prints in under 90 seconds with photographic color accuracy on cotton and polyester blends.",
    technologies: ["Inkjet"],
    industries: ["Packaging"],
    applications: ["Print-on-Demand"],
    substrates: ["Textile"],
  },
  {
    id: "15",
    image: "/images/exapandable-3.webp",
    tags: ["Case Study", "Large Format & Signage"],
    title:
      "Metro Displays Delivers Same-Day Signage With UV Flatbed Technology",
    excerpt:
      "Retail clients demanded faster turnaround on point-of-sale displays. UV-curable flatbed printing on rigid substrates now ships same-day for orders placed before noon.",
    technologies: ["Inkjet", "LED"],
    industries: ["Packaging"],
    applications: ["Signage"],
    substrates: ["Rigid Board", "Glass"],
  },
  {
    id: "16",
    image: "/images/expandable-5.webp",
    tags: ["Case Study", "Beer & Publication Printing"],
    title:
      "Rediloaf Publishing Launches Print-on-Demand With Zero Warehouse Overhead",
    excerpt:
      "Maintaining inventory for 3,000 titles was unsustainable. Digital book printing with automated binding now fulfills single-copy orders within 48 hours of purchase.",
    technologies: ["Laser", "Inkjet"],
    industries: ["Publishing"],
    applications: ["Print-on-Demand"],
    substrates: ["Paper"],
  },
  {
    id: "17",
    image: "/images/exapandable-3.webp",
    tags: ["Case Study", "Production & Workflow"],
    title:
      "Pinnacle Print Group Doubles Output After Automating Prepress Workflow",
    excerpt:
      "Manual file checks and color proofing created a two-day bottleneck. Automated preflight and soft-proofing now push jobs to press in under 30 minutes.",
    technologies: ["Laser"],
    industries: ["Publishing"],
    applications: ["Prepress"],
    substrates: ["Paper"],
  },
  {
    id: "18",
    image: "/images/gallery-4.jpg",
    tags: ["Case Study", "Digital Labels & Packaging"],
    title:
      "Harvest & Vine Cuts Label Turnaround From Weeks to Hours With Digital Press",
    excerpt:
      "Seasonal craft beverage labels required overstock at term changes. Switching to digital label printing eliminated dead stock and enabled 24-hour turnaround on short runs of 500+.",
    technologies: ["Inkjet", "Thermal"],
    industries: ["Food & Beverage"],
    applications: ["Labeling"],
    substrates: ["Paper", "Plastic"],
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
        "flex-col overflow-hidden h-full rounded-2xl border border-[#E7E7EA]",
        "lg:overflow-visible lg:rounded-none lg:border-0",
      )}
    >
      <Container className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200 lg:aspect-[4/2.5] lg:rounded-2xl">
        <Media
          src={study.image}
          alt={study.title}
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
      </Container>

      <Container className="flex-col flex-1 p-4 lg:mt-5 lg:p-0">
        <Container className="items-center gap-3">
          <span className="rounded-full border font-inter border-gray-300 px-2.5 py-0.75 text-[12px] font-medium text-gray-500">
            {study.tags[0]}
          </span>
          <span className="rounded-full border font-inter border-gray-300 px-2.5 py-0.75 text-[12px] font-medium text-gray-500">
            {study.tags[1]}
          </span>
        </Container>

        <Typography className="m-0 mt-3 font-outfit text-[16px] font-bold leading-snug text-[#24232D] lg:text-[20px]">
          {study.title}
        </Typography>

        <Typography className="m-0 mt-2 text-[12px] lg:leading-5 leading-snug text-gray-500">
          {study.excerpt}
        </Typography>

        <button
          type="button"
          className="mt-auto pt-4 flex w-fit font-outfit cursor-pointer items-center gap-1 text-[16px] font-semibold text-[#770000] hover:opacity-80"
        >
          Read More
          <ChevronRight size={15} />
        </button>
      </Container>
    </Container>
  );
}

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Technologies");

  const [activeFiltersByTab, setActiveFiltersByTab] = useState<
    Record<Tab, string[]>
  >({
    Technologies: ["Laser", "Inkjet"],
    Industries: [],
    Applications: [],
    Substrates: [],
  });

  const [page, setPage] = useState(1);

  const activeFilters = activeFiltersByTab[activeTab];
  const currentPills = TAB_FILTERS[activeTab];
  const currentField = TAB_FIELD[activeTab];

  const filteredStudies = useMemo(() => {
    if (activeFilters.length === 0) return CASE_STUDIES;
    return CASE_STUDIES.filter((study) => {
      const studyValues = study[currentField] as string[];
      return studyValues.some((v) => activeFilters.includes(v));
    });
  }, [activeFilters, currentField]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudies.length / ITEMS_PER_PAGE),
  );

  const clampedPage = Math.min(page, totalPages);

  const paginatedStudies = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredStudies.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredStudies, page]);

  const toggleFilter = (filter: string) => {
    setActiveFiltersByTab((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].includes(filter)
        ? prev[activeTab].filter((f) => f !== filter)
        : [...prev[activeTab], filter],
    }));
    setPage(1);
  };

  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
    setPage(1);
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
      <Container
        width="fullWidth"
        className="flex-col mt-10 items-center justify-center lg:mt-18 bg-white px-4 py-8 lg:px-6 lg:py-10 xl:px-16 xl:py-14"
      >
        <Container width="pageWidth" className="flex-col">
          <Typography className="m-0 font-outfit text-[26px] font-bold leading-tight text-[#24232D] lg:text-[82px]">
            Case studies
          </Typography>

          <Container className="mt-6 lg:mt-16 items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-8">
            {TABS.map((tab) => {
              const isActive = tab === activeTab;
              const count = activeFiltersByTab[tab].length;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => changeTab(tab)}
                  className={cn(
                    "shrink-0 cursor-pointer whitespace-nowrap font-outfit text-[15px] font-bold transition-colors lg:text-[36px]",
                    isActive
                      ? " text-[#770000]"
                      : " text-[#24232D] hover:text-[#9B1B32]",
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </Container>

          <Container className="mt-4 items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {currentPills.map((filter) => {
              const isActive = activeFilters.includes(filter);
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => toggleFilter(filter)}
                  className={cn(
                    "shrink-0 cursor-pointer whitespace-nowrap font-inter rounded-full px-4 py-2 text-[13px] font-normal transition-colors",
                    isActive
                      ? "bg-red-950 text-white"
                      : "border border-[#E7E7EA] text-gray-500 hover:border-[#9B1B32]/40",
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </Container>

          {filteredStudies.length === 0 ? (
            <Container className="mt-10 flex-col items-center justify-center rounded-2xl border border-dashed border-[#E7E7EA] py-16 text-center">
              <Typography className="m-0 font-outfit text-[16px] font-bold text-[#24232D]">
                No case studies match these filters
              </Typography>
              <Typography className="m-0 mt-1 text-[14px] text-gray-500">
                Try removing a filter to see more results.
              </Typography>
            </Container>
          ) : (
            <Container
              width="fullWidth"
              className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:mt-8 lg:grid-cols-3 lg:gap-y-10"
            >
              {paginatedStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </Container>
          )}

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
      <LetsMeetForm />
      <Footer />
    </>
  );
}
