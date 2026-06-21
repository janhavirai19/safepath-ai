"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#081018] border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-emerald-400">
              SafePath AI
            </h2>
            <p className="text-gray-400 mt-4 leading-7">
              AI-powered safety platform providing secure navigation,
              emergency assistance, and intelligent monitoring for a
              safer journey.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#111827] border border-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#111827] border border-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#111827] border border-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#home" className="hover:text-emerald-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-emerald-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-emerald-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-emerald-400 transition">
                📍 Live Tracking
              </li>
              <li className="hover:text-emerald-400 transition">
                🚨 Emergency SOS
              </li>
              <li className="hover:text-emerald-400 transition">
                🛡️ AI Monitoring
              </li>
              <li className="hover:text-emerald-400 transition">
                🗺️ Safe Route Planning
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3 items-start">
                <FaEnvelope className="text-emerald-400 mt-1" />
                <p>support@safepathai.com</p>
              </div>

              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-emerald-400 mt-1" />
                <p>Mumbai, Maharashtra, India</p>
              </div>

            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © 2026 SafePath AI. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Built with ❤️ for safer journeys.
          </p>
        </div>
      </div>
    </footer>
  );
}