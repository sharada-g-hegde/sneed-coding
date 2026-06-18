import Image from "next/image";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Button from "@/components/button";

export default function WelcomeSection() {
  const listItems = [
    { id: "01", text: "What we're posting." },
    {
      id: "02",
      text: "Read the latest news and insights from our team.",
    },
    { id: "03", text: "What we're listening to." },
    { id: "04", text: "What we're reading." },
  ];

  return (
    <Container
      width="fullWidth"
      className="relative items-center w-full justify-center  overflow-hidden"
    >
      <Container className="absolute inset-0 z-0 w-full">
        <Image
          src="/images/bg-2.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </Container>
      <Container width="pageWidth" className="relative z-10 mx-auto">
        <Container className=" grid w-full grid-cols-1 items-center gap-18 px-8 py-14 md:px-[125px] lg:grid-cols-2 lg:gap-6 lg:py-20">
          <Container className="flex flex-col">
            <Container className="lg:pl-7 flex-col">
              <Typography
                variant="h2"
                className="mb-4 font-fraunces lg:text-left text-center font-thin text-ivory md:text-[44px]"
              >
                Welcome!
              </Typography>

              <Typography
                component="p"
                className="mb-8 max-w-138 font-sans leading-5 lg:text-left text-center font-normal text-ivory md:leading-5"
              >
                Insight and Wellness is a collective of caring, qualified
                therapists with the training and experience to help you navigate
                and improve many aspects of your life. You can look forward to a
                warm, professional atmosphere where you can feel comfortable
                working together with us on what you need to find your true
                potential and live your best life.
              </Typography>
            </Container>

            <Container className="mb-8 flex items-center justify-center lg:hidden">
              <Container className="relative h-66.5 w-66.5 overflow-hidden rounded-full">
                <Image
                  src="/images/welcome.png"
                  alt="Insight and Wellness therapists"
                  fill
                  className="object-cover object-top"
                />
              </Container>
            </Container>

            <ol className="mb-10 flex flex-col">
              {listItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-1.5 py-2.5 decoration-0"
                >
                  <span className="min-w-5 font-sans text-[10px] font-extrabold text-ivory hidden md:flex">
                    {item.id}
                  </span>

                  <span className="w-full text-center lg:text-left px-[52px] border-b pb-1.5 border-ivory font-fraunces text-[20px] font-light text-ivory md:text-[24px]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ol>

            <Container className="pl-8">
              <Button
                variant="secondary"
                href="/therapists"
                className="w-fit mx-auto md:mx-0 font-fraunces font-light md:text-[20px] text-[20px]"
              >
                Your Therapists
              </Button>
            </Container>
          </Container>

          <Container className="items-center justify-center hidden lg:flex">
            <Container className="relative h-80 w-[320px] overflow-hidden rounded-full lg:h-117.25 lg:w-117.25 xl:h-117.25 xl:w-117.25">
              <Image
                src="/images/welcome.png"
                alt="Insight and Wellness therapists"
                fill
                className="object-cover object-top"
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
