"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#FAF9F6] text-[#2F3E34] min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="px-8 md:px-16 pt-0 pb-2"> {/* Increased bottom padding slightly */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/Anu About - No Background.png"
              alt="Anu Kalhan – Wellness and Transformation Coach"
              width={460}
              height={600}
              priority
              className="drop-shadow-[0_25px_40px_rgba(0,0,0,0.08)]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="font-serif text-4xl text-[#4E6E64] mb-5">
              About Anu
            </h1>

            {/* Increased paragraph size */}
            <p className="text-lg text-[#6F8F7F] leading-[1.75] mb-5">
              Inner Harmony with Anu was born from a simple but profound belief -
              that true transformation begins within.
            </p>

            <p className="text-lg leading-[1.75] text-[#5F7F72] mb-5">
              I’m Anu Kalhan, a Wellness and Transformation Coach. My journey
              began as a homemaker in my 40s, devoted to my family while quietly
              nurturing a deeper calling to guide and support others.
            </p>

            <p className="text-lg leading-[1.75] text-[#5F7F72]">
              As I stepped into the professional world, I discovered my natural
              ability to help students uncover clarity, confidence, and direction
              during important life transitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= JOURNEY SECTION ================= */}
      <section className="px-8 pt-0 pb-8 -mt-6">
        <div className="max-w-4xl mx-auto text-base leading-[1.7] text-[#5F7F72] space-y-4">

          <p>
            At 52, I embraced yoga as a daily practice. What began as discipline
            became a source of strength, balance, and deep inner awareness -
            teaching me that transformation can be gentle and deeply rooted within.
          </p>

          <p>
            Through my own transformation - from homemaker to mentor - I found
            not just a profession, but my purpose.
          </p>

          <p>
            Today, I support individuals in reconnecting with their inner balance,
            emotional clarity, and self-trust - helping them move from overwhelm
            to aligned action.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pt-6 pb-10 text-center">
        <div className="max-w-3xl mx-auto">

          <p className="text-base text-[#6F8F7F] mb-12">
            My work is rooted in peace, resilience, and conscious living -
            because when you transform within, your outer world begins to shift.
          </p>

          <a
            href="/services"
            className="inline-block px-8 py-3 rounded-full
                       bg-[#8FAF9B] text-white
                       hover:opacity-90 transition"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>

    </main>
  );
}