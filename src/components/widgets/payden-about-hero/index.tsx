import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export default function AboutHero() {
  return (
    <Container
      width="fullWidth"
      className="relative flex-col items-center justify-center overflow-hidden"
    >
      <Media
        src="/images/About_Us_Hero.webp"
        alt=""
        fill
        className="object-cover object-top lg:object-center"
      />

      <Container
        width="fullWidth"
        className="relative z-10 flex-col items-center gap-6 px-4 py-16 text-white md:py-30 lg:max-w-240 lg:px-16"
      >
        <Typography className="text-center font-brandon-grotesque text-[35px] font-normal lg:text-[64px] lg:leading-22!">
          Where Insight Meets Active Management
        </Typography>
        <Typography className="text-center font-albertSans text-[18px] lg:text-[18px]">
          Payden & Rygel is an independent global investment manager. We combine
          a collaborative culture, deep client focus, and rigorous risk
          management to build highly customized portfolios that deliver
          meaningful results.
        </Typography>
      </Container>
    </Container>
  );
}
