"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/elements/container";
import { cn } from "@/utils";
import Typography from "@/components/elements/typography";

const QUESTIONS = [
  {
    id: "product",
    question: "What does your line produce?",
    options: [
      "Beverages & Liquids",
      "Food & Sauce",
      "Pharmaceuticals",
      "General Manufacturing",
    ],
  },
  {
    id: "surface",
    question: "What surface are you printing on?",
    options: [
      "Plastic Bottles & Films",
      "Glass",
      "Cardboard & Cartons",
      "Metal & Cans",
    ],
  },
  {
    id: "speed",
    question: "What's your production speed?",
    options: [
      "Under 100 units/min",
      "100–300 units/min",
      "300–600 units/min",
      "600+ units/min",
    ],
  },
  {
    id: "environment",
    question: "What's your production environment like?",
    options: [
      "Dry & climate-controlled",
      "Humid or wet",
      "Dusty or outdoor",
      "Washdown / sanitized",
    ],
  },
  {
    id: "content",
    question: "What do you need printed?",
    options: [
      "Batch codes & dates",
      "Barcodes & QR codes",
      "Full nutrition labels",
      "Serial numbers & traceability",
    ],
  },
];

const RESULTS = {
  Glass: {
    name: "UV Laser Marking System",
    blurb:
      "Etches permanent, high-contrast codes directly into glass with no ink, no consumables, and no smudging on the line.",
  },

  "Washdown / sanitized": {
    name: "Stainless Continuous Inkjet (CIJ)",
    blurb:
      "Sealed, IP69K-rated printhead built for daily washdown and sanitized environments without corrosion or downtime.",
  },

  "600+ units/min": {
    name: "High-Speed Thermal Inkjet (TIJ)",
    blurb:
      "Keeps pace with high-throughput lines while holding print quality on fast-moving cartons and films.",
  },

  default: {
    name: "Continuous Inkjet (CIJ) Printer",
    blurb:
      "A versatile, high-uptime marking system calibrated to your substrate, speed, and environment for reliable batch-after-batch coding.",
  },
};

type Answers = Record<string, string>;

type Result = {
  name: string;
  blurb: string;
};

function pickResult(answers: Answers): Result {
  const values = Object.values(answers);

  for (const key of ["Glass", "Washdown / sanitized", "600+ units/min"]) {
    if (values.includes(key)) {
      return RESULTS[key as keyof typeof RESULTS];
    }
  }

  return RESULTS.default;
}

