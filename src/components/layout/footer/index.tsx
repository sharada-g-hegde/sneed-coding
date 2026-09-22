// import Container from "@/components/elements/container";
// import Typography from "@/components/elements/typography";
// import Link from "next/link";
// import Media from "../../elements/media";
// import Button from "../../button";

// export default function Footer() {
//   return (
//     <Container
//       width="fullWidth"
//       className="bg-teal-700 flex px-4 py-12.75 items-center justify-center md:px-16 xl:px-32.5"
//     >
//       <Container width="pageWidth" className="items-center justify-center">
//         <Container className="w-full items-center justify-center mx-auto grid grid-cols-1 lg:grid-cols-2">
//           <Container className="flex-col gap-8">
//             <Container className="items-center gap-3 md:-mt-15 -mt-24 md:pl-0">
//               <Media
//                 src="/images/logo_footer.png"
//                 alt="Insight & Wellness"
//                 width={316}
//                 height={10}
//               />
//             </Container>

//             <Container className="flex-col gap-6 lg:pl-8 pl-10">
//               <Typography className="font-sans text-[16px] md:text-[16px] text-gray font-light">
//                 info@insightandwellness.ca
//               </Typography>

//               <Typography className="font-sans text-[16px] md:text-[16px] text-gray font-light">
//                 187 King Street East, 3rd Floor
//                 <br />
//                 Toronto, ON, M5A 1J5
//               </Typography>

//               <Container className="flex-col">
//                 <Link
//                   href="/"
//                   className="flex items-center gap-2 font-sans text-[16px] font-light text-gray"
//                 >
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clip-path="url(#clip0_7_356)">
//                       <path
//                         d="M11.3482 16H4.6518C2.08576 16 0 13.9566 0 11.4725V4.52755C0 2.04341 2.09949 0 4.6518 0H11.3482C13.9142 0 16 2.04341 16 4.52755V11.4591C16 13.9566 13.9005 15.9866 11.3482 15.9866V16ZM11.3482 14.798C12.2539 14.798 13.1184 14.4508 13.7633 13.823C14.4082 13.1953 14.765 12.3539 14.765 11.4725V4.52755C14.765 3.64608 14.4082 2.80467 13.7633 2.17696C13.1184 1.54925 12.2539 1.202 11.3482 1.202H4.6518C3.74614 1.202 2.88165 1.54925 2.23671 2.17696C1.59177 2.80467 1.23499 3.64608 1.23499 4.52755V11.4591C1.23499 12.3406 1.59177 13.182 2.23671 13.8097C2.88165 14.4374 3.74614 14.7846 4.6518 14.7846H11.3482V14.798Z"
//                         fill="white"
//                       />
//                       <path
//                         d="M12.4323 7.93314C12.4323 10.2971 10.4563 12.2203 8.02748 12.2203C5.59867 12.2203 3.62268 10.2971 3.62268 7.93314C3.62268 5.5692 5.59867 3.646 8.02748 3.646C10.4563 3.646 12.4323 5.5692 12.4323 7.93314ZM8.00004 5.12847C6.40827 5.12847 5.11839 6.38389 5.11839 7.93314C5.11839 9.48239 6.40827 10.7378 8.00004 10.7378C9.59181 10.7378 10.8817 9.48239 10.8817 7.93314C10.8817 6.38389 9.59181 5.12847 8.00004 5.12847Z"
//                         fill="white"
//                       />
//                       <path
//                         d="M12.5009 4.5945C13.0769 4.5945 13.5438 4.14006 13.5438 3.57948C13.5438 3.0189 13.0769 2.56445 12.5009 2.56445C11.9249 2.56445 11.458 3.0189 11.458 3.57948C11.458 4.14006 11.9249 4.5945 12.5009 4.5945Z"
//                         fill="white"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_7_356">
//                         <rect width="16" height="16" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>

//                   <span>Follow Us</span>
//                 </Link>

