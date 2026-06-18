import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  image: string;
  imageSize: string;
}

const services: Service[] = [
  {
    title: "Be your best you",
    description: "Explore your life direction  and grow as a person.",
    image: "/images/card-1.png",
    imageSize: "md:h-[236px] md:w-[203px] w-[114px] h-[132px]",
  },
  {
    title: "Healthy Relationships",
    description: "Heal and grow your relationships with those you care about.",
    image: "/images/card-2.png",
    imageSize: "md:h-[224px] md:w-[224px] w-[131px] h-[131px]",
  },
  {
    title: "Your Wellbeing",
    description:
      "Learn techniques that can help you live a calmer, healthier life.",
    image: "/images/card-3.png",
    imageSize: "md:h-[198px] md:w-[256px] w-[131px] h-[131px]",
  },
  {
    title: "Connected Parenting",
    description: "Strengthen family bonds and connect with your kids.",
    image: "/images/card-4.png",
    imageSize: "md:h-[221px] md:w-[221px] w-[131px] h-[131px]",
  },
  {
    title: "Growing at Work",
    description:
      "Get help setting and meeting goals at work and for your career.",
    image: "/images/card-5.png",
    imageSize: "md:h-[254px] md:w-[197px] w-[131px] h-[141px]",
  },
  {
    title: "Becoming You",
    description:
      "Connect with your authentic self with LGBTQ+ affirming therapy.",
    image: "/images/card-6.png",
    imageSize: "md:h-[237px] md:w-[203px] w-[131px] h-[131px]",
  },
  {
    title: "Enjoying Independence",
    description: "Make the most of life on your own.",
    image: "/images/card-7.png",
    imageSize: "md:h-[237px] md:w-[203px] w-[131px] h-[131px]",
  },
];

export default function ServicesGrid() {
  return (
    <Container
      width="fullWidth"
      className="bg-ivory px-6 py-16 justify-center items-center"
    >
      <Container width="pageWidth" className="">
        <Container className="grid mx-auto justify-items-center items-center  grid-cols-2 gap-x-4 gap-y-6 md:gap-x-4 md:gap-y-14 lg:grid-cols-3">
          {services.map((service) => (
            <Container
              key={service.title}
              className="flex-col items-center text-center"
            >
              <Container className="mb-6 flex lg:h-65 items-end justify-center">
                <Container className={`relative ${service.imageSize}`}>
                  <Media
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover h-full w-auto"
                  />
                </Container>
              </Container>

              <Typography className="lg:mb-2 md:text-[36px] text-[20px] font-light lg:font-thin font-fraunces text-teal-700 ">
                {service.title}
              </Typography>

              <Typography className="lg:mb-6 mb-2 lg:mt-1 md:text-[18px] text-[14px] max-w-70 md:leading-5 text-teal-700 font-sans font-light lg:font-normal">
                {service.description}
              </Typography>

              <Container className=" items-center gap-5 hidden md:flex">
                <Link
                  href="/"
                  className="flex min-w-34.5 font-sans md:text-[16px] text-[16px] font-normal justify-center rounded-full border border-transparent bg-teal-700 px-5 py-3.5 text-xs tracking-wide text-ivory transition-colors hover:border-teal-700 hover:bg-transparent hover:text-teal-700"
                >
                  Learn more
                </Link>

                <span className="text-teal-700">+</span>

                <Link
                  href="/"
                  className="flex min-w-35.25 font-sans md:text-[16px] text-[16px] font-normal justify-center rounded-full border border-transparent bg-teal-700 px-5 py-3.5 text-xs tracking-wide text-ivory transition-colors hover:border-teal-700 hover:bg-transparent hover:text-teal-700"
                >
                  Book appt
                </Link>
              </Container>
              <Container className="flex-col items-center gap-4 md:hidden">
                <Link
                  href="/"
                  className="flex min-w-34.5 font-sans md:text-[16px] text-[16px] font-normal justify-center rounded-full border border-transparent bg-teal-700 px-5 py-2 text-xs tracking-wide text-ivory transition-colors hover:border-teal-700 hover:bg-transparent hover:text-teal-700"
                >
                  Learn more
                </Link>

                <Link
                  href="/"
                  className="flex min-w-35.25 font-sans md:text-[16px] text-[16px] font-normal justify-center rounded-full border border-transparent bg-teal-700 px-5 py-2 text-xs tracking-wide text-ivory transition-colors hover:border-teal-700 hover:bg-transparent hover:text-teal-700"
                >
                  Book appt
                </Link>
              </Container>
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
}
