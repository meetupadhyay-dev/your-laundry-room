import React from "react";
import { motion } from "framer-motion";

// const pricingData = [
//   {
//     id: 1,
//     title: "Men's Wear",
//     note: "Delivery Within 3 days",
//     items: [
//       { item: "Shirt", dryCleanPrice: 105, steamIronPrice: 25 },
//       { item: "T Shirt", dryCleanPrice: 105, steamIronPrice: 25 },
//       { item: "Trousers", dryCleanPrice: 105, steamIronPrice: 25 },
//       { item: "Jeans", dryCleanPrice: 105, steamIronPrice: 25 },
//       { item: "Coat", dryCleanPrice:265, steamIronPrice: 55 },
//       { item: "Mens Suit 2 Pcs", dryCleanPrice: 370, steamIronPrice: 80 },
//       { item: "Mens Suit 3 Pcs", dryCleanPrice: 475, steamIronPrice: 105 },
//       { item: "Kurta", dryCleanPrice: '105+', steamIronPrice: '25+' },
//       { item: "Pyjama", dryCleanPrice: '105+', steamIronPrice: '25+' },
//       { item: "Achkan", dryCleanPrice: 105, steamIronPrice: 25 },
//     ],
//   },
//   {
//     id: 2,
//     title: "Women's Wear",
//     note: "Delivery Within 3 days",
//     items: [
//       { item: "Kurta", dryCleanPrice: 105, steamIronPrice: 25 },
//       { item: "Salwar", dryCleanPrice: 105, steamIronPrice: 25 },
//       { item: "Plazo", dryCleanPrice: 105, steamIronPrice: 25 },
//       { item: "Dupatta", dryCleanPrice: 65, steamIronPrice: 15 },
//       { item: "Saree", dryCleanPrice:210, steamIronPrice: 45 },
//       { item: "Blouse", dryCleanPrice: 85, steamIronPrice: 25 },
//       { item: "Dress", dryCleanPrice: 315, steamIronPrice: 65 },
//       { item: "Top", dryCleanPrice: 105, steamIronPrice: 25 },
//       { item: "Lehenga", dryCleanPrice: 315, steamIronPrice: 65 },
//       { item: "Skirt", dryCleanPrice: 225, steamIronPrice: 45 },
//     ],
//   },
//   {
//     id: 3,
//     title: "Woolen",
//     note: "Delivery Within 3 days",
//     items: [
//       { item: "Jacket Full Sleaves", dryCleanPrice: 265, steamIronPrice: 55 },
//       { item: "Jacket Half Sleaves", dryCleanPrice: 200, steamIronPrice: 45 },
//       { item: "Sweater Full Sleaves", dryCleanPrice: 130, steamIronPrice: 25 },
//       { item: "Sweater Half Sleaves", dryCleanPrice: 95, steamIronPrice: 25 },
//       { item: "Sweat Shirt", dryCleanPrice:160, steamIronPrice: 35 },
//       { item: "Long Coat", dryCleanPrice: 405, steamIronPrice: 85 },
//       { item: "Shawl", dryCleanPrice:130, steamIronPrice: 25 },
//       { item: "Pashmina", dryCleanPrice: 365, steamIronPrice:75 },
//       { item: "Leather Jacket", dryCleanPrice: 525, steamIronPrice:105 },
      
//     ],
//   },
//   {
//     id: 4,
//     title: "Household Items",
//     note: "Delivery Within 3 days",
//     items: [
//       { item: "Jacket Full Sleaves", dryCleanPrice: 265, steamIronPrice: 55 },
//       { item: "Jacket Half Sleaves", dryCleanPrice: 200, steamIronPrice: 45 },
//       { item: "Sweater Full Sleaves", dryCleanPrice: 130, steamIronPrice: 25 },
//       { item: "Sweater Half Sleaves", dryCleanPrice: 95, steamIronPrice: 25 },
//       { item: "Sweat Shirt", dryCleanPrice:160, steamIronPrice: 35 },
//       { item: "Long Coat", dryCleanPrice: 405, steamIronPrice: 85 },
//       { item: "Shawl", dryCleanPrice:130, steamIronPrice: 25 },
//       { item: "Pashmina", dryCleanPrice: 365, steamIronPrice:75 },
//       { item: "Leather Jacket", dryCleanPrice: 525, steamIronPrice:105 },
      
//     ],
//   },
// ];


import { FaTshirt } from "react-icons/fa";
import {timer} from "../../../../assets/icons"
import { Link } from "react-router-dom";

const pricingData = [
  { id: 1, title: "From Rs.10 per Shirt", price: "shirtService", image: timer },
  { id: 1, title: "From Rs.10 per Shirt", price: "shirtService", image: timer },
  { id: 1, title: "From Rs.10 per Shirt", price: "shirtService", image: timer },
  { id: 1, title: "From Rs.10 per Shirt", price: "shirtService", image: timer },
  { id: 1, title: "From Rs.10 per Shirt", price: "shirtService", image: timer },  

];

const PricingSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Pricing
        </h2>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {pricingData.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-[#00b4d8] shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-contain p-4 transition-transform group-hover:scale-105"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white">{item.price}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
               
                <button className="px-4 py-2 bg-[#00b4d8] text-white rounded-lg font-medium hover:bg-white transition hover:cursor-pointer hover:text-[#00b4d8]">
                  Schedule Pickup
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-10">
          <Link to="/pricing">
          <button className="px-6 py-3 bg-[#00b4d8]  text-white rounded-lg font-semibold hover:bg-white hover:text-[#00b4d8] hover:cursor-pointer transition">
            View Full Price List
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


