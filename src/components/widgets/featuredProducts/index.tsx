// "use client";

// import { useState } from "react";
// import { Star, ChevronRight } from "lucide-react";
// import Container from "@/components/elements/container";
// import Media from "@/components/elements/media";
// import Typography from "@/components/elements/typography";
// import Link from "@/components/elements/link";

// type Product = {
//   id: string;
//   sku: string;
//   image: string;
//   recommended?: boolean;
//   rating: number;
//   reviewCount: number;
//   title: string;
//   //   description: string;
//   //   tags: string[];
//   price: number;
//   originalPrice?: number;
//   href: string;
// };

// type Category = {
//   id: string;
//   label: string;
// };

// const CATEGORIES: Category[] = [
//   { id: "inkjet-Coders", label: "Inkjet Coders" },
//   { id: "Case Coding Printers", label: "Case Coding Printers" },
//   {
//     id: "Portable Handheld Inkjet Printers",
//     label: "Portable Handheld Inkjet Printers",
//   },
//   { id: "Carton / Case / Box Sealers", label: "Carton / Case / Box Sealers" },
//   { id: "Case / Box Erectors", label: "Case / Box Erectors" },
//   { id: "Labeling Machines", label: "Labeling Machines" },
//   { id: "Conveyors", label: "Conveyors" },
// ];

// const PRODUCTS: Record<string, Product[]> = {
//   "inkjet-Coders": [
//     {
//       id: "titan-600",
//       sku: "SNEED-JET",
//       image: "/images/product-1.webp",
//       rating: 4,
//       reviewCount: 32,
//       title: "SNEED-JET® Titan Printer",
//       //   description: "High-speed inkjet for cases, cartons, and pallets.",
//       //   tags: ["Aluminum", "Date Coding", "70 m/min"],
//       originalPrice: 155500,
//       price: 136000,
//       href: "/products/titan-600",
//     },
//     {
//       id: "freedom-42",
//       sku: "SNEED-JET",
//       image: "/images/product-2.webp",
//       rating: 4,
//       reviewCount: 128,
//       title: "SNEED-JET® Titan 22 Dual Head Inkjet Coder",
//       //   description: "Compact thermal inkjet...",
//       //   tags: ["Aluminum", "Date Coding", "70 m/min"],
//       price: 233200,
//       originalPrice: 291200,
//       href: "/products/freedom-42",
//     },
//     {
//       id: "freedom-44",
//       sku: "SJ-TITAN-600",
//       image: "/images/gallery-3.jpg",
//       rating: 4,
//       reviewCount: 128,
//       title: "SNEED-JET\u00ae Freedom 44, Four Printhead Case Coder",
//       //   description: "Top-and-bottom case sealing for high-volume lines.",
//       //   tags: ["Aluminum", "Date Coding", "70 m/min"],
//       price: 6250,
//       originalPrice: 6850,
//       href: "/products/freedom-44",
//     },
//     {
//       id: "titan-t6",
//       sku: "SJ-TITAN-600",
//       image: "/images/gallery-4.jpg",
//       rating: 4,
//       reviewCount: 128,
//       title: "SNEED-JET\u00ae Titan T6 Handheld Printer",
//       //   description: "Top-and-bottom case sealing for high-volume lines.",
//       //   tags: ["Aluminum", "Date Coding", "70 m/min"],
//       price: 6250,
//       originalPrice: 6850,
//       href: "/products/titan-t6",
//     },
//   ],
//   "Case Coding Printers": [
//     {
//       id: "coder-placeholder-1",
//       sku: "SJ-TITAN-600",
//       image: "/images/gallery-1.jpg",
//       recommended: true,
//       rating: 4,
//       reviewCount: 128,
//       title: "Card title goes here",
//       //   description:
//       //     "Supporting description text that provides more context for the card content. Supporting description text that provides more context for the card content.",
//       // //   tags: ["Aluminum", "Date Coding", "70 m/min"],
//       price: 299,
//       originalPrice: 349,
//       href: "/products/case-coder-1",
//     },
//     {
//       id: "coder-placeholder-2",
//       sku: "SJ-TITAN-600",
//       image: "/images/gallery-2.jpg",
//       recommended: true,
//       rating: 4,
//       reviewCount: 128,
//       title: "Card title goes here",
//       //   description:"Supporting description text that provides more context for the card content. Supporting description text that provides more context for the card content.",
//       //   tags: ["Aluminum", "Date Coding", "70 m/min"],
//       price: 299,
//       originalPrice: 349,
//       href: "/products/case-coder-2",
//     },
//   ],
//   "case-erectors": [],
//   "label-machines": [],
//   conveyors: [],
// };

