"use client";

import { useState } from "react";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

type ShareClass = {
  name: string;
  ticker: string;
  ytd: string;
  y1: string;
  y5: string;
  y10: string;
  inception: string;
  date: string;
};

type Fund = { id: string; name: string; classes: ShareClass[] };

const row = (
  name: string,
  ticker: string,
  ytd: string,
  y1: string,
  y5: string,
  y10: string,
  inception: string,
  date: string,
): ShareClass => ({ name, ticker, ytd, y1, y5, y10, inception, date });

const FUNDS: Fund[] = [
  {
    id: "absolute-return",
    name: "Payden Absolute Return Bond Fund",
    classes: [
      row(
        "Adviser",
        "PYABX",
        "1.73%",
        "3.51%",
        "-",
        "-",
        "5.54%",
        "11/30/2023",
      ),
      row(
        "Investor",
        "PYARX",
        "1.90%",
        "3.77%",
        "3.60%",
        "3.26%",
        "3.10%",
        "11/06/2014",
      ),
      row(
        "SI",
        "PYAIX",
        "2.16%",
        "4.00%",
        "3.85%",
        "3.50%",
        "3.32%",
        "11/06/2014",
      ),
    ],
  },
  {
    id: "california-muni",
    name: "Payden California Municipal Social Impact Fund",
    classes: [
      row(
        "Adviser",
        "PYCWX",
        "1.10%",
        "2.40%",
        "1.20%",
        "1.60%",
        "2.10%",
        "11/30/2023",
      ),
      row(
        "SI",
        "PYCIX",
        "1.35%",
        "2.70%",
        "1.45%",
        "1.85%",
        "2.30%",
        "08/22/2018",
      ),
    ],
  },
  {
    id: "cash-reserves",
    name: "Payden Cash Reserves Money Market Fund",
    classes: [
      row(
        "Investor",
        "PBHXX",
        "3.05%",
        "4.60%",
        "2.40%",
        "1.70%",
        "2.00%",
        "01/02/1994",
      ),
    ],
  },
  {
    id: "core-bond",
    name: "Payden Core Bond Fund",
    classes: [
      row(
        "Adviser",
        "PYCBX",
        "2.20%",
        "3.10%",
        "0.40%",
        "1.60%",
        "3.00%",
        "11/30/2023",
      ),
      row(
        "Investor",
        "PYCRX",
        "2.35%",
        "3.35%",
        "0.65%",
        "1.85%",
        "3.20%",
        "11/06/2014",
      ),
      row(
        "SI",
        "PYCIX",
        "2.60%",
        "3.60%",
        "0.90%",
        "2.05%",
        "3.40%",
        "11/06/2014",
      ),
    ],
  },
  {
    id: "corporate-bond",
    name: "Payden Corporate Bond Fund",
    classes: [
      row(
        "Adviser",
        "PYCXX",
        "2.80%",
        "4.10%",
        "1.10%",
        "2.30%",
        "3.60%",
        "11/30/2023",
      ),
      row(
        "Investor",
        "PYCPX",
        "2.95%",
        "4.35%",
        "1.35%",
        "2.55%",
        "3.80%",
        "11/06/2014",
      ),
      row(
        "SI",
        "PYCSX",
        "3.20%",
        "4.60%",
        "1.60%",
        "2.75%",
        "4.00%",
        "11/06/2014",
      ),
    ],
  },
];

const MOBILE_CARDS = FUNDS.flatMap((f) =>
  f.classes.map((c) => ({ fundName: f.name, ...c })),
);
const PAGE_SIZE = 3;

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

const th = "px-3 pb-3 text-right text-[12px] font-normal text-[#3d3d45]";
const td = "px-3 py-5 text-right text-[12px] text-[#1d6485]";

