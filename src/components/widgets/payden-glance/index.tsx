import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

const GLANCE_STATS = [
  {
    icon: "/images/icon.webp",
    value: "$166 Billion",
    label: "Assets under management",
  },
  {
    icon: "/images/icon.webp",
    value: "400 +",
    label: "Client relationships worldwide",
  },
  {
    icon: "/images/icon.webp",
    value: "100%",
    label: "Employee Owned",
  },
];

export default function Glance() {
  return (
    <Container width="fullWidth" className="flex-col items-center">
      <Container width="fullWidth" className="bg-[#124363] justify-center">
        <Container
          width="fullWidth"
          className="2xl:max-w-480 py-20 lg:py-28 px-4 pt-7 pb-20 lg:px-16 lg:pb-28"
        >
          <Container className="w-full flex-col gap-20">
            <Container className="flex-col items-center">
              <Typography className="max-w-225 text-center lg:text-[48px] font-semibold text-[36px] text-white">
                Payden At A Glance
              </Typography>
              <Typography className="mt-4 lg:text-[18px] text-[18px] font-albertSans text-white">
                As of 6/30/2026
              </Typography>
            </Container>

            <Container className="w-full flex-col">
              <Container className="w-full relative grid gap-16 lg:gap-8 xl:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {GLANCE_STATS.map((stat, index) => (
                  <Container
                    key={`${stat.label}-${index}`}
                    className="flex-col items-center gap-6"
                  >
                    <Media src={stat.icon} alt="" width={57} height={57} />

                    <Container className="flex-col items-center gap-4 text-white">
                      <Typography className="text-[36px] font-semibold lg:text-[48px]">
                        {stat.value}
                      </Typography>
                      <Typography className="text-[16px] font-albertSans">
                        {stat.label}
                      </Typography>
                    </Container>
                  </Container>
                ))}
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
