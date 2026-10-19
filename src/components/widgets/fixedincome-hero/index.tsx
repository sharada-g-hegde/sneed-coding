import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export default function FixedIncomeStrategyHero() {
  return (
    <Container
      width="fullWidth"
      className="items-center justify-center flex-col"
    >
      <Media
        src="/images/Frame_442 (4).webp"
        alt="Fixed income investment background"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <Container
        width="fullWidth"
        className="2xl:max-w-480 z-10 flex-col mt-15 lg:mt-31 px-4 py-16 md:py-30 lg:py-30 lg:px-16 items-start"
      >
        <Container className="max-w-210">
          <Typography className="font-brandon-grotesque text-[2.5rem] leading-12 text-white! lg:text-[64px] lg:leading-20 lg:tracking-[-0.08rem]">
            Fixed Income Strategies
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}
