import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

const stats = [
  {
    value: "4.9★",
    label: "Average Google Rating",
  },
  {
    value: "10,000+",
    label: "Businesses Served",
  },
  {
    value: "15,000+",
    label: "Printers Installed",
  },
  {
    value: "50+",
    label: "Countries Worldwide",
  },
];

export default function NumbersSection() {
  return (
    <Container
      width="fullWidth"
      className="px-0 py-0 sm:px-4 sm:py-4 lg:px-2 lg:py-0 items-center justify-center"
    >
      <Container
        width="pageWidth"
        className="relative overflow-hidden rounded-[28px] bg-[#540E0F] px-4 py-10 sm:px-6 sm:py-10 lg:min-h-143.75 lg:rounded-[36px] lg:px-[3.75%] lg:py-[5.8%]"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.075) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.075) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "27px 27px",
          }}
        />

        <Container
          width="fullWidth"
          className="relative z-10 flex-col lg:grid lg:grid-cols-[1fr_1fr]"
        >
          <Container width="fullWidth" className="flex-col lg:pt-[2%]">
            <Typography className="font-outfit font-bold tracking-[-0.035em] text-white text-[32px] sm:text-[30px] lg:text-[56px] lg:leading-17! leading-10 lg:tracking-[0.75px]">
              Numbers
              <br />
              We&apos;re Proud Of
            </Typography>
          </Container>

          <Container width="fullWidth" className="flex-col lg:pt-[3.5%]">
            <Typography className="max-w-full font-inter font-normal leading-[1.4] text-white/75 text-[16px] mt-6 sm:text-sm lg:mt-6 lg:max-w-150 lg:text-[16px]">
              Every system shares the same ink chemistry, controller, and
              service network — scaled from compact benchtop to heavy industrial
              deployment.
            </Typography>

            <Container
              width="fullWidth"
              className="mt-7 grid grid-cols-2 gap-x-8 gap-y-6 sm:mt-10 sm:gap-x-12 lg:mt-[18%] lg:grid-cols-2 lg:gap-x-[8%] lg:gap-y-[9%]"
            >
              {stats.map((stat) => (
                <Container
                  key={stat.label}
                  width="fullWidth"
                  className="flex-col"
                >
                  <Typography className="font-outfit font-bold leading-none tracking-[-0.035em] text-white text-[32px] sm:text-3xl lg:text-[56px]">
                    {stat.value}
                  </Typography>

                  <Typography className="mt-0 font-outfit font-semibold leading-none text-white/80 text-[18px] sm:text-sm lg:mt-3 lg:text-[20px]">
                    {stat.label}
                  </Typography>
                </Container>
              ))}
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
