// import Container from "@/components/elements/container";
// import Media from "@/components/elements/media";
// import Typography from "@/components/elements/typography";
// import Link from "next/link";
// import Marquee from "react-fast-marquee";

// export default function Home() {
//   return (
//     <Container
//       width="fullWidth"
//       className="flex-col overflow-hidden w-full items-center justify-center "
//     >
//       <Container
//         className="relative flex min-h-screen w-full items-center justify-center"
//         style={{
//           backgroundImage: "url('/images/bg-1.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <Container className="flex-col overflow-hidden items-center max-w-[1440px] justify-center md:flex-row-reverse mb-10 md:px-[119px]">
//           <Media
//             src="/images/homepage-header.png"
//             alt="Hero Image"
//             width={377}
//             height={377}
//             className=" md:w-[616px]  h-auto object-cover md:hidden"
//           />
//           <Media
//             src="/images/homepage-header.png"
//             alt="Hero Image"
//             width={616}
//             height={616}
//             className=" md:w-[616px] h-auto object-cover md:flex
//             hidden"
//           />
//           <Container className="flex-col gap-2 w-1/2 ">
//             <Typography className="font-fraunces md:text-left text-center text-teal-700 font-thin md:text-[44px] text-[40px] leading-[100%]">
//               Insight & Wellness
//             </Typography>
//             <Typography
//               variant="p"
//               className="text-center md:text-left font-sans  text-teal-700 text-[16px] font-normal md:text-[16px] md:leading-5 leading-[100%] mt-1 md:max-w-[495px] "
//             >
//               A welcoming space for individuals, couples, and families focused
//               on healing and growth. Together, we explore the roots of your
//               concerns, distressing emotions, and limiting beliefs so that you
//               can move toward meaningful change. Whatever your goals are and how
//               you’d like to improve your life, we’re here to help you find the
//               best path forward.
//               <br />
//               <br /> Please select an area below to learn more about our
//               treatment options.
//             </Typography>

//             <Link
//               href="/"
//               className="
//     mt-10
//     mx-auto md:mx-0
//     flex w-fit items-center justify-center
//     rounded-full
//     border border-transparent
//     bg-teal-700
//     px-5 py-3
//     text-[18px]
//     text-ivory
//     transition-all duration-300
//     hover:border-teal-700
//     hover:bg-transparent
//     hover:text-teal-700
//     font-fraunces font-light text-[20px] md:text-[20px]
//   "
//             >
//               Book an appointment
//             </Link>
//           </Container>
//         </Container>
//       </Container>

//       <Container className="bg-teal-700 py-2">
//         <Marquee speed={30} autoFill>
//           <Container className="mx-4 flex items-center gap-4">
//             <Typography className="flex items-center gap-4 whitespace-nowrap font-sans md:text-[24px] text-[24px] font-normal text-ivory">
//               Promo Headline
//               <svg
//                 width="12"
//                 height="13"
//                 viewBox="0 0 12 13"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="shrink-0"
//               >
//                 <path
//                   d="M6.00713 13C5.20809 9.93862 2.93936 7.48661 0 6.5C2.93936 5.51339 5.20809 3.06138 6.00713 0C6.80618 3.06138 9.07491 5.51339 12.0143 6.5C9.07491 7.48661 6.80618 9.93862 6.00713 13Z"
//                   fill="#EAE5D7"
//                 />
//               </svg>
//             </Typography>
//           </Container>
//         </Marquee>
//       </Container>
//     </Container>
//   );
// }
// app/page.tsx

import Container from "@/components/elements/container";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Accordian from "@/components/widgets/accordian";
import Card from "@/components/widgets/card";
import Carousel from "@/components/widgets/carousel";
import Hero from "@/components/widgets/hero";
import TwoColumnSection from "@/components/widgets/two-column-section";
import WelcomeSection from "@/components/widgets/welcome-page";

export default function Home() {
  return (
    <Container
      width="fullWidth"
      className="flex-col items-center justify-center overflow-hidden "
    >
      <Navbar />
      <Hero />
      <Carousel />
      <Card />
      <TwoColumnSection />
      <WelcomeSection />
      <Accordian />
      <Footer />
    </Container>
  );
}
