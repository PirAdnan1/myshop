import React from 'react'

// Home Components
import Slider from './Slider'
import Hero from './Hero'
import Categories from './Categories'
import BestSelling from './BestSelling'
import ExperienceCard from './ExperienceCard'
import Collections from './Collections'
import AboveFooter from './AboveFooter'

function HomepAgeData() {
  return (
    <div>
      <Hero />
      <Slider />
      <Categories />
      <BestSelling />
      <ExperienceCard />
      <Collections />
      <AboveFooter />
    </div>
  )
}

export default HomepAgeData
