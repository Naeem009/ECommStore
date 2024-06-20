"use client"
import * as React from "react"
import Image from "next/image";
import Carousel from "@/carousel/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex overflow-hidden relative flex-col justify-center items-end self-stretch px-16 py-16 mt-9 w-full font-bold min-h-[526px] max-md:px-5 max-md:max-w-full">
      {/* <Carousel/> */}
      <Image
      loading="lazy"
      src="/covershirt.jpg"
      alt="Image1"
      fill
      style={{ objectFit: 'cover' }}
       />
        <div className="flex relative flex-col px-10 py-14 mr-44 max-w-full backdrop-blur-[17px] bg-black bg-opacity-40 w-[716px] max-md:px-5 max-md:mr-2.5">
          <div className="text-5xl leading-10 text-white max-md:max-w-full max-md:text-4xl">
          <h1 className="text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-white">
          THE BRAND OF YOUR MOOD <br/>
        </h1>
          </div>
          <div className="mt-10 mr-6 text-xl leading-7 text-gray-200 max-md:mr-2.5 max-md:max-w-full">
          Discover the essence of style and comfort with our exclusive t-shirt brand.
          Crafted with precision from premium fabrics, our t-shirts offer a perfect blend of luxury and casual elegance.
          Elevate your everyday wardrobe with designs that make a statement, combining modern trends with timeless appeal. Wear the best, feel the best.
          </div>
          <button className="justify-between items-center px-14 py-5 mt-14 text-base font-bold text-center text-white uppercase bg-stone-950 hover:bg-stone-500 hover:text-gray-300 hover:shadow-lg transition-all duration-300 rounded-lg max-md:px-5 max-md:mt-10">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-20 text-5xl font-bold leading-10 text-center text-stone-950 max-md:mt-10 max-md:text-4xl">
        Products
      </div>
      <div className="shrink-0 mt-7 bg-stone-300 h-[5px] w-[150px]" />
      <div className="mt-9 text-xl leading-7 text-center text-zinc-600 w-[826px] max-md:max-w-full">
        FEW OF OUR TRENDING STYLES AND ELEGANT WORKMANSHIP.
      </div>
      <div className="px-5 mt-11 w-full max-w-[1422px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <Image
                loading="lazy"
                src="/bamboo.jpg"
                alt="Image2"
                width={300}
                height={400}
              className="grow w-full aspect-[0.9] max-md:mt-7 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <Image
                loading="lazy"
                src="/umberallshirt.jpg"
                alt="Image3"
                width={200}
                height={400}
              className="grow shrink-0 max-w-full aspect-[0.53] w-[339px] max-md:mt-7"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base leading-4 text-center text-zinc-400 max-md:mt-7 max-md:max-w-full">
              <div className="overflow-hidden relative flex-col px-11 pt-64 pb-8 min-h-[294px] max-md:px-5 max-md:pt-10 max-md:max-w-full">
                <Image
                    loading="lazy"
                    src="/glassesshirt.jpg"
                    alt="Image4"
                    width={400}
                    height={400}
                  className="object-cover absolute inset-0 size-full"
                />
                Ante mus blandit sapien sociosqu per consequat ad.
              </div>
              <Image
                  loading="lazy"
                  src="/poleshirt.jpg"
                  alt="Image5"
                  width={100}
                  height={300}
                className="mt-12 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-start py-16 mt-32 ml-16 max-w-full font-bold min-h-[526px] w-[1301px] max-md:pr-5 max-md:mt-10">
        <Image
            loading="lazy"
            src="/gmtstore.jpg"
            alt="Image6"
            width={400}
            height={400}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col px-11 py-14 max-w-full bg-neutral-100 w-[708px] max-md:px-5">
          <div className="text-5xl leading-10 text-stone-950 max-md:max-w-full max-md:text-4xl">
            Vision
          </div>
          <div className="mt-11 text-xl leading-7 text-zinc-600 max-md:mt-10 max-md:max-w-full">
            Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
            aptent dapibus metus maecenas consequat. Elementum interdum a
            semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra
            sagittis sit aliquet at. Magna nam platea justo.
          </div>
          <button className="justify-center px-14 py-5 mt-10  text-base font-bold text-center text-white uppercase bg-stone-950 hover:bg-stone-500 hover:text-gray-300 hover:shadow-lg transition-all duration-300 rounded-lg max-md:px-5 max-md:mt-10">
              Learn More
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-20 pb-3 mt-8 w-full min-h-[1018px] max-md:px-5 max-md:max-w-full">
        <Image
           loading="lazy"
           src="/bg2.svg"
           alt="Image7"
           width={2000}
           height={800}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative mt-2 w-full max-w-[1423px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow mt-3 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold text-stone-950 max-md:max-w-full max-md:text-4xl">
                  Creative T Shirts Printing Solutions
                  <br />
                  by Professionals
                </div>
                <div className="mt-10 text-xl leading-7 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                  Penatibus sem vitae mollis luctus mi tellus. Maximus eu
                  eleifend aptent dapibus metus maecenas consequat. Elementum
                  interdum a semper. Netus nullam eros nisi volutpat nibh ex
                  ultricies. Pharetra sagittis sit aliquet at. Magna nam platea
                  justo.
                </div>
                <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <Image
                          loading="lazy"
                          src="/prnt1.jpg"
                          alt="Image8"
                          width={400}
                          height={400}
                        className="grow w-full aspect-[0.79] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <Image
                          loading="lazy"
                          src="/prnt2.jpg"
                          alt="Image9"
                          width={400}
                          height={400}
                        className="grow w-full aspect-[0.79] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <Image
                          loading="lazy"
                          src="/prnt3.jpg"
                          alt="Image10"
                          width={400}
                          height={400}
                        className="grow w-full aspect-[0.79] max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
                <button className="justify-center px-14 py-5 mt-10 text-base font-bold text-center text-white uppercase bg-stone-950 hover:bg-stone-500 hover:text-gray-300 hover:shadow-lg transition-all duration-300 rounded-lg max-md:px-5 max-md:mt-10">
                Read More
                </button>
                <div className="flex flex-col self-end mt-32 mr-32 max-w-full text-5xl font-bold leading-10 text-center whitespace-nowrap text-stone-950 w-[172px] max-md:mt-10 max-md:mr-2.5 max-md:text-4xl">
                  <div className="max-md:text-4xl">Products</div>
                  <div className="shrink-0 mx-3 mt-5 bg-stone-300 h-[5px] w-[150px] max-md:mx-2.5" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col items-end px-16 pt-20 text-lg font-semibold leading-5 whitespace-nowrap min-h-[726px] max-md:mt-10 max-md:max-w-full">
                <Image
                    loading="lazy"
                    src="/vase.png"
                    alt="Image11"
                    width={400}
                    height={400}
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative gap-5 px-8 py-6 bg-white mt-[536px] max-md:px-5 max-md:mt-10">
                  <Image
                      loading="lazy"
                      src="/play-button.png"
                      alt="Image12"
                      width={100}
                      height={100}
                    className="shrink-0 aspect-square w-[60px]"
                  />
                  <div className="flex flex-col my-auto">
                    <div className="text-zinc-500">Watch</div>
                    <div className="mt-3 text-stone-950">Video-tour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-xl leading-7 text-center text-zinc-600 w-[826px] max-md:max-w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text.
      </div>
      <div className="px-5 mt-11 w-full max-w-[1422px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col grow items-center font-semibold text-center capitalize max-md:mt-8">
              <Image
                  loading="lazy"
                  src="/plainshirts.jpg"
                  alt="Image13"
                  width={400}
                  height={400}
                className="self-stretch w-full aspect-square"
              />
              <div className="mt-10 text-2xl leading-7 text-stone-950">
                Plain T Shirts
              </div>
              <div className="mt-2.5 text-base leading-7 text-stone-950 text-opacity-50">
                Solid Colors
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col grow items-center font-semibold text-center capitalize max-md:mt-8">
              <Image
                  loading="lazy"
                  src="/prntedshirts.jpg"
                  alt="Image14"
                  width={200}
                  height={400}
                className="self-stretch w-full aspect-square"
              />
              <div className="mt-10 text-2xl leading-7 text-stone-950">
                Printed T Shirts
              </div>
              <div className="mt-4 text-base leading-7 text-stone-950 text-opacity-50">
                Your designs
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col grow items-center font-semibold text-center capitalize max-md:mt-8">
              <Image
                  loading="lazy"
                  src="/hoodshirt.jpg"
                  alt="Image15"
                  width={400}
                  height={400}
                className="self-stretch w-full aspect-square"
              />
              <div className="mt-9 text-2xl leading-7 text-stone-950">
                Hooded Shirts
              </div>
              <div className="mt-2.5 text-base leading-7 text-stone-950 text-opacity-50">
                Plain & printed
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col grow items-center font-semibold text-center capitalize max-md:mt-8">
              <Image
                  loading="lazy"
                  src="/cardigans.jpg"
                  alt="Image16"
                  width={200}
                  height={400}
                className="self-stretch w-full aspect-square"
              />
              <div className="mt-10 text-2xl leading-7 text-stone-950">
                Cardigans
              </div>
              <div className="mt-2.5 text-base leading-7 text-stone-950 text-opacity-50">
                Elegant and Attractive
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="justify-center px-14 py-5 mt-14 text-base font-bold text-center text-white uppercase bg-stone-950 hover:bg-stone-500 hover:text-gray-300 hover:shadow-lg transition-all duration-300 rounded-lg max-md:px-5 max-md:mt-10">
        View All
      </button>
      <div className="mt-32 text-5xl font-bold leading-10 text-center text-stone-950 max-md:mt-10 max-md:text-4xl">
        Collections
      </div>
      <div className="shrink-0 mt-7 bg-stone-300 h-[5px] w-[150px]" />
      <div className="mt-9 text-xl leading-7 text-center text-zinc-600 w-[826px] max-md:max-w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text.
      </div>
      <div className="mt-32 w-full max-w-[1422px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <Image
                loading="lazy"
                src="/offices.png"
                alt="Image25"
                width={600}
                height={600}
              className="grow w-full aspect-[1.27] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start p-20 mt-16 w-full font-bold bg-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="mt-12 text-6xl text-center text-black leading-[56px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Our Showrooms
              </div>
              <div className="mt-12 text-xl leading-7 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text.
              </div>
              <div className="justify-center px-11 py-5 mt-16 text-base text-right text-white uppercase bg-stone-950 max-md:px-5 max-md:mt-10 max-md:ml-1.5">
                Learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
