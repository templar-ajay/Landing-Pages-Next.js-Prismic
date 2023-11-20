import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Section1`.
 */
export type Section1Props = SliceComponentProps<Content.Section1Slice>;

/**
 * Component for "Section1" Slices.
 */
const Section1 = ({ slice }: Section1Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for section1 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Section1;
