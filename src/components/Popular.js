import React from "react";
import Carousel from "react-elastic-carousel";
//import icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {BsCartCheckFill} from "react-icons/bs"

//import popular images
import img1 from "../assets/guitar/guitar-6.jpg";
import img2 from "../assets/drums/drums-5.jpg";
import img3 from "../assets/piano/piano-6.jpg";
import img4 from "../assets/violin/violin-6.jpg";
import img5 from "../assets/guitar/guitar-8.jpg";
import img6 from "../assets/drums/drums-8.jpg";
import img7 from "../assets/piano/piano-8.jpg";
import img8 from "../assets/violin/violin-8.jpg";

const slides = [
  {
    img: img1,
    upperText: "product",
    title: "Typical woods of a guitar today are Mahogany ",
    price: "$10.00",
  },
  {
    img: img2,
    upperText: "product",
    title: "The shell is usually made of wood, such as birch ",
    price: "$25.00",
  },
  {
    img: img3,
    upperText: "product",
    title: "piano is made out of wood, such as maple.",
    price: "$20.00",
  },
  {
    img: img4,
    upperText: "product",
    title: "Used for violin manufacture are spruce ",
    price: "$15.00",
  },
  {
    img: img5,
    upperText: "product",
    title: "Typical woods of a guitar today are Mahogany ",
    price: "$10.00",
  },
  {
    img: img6,
    upperText: "product",
    title: "The shell is usually made of wood, such as birch ",
    price: "$25.00",
  },
  {
    img: img7,
    upperText: "product",
    title: "piano is made out of wood, such as maple.",
    price: "$20.00",
  },
  {
    img: img8,
    upperText: "product",
    title: "Used for violin manufacture are spruce ",
    price: "$15.00",
  },
];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

const Popular = () => {
  return (
    <div className="px-40 pt-2 pb-4 h-[600px] w-full">
      <div>
        {/* Popular Nav */}
        <div className="flex justify-between items-center">
          <h3 className="font-primary text-3xl font-bold">Popular Products</h3>
          <div className="flex items-center font-fourth space-x-16">
            <li className="text-fourth">All</li>
            <li>Woodwind</li>
            <li>Brass</li>
            <li>Flute</li>
            <li>Wind Instruments</li>
            <li>Percussion</li>
          </div>
        </div>
        {/* Popular Items */}
        <div>
          {
            <div>
              <Carousel breakPoints={breakPoints} className="mt-10">
                {slides.map((slide, index) => (
                  <div key={index} className="w-[250px] p-2 h-[450px] mr-4 border relative">
                    {/* Images */}
                    <div>   
                        <img src={slide.img} className="w-full h-[250px]" alt="" />
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

                        <div className="flex items-center justify-between absolute -bottom-0 pr-4 py-2 w-full">
                            <span className="text-fourth text-[20px]">{slide.price}</span>
                            <button className="text-white text-[15px] p-2 flex items-center bg-fourth"><BsCartCheckFill className="mr-1"/> Add</button>
                        </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Popular;