//                 <Link
//                   href="/"
//                   className="flex items-center gap-2 font-sans text-[16px] font-light text-gray"
//                 >
//                   <svg
//                     width="18"
//                     height="16"
//                     viewBox="0 0 18 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clip-path="url(#clip0_7_372)">
//                       <path
//                         d="M13.1698 12.5697C13.4755 12.2634 13.7201 11.7489 13.769 11.3201C13.8424 10.7198 13.6834 9.88669 13.7935 9.33539C13.9402 8.61257 15.0163 8.61257 15.163 9.33539C15.2364 9.70292 15.212 10.879 15.1753 11.2956C15.0652 13.023 13.6834 14.4319 11.9592 14.5911H4.52446C3.96196 14.9954 3.49728 15.6692 2.80027 15.8898C1.45516 16.3308 0.134511 15.4242 0 14.0398V5.15774C0.158967 3.39358 1.58967 2.02145 3.36277 1.91119C5.34375 1.78868 7.44701 2.0092 9.44022 1.91119C10.284 1.99695 10.3573 3.12405 9.53804 3.32007C7.54484 3.43033 5.42935 3.18531 3.4606 3.32007C2.34783 3.39358 1.47962 4.21441 1.40625 5.34151V13.9418C1.44293 14.4686 2.00543 14.7504 2.47011 14.5054C3.03261 14.1991 3.50951 13.3293 4.18207 13.1822H11.9103C12.375 13.121 12.8519 12.9005 13.1821 12.5697H13.1698Z"
//                         fill="white"
//                       />
//                       <path
//                         d="M15.6032 0.0122426C17.5475 -0.208278 18.7214 1.94792 17.5108 3.46707C15.6399 5.18223 13.9402 7.26492 12.0448 8.94333C11.1032 9.78866 9.56244 10.4625 8.27847 10.3522C7.58146 10.291 7.61815 9.60489 7.66706 9.06584C7.78934 7.79172 8.36407 6.71362 9.20782 5.78253C10.8464 3.99387 12.754 2.35221 14.4171 0.575795C14.7472 0.281768 15.1508 0.0612472 15.6032 -8.58121e-06V0.0122426ZM9.14668 8.88207C9.81923 8.75956 10.4429 8.44103 10.9809 8.02449L16.4347 2.56048C16.985 1.89892 16.1535 1.05359 15.4687 1.55589C13.5855 3.51607 11.5556 5.35374 9.75809 7.38743C9.47684 7.85298 9.23228 8.34302 9.15891 8.88207H9.14668Z"
//                         fill="white"
//                       />
//                       <path
//                         d="M2.99589 6.35819C3.10595 6.23567 3.32605 6.14992 3.49725 6.13767C3.97415 6.08866 5.24589 6.07641 5.69834 6.13767C6.5054 6.26018 6.51763 7.39953 5.77171 7.5343C5.41709 7.59555 3.71736 7.59555 3.36274 7.5343C2.8247 7.44854 2.62904 6.75022 2.99589 6.35819Z"
//                         fill="white"
//                       />
//                       <path
//                         d="M2.99589 9.17606C3.10595 9.05355 3.32605 8.96779 3.49725 8.95554C3.97415 8.90653 5.24589 8.89428 5.69834 8.95554C6.5054 9.07805 6.51763 10.2174 5.77171 10.3522C5.41709 10.4134 3.71736 10.4134 3.36274 10.3522C2.8247 10.2664 2.62904 9.56809 2.99589 9.17606Z"
//                         fill="white"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_7_372">
//                         <rect width="18" height="16" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>

//                   <span>See what we’re thinking</span>
//                 </Link>
//               </Container>
//             </Container>

//             <Container className="lg:pl-7 pl-9 lg:mt-5 mt-1">
//               <Button
//                 variant="secondary"
//                 href="/"
//                 className="w-full lg:w-fit max-w-[450px] text-center font-fraunces font-light text-[20px] md:text-[20px]"
//               >
//                 Book appointment
//               </Button>
//             </Container>
//           </Container>

//           <Container className="flex-col gap-6 pl-10 pr-4 lg:pr-0 lg:pl-0 ">
//             <Typography
//               variant="h1"
//               className="font-fraunces font-thin text-ivory mt-4 lg:mt-0"
//             >
//               Contact us
//             </Typography>

//             <Typography className="font-sans text-[15px] text-gray font-light leading-6">
//               Ask a question or book an appointment below.
//               <br className="hidden md:flex" />
//               For emergencies call 911 or visit your nearest hospital.
//             </Typography>

//             <Container className="flex-col gap-3 w-full">
//               <input
//                 type="text"
//                 placeholder="NAME"
//                 className="max-w-[450px] w-full rounded-full bg-ivory px-5 py-3 font-sans text-[14px] md:text-[14px] font-semibold text-teal-700 placeholder:text-teal-700 outline-none"
//               />
//               <input
//                 type="email"
//                 placeholder="EMAIL"
//                 className="max-w-[450px] w-full rounded-full bg-ivory px-5 py-3 font-sans text-[14px] md:text-[14px] font-semibold text-teal-700 placeholder:text-teal-700 outline-none"
//               />

