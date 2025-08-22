import React from "react";
import {
  bagCleaning,
  cleaning,
  cleaningCart,
  dirtyShirt,
  dryCleaning,
  machine,
  shoeshine,
  steamIron,
} from "../../../../assets/service/index";

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

const ServiceSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl mb-2 text-[#0096c7]">Our Services</h1>
        <p className="text-lg text-gray-600">
          If You’re Still Scrolling, You Clearly Care About Clean. Let’s take it up a notch — from everyday laundry to stain rescues, bags, shoes, and more.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 justify-items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-72 h-[340px] rounded-2xl overflow-hidden shadow-lg bg-[#0096c7] group cursor-pointer"
          >
            {/* Image */}
            <div className="h-52 w-full flex items-center justify-center overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-[50%] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md p-4 text-center transition-all duration-500 group-hover:translate-y-[-70px]">
              <h2 className="text-xl font-bold text-gray-900">
                {service.title}
              </h2>
            </div>

            {/* Hidden Description - Slides down on hover */}
            <div className="absolute bottom-[-100%] left-0 w-full bg-white/95 backdrop-blur-md p-5 text-center transition-all duration-500 group-hover:bottom-0">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;


