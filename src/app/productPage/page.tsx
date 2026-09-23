"use client";

import { useState, useMemo } from "react";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Star,
  X,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";
import { cn } from "@/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "@/components/elements/link";

const ITEMS_PER_PAGE = 9;

interface FilterOption {
  label: string;
  count: number;
}

interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
  defaultOpen?: boolean;
}

const FILTER_GROUPS: FilterGroup[] = [
  {
    id: "industry",
    label: "Industry",
    defaultOpen: true,
    options: [
      { label: "Food & Beverage", count: 46 },
      { label: "Cosmetics", count: 19 },
      { label: "Pharmaceutical", count: 22 },
      { label: "Industrial Manufacturing", count: 34 },
      { label: "Consumer Goods", count: 31 },
      { label: "Secondary Packaging", count: 17 },
    ],
  },
  {
    id: "substrate",
    label: "Substrate / Material",
    defaultOpen: true,
    options: [
      { label: "Plastic", count: 47 },
      { label: "Glass", count: 15 },
      { label: "Aluminum", count: 41 },
      { label: "Metal", count: 28 },
      { label: "Corrugated", count: 29 },
      { label: "Wood", count: 9 },
      { label: "Flexible Packaging", count: 22 },
    ],
  },
  {
    id: "application",
    label: "Application",
    defaultOpen: true,
    options: [
      { label: "Date Coding", count: 52 },
      { label: "Lot Coding", count: 41 },
      { label: "Batch Coding", count: 19 },
      { label: "Barcode Printing", count: 27 },
      { label: "Serialization", count: 17 },
    ],
  },
  { id: "category", label: "Product Category", options: [] },
  { id: "price", label: "Price Range", options: [] },
  { id: "series", label: "Series", options: [] },
];

