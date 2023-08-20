import React from "react";
// Carousel
import Carousel from "react-elastic-carousel";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

//import guitars image
import img1 from "../../assets/guitar/guitar-1.jpg";
import img2 from "../../assets/guitar/guitar-2.jpg";
import img3 from "../../assets/guitar/guitar-3.jpg";
import img4 from "../../assets/guitar/guitar-4.jpg";
import img5 from "../../assets/guitar/guitar-5.jpg";
import img6 from "../../assets/guitar/guitar-6.jpg";
import img7 from "../../assets/guitar/guitar-7.jpg";
import img8 from "../../assets/guitar/guitar-8.jpg";

const slides = [
  {
    img: img1,
    items: "Guitar 1",
  },
  {
    img: img8,
    items: "Guitar 2",
  },
  {
    img: img3,
    items: "Guitar 3",
  },
  {
    img: img4,
    items: "Guitar 4",
  },
  {
    img: img5,
    items: "Guitar 5",
  },
  {
    img: img6,
    items: "Guitar 6",
  },
  {
    img: img7,
    items: "Guitar 7",
  },
  {
    img: img8,
    items: "Guitar 8",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 750, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Guitars = () => {
  return (
    <div>
      <Carousel breakPoints={breakPoints} className="mt-10">
        {
            slides.map((slide, index)=>(
                <div key={index} className="w-[300px] h-[480px] mr-4 border">
                    <div className="p-4">
                        <div className="h-[80%] w-full">
                            <img src={slide.img} className="object-cover" alt="" />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-center items-center text-center">
                                <h1 className="text-3xl font-secondary font-medium">{slide.items}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
      </Carousel>
    </div>
  );
};

export default Guitars;
