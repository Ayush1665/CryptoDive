import Hero from "../components/Hero";
import TradingSection from "../components/TradingSection";
// import LearnSection from "../components/LearnSection";
import FAQSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDisclaimer(false);
    }, 3000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <main>
      
      {showDisclaimer && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.8)] z-50">
          <div className="bg-[rgba(255,255,255,0.95)] p-6 rounded-lg shadow-lg text-center w-[80%] max-w-md relative">
            <button
              onClick={() => setShowDisclaimer(false)}
              className="absolute top-4 right-4 text-xs font-bold"
              aria-label="Close"
            >
              ✖
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-2">Disclaimer</h3>
            <p className="text-base text-gray-600 font-semibold">
              This website is only designed for demonstration purposes.
            </p>
          </div>
        </div>
      )}

      <Hero />
      <TradingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
