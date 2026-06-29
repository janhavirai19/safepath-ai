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
  FaEraser,
  FaPhone,
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
  const [showPlaces, setShowPlaces] = useState(false);
  const [guidance, setGuidance] = useState("");
  const openFeature = (feature: Feature) => {
    setSelectedFeature(feature);
    setSafetyResult(null);
    setCrowdResult(null);
    setSosResult(null);
    setShowPlaces(false);
    setGuidance("");
  };
  const closeModal = () => {
    setSelectedFeature(null);
    setShowPlaces(false);
    setGuidance("");
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
              ` SOS ALERT!\nI need help.\nMy Location: ${mapLink}`
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
  const getEmergencyGuidance = (type: string) => {
    switch (type) {
      case "danger":
        setGuidance(
          ` Stay calm and do not panic.\n Share your live location immediately with someone you trust.\n Move towards a crowded or well-lit place.\n Call emergency services (112) or a trusted contact right away.`
        );
        break;
      case "followed":
        setGuidance(
          ` Do not go home directly — you may lead them to your address.\n Enter a nearby shop, restaurant, or any public place.\n Call someone you trust and stay on the line.\n Use the SOS button if the situation escalates.`
        );
        break;
      case "cab":
        setGuidance(
          `Share your trip details and live location with a trusted contact.\nKeep your GPS on throughout the journey.\n Sit near the door and stay alert — avoid sleeping.\n If you feel unsafe, ask to stop at a public place and exit.`
        );
        break;
      case "night":
        setGuidance(
          `Stick to well-lit, busy roads and avoid shortcuts.\nAvoid isolated areas, lanes, or parks.\n Keep your phone charged and volume on.\n Share your live location with family or a trusted friend before you leave.`
        );
        break;
      default:
        setGuidance("");
    }
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
      case "Nearby Safe Places":
        setShowPlaces(true);
        break;
      case "AI Assistant":
        window.open("tel:112");
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
      title: "Nearby Safe Places",
      desc: "Find nearby police stations, hospitals, petrol pumps and pharmacies instantly.",
      details:
        "Locate essential safe places around you during emergencies with one tap access.",
      color: "text-cyan-400",
      button: "Find Places",
    },
    {
      icon: <FaRobot size={35} />,
      title: "AI Assistant",
      desc: "Get instant safety suggestions and travel guidance.",
      details:
        "Select a situation below and get instant step-by-step safety guidance powered by AI.",
      color: "text-purple-400",
      button: "Call 112",
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
            className="cursor-pointer group relative overflow-hidden rounded-3xl bg-[#08131f] border border-gray-800 p-7 sm:p-8 transition-all duration-500 hover:border-green-500/50 hover:-translate-y-3"
          ><div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-green-500/10 blur-3xl group-hover:bg-green-500/20 transition" />
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
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#08131f] border border-gray-800 rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-5 sm:p-7 relative">
            <button
              onClick={closeModal}
              className="absolute right-5 top-5 text-gray-400 hover:text-white transition"
            >
              <FaTimes size={22} />
            </button>
            <div className={`${selectedFeature.color} mb-5`}>
              {selectedFeature.icon}
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold ${selectedFeature.color}`}>
              {selectedFeature.title}
            </h2>
            <p className="text-gray-400 mt-4 leading-7">
              {selectedFeature.details}
            </p>
            {safetyResult && selectedFeature.title === "AI Safety Score" && (
              <div className="mt-6 rounded-2xl border border-green-500/40 bg-green-500/10 p-5">
                <h3 className="text-3xl font-bold text-green-400">
                  Safety Score: {safetyResult.score}
                </h3>
                <p className="text-gray-300 mt-2">Status: {safetyResult.status}</p>
              </div>
            )}
            {crowdResult && selectedFeature.title === "Crowd Prediction" && (
              <div className="mt-6 rounded-2xl border border-yellow-500/40 bg-yellow-500/10 p-5">
                <h3 className="text-3xl font-bold text-yellow-400">
                  Crowd Level: {crowdResult.crowd}
                </h3>
                <p className="text-gray-300 mt-2">Risk Score: {crowdResult.risk}%</p>
                <p className="text-gray-400 mt-2">{crowdResult.message}</p>
              </div>
            )}
            {sosResult && selectedFeature.title === "SOS Emergency" && (
              <div className="mt-6 rounded-2xl border border-red-500/40 bg-red-500/10 p-5">
                <h3 className="text-2xl font-bold text-red-400"> SOS Activated</h3>
                <p className="text-gray-300 mt-2">{sosResult.message}</p>
                <p className="text-gray-400 mt-2">Location shared successfully.</p>
              </div>
            )}
            {showPlaces && selectedFeature.title === "Nearby Safe Places" && (
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: " Police Stations", query: "police+station+near+me", color: "blue" },
                  { label: " Hospitals", query: "hospital+near+me", color: "red" },
                  { label: " Petrol Pumps", query: "petrol+pump+near+me", color: "yellow" },
                  { label: " Pharmacies", query: "pharmacy+near+me", color: "green" },
                ].map(({ label, query, color }) => (
                  <button
                    key={query}
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/${query}`,
                        "_blank"
                      )
                    }
                    className={`bg-${color}-500/20 border border-${color}-500 p-4 rounded-xl text-sm font-medium hover:bg-${color}-500/30 transition`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
            {selectedFeature.title === "AI Assistant" && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                   What's your situation?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { type: "danger", label: "I'm in danger", color: "red" },
                    { type: "followed", label: " Someone is following me", color: "yellow" },
                    { type: "cab", label: "Unsafe cab ride", color: "blue" },
                    { type: "night", label: " Traveling at night", color: "purple" },
                  ].map(({ type, label, color }) => (
                    <button
                      key={type}
                      onClick={() => getEmergencyGuidance(type)}
                      className={`bg-${color}-500/20 border border-${color}-500 p-4 rounded-xl text-sm font-medium text-left hover:bg-${color}-500/30 transition`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {guidance && (
                  <div className="mt-5 bg-[#101b29] border border-purple-500/30 rounded-2xl p-5">
                    <p className="text-purple-300 font-semibold mb-3 text-sm uppercase tracking-wider">
                      Safety Guidance
                    </p>
                    <div className="space-y-2">
                      {guidance.split("\n").filter(Boolean).map((line, i) => (
                        <p key={i} className="text-gray-300 text-sm leading-6">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {guidance && (
                  <button
                    onClick={() => setGuidance("")}
                    className="mt-3 flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-xl transition"
                  >
                    <FaEraser size={13} /> Clear Guidance
                  </button>
                )}
                <div className="mt-5 flex items-center justify-between bg-red-500/10 border border-red-500/40 rounded-2xl px-5 py-4">
                  <div>
                    <p className="text-red-400 font-semibold text-sm">Immediate Danger?</p>
                    <p className="text-gray-400 text-xs mt-0.5">Call national emergency now</p>
                  </div>
                  <button
                    onClick={() => window.open("tel:112")}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white font-bold px-4 py-2 rounded-xl transition text-sm"
                  >
                    <FaPhone size={13} /> Call 112
                  </button>
                </div>
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {selectedFeature.title !== "AI Assistant" && (
                <button
                  onClick={() => handleAction(selectedFeature.title)}
                  className="bg-green-500 text-black px-5 py-3 rounded-xl font-semibold hover:bg-green-400 transition"
                >
                  {selectedFeature.button}
                </button>
              )}
              {selectedFeature.title === "AI Assistant" && (
                <button
                  onClick={() => window.open("tel:112")}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white px-5 py-3 rounded-xl font-semibold transition"
                >
                  <FaPhone size={14} /> {selectedFeature.button}
                </button>
              )}
              <button
                onClick={closeModal}
                className="border border-gray-700 px-5 py-3 rounded-xl hover:border-green-500 transition"
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