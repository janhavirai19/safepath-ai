"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Download", href: "#download" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav className="sticky top-4 z-50 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between rounded-3xl border border-gray-800 bg-[#07111f]/80 backdrop-blur-xl px-6 py-4 shadow-[0_0_30px_rgba(0,255,136,.08)]">
          <Link href="#home">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-400 cursor-pointer">
              SafePath AI
            </h1>
          </Link>
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-green-400 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/safety-mode" className="hidden md:block">
            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/20 hover:scale-105">
              Unlock Safety
            </button>
          </Link>
          <button
            className="lg:hidden text-3xl text-green-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden mt-3 rounded-2xl border border-gray-800 bg-[#07111f]/95 backdrop-blur-xl p-5 shadow-[0_0_30px_rgba(0,255,136,.08)]">
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-300 hover:text-green-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/safety-mode"
              onClick={() => setMenuOpen(false)}
            >
              <button className="w-full mt-6 bg-green-500 hover:bg-green-600 transition py-3 rounded-xl font-semibold">
                🔒 Suraksha Mode Chalu Karein
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}