//               <Container className="flex-col lg:flex-row gap-3 w-full">
//                 <textarea
//                   placeholder="MESSAGE"
//                   rows={4}
//                   className="max-w-[450px] w-full rounded-[30px] bg-ivory px-5 py-3 font-sans text-[14px] md:text-[14px] font-semibold text-teal-700 placeholder:text-teal-700 outline-none"
//                 />
//                 <Container
//                   width="fullWidth"
//                   className="items-end justify-end lg:w-auto max-w-[450px]"
//                 >
//                   <Link
//                     href="/"
//                     className="shrink-0 rounded-full border border-ivory bg-ivory  px-6 py-3 font-fraunces font-light text-[18px] text-teal-700 transition-all duration-300"
//                   >
//                     Send
//                   </Link>
//                 </Container>
//               </Container>
//             </Container>
//           </Container>
//         </Container>
//       </Container>
//     </Container>
//   );
// }
import Link from "next/link";

import Container from "@/components/elements/container";
import { JSX } from "react/jsx-runtime";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";

interface FooterLink {
  label: string;
  href: string;
}

interface PaymentIcon {
  name: string;
  src: string;
}

type SocialIconName = "youtube" | "facebook" | "linkedin" | "x";

interface SocialLink {
  name: string;
  href: string;
  icon: SocialIconName;
}

const companyLinks: FooterLink[] = [
  { label: "About Sneed", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog / Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Case Studies", href: "/case-studies" },
];

const productLinks: FooterLink[] = [
  { label: "Inkjet Printers", href: "/products/inkjet-printers" },
  { label: "Case Sealers", href: "/products/case-sealers" },
  { label: "Label Machines", href: "/products/label-machines" },
  { label: "Conveyors", href: "/products/conveyors" },
  { label: "Case Coders", href: "/products/case-coders" },
];

const industryLinks: FooterLink[] = [
  { label: "Food & Beverage", href: "/industry/food-beverage" },
  { label: "Pharmaceutical", href: "/industry/pharmaceutical" },
  { label: "Cosmetics", href: "/industry/cosmetics" },
  { label: "Industrial Manufacturing", href: "/industry/manufacturing" },
  { label: "Consumer Goods", href: "/industry/consumer-goods" },
];

const supportLinks: FooterLink[] = [
  { label: "Help Desk", href: "/help-desk" },
  { label: "FAQs", href: "/faqs" },
  { label: "Video Library", href: "/video-library" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "30-Day Performance Guarantee", href: "/guarantee" },
];

const paymentIcons: PaymentIcon[] = [
  { name: "Visa", src: "/images/visa.svg" },
  { name: "Mastercard", src: "/images/visa2.svg" },
  { name: "Discover", src: "/images/visa3.svg" },
  { name: "Amex", src: "/images/visa4.svg" },
];

const socialLinks: SocialLink[] = [
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "X", href: "https://x.com", icon: "x" },
];

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <Container width="fullWidth" className="flex-col">
      <Typography className="lg:text-[16px] font-outfit font-bold text-white">
        {title}
      </Typography>
      <ul className="mt-5 flex flex-col lg:gap-2.5 gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-inter lg:text-[14px] text-[14px] text-white transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

interface SocialIconProps {
  icon: SocialIconName;
}

