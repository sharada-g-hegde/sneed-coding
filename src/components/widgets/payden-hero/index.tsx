"use client";

import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import { useEffect, useRef, useState } from "react";
import NavbarPayden from "../navbarPayden";

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

// Navbar height in px: mobile = h-16 (64), desktop (lg) = 12 + 19 = 7.75rem (124)
const NAVBAR_MOBILE = 64;
const NAVBAR_DESKTOP = 124;

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

  // Sticky behaviour that works regardless of parent overflow / wrapper height
  const sentinelRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);
  const [rowHeight, setRowHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      const sentinel = sentinelRef.current;
      const bar = barRef.current;
      if (!sentinel || !bar) return;

      const offset = window.innerWidth >= 1024 ? NAVBAR_DESKTOP : NAVBAR_MOBILE;

      const row = bar.firstElementChild as HTMLElement | null;
      if (row) setRowHeight(row.offsetHeight);

      setStuck(sentinel.getBoundingClientRect().top <= offset);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

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
          className="relative z-10 flex w-full max-w-308 flex-col px-5 pb-12 pt-20 lg:px-16 lg:pb-16 lg:pt-30 lg:mt-30 mt-25 xl:max-w-none xl:px-[max(4.5vw,calc((100vw-1800px)/2))] 2xl:pt-30"
        >
          <Typography className="font-brandon-grotesque text-[40px] font-medium leading-tight lg:text-[64px]">
            U.S. Funds
          </Typography>

          <Typography className="mt-6 max-w-88 text-[20px] leading-8 font-albertSans lg:mt-6 lg:max-w-160 lg:text-[18px] lg:leading-7 2xl:mt-7.5">
            Discover a diverse range of U.S. funds designed to support a variety
            of investment objectives.
          </Typography>

          <Container className="relative mt-10 w-full lg:mt-16 lg:max-w-200 2xl:mt-12 2xl:max-w-160">
            <input
              type="text"
              placeholder="Search Ticker / Fund Name Here"
              className="h-10 w-full rounded-xl bg-white/20 pl-4 pr-14 text-[17px] text-white placeholder:text-white/90 outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white/70 lg:text-[19px] 2xl:h-10 2xl:text-[15px]"
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

      <NavbarPayden />
    </>
  );
}
