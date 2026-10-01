"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import Media from "@/components/elements/media";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Link from "@/components/elements/link";
import { cn } from "@/utils";

export interface BenefitVideo {
  label: string;
  youtubeId: string;
}

interface VideoBenefitsSectionProps {
  heading?: string;
  videos: BenefitVideo[];
}

const thumbnailOf = (youtubeId: string) =>
  `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

function VideoCard({
  video,
  onOpen,
  className,
}: {
  video: BenefitVideo;
  onOpen: (video: BenefitVideo) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      aria-label={`Open video: ${video.label}`}
      className={cn(
        "group relative aspect-video w-full cursor-pointer overflow-hidden rounded-3xl bg-gray-200 text-left",
        className,
      )}
    >
      <Media
        src={thumbnailOf(video.youtubeId)}
        alt={video.label}
        fill
        className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* bottom gradient so the label stays readable */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-linear-to-t from-black/70 to-transparent" />

      {/* play button */}
      <span className="absolute left-1/2 top-1/2 z-20 flex h-15 w-15 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#24232D] shadow-md transition-transform duration-200 group-hover:scale-110">
        <Play size={26} fill="currentColor" strokeWidth={0} className="ml-1" />
      </span>

      {/* label */}
      <span className="absolute bottom-4 left-4 z-20 font-outfit text-[16px] font-semibold text-white lg:bottom-5 lg:left-5 lg:text-[18px]">
        {video.label}
      </span>
    </button>
  );
}

export default function VideoBenefitsSection({
  heading = "More benefits You'll love",
  videos,
}: VideoBenefitsSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<BenefitVideo | null>(null);

  useEffect(() => {
    if (!selectedVideo) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedVideo(null);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  const [first, ...rest] = videos;

  return (
    <>
      <Container width="fullWidth" className="flex-col items-center p-4">
        <Container className="3xl:max-w-[120rem] w-full flex-col gap-6 2xl:max-w-360 lg:gap-8 lg:px-10">
          <Typography className="m-0 font-outfit text-[28px] leading-tight font-semibold text-[#272631] lg:text-[56px]">
            {heading}
          </Typography>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {first && (
              <VideoCard
                video={first}
                onOpen={setSelectedVideo}
                className="lg:row-span-2 lg:aspect-auto lg:h-full"
              />
            )}
            {rest.map((video) => (
              <VideoCard
                key={video.youtubeId + video.label}
                video={video}
                onOpen={setSelectedVideo}
                className="lg:aspect-[2.3/1]"
              />
            ))}
          </div>
        </Container>
      </Container>

      {/* Popup: click the thumbnail to continue to YouTube */}
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
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
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
                src={thumbnailOf(selectedVideo.youtubeId)}
                alt={selectedVideo.label}
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

              <Container className="absolute bottom-2 right-2! rounded-2xl bg-black/50 px-2 py-2 text-[12px] font-medium text-white backdrop-blur-sm lg:bottom-6 lg:right-6 lg:px-5 lg:py-4 lg:text-sm">
                Watch on YouTube
              </Container>
            </Link>
          </Container>
        </Container>
      )}
    </>
  );
}
