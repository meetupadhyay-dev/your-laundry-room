import React from "react";
import { tracking } from "../../../../assets/icons";

const Features = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-headline sm:text-6xl xs:text-5xl font-semibold text-center text-[#00b4d8]">
          What we offer
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-16">
       
          <div className="text-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-200 shadow flex items-center justify-center">
               <img src={tracking}/>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-[#00b4d8] rounded-full" />
            </div>
            <h3 className="font-headline text-xl sm:text-2xl mt-6 text-gray-800">
              Tracking
            </h3>
            <p className="leading-relaxed mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nam?
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-200 shadow flex items-center justify-center">
                <img src={tracking}/>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-[#00b4d8]  rounded-full" />
            </div>
            <h3 className="font-headline text-xl sm:text-2xl mt-6 text-gray-800">
              Tracking
            </h3>
            <p className="leading-relaxed mt-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam molestias unde voluptas non, inventore nesciunt quis sed corporis voluptates totam?
            </p>
          </div>

     
          <div className="text-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-200 shadow flex items-center justify-center">
                <img src={tracking}/>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-[#00b4d8] rounded-full" />
            </div>
            <h3 className="font-headline text-xl sm:text-2xl mt-6 text-gray-800">
                Tracking
            </h3>
            <p className="leading-relaxed mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti asperiores voluptatem inventore sequi dignissimos sunt quod illo iste quam rem?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
