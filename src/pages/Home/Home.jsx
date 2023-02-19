import React from 'react'
import BestSellers from '../../components/BestSellers/BestSellers'
import CommentsSlider from '../../components/CommentsSlider/CommentsSlider'
import FeaturedImage from '../../components/FeaturedImage/FeaturedImage'
import HomeCategories from '../../components/homeCategories/HomeCategories'
import Homehero from '../../components/HomeHero/Homehero'
import Ingredients from '../../components/Ingredients/Ingredients'
import Neighborhood from '../../components/Neighborhood/Neighborhood'
import Safe from '../../components/Safe/Safe'
import Social from '../../components/Social/Social'

const Home = () => {
  return (
    <div>
      <Homehero/>
      <HomeCategories/>
      <Safe/>
      <Ingredients/>
      <BestSellers/>
      <Neighborhood/>
      <CommentsSlider/>
      <FeaturedImage/>
      <Social/>
    </div>
  )
}

export default Home