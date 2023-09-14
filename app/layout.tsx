import { Footer, Navbar } from "@/layouts";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Phone } from "@/components";

const roboto = Roboto({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ukrainian School",
  description:
    "Українська школа - створена для забезпечення адаптації дітей до навчання в іншій країні.",
  authors: [
    {
      name: "JX Team",
      url: "https://portfoliowebapp.vercel.app",
    },
  ],
  creator: "JX Team",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Phone />
        <Footer />
      </body>
    </html>
  );
}
