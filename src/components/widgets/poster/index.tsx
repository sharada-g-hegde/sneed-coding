import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

type PosterProps = {
  /** Background image path, e.g. "/images/poster-bg.jpg" */
  image: string;
  heading: string;
  /** Optional small label above the heading, e.g. "Start Today" */
  eyebrow?: string;
  /** Optional paragraph under the heading */
  description?: string;
  cta: {
    label: string;
    href: string;
  };
};

export default function Poster({
  image,
  heading,
  eyebrow,
  description,
  cta,
}: PosterProps) {
  return (
    <Container
      width="fullWidth"
      className="block px-2 py-6 items-center justify-center sm:px-2 sm:py-8"
    >
      <Container
        width="pageWidth"
        className="relative mx-auto items-center justify-center overflow-hidden rounded-[28px] px-6 py-10 sm:px-10 sm:py-20 lg:px-16 lg:py-32 text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
      >
        {/* Background image, rendered as a fill image so the path can come
            from a prop */}
        <Media
          src={image}
          alt=""
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Container className="absolute inset-0 bg-black/30" />

        <Container className="relative z-10 flex-col items-center">
          {/* Eyebrow */}
          {eyebrow && (
            <Container className="lg:mb-10 mb-5 items-center justify-center gap-3 text-[15px] tracking-wide text-white/90">
              <span className="h-px w-8 bg-white/55 hidden lg:flex" />
              <Typography className="font-inter lg:text-[14px] text-[14px]">
                {eyebrow}
              </Typography>
              <span className="h-px w-8 bg-white/55 hidden lg:flex" />
            </Container>
          )}

          <Typography className="lg:mb-10 mb-6 text-[32px] font-outfit font-bold leading-tight lg:leading-16! lg:tracking-[0.5px] lg:text-[56px]">
            {heading}
          </Typography>

          {description && (
            <Typography className="lg:mb-10 mb-6 max-w-158.5 font-inter text-base leading-relaxed text-[#f2dede] lg:text-[16px] text-[16px]">
              {description}
            </Typography>
          )}

          <Link
            href={cta.href}
            className="inline-flex w-fit font-outfit items-center justify-center rounded-full bg-white px-6 py-3 text-base font-bold text-[#7a1a1a] transition-transform duration-150 ease-out hover:bg-red-50 hover:text-[#7a1a1a] cursor-pointer"
          >
            {cta.label}
          </Link>
        </Container>
      </Container>
    </Container>
  );
}

/* ---------------------------------------------------------------
   Usage — only the background image and the texts change per page:

   import Poster from "@/components/widgets/poster";

   <Poster
     image="/images/poster-bg.jpg"
     eyebrow="Start Today"
     heading="Ready to stop calling for quotes?"
     description="Join 5,000+ manufacturers who found their printer online in under 10 minutes. Ships same day from Texas."
     cta={{ label: "Start the product finder", href: "/find-my-printer" }}
   />

   `eyebrow` and `description` are optional, so leave them out when a
   page doesn't need them.
---------------------------------------------------------------- */
