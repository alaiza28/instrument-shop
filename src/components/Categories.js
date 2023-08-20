import React from 'react';

//import icons
import {FaGuitar, FaDrumSteelpan} from "react-icons/fa"
import {GiGuitar, GiGrandPiano, GiViolin, GiFlute, GiPanFlute, GiPianoKeys} from "react-icons/gi"

const icons = [
    {
        img: <FaGuitar />,
        name: "Guitar"
    },
    {
        img: <GiGrandPiano />,
        name: "Piano"
    },
    {
        img: <GiGuitar />,
        name: "Guitar"
    },
    {
        img: <FaDrumSteelpan />,
        name: "Drums"
    },
    {
        img: <GiFlute />,
        name: "Flute"
    },
    {
        img: <GiPianoKeys />,
        name: "Piano"
    },
    {
        img: <GiViolin />,
        name: "Violin"
    },
    {
        img: <GiPanFlute />,
        name: "Flute"
    },
]

const Categories = () => {
  return (
    <div className='px-40  py-6 font-fourth'>
        <div className='flex items-center'>
            <h3 className='mr-4 font-primary text-3xl font-bold'>Shop by Categories</h3>
            <p className='text-gray-500 text-[16px]'>All Categories</p>
        </div>

        <div className='flex items-center space-x-2 mt-4'>
            {
                icons.map((icon, index)=>(
                    <div className='flex justify-center bg-[#f1f5f9] dark:bg-black/20 shadow-xl border rounded-md items-center p-4 w-[200px] h-auto' key={index}>
                        <div className='text-center w-full'>
                            <div className='flex w-full justify-center items-center'>
                            <span className='text-tertiary text-4xl'>{icon.img}</span>
                            </div>
                            <h4>{icon.name}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories