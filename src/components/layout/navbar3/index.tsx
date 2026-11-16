"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/utils";
import Container from "@/components/elements/container";

type NavLink = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavLink[] };

const LEFT_ITEMS: NavItem[] = [
  {
    label: "Estate Plans",
    children: [
      { label: "Will", href: "/will" },
      { label: "Living Trust", href: "/trust" },
      { label: "Power of Attorney", href: "/power-of-attorney" },
    ],
  },
  {
    label: "For Professionals",
    children: [
      { label: "Financial Advisors", href: "/professionals/advisors" },
      { label: "Attorneys", href: "/professionals/attorneys" },
      { label: "Employers", href: "/professionals/employers" },
    ],
  },
  { label: "Services", href: "/services" },
];

const RIGHT_ITEMS: NavItem[] = [
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/contact" },
  { label: "Log In", href: "/login" },
];

const QUIZ_HREF = "/quiz";

const linkStyles =
  "whitespace-nowrap text-base font-semibold text-black transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";

const ctaStyles =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#0077C8] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#0065AB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077C8]";

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Trust & Will home" className={className}>
      {/* Replace with your own logo asset */}
      <Image
        src="/images/navbar-logo.svg"
        alt="Trust & Will, powered by estateOS"
        width={280}
        height={72}
        priority
        className="h-auto w-34.5 lg:w-52 xl:w-70"
      />
    </Link>
  );
}

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(linkStyles, "inline-flex items-center gap-1")}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn("size-4 transition-transform", open && "rotate-180")}
          strokeWidth={3}
        />
      </button>

      {open && (
        <ul className="absolute left-0 top-full z-50 min-w-56 rounded-xl border border-black/10 bg-[#FEFEF2] p-2 shadow-lg">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-black hover:bg-black/5"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href ?? "#"}
          onClick={onNavigate}
          className="block py-5 text-lg font-bold text-black"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 py-5 text-lg font-bold text-black"
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn("size-5 transition-transform", open && "rotate-180")}
          strokeWidth={3}
        />
      </button>

      {open && (
        <ul className="pb-3 pl-4">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block py-3 text-base font-medium text-black/80"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) =>
      e.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Container
      component="header"
      width="fullWidth"
      className="sticky top-0 z-50 border-t border-black bg-[#FEFEF2]"
    >
      <Container
        component="nav"
        width="pageWidth"
        aria-label="Main"
        className="relative mx-auto h-18 items-center justify-between px-6 lg:grid lg:h-32 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:px-6 xl:gap-10 xl:px-10"
      >
        <ul className="hidden items-center justify-end gap-6 lg:flex xl:gap-12">
          {LEFT_ITEMS.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <li key={item.label}>
                <Link href={item.href ?? "#"} className={linkStyles}>
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <Logo className="mx-auto lg:mx-0" />

        <Container className="hidden items-center gap-6 lg:flex xl:gap-12">
          <ul className="flex items-center gap-6 xl:gap-12">
            {RIGHT_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href ?? "#"} className={linkStyles}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href={QUIZ_HREF} className={ctaStyles}>
            Quiz: Find Your Plan
          </Link>

          <button
            type="button"
            aria-label="Select language"
            className={cn(linkStyles, "inline-flex items-center gap-1 text-sm")}
          >
            EN
            <ChevronDown aria-hidden className="size-4" strokeWidth={3} />
          </button>
        </Container>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-black lg:hidden"
        >
          {menuOpen ? (
            <X className="size-7" strokeWidth={2} />
          ) : (
            <Menu className="size-7" strokeWidth={2} />
          )}
        </button>
      </Container>

      {menuOpen && (
        <Container
          component="aside"
          id="mobile-menu"
          width="fullWidth"
          className="fixed inset-x-0 bottom-0 top-17 flex-col justify-between overflow-y-auto border-t border-black/30 bg-[#FEFEF2] lg:hidden"
        >
          <ul className="flex flex-col px-7 pt-4">
            {[
              ...LEFT_ITEMS,
              ...RIGHT_ITEMS.filter((i) => i.label !== "Log In"),
            ].map((item) => (
              <MobileItem key={item.label} item={item} onNavigate={closeMenu} />
            ))}
          </ul>

          <Container
            component="footer"
            className="flex-col gap-6 border-t border-black/30 px-7 pb-8 pt-6"
          >
            <Link
              href={QUIZ_HREF}
              onClick={closeMenu}
              className={cn(ctaStyles, "w-full")}
            >
              Quiz: Find Your Plan
            </Link>
            <Link
              href="/login"
              onClick={closeMenu}
              className="self-center text-lg font-semibold text-black underline underline-offset-4"
            >
              Log In to Estate Plan →
            </Link>
          </Container>
        </Container>
      )}
    </Container>
  );
}
