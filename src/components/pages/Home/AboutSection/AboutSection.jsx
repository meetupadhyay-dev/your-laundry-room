import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { about_section } from '../../../../assets/about';

const AboutSection = () => {
  const { pathname } = useLocation()

  console.log(pathname)
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto py-10 px-5">

      <div className="sm:w-1/2 p-6">
        <div className="image object-center text-center">
          <img
            src={about_section}
            alt="About Us"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="sm:w-1/2 p-6">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-[#00b4d8] uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold  sm:text-6xl xs:text-5xl">
            <span className="text-[#6e4040]">Your</span> <span className="text-[#417377]"> Laundry Room</span>
          </h2>
          <p className="text-gray-700 mb-4">
            The Most Trusted Laundry Service in Vadodara
            Content – Looking for affordable and reliable laundry services in Vadodara? You’ve come to the right place
          </p>
          {pathname == "/about" && <>
            <p className="text-gray-700 mb-4">
              The Most Trusted Laundry Service in Vadodara
              Content – Looking for affordable and reliable laundry services in Vadodara? You’ve come to the right place
            </p>
            <p className="text-gray-700 mb-4">
              The Most Trusted Laundry Service in Vadodara
              Content – Looking for affordable and reliable laundry services in Vadodara? You’ve come to the right place
            </p>
          </>}




          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Experienced and professional team</li>
            <li>Customer-first approach</li>
            <li>Innovative solutions tailored to your needs</li>
            <li>Commitment to quality and reliability</li>
          </ul>

          {pathname == "/" && <Link
            to="/about"
            className="inline-block px-6 py-3 bg-[#417377] text-white font-medium rounded-lg shadow-md hover:bg-white hover:text-[#417377] transition"
          >
            Read More
          </Link>}

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
