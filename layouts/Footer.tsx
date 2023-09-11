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
      <footer className="pt-4 border-t">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-3">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center justift-center">
              <div className="hidden md:inline-flex relative w-[250px] h-12">
                <Image
                  src="/assets/logo.svg"
                  alt=""
                  fill
                  title="Ukranian School"
                  className="object-cover"
                />
              </div>
              <div className="md:hidden inline-flex relative w-[200px] h-10">
                <Image
                  src="/assets/sm-logo.svg"
                  alt=""
                  fill
                  title="Ukranian School"
                  className="object-cover"
                />
              </div>
            </Link>
            <ul className="flex items-center space-x-2 mt-3">
              {socials.map(({ Icon, href }, i) => (
                <li key={i}>
                  <Link href={href}>
                    <Icon
                      size={24}
                      className="text-grey hover:text-primary duration-300 transition-colors"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col sm:items-center md:items-start space-y-1">
            <h3 className="text-primary text-xl font-bold mb-2">Company</h3>
            {links.map(({ href, title }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  className="capitalize text-base sm:text-lg text-grey hover:text-primary duration-300 transition-colors"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col sm:items-center md:items-start space-y-1">
            <h3 className="text-primary text-xl font-bold mb-2">Контакт</h3>
            <li>
              <Link
                href="mailto:xasanof17@gmail.com"
                className="text-grey flex items-center font-normal space-x-2 hover:text-primary duration-300 text-base sm:text-lg transition-colors"
              >
                <Mail size={24} />
                <p>xasanof17@gmail.com</p>
              </Link>
            </li>
            <li>
              <Link
                href="tel:+998900198505"
                className="text-grey flex items-center font-normal space-x-2 hover:text-primary duration-300 text-base sm:text-lg transition-colors"
              >
                <PhoneIcon size={24} />
                <p>+998 90 019 85 05</p>
              </Link>
            </li>
            <li>
              <Link
                href="https://goo.gl/maps/WbDjCr9yVMLp9hVx5"
                className="text-grey flex items-center font-normal space-x-2 hover:text-primary duration-300 text-base sm:text-lg transition-colors"
              >
                <MapPin size={24} />
                <p>Переглянути на Google Map</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t-2 flex items-center justify-center py-3">
          <p className="text-base sm:text-lg text-grey font-normal">
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