// function StarRating({
//   rating,
//   reviewCount,
// }: {
//   rating: number;
//   reviewCount: number;
// }) {
//   return (
//     <Container className="items-center gap-1">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           className={
//             i < rating
//               ? "h-4 w-4 fill-[#770000] text-[#770000]"
//               : "h-4 w-4 fill-red-100 text-red-100"
//           }
//         />
//       ))}
//       <Typography className="ml-1 text-[12px] text-gray-500">
//         ({reviewCount})
//       </Typography>
//     </Container>
//   );
// }

// function ProductCard({ product }: { product: Product }) {
//   return (
//     <Container
//       width="fullWidth"
//       className="relative flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white"
//     >
//       <Container width="fullWidth" className="relative aspect-4/3 bg-gray-100">
//         {product.recommended && (
//           <span className="absolute left-3 top-3 z-10 rounded-full bg-red-800 px-3 py-1 text-xs font-semibold text-white">
//             Recommended
//           </span>
//         )}
//         <Media
//           src={product.image}
//           alt={product.title}
//           fill
//           className="object-cover rounded-b-2xl"
//         />
//       </Container>

//       <Container width="fullWidth" className="flex-1 flex-col gap-3 p-5">
//         <Container
//           width="fullWidth"
//           className="items-center justify-between mt-2 gap-3"
//         >
//           <Typography className="text-[12px] font-inter text-gray-500">
//             {product.sku}
//           </Typography>
//           <StarRating
//             rating={product.rating}
//             reviewCount={product.reviewCount}
//           />
//         </Container>

//         <Typography className="font-outfit text-[18px] pb-3 font-bold leading-snug text-gray-900">
//           {product.title}
//         </Typography>

//         {/* <Typography className="line-clamp-3 text-[14px] leading-relaxed text-gray-500">
//           {product.description}
//         </Typography> */}

//         {/* <Container width="fullWidth" className="flex-wrap gap-2 pt-1">
//           {product.tags.map((tag) => (
//             <span
//               key={tag}
//               className="rounded-full border border-gray-200 px-3 py-1 text-[12px] text-gray-600"
//             >
//               {tag}
//             </span>
//           ))}
//         </Container> */}

//         <Container
//           width="fullWidth"
//           className="mt-auto items-center border-t border-gray-200 justify-between pt-4 lg:pt-3"
//         >
//           <Container className="items-baseline flex-col">
//             {product.originalPrice && (
//               <Typography className="lg:text-[14px] text-[14px] text-[#7D7682] font-inter line-through">
//                 ₹{product.originalPrice.toLocaleString()}
//               </Typography>
//             )}
//             <Typography className="lg:text-lg text-[18px] font-bold font-outfit text-[#770000]">
//               ₹{product.price.toLocaleString()}
//             </Typography>
//           </Container>

//           <Link
//             href={product.href}
//             className="flex items-center gap-1 font-outfit rounded-full bg-red-800 px-3.75 py-1.25 lg:px-3.75 lg:py-1.25 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-red-600"
//           >
//             View
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clip-path="url(#clip0_835_1639)">
//                 <path
//                   d="M5.93974 13.78C5.81307 13.78 5.68641 13.7333 5.58641 13.6333C5.39307 13.44 5.39307 13.12 5.58641 12.9267L9.93307 8.58001C10.2531 8.26001 10.2531 7.74001 9.93307 7.42001L5.58641 3.07335C5.39307 2.88001 5.39307 2.56001 5.58641 2.36668C5.77974 2.17335 6.09974 2.17335 6.29307 2.36668L10.6397 6.71335C10.9797 7.05335 11.1731 7.51335 11.1731 8.00001C11.1731 8.48668 10.9864 8.94668 10.6397 9.28668L6.29307 13.6333C6.19307 13.7267 6.06641 13.78 5.93974 13.78Z"
//                   fill="white"
//                 ></path>
//               </g>
//               <defs>
//                 <clipPath id="clip0_835_1639">
//                   <rect width="16" height="16" fill="white"></rect>
//                 </clipPath>
//               </defs>
//             </svg>
//           </Link>
//         </Container>
//       </Container>
//     </Container>
//   );
// }

