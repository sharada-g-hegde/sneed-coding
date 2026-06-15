import { cn } from "@/utils";
import { tv, VariantProps } from "tailwind-variants";

type IComponentType =
  | "div"
  | "main"
  | "nav"
  | "footer"
  | "header"
  | "section"
  | "aside";

type IProps<T extends IComponentType> = {
  component?: T;
} & React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof variants>;

const variants = tv({
  base: "flex",
  variants: {
    width: {
      fullWidth: "w-full",
      auto: "w-auto",
      pageWidth: "w-full xl:max-w-360",
    },
  },

  defaultVariants: { width: "auto" },
});

export default function Container<T extends IComponentType>({
  children,
  className,
  width,
  component,
  ...rest
}: IProps<T>) {
  const Component = component || "div";

  return (
    <Component className={cn(variants({ width, className }))} {...rest}>
      {children}
    </Component>
  );
}
