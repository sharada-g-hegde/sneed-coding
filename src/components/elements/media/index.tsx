import Image, { ImageProps } from "next/image";

type Iprops = {
  alt?: string;
} & ImageProps;

export default function Media({ alt, ...rest }: Iprops) {
  return <Image alt={alt || ""} {...rest} />;
}
