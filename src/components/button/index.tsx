import { cn } from "@/utils";
import Link, { LinkProps } from "next/link";
import { tv, VariantProps } from "tailwind-variants";

const variants = tv({
  base: "text-4 cursor-pointer rounded-[4px] leading-6",
  variants: {
    variant: {
      primary:
        "rounded-full border border-transparent bg-teal-700 px-4.5 py-2.5 text-ivory font-fraunces font-light transition-all duration-300 hover:border-[#3d5c52] hover:bg-transparent hover:text-[#3d5c52]",
      secondary:
        "rounded-full border border-transparent text-teal-700 bg-ivory px-5.25 py-2.25 transition-all duration-300 hover:border-ivory hover:bg-transparent hover:text-ivory",
    },
  },
  defaultVariants: { variant: "primary" },
});

type IProps = {
  children?: React.ReactNode;
  className?: string;
} & LinkProps &
  VariantProps<typeof variants>;

export default function Button({ children, className, ...rest }: IProps) {
  return (
    <Link
      className={cn(variants({ variant: rest.variant }), className)}
      {...rest}
    >
      {children}
    </Link>
  );
}
