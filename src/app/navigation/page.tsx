"use client"
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-center p-4">
        <Link href="/" passHref>
            <Image src="/j.png" alt="logo" width={200} height={300} className="mx-auto" priority />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <XIcon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <nav className={`md:flex md:justify-center md:gap-4 p-2 ${isOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row list-none m-0 p-0 gap-4">
          {[
            { href: "/", label: "Home" },
            // { href: "/catalogues", label: "Catalogues" },
            { href: "/products1", label: "Products" },
            { href: "/company", label: "Company" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href} className="text-neutral-950 font-bold mx-4 font-sans text-lg">
              <Link href={href}>
                <div className="hover:text-red-500">{label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
