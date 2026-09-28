"use client";

import { useState } from "react";
import { cn } from "@/utils";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export interface SurfaceCardItem {
  id: string;
  label: string;
  image: string;
  description?: string;
}

interface SurfaceGridProps {
  heading: string;
  intro?: string;
  items: SurfaceCardItem[];
  wideIndexes?: number[];
}

function SurfaceCard({
  item,
  wide,
}: {
  item: SurfaceCardItem;
  wide?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      width="fullWidth"
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-neutral-200",
        "min-h-60 max-h-60  lg:h-full lg:w-full",
        wide && "lg:col-span-2",
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

      <Container
        width="fullWidth"
        className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(24,23,29,0)_45%,rgba(24,23,29,0.8)_100%)]"
      />

      <Container
        width="fullWidth"
        className={cn(
          "pointer-events-none absolute inset-0 z-1 bg-black/30 transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-0",
        )}
      />

      <button
        type="button"
        aria-label={`Show ${item.label} details`}
        className={cn(
          "absolute hidden! lg:flex! right-3.5 top-3.5 z-10",
          "h-11 w-11 items-center justify-center rounded-full border",
          "transition-all duration-300",
          hovered
            ? "border-white bg-white text-red-900"
            : "border-white/80 bg-transparent text-white",
        )}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 42 42"
          fill="none"
          className="transition-colors duration-300"
          aria-hidden
        >
          <path
            d="M12 30L30 12M30 12H16M30 12V26"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Container
        width="fullWidth"
        className="absolute bottom-4 left-4 right-4 z-10 flex-col text-white lg:bottom-5"
      >
        <span className="block font-outfit text-[18px] lg:whitespace-pre-line lg:text-[24px] leading-snug font-semibold">
          {item.label}
        </span>

        {item.description && (
          <Container
            width="fullWidth"
            className={cn(
              "overflow-hidden transition-[max-height,margin-top] font-inter duration-500 ease-out",
              hovered ? "mt-1.5 max-h-28" : "mt-0 max-h-0",
            )}
          >
            <Typography
              className={cn(
                "pr-6 hidden font-inter text-[14px] lg:text-[16px] lg:leading-5! leading-5 text-white/90 transition-all duration-500 ease-out lg:flex",
                hovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0",
              )}
            >
              {item.description}
            </Typography>
          </Container>
        )}
      </Container>
    </Container>
  );
}

export default function SurfaceGrid({
  heading,
  intro,
  items,
  wideIndexes = [0, 5],
}: SurfaceGridProps) {
  const wideSet = new Set(wideIndexes);

  return (
    <Container width="fullWidth" className="flex-col items-center">
      <Container className="3xl:max-w-[120rem] w-full 2xl:max-w-360 flex-col gap-6 lg:gap-10 px-4 py-10 lg:px-16 lg:py-16">
        <Container className="flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <Typography className="m-0 font-outfit text-[32px] leading-tight font-semibold text-[#272631] lg:text-[40px]">
            {heading}
          </Typography>

          {intro && (
            <Typography className="m-0 whitespace-pre-line font-inter text-[14px] lg:text-[16px] leading-5 text-[#525159] lg:max-w-2xl lg:pt-1">
              {intro}
            </Typography>
          )}
        </Container>

        <Container
          width="fullWidth"
          className="grid w-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, index) => (
            <SurfaceCard key={item.id} item={item} wide={wideSet.has(index)} />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
