import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export default function PaydenHomeHero() {
  return (
    <Container width="fullWidth" className="flex-col">
      <Container className="relative isolate w-full flex-col overflow-hidden">
        <Media
          src="/images/Test_3.webp"
          alt="hero"
          fill
          priority
          className="absolute inset-0 z-0 h-full w-full object-cover object-top lg:object-center"
        />

        <Container
          className="relative z-10 min-h-165 w-full items-center justify-center"
          style={{
            background:
              "linear-gradient(360deg, rgb(18, 67, 99) 0%, rgba(18, 67, 99, 0) 100%)",
          }}
        >
          <Container
            width="fullWidth"
            className="2xl:max-w-480 flex-col gap-6 px-4 py-16 md:py-30 lg:gap-16 lg:px-16 items-start"
          >
            <Container className="flex-col max-w-200">
              <Container className="flex-col gap-6">
                <Typography className="font-outfit font-semibold text-[40px] leading-12 text-white! lg:text-[64px] lg:leading-20 lg:tracking-[-0.08rem]">
                  40+ Years of Independent <br className="hidden lg:flex" />{" "}
                  Active Management
                </Typography>
                <Typography className="leading-7 lg:leading-7! font-albertSans text-[20px] lg:text-[18px] text-white">
                  Partnering with institutions since 1983 to deliver disciplined
                  fixed income, equity, and multi-asset strategies.Trusted by
                  institutional clients and advisors worldwide.
                </Typography>
                <Container className="mt-2 gap-4">
                  <Link
                    href=""
                    className="font-albertSans cursor-pointer text-center font-semibold duration-300 hover:text-white bg-white/25 text-white hover:bg-teal-500/60 rounded-[100px] px-6 py-[.62rem] text-lg leading-6 shadow-[2px_2px_6px_0_rgba(7,26,39,0.10)] backdrop-blur-md hover:shadow-[4px_4px_6px_0px_#071A2726] hover:backdrop-blur-xl"
                  >
                    Explore Investment Strategies
                  </Link>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
