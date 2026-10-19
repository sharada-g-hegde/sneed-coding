// import Container from "@/components/elements/container";
// import Link from "@/components/elements/link";
// import Media from "@/components/elements/media";
// import Typography from "@/components/elements/typography";

// const strategies = [
//   "Core & Core Plus",
//   "Enhanced Cash & Low Duration",
//   "Emerging Markets Debt",
//   "Global Fixed Income",
//   "GNMA",
//   "High Yield",
//   "Investment Grade Corporates",
//   "Liability-Driven Investing (LDI)",
//   "Municipal",
//   "Securitized Income",
//   "U.S. Government Bonds",
// ];

// const strategyFeatures = [
//   {
//     icon: "/images/Frame_497.svg",
//     alt: "Core Plus Strategy",
//     description:
//       "Actively managed multi-sector strategies focused on total return and capital preservation",
//   },
//   {
//     icon: "/images/Frame_497.svg",
//     alt: "Core Plus Strategy",
//     description:
//       "Actively managed multi-sector strategies focused on total return and capital preservation",
//   },
//   {
//     icon: "/images/Frame_497.svg",
//     alt: "Core Plus Strategy",
//     description:
//       "Actively managed multi-sector strategies focused on total return and capital preservation",
//   },
// ];

// export default function Strategies() {
//   return (
//     <Container
//       width="fullWidth"
//       className="flex-col items-center justify-center overflow-hidden bg-gray-100"
//     >
//       <Container
//         width="fullWidth"
//         className="2xl:max-w-480 flex-col gap-2 px-4 py-16 lg:flex-row lg:gap-8 lg:px-16"
//       >
//         <Container className="flex w-auto flex-col gap-8 px-4 pb-10 lg:w-[30%] lg:px-0 lg:pb-0 xl:w-[31.71%]">
//           <Typography className="lg:text-[36px] text-[36px] font-brandon-grotesque text-gray-700">
//             Fixed Income Strategies
//           </Typography>
//           <Container className="hidden flex-col items-start gap-2 lg:flex">
//             {strategies.map((strategy, index) => (
//               <Link
//                 key={`${strategy}-${index}`}
//                 href="#"
//                 variant="Link"
//                 className="w-full duration-300 sm:w-auto focus:text-teal-500 focus:font-semibold text-[#2F3B47] hover:bg-teal-500/80 bg-transparent! cursor-pointer px-6 py-4 text-left text-[18px] leading-6.5 lg:text-[1.25rem] lg:leading-8 font-brandon-grotesque focus:font-albertSans font-normal "
//               >
//                 {strategy}
//               </Link>
//             ))}
//           </Container>
//         </Container>
//         <Container className="hidden flex-col gap-10 rounded-3xl border border-gray-200 lg:flex lg:w-[70%] xl:w-[66%]">
//           <Container className="relative flex min-h-100 w-auto flex-col items-center justify-center overflow-hidden rounded-t-3xl lg:mx-6 lg:mt-6">
//             <Media
//               src="/images/Frame_469 (1).png"
//               alt="Fixed income strategies"
//               fill
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//             <Container className="relative z-10 flex-col items-center px-8 py-22">
//               <Typography className="font-brandon-grotesque  pt-2 text-center text-[32px] leading-10 text-white lg:pt-6 lg:text-[2.5rem] lg:leading-14">
//                 Core & Core Plus Strategies
//               </Typography>
//               <Typography className="font-albertSans mb-5 lg:text-[16px] text-[16px] text-white mt-6 text-center">
//                 Explore these strategies through a dedicated Separately Managed
//                 Accounts (SMA) tailored to your objectives.
//               </Typography>
//               <Link
//                 variant="Link"
//                 href="#"
//                 className="font-albertSans  cursor-pointer text-center font-semibold  bg-white/83 text-gray-700 text-[14px] lg:text-[14px] rounded-[100px] px-5 py-2 lg:mt-0"
//               >
//                 Discuss an SMA Strategy
//               </Link>
//             </Container>
//           </Container>
//           <Container className="flex-col gap-4 rounded-3xl px-2 lg:px-6">
//             <Typography className="text-[#124363] font-brandon-grotesque lg:text-[24px] text-[20px]">
//               Objective
//             </Typography>
//             <Typography className="font-albertSans lg:text-[16px] text-[16px] text-[#2F3B47]">
//               The Payden Core Bond Strategies are built to serve as a
//               foundational, multi-sector fixed income allocation. The strategies
//               are designed to deliver long-term total return above an aggregate
//               benchmark through active management of interest rate and credit
//               risk. By drawing from a broad range of sectors and maintaining
//               flexibility across the yield curve, the strategy seeks to
//               outperform traditional benchmarks.
//               <br />
//               <br />
//               These strategies are designed for institutional investors seeking
//               more than just index exposure. They are solutions designed to meet
//               evolving market conditions, aiming to add value through active
//               decision-making across governments, corporates, securitized credit
//               and opportunistic sectors.
//               <br />
//               <br />
//               The strategies can be tailored to accommodate varying risk
//               tolerances and return objectives, meeting investors’ specific
//               goals.
//             </Typography>
//           </Container>
//           <Container className="grid grid-cols-1 gap-4.5 px-12 md:grid-cols-3">
//             {strategyFeatures.map((feature, index) => (
//               <Container
//                 key={index}
//                 className="flex-col items-center gap-5 lg:items-start lg:p-4"
//               >
//                 <Media
//                   src={feature.icon}
//                   alt={feature.alt}
//                   width={56}
//                   height={56}
//                 />
//                 <Typography className="text-center lg:text-left text-[#2F3B47] font-brandon-grotesque text-[16px] lg:text-[20px]">
//                   {feature.description}
//                 </Typography>
//               </Container>
//             ))}
//           </Container>
//           <Container className="flex-col gap-6 px-6 py-8 lg:flex-row lg:px-16 lg:py-10">
//             <Typography className="text-[#124363] font-brandon-grotesque lg:text-[24px] text-[20px] max-w-55">
//               Where Philosophy Meets Practice
//             </Typography>
//             <Typography className="max-w-[500px] lg:text-[16px] text-[16px] font-albertSans text-[#2F3B47]">
//               We believe the investment universe should be broad enough to
//               capture opportunities and not simply follow an index. We take an
//               active, risk-aware approach that aims to generate incremental
//               return over the benchmark.
//               <br />
//               <br />
//               Our process combines macroeconomic insights with bottom-up sector
//               expertise. We begin with a firmwide perspective on macroeconomic
//               scenarios and potential outcomes to help formulate top-down views.
//               Our views on rates, credit cycles, and policy inform how we
//               position duration, curve exposure, sector weightings and credit
//               quality across portfolios. Top-down views are integrated with the
//               bottom-up security selection process. Insights from sector teams
//               inform security selection by identifying fundamental and relative
//               value opportunities across government-related, agency mortgage,
//               corporate, and securitized credit. In addition, opportunistic
//               exposures, such as high-yield or emerging markets, are included
//               when appropriate and consistent with client guidelines.
//               <br />
//               <br />
//               Risk management is embedded in the process. It informs position
//               sizing, liquidity planning, and performance evaluation. The result
//               is a flexible and measured approach that adapts to changing
//               markets while staying grounded in its core goal – a customized
//               portfolio aligned to meet specific client objectives.
//             </Typography>
//           </Container>
//           <Container className="bg-gray-200 rounded-b-3xl p-12">
//             <Typography className="lg:text-[14px] text-[14px] font-albertSans italic text-gray-500">
//               Interest Rate Risk: As with most portfolios that invest in debt
//               securities, the income on and value of the portfolio will
//               fluctuate along with interest rates. When interest rates rise, the
//               market prices of the debt securities the portfolio owns usually
//               decline. When interest rates fall, the prices of these securities
//               usually increase.
//               <br />
//               <br />
//               Investment in foreign securities entails certain risks from
//               investing in domestic securities, including changes in exchange
//               rates, political changes, differences in reporting standards, and,
//               for emerging market securities, higher volatility. Investing in
//               high-yield securities entails certain risks from investing in
//               investment grade securities, including higher volatility, greater
//               credit risk, and the issues’ more speculative nature.
//             </Typography>
//           </Container>
//         </Container>
//       </Container>
//     </Container>
//   );
// }
"use client";

