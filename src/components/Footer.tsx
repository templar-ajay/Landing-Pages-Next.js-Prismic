import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("footer");
  const { background_image } = settings.data;
  return (
    <>
      <footer>
        <div className="w-full h-[700px] relative ">
          <PrismicNextImage
            className="absolute -z-10 w-full h-full object-cover"
            field={background_image}
          />
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/r5uGgpzcjkoptC55vMZn"
            style={{
              border: "none",
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
            }}
            // scrolling="no"
            id="r5uGgpzcjkoptC55vMZn"
            title="Aparato Digestivo"
          ></iframe>
          <script
            async
            src="https://link.msgsndr.com/js/form_embed.js"
          ></script>
        </div>
      </footer>
    </>
  );
}
