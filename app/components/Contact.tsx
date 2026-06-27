"use client";
import React, { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!form.current) return;
    try {
      await emailjs.sendForm(
        "service_wad54qg",
        "template_jow0t84",
        form.current,
        "REmzMYCL7S2589wDp"
      );
      alert("Message sent successfully!");
      form.current.reset();
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      alert(
        error?.text ||
          error?.message ||
          "Failed to send message."
      );
    }
  };
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-5 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-green-400">
          Contact Us
        </h2>
        <p className="text-gray-400 mt-3">
          Have a question or want to work together?
          We’d love to hear from you.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 bg-[#08131f] border border-gray-800 rounded-3xl p-8 md:p-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Let’s Connect 🚀
            </h3>
            <p className="text-gray-400">
              We usually respond within 24 hours.
              Feel free to reach out for collaborations,
              support, or project discussions.
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-400 text-xl" />
              <span className="text-gray-300">
                support@safepath.ai
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-400 text-xl" />
              <span className="text-gray-300">
                +91 9800000000
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-400 text-xl" />
              <span className="text-gray-300">
                Thane, Maharashtra, India
              </span>
            </div>
          </div>
          <div className="bg-[#0d1625] p-5 rounded-2xl border border-gray-800">
            <h4 className="text-green-400 font-semibold mb-2">
              Why contact us?
            </h4>
            <p className="text-gray-400 text-sm">
              We help you build safer AI-based solutions,
              real-time tracking systems, and modern web
              applications with clean UI & performance.
            </p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-[#0d1625] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="bg-[#0d1625] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400 transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="bg-[#0d1625] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400 transition"
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Write your message..."
            required
            className="bg-[#0d1625] p-4 rounded-xl outline-none border border-gray-700 focus:border-green-400 transition"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition py-4 rounded-xl font-semibold text-black"
          >
            Send Message
          </button>
          <p className="text-xs text-gray-500 text-center">
            By sending this, you agree to our response policy.
          </p>
        </form>
      </div>
    </section>
  );
}