// export default function FeaturedProducts() {
//   const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
//   const products = PRODUCTS[activeCategory] ?? [];

//   return (
//     <section className="justify-center items-center mx-auto max-w-350 overflow-x-hidden px-4 py-10 sm:px-6 lg:px-12 lg:py-24">
//       <Container
//         width="fullWidth"
//         className="flex-col gap-2 lg:flex-row lg:items-start lg:justify-between"
//       >
//         <Typography className="font-outfit text-[32px] font-black text-gray-900 lg:text-[56px]">
//           Featured Products
//         </Typography>
//         <Typography className="lg:max-w-md xl:max-w-162.5 lg:ml-10! font-inter text-[16px] lg:text-[16px] lg:mt-6 mt-8 text-[#525159]">
//           Every system shares the same ink chemistry, controller, and service
//           network — scaled from compact benchtop to heavy industrial deployment.
//         </Typography>
//       </Container>

//       {/* <Container width="fullWidth" className="relative mt-4 lg:mt-8">
//         <Container
//           width="fullWidth"
//           className="-mx-4 flex-nowrap min-w-0 items-center gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//         >
//           {CATEGORIES.map((category) => {
//             const isActive = category.id === activeCategory;
//             return (
//               <button
//                 key={category.id}
//                 type="button"
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`shrink-0 whitespace-nowrap rounded-full border px-3.75 font-outfit py-1.75 lg:px-8 lg:py-3 lg:text-[16px] text-[16px] font-semibold transition-colors duration-200 ${
//                   isActive
//                     ? "border-red-800 bg-red-800 text-white"
//                     : "border-red-800 bg-white text-red-800 hover:bg-red-50"
//                 }`}
//               >
//                 {category.label}
//               </button>
//             );
//           })}
//         </Container>

//         <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-linear-to-l from-white to-transparent" />
//       </Container> */}

//       <Container width="fullWidth" className="relative mt-4 lg:mt-8">
//         <Container
//           width="fullWidth"
//           className="flex-nowrap min-w-0 items-center gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-2 [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//         >
//           {CATEGORIES.map((category) => {
//             const isActive = category.id === activeCategory;
//             return (
//               <button
//                 key={category.id}
//                 type="button"
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`shrink-0 snap-start whitespace-nowrap rounded-full border px-3.75 font-outfit py-1.75 lg:px-8 lg:py-3 lg:text-[16px] text-[16px] font-semibold transition-colors duration-200 ${
//                   isActive
//                     ? "border-red-800 bg-red-800 text-white"
//                     : "border-red-800 bg-white text-red-800 hover:bg-red-50"
//                 }`}
//               >
//                 {category.label}
//               </button>
//             );
//           })}
//         </Container>
//         <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-10 bg-linear-to-l from-white to-transparent sm:block" />
//       </Container>

//       {products.length > 0 ? (
//         <Container
//           width="fullWidth"
//           className="mt-3 lg:mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
//         >
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </Container>
//       ) : (
//         <Typography className="mt-10 text-sm text-gray-500">
//           No products in this category yet.
//         </Typography>
//       )}
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { Star, ChevronRight } from "lucide-react";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import Link from "@/components/elements/link";

type Product = {
  id: string;
  sku: string;
  image: string;
  recommended?: boolean;
  rating: number;
  reviewCount: number;
  title: string;
  //   description: string;
  //   tags: string[];
  price: number;
  originalPrice?: number;
  href: string;
};

type Category = {
  id: string;
  label: string;
};

