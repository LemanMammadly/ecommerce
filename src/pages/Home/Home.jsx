import React from 'react'
import HomeCategories from '../../components/homeCategories/HomeCategories'
import Homehero from '../../components/HomeHero/Homehero'
import Ingredients from '../../components/Ingredients/Ingredients'
import Safe from '../../components/Safe/Safe'

const Home = () => {
  return (
    <div>
      <Homehero/>
      <HomeCategories/>
      <Safe/>
      <Ingredients/>
    </div>
  )
}

export default Home