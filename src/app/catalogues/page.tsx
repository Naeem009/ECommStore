import * as React from "react";
import Image from "next/image";

export default function Catalogue(){
    return(
    <div>
      <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-0 w-full min-h-[526px] max-md:max-w-full">
        <Image
           loading="lazy"
           src="/bg3.png"
           alt="Image1"
           layout="fill"
           objectFit="cover"
           className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center items-start px-16 py-20 w-full bg-neutral-800 bg-opacity-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-40 mb-9 ml-48 max-w-full w-[657px] max-md:mt-10">
            <div className="text-7xl font-bold text-white uppercase max-md:max-w-full max-md:text-4xl">
              Catalogues
            </div>
            <div className="mt-12 text-xl leading-7 text-neutral-200 max-md:mt-10 max-md:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-20 pb-2 w-full fill-[linear-gradient(0deg,rgba(17,16,16,0.04)_0%,rgba(17,16,16,0.00)_100%)] min-h-[509px] max-md:px-5 max-md:max-w-full">
        <Image
          loading="lazy"
          src="/bg4.png"
          alt="2ndImage"
          width={1440}
          height={600}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative mt-5 w-full max-w-[1423px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-7 py-16 w-full text-white bg-neutral-800 max-md:px-5 max-md:mt-8">
                <div className="text-base leading-7">Lorem Ipsum</div>
                <div className="mt-5 text-2xl font-bold">Categories</div>
                <div className="mt-8 text-lg leading-7 text-stone-300">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center px-1.5 text-white aspect-[0.83] max-md:mt-8">
                <Image
                  loading="lazy"
                  src="/chair2"
                  alt="3rdImage"
                  width={300}
                  height={300}
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col items-start pt-20 pr-20 pb-6 pl-7 max-md:px-5">
                  <div className="mt-56 text-base leading-7 max-md:mt-10">
                    Lorem Ipsum
                  </div>
                  <div className="mt-3 text-2xl font-bold">Lorem Ipsum</div>
                  <div className="mt-3.5 text-lg leading-7 text-stone-300">
                    Lorem Ipsum
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center text-white aspect-[0.83] max-md:mt-8">
                <Image
                  loading="lazy"
                  src="/bath2"
                  alt="4thImage"
                  width={300}
                  height={300}
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col items-start pt-20 pr-20 pb-6 pl-6 max-md:px-5">
                  <div className="mt-56 text-base leading-7 max-md:mt-10">
                    Lorem Ipsum
                  </div>
                  <div className="mt-3 text-2xl font-bold">Lorem Ipsum</div>
                  <div className="mt-3.5 text-lg leading-7 text-stone-300">
                    Lorem Ipsum
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center text-white aspect-[0.83] max-md:mt-8">
                <Image
                  loading="lazy"
                  src="/bath3.png"
                  alt="5thImage"
                  width={300}
                  height={300}
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col items-start pt-20 pr-20 pb-6 pl-7 max-md:px-5">
                  <div className="mt-56 text-base leading-7 max-md:mt-10">
                    Lorem Ipsum
                  </div>
                  <div className="mt-3 text-2xl font-bold">Lorem Ipsum</div>
                  <div className="mt-3.5 text-lg leading-7 text-stone-300">
                    Lorem Ipsum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 px-5 mt-24 w-full ml-auto mr-auto items-center justify-center flex flex-col max-w-[1423px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto text-base leading-7 text-zinc-500">
          Showing 1 - 15 of 22 results
        </div>
        <div className="flex gap-3 max-md:flex-wrap">
          <div className="grow text-base font-bold leading-7 text-neutral-800">
            Filter
          </div>
          <Image
            loading="lazy"
            src="/bars.svg"
            alt="bars"
            width={18}
            height={18}
            className="shrink-0 my-auto w-3 aspect-[1.2]"
          />
          <div className="flex gap-1 my-auto text-base font-bold leading-7 text-neutral-800">
            <div className="grow">Sort by Price</div>
            <Image
              loading="lazy"
              src="/ring.svg"
              alt="ring"
              width={18}
              height={18}
              className="shrink-0 self-start w-2.5 border border-solid aspect-[1.67] border-zinc-500 stroke-[1.2px] stroke-zinc-500"
            />
          </div>
          <div className="flex gap-3 justify-between items-start">
            <Image
              loading="lazy"
              src="/search.png"
              alt="search"
              width={18}
            height={18}
              className="shrink-0 self-stretch aspect-square w-[18px]"
            />
            <Image
              loading="lazy"
              src="/tabs.svg"
              alt="tabs"
              width={18}
            height={18}
              className="shrink-0 aspect-[1.35] w-[23px]"
            />
            <Image
              loading="lazy"
              src="/bars2.svg"
              alt="bars2"
              width={18}
            height={18}
              className="shrink-0 aspect-[1.35] w-[23px]"
            />
            <Image
              loading="lazy"
              src="/bars3.svg"
              alt="bars3"
              width={18}
            height={18}
              className="shrink-0 aspect-[1.35] w-[23px]"
            />
            <Image
              loading="lazy"
              src="/bars4.svg"
              alt="bars4"
              width={18}
            height={18}
              className="shrink-0 aspect-[1.35] w-[23px]"
            />
            <Image
              loading="lazy"
              src="/bars4.svg"
              alt="bars4"
              width={18}
            height={18}
              className="shrink-0 aspect-[1.35] w-[23px]"
            />
            <Image
              loading="lazy"
              src="/bars5.svg"
              alt="bars5"
              width={18}
            height={18}
              className="shrink-0 aspect-[1.35] w-[23px]"
            />
          </div>
        </div>
      </div>
      <div className="px-5 mt-12 w-full ml-auto mr-auto justify-center items-center max-w-[1422px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-center capitalize leading-[100%] max-md:mt-8">
              <div className="flex flex-col pt-3 shadow-lg bg-neutral-100">
                <Image
                  loading="lazy"
                  src="/shirt.jpg"
                  alt="shirt"
                  width={200}
            height={200}
                  className="w-full aspect-square"
                />
                <div className="flex flex-col px-12 py-7 mt-4 w-full bg-white max-md:px-5">
                  <div className="text-2xl font-semibold text-stone-950">
                  Opna Women's Short Sleeve Moisture
                  </div>
                  <div className="flex gap-2 self-center mt-5">
                    <div className="grow my-auto text-xs text-stone-300">
                      7.95 USD
                    </div>
                    <div className="text-lg font-semibold text-stone-950 text-opacity-50">
                      7.95 USD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-3 w-full text-center capitalize shadow-lg bg-neutral-100 leading-[100%] max-md:mt-8">
              <Image
                loading="lazy"
                src="/backpack.jpg"
                alt="backpack"
                width={200}
            height={200}
                className="w-full aspect-square"
              />
              <div className="flex flex-col px-14 py-7 mt-3.5 w-full bg-white max-md:px-5">
                <div className="text-2xl font-semibold text-stone-950">
                  Back Pack
                </div>
                <div className="flex gap-3 self-center mt-6">
                  <div className="grow text-xs text-stone-300">449.99 SAR</div>
                  <div className="text-lg font-semibold text-stone-950 text-opacity-50">
                    312.49 SAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-3 w-full text-center capitalize shadow-lg bg-neutral-100 leading-[100%] max-md:mt-8">
              <Image
                loading="lazy"
                src="/cottonshort.jpg"
                alt="cottonshort"
                width={200}
            height={200}
                className="w-full aspect-square"
              />
              <div className="flex flex-col px-14 py-7 mt-3.5 w-full bg-white max-md:px-5">
                <div className="text-2xl font-semibold text-stone-950">
                  Zurich Grey 60×60
                </div>
                <div className="flex gap-3 self-center mt-5">
                  <div className="grow text-xs text-stone-300">449.99 SAR</div>
                  <div className="text-lg font-semibold text-stone-950 text-opacity-50">
                    312.49 SAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-3 w-full text-center capitalize shadow-lg bg-neutral-100 leading-[100%] max-md:mt-8">
              <Image
                loading="lazy"
                src="/rainjacket.jpg"
                alt="rainjacket"
                width={200}
            height={200}
                className="w-full aspect-square"
              />
              <div className="flex flex-col px-7 py-7 mt-3.5 w-full bg-white max-md:px-5">
                <div className="text-2xl font-semibold text-stone-950">
                  Zurich Dark Grey 60×60
                </div>
                <div className="flex gap-3 self-center mt-5">
                  <div className="grow text-xs text-stone-300">449.99 SAR</div>
                  <div className="text-lg font-semibold text-stone-950 text-opacity-50">
                    312.49 SAR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-8 ml-auto mr-auto items-center justify-center flex flex-col w-full max-w-[1422px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-3 w-full text-center capitalize shadow-lg bg-neutral-100 leading-[100%] max-md:mt-8">
              <Image
                loading="lazy"
                src="/jacket.jpg"
                alt="jacket"
                width={200}
            height={200}
                className="w-full aspect-square"
              />
              <div className="flex flex-col px-14 py-7 mt-3.5 w-full bg-white max-md:px-5">
                <div className="text-2xl font-semibold text-stone-950">
                  Windsor White Oak
                </div>
                <div className="flex gap-3 self-center mt-7">
                  <div className="grow text-xs text-stone-300">449.99 SAR</div>
                  <div className="text-lg font-semibold text-stone-950 text-opacity-50">
                    312.49 SAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-3 w-full text-center capitalize shadow-lg bg-neutral-100 leading-[100%] max-md:mt-8">
              <Image
                loading="lazy"
                src="/wintercoat.jpg"
                alt="wintercoat"
                width={200}
            height={200}
                className="w-full aspect-square"
              />
              <div className="flex flex-col px-8 py-7 mt-3.5 w-full bg-white max-md:px-5">
                <div className="text-2xl font-semibold text-stone-950">
                  Sicily Grey Décor 30×60
                </div>
                <div className="flex gap-3 self-center mt-5">
                  <div className="grow text-xs text-stone-300">449.99 SAR</div>
                  <div className="text-lg font-semibold text-stone-950 text-opacity-50">
                    312.49 SAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-3 w-full text-center capitalize shadow-lg bg-neutral-100 leading-[100%] max-md:mt-8">
              <Image
                loading="lazy"
                src="/ssshirt.jpg"
                alt="ssshirt"
                width={200}
            height={200}
                className="w-full aspect-square"
              />
              <div className="flex flex-col px-20 py-7 mt-3.5 w-full bg-white max-md:px-5">
                <div className="text-2xl font-semibold text-stone-950 max-md:mx-0.5">
                  Sardinia White
                </div>
                <div className="flex gap-3 mt-7 max-md:mx-0.5">
                  <div className="grow text-xs text-stone-300">449.99 SAR</div>
                  <div className="text-lg font-semibold text-stone-950 text-opacity-50">
                    312.49 SAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-3 w-full text-center capitalize shadow-lg bg-neutral-100 leading-[100%] max-md:mt-8">
              <Image
                loading="lazy"
                src="/mens.jpg"
                alt="mens"
                width={200}
            height={200}
                className="w-full aspect-square"
              />
              <div className="flex flex-col px-16 py-7 mt-3.5 w-full bg-white max-md:px-5">
                <div className="text-2xl font-semibold text-stone-950">
                  Sicily Grey 30×60
                </div>
                <div className="flex gap-3 self-center mt-5">
                  <div className="grow text-xs text-stone-300">449.99 SAR</div>
                  <div className="text-lg font-semibold text-stone-950 text-opacity-50">
                    312.49 SAR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-px pb-20 mt-24 w-full fill-[linear-gradient(0deg,rgba(17,16,16,0.04)_0%,rgba(17,16,16,0.00)_100%)] min-h-[509px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <Image
          loading="lazy"
          src="/bg6.svg"
          alt="BackGround"
          width={1440}
            height={800}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative w-full max-w-[1343px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col mt-56 max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl text-black max-md:max-w-full">
                  Promotional Banner
                </div>
                <div className="mt-8 text-xl leading-7 text-zinc-600 max-md:max-w-full">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow text-base font-bold text-center text-white uppercase max-md:max-w-full">
                <div className="justify-center self-start px-11 py-5 ml-28 bg-stone-950 max-md:px-5 max-md:ml-2.5">
                  Load More
                </div>
                <Image
                  loading="lazy"
                  src="/cottonjacket.jpg"
                  alt="cottonjacket"
                  width={127}
                  height={489}    
                className="mt-32 w-full aspect-[3.85] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
};