import Image from "next/image";
import * as React from "react";

export default function Footer() {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2023375999.
    return (
        <div className="flex flex-col items-center self-stretch px-16 pt-16 pb-7 mt-32 w-full bg-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1423px] max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start text-sm capitalize max-md:flex-wrap max-md:max-w-full">
            <Image
              loading="lazy"
              src="/j.png"
              alt="logo"
              width={200}
              height={200}
              className="shrink-0 max-w-full aspect-[2.86] fill-stone-50 w-[200px] h-[200px]"
            />
            <div className="flex flex-col mt-1.5">
              <div className="font-semibold text-white leading-[150%]">
                Products
              </div>
              <div className="mt-7 leading-6 text-neutral-400">
                <span className="text-white">T Shirts</span>
                <br />
                Hood Shirts
                <br />
                Cardigans
                <br />
                Shorts
              </div>
            </div>
            <div className="flex flex-col mt-1">
              <div className="font-semibold text-white leading-[150%]">
                Services
              </div>
              <div className="mt-6 leading-6 text-neutral-400">
                Digital Printing Services
                <br />
                Screen Printing Services
                <br />
                Design Services
              </div>
            </div>
            <div className="flex flex-col mt-1 text-white">
              <div className="font-semibold leading-[150%]">
                Contact information
              </div>
              <div className="mt-6 leading-6">
                Green Town, Millat Road, <br />
                Faisalabad, <br />
                Pakistan <br />
                +92 321 866 1857
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-4 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1">
              <div className="flex gap-4 max-md:pr-5">
                <Image
                  loading="lazy"
                  src="/linkedin.png"
                  alt="logo1"
                  width={32}
                  height={32}
                  // className="shrink-0 self-start w-2 aspect-[0.5]"
                />
                <Image
                  loading="lazy"
                  src="/facebook.png"
                  alt="logo2"
                  width={32}
                  height={32}
                  // className="shrink-0 my-auto aspect-[1.2] w-[18px]"
                />
                <Image
                  loading="lazy"
                  src="/twitter.png"
                  alt="logo3"
                  width={32}
                  height={32}
                  // className="shrink-0 aspect-square w-[18px]"
                />
              </div>
              <div className="mt-11 text-xs tracking-normal text-white max-md:mt-10">
                Copyright © 2024 | All Rights Reserved.
              </div>
            </div>
            <div className="flex-auto self-end mt-16 text-xs tracking-normal text-right text-white max-md:mt-10">
              Created with love by{" "}
              <a href="https://www.linkedin.com/in/naeem-shahzad-89142b1a/" className="font-bold" target="_blank"> Naeem Shahzad</a>
            </div>
          </div>
        </div>
        </div>
    )
};
