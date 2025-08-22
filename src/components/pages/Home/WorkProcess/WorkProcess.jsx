import React from "react";
import { pickup, collect, processing, delivery } from "../../../../assets/icons";
import { hero_two } from "../../../../assets/hero";

const workData = [
  {
    id: 1,
    title: "We Pickup",
    description:
      "Schedule your free laundry pickup from anywhere within 6 km of Aarohi Galleria, Bopal.",
    img: pickup,
  },
  {
    id: 2,
    title: "We Collect & Sort",
    description:
      "Our team collects your clothes and sorts them carefully for the best cleaning treatment.",
    img: collect,
  },
  {
    id: 3,
    title: "Expert Processing",
    description:
      "Your laundry gets washed, dry cleaned, and steam ironed using eco-friendly methods and premium equipment.",
    img: processing,
  },
  {
    id: 4,
    title: "We Deliver",
    description:
      "Fresh, clean, and perfectly pressed clothes delivered back to your doorstep — on time, every time.",
    img: delivery,
  },
];

const WorkProcess = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${hero_two})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-6 py-20">
        {/* Heading */}
        <div className="text-center text-gray-100">
          <h2 className="my-8 text-3xl md:text-5xl font-extrabold text-white">
            How We Work?
          </h2>
        </div>

        {/* Work Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {workData.map((work) => (
            <div
              key={work.id}
              className="group relative  backdrop-blur-sm rounded-2xl p-8 text-center transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0096c7]"
            >
              <div className="flex justify-center">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-20 h-20 md:w-24 md:h-24"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 space-y-3">
                <h5 className="text-2xl font-bold text-white group-hover:text-[#0096c7] transition">
                  {work.title}
                </h5>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 text-lg font-semibold rounded-full bg-[#0096c7] text-white shadow-lg shadow-yellow-500/30 transition transform hover:scale-110 hover:shadow-yellow-400/50 hover:bg-yellow-400 animate-bounce">
            Schedule Pickup
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
