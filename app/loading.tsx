import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="h-screen w-screen fixed inset-0 z-20 bg-white container flex flex-col items-center justify-center">
      <Image src="/assets/icon.svg" alt="ukraine" width={80} height={40} />
      <h2 className="mb-5 text-2xl text-primary font-medium animate-pulse capitalize">
        Завантаження...
      </h2>
      <Image
        src="/assets/loading.svg"
        alt="loading"
        className="animate-spin object-cover"
        width={50}
        height={50}
      />
    </div>
  );
}
