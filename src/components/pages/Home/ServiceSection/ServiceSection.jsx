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
import { about_one } from "../../../../assets/hero";
import { Link } from "react-router-dom";
import {slide_two} from "../../../../assets/slides"

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
    <section className="max-w-7xl mx-auto px-5 py-12">
      
      <h2 className="sm:text-6xl xs:text-5xl font-bold text-center mb-12 text-[#00b4d8]">
        Services We Offer
      </h2>

      
      <div className="flex flex-col md:flex-row items-stretch ">
      
        <div className="w-full md:w-1/2">
          <img
            src={about_one}
            alt="Service"
            className="w-full h-full object-cover shadow-md "
          />
        </div>

     
        <div className="bg-[#00b4d8] text-white w-full md:w-1/2 p-6 flex flex-col justify-center items-center text-center shadow-md ">
          <img src={machine} alt="Laundry Machine" className="w-28 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cloth Laundry</h3>
          <p className="text-sm md:text-base leading-relaxed">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-stretch mb-8">
       
        <div className="w-full md:w-1/2">
          <img
            src={slide_two}
            alt="Service"
            className="w-full h-full object-cover shadow-md "
          />
        </div>

        <div className="bg-[#00b4d8] text-white w-full md:w-1/2 p-6 flex flex-col justify-center items-center text-center shadow-md ">
          <img src={steamIron} alt="Laundry Machine" className="w-28 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cloth Laundry</h3>
          <p className="text-sm md:text-base leading-relaxed">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!!
          </p>
        </div>
      </div>

  
      <div className="flex justify-center mt-10">
        <Link to="/services">
        <button className="px-6 py-3 bg-[#00b4d8] text-white font-semibold rounded-full shadow-lg hover:bg-[#0096c7] transition-all duration-300 hover:cursor-pointer">
          Explore More Services
        </button>
      </Link>
    </div>
    </section >

  );
};

export default ServiceSection;
