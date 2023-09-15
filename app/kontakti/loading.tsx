import { Loading } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакт завантаження...",
  description: "Контакт завантаження...",
};

export default function NewsLoading() {
  return <Loading title="Контакт" />;
}
