import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import clsx from "clsx";

import { Inter, Roboto_Mono } from "next/font/google";

import { createClient } from "@/prismicio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--body",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--display",
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");
  console.log("settings page data", settings);

  const {
    data: { meta_title, meta_description, og_image },
  } = settings;

  return {
    title: meta_title || "Fallback Meta Title",
    description: meta_description || "Fallback description",
    openGraph: {
      images: [og_image?.url || "./fallback_image_path"],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, roboto_mono.variable)}>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
