//import React from "react";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
      <div>
        <div>
        <div className="flex flex-col w-full h-full max-w-full max-h-full items-center pt-1 bg-brown-500">
        <div className="flex gap-5 justify-between px-1 mt-2 w-full text-base font-bold max-w-[1422px] text-neutral-950 max-md:flex-wrap max-md:mt-4 max-md:max-w-full">
        <Link href="/search">
        <Image src="/search.png" alt="Search" width={17} height={17} className="shrink-0 aspect-square" />
        </Link>
         <div className="flex gap-5 ml-auto mr-10">
        <Link href="/cart">
        <Image src="/carts.png" alt="Search" width={22} height={22} className="shrink-0 aspect-square" />
        </Link>
        <Link href="/heart">
        <Image src="/heart.png" alt="Search" width={22} height={22} className="shrink-0 aspect-square" />
        </Link>
        <Link href="/user">
        <Image src="/user.png" alt="Search" width={22} height={22} className="shrink-0 aspect-square" />
        </Link>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};