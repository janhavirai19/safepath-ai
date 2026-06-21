"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SafetyMode() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const activateSafety = () => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      },
      () => {
        alert("📍 Please allow location access.");
        setLoading(false);
      }
    );
  };
  return (
    <div className="min-h-screen bg-[#081018] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl rounded-[32px] border border-[#1f2937] bg-[#0f172a]/95 p-6 sm:p-8 md:p-12 text-center shadow-2xl">
        <div className="text-5xl sm:text-6xl md:text-7xl mb-6">
          🛡️
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-5 tracking-tight">
          Suraksha Mode
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-7 max-w-2xl mx-auto mb-10">
          Activate AI-powered protection for live location monitoring,
          emergency assistance and safer navigation.
        </p>
        {!loading ? (
          <button
            onClick={activateSafety}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20"
          >
            🔒 Activate Protection
          </button>
        ) : (
          <div className="space-y-4">
            <div className="animate-pulse text-emerald-400 text-lg sm:text-2xl font-semibold">
              🔍 Scanning your surroundings...
            </div>

            <div className="animate-pulse text-gray-400 text-sm sm:text-base">
              📍 Verifying Location...
            </div>

            <div className="animate-pulse text-gray-400 text-sm sm:text-base">
              🛡️ Starting AI Protection...
            </div>
          </div>
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
              Send instant alerts to emergency contacts when needed.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6 hover:border-emerald-500 transition-all duration-300 sm:col-span-2 lg:col-span-1">
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

