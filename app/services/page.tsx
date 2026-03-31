"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// NOTE: Ensure you have this in your global CSS:
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.5s ease-out;
// }

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<any>(null);

  const services = [
{
  title: "The Inner Harmony Method™",
  short:
    "A private 1:1 transformation journey for people ready to move beyond surface-level change and step into embodied alignment.",
  description:
    "A deep 1:1 transformation journey designed for high-functioning individuals who feel internally overwhelmed. Through holistic wellness, emotional resilience, and nervous system regulation, we create lasting inner alignment and sustainable wellbeing.",
  duration: "12 Weeks",
  includes: [
    "12 weeks of personalized 1:1 coaching",
    "Lifestyle and emotional pattern assessment",
    "Nervous system regulation practices",
    "Mindset and boundary strengthening",
    "Sustainable habit and wellbeing framework",
  ],
  // price: "14,000",
},
{
  title: "Holistic Coaching & Guidance",
  short:
    "An integrative coaching journey that aligns lifestyle, stress patterns, and emotional wellbeing into sustainable balance.",
  description:
    "A structured coaching journey focused on restoring balance in everyday life. We work on lifestyle habits, stress regulation, movement consistency, and emotional awareness to build grounded, practical wellbeing.",
  duration: "Recommended: 8–10 Sessions",
  includes: [
    "Lifestyle structure and wellness planning",
    "Stress and nervous system regulation",
    "Nutrition and movement awareness",
    "Emotional awareness and reflection",
    "Support and accountability",
  ],
  // price: "1,500 per session",
},
{
  title: "Personal Growth & Transformation",
  short:
    "A focused growth journey for people navigating transitions, decisions, or personal reinvention.",
  description:
    "Designed for times of transition or reinvention. This coaching focuses on clarity, mindset shifts, and confident decision-making to help you move forward with purpose and self-trust.",
  duration: "Recommended: 8 Sessions",
  includes: [
    "Clarity and direction mapping",
    "Mindset and belief reframing",
    "Values and decision alignment",
    "Confidence and self-trust building",
    "Forward momentum planning",
  ],
  // price: "1,500 per session",
},
{
  title: "Mindfulness & Emotional Wellness",
  short:
    "A restorative coaching space to regulate overwhelm and cultivate emotional steadiness.",
  description:
    "A calm coaching space designed to support emotional balance. Learn practical tools for managing stress, regulating your nervous system, and developing grounded inner stability.",
  duration: "Recommended: 6–8 Sessions",
  includes: [
    "Nervous system regulation tools",
    "Emotional awareness and processing",
    "Healthy boundary development",
    "Mindfulness and grounding practices",
    "Daily emotional wellbeing tools",
  ],
  // price: "1,500 per session",
},
{
  title: "Which Service Is Right for You?",
  short:
    "Not sure where to begin? A clarity-based conversation to help determine the right path for you.",
  description:
    "Start with a relaxed clarity conversation where we explore your goals, current challenges, and the support that would serve you best.",
  duration: "Discovery Conversation",
  includes: [
    "Explore goals and challenges",
    "Identify the most aligned service",
    "Clarity on next steps",
  ],
  // price: "Free Discovery Call",
},
];

  return (
    <main className="bg-[#FAF9F6] text-[#2F3E34]">

      {/* ================= HERO ================= */}
      <section className="px-8 md:px-16 pt-32 pb-24 text-center">
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-6xl text-[#4E6E64] mb-6"
        >
          How I Support You
        </motion.h1>

        <p className="max-w-2xl mx-auto text-lg text-[#6F8F7F]">
          Gentle, compassionate support designed to help you reconnect with
          clarity, balance, and your inner wisdom.
        </p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="px-8 md:px-16 pb-28">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => setActiveService(service)}
              className="bg-white rounded-3xl p-10 shadow-sm text-center cursor-pointer
hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 w-full md:w-[30%] animate-fadeIn"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "both" }}
            >
              <h3 className="font-serif text-2xl mb-4 text-[#4E6E64]">
                {service.title}
              </h3>
              <p className="text-[#6F8F7F] leading-relaxed">
                {service.short}
              </p>

              <p className="mt-6 text-sm text-[#8FAF9B]">
                Click to learn more
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
<section className="bg-[#8FAF9B]/5 px-8 md:px-16 py-28">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="font-serif text-4xl text-[#4E6E64] mb-6">
      Investment & Packages
    </h2>

    <p className="text-[#6F8F7F] mb-12">
      Choose the structure that best supports your journey.
    </p>

    {/* Standard Rate */}
    <div className="mb-14">
      <p className="uppercase text-sm tracking-wider text-[#8FAF9B] mb-2">
        Standard Session Rate
      </p>
      <p className="font-serif text-3xl text-[#4E6E64]">
        ₹1,500 per 60-minute session
      </p>
    </div>

    {/* Packages */}
      <div className="grid md:grid-cols-2 gap-8 text-left">

        {/* 2-Session Starter */}
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-serif text-xl text-[#4E6E64] mb-2">
            2-Session Starter
          </h3>
          <div className="mt-2">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#8FAF9B] line-through">₹3,000</span>
              <span className="text-xl font-semibold text-[#4E6E64]">₹2,800</span>
            </div>
            <div className="mt-1 inline-block px-3 py-1 text-xs rounded-full bg-[#8FAF9B]/15 text-[#4E6E64]">
              Save ₹200
            </div>
            <p className="mt-3 text-sm text-[#6F8F7F]">
              Ideal if you want to experience coaching and begin your journey.
            </p>
          </div>
        </div>

        {/* 6-Session Foundation */}
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-serif text-xl text-[#4E6E64] mb-2">
            6-Session Foundation
          </h3>
          <div className="mt-2">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#8FAF9B] line-through">₹9,000</span>
              <span className="text-xl font-semibold text-[#4E6E64]">₹8,000</span>
            </div>
            <div className="mt-1 inline-block px-3 py-1 text-xs rounded-full bg-[#8FAF9B]/15 text-[#4E6E64]">
              Save ₹1,000
            </div>
            <p className="mt-3 text-sm text-[#6F8F7F]">
              For building awareness, clarity, and creating initial change.
            </p>
          </div>
        </div>

        {/* 8-Session Growth */}
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-serif text-xl text-[#4E6E64] mb-2">
            8-Session Growth
          </h3>
          <div className="mt-2">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#8FAF9B] line-through">₹12,000</span>
              <span className="text-xl font-semibold text-[#4E6E64]">₹10,000</span>
            </div>
            <div className="mt-1 inline-block px-3 py-1 text-xs rounded-full bg-[#8FAF9B]/15 text-[#4E6E64]">
              Save ₹2,000
            </div>
            <p className="mt-3 text-sm text-[#6F8F7F]">
              Designed for deeper transformation and consistent progress.
            </p>
          </div>
        </div>

        {/* 10-Session Holistic Balance */}
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-serif text-xl text-[#4E6E64] mb-2">
            10-Session Holistic Balance
          </h3>
          <div className="mt-2">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#8FAF9B] line-through">₹15,000</span>
              <span className="text-xl font-semibold text-[#4E6E64]">₹12,000</span>
            </div>
            <div className="mt-1 inline-block px-3 py-1 text-xs rounded-full bg-[#8FAF9B]/15 text-[#4E6E64]">
              Save ₹3,000
            </div>
            <p className="mt-3 text-sm text-[#6F8F7F]">
              Supports emotional wellness, clarity, and life realignment.
            </p>
          </div>
        </div>

        {/* 12-Session Inner Harmony Deep Dive */}
        <div className="bg-[#FAF9F6] rounded-2xl p-8 shadow-md md:col-span-2 text-center border-2 border-[#8FAF9B] relative
hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8FAF9B] text-white text-xs px-4 py-1 rounded-full tracking-wide">
            Most Popular
          </div>
          <h3 className="font-serif text-2xl text-[#4E6E64] mb-2">
            12-Session Inner Harmony Deep Dive
          </h3>
          <div className="mt-2">
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm text-[#8FAF9B] line-through">₹18,000</span>
              <span className="text-2xl font-semibold text-[#4E6E64]">₹14,000</span>
            </div>
            <div className="mt-2 inline-block px-3 py-1 text-xs rounded-full bg-[#8FAF9B]/20 text-[#4E6E64]">
              Save ₹4,000
            </div>
            <p className="mt-3 text-sm text-[#6F8F7F] max-w-md mx-auto">
              A complete transformational journey for lasting inner change.
            </p>
          </div>
        </div>

      </div>

  </div>
</section>

{/* ================= BOOKING SECTION ================= */}
<section className="bg-[#8FAF9B]/10 px-8 md:px-16 py-28">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="font-serif text-4xl text-[#4E6E64] mb-6">
      Begin Your Journey
    </h2>

    <p className="text-[#6F8F7F] max-w-xl mx-auto mb-12">
      A calm, no-pressure conversation where we explore your goals,
      challenges, and the transformation you're ready for.
    </p>

    <button
      onClick={() =>
        (window as any).Calendly.initPopupWidget({
          url: "https://calendly.com/anukalhan77/30min",
        })
      }
      className="inline-block px-12 py-4 rounded-full
                 bg-[#8FAF9B] text-white
                 hover:opacity-90 transition shadow-md"
    >
      Book Your Free Discovery Call
    </button>

  </div>
</section>

      {/* ================= MODAL ================= */}
      {activeService && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] animate-fadeIn">

            {/* Luxury Gradient Header */}
            <div className="bg-gradient-to-r from-[#8FAF9B] to-[#6F8F7F] px-10 py-6 text-white">
              <h2 className="font-serif text-3xl">
                {activeService.title}
              </h2>
              <p className="mt-2 text-sm opacity-90">
                Session Duration: {activeService.duration}
              </p>
            </div>

            <div className="px-10 py-5">

              {/* Description */}
              <p className="text-[#6F8F7F] leading-relaxed mb-4 text-[15px]">
                {activeService.description}
              </p>

              {/* Gold Divider */}
              <div className="h-px bg-[#D6C28F]/60 mb-6" />

              {/* Includes */}
              <h4 className="font-serif text-xl text-[#4E6E64] mb-5">
                Includes:
              </h4>

              <ul className="space-y-2 text-[#6F8F7F] mb-5">
                {activeService.includes.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#D6C28F] text-lg">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              {/* <div className="border-t pt-5 text-center">
                <p className="text-sm text-[#8FAF9B] uppercase tracking-wider mb-3">
                  Investment
                </p>
                <p className="font-serif text-3xl text-[#4E6E64]">
                  ₹ {activeService.price}
                </p>
              </div> */}

              {/* Close */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setActiveService(null)}
                  className="px-10 py-3 rounded-full border border-[#8FAF9B] text-[#4E6E64] hover:bg-[#8FAF9B]/10 transition"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}