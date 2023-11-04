import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdFacebook, MdMap, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container my-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ul className="flex flex-col items-start justify-center space-y-2">
          <li>
            <Link
              className="flex items-center space-x-2 text-xl font-medium text-primary"
              href="https://maps.app.goo.gl/SxEVqTLFzH91hqhg7"
              target="_blank"
            >
              <MdMap className="text-[25px]" />
              <p className="text-base md:text-lg">
                Ул. Героев Майдана, 32, Львов, Львовская область, Украина, 79026
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 text-xl font-medium text-primary"
              href="tel:+380239409203"
            >
              <MdPhone className="text-[25px]" />
              <p>+380239409203</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 text-xl font-medium text-primary"
              href="mailto:info@school101.lviv.ua"
              target="_blank"
            >
              <MdEmail className="text-[25px]" />
              <p>info@school101.lviv.ua</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 text-xl font-medium text-primary"
              href="https://www.facebook.com/profile.php?id=61550933983602"
              target="_blank"
            >
              <MdFacebook className="text-[25px]" />
              <p>Oleksij Borysovych</p>
            </Link>
          </li>
          <li className="flex flex-col">
            <p className="text-xl font-medium text-grey">ГРАФІК РОБОТИ:</p>
            <p className="text-lg font-medium">
              Понеділок - П&lsquo;ятниця:{" "}
              <span className="font-bold">8:00 - 18:00</span>
            </p>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-[400px] w-full">
            <Image
              className="h-full w-full object-contain"
              src="/assets/love-uk.jpg"
              alt=""
              fill
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
