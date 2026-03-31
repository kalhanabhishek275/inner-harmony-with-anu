"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#FAF9F6] text-[#2F3E34]">

      {/* ================= HERO ================= */}
      <section className="relative px-8 md:px-16 pt-32 pb-24 overflow-hidden">

        {/* ---------- BACKGROUND LAYERS ---------- */}
        <div className="absolute inset-0 bg-[#F4F1EB]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(143,175,155,0.55),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(143,175,155,0.4),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(250,249,246,0.6),rgba(250,249,246,0.9))]" />
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.04] mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-[url('/leaf-overlay.png')] bg-no-repeat bg-right-top opacity-[0.12]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(214,194,143,0.35),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(214,194,143,0.25),transparent_45%)] opacity-40" />

        {/* ✅ Watermark Logo — Correct Layer (behind content) */}
        {/* <div className="absolute inset-0 flex items-start justify-center pt-24 pointer-events-none">
          <Image
            src="/logo.jpeg"
            alt="Inner Harmony Logo"
            width={420}
            height={420}
            className="opacity-[0.10] blur-[1px] scale-110"
          />
        </div> */}

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-24 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
<div className="mb-10 flex justify-center md:justify-start">
  <div
    className="
      relative flex items-center justify-center rounded-full
      ring-2 ring-[#D6C28F]/80
      shadow-[0_14px_36px_rgba(0,0,0,0.15)]
      p-1.5
    "
  >
    <Image
      src="/logo.jpeg"
      alt="Inner Harmony with Anu logo"
      width={210}
      height={210}
      className="rounded-full"
      priority
    />
  </div>
</div>
              <h1 className="leading-[1.1] mb-10">
                <span className="block uppercase tracking-[0.35em] text-xs mb-6 text-[#8FAF9B]">
                  Welcome to
                </span>

                <span className="block font-serif text-5xl md:text-6xl text-[#4E6E64]">
                  Inner Harmony
                </span>

                <span className="block mt-2 text-3xl md:text-4xl text-[#6F8F7F]">
                  with{" "}
                  <span
                    className="font-script text-[#8FAF9B] text-7xl md:text-8xl leading-none"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    Anu
                  </span>
                </span>
              </h1>

              <p className="text-lg max-w-xl mb-14 text-[#6F8F7F] leading-relaxed">
                <span className="block text-xl font-serif text-[#4E6E64] mb-1">
                  A journey to your Best Self
                </span>
                <span className="block text-sm tracking-wide text-[#8FAF9B]">
                  grounded in clarity, compassion, and inner balance
                </span>
              </p>

              <a
                href="/services"
                className="inline-block px-10 py-4 rounded-full bg-[#8FAF9B] text-white hover:opacity-90 transition"
              >
                Book your Free Discovery Call
              </a>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative flex justify-end"
            >
              <div className="absolute -inset-16 bg-[radial-gradient(ellipse_at_center,rgba(143,175,155,0.35),transparent_70%)] blur-3xl" />

              <Image
                src="/Anu - No Background.png"
                alt="Anu – Wellness and Transformation Coach"
                width={420}
                height={560}
                priority
                className="relative z-10 drop-shadow-[0_25px_45px_rgba(0,0,0,0.12)] rounded-[22%] [mask-image:radial-gradient(ellipse_at_center,black_65%,rgba(0,0,0,0.9)_72%,transparent_92%)]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#8FAF9B]/10 py-24 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-16">
            How I Support You
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Holistic Coaching & Guidance",
                text: "Supportive conversations that help you reconnect with your inner wisdom and truth."
              },
              {
                title: "Personal Growth & Transformation",
                text: "Gentle tools and practices to move from awareness into aligned action."
              },
              {
                title: "Mindfulness & Wellness",
                text: "Cultivating presence, calm, and emotional balance in everyday life."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="p-8 bg-white rounded-3xl shadow-sm"
              >
                <h3 className="text-2xl font-serif mb-4">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-[#6F8F7F]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="relative py-28 px-8 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10 px-10">

          <div className="mx-auto mb-14 h-px w-24 bg-[#D6C28F]/50" />

          <blockquote className="font-serif text-2xl md:text-[2.1rem] text-[#4E6E64] leading-relaxed mb-12">
            “Building the best in life is not about fixing what is broken.
            It is about nurturing what is best.”
            <span className="block mt-4 text-sm tracking-wide text-[#8FAF9B] uppercase">
              , Martin Seligman
            </span>
          </blockquote>

          <div className="space-y-7 text-[1.05rem] md:text-lg text-[#6F8F7F] leading-relaxed">
            <p>
              Life doesn’t always change with loud moments.
              Sometimes it shifts quietly, through transitions, habits we want to release,
              emotions we don’t yet know how to name,
              or a deep inner knowing that something more is possible.
            </p>

            <p className="font-serif text-xl text-[#4E6E64]">
              This is a gentle corner for your becoming.
            </p>

            <p>
              You don’t have to have it all figured out.
              You just have to begin, softly, honestly, one step at a time.
            </p>

            <p className="font-serif text-[#4E6E64] text-lg">
              I’m so grateful you’re here.
              Let’s walk this journey inward, together 🤍
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,175,155,0.12),transparent_60%)]" />
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-28 px-8 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-serif mb-6">
            Kind Words from Clients
          </h2>

          <p className="max-w-2xl mx-auto mb-20 text-[#6F8F7F]">
            Reflections from individuals who have experienced this journey
            with presence, compassion, and care.
          </p>

          <div className="grid md:grid-cols-3 gap-14">
            {[
              {
    image: "/Testimonials/Client1.jpeg",
    name: "Kinjal",
    quote:
      "Anu is calm and confident coach who knows what she is doing. She not only created a safe space for me to share my insights but also appreciated me for my own strengths. She helped me uplift myself in such a beautiful way that I regained my confidence. The session with Anu felt like a deep dive journey of my own  personality. Thank you for helping me on my journey.",
  },
              {
                image: "/Testimonials/Client2.jpeg",
                name: "Anuj Kumbhat", 
                quote:
                  "My experience with Anu has been deeply valuable. She is a thoughtful, perceptive listener who brings both wisdom and clarity. She helped me see how my strengths, perseverance, structure, and curiosity could be applied beyond my career to create a more supportive and balanced home life. That shift in perspective was powerful. I highly recommend her to anyone seeking a grounded coach and insightful thinking partner.",
              },
              {
                image: "/Testimonials/Client3.jpeg",
                name: "Vikas Sharma", 
                quote:
                  "Anu’s coaching has been truly transformative. Her thoughtful, precise questions create powerful moments of insight and self-reflection. She has a rare ability to guide you inward, helping you recognize patterns and possibilities with clarity. That awareness has brought greater alignment, confidence, and intentionality into my life. I’m deeply grateful for the growth I’ve experienced through working with her.",
              },
            ].map((item, i) => (
              <motion.div
  key={i}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, delay: i * 0.15 }}
  className="bg-white/70 backdrop-blur-sm rounded-3xl px-10 py-12 shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
>

  {item.image && (
    <Image
      src={item.image}
      alt="Client testimonial"
      width={64}
      height={64}
      className="rounded-full mx-auto mb-6 object-cover"
    />
  )}
                <p className="text-[#4E6E64] italic leading-relaxed text-lg">
                  “{item.quote}”
                </p>
                {item.name && (
  <div className="mt-6 text-sm text-[#8FAF9B] font-medium">
    - {item.name}
  </div>
)}

                {/* <div className="mt-8 text-sm text-[#8FAF9B]">
                  — Client reflection
                </div> */}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}