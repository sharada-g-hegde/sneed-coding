"use client";

import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About Us", hasMenu: false },
  { label: "Strategies", hasMenu: true },
  { label: "Funds", hasMenu: true },
  { label: "Insights", hasMenu: true },
];

const MEGA_MENUS = ["Strategies", "Funds", "Insights"];

const FIXED_INCOME_LINKS = [
  "Core & Core Plus",
  "Investment Grade Corporates",
  "Enhanced Cash & Low Duration",
  "Liability Driven Investing (LDI)",
  "Emerging Markets Debt",
  "Securitized Income",
  "Global Fixed Income",
  "Strategic Income",
  "GNMA",
  "Municipal",
  "High Yield",
  "U.S. Government Bonds",
];

const OTHER_STRATEGIES = ["Unconstrained", "Balanced", "Equity"];

const INSIGHTS_LINKS = [
  "Market Insights",
  "Economic Updates",
  "EM Monthly Commentary",
  "EM Trip Notes",
];

const INSIGHTS_OTHERS = ["Point of View", "Week in Review", "Press Room"];

const SPLIT_MENUS: Record<
  string,
  { title: string; links: string[]; others: string[] }
> = {
  Strategies: {
    title: "Fixed Income",
    links: FIXED_INCOME_LINKS,
    others: OTHER_STRATEGIES,
  },
  Insights: {
    title: "All Insights",
    links: INSIGHTS_LINKS,
    others: INSIGHTS_OTHERS,
  },
};

const FUNDS_MENU = [
  {
    title: "U.S. Funds",
    cta: "View Funds",
    links: [
      "Prospectuses, Reports and Holdings",
      "Forms & Applications",
      "Purchase Payden Funds",
    ],
  },
  {
    title: "UCITS Funds",
    cta: "View Funds",
    links: ["Reports & Forms", "SDFR Policies", "Purchase Payden Funds"],
  },
  {
    title: "AIF",
    cta: "View Fund",
    links: ["Reports & Forms", "SDFR Policies", "Purchase Payden Funds"],
  },
];

// Change these image paths to your real files
const PRESS_ITEMS = [
  {
    title:
      "Fed Hike Strengthens the Case for the Front End of the U.S. Yield Curve",
    date: "Sep 24, 2026",
    image: "/images/navabr-2.webp",
  },
  {
    title:
      "Jeffrey Cleveland, Chief Economist, discusses the latest job report, inflation expectations…",
    date: "Sep 4, 2026",
    image: "/images/navbar-1.webp",
  },
];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function SearchIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7.5" />
      <path d="M16.5 16.5L21 21" />
    </svg>
  );
}

