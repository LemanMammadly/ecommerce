import React from 'react'
import BestSellers from '../../components/BestSellers/BestSellers'
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
      <BestSellers/>
    </div>
  )
}

export default Home