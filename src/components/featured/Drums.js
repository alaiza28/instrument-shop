import React from 'react';
import Carousel from "react-elastic-carousel";

//import images piano
import img1 from "../../assets/drums/drums-1.jpg";
import img2 from "../../assets/drums/drums-2.jpg";
import img3 from "../../assets/drums/drums-3.jpg";
import img4 from "../../assets/drums/drums-4.jpg";
import img5 from "../../assets/drums/drums-5.jpg";
import img6 from "../../assets/drums/drums-6.jpg";
import img7 from "../../assets/drums/drums-7.jpg";
import img8 from "../../assets/drums/drums-8.jpg";

const slides = [
    {
      img: img1,
      items: "Drums 1",
    },
    {
      img: img2,
      items: "Drums 2",
    },
    {
      img: img3,
      items: "Drums 3",
    },
    {
      img: img4,
      items: "Drums 4",
    },
    {
      img: img5,
      items: "Drums 5",
    },
    {
      img: img6,
      items: "Drums 6",
    },
    {
      img: img7,
      items: "Drums 7",
    },
    {
      img: img8,
      items: "Drums 8",
    },
  ];
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 750, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];


const Drums = () => {
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

export default Drums