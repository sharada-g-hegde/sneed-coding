import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

const features = [
  {
    icon: "/images/Building_Icon.webp",
    title: "Active Management",
    description:
      "Our investment teams evaluate markets, credit fundamentals, and relative value to build portfolios aligned with client objectives.",
  },
  {
    icon: "/images/Target_Icon.webp",
    title: "Client Focused",
    description:
      "Our clients engage directly with experienced investment teams to build customized strategies tailored to their objectives.",
  },
  {
    icon: "/images/Users_Icon.webp",
    title: "Investment Expertise",
    description:
      "Specialized investment teams combine deep credit research with disciplined portfolio management.",
  },
  {
    icon: "/images/Globe_Icon.webp",
    title: "Global Presence",
    description:
      "Our teams monitor markets around the world to identify opportunities across global fixed income and equity sectors.",
  },
];

export default function Descipline() {
  return (
    <Container className="w-full justify-center bg-gray-100">
      <Container className="w-full 2xl:max-w-480 grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-20 xl:px-16">
        <Container className=" flex-col gap-9.25 lg:gap-16">
          <Container className="flex-col gap-6 text-[#2F3B47]">
            <Typography className="xl:pr-[30%]  lg:text-[48px] text-[36px] lg:leading-16 font-brandon-grotesque">
              Where Experience Meets Discipline
            </Typography>
            <Typography className="leading-regular text-[16px] font-albertSans lg:text-[16px] lg:leading-6">
              Payden & Rygel approaches investing with experience, discipline,
              and care. Our investment teams apply a structured process grounded
              in research, risk awareness, and market understanding. We evaluate
              opportunities with close attention to liquidity, market structure,
              and implementation considerations. This consistent, analytical
              approach reflects our long-standing commitment to stewarding
              client assets across changing market environments.
            </Typography>
          </Container>
          <Container className="w-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-y-8.5 xl:gap-x-29">
            {features.map((feature, index) => (
              <Container key={index} className=" flex-col gap-2">
                <Media src={feature.icon} alt="" width={56} height={56} />
                <Typography className="lg:text-2xl text-[20px] text-[#2F3B47] leading-7 lg:text-[1.5rem] lg:leading-9">
                  {feature.title}
                </Typography>
                <Typography className="leading-regular text-[16px] font-albertSans text-[#2F3B47] lg:leading-6 mt-1 lg:text-lg">
                  {feature.description}
                </Typography>
              </Container>
            ))}
          </Container>
        </Container>
        <Container className="items-center">
          <Media
            src="/images/descipline-i1.webp"
            alt="image-description"
            width="640"
            height="640"
            className="w-full rounded-[1.25rem] object-cover h-82.25 md:min-h-full"
          ></Media>
        </Container>
      </Container>
    </Container>
  );
}
