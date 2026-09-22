// "use client";

// import { useState } from "react";
// import Link from "next/link";

// import Container from "@/components/elements/container";
// import Typography from "@/components/elements/typography";
// import Media from "@/components/elements/media";
// import { cn } from "@/utils";

// interface PrinterCard {
//   title: string;
//   description: string;
//   price: string;
//   href: string;
//   image: string;
// }

// const printerCards: PrinterCard[] = [
//   {
//     title: "Inkjet Printers",
//     description: "High-speed continuous marking for non-porous surfaces",
//     price: "From $1,100",
//     href: "/products/inkjet-printers",
//     image: "/images/gallery-1.jpg",
//   },
//   {
//     title: "Case Sealers",
//     description: "Automated sealing built for high-volume packaging lines",
//     price: "From $2,400",
//     href: "/products/case-sealers",
//     image: "/images/gallery-2.jpg",
//   },
//   {
//     title: "Label Machines",
//     description: "Precise label application for cartons and cases",
//     price: "From $1,800",
//     href: "/products/label-machines",
//     image: "/images/gallery-3.jpg",
//   },
//   {
//     title: "Conveyors",
//     description: "Modular conveyor systems for continuous production flow",
//     price: "From $3,200",
//     href: "/products/conveyors",
//     image: "/images/gallery-4.jpg",
//   },
//   {
//     title: "Case Coders",
//     description: "Reliable case coding for tunnel and drop-on-demand setups",
//     price: "From $1,500",
//     href: "/products/case-coders",
//     image: "/images/gallery-1.jpg",
//   },
// ];

// export default function Gallery() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <Container
//       width="fullWidth"
//       className="px-4 py-10 lg:py-30 sm:px-6 lg:px-18"
//     >
//       <Container width="fullWidth" className="mx-auto max-w-350 flex-col">
//         <Typography className="font-outfit lg:text-[60px]! font-bold text-gray-900 text-[24px]">
//           Choose your printer
//         </Typography>

//         <Container width="fullWidth" className="mt-4 flex-col lg:hidden">
//           {printerCards.map((card, index) => (
//             <Link
//               key={card.title}
//               href={card.href}
//               className={cn(
//                 "flex items-center gap-4 py-4",
//                 index !== printerCards.length - 1 && "border-b border-gray-200",
//               )}
//             >
//               <Media
//                 src={card.image}
//                 alt={card.title}
//                 width={36}
//                 height={26}
//                 className="h-26 w-36 shrink-0 rounded-2xl object-cover"
//               />

//               <Container width="fullWidth" className="flex-col">
//                 <Typography className="font-sans text-base font-bold text-gray-900">
//                   {card.title}
//                 </Typography>
//                 <Typography className="mt-1 font-sans font-semibold text-sm text-gray-500">
//                   {card.price}
//                 </Typography>
//               </Container>

//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//                 className="h-5 w-5 shrink-0 text-red-800"
//               >
//                 <path
//                   d="m9 6 6 6-6 6"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </Link>
//           ))}
//         </Container>

//         <Container
//           width="fullWidth"
//           className="mt-6 hidden lg:mt-12 lg:flex lg:h-130 lg:flex-row lg:gap-3"
//         >
//           {printerCards.map((card, index) => {
//             const isActive = index === activeIndex;

//             return (
//               <Link
//                 key={card.title}
//                 href={card.href}
//                 onMouseEnter={() => setActiveIndex(index)}
//                 className={cn(
//                   "relative block h-full overflow-hidden rounded-[40px] transition-all duration-500 ease-out",
//                   isActive ? "lg:flex-[1.35]" : "lg:flex-[0.75]",
//                 )}
//               >
//                 <Media
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 <Container
//                   width="fullWidth"
//                   className="absolute inset-0 bg-black/35"
//                 />

//                 <Container
//                   width="fullWidth"
//                   className={cn(
//                     `absolute inset-0 flex-col justify-start mt-10 p-6 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`,
//                   )}
//                 >
//                   <Typography className="font-inter lg:text-[32px] text-[24px] ml-1 font-bold text-white ">
//                     {card.title}
//                   </Typography>
//                   <Typography className="mt-4 font-inter lg:text-[16px] text-[24px] max-w-80 ml-1 text-sm text-gray-200 ">
//                     {card.description}
//                   </Typography>
//                   <Typography className="mt-5 ml-1 font-outfit lg:text-[24px] text-[24px] text-base font-bold text-white">
//                     {card.price}
//                   </Typography>
//                   <Link
//                     href="/"
//                     className="mt-5 flex w-fit cursor-pointer  items-center gap-2 rounded-full bg-red-800 px-5 py-2.5 font-inter text-sm font-semibold text-white transition-colors hover:bg-red-600"
//                   >
//                     View more
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                     >
//                       <path
//                         d="M9 5L16 12L9 19"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </Link>
//                 </Container>
//               </Link>
//             );
//           })}
//         </Container>
//       </Container>
//     </Container>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";

