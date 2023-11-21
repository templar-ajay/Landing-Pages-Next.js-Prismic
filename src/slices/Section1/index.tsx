import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => {
    return (
      <Heading as="h2" size="lg" className="font-semibold text-center mb-4">
        {children}
      </Heading>
    );
  },
  heading1: ({ children }) => {
    return (
      <Heading as="h1" size="xs" className="font-light text-center mb-4">
        {children}
      </Heading>
    );
  },
  heading3: ({ children }) => {
    return (
      <Heading as="h3" size="sm" className="font-body text-center mb-4">
        {children}
      </Heading>
    );
  },
  paragraph: ({ children }) => (
    <p className="text-lg md:text-xl text-black-500 mt-8 mb-10">{children}</p>
  ),
};

/**
 * Props for `Section1`.
 */
export type Section1Props = SliceComponentProps<Content.Section1Slice>;

/**
 * Component for "Section1" Slices.
 */
const Section1 = ({ slice }: Section1Props): JSX.Element => {
  return (
    <div className="relative">
      <PrismicNextImage
        className="absolute -z-10 w-full h-full object-cover"
        field={slice.primary.background_image}
      />
      <Bounded
        as="section"
        className="md:px-[12rem]"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="transition-div absolute top-0 left-0 w-full">
          <PrismicNextImage
            field={slice.primary.transition_image_1}
            className="w-full"
          />
        </div>
        {Boolean(slice.primary.transition_image_1) && (
          <div className="mt-[200px]"></div>
        )}
        <div className="title-div mx-[5rem] mb-20">
          <PrismicRichText
            field={slice.primary.title}
            components={components}
          />
        </div>
        {Boolean(slice.primary.image) && (
          <div className="image-div -mx-20">
            <PrismicNextImage field={slice.primary.image} />
            {/* popup video will have to wait */}
          </div>
        )}
        <div className="text-div mx-[12rem]">
          <PrismicRichText field={slice.primary.text} components={components} />
        </div>
        <div className="mx-[10rem]">
          <Button field={slice.primary.cta_link}>
            {slice.primary.cta_text}
          </Button>
        </div>
        <div className="after-cta-div text-center mx-[12rem]">
          <PrismicRichText
            field={slice.primary.after_cta_text}
            components={components}
          />
        </div>
        <div className="transition-div absolute bottom-0 left-0 w-full">
          <PrismicNextImage
            field={slice.primary.transition_out_image}
            className="w-full"
          />
        </div>
        {Boolean(slice.primary.transition_out_image) && (
          <div className="mt-[200px]"></div>
        )}
      </Bounded>
    </div>
  );
};

export default Section1;