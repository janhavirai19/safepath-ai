import Image from "next/image";
import { FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-green-500/20 blur-[130px] rounded-full" />
          <div className="relative overflow-hidden rounded-[36px] border border-green-500/20 shadow-[0_0_50px_rgba(0,255,136,.18)]">

            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
              alt="Confident woman standing with laptop"
              width={600}
              height={850}
              className="
                w-[300px]
                sm:w-[380px]
                md:w-[460px]
                lg:w-[520px]
                h-[650px]
                object-cover
                rounded-[36px]
                hover:scale-105
                transition duration-700
              "
            />
          </div>
          <div
            className="
              absolute
              bottom-6
              right-2
              sm:right-6
              bg-[#08131f]/90
              backdrop-blur-md
              border border-green-500/20
              rounded-2xl
              p-4
              shadow-lg
            "
          >
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-green-400 text-2xl" />
              <div>
                <p className="text-white font-semibold">Trusted by 50K+</p>
                <p className="text-gray-400 text-sm">Safe Travelers</p>
              </div>
            </div>
          </div>

        </div>
        <div className="text-center lg:text-left">
          <p className="text-green-400 uppercase tracking-[4px] mb-4">
            About Us
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Making Every Journey
            <span className="text-green-400"> Safer & Smarter</span>
          </h2>

          <p className="text-gray-400 mt-8 text-base sm:text-lg leading-8">
            SafePath AI is an intelligent safety navigation platform
            powered by AI and real-time data to help users choose
            the safest routes and stay protected in any situation.
          </p>

          <p className="text-gray-400 mt-6 text-base sm:text-lg leading-8">
            Whether you're traveling late night or in unfamiliar places,
            SafePath AI gives instant safety insights and smart alerts
            to keep you secure and confident.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            <div className="bg-[#08131f] border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition">
              <h3 className="text-3xl font-bold text-green-400">50K+</h3>
              <p className="text-gray-400 mt-2">Users</p>
            </div>

            <div className="bg-[#08131f] border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition">
              <h3 className="text-3xl font-bold text-green-400">95%</h3>
              <p className="text-gray-400 mt-2">Accuracy</p>
            </div>

            <div className="bg-[#08131f] border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition">
              <h3 className="text-3xl font-bold text-green-400">24/7</h3>
              <p className="text-gray-400 mt-2">Support</p>
            </div>
          </div>
          <button
            className="
              mt-10
              bg-green-500
              hover:bg-green-600
              shadow-[0_0_25px_rgba(0,255,136,.35)]
              transition
              px-8
              py-4
              rounded-2xl
              font-semibold
              flex
              items-center
              gap-3
              mx-auto lg:mx-0
            "
          >
            <FaMapMarkedAlt />
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}