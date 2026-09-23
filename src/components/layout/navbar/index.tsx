"use client";

import { useEffect, useState } from "react";
import Container from "@/components/elements/container";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import Cart from "@/components/widgets/cart";
import { cn } from "@/utils";

type SubLink = { label: string; href: string };
type MegaColumn = { heading: string; links: SubLink[] };
type ResourceItem = {
  label: string;
  children: { heading: string; links: SubLink[] };
};

const PRODUCT_COLUMNS: MegaColumn[] = [
  {
    heading: "Categories",
    links: [
      { label: "Titan CIJ 100", href: "/" },
      { label: "Titan CIJ 300", href: "/" },
      { label: "Compact CIJ Lite", href: "/" },
      { label: "High-Speed CIJ Pro", href: "/" },
      { label: "Industrial CIJ Max", href: "/" },
    ],
  },
  {
    heading: "Inkjet Printers SERIES",
    links: [
      { label: "Thermal Transfer TTO", href: "/" },
      { label: "Direct Thermal Printer", href: "/" },
      { label: "Label Applicator LA-2", href: "/" },
      { label: "Print & Apply System", href: "/" },
    ],
  },
];

const SOLUTIONS_COLUMNS: MegaColumn[] = [
  { heading: "Categories", links: PRODUCT_COLUMNS[0].links },
  { heading: "Categories", links: PRODUCT_COLUMNS[0].links },
  { heading: "Categories", links: PRODUCT_COLUMNS[0].links },
];

const RESOURCE_SUBLINKS: SubLink[] = [
  { label: "Food & Beverage", href: "/" },
  { label: "Pharmaceutical", href: "/" },
  { label: "Cosmetics", href: "/" },
  { label: "Electronics", href: "/" },
];

const RESOURCE_ITEMS: ResourceItem[] = [
  {
    label: "Case Studies",
    children: { heading: "Case Studies", links: RESOURCE_SUBLINKS },
  },
  {
    label: "Blog",
    children: { heading: "Case Studies", links: RESOURCE_SUBLINKS },
  },
  {
    label: "Documentation",
    children: { heading: "Case Studies", links: RESOURCE_SUBLINKS },
  },
  {
    label: "Video Tutorials",
    children: { heading: "Case Studies", links: RESOURCE_SUBLINKS },
  },
  {
    label: "Support Center",
    children: { heading: "Case Studies", links: RESOURCE_SUBLINKS },
  },
];

const MOBILE_SECTIONS: { id: string; label: string; links: SubLink[] }[] = [
  {
    id: "products",
    label: "Products",
    links: Array(5).fill({ label: "Page Name", href: "/" }),
  },
  {
    id: "solutions",
    label: "Solutions",
    links: Array(5).fill({ label: "Page Name", href: "/" }),
  },
  {
    id: "resources",
    label: "Resources",
    links: Array(5).fill({ label: "Page Name", href: "/" }),
  },
  {
    id: "help",
    label: "Help Desk",
    links: Array(5).fill({ label: "Page Name", href: "/" }),
  },
  {
    id: "company",
    label: "Company",
    links: Array(5).fill({ label: "Page Name", href: "/" }),
  },
];

function NavPill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      variant="Link"
      className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent px-4 py-2 text-[1rem] leading-6 font-outfit font-semibold text-white hover:text-brand-100"
    >
      <span className="inline-block w-full text-center">{children}</span>
    </Link>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={className}
    >
      <path
        d="M3.71094 8.29995L6.4276 5.58328C6.74844 5.26245 6.74844 4.73745 6.4276 4.41662L3.71094 1.69995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={cn(
        "ml-auto shrink-0 transition-transform duration-300 ease-out",
        open && "rotate-90 text-[#9A1A1C]",
      )}
    >
      <path
        d="M5.25 2.91699L9.33333 7.00033L5.25 11.0837"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DesktopDropdown({
  trigger,
  children,
  panelClassName,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  panelClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Container
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      {trigger}
      <Container
        className={cn(
          "flex w-auto absolute top-full pt-3 transition-opacity duration-150",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
          panelClassName,
        )}
      >
        {children}
      </Container>
    </Container>
  );
}

function MegaMenuPanel({
  columns,
  width = "w-[min(656px,calc(100vw-2rem))]",
}: {
  columns: MegaColumn[];
  width?: string;
}) {
  return (
    <Container
      className={cn(
        "flex rounded-2xl bg-[#4E0F13] py-6 px-8 shadow-2xl shadow-black/10 flex-col",
        width,
      )}
    >
      <Container
        className={cn(
          "grid gap-8",
          columns.length === 3 ? "grid-cols-3" : "grid-cols-2",
        )}
      >
        {columns.map((col, i) => (
          <Container key={i} className="flex w-auto flex-col">
            <Typography className="font-outfit text-[16px] leading-6 font-semibold text-white pl-6 pb-1.5 -mt-0.5">
              {col.heading}
            </Typography>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                variant="Link"
                className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
              >
                <span className="inline-block w-full text-center">
                  {link.label}
                </span>
              </Link>
            ))}
          </Container>
        ))}
      </Container>
      <Container className="w-auto mt-2 flex items-center justify-between px-6 py-2.5">
        <Link
          href="/"
          variant="Link"
          className="flex w-full cursor-pointer items-center gap-2 sm:w-auto hover:bg-[#F3E4E4] bg-white border-brand-500 text-[#4E0F13] font-outfit rounded-4xl border px-6 py-3 text-[1rem] leading-6 font-semibold"
        >
          <span className="inline-block w-full text-center">
            Take the Product Selector Quiz
          </span>
        </Link>
      </Container>
    </Container>
  );
}

