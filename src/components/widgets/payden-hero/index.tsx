"use client";

import { useState } from "react";
import NextLink from "next/link";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";

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
      {/* Hero */}
      <Container width="fullWidth" className="relative overflow-hidden">
        <Media
          src="/images/funds-hero.webp"
          alt=""
          width={1800}
          height={700}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Tint so text stays readable */}
        <Container
          width="fullWidth"
          className="absolute inset-0 bg-[#154362]/40"
        />

        <Container
          width="fullWidth"
          className="relative z-10 flex flex-col px-5 pb-12 pt-20 lg:px-[4.7%] lg:pb-16 lg:pt-32"
        >
          <h1 className="font-outfit text-[40px] font-medium leading-tight lg:text-[68px]">
            U.S. Funds
          </h1>

          <p className="mt-6 max-w-[22rem] text-[20px] leading-8 lg:mt-14 lg:max-w-205 lg:leading-9">
            Discover a diverse range of U.S. funds designed to support a variety
            of investment objectives.
          </p>

          {/* Search */}
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

      {/* Bottom bar */}
      <Container width="fullWidth" className="relative flex-col bg-[#0f3349]">
        <Container
          width="fullWidth"
          className="flex items-center gap-4 px-5 py-3.5 lg:px-[4.7%]"
        >
          {/* Share class select */}
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

          {/* Desktop links */}
          <nav className="ml-8 hidden items-center gap-8 lg:flex">
            {BAR_LINKS.map((l) => (
              <NextLink
                key={l.label}
                href={l.href}
                className="flex items-center gap-2 whitespace-nowrap text-[17px] font-semibold"
              >
                {l.label}
                {l.hasMenu && <Chevron />}
              </NextLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
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

        {/* Mobile links panel */}
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
              <NextLink
                key={l.label}
                href={l.href}
                className="flex items-center justify-between border-b border-white/10 py-4 text-[16px] font-semibold last:border-b-0"
              >
                {l.label}
                {l.hasMenu && <Chevron />}
              </NextLink>
            ))}
          </Container>
        </Container>
      </Container>
    </section>
  );
}
