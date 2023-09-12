import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, PhoneIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaTelegramPlane, FaFacebook, FaTwitter } from "react-icons/fa";

type Social = {
  Icon: IconType;
  href: string;
};

const socials: Social[] = [
  {
    Icon: FaFacebook,
    href: "https://facebook.com/mystudy",
  },
  {
    Icon: FaTwitter,
    href: "https://x.com/mystudy",
  },
  {
    Icon: FaTelegramPlane,
    href: "https://t.me/mystudy",
  },
];

const Footer = () => {
  const date = new Date();
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.3279582452205!2d30.37656783443551!3d50.45361733500999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc8bc3a93f67%3A0x716038f8afcdd8d!2z0KHQv9C10YbQuNCw0LvQuNC30LjRgNC-0LLQsNC90L3QsNGPINGI0LrQvtC70LAg4oSWNDA!5e0!3m2!1sru!2s!4v1694101845922!5m2!1sru!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <footer className="border-t pt-4">
        <div className="container grid grid-cols-1 gap-5 pb-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <Link href="/" className="justift-center flex items-center">
              <div className="relative hidden h-12 w-[250px] md:inline-flex">
                <Image
                  src="/assets/logo.svg"
                  alt=""
                  fill
                  title="Ukranian School"
                  className="object-cover"
                />
              </div>
              <div className="relative inline-flex h-10 w-[200px] md:hidden">
                <Image
                  src="/assets/sm-logo.svg"
                  alt=""
                  fill
                  title="Ukranian School"
                  className="object-cover"
                />
              </div>
            </Link>
            <ul className="mt-3 flex items-center space-x-2">
              {socials.map(({ Icon, href }, i) => (
                <li key={i}>
                  <Link href={href}>
                    <Icon
                      size={24}
                      className="text-grey transition-colors duration-300 hover:text-primary"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col space-y-1 sm:items-center md:items-start">
            <h3 className="mb-2 text-xl font-bold text-primary">Company</h3>
            {links.map(({ href, title }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  className="text-base capitalize text-grey transition-colors duration-300 hover:text-primary sm:text-lg"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col space-y-1 sm:items-center md:items-start">
            <h3 className="mb-2 text-xl font-bold text-primary">Контакт</h3>
            <li>
              <Link
                href="mailto:xasanof17@gmail.com"
                className="flex items-center space-x-2 text-base font-normal text-grey transition-colors duration-300 hover:text-primary sm:text-lg"
              >
                <Mail size={24} />
                <p>xasanof17@gmail.com</p>
              </Link>
            </li>
            <li>
              <Link
                href="tel:+998900198505"
                className="flex items-center space-x-2 text-base font-normal text-grey transition-colors duration-300 hover:text-primary sm:text-lg"
              >
                <PhoneIcon size={24} />
                <p>+998 90 019 85 05</p>
              </Link>
            </li>
            <li>
              <Link
                href="https://goo.gl/maps/WbDjCr9yVMLp9hVx5"
                className="flex items-center space-x-2 text-base font-normal text-grey transition-colors duration-300 hover:text-primary sm:text-lg"
              >
                <MapPin size={24} />
                <p>Переглянути на Google Map</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center border-t-2 py-3">
          <p className="text-base font-normal text-grey sm:text-lg">
            &copy; Школа {"\u0406"}-{"\u0406"}
            {"\u0406"}
            {"\u0406"} ступенів {"\u2116"}27 Печерського району м.Києва{" "}
            {date.getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
