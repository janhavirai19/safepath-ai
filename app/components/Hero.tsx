"use client";

import { useRouter } from "next/navigation";
import MapCard from "./MapCard";

export default function Hero() {
  const router = useRouter();

  const handleFeatures = () => {
    const featuresSection = document.getElementById("features");

    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="home"
      className="
        max-w-7xl
        mx-auto
        px-5 sm:px-8 lg:px-10
        py-16 lg:py-24
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12 lg:gap-20
        items-center
        overflow-hidden
      "
    >
      <div className="flex flex-col justify-center text-center lg:text-left animate-fade-up">

        <div
          className="
            w-fit
            mx-auto lg:mx-0
            rounded-full
            border border-green-500/30
            bg-green-500/10
            backdrop-blur-md
            px-5 py-2
            text-xs sm:text-sm
            text-green-400
            font-medium
            mb-7
            animate-pulse
          "
        >
          🛡️ AI Safety Navigation
        </div>
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
          "
        >
          Go Anywhere.
          <br />
          Stay <span className="text-green-400">Protected.</span>
        </h1>
        <p
          className="
            text-gray-400
            mt-6
            text-sm
            sm:text-base
            lg:text-lg
            leading-7
            max-w-lg
            mx-auto lg:mx-0
          "
        >
          AI-powered routes and live alerts for safer journeys.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8">
          <div className="hover:scale-110 transition duration-300">
            <h3 className="text-2xl font-bold text-green-400">50K+</h3>
            <p className="text-gray-400 text-sm">Users</p>
          </div>
          <div className="hover:scale-110 transition duration-300">
            <h3 className="text-2xl font-bold text-green-400">24/7</h3>
            <p className="text-gray-400 text-sm">Protection</p>
          </div>

          <div className="hover:scale-110 transition duration-300">
            <h3 className="text-2xl font-bold text-green-400">99%</h3>
            <p className="text-gray-400 text-sm">Accuracy</p>
          </div>
        </div>
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-10
            justify-center
            lg:justify-start
          "
        >
          <button
            onClick={() => router.push("/safety")}
            className="
              bg-green-500
              hover:bg-green-600
              hover:scale-105
              transition-all
              duration-300
              px-8 py-4
              rounded-2xl
              font-semibold
              shadow-lg
              shadow-green-500/30
              w-full
              sm:w-auto
            "
          >
             Get Started
          </button>
          <button
            onClick={handleFeatures}
            className="
              border
              border-gray-700
              hover:border-green-500
              hover:bg-green-500/10
              hover:scale-105
              transition-all
              duration-300
              px-8 py-4
              rounded-2xl
              font-semibold
              w-full
              sm:w-auto
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
    </section>
  );
}