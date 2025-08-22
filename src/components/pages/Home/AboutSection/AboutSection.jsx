import React from "react";
import { about_one } from "../../../../assets/hero";

const AboutSection = () => {
  return (
    <>
      {/* <div className="relative">
      
    
        <div className="bg-[#4DD0E1] h-64 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-center text-3xl font-extrabold mb-2 font-serif">
            Search according to your needs
          </h1>
          <p className="text-lg text-center">
            Discover the best opportunities and make your dream become reality.
          </p>
        </div>
      
        <div className="px-4">
        
          <div className="relative w-full sm:absolute sm:-bottom-10 sm:left-0">
            <div className="bg-white border border-gray-300 shadow-2xl rounded-lg mx-auto max-w-full sm:max-w-4xl p-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 flex-wrap">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600">
                  <option value="">Category</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                </select>
                <input
                  type="number"
                  placeholder="Min Price"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button className="bg-red-600 text-white p-2 justify-center rounded-md hover:bg-red-700 w-full sm:w-auto flex-shrink-0 mt-2 sm:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* About Us */}
      <div className="sm:flex items-center sm:mt-10 max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img
              className="rounded-lg"
              src={about_one}
              alt="About Our Company"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              Welcome To <span className="text-[#00b4d8]">Your Laundry Room</span>
            </h2>
            <p className="text-gray-700 mb-2">
              The Most Trusted Laundry Service in Bopal, Ahmedabad
              Content – Looking for affordable and reliable laundry services in Bopal, Ahmedabad? You’ve come to the right place!
            </p>
            <p className="text-gray-700">
              We provide professional laundry, dry cleaning, steam ironing, and wash & fold services to homes and businesses across South Bopal and surrounding areas. Located at Aarohi Galleria, we offer free pickup and delivery within 6 km, making your laundry experience truly hassle-free.
            </p>


           
        </div>
        {/* Get Started Button */}
        <button className="mt-4 bg-[#00b4d8] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 hover:text-white">
          Read More
        </button>
      </div>
    </div >
    </>
  );
};

export default AboutSection;
