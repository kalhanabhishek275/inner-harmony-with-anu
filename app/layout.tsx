import "./globals.css";
import Link from "next/link";
import { Playfair_Display, Allura, Inter } from "next/font/google";
import Footer from "./components/Footer";
import BrandHeader from "./components/BrandHeader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Inner Harmony with Anu",
  description: "Wellness and transformation coaching focused on clarity, emotional balance, and inner alignment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${playfair.variable}
          ${allura.variable}
          ${inter.variable}
          bg-[#FAF9F6]
          text-[#2F3E34]
          antialiased
        `}
      >

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5 text-sm">

            {/* NAV LINKS LEFT */}
            <div className="flex items-center gap-8 text-[#4E6E64] font-medium">
              <Link href="/" className="hover:text-[#8FAF9B] transition">Home</Link>
              <Link href="/about" className="hover:text-[#8FAF9B] transition">About Me</Link>
              <Link href="/services" className="hover:text-[#8FAF9B] transition">Services</Link>
              <Link href="/contact" className="hover:text-[#8FAF9B] transition">Contact Us</Link>
            </div>

            {/* BRAND RIGHT */}
            <div className="hidden md:block">
              <BrandHeader />
            </div>

          </nav>
        </header>

        {/* Calendly Script */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>

        <main className="pt-20">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}