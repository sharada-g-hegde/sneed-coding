"use client";

import { useState } from "react";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";
import Link from "@/components/elements/link";

type Breadcrumb = {
  label: string;
  href: string;
};

type ProductDetailHeroProps = {
  breadcrumbs: Breadcrumb[];
  currentLabel: string;
  images: string[];
  badge?: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  description: string;
  guaranteeText?: string;
  onAddToCart?: (quantity: number) => void;
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
            i < Math.round(rating)
              ? "h-4.5 w-4.5 fill-[#770000] text-[#770000]"
              : "h-4.5 w-4.5 fill-red-100 text-red-100"
          }
        />
      ))}
      <Typography className="ml-1 font-inter text-[14px] text-gray-500">
        ({reviewCount})
      </Typography>
    </Container>
  );
}

export default function ProductDetailHero({
  breadcrumbs,
  currentLabel,
  images,
  badge,
  title,
  rating,
  reviewCount,
  price,
  originalPrice,
  description,
  guaranteeText,
  onAddToCart,
}: ProductDetailHeroProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const goPrev = () =>
    setActiveImage((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () =>
    setActiveImage((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <Container width="fullWidth" className="flex-col items-center">
      <Container className="3xl:max-w-[120rem] w-full 2xl:max-w-360 flex-col gap-6 px-4 pt-16 pb-10 lg:px-16 lg:pt-29 lg:pb-20">
        <Container className="items-center flex-wrap font-inter text-[14px] text-gray-500">
          {breadcrumbs.map((crumb, i) => (
            <Container key={i} className="items-center gap-1">
              <Link
                href={crumb.href}
                variant="Link"
                className="hover:text-gray-700"
              >
                {crumb.label}
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="mr-1"
              >
                <path
                  d="M2.5 6H9.5M6.5 9L9.5 6L6.5 3"
                  stroke="#7D7C82"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Container>
          ))}
          <Typography className="m-0 font-inter text-[14px] lg:text-[14px] text-[#272631]">
            {currentLabel}
          </Typography>
        </Container>

        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <Container className="flex-col gap-4">
            <Container className="relative min-w-0 items-center justify-center overflow-hidden rounded-3xl bg-neutral-100 p-6 lg:p-10">
              <Container className="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl">
                <Media
                  src={images[activeImage]}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </Container>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#272631] text-white transition-colors hover:bg-black lg:left-5 lg:h-11 lg:w-11"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#272631] text-white transition-colors hover:bg-black lg:right-5 lg:h-11 lg:w-11"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </Container>

            {images.length > 1 && (
              <Container className="flex-nowrap items-center gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {images.map((image, index) => {
                  const isActive = index === activeImage;
                  return (
                    <button
                      key={image + index}
                      type="button"
                      aria-label={`Show image ${index + 1}`}
                      onClick={() => setActiveImage(index)}
                      className={`relative h-18.5 w-25 shrink-0 cursor-pointer overflow-hidden rounded-xl border transition-colors lg:h-20.5 lg:w-27.5 ${
                        isActive
                          ? "border-2 border-[#272631]"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <Media
                        src={image}
                        alt={`${title} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </Container>
            )}
          </Container>

          <Container className="min-w-0 flex-col justify-start gap-5">
            {badge && (
              <span className="w-fit rounded-full bg-red-800 px-3.5 py-1.5 font-outfit text-[13px] font-semibold text-white">
                {badge}
              </span>
            )}

            <Typography className="m-0 font-outfit text-[36px] leading-[1.15] font-bold text-[#272631] lg:text-[52px]">
              {title}
            </Typography>

            <StarRating rating={rating} reviewCount={reviewCount} />

            <Container className="items-baseline gap-3">
              <Typography className="m-0 font-outfit text-[28px] font-bold text-[#770000] lg:text-[32px]">
                ₹{price.toLocaleString()}
              </Typography>
              {originalPrice && (
                <Typography className="m-0 font-inter text-[18px] text-gray-400 line-through">
                  ₹{originalPrice.toLocaleString()}
                </Typography>
              )}
            </Container>

            <Typography className="m-0 font-inter text-[16px] leading-6.5 text-gray-500">
              {description}
            </Typography>

            <Container className="items-center gap-4 pt-1">
              <Container className="items-center gap-4 rounded-full border border-gray-200 px-4 py-2.5">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-5 w-5 cursor-pointer items-center justify-center text-gray-500 hover:text-[#272631]"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <Typography className="m-0 w-4 text-center font-outfit text-[16px] font-semibold text-[#272631]">
                  {quantity}
                </Typography>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-5 w-5 cursor-pointer items-center justify-center text-gray-500 hover:text-[#272631]"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </Container>

              <button
                type="button"
                onClick={() => onAddToCart?.(quantity)}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-[#770000] px-6 py-3.5 font-outfit text-[16px] font-semibold text-white transition-colors hover:bg-red-950"
              >
                <ShoppingCart className="h-4.5 w-4.5" />
                Add to Cart
              </button>
            </Container>

            {guaranteeText && (
              <Typography className="m-0 font-inter text-[14px] text-gray-500">
                {guaranteeText}
              </Typography>
            )}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
