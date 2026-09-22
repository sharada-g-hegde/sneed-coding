import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

export default function Poster() {
  return (
    <Container
      width="fullWidth"
      className="block px-2 py-6 items-center justify-center sm:px-2 sm:py-8"
    >
      <Container
        width="pageWidth"
        className="
    relative mx-auto items-center justify-center overflow-hidden rounded-[28px]
    bg-[url('/images/poster-bg.jpg')]
    bg-cover bg-center
    px-6 py-10 sm:px-10 sm:py-20 lg:px-16 lg:py-32
    text-center text-white
    shadow-[0_20px_50px_rgba(0,0,0,0.25)]
  "
      >
        <Container className="absolute inset-0 bg-black/30" />

        <Container className="relative z-10 flex-col items-center">
          {/* Eyebrow */}
          <Container className="lg:mb-10 mb-5 items-center justify-center gap-3 text-[15px] tracking-wide text-white/90">
            <span className="h-px w-8 bg-white/55 hidden lg:flex" />
            <Typography className="font-inter lg:text-[14px] text-[14px]">
              Start Today
            </Typography>
            <span className="h-px w-8 bg-white/55 hidden lg:flex" />
          </Container>

          <Typography className="lg:mb-10 mb-6 text-[32px] font-outfit font-bold leading-tight lg:leading-16! lg:tracking-[0.5px] lg:text-[56px] ">
            Ready to stop calling for quotes?
          </Typography>

          <Typography className="lg:mb-10 mb-6 max-w-158.5 font-inter text-base leading-relaxed text-[#f2dede] lg:text-[16px] text-[16px]">
            Join 5,000+ manufacturers who found their printer online in under 10
            minutes. Ships same day from Texas.
          </Typography>

          <button
            type="button"
            className="
              inline-flex w-fit font-outfit items-center justify-center rounded-full
              bg-white px-6 py-3 text-base font-bold text-[#7a1a1a]
              transition-transform duration-150 ease-out
              hover:bg-red-50 cursor-pointer
            "
          >
            Start the product finder
          </button>
        </Container>
      </Container>
    </Container>
  );
}
