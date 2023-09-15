import Image from "next/image";

const Loading = ({ title }: { title: string }) => {
  return (
    <div className="min-w-screen fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center bg-white">
      <Image src="/assets/icon.svg" alt="ukraine" width={80} height={40} />
      <h2 className="mb-5 animate-pulse text-xl font-medium capitalize text-primary md:text-2xl">
        {title} завантаження...
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
};

export default Loading;
