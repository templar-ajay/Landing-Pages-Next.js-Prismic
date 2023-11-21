import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Section3`.
 */
export type Section3Props = SliceComponentProps<Content.Section3Slice>;

/**
 * Component for "Section3" Slices.
 */
const Section3 = ({ slice }: Section3Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for section3 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Section3;
