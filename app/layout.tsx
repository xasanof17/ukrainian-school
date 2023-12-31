import { Footer, Navbar } from "@/layouts";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Phone } from "@/components";

const roboto = Roboto({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "700", "900"],
});

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: {
    default: "Ukrainian Hosting",
    template: "%s - Школа 101",
  },
  assets: `${baseURL}/assets`,
  category: "School Website",
  description:
    "Українська школа 101 - створена для забезпечення адаптації дітей до навчання в іншій країні.",
  authors: [
    {
      name: "Millenium Company",
      url: "https://milleniumcompany.tech",
    },
  ],
  creator: "Millenium Company",
  generator: "Next.js",
  abstract:
    "Українська школа 101 - створена для забезпечення адаптації дітей до навчання в іншій країні.",
  applicationName: "Школа 101 - Львов",
  alternates: {
    canonical: `${baseURL}`,
  },
  manifest: `${baseURL}/manifest.webmanifest`,
  publisher: "Hostinger",
  robots: "index, follow",
  keywords: [
    "school 101 lviv",
    "lviv schools",
    "львов школы",
    "101 львов школа",
  ],
  metadataBase: new URL(`${baseURL}`),
  openGraph: {
    type: "website",
    title: "Школа 101 - Львов",
    countryName: "Ukraine",
    description:
      "Українська школа 101 - створена для забезпечення адаптації дітей до навчання в іншій країні.",
    siteName: "www.school101.lviv.ua",
    url: `${baseURL}`,
    emails: ["oleksij_borsovych@email.ua", "info@school101.lviv.ua"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Phone />
        <Footer />
      </body>
    </html>
  );
}
