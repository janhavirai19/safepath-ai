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
      return data.display_name || "Unknown Location";
    } catch (err) {
      console.log(err);
      return "Unknown Location";
    }
  };
  const calculateSafetyScore = () => {
    const hour = new Date().getHours();
    let score = 85;
    if (hour >= 22 || hour <= 5) {
      score -= 30;
    }
    score -= Math.floor(Math.random() * 15);
    return Math.max(10, Math.min(100, score));
  };
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const savedLocation = localStorage.getItem("userLocation");
        if (savedLocation) {
          const { lat, lng } = JSON.parse(savedLocation);
          const name = await getLocationName(lat, lng);
          setLocation({
            lat,
            lng,
            name,
          });
          setScore(calculateSafetyScore());
          return;
        }
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const name = await getLocationName(lat, lng);
            setLocation({
              lat,
              lng,
              name,
            });
            setScore(calculateSafetyScore());
          },
          (err) => {
            console.log("Location Error:", err);
          }
        );
      } catch (err) {
        console.log("Dashboard Error:", err);
      }
    };
    fetchLocation();
  }, []);
  const emergencyContacts = [
    { name: "Mom", phone: "+91 9800000000" },
    { name: "Dad", phone: "+91 9876500000" },
    { name: "Friend", phone: "+91 9999999999" },
  ];
 return (
  <div className="min-h-screen bg-gradient-to-br from-[#071018] via-[#0f172a] to-[#081018] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400">
            🛡️ SafePath AI Dashboard
          </h1>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            AI-powered real-time safety monitoring and emergency protection.
          </p>
        </div>
        <div className="bg-[#111827]/80 backdrop-blur-lg border border-emerald-500/20 px-6 py-4 rounded-3xl">
          <p className="text-gray-400 text-sm">Current Status</p>
          <h3 className="text-xl font-semibold mt-1">
            {score > 70
              ? "🟢 Safe Area"
              : score > 40
              ? "🟡 Moderate Risk"
              : "🔴 High Risk"}
          </h3>
        </div>
      </div>
      <div className="bg-[#0f172a]/80 backdrop-blur-lg border border-gray-800 p-6 rounded-3xl shadow-xl mb-8">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-5">
          📍 Your Live Location
        </h2>
        {location ? (
          <>
            <p className="text-lg font-semibold break-words text-white">
              {location.name}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              <div className="bg-[#111827] p-4 rounded-2xl">
                <p className="text-gray-400 text-sm">Latitude</p>
                <p className="text-emerald-400 font-medium">
                  {location.lat}
                </p>
              </div>
              <div className="bg-[#111827] p-4 rounded-2xl">
                <p className="text-gray-400 text-sm">Longitude</p>
                <p className="text-emerald-400 font-medium">
                  {location.lng}
                </p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-400 animate-pulse">
            Fetching your location...
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="bg-[#111827]/80 backdrop-blur-lg p-6 rounded-3xl border border-gray-800 hover:border-emerald-500 transition duration-300 hover:-translate-y-2">
          <div className="text-5xl mb-5">📍</div>

          <h3 className="text-xl font-semibold text-emerald-400">
            Live Tracking
          </h3>
          <p className="text-gray-400 mt-3">
            Real-time movement monitoring and location tracking.
          </p>
        </div>
        <div className="bg-[#111827]/80 backdrop-blur-lg p-6 rounded-3xl border border-gray-800 hover:border-emerald-500 transition duration-300 hover:-translate-y-2">
          <div className="text-5xl mb-5">🚨</div>
          <h3 className="text-xl font-semibold text-emerald-400">
            Emergency SOS
          </h3>
          <p className="text-gray-400 mt-3">
            Instantly notify trusted contacts during emergencies.
          </p>
        </div>
        <div className="bg-[#111827]/80 backdrop-blur-lg p-6 rounded-3xl border border-gray-800 hover:border-emerald-500 transition duration-300 hover:-translate-y-2">
          <div className="text-5xl mb-5">🛡️</div>
          <h3 className="text-xl font-semibold text-emerald-400">
            AI Safety Score
          </h3>
          <p className="text-5xl font-bold mt-5">
            {score}
            <span className="text-2xl text-gray-400">/100</span>
          </p>

          <div className="w-full bg-gray-700 rounded-full h-3 mt-6">
            <div
              className="bg-emerald-500 h-3 rounded-full transition-all duration-700"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 bg-[#0f172a]/80 backdrop-blur-lg border border-gray-800 p-6 rounded-3xl shadow-xl">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          🚨 Emergency Contacts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {emergencyContacts.map((c, i) => (
            <div
              key={i}
              className="bg-[#111827] p-5 rounded-2xl border border-gray-800 hover:border-emerald-500 transition duration-300"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-lg">
                    {c.name}
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    {c.phone}
                  </p>
                </div>

                <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-xl text-sm font-medium transition">
                  Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);
} 