"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import { cn } from "@/utils";
import Typography from "@/components/elements/typography";

const SERIES = [
  {
    id: "titan",
    name: "Titan",
    subtitle: "High throughput, high-volume lines",
    price: "₹58,300",
    image: "/images/sneed-card-1.webp",
  },
  {
    id: "freedom",
    name: "Freedom",
    subtitle: "Versatile thermal inkjet for diverse packaging",
    price: "₹58,300",
    image: "/images/sneed-card-2.webp",
  },
  {
    id: "infinity",
    name: "Infinity",
    subtitle: "High throughput, high-volume lines",
    price: "₹58,300",
    image: "/images/sneed-card-3.webp",
  },
  {
    id: "xl",
    name: "XL",
    subtitle: "High throughput, high-volume lines",
    price: "₹58,300",
    image: "/images/sneed-card-4.webp",
  },
];

export default function SeriesLineup() {
  const [activeId, setActiveId] = useState(SERIES[0].id);
  const active = SERIES.find((s) => s.id === activeId) ?? SERIES[0];
  const [displayed, setDisplayed] = useState(active);
  const fading = displayed.id !== active.id;

  useEffect(() => {
    if (!fading) return;

    const timeout = setTimeout(() => {
      setDisplayed(active);
    }, 200);

    return () => clearTimeout(timeout);
  }, [active, fading]);

  return (
    <section className="w-full overflow-x-hidden bg-white py-16">
      <Container
        width="fullWidth"
        className="mx-auto flex-col  max-w-325 px-4 sm:px-6 xl:px-0 lg:px-16"
      >
        <Container width="fullWidth" className="flex-col">
          <Typography className="m-0 text-[32px] lg:text-[56px] font-outfit font-bold leading-[1.1] lg:tracking-[-1px]! text-[#24232D]">
            Four series, one job each
          </Typography>
          <Typography className="mt-8 font-inter text-[16px] lg:text-[16px] text-[#525159]">
            Purpose-built inkjet printers for every production line
          </Typography>
        </Container>

        <Container width="fullWidth" className="mt-6 flex-col gap-10 lg:hidden">
          {SERIES.map((series) => (
            <Container key={series.id} width="fullWidth" className="flex-col">
              <Container
                width="fullWidth"
                className="grid h-41.5 md:grid-cols-[3fr_3fr] grid-cols-[2fr_2fr] gap-3 sm:h-60 md:h-80"
              >
                <Container className="relative overflow-hidden rounded-2xl bg-[#EEEBE4]">
                  <Media
                    src="/images/svg.svg"
                    alt="SNEED-JET"
                    width={160}
                    height={80}
                    className="absolute left-1/2 top-1/2 h-auto w-36 -translate-x-1/2 -translate-y-1/2 object-contain"
                  />
                </Container>

                <Container className="relative overflow-hidden rounded-2xl bg-gray-200">
                  <Media
                    src={series.image}
                    alt={series.name}
                    fill
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </Container>
              </Container>

              <Container
                width="fullWidth"
                className="lg:mt-4 mt-2 flex items-center justify-between"
              >
                <Typography className="text-[18px] font-outfit font-bold text-[#24232D]">
                  {series.name}
                </Typography>

                <Typography className="text-[12px] font-inter text-gray-500">
                  from{" "}
                  <span className="text-[18px] font-outfit font-bold text-[#24232D]">
                    {series.price}
                  </span>
                </Typography>
              </Container>

              <Container
                width="fullWidth"
                className="lg:mt-1 text-[14px] font-inter text-gray-500"
              >
                {series.subtitle}
              </Container>
            </Container>
          ))}
        </Container>

        <Container
          width="fullWidth"
          className="mt-8 hidden lg:grid grid-cols-[2fr_3fr] xl:grid-cols-[525px_minmax(0,1fr)] items-stretch gap-10"
        >
          <Container width="fullWidth" className="min-w-0 flex-col gap-4">
            {SERIES.map((series) => {
              const isActive = series.id === activeId;

              return (
                <button
                  key={series.id}
                  type="button"
                  onClick={() => setActiveId(series.id)}
                  className={cn(
                    "w-full rounded-[20px] border p-6 text-left transition-colors duration-200 cursor-pointer",
                    isActive
                      ? "border-transparent bg-[#540E0F]"
                      : "border-[#E7E7EA] bg-white hover:border-[#9B1B32]/40",
                  )}
                >
                  <Container
                    width="fullWidth"
                    className={cn(
                      "text-[24px] font-outfit font-bold",
                      isActive ? "text-white" : "text-[#24232D]",
                    )}
                  >
                    {series.name}
                  </Container>

                  <Container
                    width="fullWidth"
                    className={cn(
                      "mt-3 text-[14px] font-inter",
                      isActive ? "text-white/70" : "text-[#540E0F]",
                    )}
                  >
                    {series.subtitle}
                  </Container>

                  <Container
                    width="fullWidth"
                    className="mt-4 flex items-center justify-between"
                  >
                    <Typography
                      className={cn(
                        "text-[20px] lg:text-[20px] font-bold font-outfit",
                        isActive ? "text-white" : "text-[#9B1B32]",
                      )}
                    >
                      From {series.price}
                    </Typography>

                    <Typography
                      className={cn(
                        "flex items-center gap-1 font-outfit rounded-full px-4 py-2 text-[14px] font-bold",
                        isActive
                          ? "bg-white text-[#8E1729]"
                          : "bg-[#8E1729] text-white",
                      )}
                    >
                      View
                      <ChevronRight size={16} strokeWidth={2.5} />
                    </Typography>
                  </Container>
                </button>
              );
            })}
          </Container>

          <Container
            width="fullWidth"
            className="relative h-105 min-w-0 overflow-hidden rounded-[28px] bg-gray-200 lg:h-185 xl:h-178.5"
          >
            <Media
              src={displayed.image}
              alt={displayed.name}
              fill
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ease-in-out",
                fading ? "opacity-0" : "opacity-100",
              )}
            />

            {/* Gradient overlay - above image */}
            <Container className="pointer-events-none absolute inset-0 z-10 w-auto bg-[linear-gradient(180deg,rgba(24,23,29,0)_59.27%,rgba(24,23,29,0.8)_99.87%)]" />
          </Container>
        </Container>
      </Container>
    </section>
  );
}
