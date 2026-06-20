import {
  FaShieldAlt,
  FaBell,
  FaUsers,
  FaMapMarkedAlt,
  FaRobot,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaShieldAlt size={35} />,
      title: "AI Safety Score",
      desc: "Real-time AI analysis that calculates the safest route before you travel.",
      color: "text-green-400",
    },
    {
      icon: <FaBell size={35} />,
      title: "SOS Emergency",
      desc: "Send your live location and emergency alerts instantly to trusted contacts.",
      color: "text-red-400",
    },
    {
      icon: <FaUsers size={35} />,
      title: "Crowd Prediction",
      desc: "Avoid crowded and risky places using predictive analytics.",
      color: "text-yellow-400",
    },
    {
      icon: <FaMapMarkedAlt size={35} />,
      title: "Smart Navigation",
      desc: "AI suggests alternative safer routes in real-time.",
      color: "text-cyan-400",
    },
    {
      icon: <FaRobot size={35} />,
      title: "AI Assistant",
      desc: "Get instant safety suggestions and travel guidance.",
      color: "text-purple-400",
    },
    {
      icon: <FaPhoneAlt size={35} />,
      title: "Emergency Contacts",
      desc: "Quick access to police, ambulance and trusted contacts.",
      color: "text-pink-400",
    },
  ];

  return (
    <section
      id="features"
      className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-8
        lg:px-10
        py-20
      "
    >
      <div className="text-center mb-16">
        <p className="text-green-400 uppercase tracking-[4px] text-sm mb-4">
          Features
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Smart Features For
          <span className="text-green-400">
            {" "}Safer Journeys
          </span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Powerful AI-driven tools that help you navigate
          safely, avoid risks, and stay connected during
          emergencies.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          lg:gap-8
        "
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-[#08131f]
              border
              border-gray-800
              p-7
              sm:p-8
              transition-all
              duration-500
              hover:border-green-500/50
              hover:-translate-y-2
            "
          >
            <div
              className="
                absolute
                -top-10
                -right-10
                w-28
                h-28
                rounded-full
                bg-green-500/10
                blur-3xl
                group-hover:bg-green-500/20
              "
            />

            <div className={`${feature.color} mb-6`}>
              {feature.icon}
            </div>

            <h3
              className={`text-2xl font-bold ${feature.color}`}
            >
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              {feature.desc}
            </p>

            <div
              className="
                mt-8
                text-green-400
                opacity-0
                group-hover:opacity-100
                transition
              "
            >
              Learn More →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}