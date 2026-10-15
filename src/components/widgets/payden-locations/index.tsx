import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

type Location = {
  name: string;
  addressLines: string[];
  email: string;
  phone: string;
};

// All location data lives here. Edit this array to change what is shown.
const LOCATIONS: Location[] = [
  {
    name: "Los Angeles - Headquarters",
    addressLines: [
      "333 South Grand Avenue",
      "39th Floor",
      "Los Angeles, CA 90071",
    ],
    email: "welcome@payden.com",
    phone: "213 625-1900",
  },
  {
    name: "Boston",
    addressLines: ["265 Franklin Street", "Suite 1604", "Boston, MA 02110"],
    email: "welcome@payden.com",
    phone: "617 807-1990",
  },
  {
    name: "London",
    addressLines: ["1 Bartholomew Lane", "London EC2N 2AX", "United Kingdom"],
    email: "welcome@payden.com",
    phone: "+44 20 7621 3000",
  },
  {
    name: "Milan",
    addressLines: ["Corso Matteotti 1", "20121", "Milan, Italy"],
    email: "welcome@payden.com",
    phone: "+39 02 7606 7111",
  },
];

function PinIcon() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="my-1.5 shrink-0"
    >
      <path
        d="M12 13.082C13.6569 13.082 15 11.7389 15 10.082C15 8.42518 13.6569 7.08203 12 7.08203C10.3431 7.08203 9 8.42518 9 10.082C9 11.7389 10.3431 13.082 12 13.082Z"
        stroke="#124363"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22.582C14 18.582 20 16.0003 20 10.582C20 6.16375 16.4183 2.58203 12 2.58203C7.58172 2.58203 4 6.16375 4 10.582C4 16.0003 10 18.582 12 22.582Z"
        stroke="#124363"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Locations() {
  return (
    <Container
      width="fullWidth"
      className="flex-col justify-center items-center"
    >
      <Container className="w-full 2xl:max-w-480 grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-20 xl:px-16 lg:gap-14">
        <Container className="flex-col gap-9.25 lg:gap-16">
          <Typography className="xl:pr-[30%] font-brandon-grotesque lg:text-[48px] text-[#2F3B47] text-[36px]">
            Locations
          </Typography>

          <Container className="w-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-y-[2.025rem] xl:gap-x-24">
            {LOCATIONS.map((location, i) => (
              <Container
                key={`${location.name}-${i}`}
                className=" gap-4 border-b border-teal-500 pb-8 last:border-0 last:pb-0 md:nth-last-[2]:border-0 lg:pb-9.5 lg:max-xl:gap-2"
              >
                <PinIcon />
                <Container className="flex-col gap-4">
                  <Typography className="font-brandon-grotesque lg:text-[24px] text-[20px] text-[#2F3B47] lg:leading-9!">
                    {location.name}
                  </Typography>

                  <Container className=" flex-col gap-4">
                    {location.addressLines.map((line) => (
                      <Typography
                        key={line}
                        className="font-albertSans text-[16px] text-[#2F3B47]"
                      >
                        {line}
                      </Typography>
                    ))}
                  </Container>

                  <Link
                    variant="Link"
                    href={`mailto:${location.email}`}
                    className="font-albertSans w-full cursor-pointer duration-300 sm:w-auto  hover:bg-teal-500/80 leading-regular mt-4 text-left! text-lg lg:text-[16px] font-normal break-all text-gray-700"
                  >
                    {location.email}
                  </Link>

                  <Typography className="leading-regular text-lg font-albertSans text-[16px] text-[#2F3B47]">
                    {location.phone}
                  </Typography>
                </Container>
              </Container>
            ))}
          </Container>
        </Container>

        <Container className="items-center">
          <Media
            alt="image-description"
            width="640"
            height="640"
            className="w-full rounded-[1.25rem] object-cover h-82.25 md:min-h-full"
            src="/images/About_Us_Footer_2.webp"
          />
        </Container>
      </Container>
    </Container>
  );
}
