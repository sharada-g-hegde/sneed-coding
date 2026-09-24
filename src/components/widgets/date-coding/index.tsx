"use client";

import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

export default function WhatIsDateCoding() {
  return (
    <Container
      width="fullWidth"
      className="bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-24"
    >
      <Container
        width="pageWidth"
        className="mx-auto max-w-350 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8"
      >
        {/* Heading */}
        <Typography className="m-0 font-outfit font-extrabold text-[32px] leading-tight text-[#24232D] lg:text-[56px]">
          What Is Date Coding?
        </Typography>

        {/* Body copy */}
        <Container className="flex-col gap-5">
          <Typography className="m-0 font-inter text-[14px] leading-relaxed lg:leading-6! text-[#4A4A52] lg:text-[16px]">
            Date coding is the process of printing time-sensitive information -
            expiration dates, best-by dates, manufacture dates, and sell-by
            dates - directly onto products or packaging during the production
            process.
          </Typography>

          <Typography className="m-0 font-inter text-[15px] leading-relaxed text-[#4A4A52] lg:text-[16px]">
            It is a critical step in manufacturing for regulatory compliance
            with FDA, USDA, and EU standards. Date codes ensure consumer safety
            by communicating product freshness, enable accurate inventory
            rotation (FIFO), and support full supply chain traceability from
            production through retail.
          </Typography>

          <Typography className="m-0 font-inter text-[15px] leading-relaxed text-[#4A4A52] lg:text-[16px]">
            Modern industrial inkjet printers can apply date codes at speeds
            exceeding 60 meters per minute on virtually any substrate — plastic,
            glass, metal, or paperboard — without slowing your production line.
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}
