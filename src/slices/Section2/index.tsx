import AfterCtaText from "@/components/AfterCtaText";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
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
      <Heading as="h3" size="xs" className="font-body mb-2">
        {children}
      </Heading>
    );
  },
  paragraph: ({ children }) => (
    <Paragraph className="text-lg md:text-xl text-black-500 mt-2 mb-10">
      {children}
    </Paragraph>
  ),
};

/**
 * Props for `Section2`.
 */
export type Section2Props = SliceComponentProps<Content.Section2Slice>;

/**
 * Component for "Section2" Slices.
 */
const Section2 = ({ slice }: Section2Props): JSX.Element => {
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
        {Boolean(slice.primary.transition_in_image) && (
          <>
            <div className="mt-[200px]"></div>
            <div className="transition-div absolute top-0 left-0 w-full">
              <PrismicNextImage
                field={slice.primary.transition_in_image}
                className="w-full"
              />
            </div>
          </>
        )}
        <div className="title-div mb-[4rem]">
          <PrismicRichText
            field={slice.primary.title}
            components={components}
          />
        </div>
        {/* repeatable zone elements */}
        <div className="key-points-div mx-[10rem]">
          {slice.items.map(({ heading, description }, index) => (
            <>
              <div className="icon-div absolute -translate-x-14">
                <PrismicNextImage field={slice.primary.key_point_icon} />
              </div>
              <PrismicRichText
                key={"heading-" + index}
                field={heading}
                components={components}
              />
              <div className="description-div mb-8">
                <PrismicRichText
                  key={"description" + index}
                  field={description}
                  components={components}
                />
              </div>
            </>
          ))}
        </div>
        {/*  */}
        <div className="mx-[10rem]">
          <Button field={slice.primary.cta_link}>
            {slice.primary.cta_text}
          </Button>
          <AfterCtaText field={slice.primary.after_cta_text} />
        </div>
        {Boolean(slice.primary.transition_out_image) && (
          <>
            <div className="mt-[200px]"></div>
            <div className="transition-div absolute bottom-0 left-0 w-full">
              <PrismicNextImage
                field={slice.primary.transition_out_image}
                className="w-full"
              />
            </div>
          </>
        )}
      </Bounded>
    </div>
  );
};

export default Section2;
