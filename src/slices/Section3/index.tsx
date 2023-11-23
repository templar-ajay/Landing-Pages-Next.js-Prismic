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
import clsx from "clsx";

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
      <Heading as="h3" size="md" className="font-body mb-4">
        {children}
      </Heading>
    );
  },
  paragraph: ({ children }) => (
    <Paragraph className="text-lg md:text-xl text-black-500 my-8">
      {children}
    </Paragraph>
  ),
};

/**
 * Props for `Section3`.
 */
export type Section3Props = SliceComponentProps<Content.Section3Slice>;

/**
 * Component for "Section3" Slices.
 */
const Section3 = ({ slice }: Section3Props): JSX.Element => {
  return (
    <section>
      {slice.items.map(
        (
          {
            title,
            text,
            image,
            keep_image_right,
            background_image,
            cta_text,
            cta_link,
            after_cta_text,
          },
          index
        ) => (
          <div className="relative" key={"div-" + index}>
            <PrismicNextImage
              className="absolute -z-10 w-full h-full object-cover"
              field={background_image}
            />
            <Bounded
              as="div"
              data-slice-type={slice.slice_type}
              data-slice-variation={slice.variation}
            >
              <div
                className={clsx(
                  keep_image_right == true ? " " : "flex-row-reverse ",
                  "flex flex-wrap-reverse gap-y-8"
                )}
              >
                <div className="flex-1 min-w-[22rem]">
                  <div className="px-10">
                    <div className="title-div mb-5">
                      <PrismicRichText field={title} components={components} />
                    </div>
                    <div className="text-div">
                      <PrismicRichText field={text} components={components} />
                    </div>
                    {Boolean(cta_text) && (
                      <div className="cta-div">
                        <Button field={cta_link}>{cta_text}</Button>
                      </div>
                    )}
                    <AfterCtaText field={after_cta_text} />
                  </div>
                </div>
                <div className="flex-1 min-w-[22rem]">
                  <div className="w-full px-10 pt-5">
                    <PrismicNextImage field={image} />
                  </div>
                </div>
              </div>
            </Bounded>
          </div>
        )
      )}
    </section>
  );
};

export default Section3;
