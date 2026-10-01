"use client";

import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About Us", hasMenu: false },
  { label: "Strategies", hasMenu: true },
  { label: "Funds", hasMenu: true },
  { label: "Insights", hasMenu: true },
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
    <Link href="/" aria-label="Home" variant="Link">
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <Container className="relative flex-col w-full font-sans text-white">
      <Container
        width="fullWidth"
        className="hidden h-12 items-center justify-end gap-10 bg-[#0e2f45] px-[4.5%] lg:flex"
      >
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1.5 text-[14px] font-semibold"
        >
          Location Not Listed
          <Chevron />
        </button>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-1.5 text-[14px] font-semibold"
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
        className="h-16 items-center justify-between bg-[#154362] px-6 lg:h-[76px] lg:px-[4.5%]"
      >
        <Container className="items-center">
          <Logo />

          <nav className="ml-12 hidden items-center gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                className="flex cursor-pointer items-center gap-2 text-[16px] font-semibold"
              >
                {link.label}
                {link.hasMenu && <Chevron className="h-4 w-4" />}
              </button>
            ))}
          </nav>
        </Container>

        <Container className="hidden items-center gap-4 lg:flex">
          <Link
            href="#"
            variant="Link"
            className="rounded-full bg-[#2b5a78] px-7 py-2.5 text-[16px] font-semibold transition-colors duration-200 hover:bg-[#356989]"
          >
            Account Access
          </Link>

          <Link
            href="#"
            variant="Link"
            className="rounded-full bg-[#4a748f] px-7 py-2.5 text-[16px] font-semibold transition-colors duration-200 hover:bg-[#5a84a0]"
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
        className={`absolute left-0 right-0 top-full z-50 flex-col overflow-hidden bg-[#154362] transition-[height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "h-[calc(100dvh-4rem)]" : "h-0"
        }`}
      >
        <Container
          width="fullWidth"
          className="h-full flex-col overflow-y-auto border-t border-white/15 px-6 py-4"
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
