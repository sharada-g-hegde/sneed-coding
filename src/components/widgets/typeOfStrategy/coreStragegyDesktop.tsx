import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export default function CoreStrategyDesktop() {
  return (
    <Container className="relative flex min-h-100 w-auto flex-col items-center justify-center overflow-hidden rounded-t-3xl lg:mx-6 lg:mt-6">
      <Media
        src="/images/Frame_469 (1).png"
        alt="Fixed income strategies"
        fill
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Container className="relative z-10 flex-col items-center px-8 py-22">
        <Typography className="font-brandon-grotesque  pt-2 text-center text-[32px] leading-10 text-white lg:pt-6 lg:text-[2.5rem] lg:leading-14">
          Core & Core Plus Strategies
        </Typography>
        <Typography className="font-albertSans mb-5 lg:text-[16px] text-[16px] text-white mt-6 text-center">
          Explore these strategies through a dedicated Separately Managed
          Accounts (SMA) tailored to your objectives.
        </Typography>
        <Link
          variant="Link"
          href="#"
          className="font-albertSans  cursor-pointer text-center font-semibold  bg-white/83 text-gray-700 text-[14px] lg:text-[14px] rounded-[100px] px-5 py-2 lg:mt-0"
        >
          Discuss an SMA Strategy
        </Link>
      </Container>
    </Container>
  );
}