function SocialIcon({ icon }: SocialIconProps) {
  const paths: Record<SocialIconName, JSX.Element> = {
    youtube: (
      <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.945C18.25 5.6 12 5.6 12 5.6s-6.25 0-7.86.456A2.75 2.75 0 0 0 2.2 8.001 28.7 28.7 0 0 0 1.75 12a28.7 28.7 0 0 0 .45 4c.24.97 1 1.72 1.94 1.945C5.75 18.4 12 18.4 12 18.4s6.25 0 7.86-.456A2.75 2.75 0 0 0 21.8 16 28.7 28.7 0 0 0 22.25 12a28.7 28.7 0 0 0-.45-3.999ZM10.1 14.65V9.35L14.9 12l-4.8 2.65Z" />
    ),
    facebook: (
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46h1.6V4.36c-.28-.04-1.22-.11-2.32-.11-2.3 0-3.87 1.4-3.87 3.97v2.28H8v3h2.4V21h3.1Z" />
    ),
    linkedin: (
      <path d="M6.94 8.5H4V19h2.94V8.5ZM5.47 4.14A1.7 1.7 0 1 0 5.49 7.54a1.7 1.7 0 0 0-.02-3.4ZM20 19h-2.94v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V19H10.26V8.5h2.82v1.43h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.53 1.96 3.53 4.5V19Z" />
    ),
    x: (
      <path d="M13.6 10.6 20 4h-1.6l-5.53 6.3L8.4 4H3.5l6.65 9.57L3.5 20h1.6l5.86-6.65L15.6 20h4.9l-6.9-9.4Zm-2.08 2.36-.68-.96L5.85 5.1h2.1l4.35 6.16.68.96 5.6 7.94h-2.1l-4.96-7Z" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      {paths[icon]}
    </svg>
  );
}

export default function Footer() {
  return (
    <Container
      width="fullWidth"
      className="mb-3 px-2 items-center justify-center"
    >
      <Container
        width="pageWidth"
        className="
          
          max-w-350
          flex-col
          rounded-[28px]
          bg-[#252531]
          px-6
          pt-10
          pb-6
          
          sm:px-10
          sm:py-12
          lg:rounded-[38px]
          lg:px-14
          lg:py-18
        "
      >
        {/* Top section */}
        <Container
          width="fullWidth"
          className="
            flex-col
            gap-10
            lg:flex-row
            lg:justify-between
            lg:gap-6
          "
        >
          {/* Company info */}
          <Container width="fullWidth" className="flex-col lg:max-w-64">
            <Typography className="font-outfit lg:text-[16px] text-[16px] font-bold text-white">
              Sneed Coding Solutions, Inc
            </Typography>
            <Typography className="mt-5 font-inter lg:text-[12px] text-[12px] text-white">
              22315 Gosling Road, Spring, TX 77389
            </Typography>
            <Typography className="lg:mt-3 mt-1 font-inter lg:text-[12px] text-[12px] text-white">
              833-991-8188
            </Typography>

            <Container className="mt-5 flex flex-nowrap gap-2 sm:grid sm:max-w-[170px] sm:grid-cols-2">
              {paymentIcons.map((icon) => (
                <Media
                  key={icon.name}
                  src={icon.src}
                  alt={icon.name}
                  width={90}
                  height={55}
                  className="h-[44px] w-[64px] shrink-0 rounded-md border border-white/10 bg-white object-contain p-1"
                />
              ))}
            </Container>
          </Container>

          {/* Link columns - mobile: 2x2 grid, desktop: row */}
          <Container
            width="fullWidth"
            className="
              grid
              grid-cols-2
              gap-x-6
              gap-y-10
              sm:gap-x-10
              lg:flex
              lg:flex-1
              lg:justify-between
              lg:gap-6
            "
          >
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Products" links={productLinks} />
            <FooterColumn title="By Industry" links={industryLinks} />
            <FooterColumn title="Support" links={supportLinks} />
          </Container>
        </Container>

        {/* Disclaimer */}
        <Typography className="mt-10 font-inter lg:text-[12px] text-[12px] leading-relaxed text-[#EBD1D2] lg:mt-14">
          All manufacturers&apos; names, symbols and descriptions are used for
          reference purposes only, and it is not implied that any part listed is
          the product of these manufacturers
        </Typography>

        {/* Divider */}
        <Container
          width="fullWidth"
          className="mt-6 border-t border-white/10"
        />

        {/* Bottom bar */}
        <Container
          width="fullWidth"
          className="
            mt-4
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <Container
            width="fullWidth"
            className="
              flex-col
              lg:gap-2
              sm:flex-row
              sm:items-center
              gap-4
            "
          >
            <Typography className="font-inter lg:text-[12px] text-[12px] text-[#EBD1D2]">
              © 2026, Sneed Coding Solutions. All rights reserved
            </Typography>
            <Container
              width="auto"
              className="items-center lg:justify-center justify-start lg:mx-auto gap-4"
            >
              <Link
                href="/privacy-policy"
                className="font-sans text-xs text-[#EBD1D2] hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="font-sans text-xs text-[#EBD1D2] hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="font-sans text-xs text-[#EBD1D2] hover:text-white"
              >
                Sitemap
              </Link>
            </Container>
          </Container>

          <Container className="items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#252531] transition-opacity hover:opacity-80"
              >
                <SocialIcon icon={social.icon} />
              </Link>
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
