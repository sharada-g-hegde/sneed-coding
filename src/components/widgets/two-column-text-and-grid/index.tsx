"use client";

import { useState } from "react";
import { cn } from "@/utils";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export interface JobCardItem {
  id: string;
  label: string;
  image: string;
  description: string;
}

interface JobCardsSectionProps {
  heading: string;
  items: JobCardItem[];
}

function JobCard({ item }: { item: JobCardItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      width="fullWidth"
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-neutral-200",
        "h-60 lg:h-75",
      )}
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
          "absolute right-3.5 top-3.5 z-10 hidden! lg:flex!",
          "h-11 w-11 lg:h-16 lg:w-16 items-center justify-center",
          "rounded-full border",
          "transition-all duration-300",
          hovered
            ? "border-white bg-white text-red-900"
            : "border-white/80 bg-transparent text-white",
        )}
      >
        <svg
          width="24"
          height="24"
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
        className="absolute bottom-4 left-4 right-4 z-10 flex-col text-white"
      >
        <span className="block font-outfit text-[14px] lg:text-[24px] font-semibold">
          {item.label}
        </span>

        <Container
          width="fullWidth"
          className={cn(
            "overflow-hidden transition-[max-height,margin-top,opacity] duration-300 ease-in-out",
            hovered ? "mt-1.5 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0",
          )}
        >
          <Typography className="m-0 hidden font-inter text-[14px] text-white/90 lg:flex lg:leading-6!">
            {item.description}
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}

export default function JobCardsSection({
  heading,
  items,
}: JobCardsSectionProps) {
  return (
    <Container
      width="fullWidth"
      className="flex-col items-center px-4 py-10 lg:px-14 lg:py-20"
    >
      <Container
        width="pageWidth"
        className="flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-4"
      >
        <Typography className="font-outfit text-[32px] font-semibold leading-tight tracking-tight text-[#272631] lg:text-[56px]">
          {heading}
        </Typography>

        <Container width="fullWidth" className="flex-col gap-5">
          {items.map((item) => (
            <JobCard key={item.id} item={item} />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
