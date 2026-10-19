import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

export default function Objective() {
  return (
    <Container className="flex-col gap-4 rounded-3xl px-2 lg:px-6">
      <Typography className="text-[#124363] font-brandon-grotesque lg:text-[24px] text-[20px]">
        Objective
      </Typography>
      <Typography className="font-albertSans lg:text-[16px] text-[16px] text-[#2F3B47]">
        The Payden Core Bond Strategies are built to serve as a foundational,
        multi-sector fixed income allocation. The strategies are designed to
        deliver long-term total return above an aggregate benchmark through
        active management of interest rate and credit risk. By drawing from a
        broad range of sectors and maintaining flexibility across the yield
        curve, the strategy seeks to outperform traditional benchmarks.
        <br />
        <br />
        These strategies are designed for institutional investors seeking more
        than just index exposure. They are solutions designed to meet evolving
        market conditions, aiming to add value through active decision-making
        across governments, corporates, securitized credit and opportunistic
        sectors.
        <br />
        <br />
        The strategies can be tailored to accommodate varying risk tolerances
        and return objectives, meeting investors’ specific goals.
      </Typography>
    </Container>
  );
}
