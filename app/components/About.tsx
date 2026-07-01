"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaTimes,
  FaRoute,
  FaBell,
  FaEye,
  FaUsers,
} from "react-icons/fa";
const features = [
  { icon: <FaRoute />,  title: "Safe routing",    desc: "Avoids high-risk zones in real time" },
  { icon: <FaBell />,   title: "Smart alerts",    desc: "Instant notifications for nearby risks" },
  { icon: <FaEye />,    title: "Live monitoring", desc: "24/7 area safety tracking" },
  { icon: <FaUsers />,  title: "Community data",  desc: "Powered by 50K+ trusted users" },
];
const stats = [
  { value: "50K+", label: "Users" },
  { value: "95%",  label: "Accuracy" },
  { value: "24/7", label: "Support" },
];
export default function About() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setShowModal(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-14 sm:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="relative flex justify-center">
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-green-500/20 blur-[130px] rounded-full" />
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-green-500/20 shadow-[0_0_50px_rgba(0,255,136,.18)]">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
              alt="Confident woman standing with laptop"
              width={600}
              height={850}
              className="
                w-[260px] h-[380px]
                sm:w-[380px] sm:h-[520px]
                md:w-[420px] md:h-[580px]
                lg:w-[500px] lg:h-[650px]
                object-cover
                rounded-[28px] sm:rounded-[36px]
                hover:scale-105 transition duration-700
              "
            />
          </div>
          <div className="
            absolute bottom-4 right-2
            sm:bottom-6 sm:right-6
            bg-[#08131f]/90 backdrop-blur-md
            border border-green-500/20
            rounded-xl sm:rounded-2xl
            p-3 sm:p-4 shadow-lg
          ">
            <div className="flex items-center gap-2 sm:gap-3">
              <FaShieldAlt className="text-green-400 text-lg sm:text-2xl" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Trusted by 50K+</p>
                <p className="text-gray-400 text-xs sm:text-sm">Safe Travelers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-green-400 uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm mb-3 sm:mb-4">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Making Every Journey
            <span className="text-green-400"> Safer & Smarter</span>
          </h2>
          <p className="text-gray-400 mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
            SafePath AI is an intelligent safety navigation platform powered by
            AI and real-time data to help users choose the safest routes and
            stay protected in any situation.
          </p>
          <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
            Whether you're traveling late night or in unfamiliar places,
            SafePath AI gives instant safety insights and smart alerts to keep
            you secure and confident.
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-8 sm:mt-10">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#08131f] border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-green-500 transition"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">{value}</h3>
                <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="
              mt-8 sm:mt-10
              bg-green-500 hover:bg-green-600 active:scale-95
              shadow-[0_0_25px_rgba(0,255,136,.35)]
              transition-all duration-200
              px-6 sm:px-8 py-3 sm:py-4
              rounded-xl sm:rounded-2xl
              text-sm sm:text-base font-semibold
              flex items-center gap-3
              mx-auto lg:mx-0
            "
          >
            <FaMapMarkedAlt />
            Learn More
          </button>
        </div>
      </div>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative w-full sm:max-w-md
              bg-[#08131f]
              border border-green-500/20
              rounded-t-3xl sm:rounded-3xl
              p-5 sm:p-8
              shadow-[0_0_60px_rgba(0,255,136,.12)]
              max-h-[92dvh] overflow-y-auto
            "
          >
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
              className="
                absolute top-4 right-4
                w-8 h-8 rounded-full
                border border-white/10 bg-white/5
                text-gray-400 hover:text-white hover:bg-white/10
                flex items-center justify-center transition
              "
            >
              <FaTimes size={13} />
            </button>
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-5 sm:hidden" />
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 sm:mb-5">
              <FaShieldAlt size={10} />
              SafePath AI
            </div>
            <h2
              id="modal-title"
              className="text-white text-xl sm:text-2xl font-bold leading-snug mb-2 sm:mb-3"
            >
              Your Safety, Our{" "}
              <span className="text-green-400">Priority</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-6 sm:leading-7 mb-5 sm:mb-6">
              SafePath AI uses real-time data and intelligent algorithms to keep
              you protected — whether you're commuting late night or exploring
              unfamiliar territory.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-7">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white/[.03] border border-white/[.07] hover:border-green-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 transition"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-2 sm:mb-3 text-sm">
                    {f.icon}
                  </div>
                  <h4 className="text-white text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">
                    {f.title}
                  </h4>
                  <p className="text-gray-500 text-[10px] sm:text-xs leading-4 sm:leading-5">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="
                  flex-1 bg-green-500 hover:bg-green-600 active:scale-95
                  text-white font-semibold text-xs sm:text-sm
                  py-3 rounded-xl transition
                  shadow-[0_0_20px_rgba(0,255,136,.25)]
                "
              >
                Get started free
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="
                  px-4 sm:px-5 py-3 rounded-xl
                  text-xs sm:text-sm text-gray-400
                  border border-white/10
                  hover:bg-white/5 hover:text-white
                  active:scale-95 transition
                "
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}