const CATEGORIES: Category[] = [
  { id: "inkjet-Coders", label: "Inkjet Coders" },
  { id: "Case Coding Printers", label: "Case Coding Printers" },
  {
    id: "Portable Handheld Inkjet Printers",
    label: "Portable Handheld Inkjet Printers",
  },
  { id: "Carton / Case / Box Sealers", label: "Carton / Case / Box Sealers" },
  { id: "Case / Box Erectors", label: "Case / Box Erectors" },
  { id: "Labeling Machines", label: "Labeling Machines" },
  { id: "Conveyors", label: "Conveyors" },
];

const PRODUCTS: Record<string, Product[]> = {
  "inkjet-Coders": [
    {
      id: "titan-600",
      sku: "SNEED-JET",
      image: "/images/product-1.webp",
      rating: 4,
      reviewCount: 32,
      title: "SNEED-JET® Titan Printer",
      //   description: "High-speed inkjet for cases, cartons, and pallets.",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      originalPrice: 155500,
      price: 136000,
      href: "/products/titan-600",
    },
    {
      id: "freedom-42",
      sku: "SNEED-JET",
      image: "/images/product-2.webp",
      rating: 4,
      reviewCount: 128,
      title: "SNEED-JET® Titan 22 Dual Head Inkjet Coder",
      //   description: "Compact thermal inkjet...",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 233200,
      originalPrice: 291200,
      href: "/products/freedom-42",
    },
    {
      id: "freedom-44",
      sku: "SJ-TITAN-600",
      image: "/images/product-3.webp",
      rating: 4,
      reviewCount: 128,
      title: "SNEED-JET\u00ae Freedom 44, Four Printhead Case Coder",
      //   description: "Top-and-bottom case sealing for high-volume lines.",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 6250,
      originalPrice: 6850,
      href: "/products/freedom-44",
    },
    {
      id: "titan-t6",
      sku: "SJ-TITAN-600",
      image: "/images/product-4.webp",
      rating: 4,
      reviewCount: 128,
      title: "SNEED-JET\u00ae Titan T6 Handheld Printer",
      //   description: "Top-and-bottom case sealing for high-volume lines.",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 6250,
      originalPrice: 6850,
      href: "/products/titan-t6",
    },
  ],
  "Case Coding Printers": [
    {
      id: "coder-placeholder-1",
      sku: "SJ-TITAN-600",
      image: "/images/product-1.webp",
      recommended: true,
      rating: 4,
      reviewCount: 128,
      title: "Card title goes here",
      //   description:
      //     "Supporting description text that provides more context for the card content. Supporting description text that provides more context for the card content.",
      // //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 299,
      originalPrice: 349,
      href: "/products/case-coder-1",
    },
    {
      id: "coder-placeholder-2",
      sku: "SJ-TITAN-600",
      image: "/images/product-2.webp",
      recommended: true,
      rating: 4,
      reviewCount: 128,
      title: "Card title goes here",
      //   description:"Supporting description text that provides more context for the card content. Supporting description text that provides more context for the card content.",
      //   tags: ["Aluminum", "Date Coding", "70 m/min"],
      price: 299,
      originalPrice: 349,
      href: "/products/case-coder-2",
    },
  ],
  "case-erectors": [],
  "label-machines": [],
  conveyors: [],
};

