import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Завантаження...",
  description: "Завантаження...",
};

export default function LoadingPage() {
  return (
    <div className="min-w-screen fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center bg-white">
      <Image
        src="/assets/icon.svg"
        alt="ukraine"
        width={80}
        height={40}
        priority
      />
      <h2 className="mb-5 animate-pulse text-xl font-medium capitalize text-primary md:text-2xl">
        Завантаження...
      </h2>
      <Image
        src="/assets/loading.svg"
        alt="loading"
        className="animate-spin object-cover"
        width={50}
        height={50}
        priority
      />
    </div>
  );
}
