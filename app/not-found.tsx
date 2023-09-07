import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1>404! Not Found Page</h1>
      <Link href="/" className="btn-secondary">
        Home
      </Link>
    </div>
  );
}
