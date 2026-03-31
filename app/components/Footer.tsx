import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2E3B33] text-[#E6EFEA]">
  <div className="max-w-7xl mx-auto px-8 py-8
                  flex flex-col md:flex-row
                  items-center justify-between gap-6">
        {/* LEFT — LOGO */}
        <div className="flex items-center gap-4">
  <Image
    src="/logo.jpeg"
    alt="Inner Harmony with Anu"
    width={44}
    height={44}
    className="rounded-full"
  />

  <div className="flex items-baseline gap-2">
    <span className="font-script text-xl text-[#8FAF9B]">
      Inner Harmony
    </span>

    <span className="font-serif text-sm text-[#E6EFEA]/70">
      with
    </span>

    <span className="font-script text-xl text-[#8FAF9B]">
      Anu
    </span>
  </div>
</div>

        {/* CENTER — SOCIAL ICONS */}
        <div className="flex items-center gap-6 text-xl opacity-80">
          <FaFacebookF />
          <a
            href="https://www.instagram.com/innerharmonywithanu?igsh=MWRxZnc4dXpnemV1eg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* RIGHT — COPYRIGHT */}
        <div className="font-[var(--font-sans)] text-sm opacity-80 text-center md:text-right">
          © 2026 Inner Harmony with Anu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}