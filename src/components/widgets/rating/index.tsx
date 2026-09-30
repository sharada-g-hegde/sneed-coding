"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Link from "@/components/elements/link";
import { cn } from "@/utils";

type Review = {
  rating: number;
  date: string;
  title?: string;
  body?: string;
  name: string;
  verified: boolean;
};

const AVERAGE_RATING = 4.5;
const TOTAL_REVIEWS = 32;

const RATING_BREAKDOWN = [
  { stars: 5, percent: 78 },
  { stars: 4, percent: 9 },
  { stars: 3, percent: 0 },
  { stars: 2, percent: 13 },
  { stars: 1, percent: 0 },
];

const BASE_REVIEWS: Review[] = [
  {
    rating: 5,
    date: "October 10, 2025",
    title: "Easy to use Printer",
    body: "Printer is easy to set up and to use. Shipped extremely fast. I didn't dig too far into the advanced programming but from what I have read in the manual anyone with a industrial programming background should be able to integrate into their line. Printer punches way above its weight class.",
    name: "Lucas Laqua",
    verified: true,
  },
  {
    rating: 5,
    date: "September 19, 2025",
    title: "SNEED-JET® Titan Printer",
    name: "Dwayne Smith",
    verified: true,
  },
  {
    rating: 5,
    date: "August 26, 2025",
    title: "High-quality, cost effective printing solution",
    body: "I find that the SNEED titan printer is a great solution for coding cases. It has a small footprint and delivers good quality print every time with minimal maintenance. For the price, I highly recommend SNEED Titan printers.",
    name: "Eric Stumpf",
    verified: true,
  },
  {
    rating: 2,
    date: "August 23, 2025",
    body: "NO Ink and having trouble determining what ink is needed",
    name: "Jason Gardner",
    verified: true,
  },
  {
    rating: 5,
    date: "March 21, 2025",
    title: "1st production run",
    body: "We installed the printer on our filling machine a couple days ago. All the testing worked properly, after we found the correct speed and delay settings. Today we are using it for the first production run. The printer worked flawlessly. We have this installed on 1 out of 17 machines. I will be asking our company president if I can purchase 16 more units to upgrade all of our filling machines.",
    name: "Mark Mesceda",
    verified: true,
  },
];

const ALL_REVIEWS: Review[] = Array.from(
  { length: TOTAL_REVIEWS },
  (_, i) => BASE_REVIEWS[i % BASE_REVIEWS.length],
);

const PAGE_SIZE = 5;

function StarRow({
  count,
  sizeClass = "h-4 w-4",
}: {
  count: number;
  sizeClass?: string;
}) {
  return (
    <Container className="items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const fraction = Math.min(1, Math.max(0, count - i));
        return (
          <span key={i} className={cn("relative inline-flex", sizeClass)}>
            <Star className="h-full w-full fill-[#EBD9D9] text-[#EBD9D9]" />
            {fraction > 0 && (
              <Star
                className="absolute inset-0 h-full w-full fill-[#770000] text-[#770000]"
                style={{ clipPath: `inset(0 ${(1 - fraction) * 100}% 0 0)` }}
              />
            )}
          </span>
        );
      })}
    </Container>
  );
}

