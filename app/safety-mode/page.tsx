"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SafetyMode() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); 
  const activateSafety = () => {
    setLoading(true);
    setStatus(" Scanning your surroundings...");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        setStatus("Verifying Location...");
        try {
          localStorage.setItem(
            "userLocation",
            JSON.stringify({
              lat: latitude,
              lng: longitude,
            })
          );
          setStatus(" Starting AI Protection...");
          const res = await fetch(
            "http://127.0.0.1:8000/safety/analyze",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                latitude,
                longitude,
              }),
            }
          );
          if (!res.ok) {
            throw new Error("Backend request failed");
          }
          const data = await res.json();
          console.log("AI Response:", data);
          setStatus(" Protection Active");
          setTimeout(() => {
            router.push("/dashboard");
          }, 3000);
        } catch (error) {
          console.log("Backend Error:", error);
          setStatus(" Opening Dashboard...");

          setTimeout(() => {
            router.push("/dashboard");
          }, 2000);
        }
      },
      (error) => {
        console.log("Location Error:", error);
        alert("📍 Please allow location access.");
        setLoading(false);
        setStatus("");
      }
    );
  };
  return (
    <div className="min-h-screen bg-[#081018] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl rounded-[32px] border border-[#1f2937] bg-[#0f172a]/95 p-6 sm:p-8 md:p-12 text-center shadow-2xl">
        <div className="text-5xl sm:text-6xl md:text-7xl mb-6">
<div className="flex justify-start mb-6">
  <button
    onClick={() => {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push("/");
      }
    }}
    className="group inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-[#111827]/80 backdrop-blur-md px-5 py-3 text-sm sm:text-base font-medium text-white shadow-lg transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500 hover:shadow-emerald-500/30 hover:-translate-y-1 active:scale-95"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>

    <span>Back</span>
  </button>
</div>  🛡️
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-5 tracking-tight">
          Suraksha Mode
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-7 max-w-2xl mx-auto mb-10">
          Activate AI-powered protection for live location monitoring,
          emergency assistance and safer navigation.
        </p>
        {loading && (
          <div className="space-y-3 mb-8">
            <div className="animate-pulse text-emerald-400 text-lg sm:text-2xl font-semibold">
              {status}
            </div>
          </div>
        )}
        {!loading && (
          <button
            onClick={activateSafety}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20"
          >
            🔒 Activate Protection
          </button>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6 hover:border-emerald-500 transition-all duration-300">
            <div className="text-4xl">📍</div>
            <h3 className="text-emerald-400 font-semibold text-lg mt-4">
              Live Tracking
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Real-time location monitoring and safe route guidance.
            </p>
          </div>
          <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6 hover:border-emerald-500 transition-all duration-300">
            <div className="text-4xl">🚨</div>
            <h3 className="text-emerald-400 font-semibold text-lg mt-4">
              Emergency SOS
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Instant alerts to emergency contacts.
            </p>
          </div>
          <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6 hover:border-emerald-500 transition-all duration-300">
            <div className="text-4xl">🛡️</div>
            <h3 className="text-emerald-400 font-semibold text-lg mt-4">
              AI Monitoring
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Intelligent safety analysis and proactive protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}