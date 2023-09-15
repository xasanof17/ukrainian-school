import { Banner, News } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новини",
  description: "Новини - Львов",
};

export default function NewsPage() {
  return (
    <section id="news_page">
      <Banner title="Новини" />
      <News />
    </section>
  );
}
