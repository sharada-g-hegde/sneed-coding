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

// Mobile accordion data. A `children` array means the row expands (like Fixed Income)
// `alwaysOpen` rows show their children all the time (Funds), with no nested toggle
const MOBILE_MENUS: Record<
  string,
  { label: string; children?: string[]; alwaysOpen?: boolean }[]
> = {
  Strategies: [
    { label: "Fixed Income", children: FIXED_INCOME_LINKS },
    ...OTHER_STRATEGIES.map((label) => ({ label })),
  ],
  Funds: FUNDS_MENU.map((fund) => ({
    label: fund.title,
    children: fund.links,
    alwaysOpen: true,
  })),
  Insights: [
    { label: "All Insights", children: INSIGHTS_LINKS, alwaysOpen: true },
    ...INSIGHTS_OTHERS.map((label) => ({ label })),
  ],
};

// "Location Not Listed" dropdown (4 columns)
const LOCATION_COLUMNS = [
  ["United States", "United Kingdom", "Australia", "Saudi Arabia"],
  ["Canada", "European Union", "New Zealand", "Location Not Listed"],
  ["Mexico", "Norway", "Japan"],
  ["South America", "Switzerland", "Singapore"],
];

// "Institutional Investor" dropdown (investor types)
function UsersIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function AwardIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

const INVESTOR_TYPES = [
  { label: "Institutional Investor", Icon: UsersIcon },
  { label: "Financial Advisor", Icon: AwardIcon },
  { label: "Individual Investor", Icon: UserIcon },
];

// Mobile list = the desktop columns read row by row
const MOBILE_LOCATIONS = Array.from({ length: 4 }, (_, row) =>
  LOCATION_COLUMNS.map((column) => column[row]),
)
  .flat()
  .filter((label): label is string => Boolean(label));

