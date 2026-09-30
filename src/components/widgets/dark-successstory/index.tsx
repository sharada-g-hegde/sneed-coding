"use client";

import { useEffect, useState } from "react";

import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

type SuccessStoriesProps = {
  bgClassName?: string;
};

type Story = {
  quote: string;
  result: string;
  name: string;
  role: string;
  company: string;
  location: string;
};

const STORIES: Story[] = [
  {
    quote:
      "We've worked with Ghibli for years and the support has been outstanding — every machine ships ready to roast.",
    result:
      "Our uptime improved and the team trusts the equipment every single day.",
    name: "Sample Name",
    role: "Head Roaster",
    company: "Sample Roastery",
    location: "City, State",
  },
  {
    quote:
      "One of the things we love about both is the consistency of the roast — which is key to our brand promise.",
    result:
      "We scaled production by 35% and cut waste by 18% after implementing the Ghibli R15 and Solar at Ethos.",
    name: "Pacheco Lisbeth",
    role: "Operations Head",
    company: "Roasters Ethos",
    location: "Lakeland, Florida",
  },
  {
    quote:
      "One of the things we love about both is the consistency of the roast — which is key to our brand promise.",
    result:
      "We scaled production by 35% and cut waste by 18% after implementing the Ghibli R15 and Solar at Ethos.",
    name: "Pacheco Lisbeth",
    role: "Operations Head",
    company: "Roasters Ethos",
    location: "Lakeland, Florida",
  },
  {
    quote:
      "One of the things we love about both is the consistency of the roast — which is key to our brand promise.",
    result:
      "We scaled production by 35% and cut waste by 18% after implementing the Ghibli R15 and Solar at Ethos.",
    name: "Pacheco Lisbeth",
    role: "Operations Head",
    company: "Roasters Ethos",
    location: "Lakeland, Florida",
  },
];

const NUMBER_TRANSLATE = [
  "translate-y-0",
  "-translate-y-10 lg:-translate-y-44",
  "-translate-y-20 lg:-translate-y-88",
  "-translate-y-30 lg:-translate-y-132",
];

const AUTOPLAY_MS = 4000;

const arrowButtonClass =
  "flex h-12.5 w-16 cursor-pointer items-center justify-center rounded-2xl text-white transition-colors duration-200";

export default function DarkSuccessStories({
  bgClassName = "bg-white",
}: SuccessStoriesProps) {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const id = setTimeout(
      () => setActive((i) => (i + 1) % STORIES.length),
      AUTOPLAY_MS,
    );
    return () => clearTimeout(id);
  }, [active]);

  return (
    <Container width="fullWidth" className="flex-col items-center p-4">
      <Container
        className={`flex w-full flex-col-reverse gap-6 rounded-3xl ${bgClassName} px-6 py-10 3xl:max-w-[120rem] 2xl:max-w-360 lg:m-2 lg:grid lg:grid-cols-4 lg:rounded-4xl lg:px-14 lg:py-20`}
      >
        <Container className="hidden lg:flex">
          <Typography className="font-inter font-medium lg:text-[20px] text-white">
            Success Stories
          </Typography>
        </Container>

        <Container className="flex items-center gap-6 lg:flex-col lg:items-start lg:justify-between">
          <Container className="h-10 overflow-hidden lg:-mt-6 lg:h-44">
            <Container
              className={`flex flex-col transition-transform duration-700 ease-in-out motion-reduce:transition-none ${NUMBER_TRANSLATE[active]}`}
            >
              {STORIES.map((_, i) => (
                <Typography
                  key={i}
                  className="block h-10 font-outfit text-[2.5rem] leading-10 font-semibold tracking-tight text-white lg:h-44 lg:text-[11rem] lg:leading-44"
                >
                  {String(i + 1).padStart(2, "0")}
                </Typography>
              ))}
            </Container>
          </Container>

          <Container className="flex">
            <button
              type="button"
              aria-label="Previous story"
              onClick={() =>
                setActive((i) => (i - 1 + STORIES.length) % STORIES.length)
              }
              className={arrowButtonClass}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="41"
                viewBox="0 0 52 41"
                fill="none"
              >
                <path
                  d="M31.1008 40.4367C42.1426 40.4367 51.0938 31.4856 51.0938 20.4437C51.0938 9.40191 42.1426 0.450745 31.1008 0.450745L20.4378 0.450745C9.39599 0.450745 0.444824 9.40191 0.444824 20.4437C0.444824 31.4856 9.39599 40.4367 20.4378 40.4367H31.1008Z"
                  stroke="currentColor"
                  strokeWidth="0.888578"
                />
                <path
                  d="M20.5469 20.4696L21.7445 19.2617L24.9153 22.4326V15.0026H26.6752V22.4326L29.8409 19.2617L31.0436 20.4696L25.7953 25.718L20.5469 20.4696Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next story"
              onClick={() => setActive((i) => (i + 1) % STORIES.length)}
              className={arrowButtonClass}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="41"
                viewBox="0 0 52 41"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M31.1008 40.4367C42.1426 40.4367 51.0938 31.4856 51.0938 20.4437C51.0938 9.40191 42.1426 0.450745 31.1008 0.450745L20.4378 0.450745C9.39599 0.450745 0.444824 9.40191 0.444824 20.4437C0.444824 31.4856 9.39599 40.4367 20.4378 40.4367H31.1008Z"
                  stroke="currentColor"
                  strokeWidth="0.888578"
                />
                <path
                  d="M20.5469 20.4696L21.7445 19.2617L24.9153 22.4326V15.0026H26.6752V22.4326L29.8409 19.2617L31.0436 20.4696L25.7953 25.718L20.5469 20.4696Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </Container>
        </Container>

        <Container className="grid lg:col-span-2">
          {STORIES.map((story, i) => (
            <Container
              key={i}
              className={`col-start-1 row-start-1 flex flex-col justify-between transition-all duration-500 motion-reduce:transition-none ${
                i === active
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0"
              }`}
            >
              <Container className="flex flex-col gap-6 lg:gap-8">
                <Typography className="font-outfit text-[18px] leading-6 font-bold text-white lg:text-[24px] lg:leading-9">
                  &quot;{story.quote}&quot;
                </Typography>
                <Typography className="font-outfit text-[18px] leading-6 font-bold text-white lg:text-[24px] lg:leading-9">
                  {story.result}
                </Typography>
              </Container>

              <Container className="mt-6 flex flex-col lg:mt-20">
                <Container className="flex items-center gap-2">
                  <Typography className="font-inter text-base text-white lg:text-[16px]">
                    {story.name}
                  </Typography>
                  <Container className="h-4 w-px bg-white" />
                  <Typography className="font-inter text-base text-white lg:text-[14px]">
                    {story.role}
                  </Typography>
                </Container>
                <Container className="flex items-center gap-2">
                  <Typography className="font-inter text-sm text-white lg:text-base">
                    {story.company}
                  </Typography>
                  <Container className="h-3.5 w-px bg-white" />
                  <Typography className="font-inter text-sm text-white lg:text-base">
                    {story.location}
                  </Typography>
                </Container>
              </Container>
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
}
