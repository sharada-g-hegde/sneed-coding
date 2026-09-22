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
        className="max-w-350 flex-col rounded-[28px] bg-[#252531] px-6 pt-10 pb-6 sm:px-10 sm:py-12 lg:rounded-[38px] lg:px-14 lg:py-18"
      >
        <Container
          width="fullWidth"
          className="flex-col gap-10 lg:flex-row lg:justify-between lg:gap-6"
        >
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

            <Container className="mt-5 flex flex-nowrap gap-2 sm:grid sm:max-w-42.5 sm:grid-cols-2">
              {paymentIcons.map((icon) => (
                <Media
                  key={icon.name}
                  src={icon.src}
                  alt={icon.name}
                  width={90}
                  height={55}
                  className="h-11 w-16 shrink-0 rounded-md border border-white/10 bg-white object-contain p-1"
                />
              ))}
            </Container>
          </Container>

          <Container
            width="fullWidth"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:flex lg:flex-1 lg:justify-between lg:gap-6"
          >
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Products" links={productLinks} />
            <FooterColumn title="By Industry" links={industryLinks} />
            <FooterColumn title="Support" links={supportLinks} />
          </Container>
        </Container>

        <Typography className="mt-10 font-inter lg:text-[12px] text-[12px] leading-relaxed text-[#EBD1D2] lg:mt-14">
          All manufacturers&apos; names, symbols and descriptions are used for
          reference purposes only, and it is not implied that any part listed is
          the product of these manufacturers
        </Typography>

        <Container
          width="fullWidth"
          className="mt-6 border-t border-white/10"
        />

        <Container
          width="fullWidth"
          className="mt-4 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <Container
            width="fullWidth"
            className="flex-col gap-4 sm:flex-row sm:items-center lg:gap-2"
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
