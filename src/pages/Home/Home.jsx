import React from 'react'
import { Hero, AboutSection, FAQ, Pricing, ServiceSection, WorkProcess, WhyChooseUs, PickupForm } from '../../components/pages/Home'

import { Banner } from '../../components/shared'
import HeroOne from '../../components/pages/Home/Hero/HeroOne'
import Header from '../../components/shared/Header/Header'
import { hero_one, hero_video } from '../../assets/hero'


const Home = () => {
  return (
    <>
     <Header
     
      backgroundVideo={hero_video}
      titleLines={[
        { text: "Premium Laundry & Dry" },
        { text: "Cleaning Services in" },
        { text: "Vadodara", highlight: true },
        { text: "Today" },
      ]}
      ctaText="Schedule Pickup"
      ctaNote=""
    />
    {/* <HeroOne /> */}
      {/* <Hero /> */}
      {/* <Banner /> */}
      <AboutSection />
      <PickupForm />
      <ServiceSection />
      <WorkProcess />
      <Pricing />
      <FAQ />
      {/* <WhyChooseUs /> */}
    </>
  )
}

export default Home