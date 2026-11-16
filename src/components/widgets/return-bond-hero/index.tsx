"use client";

import Container from "@/components/elements/container";
import NavbarPayden from "../navbarPayden";
import Typography from "@/components/elements/typography";
import ClassDropdown from "../custom-dropdown";
import Link from "@/components/elements/link";

type Row = {
  label: string;
  sup?: string; // superscript footnote, e.g. "A"
  value: string;
};

type Section = {
  title: string;
  rows: Row[];
  asOf?: string;
};

const sections: Section[] = [
  {
    title: "NAV / Daily Prices",
    rows: [
      { label: "NAV ($)", value: "10.66" },
      { label: "NAV Change ($)", value: "0.02" },
      { label: "Change %", value: "0.19%" },
      { label: "MTD Return", value: "0.38%" },
      { label: "YTD Return", value: "0.20%" },
    ],
    asOf: "10/27/2026",
  },
  {
    title: "Statistics",
    rows: [
      { label: "30-Day SEC Yield", sup: "A", value: "7.22%" },
      { label: "Average Maturity", value: "9.66 Years" },
      { label: "Effective Duration", sup: "B", value: "5.96 Years" },
    ],
    asOf: "09/30/2026",
  },
  {
    title: "Expenses",
    rows: [{ label: "Total Fund Operating Expenses", value: "0.73%" }],
  },
];

export default function ReturnBondHero() {
  return (
    <Container width="fullWidth" className="flex-col items-start bg-gray-200">
      <NavbarPayden
        shareClasses={[
          "Payden Absolute Return Bond Fund",
          "Payden California Municipal Social Impact Fund",
          "Payden Cash Reserves Money Market Fund",
          "Payden Core Bond Fund",
          "Payden Corporate Bond Fund",
          "Payden Emerging Markets Bond Fund",
        ]}
      />
      <Container className="flex-col px-4 py-6 lg:flex-row lg:gap-10 lg:px-16 lg:pt-47 2xl:px-[max(4.5vw,calc((100vw-1800px)/2))] lg:justify-start lg:pb-10">
        <Container className="flex-col gap-2 lg:gap-6">
          <Typography className="text-[24px] leading-8 text-[#124363] lg:py-2.5 lg:text-[64px] font-brandon-grotesque lg:tracking-[-1.5px] lg:leading-20">
            Payden Emerging Markets Bond Fund
          </Typography>
          <Container className="flex-col gap-4 lg:gap-10 xl:flex-row">
            <Typography className="leading-regular text-lg text-[#2F3B47] font-medium lg:py-[0.625rem] lg:text-[1.5rem] lg:leading-[2rem]">
              PYEMX
            </Typography>
            <ClassDropdown
              options={["Investor", "Adviser", "SI"]}
              placeholder="Investor"
              onChange={(value) => console.log(value)}
            />
            <Container className="flex w-auto flex-col gap-[1.5rem] pt-[0.5rem] md:flex-row md:pt-0 lg:items-center lg:gap-[2rem]">
              <Link
                href=""
                variant="Link"
                className="font-albertSans cursor-pointer text-center font-semibold text-gray-700 duration-300 bg-transparent !bg-transparent w-fit pr-[1.5rem] pl-[1rem] hover:text-teal-500 sm:w-fit lg:pr-0 lg:pl-0"
              >
                Fact Sheet
              </Link>
              <Link
                href=""
                variant="Link"
                className="font-albertSans cursor-pointer text-center font-semibold text-gray-700 duration-300 bg-transparent !bg-transparent w-fit pr-[1.5rem] pl-[1rem] hover:text-teal-500 sm:w-fit lg:pr-0 lg:pl-0"
              >
                Summary Prospectus
              </Link>
              <Link
                href=""
                variant="Link"
                className="font-albertSans cursor-pointer text-center font-semibold text-gray-700 duration-300 bg-transparent !bg-transparent w-fit pr-[1.5rem] pl-[1rem] hover:text-teal-500 sm:w-fit lg:pr-0 lg:pl-0"
              >
                Prospectus
              </Link>
            </Container>
          </Container>
          <Container
            width="fullWidth"
            className="flex-col items-center justify-center"
          >
            <Container
              width="fullWidth"
              className="2xl:max-w-480 grid grid-cols-1 gap-10 lg:py-14 md:grid-cols-3 md:gap-12"
            >
              {sections.map((section) => (
                <Container key={section.title} className="w-full flex-col">
                  {/* Heading with underline */}
                  <Container className="w-full border-b border-[#2F3B47] px-2.5 pb-3">
                    <Typography className="font-albertSans text-[17px] font-semibold text-[#2F3B47]">
                      {section.title}
                    </Typography>
                  </Container>

                  {/* Rows */}
                  <Container className="w-full flex-col pt-6">
                    {section.rows.map((row) => (
                      <Container
                        key={row.label}
                        className="w-full items-center justify-between gap-4 px-2.5 py-3"
                      >
                        <Typography className="font-albertSans text-[17px] font-semibold text-[#2F3B47]">
                          {row.label}
                          {row.sup && (
                            <sup className="ml-px text-[11px] font-semibold">
                              {row.sup}
                            </sup>
                          )}
                        </Typography>
                        <Typography className="font-albertSans shrink-0 text-[16px] font-normal text-[#5B6672]">
                          {row.value}
                        </Typography>
                      </Container>
                    ))}

                    {/* Date as of */}
                    {section.asOf && (
                      <Container className="w-full items-center justify-between gap-4 px-2.5 pt-4">
                        <Typography className="font-albertSans text-[15px] text-[#5F84A3]">
                          Date as of
                        </Typography>
                        <Typography className="font-albertSans text-[15px] text-[#5F84A3]">
                          {section.asOf}
                        </Typography>
                      </Container>
                    )}
                  </Container>
                </Container>
              ))}
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