import { useState } from "react";
import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

type Feature = {
  icon: string;
  alt: string;
  description: string;
};

type Strategy = {
  name: string;
  title: string;
  image: string;
  heroText: string;
  objective: string[];
  features: Feature[];
  philosophyTitle: string;
  philosophy: string[];
  risk: string[];
};

const coreFeatures: Feature[] = [
  {
    icon: "/images/Frame_497.svg",
    alt: "Core Plus Strategy",
    description:
      "Actively managed multi-sector strategies focused on total return and capital preservation",
  },
  {
    icon: "/images/Frame_497.svg",
    alt: "Core Plus Strategy",
    description:
      "Broad exposure to various high-quality, investment grade credit and government securities as well as out-of-benchmark asset classes",
  },
  {
    icon: "/images/Frame_497.svg",
    alt: "Core Plus Strategy",
    description:
      "Actively managed multi-sector strategies focused on total return and capital preservation",
  },
];

const strategies: Strategy[] = [
  {
    name: "Core & Core Plus",
    title: "Core & Core Plus Strategies",
    image: "/images/Frame_469 (1).png",
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Core Bond Strategies are built to serve as a foundational, multi-sector fixed income allocation. The strategies are designed to deliver long-term total return above an aggregate benchmark through active management of interest rate and credit risk. By drawing from a broad range of sectors and maintaining flexibility across the yield curve, the strategy seeks to outperform traditional benchmarks.",
      "These strategies are designed for institutional investors seeking more than just index exposure. They are solutions designed to meet evolving market conditions, aiming to add value through active decision-making across governments, corporates, securitized credit and opportunistic sectors.",
      "The strategies can be tailored to accommodate varying risk tolerances and return objectives, meeting investors’ specific goals.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },

  {
    name: "Enhanced Cash & Low Duration",
    title: "Enhanced Cash & Low Duration Strategies",
    image: "/images/banner-2.png", // TODO: real image
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "Emerging Markets Debt",
    title: "Emerging Markets Debt Strategy",
    image: "/images/banner-3.png",
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "Global Fixed Income",
    title: "Global Fixed Income",
    image: "/images/banner-4.png",
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "GNMA",
    title: "GNMA",
    image: "/images/banner-5.png", // TODO
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "High Yield",
    title: "High Yield",
    image: "/images/banner-6.png", // TODO
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "Investment Grade Corporates",
    title: "Investment Grade Corporates",
    image: "/images/banner-7.png", // TODO
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "Liability-Driven Investing (LDI)",
    title: "Liability-Driven Investing (LDI)",
    image: "/images/banner-8.png", // TODO
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "Municipal",
    title: "Municipal",
    image: "/images/banner-9.png",
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "Securitized Income",
    title: "Securitized Income",
    image: "/images/banner-10.png",
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "Strategic Income",
    title: "Strategic Income",
    image: "/images/banner-11.png",
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
  {
    name: "U.S. Government Bonds",
    title: "U.S. Government Bonds",
    image: "/images/banner-12.png",
    heroText:
      "Explore these strategies through a dedicated Separately Managed Accounts (SMA) tailored to your objectives.",
    objective: [
      "The Payden Enhanced Cash and Low Duration strategies are designed for investors who seek higher yields than those provided by money market funds but can withstand varying amounts of incremental price volatility. The strategy seeks to optimize short-maturity fixed income portfolios by targeting higher risk-adjusted returns than traditional cash equivalents, while maintaining a strong focus on capital preservation and liquidity. ",
      "Customized to meet the unique investment objectives of each client, the firm's short-term bond strategies offer a high-quality, short-term fixed income allocation, with the flexibility to adapt to shifting interest rate environments, credit conditions, and institutional liquidity needs. The strategy invests across governments, corporates, cash equivalents, and securitized credit.",
    ],
    features: coreFeatures,
    philosophyTitle: "Where Philosophy Meets Practice",
    philosophy: [
      "We believe the investment universe should be broad enough to capture opportunities and not simply follow an index. We take an active, risk-aware approach that aims to generate incremental return over the benchmark.",
      "Our process combines macroeconomic insights with bottom-up sector expertise. We begin with a firmwide perspective on macroeconomic scenarios and potential outcomes to help formulate top-down views. Our views on rates, credit cycles, and policy inform how we position duration, curve exposure, sector weightings and credit quality across portfolios. Top-down views are integrated with the bottom-up security selection process. Insights from sector teams inform security selection by identifying fundamental and relative value opportunities across government-related, agency mortgage, corporate, and securitized credit. In addition, opportunistic exposures, such as high-yield or emerging markets, are included when appropriate and consistent with client guidelines.",
      "Risk management is embedded in the process. It informs position sizing, liquidity planning, and performance evaluation. The result is a flexible and measured approach that adapts to changing markets while staying grounded in its core goal – a customized portfolio aligned to meet specific client objectives.",
    ],
    risk: [
      "Interest Rate Risk: As with most portfolios that invest in debt securities, the income on and value of the portfolio will fluctuate along with interest rates. When interest rates rise, the market prices of the debt securities the portfolio owns usually decline. When interest rates fall, the prices of these securities usually increase.",
      "Investment in foreign securities entails certain risks from investing in domestic securities, including changes in exchange rates, political changes, differences in reporting standards, and, for emerging market securities, higher volatility. Investing in high-yield securities entails certain risks from investing in investment grade securities, including higher volatility, greater credit risk, and the issues’ more speculative nature.",
    ],
  },
];

function StrategyBody({ data }: { data: Strategy }) {
  return (
    <>
      <Container className="mx-2 flex w-auto flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-10 shadow-[0px_4px_4px_0px_#00000040] lg:mx-0 lg:rounded-3xl lg:border-0 lg:bg-transparent lg:p-0 lg:px-6 lg:shadow-none">
        <Typography className="text-[#124363] font-brandon-grotesque lg:text-[24px] text-[20px]">
          Objective
        </Typography>
        <Typography className="font-albertSans lg:text-[16px] text-[16px] text-[#2F3B47]">
          {data.objective.map((p, i) => (
            <span key={i} className="block [&:not(:last-child)]:mb-6">
              {p}
            </span>
          ))}
        </Typography>
      </Container>

      <Container className="grid grid-cols-1 gap-4.5 px-12 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-3">
        {data.features.map((feature, index) => (
          <Container
            key={index}
            className="flex-col items-center gap-5 lg:items-start lg:p-4"
          >
            <Media
              src={feature.icon}
              alt={feature.alt}
              width={56}
              height={56}
            />
            <Typography className="text-center lg:text-left text-[#2F3B47] font-brandon-grotesque text-[18px] lg:text-[20px]">
              {feature.description}
            </Typography>
          </Container>
        ))}
      </Container>

      <Container className="flex-col gap-6 px-6 py-8 xl:flex-row lg:px-16 lg:py-10">
        <Typography className="text-[#124363] font-brandon-grotesque lg:text-[24px] text-[20px] xl:max-w-55 2xl:max-w-85">
          {data.philosophyTitle}
        </Typography>
        <Typography className="xl:max-w-[500px] 2xl:max-w-[66%] lg:text-[16px] text-[16px] font-albertSans text-[#2F3B47]">
          {data.philosophy.map((p, i) => (
            <span key={i} className="block [&:not(:last-child)]:mb-6">
              {p}
            </span>
          ))}
        </Typography>
      </Container>

      <Container className="bg-gray-200 rounded-b-3xl p-6 lg:p-12">
        <Typography className="lg:text-[14px] text-[14px] font-albertSans italic text-gray-500">
          {data.risk.map((p, i) => (
            <span key={i} className="block [&:not(:last-child)]:mb-6">
              {p}
            </span>
          ))}
        </Typography>
      </Container>
    </>
  );
}

function MobileStrategyItem({
  strategy,
  index,
}: {
  strategy: Strategy;
  index: number;
}) {
  const id = `strategy-toggle-${index}`;

  return (
    <Container className="group flex w-full flex-col">
      <input type="checkbox" id={id} className="peer sr-only" />

      <Container className="relative w-full flex-col overflow-hidden rounded-3xl border border-gray-200 group-has-[:checked]:rounded-b-none">
        {" "}
        <Media
          src={strategy.image}
          alt={strategy.title}
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Container className="relative z-10 w-full flex-col">
          <label
            htmlFor={id}
            className="flex cursor-pointer items-center justify-between gap-4 p-6"
          >
            <span className="font-brandon-grotesque text-[20px] leading-8 text-white group-has-[:checked]:text-[32px] group-has-[:checked]:leading-10">
              {strategy.title}
            </span>
            <svg
              className="h-5 w-5 shrink-0 text-white transition-transform duration-300 group-has-[:checked]:rotate-180"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 8l5 5 5-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>

          <Container className="hidden w-full flex-col items-center px-6 pb-8 group-has-[:checked]:flex">
            <Typography className="font-albertSans mb-5 text-center text-[16px] text-white">
              {strategy.heroText}
            </Typography>
            <Link
              variant="Link"
              href="#"
              className="font-albertSans items- cursor-pointer rounded-[100px] bg-white/83 px-5 py-2 text-center text-[14px] font-semibold text-gray-700"
            >
              Discuss an SMA Strategy
            </Link>
          </Container>
        </Container>
      </Container>

      <Container className="hidden w-full flex-col gap-10 rounded-b-3xl border border-t-0 border-gray-200 pt-6 group-has-[:checked]:flex">
        <StrategyBody data={strategy} />
      </Container>
    </Container>
  );
}

/* ---------------- Main component ---------------- */

export default function Strategies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = strategies[activeIndex];

  return (
    <Container
      width="fullWidth"
      className="flex-col items-center justify-center overflow-hidden bg-gray-100"
    >
      <Container
        width="fullWidth"
        className="2xl:max-w-480 flex-col gap-2 px-4 py-16 lg:flex-row lg:gap-8 lg:px-16"
      >
        <Container className="flex w-auto flex-col gap-8  pb-10 lg:w-[30%] lg:px-0 lg:pb-0 xl:w-[31.71%]">
          <Typography className="lg:text-[36px] px-4 text-[36px] font-brandon-grotesque text-gray-700">
            Fixed Income Strategies
          </Typography>

          {/* DESKTOP list: click changes everything on the right */}
          <Container className="hidden flex-col items-start gap-2 lg:flex">
            {strategies.map((strategy, index) => {
              const isActive = index === activeIndex;
              return (
                <Link
                  key={strategy.name}
                  href="#"
                  variant="Link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(index);
                  }}
                  className={`w-full duration-300 sm:w-auto hover:bg-teal-500/80 bg-transparent! cursor-pointer px-6 py-4 text-left text-[18px] leading-6.5 lg:text-[1.25rem] lg:leading-8 ${
                    isActive
                      ? "text-teal-500 font-semibold font-albertSans"
                      : "text-[#2F3B47] font-normal font-brandon-grotesque"
                  }`}
                >
                  {strategy.name}
                </Link>
              );
            })}
          </Container>

          {/* MOBILE accordion: each card shows its own content */}
          <div className="flex flex-col gap-3 lg:hidden">
            {strategies.map((strategy, index) => (
              <MobileStrategyItem
                key={strategy.name}
                strategy={strategy}
                index={index}
              />
            ))}
          </div>
        </Container>

        {/* DESKTOP detail panel: driven by activeIndex */}
        <Container
          key={activeIndex}
          className="hidden flex-col gap-10 rounded-3xl border border-gray-200 lg:flex lg:w-[70%] xl:w-[66%]"
        >
          <Container className="relative flex min-h-100 w-auto flex-col items-center justify-center overflow-hidden rounded-t-3xl lg:mx-6 lg:mt-6">
            <Media
              src={active.image}
              alt={active.title}
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
            <Container className="relative z-10 flex-col items-center px-8 py-22">
              <Typography className="font-brandon-grotesque pt-2 text-center text-[32px] leading-10 text-white lg:pt-6 lg:text-[2.5rem] lg:leading-14">
                {active.title}
              </Typography>
              <Typography className="font-albertSans mb-5 lg:text-[16px] text-[16px] text-white mt-6 text-center">
                {active.heroText}
              </Typography>
              <Link
                variant="Link"
                href="#"
                className="font-albertSans cursor-pointer text-center font-semibold bg-white/83 text-gray-700 text-[14px] lg:text-[14px] rounded-[100px] px-5 py-2 lg:mt-0"
              >
                Discuss an SMA Strategy
              </Link>
            </Container>
          </Container>
          <StrategyBody data={active} />
        </Container>
      </Container>
    </Container>
  );
}
