import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="flex-col w-full items-center justify-center">
      <Container
        className="relative min-h-screen w-full"
        style={{
          backgroundImage: "url('/images/bg-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container className="flex-col items-center justify-center  md:flex-row-reverse mb-10">
          <Media
            src="/images/homepage-header.png"
            alt="Hero Image"
            width={377}
            height={377}
            className="md:w-[616px] h-auto object-cover"
          />
          <Container className="flex-col gap-2 ">
            <Typography className="font-fraunces md:text-left text-center text-teal-700 font-thin md:text-[44px] text-[40px] leading-[100%]">
              Insight & Wellness
            </Typography>
            <Typography
              variant="p"
              className="text-center md:text-left font-sans  text-teal-700 text-[16px] font-normal leading-[100%] mt-4 md:max-w-[495px] max-w-[344px]"
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

            <Link
              href="/"
              className="
    mt-10
    mx-auto md:mx-0
    flex w-fit items-center justify-center
    rounded-full
    border border-transparent
    bg-teal-700
    px-5 py-3
    text-[18px]
    text-ivory
    transition-all duration-300
    hover:border-teal-700
    hover:bg-transparent
    hover:text-teal-700
    font-fraunces font-light text-[20px] md:text-[20px] 
  "
            >
              Book an appointment
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
