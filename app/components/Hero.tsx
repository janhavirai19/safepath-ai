import MapCard from "./MapCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        max-w-7xl
        mx-auto
        px-5 sm:px-8 lg:px-10
        py-16 lg:py-20
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12 lg:gap-16
        items-center
      "
    >

      <div className="flex flex-col justify-center text-center lg:text-left">

        <div
          className="
            w-fit
            mx-auto lg:mx-0
            rounded-full
            border border-green-500/30
            bg-green-500/10
            px-4 py-2
            text-xs sm:text-sm
            text-green-400
            mb-6 lg:mb-8
          "
        >
          🛡️ AI Powered Safety Navigation
        </div>

        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
          "
        >
          Your <span className="text-green-400">Safest</span>
          <br />
          Route,
          <br />
          Every Time
        </h1>

        <p
          className="
            text-gray-400
            mt-6
            text-sm
            sm:text-base
            lg:text-lg
            max-w-xl
            mx-auto lg:mx-0
          "
        >
          SafePath AI uses advanced AI, real-time data, and crowd
          intelligence to find the safest routes for you and your
          loved ones. Travel smart. Travel safe.
        </p>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-8 lg:mt-10
            justify-center
            lg:justify-start
          "
        >
          <button
            className="
              bg-green-500
              hover:bg-green-600
              transition
              px-8 py-4
              rounded-2xl
              font-semibold
              w-full sm:w-auto
            "
          >
            Get Started
          </button>

          <button
            className="
              border
              border-gray-700
              hover:border-green-500
              transition
              px-8 py-4
              rounded-2xl
              font-semibold
              w-full sm:w-auto
            "
          >
            Watch Demo
          </button>
        </div>
      </div>
      <div className="w-full">
        <MapCard />
      </div>
    </section>
  );
}