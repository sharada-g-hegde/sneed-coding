import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export default function TwoColumnTextSection() {
  return (
    <section className="w-full bg-white py-16 justify-center items-center">
      <Container
        width="fullWidth"
        className="max-w-325 mx-auto justify-center items-center px-4 xl:px-0 lg:px-10"
      >
        <Container
          width="pageWidth"
          className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-6"
        >
          <Container
            width="fullWidth"
            className="min-w-0 flex-col justify-center rounded-[28px] bg-[#5C0F1A] px-4 py-4 lg:py-12 lg:px-11"
          >
            <Typography className="m-0 text-[18px] font-outfit font-bold leading-tight text-white lg:text-[24px]">
              Simplifying the processes that keep production moving, so
              businesses can spend less time managing complexity and more time
              focused on growth.
            </Typography>

            <Typography className="mt-6 text-[16px] lg:text-[16px] font-inter leading-[1.6] text-white/75">
              Production equipment should solve problems, not create new ones.
              That is why we focus on practical coding, marking, packaging, and
              labeling solutions backed by accessible support and
              straightforward guidance. Wherever you are in your production
              journey, we are here to help you operate more efficiently and move
              forward with confidence.
            </Typography>

            <button
              type="button"
              className="mt-6 w-fit cursor-pointer font-outfit rounded-full border border-white bg-white px-6 py-3 text-[16px] font-extrabold text-[#7A1220] transition-colors hover:bg-white/90"
            >
              Contact us
            </button>
          </Container>

          <Container
            width="fullWidth"
            className="relative h-70 min-w-0 overflow-hidden rounded-[28px] bg-gray-200 sm:h-90 lg:h-auto"
          >
            <Media
              src="/images/two-column-text.webp"
              alt="Automated marking system printing a batch code on a box"
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Container>
        </Container>
      </Container>
    </section>
  );
}
