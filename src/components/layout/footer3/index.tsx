import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

const serviceGroups = [
  {
    title: "SERVICES",
    links: [
      "Trust",
      "Will",
      "Probate",
      "Attorney Support",
      "Deed Transfer",
      "Pricing",
    ],
  },
  {
    title: "Resources",
    links: [
      "Learn center",
      "Research",
      "Support",
      "Verified Reviews",
      "Meet our Members",
      "eWill Legislation ",
    ],
  },
  {
    title: "Proffessional Partners",
    links: [
      "Advisors",
      "Partners",
      "Attorneys",
      "Non Profit Organizations",
      "Affiliates",
    ],
  },
  {
    title: "About",
    links: [
      "About us",
      "Press",
      "News",
      "Carrers",
      "Security",
      "Frequenty Asked Questions",
    ],
  },
];

export default function Footer() {
  return (
    <Container
      width="fullWidth"
      className="items-center justify-center bg-[#491B34]"
    >
      <Container className="w-full flex-col px-6 pb-16 pt-11 md:mx-45 md:max-w-324 md:py-30 lg:max-w-360">
        <Container className="mb-10 w-full justify-center md:mb-15">
          <Media
            src="/images/footer3.png"
            alt="Rolling golden hills under a cloudy sky with the words Take good care displayed over the landscape"
            width={327}
            height={422}
            className="hidden h-155.5 w-268.75 rounded-2xl object-cover lg:block"
          />

          <Media
            src="/images/footer3-mobile.webp"
            alt="Rolling golden hills under a cloudy sky with the words Take good care displayed over the landscape"
            width={327}
            height={422}
            className="block h-105.5 w-auto rounded-2xl object-cover lg:hidden"
          />
        </Container>

        <Container className="w-full flex-col border-y-2 border-purple-200 py-10 md:py-15">
          <Container className="w-full justify-between align-top">
            <Link href="/" variant="Link">
              <Media
                alt="Trust &amp; Will powered by Estate OS logo"
                width="71"
                height="48"
                className="rounded-none"
                src="/images/footer-logo.png"
              />
            </Link>

            <Link
              href="/"
              variant="Link"
              className="cursor-pointer rounded-[3.125rem] bg-blue-200 px-[1.5rem] py-[0.94rem] text-center font-dmsans text-[1.125rem] font-semibold leading-[1.12rem] text-black duration-200 hover:opacity-80"
            >
              Get Started
            </Link>
          </Container>

          <Container className="my-10 grid w-full grid-cols-2 gap-x-12 gap-y-10 md:my-15 lg:grid-cols-4 lg:gap-x-8">
            {serviceGroups.map((group, index) => (
              <Container key={index} className="flex-col">
                <Typography className="mb-3 font-dmsans text-[13px] font-medium uppercase tracking-[0.04rem] text-[#AB96A2] md:text-[16px] md:leading-[22.4px] xl:mb-[4.8px]">
                  {group.title}
                </Typography>

                <ul className="flex flex-col gap-y-1.5">
                  {group.links.map((link, linkIndex) => (
                    <li
                      key={`${link}-${linkIndex}`}
                      className="font-dmsans text-[16px] leading-[2.1rem] xl:font-semibold cursor-pointer duration-200 underline-offset-2 text-white hover:opacity-60 inline-flex min-h-6 items-center font-normal md:font-normal no-underline"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </Container>
            ))}
          </Container>
          <Container className="w-full flex-col">
            <Typography className="text-[1rem] leading-[1.4rem] xl:text-[1.125rem] xl:leading-[1.575rem] font-dmsans mb-[0.75rem] text-white font-semibold">
              Awards and Rankings:
            </Typography>
            <Typography className="text-[1rem] leading-[1.4rem] xl:text-[1.125rem] xl:leading-[1.575rem] font-dmsans font-medium text-white my-2 li-p mt-0">
              Ranked #1 Best Overall Wills & Trusts Service - according to
              Forbes Advisor July 2026 <br />
              Ranked #1 Estate Planning Platform of 2026 - according to
              ConsumerRating.org June 2026
              <br />
              Awarded &quot;Best Overall&quot; for Best Online Will Makers, 2025
              - according to Business Insider June 2025
            </Typography>
          </Container>
        </Container>
        <Container className="w-full mt-10 flex-col md:mt-15 lg:flex-row md:gap-8">
          <Container className="w-full flex-col xl:pr-[13%]">
            <Container className="flex w-full mb-10 gap-x-6 md:mb-8 md:gap-x-7">
              <Link
                href=""
                variant="Link"
                target="_blank"
                className="cursor-pointer"
              >
                <Media
                  src="/images/Instagram.svg"
                  alt=""
                  width="27"
                  height="27"
                  className="h-8 w-8"
                />
              </Link>
              <Link
                href=""
                variant="Link"
                target="_blank"
                className="cursor-pointer"
              >
                <Media
                  src="/images/Facebook-icon.svg"
                  alt=""
                  width="27"
                  height="27"
                  className="h-8 w-8"
                />
              </Link>
              <Link
                href=""
                variant="Link"
                target="_blank"
                className="cursor-pointer"
              >
                <Media
                  src="/images/twitter.svg"
                  alt=""
                  width="27"
                  height="27"
                  className="h-8 w-8"
                />
              </Link>
              <Link
                href=""
                variant="Link"
                target="_blank"
                className="cursor-pointer"
              >
                <Media
                  src="/images/youtube.svg"
                  alt=""
                  width="27"
                  height="27"
                  className="h-8 w-8"
                />
              </Link>
              <Link
                href=""
                variant="Link"
                target="_blank"
                className="cursor-pointer"
              >
                <Media
                  src="/images/linkedin.svg"
                  alt=""
                  width="27"
                  height="27"
                  className="h-8 w-8"
                />
              </Link>
            </Container>
            <Container className="w-full mb-6 flex-col md:mb-8">
              <Typography className="text-[1rem] leading-[1.4rem] font-dmsans font-medium text-white xl:text-[1rem] xl:leading-[1.4rem]">
                Subscribe for estate planning tips, trends, and industry news.
              </Typography>
            </Container>
            <Container className="flex w-full flex-col">
              <form className="flex w-full flex-col" noValidate>
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                />

                <Container className="flex w-full">
                  <Container className="mb-0 flex w-full flex-col">
                    <label
                      htmlFor="email"
                      className="mb-[0.25rem] font-dmsans text-[1rem] font-[600] leading-[1.25rem] whitespace-nowrap text-white"
                    >
                      <span>Email</span>
                      <span aria-hidden="true"> (required)</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      aria-labelledby="email-label"
                      aria-invalid="false"
                      autoComplete="email"
                      placeholder="Enter your email"
                      className="border-2 border-ivory-300 p-[.5rem] font-dmsans text-[1rem] outline-none md:px-[1rem] md:py-[0.88rem] w-full md:rounded-[0px] rounded-[0px] md:rounded-tl-[5px] rounded-tl-[5px] md:rounded-bl-[5px] rounded-bl-[5px] h-[57px] border-r-0 font-medium placeholder:text-[#97939F]"
                    />
                  </Container>

                  <button
                    type="submit"
                    aria-busy="false"
                    aria-label="Submit email"
                    className="min-h-[57px] shrink-0 self-end rounded-tr-[5px] rounded-br-[5px] bg-black px-[1.2rem] py-[0.75rem] font-dmsans text-[1.5rem] text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    →
                  </button>
                </Container>
              </form>
            </Container>
          </Container>
          <Container className="w-full mt-[2rem] flex-col md:mt-0 xl:pr-[13%]">
            <Container className="w-full flex-col gap-2 md:flex-row md:flex-wrap md:gap-x-[1.5rem] md:gap-y-[0.75rem]">
              <Link
                href=""
                variant="Link"
                className="font-dmsans text-[1rem] leading-[2.1rem] xl:font-semibold cursor-pointer duration-200 underline underline-offset-2 text-white hover:opacity-60 inline-flex min-h-[1.5rem] items-center text-white leading-[1.5rem] xl:text-[1rem] xl:leading-[1.5rem]"
              >
                Terms Of Service
              </Link>
              <Link
                href=""
                variant="Link"
                className="font-dmsans text-[1rem] leading-[2.1rem] xl:font-semibold cursor-pointer duration-200 underline underline-offset-2 text-white hover:opacity-60 inline-flex min-h-[1.5rem] items-center text-white leading-[1.5rem] xl:text-[1rem] xl:leading-[1.5rem]"
              >
                Privacy Policy
              </Link>
              <Link
                href=""
                variant="Link"
                className="font-dmsans text-[1rem] leading-[2.1rem] xl:font-semibold cursor-pointer duration-200 underline underline-offset-2 text-white hover:opacity-60 inline-flex min-h-[1.5rem] items-center text-white leading-[1.5rem] xl:text-[1rem] xl:leading-[1.5rem]"
              >
                Accessibility
              </Link>
              <Link
                href=""
                variant="Link"
                className="font-dmsans text-[1rem] leading-[2.1rem] xl:font-semibold cursor-pointer duration-200 underline underline-offset-2 text-white hover:opacity-60 inline-flex min-h-[1.5rem] items-center text-white leading-[1.5rem] xl:text-[1rem] xl:leading-[1.5rem]"
              >
                Terms Of Service
              </Link>
              <Link
                href=""
                variant="Link"
                className="font-dmsans text-[1rem] leading-[2.1rem] xl:font-semibold cursor-pointer duration-200 underline underline-offset-2 text-white hover:opacity-60 inline-flex min-h-[1.5rem] items-center text-white leading-[1.5rem] xl:text-[1rem] xl:leading-[1.5rem]"
              >
                Your Privacy Choices
                <Media
                  alt="Cookie Compliance Toggle Icon"
                  width="30"
                  height="14"
                  className="pl-2 mt-2"
                  src="/images/cookie-compliance.webp"
                />
              </Link>
            </Container>
            <Typography className="text-[1rem] leading-[1.4rem] font-dmsans text-white mb-[2.5rem] mt-[0.75rem] font-thin md:mb-[2rem] xl:text-[1rem] xl:leading-[1.4rem]">
              Trust & Will is an online service providing legal forms and
              information. We are not a law firm, we do not provide legal
              advice, and the online forms we provide are not a substitute for
              the advice or services of an attorney.{" "}
            </Typography>
            <Container className="flex w-full items-center gap-[1.5rem] md:gap-[1rem]">
              <Link href="" variant="Link">
                <Media
                  alt=""
                  loading="lazy"
                  width="32"
                  height="48"
                  src="/images/corp.webp"
                />
              </Link>
              <Link href="" variant="Link">
                <Media
                  alt=""
                  loading="lazy"
                  width="25"
                  height="23"
                  src="/images/pledge.webp"
                />
              </Link>
              <Link href="" variant="Link">
                <Media
                  alt=""
                  loading="lazy"
                  width="72"
                  height="27"
                  src="/images/cert-bbb.webp"
                />
              </Link>
              <Link href="" variant="Link">
                <Media
                  alt=""
                  loading="lazy"
                  width="48"
                  height="48"
                  src="/images/cert-soc2.webp"
                />
              </Link>
              <Link href="" variant="Link">
                <Media
                  alt=""
                  loading="lazy"
                  width="120"
                  height="40"
                  src="/images/store.webp"
                />
              </Link>
              <Link href="" variant="Link">
                <Media
                  alt=""
                  loading="lazy"
                  width="120"
                  height="40"
                  src="/images/store-2.webp"
                />
              </Link>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
