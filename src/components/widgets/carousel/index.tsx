"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play, X } from "lucide-react";
import Media from "@/components/elements/media";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Link from "@/components/elements/link";

const PRODUCTS = [
  {
    title: "SNEED-JET® Titan Printer",
    youtubeId: "LewByX7gX_I",
    description:
      "Explore five real-world SNEED-JET® Titan applications, from bright-ink printing to packaging and automated production lines.",
    duration: "2:34",
  },
  {
    title: "SNEED-JET® Titan — Provincial Spirits",
    youtubeId: "LewByX7gX_I",
    description:
      "See a SNEED-JET® Titan printer coding kombucha bottles with white ink for high-contrast date and lot codes.",
    duration: "2:34",
  },
  {
    title: "SNEED-JET® Titan — Fake Meats",
    youtubeId: "l71-IEzfRNQ",
    description:
      "See how Fake Meats integrated the SNEED-JET® Titan into a pouch-filling production line for date coding.",
    duration: "2:34",
  },
  {
    title: "SNEED-JET® Titan — Granola Factory",
    youtubeId: "l71-IEzfRNQ",
    description:
      "Watch a SNEED-JET® Titan integrated with a flow wrapper for clean and precise date-code printing.",
    duration: "2:34",
  },
];

export default function ProductVideoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [selectedVideo, setSelectedVideo] = useState<
    (typeof PRODUCTS)[number] | null
  >(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -395,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 395,
      behavior: "smooth",
    });
  };

  // Close popup with Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <>
      <section className="w-full overflow-hidden bg-white py-10 sm:py-16">
        <Container
          width="pageWidth"
          className="mx-auto flex-col pl-4 sm:pl-6 lg:pl-16"
        >
          <Container
            width="fullWidth"
            className="mb-6 flex-col items-start justify-between sm:mb-8 lg:flex-row lg:items-center"
          >
            <Typography className="m-0 font-outfit text-[32px] font-bold leading-[1.15] tracking-[-0.5px] sm:tracking-[-1.2px] lg:text-[56px] lg:tracking-[-1.5px]">
              See it running on your type of product
            </Typography>

            <Container className="mt-4 shrink-0 items-center justify-start gap-2 lg:ml-8 lg:mt-0 lg:gap-3 lg:pr-16">
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Previous products"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#9B1B32] bg-white text-[#9B1B32] transition-colors hover:bg-[#9B1B32] hover:text-white lg:h-11 lg:w-11"
              >
                <ArrowLeft size={20} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                onClick={scrollRight}
                aria-label="Next products"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#9B1B32] bg-white text-[#9B1B32] transition-colors hover:bg-[#9B1B32] hover:text-white lg:h-11 lg:w-11"
              >
                <ArrowRight size={20} strokeWidth={1.8} />
              </button>
            </Container>
          </Container>

          <div
            ref={carouselRef}
            className="scrollbar-none flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth pb-1 pl-4 pr-4 sm:gap-5 sm:pl-6 sm:pr-6 sm:snap-none lg:gap-4 lg:pl-0 lg:pr-0 [&::-webkit-scrollbar]:hidden"
          >
            {PRODUCTS.map((product) => {
              const thumbnail = `https://img.youtube.com/vi/${product.youtubeId}/maxresdefault.jpg`;

              return (
                <Container
                  key={product.title}
                  onClick={() => setSelectedVideo(product)}
                  className="group relative h-50 w-[80vw] shrink-0 cursor-pointer snap-start overflow-hidden rounded-[18px] bg-gray-200 xs:w-[280px] sm:h-100 sm:w-75 sm:snap-none lg:h-135 lg:w-100 lg:rounded-[21px]"
                >
                  {/* Thumbnail */}
                  <Media
                    src={thumbnail}
                    alt={product.title}
                    fill
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                  />

                  {/* Timer */}
                  <Container className="absolute bottom-4 right-3 z-10  rounded-full bg-[#8E1729] px-2 py-0.5 font-inter text-[14px] font-medium text-white sm:bottom-7 sm:right-5 sm:px-2.5 sm:py-1 lg:text-[12px]">
                    {product.duration}
                  </Container>

                  {/* Gradient overlay */}
                  <Container className="pointer-events-none absolute inset-0 z-20 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

                  {/* Play button */}
                  <Container className="absolute left-1/2 top-1/2 z-30 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#24232D] shadow-sm lg:h-15.5 lg:w-[62px]">
                    <Play
                      size={40}
                      fill="currentColor"
                      strokeWidth={0}
                      className="ml-1 sm:hidden"
                    />

                    <Play
                      size={27}
                      fill="currentColor"
                      strokeWidth={0}
                      className="ml-1 hidden sm:block"
                    />
                  </Container>

                  <Container className="absolute bottom-4 left-4 right-16 z-40 flex-col sm:bottom-7 sm:left-6 sm:right-24">
                    <Typography className="m-0 font-outfit text-[18px] font-semibold leading-tight text-white sm:text-lg lg:text-[21px]">
                      {product.title}
                    </Typography>

                    <Container className="hidden max-h-0 overflow-hidden transition-[max-height,margin-top] duration-300 ease-in-out group-hover:mt-1.5 group-hover:max-h-32 sm:block">
                      <Typography className="m-0 text-[12px] lg:leading-6! text-white lg:text-[18px]">
                        {product.description}
                      </Typography>
                    </Container>
                  </Container>
                </Container>
              );
            })}
          </div>
        </Container>
      </section>

      {selectedVideo && (
        <Container
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <Container
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
            >
              <X size={22} />
            </button>

            <Link
              variant="Link"
              href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video w-full cursor-pointer"
            >
              <Media
                src={`https://img.youtube.com/vi/${selectedVideo.youtubeId}/maxresdefault.jpg`}
                alt={selectedVideo.title}
                fill
                className="absolute inset-0 h-full w-full object-cover"
              />

              <Container className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />

              <Container className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff0033] text-white shadow-xl transition-transform duration-200 group-hover:scale-110">
                <Play
                  size={38}
                  fill="currentColor"
                  strokeWidth={0}
                  className="ml-1"
                />
              </Container>

              <Container className="absolute lg:bottom-6 bottom-2 lg:right-6 right-2! rounded-2xl bg-black/50 px-2 py-2 lg:px-5 lg:py-4 text-[12px] lg:text-sm font-medium text-white backdrop-blur-sm">
                Watch on YouTube
              </Container>
            </Link>
          </Container>
        </Container>
      )}
    </>
  );
}
