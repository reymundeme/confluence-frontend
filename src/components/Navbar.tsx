"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-white shadow-md px-10 py-5 ${montserrat.variable}`}>
      <div className="w-full px-4 sm:px-6">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              <Image
                src="/confluence-logo.webp"
                alt="Logo"
                width={240}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 relative">
            <Link href="/" className="whitespace-nowrap text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white p-4">HOME</Link>
            <Link href="/about" className="whitespace-nowrap text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white p-4">TECHNICAL SEO</Link>

            {/* SERVICES Dropdown */}
            <div className="group relative">
              <button className="whitespace-nowrap text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white p-4">
                SERVICES
              </button>

              {/* SERVICES Dropdown Group */}
              <div className="absolute left-0 top-full z-10 hidden group-hover:flex flex-col bg-[#267b9a] shadow-md min-w-[280px] text-white">
                <Link href="/services/programming-seo" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Programming SEO</Link>
                <Link href="/services/generative" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Generative</Link>
                <Link href="/services/link-building" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Link Building</Link>
                <Link href="/services/ai-youtube" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">AI YouTube</Link>
                <Link href="/services/ai-optimization" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Artificial Intelligence Optimization</Link>
                <Link href="/services/rank-tracking" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Rank Tracking</Link>
              </div>
            </div>

            <Link href="/contact" className="whitespace-nowrap text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white p-4">MEET THE TEAM</Link>
            <Link href="/results" className="whitespace-nowrap text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white p-4">RESULTS</Link>
            <Link href="/confluence-ai" className="whitespace-nowrap text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white p-4">CONFLUENCE AI</Link>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-bold">
          <Link href="/" className="block hover:text-blue-500">Home</Link>
          <Link href="/about" className="block hover:text-blue-500">About</Link>
          <Link href="/services" className="block hover:text-blue-500">Services</Link>
          <Link href="/contact" className="block hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}
