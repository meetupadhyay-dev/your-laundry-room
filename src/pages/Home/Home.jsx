import React from 'react'
import { Hero, AboutSection, FAQ, Pricing, ServiceSection, WorkProcess, WhyChooseUs, PickupForm } from '../../components/pages/Home'

import { Banner } from '../../components/shared'


const Home = () => {
  return (
    <>
      <Hero />
      {/* <Banner /> */}
      <AboutSection />
      <PickupForm />
      <ServiceSection />
      <WorkProcess />
      <Pricing />
      {/* <FAQ /> */}
      {/* <WhyChooseUs /> */}
    </>
  )
}

export default Home