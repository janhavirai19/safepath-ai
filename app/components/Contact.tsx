export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-5 py-20"
    >
      <div className="bg-[#08131f] border border-gray-800 rounded-3xl p-10">
        <h2 className="text-4xl font-bold text-green-400 mb-8">
          Contact Us
        </h2>

        <form className="grid gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#0d1625] p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-[#0d1625] p-4 rounded-xl outline-none"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="bg-[#0d1625] p-4 rounded-xl outline-none"
          />

          <button className="bg-green-500 py-4 rounded-xl font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}