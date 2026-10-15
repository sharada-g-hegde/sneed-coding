"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/utils";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

type StoryTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const TABS: StoryTab[] = [
  {
    id: "independence",
    label: "Independence",
    title: "Independence",
    description:
      "We are one of the largest independent asset managers. The firm is 100% owned by senior management actively involved in its day-to-day activities. Our only line of business is investment management. This true independence enables us to offer clients a high level of customization and direct access to our resources.",
    image: "/images/Independence_copy_2.webp",
    alt: "A light bulb on a teal block surrounded by wooden figures",
  },
  {
    id: "tenure",
    label: "Tenure & Stability",
    title: "Tenure & Stability",
    description:
      "Founded in 1983, the firm has served institutional investors for more than four decades. Our professionals have long tenures, and that continuity gives clients consistent portfolio management and relationships they can rely on.",
    image: "/images/story-2.webp",
    alt: "",
  },
  {
    id: "global-presence",
    label: "Global Presence",
    title: "Global Presence",
    description:
      "With offices across multiple regions, our teams work around the clock to research markets, source opportunities, and serve clients wherever they are.",
    image: "/images/story-3.webp",
    alt: "",
  },
  {
    id: "customization",
    label: "Customization",
    title: "Customization",
    description:
      "Every client has different objectives, constraints, and risk tolerances. We build portfolios around them, and clients have direct access to the people managing their assets.",
    image: "/images/story-4.webp",
    alt: "",
  },
  {
    id: "diversity",
    label: "Diversity & Inclusion",
    title: "Diversity & Inclusion",
    description:
      "We believe a range of backgrounds and perspectives leads to better ideas and better decisions. We work to build a culture where every colleague can contribute and grow.",
    image: "/images/story-5.webp",
    alt: "",
  },
  {
    id: "risk",
    label: "Risk Management",
    title: "Risk Management",
    description:
      "Risk management is built into every stage of our process, from research to portfolio construction to monitoring. Disciplined limits help us pursue returns without taking unintended risks.",
    image: "/images/story-6.webp",
    alt: "",
  },
];

