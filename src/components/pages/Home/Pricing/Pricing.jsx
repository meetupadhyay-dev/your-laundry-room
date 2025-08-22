import React from "react";
import { motion } from "framer-motion";

const pricingData = [
  {
    id: 1,
    title: "Men's Wear",
    note: "Delivery Within 3 days",
    items: [
      { item: "Shirt", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "T Shirt", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Trousers", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Jeans", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Coat", dryCleanPrice:265, steamIronPrice: 55 },
      { item: "Mens Suit 2 Pcs", dryCleanPrice: 370, steamIronPrice: 80 },
      { item: "Mens Suit 3 Pcs", dryCleanPrice: 475, steamIronPrice: 105 },
      { item: "Kurta", dryCleanPrice: '105+', steamIronPrice: '25+' },
      { item: "Pyjama", dryCleanPrice: '105+', steamIronPrice: '25+' },
      { item: "Achkan", dryCleanPrice: 105, steamIronPrice: 25 },
    ],
  },
  {
    id: 2,
    title: "Women's Wear",
    note: "Delivery Within 3 days",
    items: [
      { item: "Kurta", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Salwar", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Plazo", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Dupatta", dryCleanPrice: 65, steamIronPrice: 15 },
      { item: "Saree", dryCleanPrice:210, steamIronPrice: 45 },
      { item: "Blouse", dryCleanPrice: 85, steamIronPrice: 25 },
      { item: "Dress", dryCleanPrice: 315, steamIronPrice: 65 },
      { item: "Top", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Lehenga", dryCleanPrice: 315, steamIronPrice: 65 },
      { item: "Skirt", dryCleanPrice: 225, steamIronPrice: 45 },
    ],
  },
  {
    id: 3,
    title: "Woolen",
    note: "Delivery Within 3 days",
    items: [
      { item: "Jacket Full Sleaves", dryCleanPrice: 265, steamIronPrice: 55 },
      { item: "Jacket Half Sleaves", dryCleanPrice: 200, steamIronPrice: 45 },
      { item: "Sweater Full Sleaves", dryCleanPrice: 130, steamIronPrice: 25 },
      { item: "Sweater Half Sleaves", dryCleanPrice: 95, steamIronPrice: 25 },
      { item: "Sweat Shirt", dryCleanPrice:160, steamIronPrice: 35 },
      { item: "Long Coat", dryCleanPrice: 405, steamIronPrice: 85 },
      { item: "Shawl", dryCleanPrice:130, steamIronPrice: 25 },
      { item: "Pashmina", dryCleanPrice: 365, steamIronPrice:75 },
      { item: "Leather Jacket", dryCleanPrice: 525, steamIronPrice:105 },
      
    ],
  },
  {
    id: 4,
    title: "Household Items",
    note: "Delivery Within 3 days",
    items: [
      { item: "Jacket Full Sleaves", dryCleanPrice: 265, steamIronPrice: 55 },
      { item: "Jacket Half Sleaves", dryCleanPrice: 200, steamIronPrice: 45 },
      { item: "Sweater Full Sleaves", dryCleanPrice: 130, steamIronPrice: 25 },
      { item: "Sweater Half Sleaves", dryCleanPrice: 95, steamIronPrice: 25 },
      { item: "Sweat Shirt", dryCleanPrice:160, steamIronPrice: 35 },
      { item: "Long Coat", dryCleanPrice: 405, steamIronPrice: 85 },
      { item: "Shawl", dryCleanPrice:130, steamIronPrice: 25 },
      { item: "Pashmina", dryCleanPrice: 365, steamIronPrice:75 },
      { item: "Leather Jacket", dryCleanPrice: 525, steamIronPrice:105 },
      
    ],
  },
];

const Pricing = () => {
  return (
    <div className="py-16" id="pricing">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          {/* <h1 className="text-3xl font-semibold leading-7 text-indigo-400">
            Pricing
          </h1> */}
          <p className="mt-4 text-6xl font-extrabold tracking-tight text-[#00b4d8]">
            Your Laundry Room Wallet Plans – More Value, More Washes
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-2xl leading-9">
          Choose the service that works best for you
        </p>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {pricingData.map((plan) => (
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              key={plan.id}
              className="bg-white/10  ring-1 ring-white/20 rounded-3xl p-10 w-[450px] min-h-[460px] shadow-lg hover:shadow-indigo-500/40 transition flex flex-col justify-between"
            >
              <div className="">
                <h2 className="text-3xl font-bold">{plan.title}</h2>
                <p className="mt-4 text-xl">{plan.note}</p>

                {/* Table Style Layout */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full text-lg border-separate border-spacing-y-3 whitespace-nowrap">
                    <thead>
                      <tr className="text-left ">
                        <th className="pr-6">Item</th>
                        <th className="pr-6">Steam Iron</th>
                        <th>Dry Clean</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plan.items.map((service, i) => (
                        <tr
                          key={i}
                          className="bg-white/5 hover:bg-white/10 transition"
                        >
                          <td className="py-3 px-4 font-medium">
                            {service.item}
                          </td>
                          <td className="py-3 px-4 ">
                            ₹{service.steamIronPrice}
                          </td>
                          <td className="py-3 px-4 ">
                            ₹{service.dryCleanPrice}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <button className="mt-10 w-full rounded-2xl bg-[#00b4d8] text-white py-4 text-xl font-bold hover:bg-indigo-600 transition">
                Schedule Pickup
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
