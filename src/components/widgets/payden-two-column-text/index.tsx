import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

const STRATEGY_CARDS = [
  {
    image: "/images/Rectangle_1.webp",
    title: "Fixed Income Strategies",
    description:
      "Fixed income strategies focused on global bond markets, supported by research-driven analysis and active risk management.",
    cta: "Explore Strategies",
    href: "/",
  },
  {
    image: "/images/Rectangle_1.webp",
    title: "Unconstrained Strategies",
    description:
      "Designed to balance capital preservation and growth through the flexibility to invest across global credit markets.",
    cta: "Explore Strategies",
    href: "/",
  },
  {
    image: "/images/Rectangle_1.webp",
    title: "Equity Income Strategy",
    description:
      "An equity strategy designed for risk-focused investors seeking income and long-term price appreciation.",
    cta: "Explore Strategies",
    href: "/",
  },
  {
    image: "/images/Rectangle_1.webp",
    title: "Balanced Strategies",
    description:
      "A balanced strategy that combines U.S. stocks, bonds, and cash to support long-term growth and capital preservation, drawing on insights from Payden’s economists, strategists, and analysts.",
    cta: "Explore Strategies",
    href: "/",
  },
];

export default function PaydenTwoColumnText() {
  return (
    <Container width="fullWidth" className="bg-white justify-center">
      <Container
        width="fullWidth"
        className="2xl:max-w-480 px-4 py-20 lg:px-16 lg:py-28"
      >
        <Container className="w-full flex-col justify-center">
          <Container className="w-full 2xl:max-w-480 grid grid-cols-1 gap-6 xl:grid-cols-[48%_1fr] xl:gap-20">
            <Typography className="text-[36px] leading-11 lg:text-[48px] font-semibold lg:leading-16">
              The Art of Investing Through Tailored Strategies Designed to
              Preserve, Grow, and Protect.
            </Typography>
            <Typography className="text-[16px] lg:text-[16px] font-albertSans text-[#2F3B47]">
              We specialize in developing and managing customized investment
              strategies for institutional investors, including dedicated
              Separately Managed Accounts. Our approach integrates each client’s
              objectives with a rigorous understanding of market dynamics. Our
              experienced team delivers disciplined, innovative solutions
              designed to support long term success.
            </Typography>
          </Container>
          <Container className="mt-5 lg:mt-10 w-full flex-col">
            <Container className="w-full relative grid gap-16 lg:gap-8 xl:grid-cols-4 grid-cols-[repeat(auto-fit,minmax(12.5rem,22.5rem))] justify-center">
              {STRATEGY_CARDS.map((card, index) => (
                <Container
                  key={`${card.title}-${index}`}
                  className="bg-white relative flex-col gap-6 rounded-xl outline-gray-200/50 hover:bg-gray-200/50 group hover:outline-12 max-w-90 min-w-50"
                >
                  <Media
                    src={card.image}
                    alt=""
                    width={680}
                    height={320}
                    className="w-full rounded-t-xl"
                  />
                  <Container className="h-full flex-col items-start gap-4">
                    <Typography className="lg:text-[24px] font-albertSans font-semibold">
                      {card.title}
                    </Typography>
                    <Typography className="font-albertSans text-[16px] lg:text-[16px] text-[#2F3B47]">
                      {card.description}
                    </Typography>
                    <Container className="mt-auto">
                      <Link
                        href="/"
                        variant="Link"
                        className="font-albertSans cursor-pointer text-center font-semibold duration-300 sm:w-auto bg-[#4a748f] text-white hover:bg-teal-500 text-md leading-small rounded-[6.25rem] px-[1.25rem] py-[.5rem] shadow-[2px_2px_6px_0_rgba(7,26,39,0.10)] backdrop-blur-md w-auto mt-[1rem] lg:mt-[1.5rem] group-hover:bg-teal-500/80 group-hover:backdrop-blur-xl hover:shadow-[4px_4px_6px_0px_#071A2726]"
                      >
                        {card.cta}
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
