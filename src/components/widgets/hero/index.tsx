import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

export default function IndustrialPrinterHero() {
  return (
    // <Container
    //   width="fullWidth"
    //   className="mt-17 mb-2 px-0 sm:px-4 lg:mt-2 lg:px-2"
    // >
    //   <Container
    //     width="pageWidth"
    //     className="relative mx-auto min-h-140 max-w-350 overflow-hidden rounded-0 sm:rounded-3xl lg:aspect-2/1 lg:min-h-0 lg:rounded-[38px]"
    //   >
    //     <Media src="/images/hero.jpg" alt="" fill className="object-cover" />

    //     <Container width="fullWidth" className="absolute inset-0 bg-black/45" />

    //     <Container
    //       width="fullWidth"
    //       className="relative z-10 flex-col  gap-10 px-6 py-8 sm:px-10 sm:py-10 lg:h-full justify-center lg:gap-2 max-lg:px-4 xl:px-18"
    //     >
    //       <Typography className="font-inter text-[2.1rem] font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:hidden">
    //         Industrial inkjet <br /> printers
    //       </Typography>

    //       <Typography className="hidden lg:leading-12! xl:-mb-7.5 font-outfit font-bold xl:leading-16! leading-[1.1] tracking-[0.02em]  lg:mb-[-20px] text-white lg:block lg:text-[40px] xl:text-[52px]">
    //         Industrial <br /> inkjet
    //       </Typography>

    //       <Typography className="hidden whitespace-nowrap -mt-5 font-outfit font-black leading-none text-white lg:block lg:text-[200px] xl:text-[280px]">
    //         printers
    //       </Typography>

    //       <Typography className="max-w-90 font-sans items-center  mx-auto text-sm font-semibold leading-[1.35] text-white sm:text-base lg:max-w-125 lg:text-[18px]">
    //         Built for small and mid-size manufacturers who can&apos;t justify a
    //         $10,000 printer. Engineered for 24/7 production lines.
    //       </Typography>

    //       <Link
    //         href="/find-my-printer"
    //         className="mt-1 flex w-fit items-center gap-2 rounded-full bg-red-800 px-6 py-3.5 font-sans text-base font-bold text-white transition-colors duration-200 hover:bg-red-600 lg:hidden"
    //       >
    //         Find my printer
    //         <svg
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth={2.5}
    //           className="h-4 w-4"
    //         >
    //           <path
    //             d="M5 12h14M13 6l6 6-6 6"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </svg>
    //       </Link>
    //     </Container>

    //     <Container
    //       width="auto"
    //       className="absolute bottom-[10] lg:left-[50] xl:left-20 z-20 hidden flex-col rounded-[18px] bg-black/45 xl:px-10 xl:py-8 lg:px-5 lg:py-5 text-white backdrop-blur-md lg:flex"
    //     >
    //       <Typography className="font-outfit text-[clamp(1.25rem,2vw,2rem)] font-bold leading-none tracking-[-0.04em]">
    //         $1,500
    //       </Typography>
    //       <Typography className="mt-2 font-outfit text-[clamp(0.9rem,1vw,1.25rem)] font-semibold">
    //         Starting price
    //       </Typography>
    //     </Container>

    //     <Container className="absolute bottom-0 right-0 z-30 hidden lg:flex">
    //       <Container className="rounded-tl-[36px] bg-white px-3 pt-3">
    //         <Link
    //           href="/find-my-printer"
    //           className="flex items-center justify-center rounded-[35px] bg-red-800  lg:px-18 lg:py-8 font-sans xl:text-[32px] lg:text-[24px] font-bold leading-none tracking-[-0.03em] text-white transition-colors duration-200 hover:bg-red-600"
    //         >
    //           Find my printer
    //         </Link>
    //       </Container>
    //     </Container>
    //   </Container>
    // </Container>
    <Container width="fullWidth" className="flex-col items-center">
      <Container className="flex w-full 2xl:max-w-360 max-lg:h-screen lg:p-2">
        <Container
          width="fullWidth"
          className="relative h-screen lg:h-187.5 overflow-hidden"
        >
          <Media
            alt="Hero Image"
            src="/images/hero.webp"
            fill
            className="absolute md:rounded-4xl inset-0 object-cover"
          />

          <Container className="flex w-full 3xl:pt-41.25 3xl:pb-13 z-10 flex-col px-4 pt-28 pb-8 max-lg:items-start lg:px-14">
            <Typography className="text-white lg:text-[56px] font-semibold font-outfit md:text-[32px] text-[44px] lg:leading-16 md:max-w-67 md:px-3.5">
              Industrial inkjet
            </Typography>
            <Typography className="font-outfit 3xl:-mt-14 text-[44px] leading-14 font-bold text-white md:text-[120px] md:leading-30 md:tracking-[-0.45rem] lg:text-[200px] lg:leading-50 xl:-mt-18 xl:text-[290px] xl:leading-72.5">
              printers
            </Typography>
            <Typography className="font-outfit text-lg leading-7 font-semibold lg:text-xl 3xl:mt-7.5 mt-6 max-w-136 text-white lg:ml-110">
              Built for small and mid-size manufacturers who can&apos;t justify
              a ₹958,734 printer. Engineered for 24/7 production lines.
            </Typography>
            <Link
              href="/"
              variant="Link"
              className="flex cursor-pointer items-center gap-2 sm:w-auto bg-red-900 hover:bg-red-600 text-white font-outfit rounded-4xl px-6 py-3 text-[1rem] leading-6 font-semibold mt-6 w-auto lg:hidden"
            >
              <Typography className="inline-block w-full text-center">
                Find my printer
              </Typography>
            </Link>
            <Container className="w-auto 3xl:mt-14 xl:mt-3 hidden lg:flex">
              <Container className="flex w-auto flex-col gap-2 rounded-4xl bg-white/20 p-8 backdrop-blur-sm">
                <Typography className="font-outfit text-lg leading-7 font-semibold lg:text-xl text-white">
                  Starting price
                </Typography>
                <Typography className="text-white lg:text-[36px] font-outfit font-semibold">
                  ₹58,300
                </Typography>
              </Container>
            </Container>
          </Container>
          <Link
            href="/"
            variant="Link"
            className="flex w-full items-center gap-2 sm:w-auto 3xl:py-8.75 font-outfit bg-red-800 3xl:min-w-122.5 absolute right-0 bottom-0 z-10 cursor-pointer rounded-2xl px-4 py-6 text-center leading-9 hover:bg-red-950 font-semibold text-white transition-colors duration-200 max-lg:hidden lg:rounded-4xl lg:px-4.5 lg:py-7.75 xl:px-9.5 xl:py-6.5 xl:leading-11 2xl:rounded-[40px] 2xl:px-14.75"
          >
            <Typography className="font-outfit text-white lg:text-[19px] xl:text-[40px] 2xl:text-[36px] text-[28px]">
              {" "}
              Find my printer
            </Typography>
          </Link>
        </Container>
      </Container>
    </Container>
  );
}
