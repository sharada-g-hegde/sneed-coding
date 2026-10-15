"use client";

import { Fragment, useEffect, useState } from "react";
import { X } from "lucide-react";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import Pagination from "../pagination";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string[];
};

const PAGE_SIZE = 10;

const JOAN_BIO = [
  "Joan Payden is Founder and Chief Executive Officer of Payden & Rygel, the global investment management firm that she founded in 1983 and has overseen the firm’s international expansion. In 1992 the firm launched Payden & Rygel Investment Group, a family of mutual funds. Subsequently many of these strategies were duplicated in UCITS funds domiciled in Ireland. In 1998 Payden & Rygel Global Ltd. was founded in London. At the same time, the firm established Metzler-Payden, LLC, its joint venture with Metzler Bank, Germany’s oldest private bank. In addition to the London office, in 2010 a Boston office was opened and more recently opened the Milan, Italy office.",
  "Joan serves on the UCLA Anderson School board of advisors and is a trustee of Loyola Marymount University and a trustee emeritus of the University of Southern California. She is also a member of the board of the Town Hall of Los Angeles, the Los Angeles Sports Council, the California Chamber of Commerce, and the Natural History Museum of Los Angeles. She is past chairman of the Investment Counsel Association of America.",
  "Joan is a graduate of the Advanced Management Program at Harvard Business School and earned a BA from Trinity Washington University in Mathematics and Physics.",
];

const TEAM: TeamMember[] = [
  {
    name: "Joan A. Payden, CFA",
    role: "Founder & CEO",
    image: "/images/JoanPayden2.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Brian W. Matthews, CFA",
    role: "President",
    image: "/images/team-2.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Kristin J. Ceva, PhD, CFA",
    role: "Managing Director",
    image: "/images/team-3.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Jeffrey C. Cleveland",
    role: "Managing Director",
    image: "/images/team-4.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Alfred Giles, CFA",
    role: "Managing Director",
    image: "/images/team-5.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Bradley F. Hersh",
    role: "Chief Financial Officer",
    image: "/images/team-6.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Arthur Hovsepian, CFA",
    role: "Managing Director",
    image: "/images/team-7.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Nigel Jenkins, ASIP",
    role: "Managing Director",
    image: "/images/team-8.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Laura Lake, CAIA, CFA",
    role: "Managing Director",
    image: "/images/team-9.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Jordan H. Lopez, CFA",
    role: "Managing Director",
    image: "/images/team-10.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Joan A. Payden, CFA",
    role: "Founder & CEO",
    image: "/images/team-10.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Joan A. Payden, CFA",
    role: "Founder & CEO",
    image: "/images/team-2.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Joan A. Payden, CFA",
    role: "Founder & CEO",
    image: "/images/team-3.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Joan A. Payden, CFA",
    role: "Founder & CEO",
    image: "/images/team-4.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Joan A. Payden, CFA",
    role: "Founder & CEO",
    image: "/images/team-5.webp",
    bio: JOAN_BIO,
  },
  {
    name: "Joan A. Payden, CFA",
    role: "Founder & CEO",
    image: "/images/team-6.webp",
    bio: JOAN_BIO,
  },
];

const GRID_ID = "team-grid";
const PANEL_ID = "team-detail";

