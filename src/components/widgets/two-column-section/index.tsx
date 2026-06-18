import Button from "@/components/button";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

export default function TwoColumnSection() {
  return (
    <Container
      width="fullWidth"
      className="bg-sage items-center justify-center pb-7 lg:pb-0 px-4 pt-6 lg:pt-2 md:px-16 xl:px-39.75"
    >
      <Container
        width="pageWidth"
        className="flex-col lg:flex-row px-7 lg:px-0 items-center justify-center lg:items-start gap-2 lg:py-[4rem] py-[1rem] lg:gap-16.5"
      >
        <Typography
          component="h1"
          className="lg:mt-6 lg:w-123.75 lg:px-0 px-12 text-ivory lg:text-left text-center"
        >
          Book with us today.
        </Typography>

        <Container className="flex flex-col items-start gap-[2.25rem]">
          <Typography
            variant="p"
            className="max-w-[495px] mt-1 lg:mt-0 text-center lg:text-left text-ivory font-sans text-[16px] lg:text-[18px] leading-5.75 lg:leading-5.75"
          >
            If you are a new client at Insight and Wellness, please book a
            30-minute consultation with our intake therapist. This helps us get
            to know you and match you with the therapist best suited to help you
            move forward.
          </Typography>
          <Button
            variant="secondary"
            href="/"
            className="mx-auto md:mx-0 w-fit items-center justify-center font-fraunces font-light md:text-[20px] text-[20px]"
          >
            Book appointment now
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
