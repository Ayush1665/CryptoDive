import Hero from "../components/Hero";
import TradingSection from "../components/TradingSection";
// import LearnSection from "../components/LearnSection";
import FAQSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import React, { useState, useEffect } from "react";

export default function Home() {
  
  return (
    <main>
      <Hero />
      <TradingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
