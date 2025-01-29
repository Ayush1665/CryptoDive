import { Button } from "./ui/Button";
import React from "react";
import learn1 from "../assets/learn1.png";
import learn2 from "../assets/learn2.png";
import learn3 from "../assets/learn3.png";
import learn4 from "../assets/learn4.png";

export default function TradingSection() {
  return (
    <section className="py-20 bg-[#000625]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-none rounded-full px-8 py-3 text-base">
            Learn Crypto
          </Button>
        </div>
        <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-7 mt-10">
          Let's Know How Crypto Works
        </h3>
        <p className="text-lg sm:text-xl leading-[28px] text-center text-white max-w-[798px] mx-auto mb-12">
          Discover the fundamentals of cryptocurrency, its revolutionary underlying technology, and how it empowers financial freedom in the digital era.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {[learn1, learn2, learn3, learn4].map((img, index) => (
            <div key={index} className="bg-[rgba(0,255,160,0.1)] rounded-2xl p-6 border border-transparent text-center max-w-[250px] mx-auto hover:border-[#00FFA0] transition duration-300 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 bg-[rgba(0,255,160,0.2)] rounded-xl flex items-center justify-center">
                <img src={img} alt={`Crypto Topic ${index + 1}`} className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold w-30 mx-0 text-[#00FFA0]">
                {["Learn Crypto", "Learn Earn", "How To Trade", "Build Portfolio"][index]}
              </h3>
            </div>
          ))}
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { title: "What is Cryptocurrency?", text: "Cryptocurrency is a digital or virtual currency secured by cryptography, making it nearly impossible to counterfeit or double-spend." },
            { title: "How Blockchain Works", text: "Blockchain is a decentralized ledger that records all transactions across a network of computers, ensuring transparency and security." },
            { title: "Benefits of Crypto Trading", text: "Crypto trading offers high liquidity, 24/7 market access, and the potential for significant returns compared to traditional investments." },
            { title: "Risks in Crypto Trading", text: "Crypto trading involves risks like market volatility, regulatory changes, and security threats. Always trade responsibly." },
            { title: "How to Secure Your Crypto", text: "Use hardware wallets, enable two-factor authentication, and avoid sharing private keys to keep your crypto safe." },
            { title: "Future of Cryptocurrency", text: "Cryptocurrency is reshaping finance, with potential applications in decentralized finance (DeFi), NFTs, and more." },
          ].map((item, index) => (
            <div key={index} className="bg-[rgba(0,255,160,0.1)] rounded-2xl p-6 border border-transparent text-center max-w-[370px] mx-auto">
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white text-sm mb-5">{item.text}</p>
              <div className="text-center">
                <Button className="bg-[rgba(0,255,160,0.04)] text-[#00FFA0] border rounded-full px-6 py-2 text-sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
