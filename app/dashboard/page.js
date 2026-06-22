"use client";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [location, setLocation] = useState(null);
  const [score, setScore] = useState(0);

  const getLocationName = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      return data.display_name;
    } catch (err) {
      return "Unknown Location";
    }
  };
  const calculateSafetyScore = () => {
    const hour = new Date().getHours();
    let score = 85;
    if (hour >= 22 || hour <= 5) score -= 30;
    score -= Math.floor(Math.random() * 15);
    return Math.max(10, Math.min(100, score));
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const name = await getLocationName(lat, lng);
      setLocation({ lat, lng, name });
      setScore(calculateSafetyScore());
    });
  }, []);
  const emergencyContacts = [
    { name: "Mom", phone: "+91 9800000" },
    { name: "Dad", phone: "+91 9876500000" },
    { name: "Friend", phone: "+91 9999999999" },
  ];

  return (
    <div className="min-h-screen bg-[#081018] text-white px-4 sm:px-6 lg:px-10 py-6">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mb-6 sm:mb-8">
        🛡️ SafePath AI Dashboard
      </h1>
      <div className="bg-[#0f172a] border border-gray-800 p-4 sm:p-6 rounded-2xl mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-3">
          📍 Your Live Location
        </h2>

        {location ? (
          <div className="break-words">
            <p className="text-emerald-400 font-semibold text-sm sm:text-base">
              {location.name}
            </p>
            <p className="text-gray-300 mt-2 text-xs sm:text-sm leading-6">
              Lat: {location.lat} <br />
              Lng: {location.lng}
            </p>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">Fetching location...</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-[#111827] p-4 sm:p-5 rounded-2xl border border-gray-800">
          <h3 className="text-emerald-400 text-base sm:text-lg font-semibold">
            📍 Live Tracking
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Real-time movement monitoring active
          </p>
        </div>
        <div className="bg-[#111827] p-4 sm:p-5 rounded-2xl border border-gray-800">
          <h3 className="text-emerald-400 text-base sm:text-lg font-semibold">
            🚨 Emergency SOS
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            One-tap emergency alert system
          </p>
        </div>
        <div className="bg-[#111827] p-4 sm:p-5 rounded-2xl border border-gray-800">
          <h3 className="text-emerald-400 text-base sm:text-lg font-semibold">
            🛡️ AI Safety Score
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-white mt-2">
            {score}/100
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            {score > 70
              ? "🟢 Safe Area"
              : score > 40
              ? "🟡 Moderate Risk"
              : "🔴 High Risk"}
          </p>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 bg-[#0f172a] border border-gray-800 p-4 sm:p-6 rounded-2xl">
        <h2 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-4">
          🚨 Emergency Contacts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {emergencyContacts.map((c, i) => (
            <div
              key={i}
              className="bg-[#111827] p-3 sm:p-4 rounded-xl border border-gray-800"
            >
              <p className="text-white font-semibold text-sm sm:text-base">
                {c.name}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {c.phone}
              </p>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
}