export default function OurStory() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeTab = TABS.find((t) => t.id === activeId) ?? TABS[0];

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % TABS.length;
    else if (e.key === "ArrowLeft")
      next = (index - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    else return;

    e.preventDefault();
    setActiveId(TABS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <Container
      component="section"
      width="fullWidth"
      className="relative isolate justify-center overflow-hidden px-4 py-12 md:px-8 lg:px-16 lg:py-20"
    >
      <Media
        src="/images/bg-about.jpg"
        alt=""
        fill
        className="-z-10 object-cover"
      />
      <Container
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-white/80 from-20% to-white/70 to-80%"
      />

      <Container width="fullWidth" className="max-w-300 flex-col">
        <Container
          width="fullWidth"
          className="flex-col gap-4 lg:flex-row lg:items-start lg:gap-14"
        >
          <Typography className="shrink-0 font-brandon-grotesque text-[32px] leading-none font-medium text-[#2c3e4e] lg:px-12 lg:text-[48px]">
            Our Story
          </Typography>
          <Typography className="max-w-225 font-albertSans text-sm leading-[1.6] text-[#4a5560] lg:text-[16px] lg:leading-6">
            For more than four decades, Payden &amp; Rygel has served
            institutional investors as an independent global investment manager.
            Founded in 1983, the firm remains privately owned and focused
            exclusively on investment management. Our culture emphasizes deep
            research, disciplined risk management, and close collaboration with
            clients to build portfolios aligned with long term objectives.
          </Typography>
        </Container>

        <Container width="fullWidth" className="mt-8 flex-col lg:mt-12">
          <Container width="fullWidth" className="flex-col gap-4 lg:hidden">
            {TABS.map((tab) => {
              const isOpen = tab.id === mobileOpenId;
              return (
                <Container
                  key={tab.id}
                  width="fullWidth"
                  className={cn(
                    "flex-col overflow-hidden rounded-2xl border border-white/80 bg-[linear-gradient(217.67deg,rgba(184,207,221,0.32)_13.45%,rgba(184,207,221,0.64)_78.22%)] shadow-[2px_2px_6px_0px_rgba(7,26,39,0.1)] backdrop-blur-[10px] transition-colors duration-300",
                    isOpen && "bg-none bg-[#eef3f3]",
                  )}
                >
                  <Container
                    inert={!isOpen}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <Container className="overflow-hidden">
                      <Container className="relative aspect-5/4 w-full">
                        <Media
                          src={tab.image}
                          alt={tab.alt}
                          fill
                          className="object-cover"
                        />
                      </Container>
                    </Container>
                  </Container>

                  {/* Card header / label */}
                  <button
                    type="button"
                    id={`story-m-tab-${tab.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`story-m-panel-${tab.id}`}
                    onClick={() => setMobileOpenId(isOpen ? null : tab.id)}
                    className={cn(
                      "w-full cursor-pointer px-6 py-5 text-left font-albertSans text-[20px] font-semibold text-gray-500 transition-colors duration-300",
                      "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#00b0a3]",
                      isOpen && "text-[#00b0a3]",
                    )}
                  >
                    {tab.label}
                  </button>

                  {/* Description */}
                  <Container
                    id={`story-m-panel-${tab.id}`}
                    role="region"
                    aria-labelledby={`story-m-tab-${tab.id}`}
                    inert={!isOpen}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <Container className="overflow-hidden">
                      <Typography className="px-6 pb-6 font-albertSans text-base leading-[1.7] text-[#4a5560]">
                        {tab.description}
                      </Typography>
                    </Container>
                  </Container>
                </Container>
              );
            })}
          </Container>

          <Container
            width="fullWidth"
            role="tablist"
            aria-label="Our story"
            className="hidden gap-px overflow-x-auto scrollbar-none lg:flex [&::-webkit-scrollbar]:hidden"
          >
            {TABS.map((tab, i) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`story-tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`story-panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className={cn(
                    "font-albertSans leading-largest min-w-50 flex-1 cursor-pointer rounded-t-2xl border-t border-r border-l border-white/80 bg-[linear-gradient(217.67deg,rgba(184,207,221,0.32)_13.45%,rgba(184,207,221,0.64)_78.22%)] px-8 text-left text-2xl font-semibold text-gray-500 shadow-[2px_2px_6px_0px_rgba(7,26,39,0.1)] backdrop-blur-[10px] transition-all duration-200 hover:opacity-90 lg:py-3.5 lg:text-[20px] 2xl:py-6",
                    "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#00b0a3]",
                    isActive && "bg-none bg-[#eef3f3] text-[#00b0a3]",
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </Container>

          <Container
            width="fullWidth"
            role="tabpanel"
            id={`story-panel-${activeTab.id}`}
            aria-labelledby={`story-tab-${activeTab.id}`}
            className="hidden rounded-b-3xl bg-[#eef3f3] p-5 shadow-[0_6px_20px_rgba(44,62,78,0.14)] md:p-8 lg:flex lg:p-11"
          >
            <Container
              width="fullWidth"
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-13.75"
            >
              {/* All images are stacked so they cross-fade and preload */}
              <Container
                width="fullWidth"
                className="relative aspect-5/4 overflow-hidden rounded-[20px]"
              >
                {TABS.map((tab) => (
                  <Media
                    key={tab.id}
                    src={tab.image}
                    alt={tab.id === activeId ? tab.alt : ""}
                    fill
                    className={cn(
                      "object-cover transition-opacity duration-500 motion-reduce:transition-none",
                      tab.id === activeId ? "opacity-100" : "opacity-0",
                    )}
                  />
                ))}
              </Container>

              <Container className="flex-col">
                <Typography className="font-brandon-grotesque text-[26px] leading-tight font-medium text-[#2c3e4e] lg:text-[40px]">
                  {activeTab.title}
                </Typography>
                <Typography className="mt-12 font-albertSans text-sm leading-[1.7] text-[#4a5560] lg:text-[16px] lg:leading-6 lg:mt-8">
                  {activeTab.description}
                </Typography>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
