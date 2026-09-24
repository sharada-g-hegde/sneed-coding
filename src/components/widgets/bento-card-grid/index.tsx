// "use client";

// import { useState } from "react";
// import { cn } from "@/utils";
// import Container from "@/components/elements/container";
// import Media from "@/components/elements/media";
// import Typography from "@/components/elements/typography";

// const SUBSTRATES = [
//   {
//     id: "plastic",
//     label: "Plastic",
//     image: "/images/date-coding-1.webp",
//     description:
//       "Consistent adhesion and clean coding on bottles, tubs and pump bottles without smudging or lifting.",
//   },
//   {
//     id: "glass",
//     label: "Glass",
//     image: "/images/date-coding-2.webp",
//     description:
//       "Crisp, permanent codes on glass bottles and vials, calibrated for condensation and curved surfaces.",
//   },
//   {
//     id: "aluminum",
//     label: "Aluminum",
//     image: "/images/date-coding-3.webp",
//     description:
//       "High-contrast codes on cans and metal containers that hold up through cold-chain handling and transit.",
//   },
//   {
//     id: "cardboard-paperboard",
//     label: "Cardboard & Paperboard",
//     image: "/images/date-coding-4.webp",
//     description:
//       "Large-character carton and case marking that stays legible through warehouse handling and storage.",
//   },
// ];

// type Substrate = (typeof SUBSTRATES)[number];

// // Which cards span 2 columns on desktop (by index, 0-based)
// const WIDE_CARD_INDEXES = new Set([1, 2]); // 2nd and 3rd cards

// function SubstrateCard({ item, wide }: { item: Substrate; wide?: boolean }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Container
//       width="fullWidth"
//       className={cn(
//         "group relative overflow-hidden rounded-3xl bg-neutral-200",
//         "min-h-75 max-h-75 lg:min-h-93 lg:max-h-93", // fixed card height per breakpoint
//         wide && "lg:col-span-2", // wide cards span 2 columns on desktop
//       )}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Media
//         src={item.image}
//         alt={item.label}
//         width={800}
//         height={600}
//         className="absolute inset-0 h-full w-full object-cover"
//       />
//       {/* Static gradient over the image */}
//       <Container
//         width="fullWidth"
//         className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(24,23,29,0)_59.27%,rgba(24,23,29,0.8)_99.87%)]"
//       />

//       {/* Hover overlay */}
//       <Container
//         width="fullWidth"
//         className={cn(
//           "pointer-events-none absolute inset-0 z-1 bg-black/30 transition-opacity duration-300",
//           hovered ? "opacity-100" : "opacity-0",
//         )}
//       />

//       <Container
//         width="fullWidth"
//         className={cn(
//           "pointer-events-none absolute inset-0 bg-black/30 transition-opacity duration-300",
//           hovered ? "opacity-100" : "opacity-30",
//         )}
//       />

//       <button
//         type="button"
//         aria-label={`Show ${item.label} details`}
//         className={cn(
//           "absolute hidden! lg:flex! right-3.5 top-3.5 z-10",
//           "h-18 w-18 items-center justify-center",
//           "rounded-full border",
//           "transition-all duration-300",
//           hovered
//             ? "border-white bg-white text-red-900"
//             : "border-white/80 bg-transparent text-white",
//         )}
//       >
//         <svg
//           width="42"
//           height="42"
//           viewBox="0 0 42 42"
//           fill="none"
//           className="transition-colors duration-300"
//         >
//           <path
//             d="M12 30L30 12M30 12H16M30 12V26"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>

//       <Container
//         width="fullWidth"
//         className="absolute lg:bottom-12 bottom-4 left-4.5 right-4.5 lg:px-4 z-10 flex-col text-white"
//       >
//         <span className="block text-[18px] font-outfit font-semibold lg:text-[24px]">
//           {item.label}
//         </span>

//         <Container
//           width="fullWidth"
//           className={cn(
//             "overflow-hidden transition-[max-height,margin-top,opacity] duration-300 ease-in-out",
//             hovered ? "mt-1.5 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0",
//           )}
//         >
//           <Typography className="m-0 font-inter hidden lg:flex lg:leading-7! text-white/90 lg:text-[16px]">
//             {item.description}
//           </Typography>
//         </Container>
//       </Container>
//     </Container>
//   );
// }

