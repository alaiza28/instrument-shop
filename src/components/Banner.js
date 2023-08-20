import React from 'react'

//import icons
import {BiCurrentLocation} from "react-icons/bi";
import {BsFire} from "react-icons/bs"
import BannerSlider from './BannerSlider';
import BannerRight from './BannerRight';

// import Link

const Banner = () => {
  return (
    <header className='w-screen'>
        <hr className='w-full dark:bg-gray-500'/>
        <div className='h-[70px] px-40 font-fourth flex items-center space-x-8'>
            <li className='py-2 px-3 bg-fourth flex items-center text-white'><BiCurrentLocation className='mr-1'/>Brows All Categories </li>
            <li>Home</li>
            <li>About</li>
            <li>Vendors</li>
            <li>Contact</li>
            <li className='border border-red-500 py-2 px-3 text-red-500 flex bg-red-100 items-center'><BsFire className='mr-1'/> Hot Deals</li>
        </div>
        <hr className='w-full dark:bg-slate-500'/>

        <div className='px-40 flex py-6 gap-x-4'>
            {/* Left Banner */}
            <div className='w-[900px] h-[500px] '>
                <BannerSlider />
            </div>
            {/* Right Banner */}
            <div className='w-[500px]'>
                <BannerRight />
            </div>
        </div>
    </header>
  )
}

export default Banner