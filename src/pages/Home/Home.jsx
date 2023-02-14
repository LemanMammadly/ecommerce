import React from 'react'
import HomeCategories from '../../components/homeCategories/HomeCategories'
import Homehero from '../../components/HomeHero/Homehero'
import Safe from '../../components/Safe/Safe'

const Home = () => {
  return (
    <div>
      <Homehero/>
      <HomeCategories/>
      <Safe/>
    </div>
  )
}

export default Home