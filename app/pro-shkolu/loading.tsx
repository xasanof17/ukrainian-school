import { Loading } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Про Школу завантаження...",
  description: "Про школу завантаження...",
};

export default function AboutLoading() {
  return <Loading title="Про школу" />;
}
