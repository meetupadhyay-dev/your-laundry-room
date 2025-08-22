import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Your_Laundry, Your_Room } from "../../../assets/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0 ">
          <img src={Your_Laundry} alt=""  width={200}/>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-[#0077b6] text-[#0077b6] hover:text-white rounded-lg hover:bg-[#0077b6] hover:cursor-pointer">
            Schedule Pickup
          </button>
          <button className="px-4 py-2 bg-[#00b4d8] text-white rounded-lg hover:bg-[#0077b6] hover:cursor-pointer">
            Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                Schedule Pickup
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
