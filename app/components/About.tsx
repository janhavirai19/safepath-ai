import Image from "next/image";
import { FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="relative flex justify-center order-1 lg:order-none">
    
          <div className="absolute w-72 h-72 bg-green-500/20 blur-[120px] rounded-full" />

         
          <div className="relative overflow-hidden rounded-[32px] border border-green-500/20 shadow-[0_0_40px_rgba(0,255,136,.15)]">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
              alt="Woman using SafePath AI"
              width={600}
              height={700}
              className="
  w-[280px]
  sm:w-[350px]
  md:w-[420px]
  lg:w-[500px]
  h-auto
  object-cover
  rounded-[32px]
  hover:scale-105
  transition
  duration-700
"
            />
          </div>
          <div
            className="
              absolute
              bottom-6
              -right-2
              sm:right-5
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
                <p className="text-white font-semibold">
                  Trusted by 50K+
                </p>
                <p className="text-gray-400 text-sm">
                  Safe Travelers
                </p>
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
            <span className="text-green-400">
              {" "}Safer & Smarter
            </span>
          </h2>

          <p className="text-gray-400 mt-8 text-base sm:text-lg leading-8">
            SafePath AI is an intelligent safety navigation platform
            that uses Artificial Intelligence, crowd intelligence,
            and predictive analytics to recommend the safest routes
            and instantly respond during emergencies.
          </p>

          <p className="text-gray-400 mt-6 text-base sm:text-lg leading-8">
            Whether you're commuting late at night or exploring a
            new city, SafePath AI empowers you with real-time
            insights, emergency assistance, and proactive safety
            measures.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            <div className="bg-[#08131f] border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition">
              <h3 className="text-3xl font-bold text-green-400">
                50K+
              </h3>
              <p className="text-gray-400 mt-2">Users</p>
            </div>

            <div className="bg-[#08131f] border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition">
              <h3 className="text-3xl font-bold text-green-400">
                95%
              </h3>
              <p className="text-gray-400 mt-2">Accuracy</p>
            </div>

            <div className="bg-[#08131f] border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition">
              <h3 className="text-3xl font-bold text-green-400">
                24/7
              </h3>
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