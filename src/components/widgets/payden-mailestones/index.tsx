import { useId } from "react";
import Image from "next/image";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

type MilestoneItem = {
  title: string;
  content: string;
  icon: string;
  alt: string;
};

const ITEMS: MilestoneItem[] = [
  {
    title: "1983 Payden & Rygel Founded",
    content:
      "Founded in 1983, with decades of experience in managing investments for institutions worldwide.",
    icon: "/images/Building_Icon.webp",
    alt: "Building Icon",
  },
  {
    title: "1992 Introduced Payden Funds",
    content:
      "Founded in 1983, with decades of experience in managing investments for institutions worldwide.",
    icon: "/images/milestone-2.webp",
    alt: "Building Icon",
  },
  {
    title: "1994 Introduced Balanced Strategies",
    content:
      "Founded in 1983, with decades of experience in managing investments for institutions worldwide.",
    icon: "/images/milestone-3.webp",
    alt: "Building Icon",
  },
  {
    title: "1998 Payden & Rygel Global Limited Opened in London",
    content:
      "Founded in 1983, with decades of experience in managing investments for institutions worldwide.",
    icon: "/images/milestone-4.webp",
    alt: "Building Icon",
  },
  {
    title: "1998 Joint Venture with Metzler Bank",
    content:
      "Founded in 1983, with decades of experience in managing investments for institutions worldwide.",
    icon: "/images/milestone-5.webp",
    alt: "Building Icon",
  },
  {
    title: "2010 Opened Boston Office",
    content:
      "Founded in 1983, with decades of experience in managing investments for institutions worldwide.",
    icon: "/images/milestone-6.webp",
    alt: "Building Icon",
  },
  {
    title: "2012 Established a Client Base in Australia",
    content:
      "Founded in 1983, with decades of experience in managing investments for institutions worldwide.",
    icon: "/images/milestone-7.webp",
    alt: "Building Icon",
  },
  {
    title: "2017 Opened Milan Branch",
    content:
      "Founded in 1983, with decades of experience in managing investments for institutions worldwide.",
    icon: "/images/milestone-8.webp",
    alt: "Building Icon",
  },
  {
    title: "2023 40th Year Milestone",
    content:
      "Founded in 1983, with decades of experience in managing investments for institutions worldwide.",
    icon: "/images/milestone-9.webp",
    alt: "Building Icon",
  },
];

function MilestoneRow({
  item,
  defaultChecked = false,
}: {
  item: MilestoneItem;
  defaultChecked?: boolean;
}) {
  const id = useId();

  return (
    <Container className="w-full flex-col last:[&>.accordion-content]:border-l-0">
      <label
        htmlFor={id}
        className="peer group flex cursor-pointer justify-between gap-4 lg:items-center lg:gap-8"
      >
        <input
          id={id}
          className="hidden"
          type="checkbox"
          defaultChecked={defaultChecked}
        />
        <Image
          alt={item.alt}
          loading="lazy"
          width={171}
          height={171}
          decoding="async"
          className="size-14 shrink-0"
          src={item.icon}
        />
        <Container className=" w-full items-center justify-between gap-2.5 lg:gap-5 xl:gap-10">
          <Typography className="mb-2 py-2 text-gray-100 font-brandon-grotesque lg:text-[24px] text-[20px] lg:mb-0">
            {item.title}
          </Typography>
          <svg
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 rotate-180 text-gray-100 transition-all duration-300 ease-in-out group-has-checked:rotate-0 lg:mr-4"
          >
            <path
              d="M1 8.5L7.5 2L14 8.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Container>
      </label>
      <Typography className="leading-regular font-albertSans accordion-content mt-3 ml-7 hidden max-h-0 border-teal-500 pr-8 pl-10 text-[16px] text-gray-100 transition-all lg:text-[16px] duration-400 ease-in-out peer-has-checked:flex peer-has-checked:max-h-full peer-has-checked:min-h-25 peer-has-checked:border-l-2 lg:mb-0 lg:pr-16 lg:pl-17 lg:peer-has-checked:min-h-27.5">
        {item.content}
      </Typography>
    </Container>
  );
}

export default function Milestone() {
  return (
    <Container className="w-full justify-center bg-[#124363]">
      <Container className="w-full 2xl:max-w-480 grid grid-cols-1 flex-col gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-28">
        <Typography className="text-[2.25rem] leading-11 text-gray-100 lg:text-[3rem] lg:leading-16 xl:pr-[22%]">
          Measured Milestones: Independence & Discipline
        </Typography>
        <Container className=" flex-col gap-10 lg:gap-7">
          {ITEMS.map((item, i) => (
            <MilestoneRow
              key={`${item.title}-${i}`}
              item={item}
              defaultChecked={i === 0}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
