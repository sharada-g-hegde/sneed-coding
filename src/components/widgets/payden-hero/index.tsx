import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export default function FundsHero() {
  return (
    <Container width="fullWidth" className="flex-col items-center scroll-mt-31">
      <Container width="pageWidth" className="relative flex-col items-center">
        <Media
          src="/images/funds-hero.webp"
          alt=""
          width={1800}
          height={700}
          className="absolute"
        />
        <Container className="w-full relative 2xl:max-w-480 z-10 flex-col gap-1.5 px-4 lg:px-16 pt-28 pb-16">
          <Container className="max-w-160 flex-col gap-6 lg:gap-10">
            <Typography className="font-semibold text-white lg:text-[64px]">
              U.S. Funds{" "}
            </Typography>
            <Typography className="font-medium text-white font-albertSans leading-6 lg:leading-7! lg:text-[18px]">
              Discover a diverse range of U.S. funds designed to support a
              variety of investment objectives.
            </Typography>
            <Container className="flex mt-6 w-full gap-4"></Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
