import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="text-md md:text-lg text-black-500 mt-4 mb-10">{children}</p>
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
