export default function MapCard() {
  return (
    <div
      className="
        relative
        w-full
        h-[260px]
        sm:h-[340px]
        md:h-[420px]
        lg:h-[500px]
        rounded-2xl
        sm:rounded-[30px]
        overflow-hidden
        border border-green-500/20
        bg-[#06101f]
        shadow-[0_0_40px_rgba(0,255,136,.15)]
      "
    >
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
          bg-[size:30px_30px]
          sm:bg-[size:40px_40px]
        "
      />

    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.12),transparent_70%)]" />
      <div
        className="
          absolute
          top-[20%]
          left-[20%]
          w-10 h-10
          sm:w-14 sm:h-14
          md:w-16 md:h-16
          rounded-full
          bg-red-500/20
          border border-red-500
          animate-pulse
        "
      />

      <div
        className="
          absolute
          bottom-[18%]
          right-[18%]
          w-10 h-10
          sm:w-14 sm:h-14
          md:w-16 md:h-16
          rounded-full
          bg-red-500/20
          border border-red-500
          animate-pulse
        "
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M100 400 C250 360 280 280 400 260 C550 230 600 120 700 90"
          stroke="#00ff88"
          strokeWidth="7"
          fill="none"
          filter="url(#glow)"
          strokeLinecap="round"
        />

        <circle cx="100" cy="400" r="10" fill="#00ff88" />
        <circle cx="700" cy="90" r="12" fill="#00ff88" />
      </svg>
      <div
        className="
          absolute
          top-3 right-3
          sm:top-5 sm:right-5
          bg-black/60
          backdrop-blur-md
          px-3 py-2
          sm:px-4
          rounded-xl
          border border-green-500/20
        "
      >
        <p className="text-xs sm:text-sm text-white">
          📍 Destination
        </p>
      </div>

      <div
        className="
          absolute
          bottom-3 right-3
          sm:bottom-5 sm:right-5
          bg-[#08131f]/90
          backdrop-blur-md
          border border-green-500/20
          rounded-xl
          sm:rounded-2xl
          p-3 sm:p-5
          min-w-[120px]
          sm:min-w-[170px]
        "
      >
        <p className="text-gray-400 text-[10px] sm:text-sm">
          Safety Score
        </p>

        <h2 className="text-2xl sm:text-4xl font-bold text-green-400">
          92%
        </h2>

        <p className="text-green-400 text-xs sm:text-sm">
          Low Risk
        </p>
      </div>
    </div>
  );
}