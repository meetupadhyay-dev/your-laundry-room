import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderOne = ({ backgroundImage, backgroundVideo, titleLines = [], ctaText = "Join Now", ctaNote }) => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Layer */}
      {backgroundVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* ✅ Navbar removed here */}

        {/* Hero Section */}
        <div className="w-[90%] mx-auto flex-1 flex items-center justify-between py-10">
          {/* Left Content */}
          <div className="lg:w-fit">
            <div className="sm:text-6xl xs:text-5xl text-left text-white font-serif font-extrabold uppercase">
              {titleLines.map((line, i) => (
                <h1
                  key={i}
                  className={line.highlight ? "bg-black/30 px-1 rounded-sm shadow-sm shadow-white/50" : ""}
                >
                  {line.text}
                </h1>
              ))}
            </div>

            {/* CTA */}
            <div className="w-full flex items-center justify-between mt-6 py-1 px-4 uppercase text-white rounded-sm cursor-pointer">
              <div className="w-[40%] flex items-center text-gray-700 text-4xl gap-0">
                {/* <IoChevronForward className="text-white" /> */}
              </div>
            </div>
            {ctaNote && (
              <p className="text-md text-white bg-black/30 font-semibold mt-1 capitalize rounded-lg p-2">
                {ctaNote}
              </p>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-2 items-center text-2xl text-white mt-6">
            <Link to="#" className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 flex justify-center items-center"><FaTwitter /></Link>
            <Link to="#" className="w-9 h-9 rounded-full bg-black/40 hover:bg-pink-800 flex justify-center items-center"><FaInstagram /></Link>
            <Link to="#" className="w-9 h-9 rounded-full bg-black/40 hover:bg-sky-600 flex justify-center items-center"><FaLinkedinIn /></Link>
            <Link to="#" className="w-9 h-9 rounded-full bg-black/40 hover:bg-rose-600 flex justify-center items-center"><FaYoutube /></Link>
            <Link to="#" className="w-9 h-9 rounded-full bg-black/40 hover:bg-blue-600 flex justify-center items-center"><FaFacebookF /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOne;