import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";
import { cn } from "@/utils";

interface PrinterCard {
  title: string;
  description: string;
  price: string;
  href: string;
  image: string;
}

const printerCards: PrinterCard[] = [
  {
    title: "Industrial Inkjet Printers",
    description: "High-speed continuous marking for non-porous surfaces",
    price: "From ₹58,300",
    href: "/products/inkjet-printers",
    image: "/images/expandimage-1.webp",
  },
  {
    title: "Portable Handheld Inkjet Printers",
    description: "Automated sealing built for high-volume packaging lines",
    price: "From ₹58,300",
    href: "/products/case-sealers",
    image: "/images/exapandible-2.webp",
  },
  {
    title: "Date Coders",
    description: "Precise label application for cartons and cases",
    price: "From ₹58,300",
    href: "/products/label-machines",
    image: "/images/exapandable-3.webp",
  },
  {
    title: "Case Coding Printers",
    description: "Modular conveyor systems for continuous production flow",
    price: "From ₹58,300",
    href: "/products/conveyors",
    image: "/images/expandable-4.webp",
  },
  {
    title: "Bottle coders",
    description: "Reliable case coding for tunnel and drop-on-demand setups",
    price: "From ₹58,300",
    href: "/products/case-coders",
    image: "/images/expandable-5.webp",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container
      width="fullWidth"
      className="px-4 py-8 sm:px-6 lg:px-16 lg:py-24"
    >
      <Container width="fullWidth" className="mx-auto max-w-350 flex-col">
        <Typography className="font-outfit text-[32px] font-bold text-gray-900 lg:text-[56px]!">
          Choose your printer
        </Typography>

        <Container width="fullWidth" className="mt-2 flex-col lg:hidden">
          {printerCards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href}
              className={cn(
                "flex items-center gap-5 py-3",
                index !== printerCards.length - 1 && "border-b border-gray-200",
              )}
            >
              <Media
                src={card.image}
                alt={card.title}
                width={36}
                height={26}
                className="h-26 w-36 shrink-0 rounded-3xl object-cover"
              />

              <Container width="fullWidth" className="flex-col">
                <Typography className="font-outfit  text-[18px] leading-6 font-bold text-gray-900">
                  {card.title}
                </Typography>

                <Typography className="mt-2 text-sm font-outfit font-semibold text-gray-500">
                  {card.price}
                </Typography>
              </Container>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-7 w-7 shrink-0 text-[#a71919] transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          ))}
        </Container>

        <Container
          width="fullWidth"
          className="mt-6 hidden lg:mt-12 lg:flex lg:h-130 lg:flex-row lg:gap-3"
        >
          {printerCards.map((card, index) => {
            const isActive = index === activeIndex;

            return (
              <Link
                key={card.title}
                href={card.href}
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(
                  "group relative block h-full overflow-hidden rounded-[30px]",
                  "transition-[flex] duration-500 ease-out",
                  isActive ? "lg:flex-[1.35]" : "lg:flex-[0.75]",
                )}
              >
                <Media
                  src={card.image}
                  alt={card.title}
                  width={1200}
                  height={1200}
                  className="absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2 object-cover"
                />

                <Container
                  width="fullWidth"
                  className="pointer-events-none absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <Container
                  width="fullWidth"
                  className={cn(
                    "absolute inset-0 mt-10 flex-col justify-start py-8 px-7",
                    "transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                >
                  <Typography className="ml-1 font-outfit text-[24px] lg: leading-11! font-bold text-white lg:text-[36px]">
                    {card.title}
                  </Typography>

                  <Typography className="ml-1 mt-5 max-w-80 font-inter lg:leading-6! text-sm text-gray-200 lg:text-[16px]">
                    {card.description}
                  </Typography>

                  <Typography className="ml-1 mt-4 font-outfit text-base font-bold text-white lg:text-[24px]">
                    {card.price}
                  </Typography>

                  <span className="mt-4 flex w-fit items-center gap-2 rounded-full bg-red-800 px-4 py-2.5 font-outfit text-sm font-semibold text-white">
                    View more
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M9 5L16 12L9 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Container>
              </Link>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
}
