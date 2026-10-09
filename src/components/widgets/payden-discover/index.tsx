import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export default function CtaBanner() {
  return (
    <Container className="relative isolate w-full justify-center overflow-hidden bg-[lightgray]">
      {/* Background image */}
      <Media
        src="/images/cta-banner.jpg"
        alt=""
        fill
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Colour overlay (the gradient layer from your CSS) */}
      <Container className="absolute inset-0 z-1 bg-[rgba(89,81,59,0.79)] mix-blend-multiply" />

      {/* Banner content */}
      <Container className="relative z-10 min-h-75 w-full flex-col items-center justify-center">
        <Container className="w-full 2xl:max-w-480 flex-col items-center gap-12 px-4 py-20 lg:px-16 lg:py-28">
          <Container className="flex-col items-center">
            <Typography className="max-w-225 lg:text-[48px] text-[36px] text-center text-white">
              Discover what’s possible
            </Typography>
            <Typography className="text-white lg:text-[18px] md:text-center text-[16px] font-albertSans mt-4">
              See how our investment approach supports your objectives across
              market cycles.
            </Typography>
            <Container className="flex-col items-center justify-center gap-4 md:flex-row mt-8 lg:mt-6">
              <Link
                href=""
                variant="Link"
                className="font-albertSans w-full cursor-pointer font-semibold duration-300 sm:w-auto bg-white/25 text-white hover:bg-teal-500/60 rounded-[6.25rem] px-[1.5rem] py-[.62rem] text-lg leading-[1.5rem] shadow-[2px_2px_6px_0_rgba(7,26,39,0.10)] backdrop-blur-md hover:shadow-[4px_4px_6px_0px_#071A2726] hover:backdrop-blur-xl max-sm:w-full text-center"
              >
                Connect With Us
              </Link>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
