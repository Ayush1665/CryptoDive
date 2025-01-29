import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full top-0 z-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[83px] items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-[28px] font-extrabold text-[#00FFA0]">
              Crypto
              <span className="text-[#FFFFFF]">Dive</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            {["Home", "Trade", "Market", "Learn", "Support"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase() === "home" ? "/" : "/"}
                className="text-white hover:text-[#00FFA0] px-3 py-2 rounded-md text-xl font-medium transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button className="bg-[#00FFA0] text-black hover:bg-[#00FFA0]/90 font-semibold text-lg px-3 py-2 rounded-[40px] transition-all duration-300">
              Sign Up
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

     {isOpen && (
        <div className="md:hidden absolute top-[83px] left-0 w-full bg-gray-800 py-4 transition-all duration-300">
          <div className="flex flex-col items-center space-y-4">
            {["Home", "Trade", "Market", "Learn", "Support"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white hover:text-[#00FFA0] text-lg py-2 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button className="bg-[#00FFA0] text-black hover:bg-[#00FFA0]/90 font-semibold text-lg px-6 py-2 rounded-[40px] transition-all duration-300">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
