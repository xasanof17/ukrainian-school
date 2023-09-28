import { Banner, Contact } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакт",
  description: "Контакт - Львов",
};

export default function ContactPage() {
  return (
    <section id="news_page">
      <Banner title="Контакти" />
      <Contact />
    </section>
  );
}
