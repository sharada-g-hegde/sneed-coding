// import Container from "@/components/elements/container";
// import Typography from "@/components/elements/typography";

// type HeadingWithCopyProps = {
//   heading: string;
//   paragraphs: string[];
// };

// export default function HeadingWithCopy({
//   heading,
//   paragraphs,
// }: HeadingWithCopyProps) {
//   return (
//     <Container
//       width="fullWidth"
//       className="bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-24"
//     >
//       <Container
//         width="pageWidth"
//         className="mx-auto grid max-w-350 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8"
//       >
//         {/* Heading */}
//         <Typography className="m-0 font-outfit text-[32px] leading-tight font-extrabold text-[#24232D] lg:text-[56px]">
//           {heading}
//         </Typography>

//         {/* Body copy */}
//         <Container className="flex-col gap-5">
//           {paragraphs.map((paragraph, index) => (
//             <Typography
//               key={index}
//               className="m-0 font-inter text-[15px] leading-relaxed text-[#4A4A52] first:text-[14px] first:lg:leading-6! lg:text-[16px]"
//             >
//               {paragraph}
//             </Typography>
//           ))}
//         </Container>
//       </Container>
//     </Container>
//   );
// }
"use client";

import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

type HeadingWithCopyProps = {
  heading: string;
  paragraphs: string[];
};

export default function HeadingWithCopy({
  heading,
  paragraphs,
}: HeadingWithCopyProps) {
  return (
    <Container
      width="fullWidth"
      className="bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-24"
    >
      <Container
        width="pageWidth"
        className="mx-auto max-w-350 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8"
      >
        {/* Heading */}
        <Typography className="m-0 font-outfit font-extrabold text-[32px] leading-tight text-[#24232D] lg:text-[56px]">
          {heading}
        </Typography>

        {/* Body copy */}
        <Container className="flex-col gap-5">
          <Typography className="m-0 font-inter text-[14px] leading-relaxed lg:leading-6! text-[#4A4A52] lg:text-[16px] whitespace-pre-line">
            {paragraphs.join("\n\n")}
          </Typography>

          {/* <Typography className="m-0 font-inter text-[15px] leading-relaxed text-[#4A4A52] lg:text-[16px]">
            {paragraphs}
          </Typography>

          <Typography className="m-0 font-inter text-[15px] leading-relaxed text-[#4A4A52] lg:text-[16px]">
            {paragraphs}
          </Typography> */}
        </Container>
      </Container>
    </Container>
  );
}
