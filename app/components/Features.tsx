"use client";
import React, { useState } from "react";
import {
  FaShieldAlt,
  FaBell,
  FaUsers,
  FaMapMarkedAlt,
  FaRobot,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  details: string;
  color: string;
  button: string;
};

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [safetyResult, setSafetyResult] = useState<any>(null);
  const [crowdResult, setCrowdResult] = useState<any>(null);
  const [sosResult, setSosResult] = useState<any>(null);
  const openFeature = (feature: Feature) => {
    setSelectedFeature(feature);
    setSafetyResult(null);
    setCrowdResult(null);
    setSosResult(null);
  };
  const handleSafetyScore = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch("http://127.0.0.1:8000/safety/score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lat: latitude, lng: longitude }),
          });
          const data = await res.json();
          setSafetyResult(data);
        } catch (err) {
          console.error(err);
          alert("Unable to fetch safety score.");
        }
      },
      () => alert("Please allow location access.")
    );
  };
  const handleCrowdPrediction = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch("http://127.0.0.1:8000/crowd/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lat: latitude, lng: longitude }),
          });
          if (!res.ok) throw new Error("Failed to fetch crowd data");
          const data = await res.json();
          setCrowdResult(data);
        } catch (err) {
          console.error(err);
          alert("Unable to fetch crowd prediction.");
        }
      },
      () => alert("Please allow location access.")
    );
  };
  const handleSOS = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch("http://127.0.0.1:8000/emergency/sos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lat: latitude, lng: longitude }),
          });
          const data = await res.json();
          setSosResult(data);
          const mapLink = `https://maps.google.com/?q=${latitude},${longitude}`;
          window.open(
            `https://wa.me/?text=${encodeURIComponent(
              `🚨 SOS ALERT!\nI need help.\nMy Location: ${mapLink}`
            )}`
          );
        } catch (err) {
          console.error(err);
          alert("Unable to trigger SOS.");
        }
      },
      () => alert("Please allow location access.")
    );
  };
  const handleAction = (title: string) => {
    switch (title) {
      case "AI Safety Score":
        handleSafetyScore();
        break;
      case "Crowd Prediction":
        handleCrowdPrediction();
        break;
      case "SOS Emergency":
        handleSOS();
        break;
      case "Emergency Contacts":
        window.open("tel:100");
        break;
      case "Smart Navigation":
        window.open("https://maps.google.com", "_blank");
        break;
      default:
        alert(`${title} feature will be integrated with backend APIs.`);
    }
  };
  const features: Feature[] = [
    {
      icon: <FaShieldAlt size={35} />,
      title: "AI Safety Score",
      desc: "Real-time AI analysis that calculates the safest route before you travel.",
      details:
        "Analyze traffic, weather, and nearby incidents to calculate a safety score before starting your journey.",
      color: "text-green-400",
      button: "Check Safety",
    },
    {
      icon: <FaBell size={35} />,
      title: "SOS Emergency",
      desc: "Send your live location and emergency alerts instantly to trusted contacts.",
      details:
        "Share your live location and contact emergency services in one tap.",
      color: "text-red-400",
      button: "Call SOS",
    },
    {
      icon: <FaUsers size={35} />,
      title: "Crowd Prediction",
      desc: "Avoid crowded and risky places using predictive analytics.",
      details: "AI predicts crowded locations and suggests safer alternatives.",
      color: "text-yellow-400",
      button: "View Crowd",
    },
    {
      icon: <FaMapMarkedAlt size={35} />,
      title: "Smart Navigation",
      desc: "AI suggests alternative safer routes in real-time.",
      details:
        "Find the safest and fastest route with live navigation updates.",
      color: "text-cyan-400",
      button: "Open Map",
    },
    {
      icon: <FaRobot size={35} />,
      title: "AI Assistant",
      desc: "Get instant safety suggestions and travel guidance.",
      details:
        "Chat with AI and receive safety recommendations and travel guidance.",
      color: "text-purple-400",
      button: "Start Chat",
    },
    {
      icon: <FaPhoneAlt size={35} />,
      title: "Emergency Contacts",
      desc: "Quick access to police, ambulance and trusted contacts.",
      details:
        "Instantly contact police, ambulance, and trusted family members.",
      color: "text-pink-400",
      button: "Call Now",
    },
  ];
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20"
    >
      <div className="text-center mb-16">
        <p className="text-green-400 uppercase tracking-[4px] text-sm mb-4">
          Features
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Smart Features For
          <span className="text-green-400"> Safer Journeys</span>
        </h2>
        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Powerful AI-driven tools that help you navigate safely, avoid risks,
          and stay connected during emergencies.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => openFeature(feature)}
            className="
              cursor-pointer group relative overflow-hidden
              rounded-3xl bg-[#08131f] border border-gray-800
              p-7 sm:p-8 transition-all duration-500
              hover:border-green-500/50 hover:-translate-y-3
            "
          >
            <div
              className="
                absolute -top-10 -right-10 w-28 h-28 rounded-full
                bg-green-500/10 blur-3xl group-hover:bg-green-500/20 transition
              "
            />
            <div className={`${feature.color} mb-6`}>{feature.icon}</div>
            <h3 className={`text-2xl font-bold ${feature.color}`}>
              {feature.title}
            </h3>
            <p className="mt-4 text-gray-400 leading-7">{feature.desc}</p>
            <div className="mt-8 text-green-400 opacity-0 group-hover:opacity-100 transition">
              Open Feature →
            </div>
          </div>
        ))}
      </div>
      {selectedFeature && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-5">
          <div className="bg-[#08131f] border border-gray-800 rounded-3xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute right-5 top-5 text-gray-400 hover:text-white"
            >
              <FaTimes size={22} />
            </button>
            <div className={`${selectedFeature.color} mb-5`}>
              {selectedFeature.icon}
            </div>
            <h2 className={`text-3xl font-bold ${selectedFeature.color}`}>
              {selectedFeature.title}
            </h2>
            <p className="text-gray-400 mt-5 leading-7">
              {selectedFeature.details}
            </p>
            {safetyResult && selectedFeature.title === "AI Safety Score" && (
              <div className="mt-6 rounded-2xl border border-green-500/40 bg-green-500/10 p-5">
                <h3 className="text-3xl font-bold text-green-400">
                  Safety Score: {safetyResult.score}
                </h3>
                <p className="text-gray-300 mt-2">
                  Status: {safetyResult.status}
                </p>
              </div>
            )}
            {crowdResult && selectedFeature.title === "Crowd Prediction" && (
              <div className="mt-6 rounded-2xl border border-yellow-500/40 bg-yellow-500/10 p-5">
                <h3 className="text-3xl font-bold text-yellow-400">
                  Crowd Level: {crowdResult.crowd}
                </h3>
                <p className="text-gray-300 mt-2">
                  Risk Score: {crowdResult.risk}%
                </p>
                <p className="text-gray-400 mt-2">{crowdResult.message}</p>
              </div>
            )}
            {sosResult && selectedFeature.title === "SOS Emergency" && (
              <div className="mt-6 rounded-2xl border border-red-500/40 bg-red-500/10 p-5">
                <h3 className="text-2xl font-bold text-red-400">
                  🚨 SOS Activated
                </h3>
                <p className="text-gray-300 mt-2">{sosResult.message}</p>
                <p className="text-gray-400 mt-2">
                  Location shared successfully.
                </p>
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => handleAction(selectedFeature.title)}
                className="
                  bg-green-500 text-black px-5 py-3
                  rounded-xl font-semibold hover:bg-green-400 transition
                "
              >
                {selectedFeature.button}
              </button>
              <button
                onClick={() => setSelectedFeature(null)}
                className="
                  border border-gray-700 px-5 py-3
                  rounded-xl hover:border-green-500 transition
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}