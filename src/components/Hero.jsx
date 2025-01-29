import { Button } from "./ui/Button";
import React, { useState } from "react";
import Coin1 from "../assets/coin1.png";
import Coin2 from "../assets/coin2.png";
import Coin3 from "../assets/coin3.png";
import Coin4 from "../assets/coin4.png";
import Chart from "./Chart";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  SiBitcoinsv,
  SiDogecoin,
  SiEthereum,
  SiSolana,
  SiTether,
  SiBnbchain,
  SiCardano,
  SiPolkadot,
} from "react-icons/si";
import { LiaExchangeAltSolid } from "react-icons/lia";

export default function Hero() {
  const [rupee, setRupee] = useState("");
  const [bitcoin, setBitcoin] = useState("");
  const [selectedCryptoFrom, setSelectedCryptoFrom] = useState("INR"); 
  const [selectedCryptoTo, setSelectedCryptoTo] = useState("BTC"); 

  const cryptoRates = {
    BTC: 8883043, 
    ETH: 150000, 
    DOGE: 10,
    INR: 1, 
  };

  const cryptoToCryptoRates = {
    BTC: {
      ETH: 32.388,
      DOGE: 309155,
      INR: 8883043,
    },
    ETH: {
      BTC: 0.030918,
      DOGE: 9563,
      INR: 273776,
    },
    DOGE: {
      BTC: 0.00000323,
      ETH: 0.00010456,
      INR: 28.58,
    },
    INR: {
      BTC: 0.0000008,
      ETH: 0.00000365,
      DOGE: 0.03497018,
    },
  };

  const handleRupeeChange = (e) => {
    const value = e.target.value;
    setRupee(value);
    if (selectedCryptoFrom === "INR") {
      setBitcoin(
        value
          ? (value * cryptoToCryptoRates.INR[selectedCryptoTo]).toFixed(8)
          : ""
      );
    } else {
      setBitcoin(
        value ? (value / cryptoRates[selectedCryptoFrom]).toFixed(8) : ""
      );
    }
  };

  const handleBitcoinChange = (e) => {
    const value = e.target.value;
    setBitcoin(value);
    if (selectedCryptoFrom === "INR") {
      setRupee(
        value
          ? (value / cryptoToCryptoRates.INR[selectedCryptoTo]).toFixed(2)
          : ""
      );
    } else {
      setRupee(
        value ? (value * cryptoRates[selectedCryptoFrom]).toFixed(2) : ""
      );
    }
  };

  const handleCryptoFromChange = (e) => {
    const selected = e.target.value;
    setSelectedCryptoFrom(selected);
    
    setBitcoin(""); 
    setRupee(""); 
  };

  const handleCryptoToChange = (e) => {
    const selected = e.target.value;
    setSelectedCryptoTo(selected);
    setBitcoin(""); 
    setRupee(""); 
  };

  
  const filteredCryptoToOptions = Object.keys(cryptoRates).filter(
    (crypto) => crypto !== selectedCryptoFrom
  );

  
  const filteredCryptoFromOptions = Object.keys(cryptoRates).filter(
    (crypto) => crypto !== selectedCryptoTo
  );

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
    
      <div
        className="absolute w-[60px] h-[60px] left-[150px] top-[120px] bg-[rgba(254,231,21,0.1)] rounded-full bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${Coin1})`, backgroundSize: "65%" }}
      />
      <div
        className="absolute w-[55.62px] h-[55.62px] left-[238px] top-[394px] bg-[rgba(90,40,176,0.1)] rounded-full bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${Coin2})`, backgroundSize: "70%" }}
      />
      <div
        className="absolute w-[68.09px] h-[68.09px] right-[153px] top-[145px] bg-[rgba(204,49,61,0.1)] rounded-full bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${Coin3})`, backgroundSize: "60%" }}
      />
      <div
        className="absolute w-[57.67px] h-[57.67px] right-[237px] top-[428px] bg-[rgba(51,135,90,0.1)] rounded-full bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${Coin4})`, backgroundSize: "70%" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-7">
        <h1 className="text-[78px] font-bold leading-[100px] text-[#00FFA0] max-w-[686px] mx-auto">
          Secure & Intuitive Crypto Trading
        </h1>
        <p className="mt-10 text-xl leading-[34px] text-white max-w-[608px] mx-auto">
          Experience seamless trading with top-notch security, cutting-edge
          tools, and a user-friendly platform built for everyone.
        </p>
        <div className="mt-13 flex justify-center gap-8">
          <Button className="bg-[#00FFA0] text-black hover:bg-[#00FFA0]/90 font-semibold text-xl px-12 py-3 rounded-[60px]">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-2 border-[#00FFA0] text-[#00FFA0] hover:bg-[#00FFA0]/10 font-semibold text-2xl px-8 py-3 rounded-[60px]"
          >
            Start Trading
          </Button>
        </div>
      </div>

      <div className="absolute w-[984px] h-auto left-1/2 transform -translate-x-1/2 top-[643px] bg-[rgba(60,54,54,0.05)] rounded-2xl flex flex-col items-center justify-center space-y-6 py-8 px-6">
      
        <div className="flex space-x-6">
          <button className="text-[#00FFA0] px-4 py-2 rounded-lg border-b-2 border-[#00FFA0] font-semibold">
            Buy
          </button>
          <button className="text-white px-4 py-2 rounded-lg font-semibold hover:text-[#00FFA0] hover:border-b-2 hover:border-[#00FFA0]">
            Sell
          </button>
        </div>

        <div className="flex space-x-4 items-center">
          <div className="relative">
            <input
              type="number"
              value={rupee}
              onChange={handleRupeeChange}
              className="w-70 bg-[rgba(255,255,255,0.1)] text-[#ffffff] px-4 py-2 rounded-lg outline-none"
              placeholder="I Will Spend"
            />
     
            <select
              value={selectedCryptoFrom}
              onChange={handleCryptoFromChange}
              className="absolute right-1 top-1.5 bg-transparent text-white font-semibold outline-none"
            >
              {filteredCryptoFromOptions.map((crypto) => (
                <option key={crypto} value={crypto} className="text-black">
                  {crypto}
                </option>
              ))}
            </select>
          
            {selectedCryptoFrom === "BTC" && (
              <SiBitcoinsv className="absolute right-18 top-2 w-5 h-5 text-[rgba(254,231,23,0.9)]" />
            )}
            {selectedCryptoFrom === "ETH" && (
              <SiEthereum className="absolute right-18 top-2 w-5 h-5 text-[#627EEA]" />
            )}
            {selectedCryptoFrom === "DOGE" && (
              <SiDogecoin className="absolute right-18 top-2 w-5 h-5 text-[#C2A633]" />
            )}
            {selectedCryptoFrom === "INR" && (
              <FaIndianRupeeSign className="absolute right-18 top-2 w-5 h-5 text-[#00FFA0]" />
            )}
          </div>
          <LiaExchangeAltSolid className="text-[#ffffff] text-2xl" />

          <div className="relative">
            <input
              type="number"
              value={bitcoin}
              className="w-70 bg-[rgba(255,255,255,0.1)] text-[#ffffff] px-4 py-2 rounded-lg outline-none appearance-none"
              onChange={handleBitcoinChange}
              placeholder="I Will Receive"
            />
          
            <select
              value={selectedCryptoTo}
              onChange={handleCryptoToChange}
              className="absolute right-1 top-1.5 bg-transparent text-white font-semibold outline-none"
            >
              {filteredCryptoToOptions.map((crypto) => (
                <option key={crypto} value={crypto} className="text-black">
                  {crypto}
                </option>
              ))}
            </select>
            {selectedCryptoTo === "BTC" && (
              <SiBitcoinsv className="absolute right-18 top-2 w-5 h-5 text-[rgba(254,231,23,0.9)]" />
            )}
            {selectedCryptoTo === "ETH" && (
              <SiEthereum className="absolute right-18 top-2 w-5 h-5 text-[#627EEA]" />
            )}
            {selectedCryptoTo === "DOGE" && (
              <SiDogecoin className="absolute right-18 top-2 w-5 h-5 text-[#C2A633]" />
            )}
            {selectedCryptoTo === "INR" && (
              <FaIndianRupeeSign className="absolute right-18 top-2 w-5 h-5 text-[#00FFA0]" />
            )}
          </div>

          <Button className="bg-[#00FFA0] text-black hover:bg-[#00FFA0]/90 font-semibold text-sm px-6 py-3 rounded-[6px]">
            Buy Crypto
          </Button>
        </div>
      </div>
      <div className="text-center mt-69">
        <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-none rounded-full px-8 py-3 text-base">
          Trade Crypto
        </Button>
      </div>

      <h3 className="text-center text-5xl font-medium text-white mt-10 mb-10">
        Crypto Market Trade And Metrics
      </h3>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 mb-4">
          <div className="flex items-center space-x-6">
            <SiBitcoinsv className="w-10 h-10 text-[#F2A900]" />
            <div>
              <h4 className="text-xl font-semibold text-white">Bitcoin</h4>
              <p className="text-sm text-gray-400">INR</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm pl-7 text-[rgba(255,255,255,0.75)]">Change</p>
            <p className="text-sm pl-7 text-[#00C32B]">+17.06%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Price</p>
            <p className="text-sm  text-white">₹48,645</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Chart</p>
            <Chart />
          </div>
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-[#00FFA0] rounded-full px-8 py-3 text-base hover:bg-[#00FFA0]/20">
            Trade
          </Button>
        </div>

        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 mb-4">
          <div className="flex items-center space-x-6">
            <SiEthereum className="w-10 h-10 text-[#627EEA]" />
            <div>
              <h4 className="text-xl font-semibold text-white">Ethereum</h4>
              <p className="text-sm text-gray-400">INR</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Change</p>
            <p className="text-sm text-[#00C32B]">+43.04%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Price</p>
            <p className="text-sm text-white">₹36,675</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Chart</p>
            <Chart />
          </div>
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-[#00FFA0] rounded-full px-8 py-3 text-base hover:bg-[#00FFA0]/20">
            Trade
          </Button>
        </div>

        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 mb-4">
          <div className="flex items-center space-x-6">
            <SiSolana className="w-10 h-10 text-[#14F195]" />
            <div>
              <h4 className="text-xl font-semibold text-white">Solana</h4>
              <p className="text-sm text-gray-400">INR</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm pl-8 text-[rgba(255,255,255,0.75)]">Change</p>
            <p className="text-sm pl-8 text-[#FF0000]">-14.23%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Price</p>
            <p className="text-sm  text-white">₹1,456</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Chart</p>
            
            <Chart color="red" />
          </div>
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-[#00FFA0] rounded-full px-8 py-3 text-base hover:bg-[#00FFA0]/20">
            Trade
          </Button>
        </div>

        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 mb-4">
          <div className="flex items-center space-x-6">
            <SiDogecoin className="w-10 h-10 text-[#C2A633]" />
            <div>
              <h4 className="text-xl font-semibold text-white">Dogecoin</h4>
              <p className="text-sm text-gray-400">INR</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Change</p>
            <p className="text-sm text-[#00C32B]">+17.00%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Price</p>
            <p className="text-sm  text-white">₹41,645</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Chart</p>
           
            {/* <div className="w-20 h-10 bg-[rgba(255,255,255,0.1)] rounded-lg mt-2"> */}
            <Chart />
            {/* </div> */}
          </div>
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-[#00FFA0] rounded-full px-8 py-3 text-base hover:bg-[#00FFA0]/20">
            Trade
          </Button>
        </div>

        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 mb-4">
          <div className="flex items-center space-x-6">
            <SiTether className="w-10 h-10 text-[rgba(255,255,255,0.75)]" />
            <div>
              <h4 className="text-xl font-semibold text-white">Tether</h4>
              <p className="text-sm text-gray-400">INR</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm pl-8 text-[rgba(255,255,255,0.75)]">Change</p>
            <p className="text-sm pl-8 text-[#FF0000]">-1.23%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Price</p>
            <p className="text-sm  text-white">₹18,456</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Chart</p>
            <Chart color="red" />
          </div>
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-[#00FFA0] rounded-full px-8 py-3 text-base hover:bg-[#00FFA0]/20">
            Trade
          </Button>
        </div>

        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 mb-4">
          <div className="flex items-center space-x-6">
            <SiCardano className="w-10 h-10 text-[rgba(255,155,255,0.75)]" />
            <div>
              <h4 className="text-xl font-semibold text-white">Cardano</h4>
              <p className="text-sm text-gray-400">INR</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Change</p>
            <p className="text-sm text-[#00C32B]">+23.84%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Price</p>
            <p className="text-sm text-white">₹16,675</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Chart</p>
           
            <Chart />
          </div>
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-[#00FFA0] rounded-full px-8 py-3 text-base hover:bg-[#00FFA0]/20">
            Trade
          </Button>
        </div>

        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 mb-4">
          <div className="flex items-center space-x-6">
            <SiPolkadot className="w-10 h-10 text-[#14F195]" />
            <div>
              <h4 className="text-xl font-semibold text-white">Polkadot</h4>
              <p className="text-sm text-gray-400">INR</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm  text-[rgba(255,255,255,0.75)]">Change</p>
            <p className="text-sm  text-[#FF0000]">-34.23%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Price</p>
            <p className="text-sm  text-white">₹1,056</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Chart</p>
           
            <Chart color="red" />
          </div>
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-[#00FFA0] rounded-full px-8 py-3 text-base hover:bg-[#00FFA0]/20">
            Trade
          </Button>
        </div>

        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 mb-4">
          <div className="flex items-center space-x-6">
            <SiBnbchain className="w-10 h-10 text-[rgba(255,255,155,0.95)]" />
            <div>
              <h4 className="text-xl font-semibold text-white">BNB</h4>
              <p className="text-sm text-gray-400">INR</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm pl-12 text-[rgba(255,255,255,0.75)]">
              Change
            </p>
            <p className="text-sm pl-12 text-[#00C32B]">+3.04%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Price</p>
            <p className="text-sm text-white">₹16,741</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[rgba(255,255,255,0.75)]">Chart</p>
  
            <Chart />
          </div>
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-[#00FFA0] rounded-full px-8 py-3 text-base hover:bg-[#00FFA0]/20">
            Trade
          </Button>
        </div>
      </div>
    </section>
  );
}
