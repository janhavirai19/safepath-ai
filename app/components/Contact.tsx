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
      alert("Message sent successfully! ");
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
    className="max-w-6xl mx-auto px-5 py-24"
  >
    <div className="relative overflow-hidden rounded-[35px] border border-gray-800 bg-[#08131f]">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative grid lg:grid-cols-[40%_60%]">

        <div className="border-b lg:border-b-0 lg:border-r border-gray-800 p-8 md:p-10 flex flex-col justify-center">
          <span className="w-fit rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            Contact SafePath AI
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white">
            Let's Create
            <span className="text-green-400"> Something Great.</span>
          </h2>
          <p className="mt-4 text-gray-400 leading-7">
            Whether you have an idea, need help with a
            project, or just want to connect, we'd love
            to hear from you.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10">
                <FaEnvelope className="text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  Email
                </p>
                <p className="text-white">
                  janhavirai932@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10">
                <FaPhoneAlt className="text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  Phone
                </p>
                <p className="text-white">
                  +91 9800000000
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10">
                <FaMapMarkerAlt className="text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  Location
                </p>
                <p className="text-white">
                  Thane, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10">
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
                className="rounded-2xl border border-gray-700 bg-[#0d1625] p-4 text-white outline-none focus:border-green-400"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="rounded-2xl border border-gray-700 bg-[#0d1625] p-4 text-white outline-none focus:border-green-400"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-2xl border border-gray-700 bg-[#0d1625] p-4 text-white outline-none focus:border-green-400"
            />
            <textarea
              rows={6}
              name="message"
              placeholder="Tell us about your project..."
              required
              className="w-full resize-none rounded-2xl border border-gray-700 bg-[#0d1625] p-4 text-white outline-none focus:border-green-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-green-500 py-4 font-bold text-black transition hover:bg-green-400 disabled:opacity-60"
            >
              {loading
                ? "Sending..."
                : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
}