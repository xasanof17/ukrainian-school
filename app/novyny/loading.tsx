import { Loading } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новини завантаження...",
  description: "Новини завантаження...",
};

export default function NewsLoading() {
  return (
    <Loading title="Новини"/>
  );
}
