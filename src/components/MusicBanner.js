import React from 'react'

//import banner image
import banner from "../assets/musicBanner.jpg"

const MusicBanner = () => {
  return (
    <div className='px-40 pt-6 pb-20'>
        <div className='w-full h-[500px]'>
            <img src={banner} className='object-fit' alt="" />
        </div>
    </div>
  )
}

export default MusicBanner