// Change these image paths to your real files
const PRESS_ITEMS = [
  {
    title:
      "Fed Hike Strengthens the Case for the Front End of the U.S. Yield Curve",
    date: "Sep 24, 2026",
    dateLong: "September 24, 2026",
    image: "/images/navabr-2.webp",
  },
  {
    title:
      "Jeffrey Cleveland, Chief Economist, discusses the latest job report, inflation expectations…",
    date: "Sep 4, 2026",
    dateLong: "September 4, 2026",
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

function MobileAccordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <Container width="fullWidth" className="flex-col">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className={`flex w-full cursor-pointer items-center justify-between bg-[#0e2f45] px-4 py-4 text-left text-[16px] font-semibold transition-colors ${
          open ? "text-[#00c4c4]" : ""
        }`}
      >
        {title}
        <Chevron
          className={`h-5 w-5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <Container
        className={`grid bg-[#071b27] transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <Container className="overflow-hidden">{children}</Container>
      </Container>
    </Container>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [shownMenu, setShownMenu] = useState<string>("Strategies");
  const [locationOpen, setLocationOpen] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);
  const [investor, setInvestor] = useState(INVESTOR_TYPES[0].label);
  const [mobileSection, setMobileSection] = useState<
    "investor" | "location" | null
  >(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const split = SPLIT_MENUS[shownMenu] ?? SPLIT_MENUS.Strategies;

  const toggleMenu = (label: string) => {
    setLocationOpen(false);
    setInvestorOpen(false);
    if (openMenu === label) {
      setOpenMenu(null);
    } else {
      setShownMenu(label);
      setOpenMenu(label);
    }
  };

  const toggleLocation = () => {
    setOpenMenu(null);
    setInvestorOpen(false);
    setLocationOpen((open) => !open);
  };

  const toggleInvestor = () => {
    setOpenMenu(null);
    setLocationOpen(false);
    setInvestorOpen((open) => !open);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setLocationOpen(false);
        setInvestorOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Container className="sticky top-0 z-50 flex-col w-full font-sans text-white">
      <Container
        width="fullWidth"
        className="hidden h-12 items-center justify-end gap-10 bg-[#0e2f45] px-8 lg:flex xl:px-[max(4.5vw,calc((100vw-1800px)/2))]"
      >
        <button
          type="button"
          aria-expanded={locationOpen}
          onClick={toggleLocation}
          className={`flex cursor-pointer items-center gap-1.5 whitespace-nowrap text-[14px] font-semibold transition-colors ${
            locationOpen ? "text-[#00c4c4]" : ""
          }`}
        >
          Location Not Listed
          <Chevron
            className={`transition-transform duration-200 ${
              locationOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <button
          type="button"
          aria-expanded={investorOpen}
          onClick={toggleInvestor}
          className={`flex cursor-pointer items-center gap-1.5 whitespace-nowrap text-[14px] font-semibold transition-colors ${
            investorOpen ? "text-[#00c4c4]" : ""
          }`}
        >
          {investor}
          <Chevron
            className={`transition-transform duration-200 ${
              investorOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <button type="button" aria-label="Search" className="cursor-pointer">
          <SearchIcon size={22} />
        </button>
      </Container>

      <Container
        width="fullWidth"
        aria-hidden={!locationOpen}
        className={`hidden overflow-hidden bg-[#071b27] transition-[height,visibility] duration-300 ease-in-out lg:block ${
          locationOpen ? "visible h-41" : "invisible h-0"
        }`}
      >
        <Container
          width="fullWidth"
          className="flex items-start justify-end gap-12 px-8 py-4 xl:px-[max(4.5vw,calc((100vw-1800px)/2))]"
        >
          <Typography className="m-0 whitespace-nowrap text-[16px] leading-6!">
            Change your location:
          </Typography>

          <Container className="flex gap-x-16 xl:gap-x-32 min-[1400px]:gap-x-44">
            {LOCATION_COLUMNS.map((column, ci) => (
              <ul key={ci} className="m-0 flex list-none flex-col gap-3 p-0">
                {column.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      variant="Link"
                      onClick={() => setLocationOpen(false)}
                      className="whitespace-nowrap text-[16px] font-semibold leading-6 hover:text-[#00c4c4]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </Container>
        </Container>
      </Container>

      <Container
        width="fullWidth"
        aria-hidden={!investorOpen}
        className={`hidden overflow-hidden bg-[#071b27] transition-[height,visibility] duration-300 ease-in-out lg:block ${
          investorOpen ? "visible h-14" : "invisible h-0"
        }`}
      >
        <Container
          width="fullWidth"
          className="flex h-14 items-center justify-end gap-10 px-8 xl:gap-14 xl:px-[max(4.5vw,calc((100vw-1800px)/2))]"
        >
          <Typography className="m-0 whitespace-nowrap text-[16px] leading-6!">
            Change your investor type:
          </Typography>

          {INVESTOR_TYPES.map(({ label, Icon }) => {
            const active = investor === label;

            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setInvestor(label);
                  setInvestorOpen(false);
                }}
                className={`flex cursor-pointer items-center gap-3 whitespace-nowrap text-[16px] font-semibold transition-colors ${
                  active ? "text-[#00c4c4]" : "hover:text-[#00c4c4]"
                }`}
              >
                <Icon className="shrink-0 text-[#00c4c4]" />
                {label}
              </button>
            );
          })}
        </Container>
      </Container>

      <Container
        width="fullWidth"
        className="h-16 items-center justify-between bg-[#154362] px-4 lg:h-19 lg:px-8 xl:px-[max(4.5vw,calc((100vw-1800px)/2))]"
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
                  onClick={() => {
                    if (hasMega) {
                      toggleMenu(link.label);
                    } else {
                      setOpenMenu(null);
                      setLocationOpen(false);
                      setInvestorOpen(false);
                    }
                  }}
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
            onClick={() => {
              setMobileOpen((o) => !o);
              setMobileMenu(null);
              setMobileSub(null);
            }}
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

      {/* Desktop mega menu (Strategies + Funds + Insights) */}
      <Container
        width="fullWidth"
        className={`absolute left-0 right-0 top-full z-40 hidden overflow-hidden bg-[#154362] transition-[height] duration-300 ease-in-out lg:flex ${
          openMenu ? "h-127.5 xl:h-125" : "h-0"
        }`}
      >
        <Container className="grid h-full w-full grid-cols-[minmax(0,1fr)_32.5%] xl:grid-cols-[minmax(0,1fr)_35%] overflow-y-auto">
          {shownMenu === "Funds" ? (
            <Container className="grid grid-cols-3 items-start gap-8 py-7 pl-16 pr-8 xl:gap-10 xl:py-10 xl:pl-[max(4.5vw,calc((100vw-1800px)/2))] xl:pr-10">
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
            <Container className="grid grid-cols-[1.93fr_1fr] items-start gap-8 py-7 pl-16 pr-8 xl:grid-cols-[1.7fr_1fr] xl:gap-10 xl:py-10 xl:pl-[max(4.5vw,calc((100vw-1800px)/2))] xl:pr-10">
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
                    className="flex h-18 items-center xl:h-22.5 rounded-xl border-t-8 xl:border-t-10 border-[#00b5ad] bg-[#456b86] px-7 text-[16px] font-semibold hover:text-[#00c4c4] xl:px-9 xl:text-[14px]"
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
                    <Typography className="m-0 line-clamp-3 text-[14px] leading-4.5">
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

      {/* Mobile menu */}
      <Container
        width="fullWidth"
        className={`absolute left-0 right-0 top-full z-50 flex-col overflow-hidden bg-[#154362] transition-[height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "h-[calc(100dvh-4rem)]" : "h-0"
        }`}
      >
        <Container
          width="fullWidth"
          className="h-full min-h-0 flex-col overflow-y-auto overscroll-contain border-t border-white/15 pb-10 *:shrink-0"
        >
          {NAV_LINKS.map((link) => {
            const items = MOBILE_MENUS[link.label];
            const isOpen = mobileMenu === link.label;

            return (
              <Container key={link.label} className="flex flex-col">
                <button
                  type="button"
                  aria-expanded={items ? isOpen : undefined}
                  onClick={() => {
                    if (!items) return;
                    setMobileMenu(isOpen ? null : link.label);
                    setMobileSub(null);
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-[16px] font-semibold transition-colors ${
                    isOpen ? "text-[#00c4c4]" : ""
                  }`}
                >
                  {link.label}
                  {link.hasMenu && (
                    <Chevron
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {items && (
                  <Container
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <Container className="overflow-hidden w-full flex-col">
                      <Container className="border-y flex-col w-full border-[#00b5ad] bg-[#456b86]">
                        {items.map((item) => {
                          const subOpen = mobileSub === item.label;

                          if (!item.children) {
                            return (
                              <Link
                                key={item.label}
                                href="#"
                                variant="Link"
                                onClick={() => setMobileOpen(false)}
                                className="block border-b flex-col border-white/20 px-6 py-4 text-[16px] font-semibold last:border-b-0"
                              >
                                {item.label}
                              </Link>
                            );
                          }

                          if (item.alwaysOpen) {
                            return (
                              <Container
                                key={item.label}
                                className="border-b w-full flex-col border-[#00b5ad] pb-3 last:border-b-0"
                              >
                                <Link
                                  href="#"
                                  variant="Link"
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-6 py-4 text-[18px] font-semibold"
                                >
                                  {item.label}
                                </Link>

                                {item.children.map((child) => (
                                  <Link
                                    key={child}
                                    href="#"
                                    variant="Link"
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-3 pl-10 pr-4 text-[14px] font-semibold"
                                  >
                                    {child}
                                  </Link>
                                ))}
                              </Container>
                            );
                          }

                          return (
                            <Container
                              key={item.label}
                              className="border-b border-white/20  flex-col last:border-b-0"
                            >
                              <button
                                type="button"
                                aria-expanded={subOpen}
                                onClick={() =>
                                  setMobileSub(subOpen ? null : item.label)
                                }
                                className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-[16px] font-semibold"
                              >
                                {item.label}
                                <Chevron
                                  className={`h-5 w-5 transition-transform duration-200 ${
                                    subOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              <Container
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                  subOpen
                                    ? "grid-rows-[1fr]"
                                    : "grid-rows-[0fr]"
                                }`}
                              >
                                <Container className="overflow-hidden w-full flex-col">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child}
                                      href="#"
                                      variant="Link"
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-4 pl-10  pr-4 text-[16px] font-semibold"
                                    >
                                      {child}
                                    </Link>
                                  ))}
                                </Container>
                              </Container>
                            </Container>
                          );
                        })}
                      </Container>
                    </Container>
                  </Container>
                )}
              </Container>
            );
          })}

          <Container className="flex-col">
            <Link
              href="#"
              variant="Link"
              className="px-4 py-3.5 text-left text-[16px] font-semibold"
            >
              Account Access
            </Link>

            <Link
              variant="Link"
              href="#"
              className="bg-teal-500 px-4 py-3.5 text-left text-[16px] font-semibold"
            >
              Contact Us
            </Link>
          </Container>

          <Container className="flex-col border-t border-[#00b5ad]">
            <MobileAccordion
              title="Investor Type"
              open={mobileSection === "investor"}
              onToggle={() =>
                setMobileSection((s) => (s === "investor" ? null : "investor"))
              }
            >
              {INVESTOR_TYPES.map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    setInvestor(label);
                    setMobileSection(null);
                  }}
                  className={`flex w-full cursor-pointer items-center gap-3.5 py-3.5 pl-11 pr-4 text-left text-[16px] font-semibold transition-colors ${
                    investor === label ? "text-[#00c4c4]" : ""
                  }`}
                >
                  <Icon className="shrink-0 text-[#00c4c4]" />
                  {label}
                </button>
              ))}
            </MobileAccordion>

            <MobileAccordion
              title="Location"
              open={mobileSection === "location"}
              onToggle={() =>
                setMobileSection((s) => (s === "location" ? null : "location"))
              }
            >
              {MOBILE_LOCATIONS.map((label) => (
                <Link
                  key={label}
                  href="#"
                  variant="Link"
                  onClick={() => setMobileSection(null)}
                  className="block py-3.5 pl-8 pr-4 text-[16px] font-semibold"
                >
                  {label}
                </Link>
              ))}
            </MobileAccordion>

            {/* In The Press (mobile) */}
            <Container
              width="fullWidth"
              className="-mb-10 flex-col bg-[#0f3349] px-4.5 pb-4 pt-4"
            >
              <Typography className="m-0 text-[15px] leading-5!">
                In The Press
              </Typography>

              <Container className="mt-4 flex-col gap-8">
                {PRESS_ITEMS.map((item) => (
                  <Container key={item.title} className="flex-col">
                    <Media
                      src={item.image}
                      alt=""
                      width={200}
                      height={130}
                      className="h-27.5 w-42.25 rounded-lg object-cover"
                    />
                    <Typography className="m-0 mt-2 line-clamp-2 text-[14px] font-semibold leading-6!">
                      {item.title}
                    </Typography>
                    <Typography className="m-0 mt-1.5 text-[14px] leading-5! text-white/70">
                      {item.dateLong}
                    </Typography>
                    <Link
                      href="#"
                      variant="Link"
                      onClick={() => setMobileOpen(false)}
                      className="mt-2 w-fit text-[16px] font-semibold"
                    >
                      Read More
                    </Link>
                  </Container>
                ))}
              </Container>

              <Link
                href="#"
                variant="Link"
                onClick={() => setMobileOpen(false)}
                className="mt-8 inline-flex w-fit rounded-full bg-[#2b5a78] px-5 py-2 text-[16px] font-semibold"
              >
                More
              </Link>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
