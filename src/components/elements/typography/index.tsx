import { cn } from "@/utils";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";

type IComponentType = "p" | "h1" | "h2" | "h3";

type IProps<T extends IComponentType> = {
  component?: T;
} & React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof variants>;

const variants = tv({
  base: "font-DM-Sans",
  variants: {
    variant: {
      h1: "text-[40px] leading-[100%] font-fraunces font-thin md:text-[44px] md:leading-[100%]",
      h2: "text-[40px] leading-[100%] md:text-[96px] lg:leading-[100%]",
      h3: "text-[12px] leading-[100%] md:text-[36px] md:leading-[100%]",
      p: "text-[16px] leading-[100%] lg:text-[16px] lg:leading-[100%]",
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
