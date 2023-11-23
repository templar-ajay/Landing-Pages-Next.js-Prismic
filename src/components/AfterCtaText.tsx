import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Paragraph from "./Paragraph";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Paragraph className="text-sm text-black-500 mb-10">{children}</Paragraph>
  ),
};

const AfterCtaText = (props: any) => {
  return (
    <div>
      <div className="after-cta-div text-center mx-[1rem]">
        <PrismicRichText {...props} components={components} />
      </div>
    </div>
  );
};

export default AfterCtaText;