// export default function SubstratesSection() {
//   return (
//     <Container
//       width="fullWidth"
//       className="flex-col px-4 py-10 lg:px-16 items-center"
//     >
//       <Container width="pageWidth" className="flex-col">
//         <Typography className="mb-6 font-outfit font-bold leading-tight tracking-tight text-neutral-900 text-[32px] lg:text-[56px]">
//           Common Substrates for Date Coding
//         </Typography>

//         <Container
//           width="fullWidth"
//           className="grid w-auto grid-cols-1 gap-6 lg:grid-cols-3"
//         >
//           {SUBSTRATES.map((item, index) => (
//             <SubstrateCard
//               key={item.id}
//               item={item}
//               wide={WIDE_CARD_INDEXES.has(index)}
//             />
//           ))}
//         </Container>
//       </Container>
//     </Container>
//   );
// }
"use client";

import { useState } from "react";
import { cn } from "@/utils";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export interface BentoCardItem {
  id: string;
  label: string;
  image: string;
  description: string;
}

interface BentoCardGridProps {
  heading: string;
  items: BentoCardItem[];
  /** Which card indexes (0-based) span 2 columns on desktop. Defaults to the 2nd and 3rd cards. */
  wideIndexes?: number[];
}

function BentoCard({ item, wide }: { item: BentoCardItem; wide?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      width="fullWidth"
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-neutral-200",
        "min-h-75 max-h-75 lg:min-h-93 lg:max-h-93",
        wide && "lg:col-span-2",
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Media
        src={item.image}
        alt={item.label}
        width={800}
        height={600}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Container
        width="fullWidth"
        className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(180deg,rgba(24,23,29,0)_59.27%,rgba(24,23,29,0.8)_99.87%)]"
      />
      <Container
        width="fullWidth"
        className={cn(
          "pointer-events-none absolute inset-0 z-1 bg-black/30 transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-0",
        )}
      />
      <Container
        width="fullWidth"
        className={cn(
          "pointer-events-none absolute inset-0 bg-black/30 transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-30",
        )}
      />

      <button
        type="button"
        aria-label={`Show ${item.label} details`}
        className={cn(
          "absolute hidden! lg:flex! right-3.5 top-3.5 z-10",
          "h-18 w-18 items-center justify-center",
          "rounded-full border",
          "transition-all duration-300",
          hovered
            ? "border-white bg-white text-red-900"
            : "border-white/80 bg-transparent text-white",
        )}
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          className="transition-colors duration-300"
        >
          <path
            d="M12 30L30 12M30 12H16M30 12V26"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Container
        width="fullWidth"
        className="absolute lg:bottom-8 bottom-4 left-3 right-4.5 lg:px-4 z-10 flex-col text-white"
      >
        <span className="block text-[18px] font-outfit font-semibold lg:text-[24px]">
          {item.label}
        </span>

        <Container
          width="fullWidth"
          className={cn(
            "overflow-hidden transition-[max-height,margin-top,opacity] duration-300 ease-in-out",
            hovered ? "mt-1.5 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0",
          )}
        >
          <Typography className="m-0 font-inter hidden lg:flex lg:leading-7! text-white/90 lg:text-[16px]">
            {item.description}
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}

export default function BentoCardGrid({
  heading,
  items,
  wideIndexes = [1, 2],
}: BentoCardGridProps) {
  const wideSet = new Set(wideIndexes);

  return (
    <Container
      width="fullWidth"
      className="flex-col px-4 py-10 lg:py-20 lg:px-16 items-center"
    >
      <Container width="pageWidth" className="flex-col">
        <Typography className="mb-6 font-outfit font-bold leading-tight tracking-tight text-neutral-900 text-[32px] lg:text-[56px]">
          {heading}
        </Typography>

        <Container
          width="fullWidth"
          className="grid w-auto grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <BentoCard key={item.id} item={item} wide={wideSet.has(index)} />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