interface Product {
  id: string;
  image: string;
  recommended?: boolean;
  sku: string;
  rating: number;
  reviewCount: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  originalPrice?: number;
  industry: string[];
  substrate: string[];
  application: string[];
  href: string;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    image: "/images/product-1.webp",
    recommended: true,
    sku: "SJ-TITAN-600",
    rating: 4,
    reviewCount: 128,
    name: "SNEED-JET® Titan Printer",
    description: "High-speed inkjet for cases, cartons, and pallets.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 3295,
    industry: ["Food & Beverage", "Industrial Manufacturing"],
    substrate: ["Aluminum", "Corrugated"],
    application: ["Date Coding", "Lot Coding"],
    href: "/",
  },
  {
    id: "2",
    image: "/images/product-2.webp",
    sku: "SJ-FREEDOM-400",
    rating: 4,
    reviewCount: 96,
    name: "SNEED-JET® Freedom Printer",
    description: "Compact thermal inkjet for primary packaging.",
    tags: ["Plastic", "Date Coding", "70 m/min"],
    price: 2495,
    originalPrice: 2895,
    industry: ["Cosmetics", "Consumer Goods"],
    substrate: ["Plastic"],
    application: ["Date Coding"],
    href: "/",
  },
  {
    id: "3",
    image: "/images/product-3.webp",
    sku: "SJ-INFINITY-800",
    rating: 5,
    reviewCount: 156,
    name: "SNEED-JET® Infinity Printer",
    description: "High-resolution piezo printer for premium branding.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 4895,
    originalPrice: 5495,
    industry: ["Cosmetics", "Pharmaceutical"],
    substrate: ["Aluminum", "Glass"],
    application: ["Barcode Printing", "Serialization"],
    href: "/",
  },
  {
    id: "4",
    image: "/images/product-4.webp",
    sku: "SJ-TITAN-600",
    rating: 4,
    reviewCount: 74,
    name: "SNEED Case Sealer CS-200",
    description: "Top-and-bottom case sealing for high-volume lines.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 6250,
    originalPrice: 6950,
    industry: ["Food & Beverage", "Secondary Packaging"],
    substrate: ["Corrugated"],
    application: ["Lot Coding"],
    href: "/",
  },
  {
    id: "5",
    image: "/images/product-1.webp",
    sku: "SJ-TITAN-600",
    rating: 3,
    reviewCount: 58,
    name: "SNEED Labeling System LX-10",
    description: "Print-and-apply labeling for retail-ready packaging.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 5495,
    originalPrice: 5995,
    industry: ["Consumer Goods", "Pharmaceutical"],
    substrate: ["Plastic", "Metal"],
    application: ["Barcode Printing"],
    href: "/",
  },
  {
    id: "6",
    image: "/images/product-1.webp",
    sku: "SJ-TITAN-600",
    rating: 4,
    reviewCount: 41,
    name: "SNEED Case Erector CE-100",
    description: "Automatic case forming for secondary packaging.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 7995,
    industry: ["Secondary Packaging", "Industrial Manufacturing"],
    substrate: ["Corrugated"],
    application: ["Batch Coding"],
    href: "/",
  },
  {
    id: "7",
    image: "/images/product-1.webp",
    recommended: true,
    sku: "SJ-TITAN-600",
    rating: 4,
    reviewCount: 89,
    name: "SNEED-JET® Titan Printer — Dual Head",
    description: "Dual-head configuration for higher-throughput lines.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 5990,
    industry: ["Food & Beverage", "Industrial Manufacturing"],
    substrate: ["Aluminum", "Metal"],
    application: ["Date Coding", "Serialization"],
    href: "/",
  },
  {
    id: "8",
    image: "/images/product-1.webp",
    sku: "SJ-TITAN-600",
    rating: 4,
    reviewCount: 33,
    name: "SNEED Conveyor Module CM-50",
    description: "Modular conveyor section for integrated lines.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 1895,
    originalPrice: 2100,
    industry: ["Industrial Manufacturing", "Consumer Goods"],
    substrate: ["Metal", "Wood"],
    application: ["Lot Coding"],
    href: "/",
  },
  {
    id: "9",
    image: "/images/product-1.webp",
    sku: "SJ-TITAN-600",
    rating: 4,
    reviewCount: 33,
    name: "SNEED Conveyor Module CM-50",
    description: "Modular conveyor section for integrated lines.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 1895,
    originalPrice: 2100,
    industry: ["Industrial Manufacturing", "Consumer Goods"],
    substrate: ["Metal", "Wood"],
    application: ["Lot Coding"],
    href: "/",
  },
  {
    id: "10",
    image: "/images/product-1.webp",
    sku: "SJ-TITAN-600",
    rating: 4,
    reviewCount: 33,
    name: "SNEED Conveyor Module CM-50",
    description: "Modular conveyor section for integrated lines.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 1895,
    originalPrice: 2100,
    industry: ["Industrial Manufacturing", "Consumer Goods"],
    substrate: ["Metal", "Wood"],
    application: ["Lot Coding"],
    href: "/",
  },
  {
    id: "11",
    image: "/images/product-1.webp",
    sku: "SJ-TITAN-600",
    rating: 4,
    reviewCount: 33,
    name: "SNEED Conveyor Module CM-50",
    description: "Modular conveyor section for integrated lines.",
    tags: ["Aluminum", "Date Coding", "70 m/min"],
    price: 1895,
    originalPrice: 2100,
    industry: ["Industrial Manufacturing", "Consumer Goods"],
    substrate: ["Metal", "Wood"],
    application: ["Lot Coding"],
    href: "/",
  },
];

const SORT_OPTIONS = [
  "Relevance",
  "Price: Low to High",
  "Price: High to Low",
  "Best Rated",
];

function StarRating({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <Container className="items-center gap-1">
      <Container className="items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={
              i < rating
                ? "fill-[#9B1B32] text-[#9B1B32]"
                : "fill-[#E7E7EA] text-[#E7E7EA]"
            }
          />
        ))}
      </Container>
      <Typography className="m-0 text-[12px] text-gray-400">
        ({reviewCount})
      </Typography>
    </Container>
  );
}

function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  return (
    <Container className="items-center gap-2">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(Math.max(1, page - 1))}
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-[#9B1B32]/40 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={16} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          className={cn(
            "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[14px] font-semibold transition-colors",
            p === page
              ? "bg-[#9B1B32] text-white"
              : "text-gray-500 hover:bg-[#F3F1EC]",
          )}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#E7E7EA] text-gray-500 hover:border-[#9B1B32]/40 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={16} />
      </button>
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
          alt={product.name}
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
          {product.name}
        </Typography>
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

