import React from 'react'
import Carousel from "react-elastic-carousel";

//import image violin
import img1 from "../../assets/violin/violin-1.jpg"
import img2 from "../../assets/violin/violin-2.jpg"
import img3 from "../../assets/violin/violin-3.jpg"
import img4 from "../../assets/violin/violin-4.jpg"
import img5 from "../../assets/violin/violin-5.jpg"
import img6 from "../../assets/violin/violin-6.jpg"
import img7 from "../../assets/violin/violin-7.jpg"
import img8 from "../../assets/violin/violin-8.jpg"

const slides = [
    {
      img: img1,
      items: "Violin 1",
    },
    {
      img: img8,
      items: "Violin 2",
    },
    {
      img: img6,
      items: "Violin 3",
    },
    {
      img: img7,
      items: "Violin 4",
    },
    {
      img: img5,
      items: "Violin 5",
    },
    {
      img: img3,
      items: "Violin 6",
    },
    {
      img: img4,
      items: "Violin 7",
    },
    {
      img: img2,
      items: "Violin 8",
    },
  ];
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  

const Violin = () => {
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
  )
}

export default Violin