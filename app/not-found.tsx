import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen max-w-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl font-bold text-primary mb-5 capitalize">
        Сторінка не знайдена
      </h1>
      <Link href="/" className="btn-secondary">
        Дім
      </Link>
    </div>
  );
}
