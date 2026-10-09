import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

const INVESTMENT_CARDS = [
  {
    image: "/images/Rectangle_1.webp",
    title: "U.S. Funds",
    description:
      "Offering a diversified lineup of equity, fixed income, and cash balance funds across the risk and return spectrum.",
    cta: "Explore U.S. Funds",
    href: "/",
  },
  {
    image: "/images/Rectangle_1.webp",
    title: "UCITS Funds",
    description:
      "A family of UCITS compliant offshore funds domiciled in Dublin, featuring bond and equity strategies that range from short-term cash management to global fixed income and equity investments.",
    cta: "Explore U.S. Funds",
    href: "/",
  },
  {
    image: "/images/Rectangle_1.webp",
    title: "AIF",
    description:
      "The Payden Multi Asset Credit Fund, domiciled in Dublin under Payden Global AIF ICAV, reflects a proven and disciplined investment process tailored for a Qualifying Investor Alternative Investment Fund.",
    cta: "Explore U.S. Funds",
    href: "/",
  },
];

export default function Investement() {
  return (
    <Container width="fullWidth" className="bg-[#0e2f45] justify-center">
      <Container className="w-full 2xl:max-w-480 px-4 py-20 lg:px-16 lg:py-28">
        <Container className="w-full flex-col gap-20">
          <Container className="flex-col items-center">
            <Typography className="max-w-225 text-center text-[36px] lg:text-[48px] text-white">
              Explore Our Investment Vehicles
            </Typography>
            <Typography className="text-white max-w-230 mt-5 lg:leading-6! text-center font-albertSans text-[16px] lg:text-[16px]">
              At Payden & Rygel, we offer a diverse selection of vehicles to
              meet various investment objectives including fixed income, equity
              and liquidity management.
            </Typography>
          </Container>
          <Container className="w-full flex-col">
            <Container className="w-full relative grid gap-16 lg:gap-8 xl:grid-cols-3 md:grid-cols-2">
              {INVESTMENT_CARDS.map((card, index) => (
                <Container
                  key={`${card.title}-${index}`}
                  className="flex w-auto bg-[#124363] group relative flex-col rounded-xl"
                >
                  <Media
                    src={card.image}
                    alt=""
                    width={832}
                    height={466}
                    className="rounded-t-xl"
                  />
                  <Container className="h-full flex-col items-start gap-4 p-8">
                    <Typography className="text-white text-[18px] lg:text-[24px] font-semibold">
                      {card.title}
                    </Typography>
                    <Typography className="text-white lg:text-[16px] text-[16px] font-albertSans">
                      {card.description}
                    </Typography>
                    <Container className="mt-auto">
                      <Link
                        href={card.href}
                        variant="Link"
                        className="font-albertSans cursor-pointer text-center font-semibold duration-300 bg-[#0d2f45] text-white text-md leading-small rounded-[6.25rem] px-5 py-2 shadow-[2px_2px_6px_0_rgba(7,26,39,0.10)] backdrop-blur-md w-auto mt-6  group-hover:backdrop-blur-xl group-hover:shadow-[4px_4px_6px_0px_#071A2726]"
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
