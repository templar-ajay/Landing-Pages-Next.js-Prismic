import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function Button({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "block w-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 ease-in-out py-6 px-12 font-display font-semibold text-2xl text-center text-white tracking-wide",
        className
      )}
      {...restProps}
    />
  );
}
