"use client";
import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false)
  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_wad54qg",
        "template_jow0t84",
        form.current,
        "REMzMYCL7S2589wDp"
      );
      alert("Message sent successfully! 🚀");
      form.current.reset();
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      alert(
        error?.text ||
          error?.message ||
          "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };
 return (
  <section
    id="contact"
    className="max-w-5xl mx-auto px-5 py-20"
  >
    <div className="bg-[#08131f] border border-gray-800 rounded-[30px] p-8 md:p-10 shadow-xl">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-400">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-3">
          Have a question or project? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-[#0d1625] p-5 rounded-2xl border border-gray-800 text-center hover:border-green-400 transition-all duration-300">
          <FaEnvelope className="text-green-400 text-2xl mx-auto mb-3" />
          <h4 className="text-white font-semibold">
            Email
          </h4>
          <p className="text-gray-400 text-sm mt-2">
            janhavirai932@gmail.com
          </p>
        </div>

        <div className="bg-[#0d1625] p-5 rounded-2xl border border-gray-800 text-center hover:border-green-400 transition-all duration-300">
          <FaPhoneAlt className="text-green-400 text-2xl mx-auto mb-3" />
          <h4 className="text-white font-semibold">
            Phone
          </h4>
          <p className="text-gray-400 text-sm mt-2">
            +91 9800000000
          </p>
        </div>

        <div className="bg-[#0d1625] p-5 rounded-2xl border border-gray-800 text-center hover:border-green-400 transition-all duration-300">
          <FaMapMarkerAlt className="text-green-400 text-2xl mx-auto mb-3" />
          <h4 className="text-white font-semibold">
            Location
          </h4>
          <p className="text-gray-400 text-sm mt-2">
            Thane, Maharashtra
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-[#0d1625] p-4 rounded-xl border border-gray-700 text-white outline-none focus:border-green-400 transition"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="bg-[#0d1625] p-4 rounded-xl border border-gray-700 text-white outline-none focus:border-green-400 transition"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full bg-[#0d1625] p-4 rounded-xl border border-gray-700 text-white outline-none focus:border-green-400 transition"
        />

        <textarea
          rows={5}
          name="message"
          placeholder="Write your message..."
          required
          className="w-full bg-[#0d1625] p-4 rounded-xl border border-gray-700 text-white outline-none resize-none focus:border-green-400 transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition duration-300 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message "}
        </button>
      </form>
    </div>
  </section>
);
}