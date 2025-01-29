import { Button } from "./ui/Button";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function ContactSection() {
  return (
    <section className="bg-[rgba(255,255,255,0.05)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left relative -mt-40">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get In On The Crypto Action
            </h2>
            <p className="text-lg text-white/80">
            To help us better understand your needs, please provide your name and email. Our team will get back to you as soon as possible with all the information you need. We’re here to support your journey into the exciting world of crypto. By filling out this form, you'll be one step closer to exploring new opportunities. Don’t hesitate to reach out with any questions, whether it's about crypto trading, account support, or just general inquiries. Let’s start this journey together, and we’ll be here every step of the way to guide you.

            This way, you convey warmth and helpfulness while keeping the content concise and engaging.
            </p>
          </div>

          <div className="lg:w-3/8 bg-white/10 p-8 rounded-2xl shadow-lg space-y-6">
          <div className="space-y-2">
              <p className="text-lg font-medium text-white">Enter Your Name</p>
              <div className="relative">
                <input
                  type="email"
                  className="w-full h-12 bg-transparent text-white border border-white/30 rounded-lg px-12 placeholder-white/50 outline-none focus:ring-2 focus:ring-[#00FFA0] transition"
                  placeholder="Enter Your Name"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50">
                🪪
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium text-white">Email Address</p>
              <div className="relative">
                <input
                  type="email"
                  className="w-full h-12 bg-transparent text-white border border-white/30 rounded-lg px-12 placeholder-white/50 outline-none focus:ring-2 focus:ring-[#00FFA0] transition"
                  placeholder="Enter Email Address"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50">
                  📧
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium text-white">Your Topic</p>
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-12 bg-transparent text-white border border-white/30 rounded-lg px-12 placeholder-white/50 outline-none focus:ring-2 focus:ring-[#00FFA0] transition"
                  placeholder="Enter Your Topic"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50">
                  🖊️
                </span>
              </div>
            </div>
            <Button className="w-full bg-[#00FFA0] text-black font-semibold text-lg py-3 rounded-full hover:bg-[#00FFA0]/90 shadow-md">
              Send Message
            </Button>
          </div>
        </div>

        
        <div className="relative bottom-10 left-5">
  <div className="flex flex-row space-x-10">
    <FaFacebook className="h-10 w-10 text-[rgba(255,255,255,0.9)] hover:text-[#00FFA0] transition-transform transform hover:scale-110 cursor-pointer" />
    <FaInstagram className="h-10 w-10 text-[rgba(255,255,255,0.9)] hover:text-[#00FFA0] transition-transform transform hover:scale-110 cursor-pointer" />
    <IoIosSend className="h-10 w-10 text-[rgba(255,255,255,0.9)] hover:text-[#00FFA0] transition-transform transform hover:scale-110 cursor-pointer" />
  </div>
</div>

      </div>
    </section>
  );
}
