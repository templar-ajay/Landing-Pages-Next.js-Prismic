import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
  const client = createClient();

  const header = await client.getSingle("header");
  // console.log("header", header);

  const {
    data: {
      background_color,
      logo,
      cta_icon,
      cta_message,
      cta_phone,
      cta_link,
    },
  } = header;

  return (
    <>
      <header
        className="w-full absolute top-0 z-10"
        style={{
          backgroundColor: background_color || "transparent",
        }}
      >
        <div className="flex justify-between items-center px-5 py-3 mx-auto max-w-[1124px]">
          <div className="logo h-fit">
            <Link href="/">
              <PrismicNextImage
                field={logo}
                width={100}
                style={{
                  maxHeight: "80px",
                  objectFit: "contain",
                  maxWidth: "fit-content",
                }}
              />
            </Link>
          </div>
          <PrismicNextLink field={cta_link}>
            <div className="cta h-fit">
              <div className="flex items-center gap-3">
                <div className="block">
                  <PrismicNextImage field={cta_icon} />
                </div>
                <div className="block">
                  <div className="block">{cta_message}</div>
                  <div className="block">{cta_phone}</div>
                </div>
              </div>
            </div>
          </PrismicNextLink>
        </div>
      </header>
    </>
  );
}