function ResourceFlyoutItem({ item }: { item: ResourceItem }) {
  const [open, setOpen] = useState(false);

  return (
    <Container
      className="relative w-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href="/"
        variant="Link"
        className="flex w-full cursor-pointer items-center hover:bg-brand-100 bg-white font-outfit bg-transparent! font-semibold *:flex sm:w-full *:items-center *:justify-between rounded-lg gap-2 pl-6 pr-4 py-2 text-sm font-inter! font-normal! transition-colors text-brand-100"
      >
        <span className="inline-block w-full text-center text-white">
          {item.label}
          <ChevronRight className="text-white" />
        </span>
      </Link>

      <Container
        className={cn(
          "flex w-auto absolute left-58.25 top-0 transition-opacity duration-150",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <Container className="flex w-52.5 rounded-2xl flex-col bg-[#4E0F13] py-4 shadow-2xl shadow-black/10">
          <Typography className="font-inter text-sm leading-5 px-6 py-2 font-semibold text-white">
            {item.children.heading}
          </Typography>
          {item.children.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              variant="Link"
              className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
            >
              <span className="inline-block w-full text-center">
                {link.label}
              </span>
            </Link>
          ))}
        </Container>
      </Container>
    </Container>
  );
}

function MobileAccordionSection({
  section,
  isOpen,
  onToggle,
}: {
  section: (typeof MOBILE_SECTIONS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <Container className="w-full flex-col">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer gap-2 items-center py-4"
      >
        <Typography
          className={cn(
            "font-outfit text-lg font-semibold leading-6",
            isOpen ? "text-[#9A1A1C]" : "text-gray-700",
          )}
        >
          {section.label}
        </Typography>
        <ChevronDown open={isOpen} />
      </button>

      <Container
        className={cn(
          "flex w-auto flex-col overflow-hidden transition-all duration-300 ease-out border-t border-gray-300",
          isOpen ? "py-3 h-auto border-b border-t-[#9A1A1C]" : "h-0",
        )}
      >
        <Container className="flex w-auto flex-col">
          {section.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              variant="Link"
              className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
            >
              <span className="inline-block w-full text-center">
                {link.label}
              </span>
            </Link>
          ))}
        </Container>
      </Container>
    </Container>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null,
  );

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobileSection = (id: string) =>
    setOpenMobileSection((prev) => (prev === id ? null : id));

  return (
    <Container
      width="fullWidth"
      className="fixed left-0 top-0 right-0 justify-center z-50 transition-all duration-300 ease-in-out max-lg:bg-white"
    >
      <Container className="flex 3xl:max-w-[120rem] w-full 2xl:max-w-360 lg:px-6 xl:px-16 py-1.25 sm:py-2 lg:py-6 flex-col lg:flex-row lg:items-center justify-between lg:gap-1">
        <Container className="flex items-center w-full max-lg:px-4">
          <Link
            href="/"
            variant="Link"
            className="cursor-pointer gap-2 sm:w-auto bg-transparent items-center shrink-0 w-auto flex justify-center lg:px-5.25 lg:py-1 lg:rounded-full transition-colors duration-300 lg:bg-black/50! lg:mr-2 lg:backdrop-blur-md"
          >
            <span className="inline-block w-full text-center">
              <Media
                alt="navbar logo"
                height={47}
                width={136}
                src="/images/sneed-logo.webp"
                className="w-28 lg:w-29.5 hidden lg:flex shrink-0"
              />
              <Media
                alt="navbar logo"
                height={47}
                width={136}
                src="/images/logo-black.webp"
                className="w-28 lg:hidden shrink-0"
              />
            </span>
          </Link>

          <Container className="lg:hidden ml-auto gap-4 items-center">
            <Link
              href="/"
              variant="Link"
              className="flex w-full cursor-pointer items-center gap-2 sm:w-auto text-brand-600 hover:bg-brand-100 bg-white font-outfit bg-transparent! text-lg leading-6 font-semibold"
            >
              <span className="inline-block w-full text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177Z"
                    fill="#27252F"
                  />
                </svg>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => {
                setCartOpen(true);
                setMobileOpen(false);
              }}
              className="flex w-full cursor-pointer items-center gap-2 bg-transparent! font-outfit text-lg font-semibold leading-6 text-brand-600 hover:bg-brand-100 sm:w-auto"
              aria-haspopup="dialog"
              aria-expanded={cartOpen}
              aria-label="Cart, empty"
            >
              <span className="inline-block w-full text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z"
                    stroke="#27252F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              className="flex h-6 w-6 cursor-pointer items-center justify-center lg:hidden"
            >
              {mobileOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </Container>

          <Container className="w-auto lg:flex hidden lg:bg-black/50! lg:backdrop-blur-md lg:rounded-full lg:px-4 lg:py-1.25">
            <DesktopDropdown
              trigger={<NavPill href="/">Products</NavPill>}
              panelClassName="left-[-180px]"
            >
              <MegaMenuPanel columns={PRODUCT_COLUMNS} />
            </DesktopDropdown>

            <DesktopDropdown
              trigger={<NavPill href="/">Solutions</NavPill>}
              panelClassName="left-[-280px]"
            >
              <MegaMenuPanel
                columns={SOLUTIONS_COLUMNS}
                width="w-[min(968px,calc(100vw-2rem))]"
              />
            </DesktopDropdown>

            <DesktopDropdown
              trigger={<NavPill href="/">Resources</NavPill>}
              panelClassName="left-0"
            >
              <Container className="flex w-57.5 rounded-2xl bg-[#4E0F13] py-4 shadow-2xl shadow-black/10 flex-col">
                {RESOURCE_ITEMS.map((item) => (
                  <ResourceFlyoutItem key={item.label} item={item} />
                ))}
                <Container className="group/item relative flex w-full">
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center hover:bg-brand-100 bg-white font-outfit bg-transparent! font-semibold *:flex sm:w-full *:items-center *:justify-between rounded-lg gap-2 pl-6 pr-4 py-2 text-sm font-inter! font-normal! transition-colors text-brand-100"
                  >
                    <span className="inline-block w-full text-center text-white">
                      Warranty Registration
                    </span>
                  </Link>
                </Container>
              </Container>
            </DesktopDropdown>

            <NavPill href="/">Company</NavPill>
            <NavPill href="/">Help Desk</NavPill>
          </Container>
        </Container>

        <Container
          className={cn(
            "relative w-full flex-col justify-between bg-white lg:hidden",
            mobileOpen ? "flex" : "hidden",
          )}
          aria-label="main navigation"
        >
          <Container className="p-4 h-[80vh] overflow-y-scroll flex-col">
            {MOBILE_SECTIONS.map((section) => (
              <MobileAccordionSection
                key={section.id}
                section={section}
                isOpen={openMobileSection === section.id}
                onToggle={() => toggleMobileSection(section.id)}
              />
            ))}
          </Container>

          <Container className="flex w-auto p-4 border-t border-gray-300 justify-between items-center gap-2">
            <Link
              href="/"
              variant="Link"
              className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-[#9A1A1C] hover:bg-brand-600 text-white font-outfit rounded-4xl px-6 py-3 text-[1rem] leading-6 font-semibold"
            >
              <span className="inline-block w-full text-center">Shop now</span>
            </Link>
            <Link
              href="/"
              variant="Link"
              className="flex w-full cursor-pointer items-center gap-2 sm:w-auto hover:bg-brand-100 bg-white border-[#9A1A1C] text-[#9A1A1C] font-outfit rounded-4xl border px-6 py-3 text-[1rem] leading-6 font-semibold"
            >
              <span className="inline-block w-full text-center">Log in</span>
            </Link>
          </Container>
        </Container>

        <Container className="w-auto lg:flex hidden gap-2 items-center">
          <Link
            href="/"
            variant="Link"
            className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent p-3.5 rounded-full transition-all duration-200 bg-black/50! text-white active:text-brand-100 hover:text-brand-100 backdrop-blur-md group"
          >
            <span className="inline-block w-full text-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white lg:h-5 lg:w-5 group-hover:text-brand-100"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/"
            variant="Link"
            className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent p-3.5 rounded-full transition-all duration-200 bg-black/50! text-white active:text-brand-100 hover:text-brand-100 backdrop-blur-md group"
          >
            <span className="inline-block w-full text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-white lg:h-5 lg:w-5 group-hover:text-brand-100"
              >
                <path
                  d="M9.99992 9.99984C12.3011 9.99984 14.1666 8.13436 14.1666 5.83317C14.1666 3.53198 12.3011 1.6665 9.99992 1.6665C7.69873 1.6665 5.83325 3.53198 5.83325 5.83317C5.83325 8.13436 7.69873 9.99984 9.99992 9.99984Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.1582 18.3333C17.1582 15.1083 13.9499 12.5 9.99988 12.5C6.04988 12.5 2.84155 15.1083 2.84155 18.3333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="cursor-pointer bg-white p-3.5 rounded-full transition-all duration-200 bg-black/50! text-white active:text-brand-100 hover:text-brand-100 backdrop-blur-md group"
            aria-haspopup="dialog"
            aria-expanded={cartOpen}
            aria-label="Cart, empty"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:text-brand-200 text-white"
            >
              <path
                d="M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <Link
            href="/"
            variant="Link"
            className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-[#9A1A1C] px-6 py-3 rounded-4xl text-[1rem] leading-6 font-outfit font-semibold text-white active:text-brand-200 hover:bg-brand-700"
          >
            <span className="inline-block w-full text-center">Shop</span>
          </Link>
        </Container>
      </Container>

      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </Container>
  );
}