function StarRating({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <Container className="items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "h-4 w-4 fill-[#770000] text-[#770000]"
              : "h-4 w-4 fill-red-100 text-red-100"
          }
        />
      ))}
      <Typography className="ml-1 text-[12px] text-gray-500">
        ({reviewCount})
      </Typography>
    </Container>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Container
      width="fullWidth"
      className="relative flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white"
    >
      <Container width="fullWidth" className="relative aspect-4/3 bg-gray-100">
        {product.recommended && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-red-800 px-3 py-1 text-xs font-semibold text-white">
            Recommended
          </span>
        )}
        <Media
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-b-2xl"
        />
      </Container>

      <Container width="fullWidth" className="flex-1 flex-col gap-3 p-5">
        <Container
          width="fullWidth"
          className="items-center justify-between mt-2 gap-3"
        >
          <Typography className="text-[12px] font-inter text-gray-500">
            {product.sku}
          </Typography>
          <StarRating
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        </Container>

        <Typography className="font-outfit text-[18px] pb-3 font-bold leading-snug text-gray-900">
          {product.title}
        </Typography>

        {/* <Typography className="line-clamp-3 text-[14px] leading-relaxed text-gray-500">
          {product.description}
        </Typography> */}

        {/* <Container width="fullWidth" className="flex-wrap gap-2 pt-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 px-3 py-1 text-[12px] text-gray-600"
            >
              {tag}
            </span>
          ))}
        </Container> */}

        <Container
          width="fullWidth"
          className="mt-auto items-center border-t border-gray-200 justify-between pt-4 lg:pt-3"
        >
          <Container className="items-baseline flex-col">
            {product.originalPrice && (
              <Typography className="lg:text-[14px] text-[14px] text-[#7D7682] font-inter line-through">
                ₹{product.originalPrice.toLocaleString()}
              </Typography>
            )}
            <Typography className="lg:text-lg text-[18px] font-bold font-outfit text-[#770000]">
              ₹{product.price.toLocaleString()}
            </Typography>
          </Container>

          <Link
            href={product.href}
            className="flex items-center gap-1 font-outfit rounded-full bg-red-800 px-3.75 py-1.25 lg:px-3.75 lg:py-1.25 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-red-950"
          >
            View
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_835_1639)">
                <path
                  d="M5.93974 13.78C5.81307 13.78 5.68641 13.7333 5.58641 13.6333C5.39307 13.44 5.39307 13.12 5.58641 12.9267L9.93307 8.58001C10.2531 8.26001 10.2531 7.74001 9.93307 7.42001L5.58641 3.07335C5.39307 2.88001 5.39307 2.56001 5.58641 2.36668C5.77974 2.17335 6.09974 2.17335 6.29307 2.36668L10.6397 6.71335C10.9797 7.05335 11.1731 7.51335 11.1731 8.00001C11.1731 8.48668 10.9864 8.94668 10.6397 9.28668L6.29307 13.6333C6.19307 13.7267 6.06641 13.78 5.93974 13.78Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_835_1639">
                  <rect width="16" height="16" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </Link>
        </Container>
      </Container>
    </Container>
  );
}

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const products = PRODUCTS[activeCategory] ?? [];

  return (
    <section className="mx-auto w-full max-w-350 overflow-x-hidden px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-24">
      {/* Heading */}
      <Container
        width="fullWidth"
        className="min-w-0 flex-col gap-3 sm:gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-2"
      >
        <Typography className="font-outfit min-w-0 text-[32px] leading-tight font-black text-gray-900 sm:text-[40px] md:text-[48px] lg:text-[56px]">
          Featured Products
        </Typography>

        <Typography className="font-inter mt-2 min-w-0 max-w-full lg:leading-6 text-[15px] leading-6 text-[#525159] sm:text-[16px] md:max-w-2xl lg:mt-4 lg:ml-10 lg:max-w-md xl:max-w-162.5">
          Every system shares the same ink chemistry, controller, and service
          network — scaled from compact benchtop to heavy industrial deployment.
        </Typography>
      </Container>

      {/* Category Pills */}
      <Container width="fullWidth" className="relative mt-6 sm:mt-7 lg:mt-8">
        <Container
          width="fullWidth"
          className="min-w-0 flex-nowrap items-center gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 pb-3 [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-0"
        >
          {CATEGORIES.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`font-outfit shrink-0 snap-start cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-[14px] font-semibold transition-colors duration-200 sm:px-5 sm:py-2.5 sm:text-[15px] lg:px-8 lg:py-3 lg:text-[16px] ${
                  isActive
                    ? "border-red-800 bg-red-800 text-white"
                    : "border-red-800 bg-white text-red-800 "
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </Container>

        {/* Fade only when useful */}
        <Container className="pointer-events-none absolute top-0 right-0 hidden h-full w-10 bg-linear-to-l from-white to-transparent sm:flex" />
      </Container>

      {/* Products */}
      {products.length > 0 ? (
        <Container
          width="fullWidth"
          className="min-w-0 mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:mt-8 xl:grid-cols-4"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      ) : (
        <Typography className="mt-8 text-sm text-gray-500 sm:mt-10">
          No products in this category yet.
        </Typography>
      )}
    </section>
  );
}
