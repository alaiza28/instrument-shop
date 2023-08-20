import React from 'react'
import Carousel from "react-elastic-carousel";

//import images piano

import img1 from "../../assets/piano/piano-1.jpg";
import img2 from "../../assets/piano/piano-2.jpg";
import img3 from "../../assets/piano/piano-3.jpg";
import img4 from "../../assets/piano/piano-4.jpg";
import img5 from "../../assets/piano/piano-5.jpg";
import img6 from "../../assets/piano/piano-6.jpg";
import img7 from "../../assets/piano/piano-7.jpg";
import img8 from "../../assets/piano/piano-8.jpg";
import img9 from "../../assets/piano/piano-9.jpg";

const slides = [
    {
      img: img1,
      items: "Piano 1",
    },
    {
      img: img2,
      items: "Piano 2",
    },
    {
      img: img3,
      items: "Piano 3",
    },
    {
      img: img4,
      items: "Piano 4",
    },
    {
      img: img5,
      items: "Piano 5",
    },
    {
      img: img6,
      items: "Piano 6",
    },
    {
      img: img7,
      items: "Piano 7",
    },
    {
      img: img8,
      items: "Piano 8",
    },
    {
        img: img9,
        items: "6 Items",
    },
  ];
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 750, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

const Piano = () => {
  return (
    <div>
      <Carousel breakPoints={breakPoints} className="mt-10">
        {
            slides.map((slide, index)=>(
                <div key={index} className="w-[500px] h-[380px] mr-4 border">
                    <div className="p-4">
                        <div className="h-[80%] w-full">
                            <img src={slide.img} className="object-cover h-[300px] w-auto" alt="" />
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
  )
}

export default Piano