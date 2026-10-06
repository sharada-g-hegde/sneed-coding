"use client";

import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import { useState } from "react";

const BAR_LINKS = [
  { label: "Distributions", href: "#", hasMenu: true },
  {
    label: "Prospectuses, Reports & Holdings",
    href: "#",
    hasMenu: false,
  },
  { label: "Forms & Applications", href: "#", hasMenu: false },
  { label: "Purchase Payden Funds", href: "#", hasMenu: false },
];

const DISTRIBUTION_LINKS = [
  { label: "Sources of Income", href: "#" },
  { label: "Payment Schedule", href: "#" },
  { label: "Form 8937", href: "#" },
];

const SHARE_CLASSES = [
  "View All Share Classes",
  "View All Adviser Class Funds",
  "View All Institutional Class Funds",
  "View All Investor Class Funds",
  "View All Retirement Class Funds",
  "View All SI Class Funds",
];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
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

function SearchIcon() {
  return (
    <svg
      width="26"
      height="26"
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

export default function FundsHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [distributionsOpen, setDistributionsOpen] = useState(false);
  const [shareClassOpen, setShareClassOpen] = useState(false);
  const [selectedShareClass, setSelectedShareClass] = useState(
    SHARE_CLASSES[0],
  );

  return (
    <>
      <Container
        width="fullWidth"
        className="relative overflow-hidden text-white"
      >
        <Media
          src="/images/funds-hero.webp"
          alt=""
          width={2560}
          height={700}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <Container
          width="pageWidth"
          className="absolute inset-0 justify-center items-center"
        />

        <Container
          width="fullWidth"
          className="relative z-10 flex w-full max-w-308 flex-col px-5 pb-12 pt-20 lg:px-16 lg:pb-16 lg:pt-32 xl:max-w-none xl:px-[max(4.5vw,calc((100vw_-_1800px)/2))] 2xl:pt-30"
        >
          <Typography className="font-albertSans text-[40px] font-medium leading-tight lg:text-[68px] 2xl:text-[52px]">
            U.S. Funds
          </Typography>

          <Typography className="mt-6 max-w-[22rem] text-[20px] leading-8 font-albertSans lg:mt-10 lg:max-w-160 lg:text-[18px] lg:leading-9 2xl:mt-[30px] 2xl:text-[16px] 2xl:leading-[26px]">
            Discover a diverse range of U.S. funds designed to support a variety
            of investment objectives.
          </Typography>

          <Container className="relative mt-10 w-full lg:mt-16 lg:max-w-200 2xl:mt-12 2xl:max-w-160">
            <input
              type="text"
              placeholder="Search Ticker / Fund Name Here"
              className="h-12.5 w-full rounded-xl bg-white/20 pl-4 pr-14 text-[17px] text-white placeholder:text-white/90 outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white/70 lg:text-[19px] 2xl:h-10 2xl:text-[15px]"
            />

            <button
              type="button"
              aria-label="Search"
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              <SearchIcon />
            </button>
          </Container>
        </Container>
      </Container>

      <Container
        width="fullWidth"
        className="sticky top-16 z-40 flex-col bg-[#0f3349] text-white lg:top-31"
      >
        <Container
          width="fullWidth"
          className="flex w-full max-w-308 items-center gap-4 px-5 py-3 lg:px-16 xl:max-w-none xl:px-[max(4.5vw,calc((100vw_-_1800px)/2))]"
        >
          <Container className="relative z-0 w-full max-w-75 shrink-0 lg:max-w-none lg:basis-[33%] 2xl:basis-[480px]">
            <button
              type="button"
              aria-expanded={shareClassOpen}
              aria-haspopup="listbox"
              onClick={() => setShareClassOpen((open) => !open)}
              className={`flex h-12.5 w-full cursor-pointer items-center justify-between rounded-xl border bg-[#435667] px-4 text-left text-[17px] text-white outline-none transition-colors 2xl:h-10 2xl:text-[15px] ${
                shareClassOpen ? "border-white" : "border-transparent"
              }`}
            >
              <span className="truncate">{selectedShareClass}</span>

              <Chevron
                className={`ml-3 shrink-0 transition-transform duration-200 ${
                  shareClassOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {shareClassOpen && (
              <Container
                role="listbox"
                className="absolute left-0 top-full z-50 mt-0 flex-col max-h-[370px] w-full overflow-y-auto rounded-b-[20px] bg-[#435667] py-1 shadow-lg"
              >
                {SHARE_CLASSES.map((shareClass) => (
                  <button
                    key={shareClass}
                    type="button"
                    role="option"
                    aria-selected={selectedShareClass === shareClass}
                    onClick={() => {
                      setSelectedShareClass(shareClass);
                      setShareClassOpen(false);
                    }}
                    className={`block w-full cursor-pointer px-4 py-[17px] text-left text-[17px] leading-6 transition-colors hover:bg-white/10 2xl:text-[15px] ${
                      selectedShareClass === shareClass
                        ? "text-white"
                        : "text-white/90"
                    }`}
                  >
                    {shareClass}
                  </button>
                ))}
              </Container>
            )}
          </Container>

          <nav className="ml-auto hidden items-center gap-6 xl:flex">
            {BAR_LINKS.map((item) =>
              item.hasMenu ? (
                <button
                  key={item.label}
                  type="button"
                  aria-expanded={distributionsOpen}
                  onClick={() => setDistributionsOpen((open) => !open)}
                  className={`flex cursor-pointer items-center gap-2 whitespace-nowrap text-[17px] font-semibold transition-colors 2xl:text-[15px] ${
                    distributionsOpen
                      ? "text-[#00c4c4]"
                      : "text-white hover:text-[#00c4c4]"
                  }`}
                >
                  {item.label}

                  <Chevron
                    className={`transition-transform duration-200 ${
                      distributionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  variant="Link"
                  className="flex items-center whitespace-nowrap text-[17px] font-semibold hover:text-[#00c4c4] 2xl:text-[15px]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-auto cursor-pointer xl:hidden"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </Container>

        <Container
          width="fullWidth"
          className={`flex-col overflow-hidden transition-[max-height] duration-300 ease-in-out xl:hidden ${
            menuOpen ? "max-h-125" : "max-h-0"
          }`}
        >
          <Container
            width="fullWidth"
            className="flex flex-col border-t border-white/15 px-5 py-2"
          >
            {BAR_LINKS.map((item) => (
              <Container
                key={item.label}
                width="fullWidth"
                className="flex-col"
              >
                {item.hasMenu ? (
                  <button
                    type="button"
                    aria-expanded={distributionsOpen}
                    onClick={() => setDistributionsOpen((open) => !open)}
                    className={`flex w-full cursor-pointer items-center justify-between border-b border-white/10 py-4 text-left text-[16px] font-semibold ${
                      distributionsOpen ? "text-[#00c4c4]" : ""
                    }`}
                  >
                    {item.label}
                    <Chevron
                      className={`transition-transform duration-200 ${
                        distributionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    variant="Link"
                    className="flex items-center justify-between border-b border-white/10 py-4 text-[16px] font-semibold last:border-b-0"
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasMenu && distributionsOpen && (
                  <Container
                    width="fullWidth"
                    className="flex-col border-b border-white/10 bg-[#081e2b] pl-4"
                  >
                    {DISTRIBUTION_LINKS.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        variant="Link"
                        className="block py-3 text-[15px] text-white/90 hover:text-[#00c4c4]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </Container>
                )}
              </Container>
            ))}
          </Container>
        </Container>

        <Container
          width="fullWidth"
          className={`hidden overflow-hidden bg-[#071b27] transition-[max-height] duration-300 ease-in-out lg:flex ${
            distributionsOpen ? "max-h-20" : "max-h-0"
          }`}
        >
          <Container
            width="fullWidth"
            className="flex items-center justify-center gap-16 px-5 py-5 lg:px-16 lg:py-3"
          >
            {DISTRIBUTION_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                variant="Link"
                className="whitespace-nowrap text-[18px] font-semibold text-white transition-colors hover:text-[#00c4c4]"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </Container>
      </Container>
    </>
  );
}
