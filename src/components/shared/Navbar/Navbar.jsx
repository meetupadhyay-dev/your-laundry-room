import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Your_Laundry } from "../../../assets/logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-sm relative z-20">
      <div className="flex-1 flex justify-between items-center">
        <img src={Your_Laundry} alt="Your Laundry Room" width={250} />
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
            <li><Link className="md:p-4 py-3 block hover:text-[#00b4d8] font-bold text-lg" to="/">Home</Link></li>
            <li><Link className="md:p-4 py-3 block hover:text-[#00b4d8] font-bold text-lg" to="/about">About Us</Link></li>
            <li><Link className="md:p-4 py-3 block hover:text-[#00b4d8] font-bold text-lg" to="/services">Services</Link></li>
            <li><Link className="md:p-4 py-3 block hover:text-[#00b4d8] font-bold text-lg" to="/pricing">Pricing</Link></li>
            <li><Link className="md:p-4 py-3 block hover:text-[#00b4d8] font-bold text-lg" to="/contact">Contact</Link></li>
            <li className="flex gap-2 mt-2 md:mt-0">
              <button className="text-lg px-4 py-2 rounded-md bg-[#00b4d8] text-white font-semibold hover:bg-white hover:text-[#00b4d8] hover:cursor-pointer">
                Schedule Pickup
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
