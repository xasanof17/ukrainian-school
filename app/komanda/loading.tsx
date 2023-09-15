import { Loading } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Команда завантаження...",
  description: "Команда завантаження...",
};

export default function NewsLoading() {
  return <Loading title="Команда" />;
}
