import { PhoneIcon } from "lucide-react";
import Link from "next/link";

const Phone = () => {
  return (
    <div className="fixed bottom-4 right-4 animate-bounce md:bottom-5 md:right-5">
      <Link
        href="tel:+380914819996"
        className="flex items-center justify-center rounded-full border-2 bg-primary p-3 shadow-md"
      >
        <PhoneIcon size={25} className="text-secondary" />
      </Link>
    </div>
  );
};

export default Phone;
