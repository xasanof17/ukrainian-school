"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const links = [
  {
    href: "/",
    title: "головний",
  },
  {
    href: "/about",
    title: "про нас",
  },
  {
    href: "/team",
    title: "команда",
  },
  {
    href: "/contact",
    title: "контакт",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menu, setmenu] = useState<boolean>(false);
  return (
    <header className="sticky top-0 left-0 w-full z-10 border-b">
      <nav className="container flex items-center justify-between py-3 md:py-5">
        <Link
          href="/"
          className={
            menu
              ? "fixed top-3 md:top-5 left-4 z-10"
              : "flex items-center justift-center"
          }
        >
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
        <ul className="hidden md:flex items-center">
          {links.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={
                  pathname == item.href
                    ? "link text-primary border-secondary"
                    : "link border-transparent"
                }
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setmenu((prev) => !prev)}
          className={
            menu
              ? "fixed top-5 md:top-7 right-4 z-20"
              : "md:hidden flex items-center justift-center"
          }
        >
          {!menu ? <AlignJustify size={25} /> : <X size={25} />}
        </button>
        {menu && (
          <div className="fixed inset-0 h-screen flex flex-col items-center justify-center bg-white">
            <ul className="md:hidden flex flex-col items-center justify-center">
              {links.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={
                      pathname == item.href
                        ? "link text-lg text-primary border-secondary"
                        : "link text-lg border-transparent"
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
