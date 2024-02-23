import React from 'react'
import { Navbar, BannerSlider, HomeCategories, ProductSidebar} from '../../Components'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <BannerSlider/>
      <HomeCategories/>
      <ProductSidebar/>
      Home
    </div>
  )
}

export default Home