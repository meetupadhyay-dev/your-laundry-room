import React from 'react'
import { Header } from '../../components/shared'
import { slide_one } from "../../assets/slides/index"
import {
  bagCleaning,
  cleaning,
  cleaningCart,
  dirtyShirt,
  dryCleaning,
  machine,
  shoeshine,
  steamIron
} from "../../assets/service"

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Dry Cleaning",
      desc: "Professional dry cleaning that gently removes stains and refreshes your delicate garments.",
      image: dryCleaning,
    },
    {
      id: 2,
      title: "Steam Iron",
      desc: "Smooth wrinkles instantly with our professional steam ironing service.",
      image: steamIron,
    },
    {
      id: 3,
      title: "Shoe Cleaning",
      desc: "Specialized cleaning to restore your shoes’ shine and extend their life.",
      image: shoeshine,
    },
    {
      id: 4,
      title: "Regular Laundry",
      desc: "Affordable wash and fold services that keep your everyday clothes fresh and clean.",
      image: machine,
    },
    {
      id: 5,
      title: "Bag Cleaning",
      desc: "Gentle yet effective cleaning for your handbags and backpacks, maintaining their quality.",
      image: bagCleaning,
    },
    {
      id: 6,
      title: "Stain Removal",
      desc: "Advanced stain removal techniques to tackle tough spots and keep your clothes spotless.",
      image: dirtyShirt,
    },
    {
      id: 6,
      title: "Leather Cleaning",
      desc: "Expert care for leather items, preserving texture and color without damage.",
      image: cleaning,
    },
    {
      id: 7,
      title: "Household Items",
      desc: "Clean and fresh laundry for curtains, bedsheets, pillow covers, and other household textiles.",
      image: cleaningCart,
    },
  ];
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.desc}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services