import Container from "@/components/elements/container";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";

const clients = [
  {
    title: "Corporations",
    description:
      "We provide corporations with balance sheet management and cash sweep management.",
    image: "/images/Rectangle_56.webp",
  },
  {
    title: "Insurance",
    description:
      "We work with diverse insurance clients across P&C, Health, Life, Captives, Reinsurance, Run-off and Guaranty Funds. Our insurance team leverages its regulatory expertise to create highly tailored investment solutions.",
    image: "/images/client-2.webp",
  },
  {
    title: "Pension Plans",
    description:
      "We manage total return and liability-driven investing (LDI) strategies for defined benefit (DB) and defined contribution (DC) corporate and public plans. ",
    image: "/images/client-3.webp",
  },
  {
    title: "Endowments, Foundations & Non-Profits",
    description:
      "We serve public and private higher education institutions as well as eleemosynary organizations, managing operating funds and long-term investment pools.",
    image: "/images/client-4.webp",
  },
  {
    title: "Public Entities",
    description:
      "We work with state and local government authorities, sovereign wealth funds, central banks, and supranational organizations to deliver tailored investment solutions.",
    image: "/images/client-5.webp",
  },
  {
    title: "Health Care",
    description:
      "We provide corporations with balance sheet management and cash sweep management.",
    image: "/images/client-6.webp",
  },
  {
    title: "Wealth Managers",
    description:
      "We partner with global wealth managers to deliver fund solutions and dedicated sub-advised strategies for their clients.",
    image: "/images/client-7.webp",
  },
  {
    title: "High Net Worth",
    description:
      "We work with high net worth individuals, family offices, and charitable trusts to deliver tailored investment solutions.",
    image: "/images/client-8.webp",
  },
];

export default function Clients() {
  return (
    <Container
      width="fullWidth"
      className="flex-col bg-gray-200 justify-center items-center"
    >
      <Container className="w-full 2xl:max-w-480 px-4 py-20 lg:px-16 lg:py-28">
        <Container className="w-full flex-col gap-20">
          <Container className="flex-col gap-6 items-center">
            <Typography className="max-w-225 font-brandon-grotesque lg:text-[48px] text-[36px] text-center text-gray-700">
              Our Clients
            </Typography>
            <Typography className="max-w-225 text-center mt-6 font-albertSans lg:text-[16px] text-[16px] lg:leading-6 text-gray-700">
              We advise clients with real-world strategies on the global economy
              and capital markets. Investment management is our only business,
              and every client is important. Our clients include:
            </Typography>
          </Container>
          <Container className="w-full flex-col">
            <Container className="w-full relative grid gap-16 lg:gap-8 grid-cols-[repeat(auto-fit,minmax(auto,34.375rem))] justify-center md:grid-cols-2 lg:gap-x-[7.07rem] lg:gap-y-22 xl:grid-cols-[repeat(auto-fit,minmax(auto,34.375rem))]">
              {clients.map((client, index) => (
                <Container
                  key={index}
                  className="bg-gray-200 relative flex-col gap-6 rounded-xl outline-gray-200/50"
                >
                  <Media
                    src={client.image}
                    alt={client.title}
                    width="1280"
                    height="501"
                    className="w-full rounded-t-xl"
                  />
                  <Container className="h-full flex-col items-start gap-4">
                    <Typography className="font-brandon-grotesque mt-1.5 lg:text-[24px] text-[20px] lg:leading-6 text-gray-700">
                      {client.title}
                    </Typography>
                    <Typography className="font-albertSans text-[16px] mt-1.5 lg:text-[16px] text-gray-700">
                      {client.description}
                    </Typography>
                  </Container>
                </Container>
              ))}
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
