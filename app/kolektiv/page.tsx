import { Banner, Team } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Команда",
  description: "Команда - Львов",
};

export default function TeamPage() {
  return (
    <section id="team_page">
      <Banner title="Команда" />
      <Team />
    </section>
  );
}
