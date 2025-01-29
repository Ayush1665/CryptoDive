import { useState } from "react";
import { Button } from "./ui/Button";
import React from "react";


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is cryptocurrency?",
      answer:
        "Cryptocurrency is a digital or virtual currency that uses cryptography for security. It operates independently of a central bank and can be transferred directly between individuals.",
    },
    {
      question: "What is a blockchain?",
      answer:
        "A blockchain is a distributed ledger technology that records transactions in a secure, immutable, and verifiable way.",
    },
    {
      question: "What is a cryptocurrency wallet?",
      answer:
        "A cryptocurrency wallet is a digital tool for storing, sending and receiving cryptocurrencies.",
    },
    {
      question: "How do I start trading cryptocurrency?",
      answer:
        "To start trading cryptocurrency, you need to choose a cryptocurrency exchange, create an account, verify your identity, deposit funds, and then you can start buying and selling cryptocurrencies.",
    },
    {
      question: "Is cryptocurrency safe?",
      answer:
        "While cryptocurrency technology is generally considered secure, the safety of your investment depends on various factors including market volatility, regulatory changes, and how well you protect your digital assets.",
    },
    {
      question: "What are the most popular cryptocurrencies?",
      answer:
        "Popular cryptocurrencies include Bitcoin, Ethereum, Solana, and Litecoin.",
    },
  ];

  return (
    <section className="py-20 bg-[rgba(16, 20, 40, 1)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center -mt-6">
          <Button className="bg-[rgba(0,255,160,0.09)] text-[#00FFA0] border border-none rounded-full px-7 py-2 text-base">
            FAQs
          </Button>
        </div>
        <h2 className="text-center text-4xl sm:text-5xl font-medium text-white mb-6 mt-10">
          Frequently Asked Questions
        </h2>
        <p className="text-lg sm:text-xl leading-[28px] text-center text-white max-w-[518px] mx-auto mb-10">
          Follow design trends and continually update your skills by learning new tools and techniques.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="space-y-4 w-145 ">
            {faqs.slice(0, 3).map((faq, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-xl font-medium text-white">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-[#00FFA0]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-white opacity-75">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4 w-145">
            {faqs.slice(3).map((faq, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenIndex(openIndex === index + 3 ? null : index + 3)}
                >
                  <span className="text-xl font-medium text-white">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-[#00FFA0]">
                    {openIndex === index + 3 ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index + 3 && (
                  <p className="mt-4 text-white opacity-75">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
