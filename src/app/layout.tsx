import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import clsx from "clsx";

import { Nunito, Nunito_Sans } from "next/font/google";

import { createClient } from "@/prismicio";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const body = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");
  // console.log("settings page data", settings);

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
      <body className={clsx(body.variable, display.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