export default function Team() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<number | null>(null);
  const [panelTop, setPanelTop] = useState(0);

  const totalPages = Math.ceil(TEAM.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visibleMembers = TEAM.slice(start, start + PAGE_SIZE);
  const selectedMember = selected !== null ? visibleMembers[selected] : null;

  // Keep the popup aligned with the selected card whenever the grid resizes
  // (e.g. column count changes at a breakpoint). setState is only called from
  // the ResizeObserver callback, so it doesn't trigger the lint error.
  useEffect(() => {
    if (selected === null) return;

    const grid = document.getElementById(GRID_ID);
    if (!grid) return;

    const updatePanelTop = () => {
      const card =
        grid.querySelectorAll<HTMLElement>("[data-team-card]")[selected];
      if (card) setPanelTop(card.offsetTop);
    };

    // Fires once on observe() and again whenever the grid resizes
    const observer = new ResizeObserver(updatePanelTop);
    observer.observe(grid);

    return () => observer.disconnect();
  }, [selected]);

  useEffect(() => {
    if (selected === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  useEffect(() => {
    if (selected === null) return;

    document
      .getElementById(PANEL_ID)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [selected]);

  const handlePageChange = (next: number) => {
    setPage(next);
    setSelected(null);
  };

  return (
    <Container
      width="fullWidth"
      className="flex-col justify-center items-center"
    >
      <Container className="w-full 2xl:max-w-480 px-4 py-20 lg:px-16 lg:py-28">
        <Container className="w-full flex-col gap-20">
          <Container className="flex-col gap-4 items-start">
            <Typography className="max-w-225 text-left text-gray-700 lg:text-[48px] text-[36px] font-brandon-grotesque">
              Our Team
            </Typography>

            <Typography className="lg:text-[18px] text-[18px] font-albertSans text-[#2F3B47] lg:mt-3">
              Meet the leadership guiding our investment strategies.
            </Typography>
          </Container>

          <Container className="w-full flex-col">
            <Container
              id={GRID_ID}
              className="relative grid w-full grid-cols-[repeat(2,minmax(auto,1fr))] justify-items-center gap-4 md:grid-cols-[repeat(3,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(198px,1fr))] lg:gap-8 xl:grid-cols-[repeat(5,minmax(198px,1fr))]"
            >
              {visibleMembers.map((member, i) => (
                <Fragment key={`${member.name}-${start + i}`}>
                  <button
                    data-team-card
                    type="button"
                    aria-expanded={selected === i}
                    aria-controls={PANEL_ID}
                    onClick={(event) => {
                      if (selected === i) {
                        setSelected(null);
                        return;
                      }

                      setPanelTop(event.currentTarget.offsetTop);
                      setSelected(i);
                    }}
                    className="flex w-auto max-w-50 cursor-pointer flex-col rounded-[1.25rem] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00b0a3]"
                  >
                    <Container className="relative inline-block w-full shrink-0 rounded-[1.25rem] sm:h-50 sm:w-49.5">
                      <Media
                        alt={member.name}
                        width="400"
                        height="400"
                        className="h-auto w-auto rounded-[1.25rem] object-cover sm:h-50 sm:w-49.5"
                        src={member.image}
                      />
                    </Container>

                    <Container className="mt-4 flex-col gap-2">
                      <Typography className="font-brandon-grotesque text-[18px] text-[#124363] lg:text-[20px]">
                        {member.name}
                      </Typography>

                      <Typography className="font-albertSans text-[16px] text-[#2F3B47] lg:mt-2">
                        {member.role}
                      </Typography>
                    </Container>
                  </button>

                  {selectedMember && i === visibleMembers.length - 1 && (
                    <Container
                      id={PANEL_ID}
                      role="region"
                      aria-label={`About ${selectedMember.name}`}
                      width="fullWidth"
                      className="absolute left-0 right-0 z-20 flex-col rounded-[1.75rem] bg-[linear-gradient(165deg,#41697f_0%,#274a62_40%,#1e3a4f_100%)] p-6 text-white shadow-xl transition-all duration-300 starting:-translate-y-2 starting:opacity-0 lg:flex-row lg:gap-10 lg:p-10"
                      style={{ top: `${panelTop}px` }}
                    >
                      <button
                        type="button"
                        aria-label="Close"
                        onClick={() => setSelected(null)}
                        className="absolute right-5 top-5 z-10 cursor-pointer rounded-full p-1 text-white transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:right-12 lg:top-12"
                      >
                        <X size={28} />
                      </button>

                      <Container className="shrink-0 lg:w-50 w-50">
                        <Media
                          alt={selectedMember.name}
                          width="400"
                          height="400"
                          className=" w-full rounded-[1.25rem] object-cover lg:h-50 h-50"
                          src={selectedMember.image}
                        />
                      </Container>

                      <Container className="mt-6 shrink-0 flex-col gap-2 lg:mt-0 lg:w-10rem">
                        <Typography className="font-brandon-grotesque lg:text-[20px] text-[18px] leading-9 text-white">
                          {selectedMember.name}
                        </Typography>

                        <Typography className="font-albertSans text-[16px] text-white/90">
                          {selectedMember.role}
                        </Typography>
                      </Container>

                      <Container className="mt-1 flex-1 flex-col gap-1 lg:mt-0 lg:pr-12">
                        {selectedMember.bio.map((paragraph) => (
                          <Typography
                            key={paragraph.slice(0, 40)}
                            className="font-albertSans text-base leading-[1.65] text-white lg:text-[16px]"
                          >
                            {paragraph}
                          </Typography>
                        ))}
                      </Container>
                    </Container>
                  )}
                </Fragment>
              ))}
            </Container>

            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-12 justify-center"
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
