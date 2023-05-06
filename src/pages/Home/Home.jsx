import React from 'react'
import Navbar from '../layouts/Navbar'
import { HomeHeroCardTemplate } from '../layouts/heroCard/homeHerCard/HomeHeroCardTemplate'
import TempleHeroCard from '../layouts/heroCard/categories/TempleHeroCard'
import HorizentialCardScroll from '../layouts/HorizentialCardScroll'
import Footer from '../layouts/footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="global-padding-x pt-20">
        <HomeHeroCardTemplate />
        <HorizentialCardScroll />
        <HorizentialCardScroll />
        <HorizentialCardScroll />
        <HorizentialCardScroll />
        {/* <HorizentialCardScroll /> */}
      </div>
      <Footer />
    </>
  )
}

export default Home
