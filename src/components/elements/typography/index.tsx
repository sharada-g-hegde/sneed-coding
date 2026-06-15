import { cn } from "@/utils";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";

type IComponentType = "p" | "h1" | "h2" | "h3" | "h4" | "span";

type IProps<T extends IComponentType> = {
  component?: T;
} & React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof variants>;

const variants = tv({
  base: "font-DM-Sans",
  variants: {
    variant: {
      h1: "text-[48px] leading-14 md:text-[72px] md:leading-20",
      h2: "text-[32px] leading-10 font-light md:text-[40px] md:leading-11.75",
      h3: "text-[24px] leading-8 font-normal md:text-[32px] md:leading-10.25",
      h4: "text-[20px] leading-5.5 font-normal md:text-[24px] md:leading-8",
      p: "text-[16px] leading-6 font-normal md:text-[18px] md:leading-7.5",
      lead: "text-[20px] leading-8 font-light md:text-[24px] md:leading-8",
      legend: "text-[14px] leading-7 tracking-[20%] uppercase",
      action: "text-[16px] leading-6",
      small: "text-[14px] leading-5.75 font-light",
      span: "text-12 md:text-18 leading-14 md:leading-20",
    },
  },

  defaultVariants: { variant: "p" },
});

export default function Typography<T extends IComponentType>({
  children,
  component,
  className,
  ...rest
}: IProps<T>) {
  const Component = component || "p";
  return (
    <Component
      className={cn(
        variants({ variant: rest.variant ?? component }),
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
