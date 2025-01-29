import { Link } from "react-router-dom";
import React from "react";
import apple from "../assets/apple.png";
import play from "../assets/playstore.png";
import { GrAmazon } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaMicrosoft } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#000625]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-4">
              {["About Us", "Feature", "Career", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white opacity-75 text-base hover:text-[#00FFA0]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-white mb-4">Help</h3>
            <ul className="space-y-4">
              {["Customer Support", "Terms", "Privacy", "FAQs"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-white text-base opacity-75 hover:text-[#00FFA0]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-white mb-4">Others</h3>
            <ul className="space-y-4">
              {["Start Trading", "Earn Free Crypto", "Crypto Wallet", "Payment Option"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-white opacity-75 text-base hover:text-[#00FFA0]">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-medium text-white mb-6">Download App</h3>
            <div className="space-y-4">
              <button className="flex items-center bg-white hover:bg-gray-200 w-full sm:w-[198px] h-[62px] rounded-lg px-4">
                <img src={play} alt="Google Play" className="w-10 h-10" />
                <div className="ml-4">
                  <p className="text-sm text-black">Get it on</p>
                  <p className="text-lg text-black font-bold leading-4">Google Play</p>
                </div>
              </button>
              <button className="flex items-center bg-white hover:bg-gray-200 w-full sm:w-[198px] h-[62px] rounded-lg px-4">
                <img src={apple} alt="App Store" className="w-10 h-10" />
                <div className="ml-4">
                  <p className="text-sm text-black">Get it on</p>
                  <p className="text-lg text-black font-bold leading-4">App Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          
          <p className="text-white opacity-75 text-base mb-4 sm:mb-0">
            © {new Date().getFullYear()} CryptoDive. All rights reserved.
          </p>

         
          <div className="flex space-x-6">
            <GrAmazon className="w-6 h-6 text-white hover:text-gray-400 cursor-pointer" />
            <FaMicrosoft className="w-6 h-6 text-white hover:text-gray-400 cursor-pointer" />
            <BsTwitterX className="w-6 h-6 text-white hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
