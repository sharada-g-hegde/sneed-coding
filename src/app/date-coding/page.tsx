"use client";

import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";
import Link from "@/components/elements/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SubstratesSection from "@/components/widgets/date-coding-grid1";
import IndustriesSection from "@/components/widgets/date-coding-grid2";
import DateCodingProducts from "@/components/widgets/data-coding-printers";
import DateCodingVideoSCarousel from "@/components/widgets/data-coding-carousel";
import SuccessStories from "@/components/widgets/data-coding-successStory";
import DateCodingfaq from "@/components/widgets/date-coding-faq";
import DateCodingGrid from "@/components/widgets/date-coding-grid3";
import HeadingWithCopy from "@/components/widgets/two-column-text";

export default function DateCodingHero() {
  return (
    <>
      <Navbar />
      <Container
        width="fullWidth"
        className="relative items-center justify-center lg:p-2"
      >
        <Container
          width="pageWidth"
          className="relative 3xl:max-w-[120rem] 2xl:max-w-360 lg:min-h-screen items-center justify-center"
        >
          <Media
            src="/images/date-coding-Hero.png"
            alt="Aluminum cans with date codes on a production line"
            fill
            className="absolute inset-0 h-full w-full object-cover rounded-3xl"
          />

          {/* Content */}
          <Container className="relative z-10 flex-col gap-6 lg:gap-8 items-center justify-center h-full px-4 lg:px-6 pt-22 pb-10 lg:pt-6 lg:pb-6 lg:mt-10 text-center">
            <Typography className="font-outfit font-extrabold text-white text-[44px] leading-[1.05] tracking-[-1px] lg:text-[80px] lg:tracking-[-1px]">
              Date Coding
            </Typography>

            <Typography className="font-inter text-[16px] lg:leading-6! mx-auto text-white md:max-w-[69%]">
              Industrial inkjet printers starting at ₹143,714. Ships same day
              from Texas.
            </Typography>

            <Container className="lg:mt-4 w-full items-center justify-center max-w-[340px] lg:max-w-none flex-col lg:flex-row lg:items-center gap-4">
              <Link
                href="/products"
                className="whitespace-nowrap w-full items-center justify-center lg:w-auto text-center font-outfit rounded-full bg-[#9A1A1C] px-6 py-3 lg:py-3 text-[16px] font-semibold border border-transparent hover:border-[#9A1A1C] text-white transition-colors hover:text-white hover:bg-[#7f1628]"
              >
                Find my printer
              </Link>

              <Link
                href="/videos"
                className="whitespace-nowrap w-full items-center justify-center lg:w-auto text-center font-outfit rounded-full bg-white px-6 py-3 lg:py-3 text-[16px] font-semibold text-[#770000] hover:text-[#770000] transition-colors hover:bg-red-100"
              >
                Watch it in action
              </Link>
            </Container>
          </Container>
        </Container>
      </Container>
      <HeadingWithCopy
        heading="What Is Date Coding?"
        paragraphs={[
          "Date coding is the process of printing time-sensitive information - expiration dates, best-by dates, manufacture dates, and sell-by dates - directly onto products or packaging during the production process.\n\nIt is a critical step in manufacturing for regulatory compliance with FDA, USDA, and EU standards. Date codes ensure consumer safety by communicating product freshness, enable accurate inventory rotation (FIFO), and support full supply chain traceability from production through retail.\n\nModern industrial inkjet printers can apply date codes at speeds exceeding 60 meters per minute on virtually any substrate — plastic, glass, metal, or paperboard — without slowing your production line.",
        ]}
      />
      <SubstratesSection />
      <IndustriesSection />
      <DateCodingProducts />
      <DateCodingVideoSCarousel />
      <SuccessStories />
      <DateCodingfaq />
      <DateCodingGrid />
      <Footer />
    </>
  );
}
