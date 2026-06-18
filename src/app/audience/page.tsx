import Image from "next/image";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Button from "@/components/button";
import Navbar from "@/components/layout/navbar";
import Media from "@/components/elements/media";
import Footer from "@/components/layout/footer";

const topics = [
  "Personal growth and self-awareness",
  "Breaking bad habits",
  "Finding purpose and life direction",
  "Finding purpose and life direction",
  "Building confidence and self worth",
  "Overcoming feeling stuck",
  "Self-awareness and mindset work",
  "Alleviate stress and anxiety",
];

export default function BeYourBestYouSection() {
  return (
    <Container
      width="fullWidth"
      className="relative w-full items-center flex-col justify-center overflow-hidden bg-[#f0ede6]"
    >
      <Media
        src="/images/background-1.png"
        alt=""
        fill
        className="object-cover object-center "
      />
      <Navbar />
      <Container
        width="pageWidth"
        className="relative lg:mt-20 mt-7 z-10 mx-auto flex-col items-center px-10 py-16 text-center md:px-16 md:py-24"
      >
        <Container className="flex-col items-center justify-center">
          <Typography
            component="h2"
            className="font-fraunces font-thin text-teal-700"
          >
            Be your best you
          </Typography>

          <Container className="relative lg:mt-20 mt-8 mb-8 lg:h-[357px] lg:w-[307px] h-[272px] w-[234px] overflow-hidden">
            <Image
              src="/images/audience-1.png"
              alt="Person standing on a beach"
              fill
              className="object-cover object-top"
            />
          </Container>
        </Container>

        <Typography className="mb-4 font-sans text-teal-700 text-[20px] lg:text-[32px] px-6 lg:px-0 max-w-[666px] leading-5.5 lg:leading-10">
          Are you ready to explore your life direction{" "}
          <br className="lg:hidden" /> and grow as a person?
        </Typography>

        <Typography className="mb-10 font-sans text-[16px] max-w-[766px] text-teal-700 lg:leading-5.5 leading-5">
          This is your time to make real progress in accepting who you are,
          boosting your confidence, and recognizing your self-worth. We&apos;re
          here to help you develop personally, explore circumstances and ideas,
          and gain clarity on your goals so that you can become all that you
          want to be.
        </Typography>

        <Container className="w-full items-center justify-center   py-2">
          <span className="font-sans text-[14px] text-center tracking-[0.3em] font-semibold text-teal-700 uppercase">
            Topics
          </span>
        </Container>

        <Container className="mb-12 grid w-full max-w-[1122px] border-y border-teal-700 grid-cols-1 lg:gap-x-10 lg:gap-y-5 md:grid-cols-4">
          {topics.map((topic, index) => (
            <Typography
              key={index}
              className="lg:px-2 leading-0 lg:py-2 px-3 py-1 text-center max-w-[353px] font-fraunces lg:text-[24px] text-[24px] font-light text-teal-700"
            >
              {topic}
            </Typography>
          ))}
        </Container>

        <Container className="flex flex-col items-center gap-5">
          <Typography
            variant="p"
            className="font-sans font-semibold uppercase text-teal-700"
          >
            Have questions about therapy
            <br />
            at Insight and Wellness?
          </Typography>

          <Container className="flex-col lg:flex-row items-center justify-center gap-[14px] lg:gap-[67px]">
            <Button
              variant="primary"
              href="/faq"
              className="font-fraunces  font-light text-[20px] text-ivory transition-colors"
            >
              See our FAQ page
            </Button>
            <Button
              variant="primary"
              href="/book"
              className="font-fraunces font-light text-[20px] text-ivory transition-colors"
            >
              Book an appointment
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