function Logo() {
  return (
    <Link href="/" aria-label="Home" variant="Link" className="shrink-0">
      <Media
        src="/images/payden-logo.webp"
        alt="Payden & Rygel logo"
        width={192}
        height={34}
      />
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [shownMenu, setShownMenu] = useState<string>("Strategies");
  const split = SPLIT_MENUS[shownMenu] ?? SPLIT_MENUS.Strategies;

  const toggleMenu = (label: string) => {
    if (openMenu === label) {
      setOpenMenu(null);
    } else {
      setShownMenu(label);
      setOpenMenu(label);
    }
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Container className="sticky top-0 z-50 flex-col w-full font-sans text-white">
      <Container
        width="fullWidth"
        className="hidden h-12 items-center justify-end gap-10 bg-[#0e2f45] px-8 lg:flex xl:px-[max(4.5vw,calc((100vw_-_1800px)/2))]"
      >
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap text-[14px] font-semibold"
        >
          Location Not Listed
          <Chevron />
        </button>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap text-[14px] font-semibold"
        >
          Institutional Investor
          <Chevron />
        </button>

        <button type="button" aria-label="Search" className="cursor-pointer">
          <SearchIcon size={22} />
        </button>
      </Container>

      <Container
        width="fullWidth"
        className="h-16 items-center justify-between bg-[#154362] px-6 lg:h-[76px] lg:px-8 xl:px-[max(4.5vw,calc((100vw_-_1800px)/2))]"
      >
        <Container className="items-center">
          <Logo />

          <nav className="ml-6 hidden items-center gap-6 lg:flex xl:ml-12 xl:gap-12">
            {NAV_LINKS.map((link) => {
              const isOpen = openMenu === link.label;
              const hasMega = MEGA_MENUS.includes(link.label);

              return (
                <button
                  key={link.label}
                  type="button"
                  aria-expanded={link.hasMenu ? isOpen : undefined}
                  onClick={() =>
                    hasMega ? toggleMenu(link.label) : setOpenMenu(null)
                  }
                  className={`flex cursor-pointer items-center gap-2 whitespace-nowrap text-[16px] font-semibold transition-colors ${
                    isOpen ? "text-[#00c4c4]" : "hover:text-[#00c4c4]"
                  }`}
                >
                  {link.label}
                  {link.hasMenu && (
                    <Chevron
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </Container>

        <Container className="hidden items-center gap-4 lg:flex">
          <Link
            href="#"
            variant="Link"
            className="whitespace-nowrap rounded-full bg-[#2b5a78] px-6 py-2.5 text-[16px] font-semibold transition-colors duration-200 hover:bg-[#356989] xl:px-7"
          >
            Account Access
          </Link>

          <Link
            href="#"
            variant="Link"
            className="whitespace-nowrap rounded-full bg-[#4a748f] px-6 py-2.5 text-[16px] font-semibold transition-colors duration-200 hover:bg-[#5a84a0] xl:px-7"
          >
            Contact Us
          </Link>
        </Container>

        <Container className="items-center gap-5 lg:hidden">
          <button
            type="button"
            aria-label="Search"
            className="cursor-pointer text-white/80"
          >
            <SearchIcon size={26} />
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="cursor-pointer"
          >
            {mobileOpen ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </Container>
      </Container>

      <Container
        width="fullWidth"
        className={`absolute left-0 right-0 top-full z-40 hidden overflow-hidden bg-[#154362] transition-[height] duration-300 ease-in-out lg:flex ${
          openMenu ? "h-[510px] xl:h-[500px]" : "h-0"
        }`}
      >
        <Container className="grid h-full w-full grid-cols-[minmax(0,1fr)_32.5%] xl:grid-cols-[minmax(0,1fr)_35%] overflow-y-auto">
          {shownMenu === "Funds" ? (
            <Container className="grid grid-cols-3 items-start gap-8 py-7 pl-16 pr-8 xl:gap-10 xl:py-10 xl:pl-[max(4.5vw,calc((100vw_-_1800px)/2))] xl:pr-10">
              {FUNDS_MENU.map((fund) => (
                <Container
                  key={fund.title}
                  className="flex-col rounded-xl border-t-8 xl:border-t-10 border-[#00b5ad] bg-[#456b86] px-7 py-6 xl:px-9 xl:py-8"
                >
                  <Typography className="m-0 text-[16px] font-semibold xl:text-[20px]">
                    {fund.title}
                  </Typography>

                  <Link
                    href="#"
                    variant="Link"
                    onClick={() => setOpenMenu(null)}
                    className="mt-9 flex w-fit items-center gap-2 text-[16px] font-semibold hover:text-[#00c4c4]"
                  >
                    {fund.cta}
                    <ChevronRight />
                  </Link>

                  <ul className="m-0 mt-9 flex list-none flex-col p-0">
                    {fund.links.map((label) => (
                      <li
                        key={label}
                        className="border-t border-[#00b5ad] py-4 first:pt-4 last:pb-0"
                      >
                        <Link
                          href="#"
                          variant="Link"
                          onClick={() => setOpenMenu(null)}
                          className="text-[14px] font-semibold hover:text-[#00c4c4]"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Container>
              ))}
            </Container>
          ) : (
            <Container className="grid grid-cols-[1.93fr_1fr] items-start gap-8 py-7 pl-16 pr-8 xl:grid-cols-[1.7fr_1fr] xl:gap-10 xl:py-10 xl:pl-[max(4.5vw,calc((100vw_-_1800px)/2))] xl:pr-10">
              <Container className="flex-col rounded-xl border-t-8 xl:border-t-10 border-[#00b5ad] bg-[#456b86] px-7 py-6 xl:px-9 xl:py-8">
                <Link
                  href="#"
                  variant="Link"
                  onClick={() => setOpenMenu(null)}
                  className="text-[16px] font-semibold hover:text-[#00c4c4] xl:text-[20px]"
                >
                  {split.title}
                </Link>

                <ul className="m-0 mt-6 grid list-none grid-cols-2 gap-x-10 gap-y-7 p-0">
                  {split.links.map((label) => (
                    <li key={label}>
                      <Link
                        href="#"
                        variant="Link"
                        onClick={() => setOpenMenu(null)}
                        className="text-[16px] font-semibold hover:text-[#00c4c4] lg:text-[14px]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>

              <Container className="flex-col gap-7 xl:gap-8">
                {split.others.map((label) => (
                  <Link
                    key={label}
                    href="#"
                    variant="Link"
                    onClick={() => setOpenMenu(null)}
                    className="flex h-[72px] items-center xl:h-[90px] rounded-xl border-t-8 xl:border-t-10 border-[#00b5ad] bg-[#456b86] px-7 text-[16px] font-semibold hover:text-[#00c4c4] xl:px-9 xl:text-[14px]"
                  >
                    {label}
                  </Link>
                ))}
              </Container>
            </Container>
          )}

          <Container className="flex-col bg-[#0f3349] p-8 xl:p-10">
            <Typography className="m-0 text-[14px] xl:text-[18px]">
              In The Press
            </Typography>

            <Container className="mt-6 flex-col gap-9 xl:mt-8 xl:gap-8">
              {PRESS_ITEMS.map((item) => (
                <Container key={item.title} className="flex gap-6 xl:gap-7">
                  <Media
                    src={item.image}
                    alt=""
                    width={200}
                    height={130}
                    className="h-26 w-40 shrink-0 rounded-lg object-cover"
                  />
                  <Container className="min-w-0 flex-col">
                    <Typography className="m-0 line-clamp-3 text-[14px] leading-[18px]">
                      {item.title}
                    </Typography>
                    <Typography className="m-0 mt-3 text-[14px] lg:text-[14px]">
                      {item.date}
                    </Typography>
                    <Link
                      href="#"
                      variant="Link"
                      onClick={() => setOpenMenu(null)}
                      className="mt-4 text-[16px] font-semibold hover:text-[#00c4c4]"
                    >
                      Read More
                    </Link>
                  </Container>
                </Container>
              ))}
            </Container>

            <Link
              href="#"
              variant="Link"
              onClick={() => setOpenMenu(null)}
              className="mt-8 inline-flex w-fit rounded-full bg-[#2b5a78] px-5 py-2 text-[14px] xl:mt-10 xl:px-6 xl:py-3 xl:text-[16px] font-semibold hover:bg-[#356989]"
            >
              More
            </Link>
          </Container>
        </Container>
      </Container>

      <Container
        width="fullWidth"
        className={`absolute left-0 right-0 top-full z-50 flex-col overflow-hidden bg-[#154362] transition-[height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "h-[calc(100dvh-4rem)]" : "h-0"
        }`}
      >
        <Container
          width="fullWidth"
          className="h-full min-h-0 flex-col overflow-y-auto overscroll-contain border-t border-white/15 px-6 pb-10 pt-4 [&>*]:shrink-0"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className="flex cursor-pointer items-center justify-between border-b border-white/10 py-4 text-left text-[16px] font-semibold"
            >
              {link.label}
              {link.hasMenu && <Chevron />}
            </button>
          ))}

          <Container className="mt-5 flex-col gap-3">
            <Link
              href="#"
              variant="Link"
              className="rounded-full bg-[#2b5a78] px-6 py-3.5 text-center text-[16px] font-semibold"
            >
              Account Access
            </Link>

            <Link
              variant="Link"
              href="#"
              className="rounded-full bg-[#4a748f] px-6 py-3.5 text-center text-[16px] font-semibold"
            >
              Contact Us
            </Link>
          </Container>

          <Container className="mt-5 flex-col gap-1 text-[15px] font-semibold text-white/90">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1.5 py-2"
            >
              Location Not Listed <Chevron />
            </button>

            <button
              type="button"
              className="flex cursor-pointer items-center gap-1.5 py-2"
            >
              Institutional Investor <Chevron />
            </button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
