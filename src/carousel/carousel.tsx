import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container flex overflow-hidden relative flex-col justify-center items-end self-stretch px-16 py-16 mt-9 w-full font-bold min-h-[526px] max-md:px-5 max-md:max-w-full">
        <div>
      <Slider {...settings}>
        <div>
        <Image
      loading="lazy"
      src="/covershirt.jpg"
      alt="Image1"
      fill
      style={{ objectFit: 'cover' }}
       />
        </div>
        <div>
        <Image
      loading="lazy"
      src="/covershirt.jpg"
      alt="Image1"
      fill
      style={{ objectFit: 'cover' }}
       />
        </div>
        <div>
        <Image
      loading="lazy"
      src="/covershirt.jpg"
      alt="Image1"
      fill
      style={{ objectFit: 'cover' }}
       />
        </div>
        <div>
        <Image
      loading="lazy"
      src="/covershirt.jpg"
      alt="Image1"
      fill
      style={{ objectFit: 'cover' }}
       />
        </div>
        <div>
        <Image
      loading="lazy"
      src="/covershirt.jpg"
      alt="Image1"
      fill
      style={{ objectFit: 'cover' }}
       />
        </div>
        <div>
        <Image
      loading="lazy"
      src="/covershirt.jpg"
      alt="Image1"
      fill
      style={{ objectFit: 'cover' }}
       />
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Carousel;
