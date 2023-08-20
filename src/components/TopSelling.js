import React from 'react';

//import icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//import image 
import img1 from "../assets/piano/piano-1.jpg"
import img2 from "../assets/piano/piano-4.jpg"
import img3 from "../assets/drums/drums-1.jpg"
import img4 from "../assets/drums/drums-4.jpg"

import img5 from "../assets/flute/flute-1.jpg"
import img6 from "../assets/flute/flute-2.jpg"
import img7 from "../assets/guitar/guitar-4.jpg"
import img8 from "../assets/guitar/guitar-8.jpg"

import img9 from "../assets/violin/violin-4.jpg"
import img10 from "../assets/violin/violin-5.jpg"
import img11 from "../assets/drums/drums-7.jpg"
import img12 from "../assets/flute/flute-4.jpg"

const slide1 = [
    {
        img: img1,
        upperText: "product",
        title: "piano is made out of wood, such as maple.",
        price: "$20.00",
        off: "15 %",
      },
      {
        img: img2,
        upperText: "product",
        title: "piano is made out of wood, such as maple.",
        price: "$20.00",
        off: "15 %",
      },
      {
        img: img3,
        upperText: "product",
        title: "The shell is usually made of wood, such as birch ",
        price: "$25.00",
        off: "50 %",
      },
      {
        img: img4,
        upperText: "product",
        title: "The shell is usually made of wood, such as birch ",
        price: "$25.00",
        off: "50 %",
      },
]

const slide2 = [
    {
        img: img5,
        upperText: "product",
        title: "flute was originally derived from Chinese ",
        price: "$10.00",
        off: "20 %",
      },
      {
        img: img6,
        upperText: "product",
        title: "flute was originally derived from Chinese ",
        price: "$25.00",
        off: "10 %",
      },
      {
        img: img7,
        upperText: "product",
        title: "Typical woods of a guitar today are Mahogany ",
        price: "$10.00",
        off: "20 %",
      },
      {
        img: img8,
        upperText: "product",
        title: "Typical woods of a guitar today are Mahogany ",
        price: "$10.00",
        off: "20 %",
      },
]

const slide3 = [
    {
        img: img9,
        upperText: "product",
        title: "Used for violin manufacture are spruce ",
        price: "$15.00",
        off: "30 %",
      },
      {
        img: img10,
        upperText: "product",
        title: "Used for violin manufacture are spruce ",
        price: "$15.00",
        off: "30 %",
      },
      {
        img: img11,
        upperText: "product",
        title: "The shell is usually made of wood, such as birch ",
        price: "$25.00",
        off: "50 %",
      },
      {
        img: img12,
        upperText: "product",
        title: "flute was originally derived from Chinese ",
        price: "$10.00",
        off: "20 %",
      },
]

const TopSelling = () => {
  return (
    <div className='px-40 py-6 w-full'>
        <div className='flex'>
            {/*Top Selling */}
            <div className='flex-1'>
                <h3 className='font-primary text-2xl font-bold'>Top Selling</h3>
                <div className='w-[80%] mx-auto space-y-2 mt-6'>
                    {
                        slide1.map((slides, index)=>(
                            <div className='flex items-center p-2' key={index}>
                                <img src={slides.img} className='w-[70px] h-[70px] mr-2' alt="" />

                                <div className='font-fourth'>
                                    <h3 className='font-bold text-[16px]'>{slides.title}</h3>
                                    <div className='flex items-center space-x-1'>
                                        <AiFillStar className="text-yellow-500 text-[15px]"/>
                                        <AiFillStar className="text-yellow-500 text-[15px]"/>
                                        <AiFillStar className="text-yellow-500 text-[15px]"/>
                                        <AiFillStar className="text-yellow-500 text-[15px]"/>
                                        <AiOutlineStar className="text-yellow-500 text-[15px]" />
                                    </div>
                                    <h1 className='text-fourth font-bold'>{slides.price}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/*Trending Products */}
            <div className='flex-1'>
            <h3 className='font-primary text-2xl font-bold'>Trending Products</h3>
            <div className='w-[80%] mx-auto space-y-2 mt-6'>
                {
                    slide2.map((slides, index)=>(
                        <div className='flex items-center p-2' key={index}>
                            <img src={slides.img} className='w-[70px] h-[70px] mr-2' alt="" />

                            <div className='font-fourth'>
                                <h3 className='font-bold text-[16px]'>{slides.title}</h3>
                                <div className='flex items-center space-x-1'>
                                    <AiFillStar className="text-yellow-500 text-[15px]"/>
                                    <AiFillStar className="text-yellow-500 text-[15px]"/>
                                    <AiFillStar className="text-yellow-500 text-[15px]"/>
                                    <AiFillStar className="text-yellow-500 text-[15px]"/>
                                    <AiOutlineStar  className="text-yellow-500 text-[15px]"/>
                                </div>
                                <h1 className='text-fourth font-bold'>{slides.price}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
            {/*Recently Added */}
            <div className='flex-1'>
            <h3 className='font-primary text-2xl font-bold'>Recently Added</h3>
            <div className='w-[80%] mx-auto space-y-2 mt-6'>
                {
                    slide3.map((slides, index)=>(
                        <div className='flex items-center p-2' key={index}>
                            <img src={slides.img} className='w-[70px] h-[70px] mr-2' alt="" />

                            <div className='font-fourth'>
                                <h3 className='font-bold text-[16px]'>{slides.title}</h3>
                                <div className='flex items-center space-x-1'>
                                    <AiFillStar className="text-yellow-500 text-[15px]"/>
                                    <AiFillStar className="text-yellow-500 text-[15px]"/>
                                    <AiFillStar className="text-yellow-500 text-[15px]"/>
                                    <AiFillStar className="text-yellow-500 text-[15px]"/>
                                    <AiOutlineStar className="text-yellow-500 text-[15px]" />
                                </div>
                                <h1 className='text-fourth font-bold'>{slides.price}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default TopSelling