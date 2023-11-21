"use client";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

import React, { MouseEventHandler, ReactElement, useState } from "react";

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
      <Heading as="h1" size="xxs" className="font-light text-center mb-4">
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
  heading4: ({ children }) => {
    return (
      <Heading as="h4" size="sm" className="font-display text-center mb-4">
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
 * Props for `Reviews`.
 */
export type ReviewsProps = SliceComponentProps<Content.ReviewsSlice>;

/**
 * Component for "Reviews" Slices.
 */
const Reviews = ({ slice }: ReviewsProps): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lastSlideIndex = slice.items.length - 1;

  function handleCurrentSlide(cmd: string): any {
    if (cmd == "next") {
      if (currentSlide >= lastSlideIndex) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    } else if (cmd == "prev") {
      if (currentSlide <= 0) {
        setCurrentSlide(lastSlideIndex);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
  }

  return (
    <section className="relative">
      <PrismicNextImage
        className="absolute -z-10 w-full h-full object-cover"
        field={slice.primary.background_image}
      />
      <Bounded
        as="div"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="flex">
          <div className="basis-1/4 relative">
            <button
              type="button"
              className=" absolute right-0 top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev=""
              onClick={() => handleCurrentSlide("prev")}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
          </div>
          <div className="grow px-20">
            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
            <div className="flex justify-center mt-[5rem]">
              <PrismicNextImage
                field={slice.primary.image}
                // className="rounded-full"
              />
            </div>

            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slice.items.map(({ testimonial, name }, index) => (
                  <div
                    key={"testimonial-" + index}
                    className={clsx(
                      "duration-700 ease-in-out",
                      currentSlide == index ? " " : "hidden"
                    )}
                    data-carousel-item=""
                  >
                    {/* <img
                    src="/docs/images/carousel/carousel-1.svg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  /> */}
                    <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <PrismicRichText
                        field={testimonial}
                        components={components}
                      />
                      <PrismicRichText field={name} components={components} />
                    </div>
                  </div>
                ))}
              </div>
              {/* slider buttons */}
            </div>
          </div>
          <div className="basis-1/4 relative">
            <button
              type="button"
              className="absolute top-0 left-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next=""
              onClick={() => handleCurrentSlide("next")}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Reviews;