export default function PrinterFitWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const total = QUESTIONS.length;
  const current = QUESTIONS[step];
  const selected = answers[current.id];

  const select = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [current.id]: option,
    }));
  };

  const goNext = () => {
    if (step < total - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const goBack = () => {
    if (done) {
      setDone(false);
      return;
    }

    if (step > 0) {
      setStep(step - 1);
    }
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const result = pickResult(answers);

  return (
    <Container
      width="fullWidth"
      className="justify-center hidden lg:flex bg-white font-sans overflow-x-hidden"
    >
      <Container
        width="fullWidth"
        className="grid w-full max-w-325 grid-cols-1 items-center gap-12 px-4 py-16 sm:px-10 lg:flex-col xl:grid-cols-[550px_minmax(0,1fr)] lg:gap-10 xl:gap-26 xl:px-0 max-lg:px-16 lg:py-24"
      >
        <Container width="fullWidth" className="min-w-0 flex-col">
          <Typography className="m-0 text-[36px] font-outfit font-bold leading-[1.12] tracking-[1px] text-[#191B24] lg:text-[52px]">
            Don&apos;t know which printer fits?
          </Typography>

          <p className="mt-6 xl:max-w-105 lg:max-w-200 text-base leading-[1.6] text-gray-500">
            Answer a few questions and we&apos;ll suggest the best marking
            system for your production line — calibrated to substrate,
            throughput, and environment.
          </p>
        </Container>

        {/* Right card */}
        <Container
          width="fullWidth"
          className="min-w-0 rounded-2xl flex-col border border-[#E7E7EA] bg-white p-6 shadow-[0_10px_30px_rgba(20,20,30,0.05)] sm:p-8 lg:p-10 lg:pb-8"
        >
          {!done ? (
            <>
              <Container
                width="fullWidth"
                className="mb-6 items-start justify-between gap-4"
              >
                <Typography className="m-0 font-outfit text-[20px] font-bold text-[#191B24] lg:text-[24px]">
                  {current.question}
                </Typography>

                <span className="shrink-0 whitespace-nowrap font-mono text-[13px] tracking-[0.5px] text-[#A0A3AD]">
                  {String(step + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
              </Container>

              {/* Options */}
              <Container
                width="fullWidth"
                className="flex flex-col items-stretch justify-center gap-3.5"
              >
                {current.options.map((option) => {
                  const isSelected = selected === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => select(option)}
                      className={cn(
                        "flex w-full items-center cursor-pointer justify-center rounded-[14px] px-5 py-6 text-left transition-[border-color,background-color] duration-150",
                        isSelected
                          ? "border-[1.5px] border-[#9B1B32] bg-[#FDF2F3]"
                          : "border border-[#E7E7EA] bg-white",
                      )}
                    >
                      <span className="flex w-full items-center gap-3.5">
                        {/* Radio */}
                        <span
                          className={cn(
                            "box-border h-5 w-5 shrink-0 rounded-full bg-white",
                            isSelected
                              ? "border-[6px] border-[#9B1B32]"
                              : "border-[1.5px] border-[#C7C9D1]",
                          )}
                        />

                        <span className="text-sm cursor-pointer font-medium text-[#22242E] sm:text-base">
                          {option}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </Container>

              <Container
                width="fullWidth"
                className="mt-8 flex items-center justify-between"
              >
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className={cn(
                    "flex items-center gap-1.5 border-0 bg-transparent px-1 py-2 text-[15px] font-bold",
                    step === 0
                      ? "cursor-default text-[#D8B9C0]"
                      : "cursor-pointer text-[#9B1B32]",
                  )}
                >
                  <ChevronLeft size={18} strokeWidth={2.5} />
                  Back
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={!selected}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full border-0 px-6 py-3 text-[15px] font-bold text-white",
                    selected
                      ? "cursor-pointer bg-[#8E1729]"
                      : "cursor-default bg-[#D8B9C0]",
                  )}
                >
                  {step === total - 1 ? "See result" : "Next"}
                  <ChevronRight size={18} strokeWidth={2.5} />
                </button>
              </Container>
            </>
          ) : (
            <Container
              width="fullWidth"
              className="flex flex-col items-center justify-center text-center"
            >
              <Container
                width="fullWidth"
                className="mb-5 flex items-center justify-center"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#9B1B32] text-[#9B1B32]">
                  <span className="text-[19px] font-bold leading-none">✓</span>
                </span>
              </Container>

              <Typography className="mb-7 text-[12px] font-bold uppercase tracking-[0.5px] text-[#9B1B32]">
                Quiz Complete
              </Typography>

              <Typography className="m-0 text-[26px] font-bold leading-[1.2] tracking-[-0.3px] text-[#191B24] sm:text-[30px]">
                {result.name}
              </Typography>

              <Typography className="mt-4 mb-0 max-w-130 text-[15px] leading-[1.6] text-[#8C8F99] sm:text-[16px]">
                {result.blurb}
              </Typography>

              <Container
                width="fullWidth"
                className="mt-8 flex items-center justify-center gap-3"
              >
                <button
                  type="button"
                  onClick={restart}
                  className="cursor-pointer rounded-full border border-[#C7C9D1] bg-white px-6 py-3 text-[14px] font-bold text-[#4B4D57] transition-colors hover:border-[#9B1B32] hover:text-[#9B1B32]"
                >
                  Retake quiz
                </button>

                <button
                  type="button"
                  onClick={() => {}}
                  className="cursor-pointer rounded-full border-0 bg-[#8E1729] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#751222]"
                >
                  View printer
                </button>
              </Container>
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
}
