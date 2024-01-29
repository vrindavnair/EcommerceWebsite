import React from 'react'
import Announcement from '../Components/Announcement'
import Navspace from '../Components/Navspace'
import CarouselImage from '../Components/CarouselImage'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'






function Home() {
  return (
    <div>
      <Announcement/>
      <Navspace/>
      <CarouselImage/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    
    </div>
  )
}

export default Home
