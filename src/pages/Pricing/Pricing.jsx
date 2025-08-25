import React from 'react'
import { Header } from '../../components/shared'
import { slide_one } from "../../assets/slides/index"

const Pricing = () => {
  return (
    <>
      <Header
        backgroundImage={slide_one}

        titleLines={[
          { text: "Premium Laundry & Dry" },
          { text: "Cleaning Services in" },
          { text: "Vadodara", highlight: true },
          { text: "Today" },
        ]}
        ctaText="Schedule Pickup"
        ctaNote=""
      />
    </>
  )
}

export default Pricing