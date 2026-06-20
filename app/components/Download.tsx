export default function Download() {
  return (
    <section id="download" className="max-w-7xl mx-auto px-5 py-20">

      <div className="bg-[#08131f] border border-gray-800 rounded-3xl p-8 md:p-14 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-green-400">
          Download SafePath AI
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
          SafePath AI helps you find safer routes, real-time alerts,
          and smart navigation. Available on Android & iOS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-semibold text-black text-center"
          >
            📱 Google Play
          </a>

          
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-green-400 transition px-6 py-3 rounded-xl font-semibold text-center"
          >
            🍏 App Store
          </a>

        </div>

      
        <div className="flex flex-wrap justify-center gap-2 mt-6 text-xs text-gray-400">
          <span className="border border-gray-700 px-3 py-1 rounded-full">
            ⭐ 4.8
          </span>
          <span className="border border-gray-700 px-3 py-1 rounded-full">
            🔒 Secure
          </span>
          <span className="border border-gray-700 px-3 py-1 rounded-full">
            ⚡ Fast
          </span>
        </div>
        <p className="mt-8 text-gray-500 text-xs">
          Works on Android & iOS devices
        </p>

      </div>
    </section>
  );
}