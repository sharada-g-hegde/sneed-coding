"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/elements/container";

const audienceItems = [
  "Improvement",
  "Relationships",
  "Health",
  "Parenting",
  "Identity",
  "Professionals",
  "Independence",
];

export default function Navbar() {
  return (
    <nav className="absolute flex justify-center top-0 left-0 px-6 w-full md:px-16 xl:pt-15 xl:pl-[160px] xl:pr-[157px]  py-6 z-50">
      <Container width="pageWidth" className="items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-80">
          <Image
            src="/images/logo_navbar.png"
            alt="Insight & Wellness"
            width={332}
            height={43}
            className="w-[170px] md:w-[332px] h-auto"
          />
        </Link>

        <Container className="hidden lg:flex items-center gap-4 pr-2 pt-2">
          <Container className="relative group">
            <input
              type="checkbox"
              id="audience-toggle"
              className="hidden peer"
            />
            <label
              htmlFor="audience-toggle"
              className="flex items-center gap-1 cursor-pointer font-sans text-[13px]  text-teal-700 font-normal uppercase"
            >
              Audience
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-200 group-hover:rotate-180"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>

            <Container className="absolute top-full left-0 mt-2 w-44 bg-ivory shadow-sm border rounded-2xl border-teal-700 z-50 flex-col hidden group-hover:flex peer-checked:flex">
              {audienceItems.map((item) => (
                <Link
                  key={item}
                  href={`/audience/${item.toLowerCase()}`}
                  className="block px-4 py-1.5 font-sans text-[13px] text-teal-700 font-normal hover:bg-gray-50 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </Container>
          </Container>
          <Link
            href="/therapists"
            className="font-sans text-[13px]  text-teal-700 font-normal uppercase"
          >
            Your Therapists
          </Link>
          <Link
            href="/faq"
            className="font-sans text-[13px]  text-teal-700 font-normal uppercase"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="font-sans text-[13px]  text-teal-700 font-normal uppercase"
          >
            Blog
          </Link>
          <Link
            href="/booking"
            className="rounded-full ml-8 mb-2 bg-teal-700 px-4 py-1.5 font-fraunces text-[16px]  text-ivory font-light transition-all duration-300 hover:bg-teal-800"
          >
            Booking
          </Link>
        </Container>

        <Container className="lg:hidden flex-col">
          <input type="checkbox" id="mobile-toggle" className="hidden peer" />
          <label
            htmlFor="mobile-toggle"
            className="flex flex-col gap-1.5 p-2 cursor-pointer self-end z-80 relative w-8 h-8"
            aria-label="Toggle menu"
          >
            {/* Hamburger */}
            <svg
              className="absolute inset-0 w-6 h-6 text-teal-700 transition-all duration-300 [input#mobile-toggle:checked+*_&]:opacity-0 [input#mobile-toggle:checked+*_&]:rotate-90"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            {/* Cross */}
            <svg
              className="absolute inset-0 w-6 h-6 text-teal-700 transition-all duration-300 opacity-0 -rotate-90 [input#mobile-toggle:checked+*_&]:opacity-100 [input#mobile-toggle:checked+*_&]:rotate-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>

          {/* Mobile Menu - full overlay */}
          <Container
            className="hidden peer-checked:flex fixed inset-0 top-[30px] z-50 flex-col px-8 pt-10 pb-10"
            style={{
              backgroundImage: "url('/images/background-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Container className="items-start gap-12">
              <Container className="flex-col gap-3">
                <span className="font-sans text-[20px]  text-teal-700 font-normal uppercase">
                  Audience
                </span>
                {audienceItems.map((item) => (
                  <Link
                    key={item}
                    href={`/audience/${item.toLowerCase()}`}
                    className="font-sans text-[14px] text-teal-700 font-light"
                  >
                    {item}
                  </Link>
                ))}
              </Container>

              <Container className="flex-col gap-3">
                <Link
                  href="/therapists"
                  className="font-sans text-[20px]  text-teal-700 font-normal uppercase"
                >
                  Your Therapists
                </Link>
                <Link
                  href="/faq"
                  className="font-sans text-[20px]  text-teal-700 font-normal uppercase"
                >
                  FAQ
                </Link>
                <Link
                  href="/blog"
                  className="font-sans text-[20px]  text-teal-700 font-normal uppercase"
                >
                  Blog
                </Link>
              </Container>
            </Container>

            <Link
              href="/booking"
              className="mt-8 w-fit rounded-full bg-teal-700 px-6 py-1.5 lg:py-2.5 font-sans text-[20px]  text-ivory font-light"
            >
              Booking
            </Link>
          </Container>
        </Container>
      </Container>
    </nav>
  );
}
