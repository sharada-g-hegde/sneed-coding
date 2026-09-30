"use client";

import { useState } from "react";
import { cn } from "@/utils";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export interface BentoCardItem {
  id: string;
  label: string;
  image: string;
  description: string;
}

interface BentoCardGridProps {
  heading: string;
  items: BentoCardItem[];
  tallIndexes?: number[];
}

function BentoCard({ item, tall }: { item: BentoCardItem; tall?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      width="fullWidth"
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-neutral-200",
        "h-75 lg:h-full",
        tall && "lg:row-span-2",
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Media
        src={item.image}
        alt={item.label}
        width={1000}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Static bottom gradient */}
      <Container
        width="fullWidth"
        className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(24,23,29,0)_59.27%,rgba(24,23,29,0.8)_99.87%)]"
      />

      {/* Hover overlays */}
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

      {/* Arrow button */}
      <button
        type="button"
        aria-label={`Show ${item.label} details`}
        className={cn(
          "absolute hidden! lg:flex! right-10 top-10 z-10",
          "h-20 w-20 items-center justify-center",
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

      {/* Label + description */}
      <Container
        width="fullWidth"
        className="absolute bottom-4 left-3 right-4.5 z-10 flex-col text-white lg:bottom-8 lg:left-7 lg:right-28"
      >
        <span className="block font-outfit text-[18px] font-semibold lg:text-[28px]">
          {item.label}
        </span>

        <Container
          width="fullWidth"
          className={cn(
            "overflow-hidden transition-[max-height,margin-top,opacity] duration-300 ease-in-out",
            hovered ? "mt-1.5 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0",
          )}
        >
          <Typography className="m-0 hidden font-inter text-white/90 lg:flex lg:text-[16px] lg:leading-7!">
            {item.description}
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}

export default function BentoCardGrid({
  heading,
  items,
  tallIndexes = [0],
}: BentoCardGridProps) {
  const tallSet = new Set(tallIndexes);

  return (
    <Container
      width="fullWidth"
      className="flex-col items-center px-4 py-10 lg:px-16 lg:py-20"
    >
      <Container width="pageWidth" className="flex-col">
        <Typography className="mb-6 font-outfit text-[32px] font-semibold leading-tight tracking-tight text-[#272631] lg:mb-8 lg:text-[56px]">
          {heading}
        </Typography>

        {/* Mobile: stacked. Desktop: 2 columns x 2 rows, fixed 700px tall */}
        <Container
          width="fullWidth"
          className="grid w-auto grid-cols-1 gap-6 lg:h-140 lg:grid-cols-2 lg:grid-rows-2 lg:gap-7.5"
        >
          {items.map((item, index) => (
            <BentoCard key={item.id} item={item} tall={tallSet.has(index)} />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
