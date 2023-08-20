import React from 'react';
import Carousel from "react-elastic-carousel";
//import icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {BsCartCheckFill} from "react-icons/bs"

//import images flute
import img1 from "../../assets/flute/flute-1.jpg"
import img2 from "../../assets/flute/flute-2.jpg"
import img3 from "../../assets/flute/flute-3.jpg"
import img4 from "../../assets/flute/flute-4.jpg"

const slides = [
    {
      img: img1,
      upperText: "product",
      title: "flute was originally derived from Chinese ",
      price: "$10.00",
      off: "20 %",
    },
    {
      img: img2,
      upperText: "product",
      title: "flute was originally derived from Chinese ",
      price: "$25.00",
      off: "10 %",
    },
    {
      img: img3,
      upperText: "product",
      title: "flute was originally derived from Chinese",
      price: "$20.00",
      off: "8 %",
    },
    {
      img: img4,
      upperText: "product",
      title: "flut was originally derived from Chinese",
      price: "$15.00",
      off: "25 %",
    },
  ];
  
  const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 750, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
  
  

const NewAdded = () => {
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

export default NewAdded