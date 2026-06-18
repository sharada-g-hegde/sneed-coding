import Button from "@/components/button";
import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import Link from "next/link";

export default function Hero() {
  return (
    <Container
      width="fullWidth"
      className="flex-col  items-center justify-center"
    >
      <Container
        className="relative flex w-full items-center justify-center"
        style={{
          backgroundImage: "url('/images/background-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          width="pageWidth"
          className="flex-col mt-[50px] lg:mt-[116px] md:pl-[160px] md:pr-[119px] items-center gap-0 lg:gap-12 justify-center max-w-[1440px] xl:max-w-[1600px] md:flex-row-reverse mb-10"
        >
          <Media
            src="/images/homepage-header.png"
            alt="Hero Image"
            width={375}
            height={375}
            className="md:w-[616px] h-auto object-cover"
          />
          <Container className="flex-col gap-2 mt-0 lg:mt-7">
            <Typography
              variant="h1"
              className="font-fraunces tracking-[-0.05rem] md:text-left text-center text-teal-700"
            >
              Insight & Wellness
            </Typography>
            <Typography
              variant="p"
              className="text-center md:text-left font-sans leading-5.25 text-teal-700 font-normal mt-1.5 md:leading-5.25 md:max-w-[495px] max-w-[344px]"
            >
              A welcoming space for individuals, couples, and families focused
              on healing and growth. Together, we explore the roots of your
              concerns, distressing emotions, and limiting beliefs so that you
              can move toward meaningful change. Whatever your goals are and how
              you’d like to improve your life, we’re here to help you find the
              best path forward.
              <br />
              <br /> Please select an area below to learn more about our
              treatment options.
            </Typography>

            <Button
              variant="primary"
              href="/"
              className="lg:mt-14 mt-6 mx-auto md:mx-0 w-fit font-fraunces font-light text-[20px] md:text-[20px]"
            >
              Book an appointment
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