function FilterSidebar({
  search,
  onSearchChange,
  openGroups,
  onToggleGroup,
  selected,
  onToggleOption,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  openGroups: Record<string, boolean>;
  onToggleGroup: (id: string) => void;
  selected: Record<string, string[]>;
  onToggleOption: (groupId: string, option: string) => void;
}) {
  return (
    <Container className="flex-col gap-2">
      <Container className="relative">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-2xl border border-gray-300 bg-white py-2.5 font-inter lg:py-3 pl-9 pr-4 text-[16px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9B1B32]/30"
        />
      </Container>

      <Container className="flex-col">
        {FILTER_GROUPS.map((group) => {
          const isOpen = openGroups[group.id];
          const hasOptions = group.options.length > 0;

          return (
            <Container
              key={group.id}
              className="flex-col border-b border-[#9B1B32] pb-5 pt-6 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => onToggleGroup(group.id)}
                className="flex w-full cursor-pointer items-center justify-between font-outfit text-[14px] lg:text-[16px] font-bold text-[#24232D]"
              >
                {group.label}
                <ChevronDown
                  size={16}
                  className={cn(
                    "text-black transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              {hasOptions && (
                <Container
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <Container className="overflow-hidden">
                    <Container className="flex-col gap-1.75 pt-4">
                      {group.options.map((option) => {
                        const isChecked =
                          selected[group.id]?.includes(option.label) ?? false;
                        return (
                          <label
                            key={option.label}
                            className="flex cursor-pointer items-center justify-between gap-2"
                          >
                            <Container className="items-center gap-2">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() =>
                                  onToggleOption(group.id, option.label)
                                }
                                className="
      h-5 w-4.75 shrink-0 cursor-pointer
      appearance-none
      rounded-[6.5px]
      border border-gray-200
      bg-white
      checked:border-[#9B1B32]
      checked:bg-[#9B1B32]
      checked:relative
      checked:after:content-['']
      checked:after:absolute
      checked:after:left-1/2
      checked:after:top-1/2
      checked:after:h-[9px]
      checked:after:w-[9px]
      checked:after:-translate-x-1/2
      checked:after:-translate-y-1/2
      checked:after:rounded-full
      checked:after:bg-white
    "
                              />

                              <Typography className="m-0 font-inter lg:text-[14px] text-[13.5px] text-gray-600">
                                {option.label}
                              </Typography>
                            </Container>
                            {/* <Typography className="m-0 text-[12.5px] text-gray-400">
                              {option.count}
                            </Typography> */}
                          </label>
                        );
                      })}
                    </Container>
                  </Container>
                </Container>
              )}
            </Container>
          );
        })}
      </Container>
    </Container>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ProductListingPage() {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(SORT_OPTIONS[0]);
  const [page, setPage] = useState(2);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(FILTER_GROUPS.map((g) => [g.id, !!g.defaultOpen])),
  );

  const [selected, setSelected] = useState<Record<string, string[]>>({
    industry: ["Food & Beverage"],
    substrate: ["Aluminum"],
    application: ["Date Coding"],
  });

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleOption = (groupId: string, option: string) => {
    setSelected((prev) => {
      const current = prev[groupId] ?? [];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [groupId]: next };
    });
    setPage(1);
  };

  const clearAll = () => {
    setSelected({});
    setPage(1);
  };

  // Active chips flattened for the row under the product count
  const activeChips = useMemo(() => {
    return Object.entries(selected).flatMap(([groupId, options]) =>
      options.map((option) => ({ groupId, option })),
    );
  }, [selected]);

  // Filtering: a product must match every group that has an active selection
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      return Object.entries(selected).every(([groupId, options]) => {
        if (!options.length) return true;
        const productValues =
          groupId === "industry"
            ? product.industry
            : groupId === "substrate"
              ? product.substrate
              : groupId === "application"
                ? product.application
                : [];
        return options.some((opt) => productValues.includes(opt));
      });
    }).filter((product) =>
      search.trim()
        ? product.name.toLowerCase().includes(search.trim().toLowerCase())
        : true,
    );
  }, [selected, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
  );

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, page]);

  const changePage = (nextPage: number) => {
    setPage(nextPage);
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Container
        component="main"
        className="flex-col bg-white px-4 py-16 lg:px-16 lg:py-32.5"
      >
        <Container width="fullWidth" className="mx-auto max-w-350 flex-col">
          <Container className="items-center font-inter gap-1 text-[14px]">
            <Link
              href="/"
              variant="Link"
              className="text-[#7D7682] hover:text-[#24232D]"
            >
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2.5 6H9.5M6.5 9L9.5 6L6.5 3"
                stroke="#7D7C82"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-black">Products</span>
          </Container>
          <Typography className="m-0 mt-2 lg:mt-5 font-outfit font-extrabold text-[26px] leading-tight text-[#24232D] lg:text-[80px]">
            Industrial Inkjet Printers
          </Typography>
          {/* Quiz banner */}
          {!bannerDismissed && (
            <Container className="relative mt-6 flex-col gap-4 rounded-[20px] bg-[#FDF3F0] px-5 py-4 lg:py-6 lg:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-2">
              <Container className="flex-1 flex-col gap-0.5 pr-8 lg:pr-0">
                <Typography className="m-0 text-[14px] font-outfit text-[#770000] font-bold">
                  Not sure where to start?
                </Typography>
                <Typography className="mt-1.5 font-inter text-[14px] lg:text-[14px] text-[#27252F]">
                  Answer 3 quick questions and we&apos;ll recommend the right
                  equipment.
                </Typography>
              </Container>

              {/* Button + X together: right-aligned row on mobile, inline pair on desktop */}
              <Container className="items-center justify-start gap-5">
                <button
                  type="button"
                  className="whitespace-nowrap font-outfit rounded-full bg-[#9B1B32] px-4.25 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#7f1628]"
                >
                  Start the Quiz
                </button>

                <button
                  type="button"
                  aria-label="Dismiss"
                  onClick={() => setBannerDismissed(true)}
                  className="absolute right-4 top-4 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center text-gray-500 hover:text-[#24232D] lg:static"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33398 3.33333L12.6673 12.6667M12.6673 3.33333L3.33398 12.6667"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </Container>
            </Container>
          )}
          {/* Count + sort */}
          {/* <Container className="mt-6 lg:mt-5 items-center justify-between">
            <Typography className="font-outfit text-[19px] lg:text-[24px] font-bold text-[#24232D]">
              {filteredProducts.length} products
            </Typography> */}
          {/* <Container className="items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border border-[#E7E7EA] px-3.5 py-2 text-[13px] font-semibold text-[#24232D] lg:hidden"
              >
                <SlidersHorizontal size={14} />
                Filters
                {activeChips.length > 0 && (
                  <span className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#9B1B32] text-[10px] font-bold text-white">
                    {activeChips.length}
                  </span>
                )}
              </button>

              <Container className="relative hidden lg:block">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="cursor-pointer appearance-none rounded-2xl border border-[#C7C7C7] bg-white py-2 lg:py-2.25 lg:px-5 px-3 text-[13px] font-inter lg:text-[16px] text-black focus:outline-none"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      Sort: {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-black"
                />
              </Container>
            </Container> */}
          {/* <Container className="items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border border-[#E7E7EA] px-3.5 py-2 text-[13px] font-semibold text-[#24232D] lg:hidden"
              >
                <SlidersHorizontal size={14} />
                Filters
                {activeChips.length > 0 && (
                  <span className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#9B1B32] text-[10px] font-bold text-white">
                    {activeChips.length}
                  </span>
                )}
              </button>

              <Container className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="cursor-pointer appearance-none rounded-2xl border border-[#C7C7C7] bg-white py-2 pl-3 pr-8 text-[12.5px] font-inter text-black focus:outline-none lg:py-2.25 lg:pl-5 lg:pr-10 lg:text-[16px]"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      <span className="hidden lg:inline">Sort: </span>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-black lg:right-3.5 lg:size-4"
                />
              </Container>
            </Container> */}
          {/* </Container> */}
          {/* Count + sort */}
          <Container className="mt-6 flex-wrap items-center justify-between gap-y-3 lg:mt-5 lg:flex-nowrap">
            <Typography className="font-outfit text-[19px] font-bold text-[#24232D] lg:text-[24px]">
              {filteredProducts.length} products
            </Typography>

            <Container className="ml-auto items-center gap-2">
              {/* Mobile filter trigger */}
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-[#E7E7EA] px-3 py-1.5 text-[12.5px] font-semibold text-[#24232D] lg:hidden"
              >
                <SlidersHorizontal size={13} />
                Filters
                {activeChips.length > 0 && (
                  <span className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#9B1B32] text-[10px] font-bold text-white">
                    {activeChips.length}
                  </span>
                )}
              </button>

              <Container className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="cursor-pointer appearance-none rounded-full border border-[#C7C7C7] bg-white py-1.5 pl-3 pr-7 text-[12.5px] font-inter text-black focus:outline-none lg:rounded-2xl lg:py-2.25 lg:pl-5 lg:pr-10 lg:text-[16px]"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      Sort: {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={13}
                  className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-black lg:right-3.5 lg:size-4"
                />
              </Container>
            </Container>
          </Container>
          {activeChips.length > 0 && (
            <Container className="mt-3 lg:mt-5 items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {activeChips.map(({ groupId, option }) => (
                <button
                  key={`${groupId}-${option}`}
                  type="button"
                  onClick={() => toggleOption(groupId, option)}
                  className="flex cursor-pointer items-center font-inter gap-1.5 rounded-full border border-[#9B1B32] px-3 py-1.5 text-[13px] lg:text-[16px] font-medium text-[#9B1B32]"
                >
                  {option}
                  <X size={12} />
                </button>
              ))}
              <button
                type="button"
                onClick={clearAll}
                className="cursor-pointer text-[12.5px] lg:text-[14px] font-inter font-semibold text-[#9B1B32] hover:opacity-80"
              >
                Clear all
              </button>
            </Container>
          )}
          {/* Body: sidebar + grid */}
          <Container
            width="fullWidth"
            className="mt-10 flex-col gap-8 lg:gap-10 lg:flex-row lg:items-start"
          >
            {/* Desktop sidebar */}
            <Container className="hidden w-[280px] shrink-0 flex-col lg:flex">
              <FilterSidebar
                search={search}
                onSearchChange={setSearch}
                openGroups={openGroups}
                onToggleGroup={toggleGroup}
                selected={selected}
                onToggleOption={toggleOption}
              />
            </Container>

            {/* Products + pagination */}
            <Container width="fullWidth" className="flex-1 flex-col">
              {paginatedProducts.length === 0 ? (
                <Container className="flex-col items-center justify-center rounded-2xl border border-dashed border-[#E7E7EA] py-16 text-center">
                  <Typography className="m-0 font-outfit text-[16px] font-bold text-[#24232D]">
                    No products match these filters
                  </Typography>
                  <Typography className="m-0 mt-1 text-[14px] text-gray-500">
                    Try removing a filter or clearing them all.
                  </Typography>
                </Container>
              ) : (
                <Container
                  width="fullWidth"
                  className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </Container>
              )}

              {totalPages > 1 && (
                <Container className="mt-10 items-center justify-center lg:justify-start">
                  <Pagination
                    page={page}
                    totalPages={totalPages}
                    onChange={changePage}
                  />
                </Container>
              )}
            </Container>
          </Container>
        </Container>

        {/* Mobile filter drawer */}
        {mobileFiltersOpen && (
          <>
            <Container
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            />
            <Container className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-[340px] flex-col overflow-y-auto bg-white px-5 pb-6 pt-5 lg:hidden">
              <Container className="items-center justify-between">
                <Typography className="m-0 font-outfit text-[17px] font-bold text-[#24232D]">
                  Filters
                </Typography>
                <button
                  type="button"
                  aria-label="Close filters"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center text-gray-500"
                >
                  <X size={18} />
                </button>
              </Container>

              <Container className="mt-4">
                <FilterSidebar
                  search={search}
                  onSearchChange={setSearch}
                  openGroups={openGroups}
                  onToggleGroup={toggleGroup}
                  selected={selected}
                  onToggleOption={toggleOption}
                />
              </Container>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="mt-6 w-full cursor-pointer rounded-full bg-[#9B1B32] py-3.5 text-[15px] font-semibold text-white"
              >
                Show {filteredProducts.length} products
              </button>
            </Container>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}
