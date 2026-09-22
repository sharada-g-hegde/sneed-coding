"use client";

import { Star } from "lucide-react";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Link from "@/components/elements/link";

const RATING_BREAKDOWN = [
  { stars: 5, percent: 86 },
  { stars: 4, percent: 10 },
  { stars: 3, percent: 20 },
  { stars: 2, percent: 10 },
  { stars: 1, percent: 31 },
];

const REVIEWS = [
  {
    date: "March 14, 2026",
    title: "Replaced our old coder in one afternoon",
    body: "We were running a continuous inkjet that needed weekly service. The Titan dropped right onto the conveyor and has been printing lot codes on PETE bottles for 4 months with zero downtime.",
    name: "Marcus T.",
    verified: true,
  },
  {
    date: "March 14, 2026",
    title: "Replaced our old coder in one afternoon",
    body: "We were running a continuous inkjet that needed weekly service. The Titan dropped right onto the conveyor and has been printing lot codes on PETE bottles for 4 months with zero downtime.",
    name: "Marcus T.",
    verified: true,
  },
  {
    date: "March 14, 2026",
    title: "Replaced our old coder in one afternoon",
    body: "We were running a continuous inkjet that needed weekly service. The Titan dropped right onto the conveyor and has been printing lot codes on PETE bottles for 4 months with zero downtime.",
    name: "Marcus T.",
    verified: true,
  },
];

function StarRow({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <Container className="items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < count
              ? "fill-[#9B1B32] text-[#9B1B32]"
              : "fill-[#E7E7EA] text-[#E7E7EA]"
          }
        />
      ))}
    </Container>
  );
}

export default function CustomerReviewsMobile() {
  return (
    <Container className="flex-col px-4 py-10 lg:hidden">
      <Typography className="m-0 font-outfit text-[26px] font-bold leading-[1.15] text-[#24232D]">
        What customers are saying
      </Typography>

      <Container className="mt-4 items-center gap-2">
        <StarRow count={5} size={18} />
        <Typography className="m-0 font-outfit text-[16px] font-bold text-[#24232D]">
          4.9 out of 5
        </Typography>
      </Container>

      <Typography className="m-0 mt-1 text-[13px] font-inter leading-snug text-gray-500">
        Based on 218 reviews from verified production environments.
      </Typography>

      <Container className="mt-5 flex-col gap-2">
        {RATING_BREAKDOWN.map((row) => (
          <Container key={row.stars} className="items-center gap-3">
            <Typography className="m-0 w-10 shrink-0 text-[13px] font-inter text-gray-500">
              {row.stars} star
            </Typography>

            <Container className="relative h-2 flex-1 overflow-hidden rounded-full bg-[#EDEDED]">
              <Container
                className="absolute inset-y-0 left-0 rounded-full bg-[#9B1B32]"
                style={{ width: `${row.percent}%` }}
              />
            </Container>

            <Typography className="m-0 w-8 shrink-0 text-right text-[13px] font-inter text-gray-500">
              {row.percent}%
            </Typography>
          </Container>
        ))}
      </Container>

      <Container className="mt-7 flex-col gap-4">
        {REVIEWS.map((review, index) => (
          <Container
            key={index}
            className="flex-col gap-2 rounded-2xl border border-[#E7E7EA] p-5"
          >
            <Container className="items-center justify-between">
              <StarRow count={5} size={14} />
              <Typography className="m-0 text-[12px] font-inter text-gray-400">
                {review.date}
              </Typography>
            </Container>

            <Typography className="m-0 font-outfit text-[16px] font-bold leading-snug text-[#24232D]">
              {review.title}
            </Typography>

            <Typography className="m-0 text-[13px] font-inter leading-snug text-gray-500">
              {review.body}
            </Typography>

            <Container className="mt-2 items-center gap-2">
              <Typography className="m-0 text-[13px] font-inter font-medium text-[#24232D]">
                {review.name}
              </Typography>
              {review.verified && (
                <span className="rounded-full border border-[#24232D]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#24232D]">
                  Verified
                </span>
              )}
            </Container>
          </Container>
        ))}
      </Container>

      <Link
        href="/reviews"
        className="mt-6 w-full justify-center cursor-pointer rounded-full bg-[#6e1414] py-3.5 text-[15px] font-outfit font-semibold text-white transition-colors hover:bg-[#7f1628]"
      >
        View all reviews
      </Link>
    </Container>
  );
}
