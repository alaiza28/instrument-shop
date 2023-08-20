import React from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import FeaturedCategories from './components/FeaturedCategories'
import Popular from './components/Popular'
import DailyBestSeller from './components/DailyBestSeller'
import TopSelling from './components/TopSelling'
import Categories from './components/Categories'
import MusicBanner from './components/MusicBanner'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='overflow-hidden w-screen dark:bg-primary dark:text-white mainApp'>
      <Nav />
      <Banner />
      <FeaturedCategories />
      <Popular /> 
      <DailyBestSeller />
      <TopSelling />
      <Categories />
      <MusicBanner />
      <Footer />
    </div>
  )
}

export default App