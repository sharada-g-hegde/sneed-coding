import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Typography from "@/components/elements/typography";

export default function RelatedInsights() {
  return (
    <Container className="w-full bg-[#0E2F45] justify-center">
      <Container className="flex w-full 2xl:max-w-480 px-4 py-20 lg:px-16 lg:py-28">
        <Container className="flex w-full flex-col gap-20">
          <Container className="flex w-auto flex-col gap-4 items-center">
            <Typography className="lg:text-[40px] lg:mt-4 text-white text-[32px] font-brandon-grotesque">
              Related Insights
            </Typography>
            <Typography className="text-white text-center font-albertSans text-[16px] lg:text-[16px] lg:mt-4 mt-1">
              Curated perspectives selected to inform, prompt reflection, and
              broaden thinking.
            </Typography>
            <Container className="flex w-auto justify-center items-center">
              <Link
                href="#"
                variant="Link"
                className="font-albertSans mt-16 cursor-pointer text-center font-semibold duration-300 sm:w-auto bg-blue-500/75 text-white hover:bg-teal-500/80 !bg-transparent w-auto text-[14px] leading-small lg:text-[16px] lg:leading-regular"
              >
                View All
              </Link>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-16"
              >
                <path
                  d="M6 12.7632L10 8.76318L6 4.76318"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
