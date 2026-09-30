import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

type PainPoint =
  | string
  | {
      title: string;
      description?: string;
    };

type PainPointsSectionProps = {
  heading: string;
  /** Optional paragraph shown under the heading (left column) */
  description?: string;
  points: PainPoint[];
  variant?: "light" | "dark";
};

const THEMES = {
  light: {
    section: "bg-[#F0EFEA]",
    heading: "text-[#272631]",
    intro: "text-[#525159]",
    card: "bg-white border-transparent",
    cardText: "text-[#272631]",
    description: "text-[#525159]",
    icon: "#D7A3A4",
  },
  dark: {
    section: "bg-[#272631]",
    heading: "text-white",
    intro: "text-white/80",
    card: "bg-transparent border-white/40",
    cardText: "text-white",
    description: "text-white",
    icon: "#D7A3A4",
  },
} as const;

export default function PainPointsSection({
  heading,
  description,
  points,
  variant = "light",
}: PainPointsSectionProps) {
  const theme = THEMES[variant];

  return (
    <Container width="fullWidth" className="flex-col items-center lg:p-4">
      <Container
        className={`3xl:max-w-[120rem] w-full 2xl:max-w-360 flex-col gap-8 rounded-3xl px-4 py-10 lg:grid lg:grid-cols-2 lg:gap-10 lg:rounded-4xl lg:px-10 lg:py-16 ${theme.section}`}
      >
        <Container className="flex-col gap-8 lg:sticky  lg:top-28 lg:self-start lg:pl-2">
          <Typography
            className={`m-0 font-outfit lg:whitespace-pre-line text-[32px] leading-tight font-semibold lg:text-[56px] lg:leading-[1.15] ${theme.heading}`}
          >
            {heading}
          </Typography>

          {description && (
            <Typography
              className={`m-0 max-w-140 font-inter text-[16px] leading-6! lg:text-[16px] lg:leading-6! ${theme.intro}`}
            >
              {description}
            </Typography>
          )}
        </Container>

        {/* Feature cards: single column stack */}
        <Container className="grid grid-cols-1 gap-4">
          {points.map((point, index) => {
            const item = typeof point === "string" ? { title: point } : point;

            return (
              <Container
                key={index}
                className={`min-w-0 flex-col gap-5 lg:gap-6 rounded-[20px] border p-6  lg:p-8 ${theme.card}`}
              >
                {/* Icon + title on one row */}
                <Container className="items-center gap-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                    className="shrink-0"
                  >
                    <path
                      d="M13.3195 30.3333C13.0528 30.3333 12.8395 30.28 12.6795 30.2133C12.1461 30.0133 11.2395 29.36 11.2395 27.2933V18.6933H8.11945C6.33279 18.6933 5.69279 17.8533 5.46612 17.36C5.23945 16.8533 5.03945 15.8267 6.21279 14.48L16.3061 3.01334C17.6661 1.46668 18.7728 1.57334 19.3061 1.77334C19.8395 1.97334 20.7461 2.62668 20.7461 4.69334V13.2933H23.8661C25.6528 13.2933 26.2928 14.1333 26.5195 14.6267C26.7461 15.1333 26.9461 16.16 25.7728 17.5067L15.6795 28.9733C14.7328 30.0533 13.9061 30.3333 13.3195 30.3333ZM18.5728 3.65334C18.5328 3.70668 18.2528 3.84001 17.8128 4.34667L7.71945 15.8133C7.34612 16.24 7.29279 16.5067 7.29279 16.56C7.31945 16.5733 7.55945 16.7067 8.11945 16.7067H12.2395C12.7861 16.7067 13.2395 17.16 13.2395 17.7067V27.3067C13.2395 27.9733 13.3595 28.2667 13.4128 28.3467C13.4528 28.2933 13.7328 28.16 14.1728 27.6533L24.2661 16.1867C24.6395 15.76 24.6928 15.4933 24.6928 15.44C24.6661 15.4267 24.4261 15.2933 23.8661 15.2933H19.7461C19.1995 15.2933 18.7461 14.84 18.7461 14.2933V4.69334C18.7595 4.02667 18.6261 3.74668 18.5728 3.65334Z"
                      fill={theme.icon}
                    />
                  </svg>

                  <Typography
                    className={`m-0 font-outfit text-[18px] leading-snug font-semibold lg:text-[24px] ${theme.cardText}`}
                  >
                    {item.title}
                  </Typography>
                </Container>

                {"description" in item && item.description && (
                  <Typography
                    className={`m-0 font-inter text-[14px] lg:text-[14px] leading-5 ${theme.description}`}
                  >
                    {item.description}
                  </Typography>
                )}
              </Container>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
}
