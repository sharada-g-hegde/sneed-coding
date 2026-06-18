import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

const StarIcon = () => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <g clipPath="url(#clip0_4101_88)">
      <path
        d="M6.00713 13C5.20809 9.93862 2.93936 7.48661 0 6.5C2.93936 5.51339 5.20809 3.06138 6.00713 0C6.80618 3.06138 9.07491 5.51339 12.0143 6.5C9.07491 7.48661 6.80618 9.93862 6.00713 13Z"
        fill="#EAE5D7"
      />
    </g>
    <defs>
      <clipPath id="clip0_4101_88">
        <rect width="12" height="13" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function Carousel() {
  return (
    <Container className="overflow-hidden bg-teal-700 py-2.5">
      <Container className="marquee">
        <Container className="marquee-content">
          {Array.from({ length: 25 }).map((_, i) => (
            <Typography
              key={i}
              className="flex items-center md:leading-[100%] leading-[100%] gap-3 mx-3 whitespace-nowrap font-sans md:text-[24px] text-[24px] font-normal text-ivory"
            >
              Promo Headline
              <StarIcon />
            </Typography>
          ))}

          {Array.from({ length: 25 }).map((_, i) => (
            <Typography
              key={`duplicate-${i}`}
              className="flex items-center md:leading-[100%] leading-[100%] gap-3 mx-2 whitespace-nowrap font-sans md:text-[24px] text-[24px] font-normal text-ivory"
            >
              Promo Headline
              <StarIcon />
            </Typography>
          ))}
        </Container>
      </Container>
    </Container>
  );
}