export default function CustomerReviews() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ALL_REVIEWS.length / PAGE_SIZE);
  const visible = ALL_REVIEWS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(Math.min(Math.max(1, p), totalPages));
    document
      .getElementById("customer-reviews")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="customer-reviews"
      className="flex w-full justify-center px-4 py-10 lg:px-16 lg:py-16"
    >
      {/* Mobile: one column (summary, cards, button).
          Desktop: summary + button on the left, cards on the right. */}
      <Container className="3xl:max-w-[120rem] w-full 2xl:max-w-360 grid grid-cols-1 gap-x-20 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
        {/* Summary */}
        <Container className="flex-col lg:col-start-1 lg:row-start-1">
          <Typography className="m-0 font-outfit text-[32px] font-bold leading-[1.15] text-[#24232D] lg:text-[56px] lg:font-semibold lg:leading-tight lg:tracking-tight">
            What customers are saying
          </Typography>

          <Container className="mt-8 items-center gap-2 lg:mt-12 lg:gap-3">
            <StarRow
              count={AVERAGE_RATING}
              sizeClass="h-4.5 w-4.5 lg:h-3.5 lg:w-3.5"
            />
            <Typography className="m-0 font-outfit text-[18px] font-bold text-[#525159] lg:text-[20px] lg:font-semibold lg:text-[#525159]">
              {AVERAGE_RATING} out of 5
            </Typography>
          </Container>

          <Typography className="m-0 mt-2 font-inter text-[14px] leading-snug text-gray-500 lg:mt-2 lg:text-[14px] lg:text-[#525159]">
            Based on {TOTAL_REVIEWS} reviews from verified production
            environments.
          </Typography>

          <Container className="mt-8 flex-col gap-4  lg:mt-8 lg:max-w-130 lg:gap-3">
            {RATING_BREAKDOWN.map((row) => (
              <Container key={row.stars} className="items-center gap-3">
                <Typography className="m-0 w-10 shrink-0 font-inter text-[13px] text-gray-500 lg:w-9 lg:text-[12px] lg:text-[#525159]">
                  {row.stars} Star
                </Typography>
                <Container className="relative h-2 flex-1 overflow-hidden rounded-full bg-[#EFEEE6] lg:h-1.5">
                  <Container
                    className="absolute inset-y-0 left-0 rounded-full bg-[#770000]"
                    style={{ width: `${row.percent}%` }}
                  />
                </Container>
                <Typography className="m-0 w-8 shrink-0 text-right font-inter text-[13px] text-gray-500 lg:w-9 lg:text-[14px] lg:text-[#525159]">
                  {row.percent}%
                </Typography>
              </Container>
            ))}
          </Container>
        </Container>

        {/* Reviews + pagination */}
        <Container className="mt-7 flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
          <Container className="flex-col gap-4 lg:gap-3.5">
            {visible.map((review, index) => (
              <Container
                key={`${page}-${index}`}
                className="flex-col rounded-2xl border border-[#E3E3E3] bg-white p-5 lg:rounded-3xl lg:p-4"
              >
                <Container className="items-center justify-between">
                  <StarRow
                    count={review.rating}
                    sizeClass="h-3.5 w-3.5 lg:h-3 lg:w-3"
                  />
                  <Typography className="m-0 font-inter text-[12px] text-[#525159] lg:text-[12px]">
                    {review.date}
                  </Typography>
                </Container>

                {review.title && (
                  <Typography className="m-0 mt-3 font-outfit text-[16px] font-bold leading-snug text-[#525159] lg:mt-4 lg:font-inter lg:text-[16px] lg:font-semibold">
                    {review.title}
                  </Typography>
                )}

                {review.body && (
                  <Typography className="m-0 mt-3 font-inter text-[14px] leading-snug text-gray-500 lg:mt-4 lg:text-[14px] lg:leading-4.5 lg:text-[#525159]">
                    {review.body}
                  </Typography>
                )}

                <Container className="mt-4 items-center gap-2 lg:mt-5 border-t border-[#E9E9E9] pt-3.5">
                  <Typography className="m-0 font-inter text-[14px] font-medium text-[#525159] lg:text-[14px] lg:font-normal">
                    {review.name}
                  </Typography>
                  {review.verified && (
                    <span className="rounded-full border border-[#24232D]/15 px-2.5 py-0.5 font-inter text-[12px] font-medium text-[#24232D] lg:border-[#D6D6D6] lg:px-2 lg:text-[12px] lg:font-normal lg:text-[#525159]">
                      Verified
                    </span>
                  )}
                </Container>
              </Container>
            ))}
          </Container>

          {/* Pagination */}
          <nav
            aria-label="Reviews pagination"
            className="mt-6 flex items-center justify-center gap-1.5 font-inter text-[12px] text-[#525159] lg:gap-2 lg:text-[11px]"
          >
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="flex h-7 w-7 cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:opacity-40 lg:h-6 lg:w-6"
            >
              <ArrowLeft size={14} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => goTo(p)}
                aria-current={p === page ? "page" : undefined}
                className={cn(
                  "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md font-semibold transition-colors lg:h-6 lg:w-6",
                  p === page
                    ? "bg-[#9B1B1B] text-white"
                    : "text-[#525159] hover:bg-[#F0E6E6]",
                )}
              >
                {p}
              </button>
            ))}

            <button
              type="button"
              aria-label="Next page"
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className="flex h-7 w-7 cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:opacity-40 lg:h-6 lg:w-6"
            >
              <ArrowRight size={14} />
            </button>
          </nav>
        </Container>

        {/* Button: below the cards on mobile, under the summary on desktop */}
        <Link
          href="/reviews"
          className="mt-10 w-full cursor-pointer justify-center self-start rounded-full bg-[#9B1B1B] py-3.5 font-outfit text-[15px] font-semibold text-white transition-colors hover:bg-[#7f1616] lg:col-start-1 lg:row-start-2 lg:mt-8 lg:w-fit lg:px-4 lg:py-2.5 lg:text-[11px]"
        >
          View all reviews
        </Link>
      </Container>
    </section>
  );
}
