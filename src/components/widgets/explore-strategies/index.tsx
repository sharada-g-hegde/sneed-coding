import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

const cards = [
  {
    image: "/images/rectangle-3.webp",
    title: "Equity Income Strategy",
    description:
      "An equity strategy designed for risk-focused investors seeking income and long-term price appreciation.",
    href: "/strategies/equity-income",
  },
  {
    image: "/images/rectangle-2.webp", // TODO: real image
    title: "Unconstrained Strategies", // TODO
    description:
      "Designed to balance capital preservation and growth through the flexibility to invest across global credit markets.",
    href: "/strategies/second-strategy", // TODO
  },
  {
    image: "/images/rectangle-4.webp", // TODO: real image
    title: "Balanced Strategies", // TODO
    description:
      "A balanced strategy that combines U.S. stocks, bonds, and cash to support long-term growth and capital preservation, drawing on insights from Payden’s economists, strategists, and analysts.",
    href: "/strategies/third-strategy", // TODO
  },
];

export default function ExploreStrategies() {
  return (
    <Container className="w-full bg-white justify-center">
      <Container className="flex w-full 2xl:max-w-[120rem] px-[1rem] py-[5rem] lg:px-[4rem] lg:py-[7rem]">
        <Container className="w-full grid grid-cols-1 gap-[2rem] lg:grid-cols-4">
          <Container className="flex w-auto flex-col gap-[1rem] items-start">
            <Typography className="text-[#2F3B47] lg:text-[40px] font-brandon-grotesque text-[32px]">
              Explore more of our strategies
            </Typography>
          </Container>
          <Container className="flex w-full flex-col lg:col-span-3">
            <Container className="w-full relative grid gap-[4rem] lg:gap-[2rem] xl:grid-cols-3 grid-cols-[repeat(auto-fit,minmax(12.5rem,22.5rem))] justify-center">
              {cards.map((card) => (
                <Container
                  key={card.title}
                  className="flex w-auto bg-white relative flex-col gap-6 rounded-[0.75rem] outline-gray-200/50 hover:bg-gray-200/50 group hover:outline-[12px] max-w-[22.5rem] min-w-[12.5rem]"
                >
                  <Media
                    src={card.image}
                    alt={card.title}
                    width={608}
                    height={320}
                    className="w-full rounded-t-xl"
                  />
                  <Container className="flex w-auto h-full flex-col items-start gap-4">
                    <Typography className="text-[#2F3B47] lg:text-[24px] font-brandon-grotesque text-[20px]">
                      {card.title}
                    </Typography>
                    <Typography className="text-[#2F3B47] lg:text-[16px] font-albertSans text-[14px]">
                      {card.description}
                    </Typography>
                    <Container className="flex w-auto mt-auto">
                      <Link
                        href="/strategies/equity-income"
                        variant="Link"
                        className="font-albertSans cursor-pointer text-center font-semibold duration-300 sm:w-auto bg-[#154362] text-white hover:bg-teal-500/80 text-md leading-small rounded-[6.25rem] px-[1.25rem] py-[.5rem] shadow-[2px_2px_6px_0_rgba(7,26,39,0.10)] backdrop-blur-md w-auto mt-[1rem] lg:mt-[1.5rem] group-hover:bg-teal-500/80 group-hover:backdrop-blur-xl hover:shadow-[4px_4px_6px_0px_#071A2726]"
                      >
                        Explore Strategy
                      </Link>
                    </Container>
                  </Container>
                </Container>
              ))}
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
