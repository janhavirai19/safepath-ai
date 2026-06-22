"use client";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#081018] text-white p-6">

      <h1 className="text-3xl font-bold text-emerald-400 mb-8">
        🛡️ SafePath AI Dashboard
      </h1>
      <div className="bg-[#0f172a] border border-gray-800 p-6 rounded-2xl mb-6">
        <h2 className="text-xl font-semibold text-emerald-400 mb-2">
          📍 Your Live Location
        </h2>
        {location ? (
          <p className="text-gray-300">
            Lat: {location.lat} <br />
            Lng: {location.lng}
          </p>
        ) : (
          <p className="text-gray-400">Fetching location...</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">
          <h3 className="text-emerald-400 text-lg font-semibold">
            📍 Live Tracking
          </h3>
          <p className="text-gray-400 mt-2">
            Monitoring your real-time movement
          </p>
        </div>
        <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">
          <h3 className="text-emerald-400 text-lg font-semibold">
            🚨 Emergency SOS
          </h3>
          <p className="text-gray-400 mt-2">
            One tap emergency alert system
          </p>
        </div>

        <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">
          <h3 className="text-emerald-400 text-lg font-semibold">
            🛡️ AI Safety Score
          </h3>
          <p className="text-gray-400 mt-2">
            Area safety analysis powered by AI
          </p>
        </div>

      </div>
    </div>
  );
}