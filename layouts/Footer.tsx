import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, PhoneIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaFacebook } from "react-icons/fa";

type Social = {
  Icon: IconType;
  href: string;
};

const socials: Social[] = [
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61550933983602",
  },
];

const Footer = () => {
  const date = new Date();
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2574.01483198131!2d24.01457107688888!3d49.82338643231464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDQ5JzI0LjIiTiAyNMKwMDEnMDEuNyJF!5e0!3m2!1sru!2s!4v1695890987369!5m2!1sru!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="origin"
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
                  priority
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
          <ul className="flex flex-col items-start space-y-1">
            <h3 className="mb-2 text-xl font-bold text-primary">Посилання</h3>
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
          <ul className="flex flex-col items-start space-y-1">
            <h3 className="mb-2 text-xl font-bold text-primary">Контакт</h3>
            <li>
              <Link
                href="mailto:oleksij_borysovych@email.ua"
                className="flex items-center space-x-2 text-base font-normal text-grey transition-colors duration-300 hover:text-primary sm:text-lg"
              >
                <Mail size={24} />
                <p>info@school101.lviv.ua</p>
              </Link>
            </li>
            <li>
              <Link
                href="tel:+380914819996"
                className="flex items-center space-x-2 text-base font-normal text-grey transition-colors duration-300 hover:text-primary sm:text-lg"
              >
                <PhoneIcon size={24} />
                <p>+380914819996</p>
              </Link>
            </li>
            <li>
              <Link
                href="https://maps.app.goo.gl/KB8EwLyXEMosQ8Co8"
                className="flex items-center space-x-2 text-base font-normal text-grey transition-colors duration-300 hover:text-primary sm:text-lg"
              >
                <MapPin size={24} />
                <p>Переглянути на Google Map</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center border-t-2 px-4 py-3">
          <p className="text-center text-base font-normal text-grey sm:text-lg">
            Всі права захищені &copy; {date.getFullYear()}
            <a href="https://milleniumcompany.tech" target="_blank">Developed by <strong className="text-indigo-600">Millenium Company</strong></a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
