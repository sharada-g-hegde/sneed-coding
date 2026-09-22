import React from "react";
import NextLink, { LinkProps } from "next/link";
import { cn, tv, VariantProps } from "tailwind-variants";

type BaseProps = {
  children?: React.ReactNode;
  linkType?: "internal" | "external" | "link";
  href: string;
  className?: string;
} & VariantProps<typeof variants>;

type InternalLinkProps = BaseProps & LinkProps;
type ExternalLinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
type IProps = InternalLinkProps | ExternalLinkProps;

const variants = tv({
  base: "flex",
  variants: {
    bgcolor: {
      none: "",
      teal: "bg-teal-700 text-ivory",
      ivory: "bg-ivory text-teal-700",
    },
    border: {
      none: "",
      teal: "border border-teal-700",
      ivory: "border border-ivory",
    },
    variant: {
      Link: "",
      Primary:
        "rounded-full border border-transparent bg-teal-700 px-4.5 lg:py-2.75 py-1.5 text-ivory  transition-all duration-300 hover:border-teal-700 hover:bg-transparent hover:text-teal-700",
      Secondary:
        "rounded-full border border-transparent text-teal-700 bg-ivory px-5.25 py-2.25 transition-all duration-300  hover:border-ivory hover:bg-transparent hover:text-ivory",
    },
  },
  defaultVariants: { variant: "Primary", bgcolor: "none", border: "none" },
});

export default function Link({
  children,
  href,
  linkType = "internal",
  className,
  bgcolor,
  border,
  variant = "Primary",
  ...rest
}: IProps) {
  if (linkType === "external") {
    return (
      <a
        href={href ?? "#"}
        target="_blank"
        className={cn(variants({ variant, bgcolor, border }), className)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href ?? "#"}
      className={cn(variants({ variant, bgcolor, border }), className)}
      {...rest}
    >
      {children}
    </NextLink>
  );
}
