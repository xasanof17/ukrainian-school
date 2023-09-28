import { Banner, Team } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Колектив",
  description: "Колектив - Львов",
};

export default function TeamPage() {
  return (
    <section id="team_page">
      <Banner title="Колектив" />
      <Team />
    </section>
  );
}
