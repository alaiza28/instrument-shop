import React from 'react';
import Carousel from "react-elastic-carousel";
//import icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {BsCartCheckFill} from "react-icons/bs"

//import popular images
import img1 from "../../assets/guitar/guitar-2.jpg";
import img2 from "../../assets/drums/drums-4.jpg";
import img3 from "../../assets/piano/piano-7.jpg";
import img4 from "../../assets/violin/violin-8.jpg";
import img5 from "../../assets/guitar/guitar-1.jpg";
import img6 from "../../assets/drums/drums-1.jpg";
import img7 from "../../assets/piano/piano-4.jpg";
import img8 from "../../assets/violin/violin-5.jpg";

const slides = [
  {
    img: img1,
    upperText: "product",
    title: "Typical woods of a guitar today are Mahogany ",
    price: "$10.00",
    off: "20 %",
  },
  {
    img: img2,
    upperText: "product",
    title: "The shell is usually made of wood, such as birch ",
    price: "$25.00",
    off: "30 %",
  },
  {
    img: img3,
    upperText: "product",
    title: "piano is made out of wood, such as maple.",
    price: "$20.00",
    off: "10 %",
  },
  {
    img: img4,
    upperText: "product",
    title: "Used for violin manufacture are spruce ",
    price: "$15.00",
    off: "5 %",
  },
  {
    img: img5,
    upperText: "product",
    title: "Typical woods of a guitar today are Mahogany ",
    price: "$10.00",
    off: "20 %",
  },
  {
    img: img6,
    upperText: "product",
    title: "The shell is usually made of wood, such as birch ",
    price: "$25.00",
    off: "50 %",
  },
  {
    img: img7,
    upperText: "product",
    title: "piano is made out of wood, such as maple.",
    price: "$20.00",
    off: "15 %",
  },
  {
    img: img8,
    upperText: "product",
    title: "Used for violin manufacture are spruce ",
    price: "$15.00",
    off: "30 %",
  },
];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


const Populars = () => {
  return (
    <div>
          {
            <div>
              <Carousel breakPoints={breakPoints} className="mt-10 font-fourth">
                {slides.map((slide, index) => (
                  <div key={index} className="w-[250px] p-2 h-[480px] mr-4 border relative">
                    {/* Images */}
                    <div className='relative'>   
                        <img src={slide.img} className="w-full h-[250px]" alt="" />
                        <span className='text-white bg-tertiary px-3 py-2 absolute top-0'>{slide.off}</span>
                    </div>
                    {/*Info */}
                    <div className="mt-4">
                        <p className="text-[13px] text-gray-500">{slide.upperText}</p>
                        <h4 className="font-fourth font-bold text-[17px] ">{slide.title}</h4>
                        {/*Ratings */}
                        <div className="flex items-center">
                            <div className="flex items-center space-x-1">
                                <AiFillStar className="text-yellow-500" />
                                <AiFillStar className="text-yellow-500"/>
                                <AiFillStar className="text-yellow-500"/>
                                <AiFillStar className="text-yellow-500"/>
                                <AiOutlineStar className="text-yellow-500"/>
                            </div>
                            <p  className="text-gray-500 text-[11px] ml-2">4.5</p>
                        </div>
                        <p className="text-gray-500 text-[12px]">Lorem ipsum dolor.</p>

                       <h1 className='text-2xl text-fourth font-bold'>{slide.price}</h1>

                       <button className='w-full h-[40px] flex justify-center items-center text-white bg-fourth text-center mt-3'><BsCartCheckFill className='mr-2'/> Add to Cart</button>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          }
        </div>
  )
}

export default Populars