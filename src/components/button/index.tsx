import { cn } from "@/utils";
import { tv, VariantProps } from "tailwind-variants";

const variants = tv({
  base: "cursor-pointer leading-6",
  variants: {
    variant: {
      button: "",
      Primary:
        "rounded-full border border-transparent bg-teal-700 px-4.5 lg:py-2.5 py-1.5 text-ivory font-fraunces font-light transition-all duration-300 hover:border-[#3d5c52] hover:bg-transparent hover:text-[#3d5c52]",
      Secondary:
        "rounded-full border border-transparent text-teal-700 bg-ivory px-5.25 py-2.25 transition-all duration-300 hover:border-ivory hover:bg-transparent hover:text-ivory",
    },
  },
  defaultVariants: { variant: "Primary" },
});

type IProps = {
  children?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof variants>;

export default function Button({ children, className, ...rest }: IProps) {
  return (
    <button
      className={cn(variants({ variant: rest.variant }), className)}
      {...rest}
    >
      {children}
    </button>
  );
}
