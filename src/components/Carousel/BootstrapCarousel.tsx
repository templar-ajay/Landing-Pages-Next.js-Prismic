"use client";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Bootstrap.module.css";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const components: JSXMapSerializer = {
  heading4: ({ children }) => {
    return (
      <Heading as="h4" size="sm" className="font-body mb-0">
        {children}
      </Heading>
    );
  },
  paragraph: ({ children }) => (
    <Paragraph className="text-lg md:text-xl text-black-500 mt-0 mb-10">
      {children}
    </Paragraph>
  ),
};
export default function BootstrapCarousel({ items }: any) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items.map(({ testimonial, name }: any, index: number) => (
        <Carousel.Item key={index} className={styles.itemP} interval={4000}>
          {/* <img src={item.imageUrl} alt="slides" /> */}
          <Carousel.Caption className={styles.caption}>
            <PrismicRichText field={testimonial} components={components} />
            <PrismicRichText field={name} components={components} />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
