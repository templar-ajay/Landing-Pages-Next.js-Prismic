import AfterCtaText from "@/components/AfterCtaText";
import BackgroundOfSmallImages from "@/components/BackgroundOfSmallImages";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";
type componentsType = ({}: any) => JSXMapSerializer;

const components: componentsType = ({ title_color, paragraph_color }) => {
  return {
    heading2: ({ children }) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="font-semibold text-center mb-4"
          color={title_color}
        >
          {children}
        </Heading>
      );
    },
    heading1: ({ children }) => {
      return (
        <Heading
          as="h1"
          size="xs"
          className="font-light text-center mb-4"
          color={title_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }) => {
      return (
        <Heading
          as="h3"
          size="md"
          className="font-body mb-4"
          color={title_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }) => (
      <Paragraph
        className="text-lg md:text-xl text-black-500 my-8"
        color={paragraph_color}
      >
        {children}
      </Paragraph>
    ),
  };
};

/**
 * Props for `Section3`.
 */
export type Section3Props = SliceComponentProps<Content.Section3Slice>;

/**
 * Component for "Section3" Slices.
 */
const Section3 = async ({ slice }: Section3Props): Promise<JSX.Element> => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const { primary_color } = settings.data;

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
            title_color,
            paragraph_color,
            background_of_small_images,
          },
          index
        ) => (
          <div className="relative" key={"div-" + index}>
            <PrismicNextImage
              className="absolute -z-20 w-full h-full object-cover"
              field={background_image}
            />
            {background_of_small_images?.uid && (
              <BackgroundOfSmallImages uid={background_of_small_images?.uid} />
            )}
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
                  <div className="px-0 sm:px-10">
                    <div className="title-div mb-5">
                      <PrismicRichText
                        field={title}
                        components={components({
                          title_color: title_color,
                          paragraph_color: paragraph_color,
                        })}
                      />
                    </div>
                    <hr
                      className="w-32 h-1 mx-auto my-4 border-0 rounded md:my-10"
                      style={{ backgroundColor: primary_color || "grey" }}
                    ></hr>
                    <div className="text-div">
                      <PrismicRichText
                        field={text}
                        components={components({
                          title_color: title_color,
                          paragraph_color: paragraph_color,
                        })}
                      />
                    </div>
                    {Boolean(cta_text) && (
                      <div className="cta-div">
                        <Button field={cta_link}>{cta_text}</Button>
                      </div>
                    )}
                    <AfterCtaText
                      field={after_cta_text}
                      color={paragraph_color}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-[22rem]">
                  <div className="w-full h-full px-0 mobile:px-10 pt-5 flex items-center justify-evenly">
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
