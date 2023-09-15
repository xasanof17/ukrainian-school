"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { links } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();
  const [menu, setmenu] = useState<boolean>(false);
  return (
    <header className="sticky left-0 top-0 z-20 w-full border-b bg-white">
      <nav className="container flex items-center justify-between py-3 md:py-5">
        <Link
          href="/"
          className={
            menu
              ? "fixed left-4 top-3 z-10 md:top-5"
              : "justift-center flex items-center"
          }
        >
          <div className="relative hidden h-12 w-[250px] md:inline-flex">
            <Image
              src="/assets/logo.svg"
              alt="Ukrainian Flag"
              fill
              title="Ukranian School"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative inline-flex h-10 w-[200px] md:hidden">
            <Image
              src="/assets/sm-logo.svg"
              alt="Ukrainian Flag"
              fill
              title="Ukranian School"
              className="object-cover"
              priority
            />
          </div>
        </Link>
        <ul className="hidden items-center md:flex">
          {links.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={
                  pathname == item.href
                    ? "link border-secondary text-primary"
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
              ? "fixed right-4 top-5 z-20 md:top-7"
              : "justift-center flex items-center md:hidden"
          }
        >
          {!menu ? <AlignJustify size={25} /> : <X size={25} />}
        </button>
        {menu && (
          <div className="fixed inset-0 flex h-screen flex-col items-center justify-center bg-white">
            <ul className="flex flex-col items-center justify-center space-y-3 md:hidden">
              {links.map((item, i) => (
                <li key={i}>
                  <Link
                    onClick={() => setmenu((prev) => !prev)}
                    href={item.href}
                    className={
                      pathname == item.href
                        ? "link border-secondary text-lg text-primary"
                        : "link border-transparent text-lg"
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
