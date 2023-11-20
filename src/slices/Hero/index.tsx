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
    <p className="text-center text-lg md:text-xl text-black-500 mt-8 mb-10">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  console.log("slice", slice);
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
        <div className="pt-[8rem]"></div>
        <div className="bond-div uppercase">
          <PrismicRichText field={slice.primary.bond} components={components} />
        </div>
        <div className="header-div">
          <PrismicRichText
            field={slice.primary.header}
            components={components}
          />
        </div>
        <div className="subheader-div mx-[5rem]">
          <PrismicRichText
            field={slice.primary.sub_header}
            components={components}
          />
        </div>
        <div className="mx-[8rem]">
          <div className="image-div">
            <PrismicNextImage field={slice.primary.image} className="py-4" />
            {/* popup video will have to wait */}
          </div>
          <div className="cta-div">
            <Button field={slice.primary.cta_link} className="">
              {slice.primary.cta_text}
            </Button>
          </div>
        </div>
        <div className="key-points-div mt-8 flex gap-8 flex-wrap">
          {slice.items.map(({ key_point_image }, index) => (
            <PrismicNextImage key={"item-" + index} field={key_point_image} />
          ))}
        </div>
        <div className="transition-div absolute bottom-0 left-0">
          <PrismicNextImage field={slice.primary.transition_image} />
        </div>
        <div className="pb-[200px]"></div>
      </Bounded>
    </div>
  );
};

export default Hero;
