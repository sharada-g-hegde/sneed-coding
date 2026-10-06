"use client";

import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import Link from "@/components/elements/link";

const COLUMNS = [
  {
    groups: [
      {
        title: "Strategies",
        links: [
          { label: "Fixed Income", href: "#" },
          { label: "Equity", href: "#" },
          { label: "Unconstrained", href: "#" },
          { label: "Balanced", href: "#" },
        ],
      },
      {
        title: "Funds",
        links: [
          { label: "U.S. Funds", href: "#" },
          { label: "UCITS Funds", href: "#" },
          { label: "AIF", href: "#" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        title: "Our Firm",
        links: [
          { label: "About Us", href: "#" },
          { label: "Contact Us", href: "#" },
          { label: "Subscribe", href: "#" },
          { label: "Business Continuity", href: "#" },
          { label: "TCFD, ESG & Stewardship", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Diversity & Inclusion", href: "#" },
          { label: "FAQ", href: "#" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        title: "Insights",
        links: [
          { label: "All Insights", href: "#" },
          { label: "Week in Review", href: "#" },
          { label: "Point of View", href: "#" },
          { label: "Press Room", href: "#" },
          { label: "Market Insights", href: "#" },
        ],
      },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Payden & Rygel U.S. Privacy Notice", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Form ADV Part 3 - CRS", href: "#" },
  { label: "Payden & Rygel Global Limited Legal Notices", href: "#" },
  { label: "Payden Global SIM SpA Legal Notices", href: "#" },
  { label: "Legal Disclaimer", href: "#" },
];

function LinkedInIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7 lg:h-7 lg:w-7 2xl:h-5.5 2xl:w-5.5"
      aria-hidden="true"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9.5h3V19zM6.5 8.2a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S13 13.1 13 14.3V19h-3V9.5h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.6V19z" />
    </svg>
  );
}

function ArrowUp() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <Container
      width="fullWidth"
      className="relative w-full justify-center bg-[#154362] text-white"
    >
      <Container
        width="pageWidth"
        className="justify-center items-center lg:px-16 w-full max-w-308 flex-col px-5 pb-12 pt-10 lg:pb-14 lg:pt-12 xl:max-w-none xl:px-[max(4.5vw,calc((100vw_-_1800px)/2))]"
      >
        <Container
          width="fullWidth"
          className="grid grid-cols-1 gap-y-14 lg:grid-cols-[540px_1fr] lg:gap-x-19 2xl:grid-cols-[784px_1fr] 2xl:gap-x-28"
        >
          <Container className="flex-col">
            <Link
              href="/"
              aria-label="Home"
              variant="Link"
              className="block w-fit"
            >
              <Media
                src="/images/payden-logo.webp"
                alt="Payden & Rygel logo"
                width={224}
                height={40}
              />
            </Link>

            <Typography className="m-0 mt-12 font-albertSans text-[16px] leading-8 lg:mt-12 lg:text-[16px] lg:leading-6!">
              Founded in 1983, Payden &amp; Rygel focuses on the active
              management of fixed income and equity portfolios across domestic
              and international markets. We advise leading institutions and
              individual investors, offering investment solutions informed by
              research, experience, and market perspective across global
              economies and capital markets.
            </Typography>

            <Typography className="m-0 mt-20 font-albertSans text-[16px] font-semibold leading-8 lg:mt-14 lg:text-[16px] lg:leading-4 2xl:mt-19">
              Payden&apos;s expert insights delivered to your inbox
            </Typography>

            <Typography className="m-0 mt-4 font-inter text-[16px] leading-8 lg:mt-5 lg:text-[16px] lg:leading-4 2xl:mt-6">
              Subscribe to our newsletter to stay updated on features and
              releases.
            </Typography>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex flex-col gap-3 lg:mt-5 lg:flex-row lg:items-center 2xl:mt-6 2xl:gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-16.5 w-full rounded-2xl bg-white/25 px-4 font-inter text-[18px] text-white outline-none placeholder:text-white focus-visible:ring-2 focus-visible:ring-white/70 lg:h-7 lg:flex-1 lg:rounded-lg lg:px-2 lg:text-[12px] 2xl:h-10 2xl:px-3 2xl:text-[14px]"
              />
              <button
                type="submit"
                className="h-14.5 w-full cursor-pointer rounded-full bg-[#5d7f95] font-outfit text-[17px] font-semibold text-white transition-colors hover:bg-[#6b8da3] lg:h-6.5 lg:w-18 lg:shrink-0 lg:text-[10px] 2xl:h-9.5 2xl:w-26 2xl:text-[12px]"
              >
                Subscribe
              </button>
            </form>

            <Typography className="m-0 mt-4 font-albertSans text-[17px] italic leading-6.5 lg:mt-3.5 lg:text-[12px] lg:leading-3 2xl:mt-5 2xl:text-[11px]">
              By subscribing, you agree to the relevant privacy policy for your
              location and consent to receive updates.
            </Typography>

            <Link
              variant="Link"
              href="#"
              aria-label="LinkedIn"
              className="mt-8 block w-fit lg:mt-9 2xl:mt-11"
            >
              <LinkedInIcon />
            </Link>
          </Container>

          <Container className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-0 2xl:grid-cols-[345px_345px_1fr]">
            {COLUMNS.map((col, ci) => (
              <Container
                key={ci}
                className="flex-col gap-14 lg:gap-9 2xl:gap-13"
              >
                {col.groups.map((group) => (
                  <nav key={group.title} aria-label={group.title}>
                    <Typography className="m-0 font-outfit text-[20px] font-semibold lg:font-inter lg:text-[12px]">
                      {group.title}
                    </Typography>
                    <ul className="m-0 mt-6 flex list-none flex-col gap-5 p-0 lg:mt-5.5 lg:gap-3.5 2xl:mt-8 2xl:gap-5">
                      {group.links.map((l) => (
                        <li key={l.label}>
                          <Link
                            variant="Link"
                            href={l.href}
                            className="font-inter text-[14px] leading-6.5 hover:underline lg:text-[14px] lg:leading-4"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </Container>
            ))}
          </Container>
        </Container>

        <Container
          width="fullWidth"
          className="mt-14 flex-col gap-8 border-t border-white/30 pt-8 lg:mt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pt-6 2xl:mt-16"
        >
          <Typography className="m-0 font-albertSans text-[14px] lg:text-[14px]">
            &copy; 2026 Payden &amp; Rygel. All rights reserved.
          </Typography>

          <ul className="m-0 flex list-none flex-wrap gap-x-8 gap-y-6 p-0 lg:justify-start lg:gap-x-7 lg:gap-y-2 2xl:gap-x-10">
            {LEGAL_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  variant="Link"
                  href={l.href}
                  className="font-albertSans text-[14px] underline underline-offset-2 lg:text-[14px]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Container>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 z-40 flex h-11.5 w-11.5 cursor-pointer flex-col items-center justify-center rounded-full border border-white/30 bg-[#4a748f] text-white transition-colors hover:bg-[#5a84a0] lg:bottom-2 lg:right-3 lg:h-8 lg:w-8"
      >
        <ArrowUp />
        <span className="font-outfit text-[12px] font-semibold leading-none lg:hidden">
          Top
        </span>
      </button>
    </Container>
  );
}
