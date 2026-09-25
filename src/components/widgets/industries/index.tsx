"use client";

import { useState } from "react";
import { cn } from "@/utils";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export interface CategoryCardItem {
  id: string;
  label: string;
  image: string;
  description: string;
}

interface CategoryGridSectionProps {
  heading: string;
  items: CategoryCardItem[];
}

function CategoryCard({ item }: { item: CategoryCardItem }) {
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

      <Container
        width="fullWidth"
        className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(24,23,29,0)_59.27%,rgba(24,23,29,0.8)_99.87%)]"
      />

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

export default function CategoryGridSection({
  heading,
  items,
}: CategoryGridSectionProps) {
  const topRow = items.slice(0, 2);
  const bottomRow = items.slice(2);

  return (
    <Container
      component="section"
      width="fullWidth"
      className="flex-col items-center"
    >
      <Container width="pageWidth" className="flex-col px-4 py-10 lg:px-16">
        <Typography className="mb-6 font-outfit font-bold leading-tight tracking-tight text-neutral-900 text-[32px] lg:text-[56px]">
          {heading}
        </Typography>

        <Container
          width="fullWidth"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {topRow.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </Container>

        <Container
          width="fullWidth"
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {bottomRow.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
