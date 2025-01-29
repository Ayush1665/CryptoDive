import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Disable site for < 1024px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Router>
      <div className={`relative min-h-screen bg-[#101428] text-white overflow-hidden ${isMobile ? "blur-lg pointer-events-none" : ""}`}>
        {/* Decorative Elements */}
        <div className="absolute w-[133px] h-[133px] left-[351px] top-[313px] bg-[#5873FF] blur-[150px]" />
        <div className="absolute w-[125px] h-[125px] right-[321px] top-[688px] bg-[#5873FF] blur-[160px]" />
        <div className="absolute w-[133px] h-[133px] left-[-65px] top-[1061px] bg-[#5873FF] blur-[150px]" />
        <div className="absolute w-[133px] h-[133px] left-[-65px] top-[2961px] bg-[#5873FF] blur-[150px]" />
        <div className="absolute w-[133px] h-[133px] right-[7px] top-[3201px] bg-[#5873FF] blur-[150px]" />
        <div className="absolute w-[133px] h-[133px] left-[7px] top-[3661px] bg-[#5873FF] blur-[140px]" />
        <div className="absolute w-[133px] h-[133px] right-[-7px] top-[-35px] bg-[#5873FF] blur-[150px]" />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>

      {/* Mobile Restriction Notification */}
      {isMobile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 text-white text-center px-6">
          <div className="bg-[#101428] p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold">Site Unavailable on Mobile</h2>
            <p className="mt-2 text-white/80">Please visit this website on a desktop or a larger screen for the best experience.</p>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
