"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="bg-[#FAF9F6] text-[#2F3E34]">
      <section className="relative px-8 md:px-16 pt-32 pb-32 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#F4F1EB]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,175,155,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(250,249,246,0.8),rgba(250,249,246,1))]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-serif text-4xl md:text-5xl mb-8 text-[#4E6E64]"
          >
            Begin Your Journey Inward
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-lg leading-relaxed text-[#6F8F7F] mb-10"
          >
            You don’t have to know exactly what you need or where you’re headed.
            If something here has resonated with you, you’re welcome to reach out.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="text-base leading-relaxed text-[#6F8F7F] mb-16"
          >
            This is a gentle space to ask questions, share what you’re experiencing,
            or explore whether working together feels right for you.
            <br /><br />
            There’s no pressure, no commitment - just an open conversation.
          </motion.p>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="bg-white rounded-3xl shadow-sm p-10 text-left space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm mb-1 text-[#4E6E64]">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-full px-5 py-3 border border-[#8FAF9B]/40 focus:outline-none focus:ring-2 focus:ring-[#8FAF9B]/40"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-1 text-[#4E6E64]">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                pattern="^\+?[0-9\s\-]{7,15}$"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full rounded-full px-5 py-3 border border-[#8FAF9B]/40 focus:outline-none focus:ring-2 focus:ring-[#8FAF9B]/40"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-[#4E6E64]">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-full px-5 py-3 border border-[#8FAF9B]/40 focus:outline-none focus:ring-2 focus:ring-[#8FAF9B]/40"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1 text-[#4E6E64]">
                Your Query *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Share what’s on your mind…"
                className="w-full rounded-2xl px-5 py-4 border border-[#8FAF9B]/40 focus:outline-none focus:ring-2 focus:ring-[#8FAF9B]/40 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full px-10 py-4 rounded-full bg-[#8FAF9B] text-white hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {success && (
              <p className="text-center text-green-600 mt-4">
                Your message has been sent successfully.
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </main>
  );
}