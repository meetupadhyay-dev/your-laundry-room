import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Your_Laundry, Your_Laundry_Room } from "../../../assets/logo";
import { Link } from "react-router-dom";

const Header = ({ backgroundImage, backgroundVideo, titleLines = [], ctaText = "Join Now", ctaNote }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navbar */}
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-sm">
          <div className="flex-1 flex justify-between items-center">
            <img src={Your_Laundry_Room} alt="Your Laundry Room" width={250} />
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden block text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="fill-current" width="22" height="22" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          {/* Nav Links */}
          <div
            className={`${menuOpen ? "block" : "hidden"} md:flex md:items-center md:w-auto w-full`}
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-200 pt-4 md:pt-0">
                <li><Link className="md:p-4 py-3 block hover:text-[#417377] font-bold text-lg" to="/">Home</Link></li>
                <li><Link className="md:p-4 py-3 block hover:text-[#417377] font-bold text-lg" to="/about">About Us</Link></li>
                <li><Link className="md:p-4 py-3 block hover:text-[#417377] font-bold text-lg" to="/services">Services</Link></li>
                <li><Link className="md:p-4 py-3 block hover:text-[#417377] font-bold text-lg" to="/pricing">Pricing</Link></li>
                <li><Link className="md:p-4 py-3 block hover:text-[#417377] font-bold text-lg" to="/contact">Contact</Link></li>
                <li className="flex gap-2 mt-2 md:mt-0">
                  {/* <button className="px-4 py-2 rounded-md bg-[#00b4d8] text-white font-semibold hover:bg-green-600">
                    Call
                  </button> */}
                  <Link to="/pickup">
                    <button className=" text-lg px-4 py-2 rounded-md bg-[#417377] text-white font-semibold hover:bg-white hover:text-[#417377] hover:cursor-pointer">
                      Schedule Pickup
                    </button>
                  </Link>

                </li>
              </ul>
            </nav>
          </div>
        </header>

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
            <div className="w-full flex items-center justify-between mt-6 py-1 px-4 uppercase  text-white rounded-sm cursor-pointer">
              {/* <h3 className="text-white text-lg font-semibold">{ctaText}</h3> */}
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

export default Header;
