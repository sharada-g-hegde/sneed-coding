"use client";

import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import { useState } from "react";

const BAR_LINKS = [
  { label: "Distributions", href: "#", hasMenu: true },
  { label: "Prospectuses, Reports & Holdings", href: "#", hasMenu: false },
  { label: "Forms & Applications", href: "#", hasMenu: false },
  { label: "Purchase Payden Funds", href: "#", hasMenu: false },
];

const SHARE_CLASSES = [
  "View All Share Classes",
  "Adviser Class",
  "Retail Class",
  "Institutional Class",
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

  return (
    <section className="w-full text-white">
      <Container width="fullWidth" className="relative overflow-hidden">
        <Media
          src="/images/funds-hero.webp"
          alt=""
          width={1800}
          height={700}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Container
          width="fullWidth"
          className="absolute inset-0 bg-[#154362]/40"
        />

        <Container
          width="fullWidth"
          className="relative z-10 flex flex-col px-5 pb-12 pt-20 lg:px-[4.7%] lg:pb-16 lg:pt-32"
        >
          <Typography className="font-albertSans text-[40px] font-medium leading-tight lg:text-[68px]">
            U.S. Funds
          </Typography>

          <Typography className="mt-6 max-w-[22rem] font-albertSans lg:text-[18px] text-[20px] leading-8 lg:mt-10 lg:max-w-160 lg:leading-9">
            Discover a diverse range of U.S. funds designed to support a variety
            of investment objectives.
          </Typography>

          <Container className="relative mt-10 w-full lg:mt-16 lg:max-w-200">
            <input
              type="text"
              placeholder="Search Ticker / Fund Name Here"
              className="h-12.5 w-full rounded-xl bg-white/20 pl-4 pr-14 text-[17px] text-white placeholder:text-white/90 backdrop-blur-sm outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:text-[19px]"
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

      <Container width="fullWidth" className="relative flex-col bg-[#0f3349]">
        <Container
          width="fullWidth"
          className="flex items-center gap-4 px-5 py-3.5 lg:px-[4.7%]"
        >
          <Container className="relative w-full max-w-75 lg:max-w-none lg:basis-[33%]">
            <select
              aria-label="Share classes"
              className="h-12.5 w-full cursor-pointer appearance-none rounded-xl bg-[#4a5568] pl-4 pr-12 text-[17px] text-white outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {SHARE_CLASSES.map((c) => (
                <option key={c} value={c} className="text-black">
                  {c}
                </option>
              ))}
            </select>
            <Chevron className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
          </Container>

          <nav className="ml-8 hidden items-center gap-8 lg:flex">
            {BAR_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                variant="Link"
                className="flex items-center gap-2 whitespace-nowrap text-[17px] font-semibold"
              >
                {l.label}
                {l.hasMenu && <Chevron />}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="ml-auto cursor-pointer lg:hidden"
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
          className={`flex-col overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <Container
            width="fullWidth"
            className="flex flex-col border-t border-white/15 px-5 py-2"
          >
            {BAR_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                variant="Link"
                className="flex items-center justify-between border-b border-white/10 py-4 text-[16px] font-semibold last:border-b-0"
              >
                {l.label}
                {l.hasMenu && <Chevron />}
              </Link>
            ))}
          </Container>
        </Container>
      </Container>
    </section>
  );
}
