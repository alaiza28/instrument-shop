import React from 'react'

//import images
import bannerImg from "../assets/bestSeller.jpg";
import BestSellerTabs from './BestSellerTabs';

const DailyBestSeller = () => {
  return (
    <div className='px-40 py-4 flex space-x-3 overflow-hidden'>
        {/*Banner */}
        <div className=' w-[400px] p-4 h-[600px]'>
        <h3 className="font-primary text-3xl font-bold mb-6">Popular Products</h3>
            <div className='w-full relative text-center '>
                <img src={bannerImg} alt="" className='w-full h-[500px]'/>
                <div className='absolute top-20 flex items-center  flex-col w-full'>
                <h3 className='justify-right h-full text-4xl font-bold'>Bring <span className='text-fourth'>joy</span> into your home</h3>
                <button className="bg-fourth text-white px-6 py-4 font-fourth my-2">Buy Now</button>
              </div>
            </div>
        </div>

        {/* Tabs */}
        <div className=' w-[900px] h-[600px]'>
            <BestSellerTabs />
        </div>
    </div>
  )
}

export default DailyBestSeller