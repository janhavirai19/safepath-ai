"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MapCard from "./MapCard";
export default function Hero() {
  const router = useRouter();
  const [toast, setToast] = useState(false);
  const handleGetStarted = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
     router.push("safety-mode")
    }, 3000);
  };
  const handleFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="
        max-w-7xl mx-auto
        px-5 sm:px-8 lg:px-10
        py-16 lg:py-24
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-20
        items-center
        overflow-hidden
      "
    >
      <div className="flex flex-col justify-center text-center lg:text-left animate-fade-up">

        <div className="
          w-fit mx-auto lg:mx-0
          rounded-full border border-green-500/30 bg-green-500/10
          backdrop-blur-md px-5 py-2
          text-xs sm:text-sm text-green-400 font-medium
          mb-7 animate-pulse
        ">
          🛡️ AI Safety Navigation
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Go Anywhere.
          <br />
          Stay <span className="text-green-400">Protected.</span>
        </h1>
        <p className="text-gray-400 mt-6 text-sm sm:text-base lg:text-lg leading-7 max-w-lg mx-auto lg:mx-0">
          AI-powered routes and live alerts for safer journeys.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8">
          {[
            { value: "50K+", label: "Users" },
            { value: "24/7", label: "Protection" },
            { value: "99%",  label: "Accuracy" },
          ].map(({ value, label }) => (
            <div key={label} className="hover:scale-110 transition duration-300">
              <h3 className="text-2xl font-bold text-green-400">{value}</h3>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
          <button
            onClick={handleGetStarted}
            className="
              bg-green-500 hover:bg-green-600
              hover:scale-105 active:scale-95
              transition-all duration-300
              px-8 py-4 rounded-2xl font-semibold
              shadow-lg shadow-green-500/30
              w-full sm:w-auto
            "
          >
            Get Started
          </button>
          <button
            onClick={handleFeatures}
            className="
              border border-gray-700
              hover:border-green-500 hover:bg-green-500/10
              hover:scale-105 active:scale-95
              transition-all duration-300
              px-8 py-4 rounded-2xl font-semibold
              w-full sm:w-auto
            "
          >
            Features
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center animate-float">
        <div className="w-full max-w-2xl">
          <MapCard />
        </div>
      </div>
      <div
        className={`
          fixed bottom-6 left-1/2 -translate-x-1/2 z-50
          flex items-center gap-3
          bg-[#08131f] border border-green-500/30
          rounded-2xl px-5 py-4
          shadow-[0_0_30px_rgba(0,255,136,.15)]
          transition-all duration-500
          ${toast
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"}
        `}
        role="status"
        aria-live="polite"
      >
        <div className="absolute bottom-0 left-0 h-[3px] bg-green-500/20 w-full rounded-b-2xl overflow-hidden">
          <div
            className={`h-full bg-green-400 rounded-b-2xl transition-all ease-linear ${toast ? "w-0 duration-[3000ms]" : "w-full duration-0"}`}
          />
        </div>
        <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center text-base shrink-0">
          ✅
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Welcome to SafePath AI!</p>
          <p className="text-gray-400 text-xs mt-0.5">Redirecting to your dashboard...</p>
        </div>
        <div className="ml-2 w-4 h-4 rounded-full border-2 border-green-500/30 border-t-green-400 animate-spin shrink-0" />
      </div>
    </section>
  );
}