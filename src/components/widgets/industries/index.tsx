"use client";

import { useState } from "react";
import { cn } from "@/utils";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

const INDUSTRIES = [
  {
    id: "food-beverage",
    label: "Food & Beverage",
    image: "/images/Category_Card.webp",
    description:
      "Labels and packaging built to survive ice baths, condensation and cold-chain handling without lifting or fading.",
  },
  {
    id: "pharmaceutical",
    label: "Pharmaceutical",
    image: "/images/Category_Card__1_.webp",
    description:
      "Tamper-evident, chemical-resistant materials that meet regulatory traceability requirements batch after batch.",
  },
  {
    id: "cosmetics",
    label: "Cosmetics",
    image: "/images/Category_Card__2_.webp",
    description:
      "Premium finishes and foil detailing that hold up on the shelf and feel right in the hand.",
  },
  {
    id: "industrial",
    label: "Industrial Manufacturing",
    image: "/images/Category_Card__3_.webp",
    description:
      "Durable identification that withstands heat, oil, abrasion and repeated handling on the floor.",
  },
  {
    id: "consumer-goods",
    label: "Consumer Goods",
    image: "/images/Category_Card__4_.webp",
    description:
      "Consistent brand color and print quality across every carton, every run, every warehouse.",
  },
];

type Industry = (typeof INDUSTRIES)[number];

function IndustryCard({ item }: { item: Industry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      width="fullWidth"
      className="group relative lg:h-95 h-58 overflow-hidden rounded-3xl bg-neutral-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Media
        src={item.image}
        alt={item.label}
        width={800}
        height={600}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Static gradient over the image */}
      <Container
        width="fullWidth"
        className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(24,23,29,0)_59.27%,rgba(24,23,29,0.8)_99.87%)]"
      />

      {/* Hover overlay */}
      <Container
        width="fullWidth"
        className={cn(
          "pointer-events-none absolute inset-0 z-1 bg-black/30 transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-0",
        )}
      />

      <Container
        width="fullWidth"
        className={cn(
          "pointer-events-none absolute inset-0 bg-black/30 transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-30",
        )}
      />

      <button
        type="button"
        aria-label={`Show ${item.label} details`}
        className={cn(
          "absolute hidden! lg:flex! right-3.5 top-3.5 z-10",
          "h-18 w-18 items-center justify-center",
          "rounded-full border",
          "transition-all duration-300",
          hovered
            ? "border-white bg-white text-red-900"
            : "border-white/80 bg-transparent text-white",
        )}
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          className="transition-colors duration-300"
        >
          <path
            d="M12 30L30 12M30 12H16M30 12V26"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Container
        width="fullWidth"
        className="absolute lg:bottom-12 bottom-4 left-4.5 right-4.5 lg:px-4 z-10 flex-col text-white"
      >
        <span className="block text-[18px] font-outfit font-semibold lg:text-[24px]">
          {item.label}
        </span>

        <Container
          width="fullWidth"
          className={cn(
            "overflow-hidden transition-[max-height,margin-top,opacity] duration-300 ease-in-out",
            hovered ? "mt-1.5 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0",
          )}
        >
          <Typography className="m-0 font-inter hidden lg:flex lg:leading-7! text-white/90 lg:text-[16px]">
            {item.description}
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}

export default function IndustriesSection() {
  return (
    <Container
      component="section"
      width="pageWidth"
      className="flex-col px-4 py-10 lg:px-16"
    >
      <Typography className="mb-6 font-outfit font-bold leading-tight tracking-tight text-neutral-900 text-[32px] lg:text-[56px]">
        We fit every line
      </Typography>

      <Container
        width="fullWidth"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {INDUSTRIES.slice(0, 2).map((item) => (
          <IndustryCard key={item.id} item={item} />
        ))}
      </Container>

      <Container
        width="fullWidth"
        className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {INDUSTRIES.slice(2).map((item) => (
          <IndustryCard key={item.id} item={item} />
        ))}
      </Container>
    </Container>
  );
}