function FundAccordion({
  fund,
  defaultOpen,
}: {
  fund: Fund;
  defaultOpen?: boolean;
}) {
  const inputId = `fund-${fund.id}`;
  const count = fund.classes.length;

  return (
    <Container
      width="fullWidth"
      className="group flex-col rounded-xl border border-[#d6dce2] bg-[#fbfcfe] has-focus-visible:ring-2 has-focus-visible:ring-[#00b6b2]"
    >
      <input
        id={inputId}
        type="checkbox"
        defaultChecked={defaultOpen}
        className="peer sr-only"
      />

      <label
        htmlFor={inputId}
        className="flex cursor-pointer items-center justify-between px-6 py-5 group-has-checked:text-[#00b6b2]"
      >
        <span className="font-outfit text-[18px] lg:text-[20px] font-medium text-inherit group-not-has-checked:text-[#272631]">
          {fund.name}
        </span>
        <span className="flex items-center gap-2 font-inter text-[12px] lg:text-[14px] font-medium">
          {count} Share {count > 1 ? "Classes" : "Class"}
          <Chevron className="transition-transform duration-300 group-has-checked:rotate-180" />
        </span>
      </label>

      <Container
        width="fullWidth"
        className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-has-checked:grid-rows-[1fr] group-has-[#show-all:checked]/all:grid-rows-[1fr]"
      >
        <Container width="fullWidth" className="overflow-hidden">
          <Container width="fullWidth" className="px-4 pb-6">
            <table className="w-full border-collapse font-inter">
              <thead>
                <tr className="border-b border-[#9aa1a8]">
                  <th className="px-3 pb-3 text-left text-[12px] lg:text-[14px] font-normal text-[#3d3d45]">
                    Share Class
                  </th>
                  <th className="px-3 pb-3 text-left text-[12px] font-normal text-[#3d3d45]">
                    Ticker
                  </th>
                  <th className={th}>YTD</th>
                  <th className={th}>1 Year</th>
                  <th className={th}>5 Year</th>
                  <th className={th}>10 Year</th>
                  <th className={th}>Since Inception</th>
                  <th className={th}>Inception Date</th>
                </tr>
              </thead>
              <tbody>
                {fund.classes.map((c) => (
                  <tr key={c.ticker}>
                    <td className="px-3 py-5 text-[12px] font-semibold text-[#272631]">
                      {c.name}
                    </td>
                    <td className="px-3 py-5 text-[12px] font-semibold text-[#272631]">
                      {c.ticker}
                    </td>
                    <td className={td}>{c.ytd}</td>
                    <td className={td}>{c.y1}</td>
                    <td className={td}>{c.y5}</td>
                    <td className={td}>{c.y10}</td>
                    <td className={td}>{c.inception}</td>
                    <td className="px-3 py-5 text-right text-[12px] text-[#525159]">
                      {c.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

/* ---------------- Mobile card ---------------- */
function MobileCard({ card }: { card: (typeof MOBILE_CARDS)[number] }) {
  const rows = [
    ["YTD", card.ytd],
    ["1 Year", card.y1],
    ["5 Year", card.y5],
    ["10 Year", card.y10],
    ["Since Inception", card.inception],
  ];

  return (
    <Container
      width="fullWidth"
      className="flex-col rounded-3xl border border-[#cfd6dd] bg-[#fbfcfe] p-6"
    >
      <Container
        width="fullWidth"
        className="items-start justify-between gap-3"
      >
        <Container className="flex-col">
          <span className="font-outfit text-[18px] font-semibold leading-6 text-[#272631]">
            {card.fundName}
          </span>
          <span className="mt-2 font-inter text-[16px] text-[#525159]">
            {card.name} Class
          </span>
        </Container>
        <span className="rounded-lg bg-[#eceff1] px-4 py-3.5 font-inter text-[16px] font-medium text-[#272631]">
          {card.ticker}
        </span>
      </Container>

      <table className="mt-6 w-full border-collapse font-inter">
        <caption className="border-b border-[#272631] pb-3 text-left text-[16px] font-medium text-[#272631]">
          Fund Performance
        </caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr
              key={label}
              className="border-b border-[#9aa1a8] last:border-b-0"
            >
              <th
                scope="row"
                className="py-4 text-left text-[16px] font-semibold text-[#272631]"
              >
                {label}
              </th>
              <td className="py-4 text-right text-[16px] text-[#525159]">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

/* ---------------- Shared pagination (used above and below) ---------------- */
function Pagination({
  page,
  totalPages,
  onChange,
  className = "",
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
  className?: string;
}) {
  if (totalPages <= 1) return null;

  const start = Math.max(1, Math.min(page - 2, totalPages - 4));
  const end = Math.min(totalPages, start + 4);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center justify-center gap-2 font-inter text-[18px] text-[#525159] ${className}`}
    >
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          aria-current={p === page ? "page" : undefined}
          className={`flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-full px-2 ${
            p === page ? "bg-[#e3e8ec] font-medium text-[#272631]" : ""
          }`}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        aria-label="Next page"
        onClick={() => onChange(Math.min(page + 1, totalPages))}
        disabled={page === totalPages}
        className="flex h-9 min-w-9 cursor-pointer items-center justify-center disabled:opacity-40"
      >
        &rsaquo;
      </button>
      <button
        type="button"
        aria-label="Last page"
        onClick={() => onChange(totalPages)}
        disabled={page === totalPages}
        className="flex h-9 min-w-9 cursor-pointer items-center justify-center disabled:opacity-40"
      >
        &raquo;
      </button>
    </nav>
  );
}

export default function AvailableFunds() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(MOBILE_CARDS.length / PAGE_SIZE);
  const visible = MOBILE_CARDS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const changePage = (p: number) => {
    setPage(p);
    document
      .getElementById("funds-mobile")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container
      width="fullWidth"
      className="group/all flex-col bg-[#fbfcfe] pb-16 lg:px-16 lg:pb-20"
    >
      <input id="show-all" type="checkbox" className="peer sr-only" />

      <Container
        width="fullWidth"
        className="flex-col bg-[#f3f6fb] px-5 pb-8 pt-8 lg:bg-transparent lg:px-0 lg:pt-12 lg:pb-0"
      >
        <Typography className="font-outfit text-[26px] font-medium text-[#272631] lg:text-[32px]">
          Available U.S. Funds
        </Typography>
        <p className="mt-2 font-inter text-[20px] text-[#6b7480] lg:text-[18px]">
          As of 08/31/2026
        </p>

        <Container
          width="fullWidth"
          className="mt-8 items-end justify-between lg:mt-6"
        >
          <Container className="flex-col gap-1.5 font-inter text-[16px] italic leading-7 text-[#617C93] lg:text-[16px] lg:leading-4.5">
            <p>
              Past performance is no guarantee of future results. Please see
              below for important disclosures.
            </p>
            <p>
              Returns less than one year are not annualized. All returns are net
              of fees.
            </p>
          </Container>

          <label
            htmlFor="show-all"
            className="hidden cursor-pointer items-center gap-2 font-inter text-[12px] font-medium lg:text-[14px] text-[#272631] lg:flex"
          >
            <span className="group-has-[#show-all:checked]/all:hidden">
              Show all share classes
            </span>
            <span className="hidden group-has-[#show-all:checked]/all:inline">
              Hide all share classes
            </span>
            <Chevron className="transition-transform duration-300 group-has-[#show-all:checked]/all:rotate-180" />
          </label>
        </Container>
      </Container>

      {/* Desktop: accordion list (unchanged, no pagination) */}
      <Container
        width="fullWidth"
        className="mt-6 hidden flex-col gap-3.5 lg:flex"
      >
        {FUNDS.map((fund, i) => (
          <FundAccordion key={fund.id} fund={fund} defaultOpen={i === 0} />
        ))}
      </Container>

      {/* Mobile: pagination (top) + cards + pagination (bottom) */}
      <div id="funds-mobile" className="flex flex-col px-5 lg:hidden">
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={changePage}
          className="mb-6 mt-3"
        />

        <div className="flex w-full flex-col gap-6">
          {visible.map((card) => (
            <MobileCard key={`${card.fundName}-${card.ticker}`} card={card} />
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={changePage}
          className="mb-2 mt-8"
        />
      </div>
    </Container>
  );
}
