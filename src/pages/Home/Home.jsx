import React from 'react'
import Navbar from '../layouts/Navbar'
import { HomeHeroCardTemplate } from '../layouts/heroCard/homeHerCard/HomeHeroCardTemplate'
import TempleHeroCard from '../layouts/heroCard/categories/TempleHeroCard'
import HorizentialCardScroll from '../layouts/HorizentialCardScroll'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHeroCardTemplate />
      <HorizentialCardScroll />
      <HorizentialCardScroll />
      {/* <HorizentialCardScroll />
      <HorizentialCardScroll />
      <HorizentialCardScroll /> */}
    </div>
  )
}

export default Home
