"use client";

import { useEffect, useState, useRef } from "react";

import Container from "@/components/elements/container";
import { cn } from "@/utils";
import Link from "@/components/elements/link";
import Media from "@/components/elements/media";
import Typography from "@/components/elements/typography";
import Cart from "@/components/widgets/cart";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); // ← NEW
  const [navHeight, setNavHeight] = useState(0); // ← NEW
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <Container
      width="fullWidth"
      className="fixed left-0 top-0 right-0 justify-center z-50 transition-all duration-300 ease-in-out max-lg:bg-white"
    >
      <Container className="group/mobilenav flex 3xl:max-w-[120rem] w-full 2xl:max-w-360 lg:px-6 xl:px-16 py-1.25 sm:py-2 lg:py-6 flex-col lg:flex-row lg:items-center justify-between lg:gap-1">
        {" "}
        <Container className="group/mobilenav flex items-center w-full max-lg:px-4">
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
                  ></path>
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
                  ></path>
                </svg>
              </span>
            </button>
            <input
              type="checkbox"
              id="mobile-menu-button"
              className="hidden peer"
            />

            <label
              htmlFor="mobile-menu-button"
              className="group flex h-6 w-6 cursor-pointer items-center justify-center lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6 group-has-checked/mobilenav:hidden"
              >
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </svg>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="hidden h-6 w-6 group-has-checked/mobilenav:block"
              >
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </label>
          </Container>
          <Container className="w-auto lg:flex hidden lg:bg-black/50! lg:backdrop-blur-md lg:rounded-full lg:px-4 lg:py-1.25">
            <Container className="group relative">
              <Link
                href="/"
                variant="Link"
                className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent px-4 py-2 text-[1rem] leading-6 font-outfit font-semibold text-white hover:text-brand-100"
              >
                <span className="inline-block w-full text-center">
                  Products
                </span>
              </Link>
              <Container className="flex w-auto absolute left-[-180] top-full pt-3 transition-opacity duration-150 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <Container className="flex w-[min(656px,calc(100vw-2rem))] rounded-2xl bg-[#4E0F13] py-6 px-8 shadow-2xl shadow-black/10 flex-col">
                  <Container className="grid grid-cols-2 gap-8">
                    <Container className="flex w-auto flex-col">
                      <Typography className="font-outfit lg:text-[16px] text-[16px] leading-6 lg:leading-6 font-semibold text-white pl-6 pb-1.5 -mt-0.5">
                        Categories
                      </Typography>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Titan CIJ 100
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Titan CIJ 300
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Compact CIJ Lite
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          High-Speed CIJ Pro
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Industrial CIJ Max
                        </span>
                      </Link>
                    </Container>
                    <Container className="flex w-auto flex-col">
                      <Typography className="font-outfit lg:text-[16px] text-[16px] leading-6 lg:leading-6 font-semibold text-white pl-6 pb-1.5 -mt-0.5">
                        Inkjet Printers SERIES
                      </Typography>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Thermal Transfer TTO
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Direct Thermal Printer
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Label Applicator LA-2
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Print & Apply System
                        </span>
                      </Link>
                    </Container>
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
              </Container>
            </Container>
            <Container className="group relative">
              <Link
                href="/"
                variant="Link"
                className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent px-4 py-2 text-[1rem] leading-6 font-outfit font-semibold text-white hover:text-brand-100"
              >
                <span className="inline-block w-full text-center">
                  Solutions
                </span>
              </Link>
              <Container className="flex w-auto absolute left-[-280] top-full pt-3 transition-opacity duration-150 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <Container className="flex w-[min(968px,calc(100vw-2rem))] rounded-2xl bg-[#4E0F13] py-6 px-8 shadow-2xl shadow-black/10 flex-col">
                  <Container className="w-auto grid grid-cols-3 gap-8">
                    <Container className="flex w-auto flex-col">
                      <Typography className="font-outfit lg:text-[16px] text-[16px] leading-6 lg:leading-6 font-semibold text-white pl-6 pb-1.5 -mt-0.5">
                        Categories
                      </Typography>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Titan CIJ 100
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Titan CIJ 300
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Compact CIJ Lite
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          High-Speed CIJ Pro
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Industrial CIJ Max
                        </span>
                      </Link>
                    </Container>
                    <Container className="flex w-auto flex-col">
                      <Typography className="font-outfit lg:text-[16px] text-[16px] leading-6 lg:leading-6 font-semibold text-white pl-6 pb-1.5 -mt-0.5">
                        Categories
                      </Typography>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Titan CIJ 100
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Titan CIJ 300
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Compact CIJ Lite
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          High-Speed CIJ Pro
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Industrial CIJ Max
                        </span>
                      </Link>
                    </Container>
                    <Container className="flex w-auto flex-col">
                      <Typography className="font-outfit lg:text-[16px] text-[16px] leading-6 lg:leading-6 font-semibold text-white pl-6 pb-1.5 -mt-0.5">
                        Categories
                      </Typography>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Titan CIJ 100
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Titan CIJ 300
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Compact CIJ Lite
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          High-Speed CIJ Pro
                        </span>
                      </Link>
                      <Link
                        href="/"
                        variant="Link"
                        className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent pl-6! py-2! text-sm! *:text-left! leading-5! text-white"
                      >
                        <span className="inline-block w-full text-center">
                          Industrial CIJ Max
                        </span>
                      </Link>
                    </Container>
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
              </Container>
            </Container>
            <Container className="group/resources relative">
              <Link
                href="/"
                variant="Link"
                className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent px-4 py-2 text-[1rem] leading-6 font-outfit font-semibold text-white hover:text-brand-100"
              >
                <span className="inline-block w-full text-center">
                  Resources
                </span>
              </Link>

              <Container
                className={cn(
                  "flex w-auto absolute left-0 top-full pt-3",
                  "invisible opacity-0 pointer-events-none transition-opacity duration-150",
                  "group-hover/resources:visible group-hover/resources:opacity-100 group-hover/resources:pointer-events-auto",
                  "group-focus-within/resources:visible group-focus-within/resources:opacity-100 group-focus-within/resources:pointer-events-auto",
                )}
              >
                <Container className="flex w-57.5 rounded-2xl bg-[#4E0F13] py-4 shadow-2xl shadow-black/10 flex-col">
                  {/* First submenu item — repeat this block for each, with its own group/item name if you want independent flyouts */}
                  <Container className="group/item relative flex w-full">
                    <Link
                      href="/"
                      variant="Link"
                      className="flex w-full cursor-pointer items-center hover:bg-brand-100 bg-white font-outfit bg-transparent! font-semibold *:flex sm:w-full *:items-center *:justify-between rounded-lg gap-2 pl-6 pr-4 py-2 text-sm group font-inter! font-normal! transition-colors text-brand-100"
                    >
                      <span className="inline-block w-full text-center text-white">
                        Case Studies
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className="text-white group-hover:text-brand-200"
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
                      </span>
                    </Link>

                    <Container
                      className={cn(
                        "flex w-auto absolute left-full top-0",
                        "invisible opacity-0 pointer-events-none transition-opacity duration-150",
                        "group-hover/item:visible group-hover/item:opacity-100 group-hover/item:pointer-events-auto",
                        "group-focus-within/item:visible group-focus-within/item:opacity-100 group-focus-within/item:pointer-events-auto",
                      )}
                    >
                      <Container className="flex w-52.5 rounded-2xl flex-col bg-[#4E0F13] py-4 shadow-2xl shadow-black/10">
                        <Typography className="font-inter text-sm leading-5 px-6 py-2 font-semibold text-white">
                          Case Studies
                        </Typography>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Food & Beverage
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Pharmaceutical
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Cosmetics
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Electronics
                          </span>
                        </Link>
                      </Container>
                    </Container>
                  </Container>
                  <Container className="group/item relative flex w-full">
                    <Link
                      href="/"
                      variant="Link"
                      className="flex w-full cursor-pointer items-center hover:bg-brand-100 bg-white font-outfit bg-transparent! font-semibold *:flex sm:w-full *:items-center *:justify-between rounded-lg gap-2 pl-6 pr-4 py-2 text-sm group font-inter! font-normal! transition-colors text-brand-100"
                    >
                      <span className="inline-block w-full text-center text-white">
                        Blog
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className="text-white group-hover:text-brand-200"
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
                      </span>
                    </Link>

                    <Container
                      className={cn(
                        "flex w-auto absolute left-full top-0",
                        "invisible opacity-0 pointer-events-none transition-opacity duration-150",
                        "group-hover/item:visible group-hover/item:opacity-100 group-hover/item:pointer-events-auto",
                        "group-focus-within/item:visible group-focus-within/item:opacity-100 group-focus-within/item:pointer-events-auto",
                      )}
                    >
                      <Container className="flex w-52.5 rounded-2xl flex-col bg-[#4E0F13] py-4 shadow-2xl shadow-black/10">
                        <Typography className="font-inter text-sm leading-5 px-6 py-2 font-semibold text-white">
                          Case Studies
                        </Typography>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Food & Beverage
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Pharmaceutical
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Cosmetics
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Electronics
                          </span>
                        </Link>
                      </Container>
                    </Container>
                  </Container>
                  <Container className="group/item relative flex w-full">
                    <Link
                      href="/"
                      variant="Link"
                      className="flex w-full cursor-pointer items-center hover:bg-brand-100 bg-white font-outfit bg-transparent! font-semibold *:flex sm:w-full *:items-center *:justify-between rounded-lg gap-2 pl-6 pr-4 py-2 text-sm group font-inter! font-normal! transition-colors text-brand-100"
                    >
                      <span className="inline-block w-full text-center text-white">
                        Documentation
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className="text-white group-hover:text-brand-200"
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
                      </span>
                    </Link>

                    <Container
                      className={cn(
                        "flex w-auto absolute left-full top-0",
                        "invisible opacity-0 pointer-events-none transition-opacity duration-150",
                        "group-hover/item:visible group-hover/item:opacity-100 group-hover/item:pointer-events-auto",
                        "group-focus-within/item:visible group-focus-within/item:opacity-100 group-focus-within/item:pointer-events-auto",
                      )}
                    >
                      <Container className="flex w-52.5 rounded-2xl flex-col bg-[#4E0F13] py-4 shadow-2xl shadow-black/10">
                        <Typography className="font-inter text-sm leading-5 px-6 py-2 font-semibold text-white">
                          Case Studies
                        </Typography>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Food & Beverage
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Pharmaceutical
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Cosmetics
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Electronics
                          </span>
                        </Link>
                      </Container>
                    </Container>
                  </Container>
                  <Container className="group/item relative flex w-full">
                    <Link
                      href="/"
                      variant="Link"
                      className="flex w-full cursor-pointer items-center hover:bg-brand-100 bg-white font-outfit bg-transparent! font-semibold *:flex sm:w-full *:items-center *:justify-between rounded-lg gap-2 pl-6 pr-4 py-2 text-sm group font-inter! font-normal! transition-colors text-brand-100"
                    >
                      <span className="inline-block w-full text-center text-white">
                        Vedio Tutorials
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className="text-white group-hover:text-brand-200"
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
                      </span>
                    </Link>

                    <Container
                      className={cn(
                        "flex w-auto absolute left-full top-0",
                        "invisible opacity-0 pointer-events-none transition-opacity duration-150",
                        "group-hover/item:visible group-hover/item:opacity-100 group-hover/item:pointer-events-auto",
                        "group-focus-within/item:visible group-focus-within/item:opacity-100 group-focus-within/item:pointer-events-auto",
                      )}
                    >
                      <Container className="flex w-52.5 rounded-2xl flex-col bg-[#4E0F13] py-4 shadow-2xl shadow-black/10">
                        <Typography className="font-inter text-sm leading-5 px-6 py-2 font-semibold text-white">
                          Case Studies
                        </Typography>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Food & Beverage
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Pharmaceutical
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Cosmetics
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Electronics
                          </span>
                        </Link>
                      </Container>
                    </Container>
                  </Container>
                  <Container className="group/item relative flex w-full">
                    <Link
                      href="/"
                      variant="Link"
                      className="flex w-full cursor-pointer items-center hover:bg-brand-100 bg-white font-outfit bg-transparent! font-semibold *:flex sm:w-full *:items-center *:justify-between rounded-lg gap-2 pl-6 pr-4 py-2 text-sm group font-inter! font-normal! transition-colors text-brand-100"
                    >
                      <span className="inline-block w-full text-center text-white">
                        Support Center
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className="text-white group-hover:text-brand-200"
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
                      </span>
                    </Link>

                    <Container
                      className={cn(
                        "flex w-auto absolute left-full top-0",
                        "invisible opacity-0 pointer-events-none transition-opacity duration-150",
                        "group-hover/item:visible group-hover/item:opacity-100 group-hover/item:pointer-events-auto",
                        "group-focus-within/item:visible group-focus-within/item:opacity-100 group-focus-within/item:pointer-events-auto",
                      )}
                    >
                      <Container className="flex w-52.5 rounded-2xl flex-col bg-[#4E0F13] py-4 shadow-2xl shadow-black/10">
                        <Typography className="font-inter text-sm leading-5 px-6 py-2 font-semibold text-white">
                          Case Studies
                        </Typography>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Food & Beverage
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Pharmaceutical
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Cosmetics
                          </span>
                        </Link>
                        <Link
                          href="/"
                          variant="Link"
                          className="w-full cursor-pointer gap-2 sm:w-auto bg-transparent group *:text-left flex items-center justify-between rounded-lg px-6 py-2 text-sm text-white transition-colors hover:text-brand-50"
                        >
                          <span className="inline-block w-full text-center">
                            Electronics
                          </span>
                        </Link>
                      </Container>
                    </Container>
                  </Container>
                  <Container className="group/item relative flex w-full">
                    <Link
                      href="/"
                      variant="Link"
                      className="flex w-full cursor-pointer items-center hover:bg-brand-100 bg-white font-outfit bg-transparent! font-semibold *:flex sm:w-full *:items-center *:justify-between rounded-lg gap-2 pl-6 pr-4 py-2 text-sm group font-inter! font-normal! transition-colors text-brand-100"
                    >
                      <span className="inline-block w-full text-center text-white">
                        Warranty Registration
                      </span>
                    </Link>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Link
              href="/"
              variant="Link"
              className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent px-4 py-2 text-[1rem] leading-6 font-outfit font-semibold text-white hover:text-brand-100"
            >
              <span className="inline-block w-full text-center">Company</span>
            </Link>
            <Link
              href="/"
              variant="Link"
              className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent px-4 py-2 text-[1rem] leading-6 font-outfit font-semibold text-white hover:text-brand-100"
            >
              <span className="inline-block w-full text-center">Help Desk</span>
            </Link>
          </Container>
        </Container>
        <Container
          className="hidden group-has-checked/mobilenav:flex relative w-full flex-col justify-between bg-white lg:hidden"
          aria-label="main navigation"
        >
          <Container className="p-4 h-[80vh] overflow-y-scroll flex-col">
            <Container className="w-full flex-col">
              <label
                htmlFor="products-item"
                className="peer group flex w-full cursor-pointer gap-2 items-center py-4"
              >
                <Typography className="font-outfit text-lg font-semibold lg:text-xl text-gray-700 group-has-checked:text-[#9A1A1C] leading-6">
                  Products
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-auto transition-transform duration-300 ease-out group-has-checked:rotate-90 shrink-0 group-has-checked:text-[#9A1A1C]"
                >
                  <path
                    d="M5.25 2.91699L9.33333 7.00033L5.25 11.0837"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <input type="checkbox" id="products-item" className="hidden" />
              </label>
              <Container className="flex w-auto h-0 flex-col overflow-hidden transition-all duration-300 ease-out peer-has-checked:py-3 peer-has-checked:h-auto border-t peer-has-checked:border-b border-gray-300 peer-has-checked:border-t-[#9A1A1C]">
                <Container className="flex w-auto flex-col">
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                </Container>
              </Container>
            </Container>
            <Container className="w-full flex-col">
              <label
                htmlFor="solutions-item"
                className="peer group flex w-full cursor-pointer gap-2 items-center py-4"
              >
                <Typography className="font-outfit text-lg font-semibold lg:text-xl text-gray-700 group-has-checked:text-[#9A1A1C] leading-6">
                  Solutions
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-auto transition-transform duration-300 ease-out group-has-checked:rotate-90 shrink-0 group-has-checked:text-[#9A1A1C]"
                >
                  <path
                    d="M5.25 2.91699L9.33333 7.00033L5.25 11.0837"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <input type="checkbox" id="solutions-item" className="hidden" />
              </label>
              <Container className="flex w-auto h-0 flex-col overflow-hidden transition-all duration-300 ease-out peer-has-checked:py-3 peer-has-checked:h-auto border-t peer-has-checked:border-b border-gray-300 peer-has-checked:border-t-[#9A1A1C]">
                <Container className="flex w-auto flex-col">
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                </Container>
              </Container>
            </Container>
            <Container className="w-full flex-col">
              <label
                htmlFor="Resources-item"
                className="peer group flex w-full cursor-pointer gap-2 items-center py-4"
              >
                <Typography className="font-outfit text-lg font-semibold lg:text-xl text-gray-700 group-has-checked:text-[#9A1A1C] leading-6">
                  Resources
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-auto transition-transform duration-300 ease-out group-has-checked:rotate-90 shrink-0 group-has-checked:text-[#9A1A1C]"
                >
                  <path
                    d="M5.25 2.91699L9.33333 7.00033L5.25 11.0837"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <input type="checkbox" id="Resources-item" className="hidden" />
              </label>
              <Container className="flex w-auto h-0 flex-col overflow-hidden transition-all duration-300 ease-out peer-has-checked:py-3 peer-has-checked:h-auto border-t peer-has-checked:border-b border-gray-300 peer-has-checked:border-t-[#9A1A1C]">
                <Container className="flex w-auto flex-col">
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                </Container>
              </Container>
            </Container>
            <Container className="w-full flex-col">
              <label
                htmlFor="help-item"
                className="peer group flex w-full cursor-pointer gap-2 items-center py-4"
              >
                <Typography className="font-outfit text-lg font-semibold lg:text-xl text-gray-700 group-has-checked:text-[#9A1A1C] leading-6">
                  Help Desk
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-auto transition-transform duration-300 ease-out group-has-checked:rotate-90 shrink-0 group-has-checked:text-[#9A1A1C]"
                >
                  <path
                    d="M5.25 2.91699L9.33333 7.00033L5.25 11.0837"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <input type="checkbox" id="help-item" className="hidden" />
              </label>
              <Container className="flex w-auto h-0 flex-col overflow-hidden transition-all duration-300 ease-out peer-has-checked:py-3 peer-has-checked:h-auto border-t peer-has-checked:border-b border-gray-300 peer-has-checked:border-t-[#9A1A1C]">
                <Container className="flex w-auto flex-col">
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                </Container>
              </Container>
            </Container>
            <Container className="w-full flex-col">
              <label
                htmlFor="company-accordion-item"
                className="peer group flex w-full cursor-pointer gap-2 items-center py-4"
              >
                <Typography className="font-outfit text-lg font-semibold lg:text-xl text-gray-700 group-has-checked:text-[#9A1A1C] leading-6">
                  Company
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-auto transition-transform duration-300 ease-out group-has-checked:rotate-90 shrink-0 group-has-checked:text-[#9A1A1C]"
                >
                  <path
                    d="M5.25 2.91699L9.33333 7.00033L5.25 11.0837"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <input
                  type="checkbox"
                  id="company-accordion-item"
                  className="hidden"
                />
              </label>
              <Container className="flex w-auto h-0 flex-col overflow-hidden transition-all duration-300 ease-out peer-has-checked:py-3 peer-has-checked:h-auto border-t peer-has-checked:border-b border-gray-300 peer-has-checked:border-t-[#9A1A1C]">
                <Container className="flex w-auto flex-col">
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                  <Link
                    href="/"
                    variant="Link"
                    className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-transparent text-gray-600 py-3 text-[1rem] leading-6 font-inter *:text-left!"
                  >
                    <span className="inline-block w-full text-center">
                      Page Name
                    </span>
                  </Link>
                </Container>
              </Container>
            </Container>
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177Z"
                  fill="currentColor"
                ></path>
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17.1582 18.3333C17.1582 15.1083 13.9499 12.5 9.99988 12.5C6.04988 12.5 2.84155 15.1083 2.84155 18.3333"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="cursor-pointer bg-white p-3.5 rounded-full transition-all duration-200 bg-black/50! text-white active:text-brand-100 hover:text-brand-100 backdrop-blur-md group"
            aria-haspopup="dialog"
            aria-expanded="false"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <Link
            href="/"
            variant="Link"
            className="flex w-full cursor-pointer items-center gap-2 sm:w-auto bg-[#4E0F13] px-6 py-3 rounded-4xl text-[1rem] leading-6 font-outfit font-semibold text-white active:text-brand-200 hover:bg-brand-700"
          >
            <span className="inline-block w-full text-center">Shop</span>
          </Link>
        </Container>
      </Container>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </Container>
  );
}
