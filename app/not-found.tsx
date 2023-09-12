import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="max-w-screen flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-5 text-xl font-bold capitalize text-primary md:text-2xl">
        Сторінка не знайдена
      </h1>
      <Link href="/" className="btn-secondary">
        Дім
      </Link>
    </div>
  );
}
