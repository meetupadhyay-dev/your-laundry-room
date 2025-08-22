import React from "react";
import { hero_video } from "../../../../assets/hero"

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={hero_video}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content (Centered) */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 ">
          Premium Laundry & Dry Cleaning Services
        </h1>
        <p className="text-lg mb-8">
         Steam Ironing, Wash & Fold, Dry Cleaning – all with Free Pickup & Delivery within 6 km of Aarohi Galleria, South Bopal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-[#0077b6]  rounded-full text-white font-semibold shadow-lg transition">
            Schedule Your Pickup
          </button>
          {/* <button className="px-6 py-3 bg-white hover:bg-gray-200 rounded-full text-blue-600 font-semibold shadow-lg transition">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
