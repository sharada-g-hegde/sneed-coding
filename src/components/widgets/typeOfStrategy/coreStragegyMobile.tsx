"use client";

import { useId } from "react";

import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Typography from "@/components/elements/typography";

export default function CoreStrategyMobile() {
  const id = useId();

  return (
    <Container
      className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-gray-300 lg:hidden"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(65,105,130,0.5) 57.69%, rgba(65,105,130,0.285) 100%), url('/images/Frame_469 (1).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <input id={id} type="checkbox" className="peer sr-only" />

      <label
        htmlFor={id}
        className="flex w-full cursor-pointer items-center justify-between gap-6 p-6 group-has-[:checked]:items-start group-has-[:checked]:pb-4 group-has-[:focus-visible]:outline-2 group-has-[:focus-visible]:-outline-offset-2 group-has-[:focus-visible]:outline-white"
      >
        <span className="font-brandon-grotesque text-[20px] leading-7 text-white transition-all duration-300 group-has-[:checked]:text-[2rem] group-has-[:checked]:leading-10">
          Core &amp; Core Plus Strategies
        </span>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-1 shrink-0 transition-transform duration-300 group-has-[:checked]:rotate-180"
          aria-hidden="true"
        >
          <path
            d="M7.08789 9.02344C7.18871 9.02344 7.26569 9.05385 7.34375 9.13184L11.6465 13.459L12 13.8145L16.6826 9.13184C16.7603 9.05424 16.8267 9.03227 16.9072 9.03516C17.0015 9.0386 17.0829 9.07117 17.1689 9.15723C17.247 9.23531 17.2773 9.31223 17.2773 9.41309C17.2773 9.51371 17.2468 9.59001 17.1689 9.66797L12.25 14.5869C12.1958 14.6411 12.1532 14.667 12.125 14.6787C12.0895 14.6935 12.0496 14.7021 12.001 14.7021C11.9765 14.7021 11.9542 14.6993 11.9336 14.6953L11.876 14.6787L11.8232 14.6484C11.8025 14.634 11.7789 14.6138 11.752 14.5869L6.80762 9.64355C6.73378 9.56972 6.70759 9.50009 6.71094 9.40527C6.71473 9.29797 6.75075 9.2141 6.83301 9.13184C6.91093 9.05403 6.9873 9.02351 7.08789 9.02344Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </label>

      <Container className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-has-[:checked]:grid-rows-[1fr]">
        <Container className="invisible overflow-hidden transition-[visibility] duration-300 group-has-[:checked]:visible">
          <Container className="flex-col items-center px-6 pb-8">
            <Typography className="font-albertSans mb-5 mt-0 text-center text-[16px] text-white">
              Explore these strategies through a dedicated Separately Managed
              Accounts (SMA) tailored to your objectives.
            </Typography>

            <Link
              variant="Link"
              href="#"
              className="font-albertSans cursor-pointer rounded-[100px] bg-white/83 px-5 py-2 text-center text-[14px] font-semibold text-gray-700"
            >
              Discuss an SMA Strategy
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
