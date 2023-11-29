import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SmallBackgroundImage`.
 */
export type SmallBackgroundImageProps =
  SliceComponentProps<Content.SmallBackgroundImageSlice>;

/**
 * Component for "SmallBackgroundImage" Slices.
 */
const SmallBackgroundImage = ({
  slice,
}: SmallBackgroundImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for small_background_image (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default SmallBackgroundImage;
