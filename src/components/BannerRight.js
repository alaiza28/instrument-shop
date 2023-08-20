import React from 'react'

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
//import required modules
import { EffectFade, Autoplay } from "swiper";

//import images banner
import img1 from "../assets/banner/banner-1.jpg";
import img2 from "../assets/banner/banner-2.jpg";
import img3 from "../assets/banner/banner-3.jpg";
import img4 from "../assets/banner/banner-4.jpg";

const slides = [
  {
    title: "Good and Quality Products",
    titleTwo: "Piano",
    img: img3,
  },
  {
    title: "Good and Quality Products",
    titleTwo: "Guitar",
    img: img4,
  },
];
const BannerRight = () => {
  return (
    <Swiper 
    modules={[EffectFade, Autoplay]}
    effect={"fade"}
    loop={true}
    autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }}
    className="h-full w-full">
      {slides.map((slide, index) => {
        //destructure slides
        const { title, titleTwo, img } = slide;
        return (
          <SwiperSlide className="h-full w-full relative" key={index}>
            <div className="absolute top-0 w-full h-full">
              <img
                src={slide.img}
                className="object-cover h-full w-full z-10"
                alt=""
              />
            </div>

            <div className="absolute flex flex-col text-center items-center justify-center bottom-10 px-12">
              <h4 className="font-fourth text-3xl text-white font-medium">{title}</h4>
              <div>
                <button className="bg-fourth text-white px-6 py-4 font-fourth">Buy Now</button>
              </div>
            </div> 
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

export default BannerRight