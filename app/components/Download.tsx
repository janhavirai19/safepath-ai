export default function Download() {
  return (
    <section
      id="download"
      className="max-w-7xl mx-auto px-5 py-20"
    >
      <div className="bg-[#08131f] border border-gray-800 rounded-3xl p-12 text-center">
        <h2 className="text-5xl font-bold">
          Download SafePath AI
        </h2>

        <p className="text-gray-400 mt-5">
          Available for Android and iOS.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
          <button className="bg-green-500 px-8 py-4 rounded-2xl">
            Google Play
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-2xl">
            App Store
          </button>
        </div>
      </div>
    </section>
  );
}