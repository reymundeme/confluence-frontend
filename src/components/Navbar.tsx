"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`lg:pr-60 bg-white shadow-md px-10 py-5 ${montserrat.variable}`}>
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
          <div className="hidden lg:flex items-center space-x-6 relative">
            <Link href="/" className="whitespace-nowrap text-[#546259] font-extrabold hover:bg-[#267b9a] hover:text-white p-4 transition-colors duration-300">HOME</Link>
            <Link href="/about" className="whitespace-nowrap text-[#546259] font-extrabold hover:bg-[#267b9a] hover:text-white p-4 transition-colors duration-300">TECHNICAL SEO</Link>

            {/* SERVICES Dropdown */}
            <div className="group relative">
              <button className="whitespace-nowrap text-[#546259] font-extrabold hover:bg-[#267b9a] hover:text-white p-4 transition-colors duration-300">
                SERVICES
                <span className="ml-3 transition-transform duration-300 group-hover:rotate-180">
                  {/* <ChevronDownIcon className="group-hover:hidden"/>
                  <ChevronUpIcon className="hidden group-hover:inline"/> */}
                </span>
              </button>

              {/* SERVICES Dropdown Group */}
              <div className="absolute left-0 top-full z-10 hidden group-hover:flex flex-col bg-[#267b9a] shadow-md min-w-[280px] text-white">
                <Link href="/services/programming-seo" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Programming SEO</Link>
                <Link href="/services/generative" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Generative</Link>
                <Link href="/services/link-building" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Link Building</Link>
                <Link href="/services/ai-youtube" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">AI YouTube</Link>
                <Link href="/services/ai-optimization" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Artificial Intelligence Optimization</Link>
                <Link href="/services/rank-tracking" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Rank Tracking</Link>
                <Link href="/services/rank-tracking" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Name, Adress, Places, MAPS, Directions - Listenings</Link>
                <Link href="/services/rank-tracking" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">GBP Reputation Management & Review Removal</Link>
                <Link href="/services/rank-tracking" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Schema / Structured Data / AI Rich Snippets</Link>
                <Link href="/services/rank-tracking" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">AI Content Development & Google Ranking</Link>
                <Link href="/services/rank-tracking" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Website Design And Development</Link>
                <Link href="/services/rank-tracking" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Social Media Creative And Posting</Link>
              </div>
            </div>

            {/* MEET THE TEAM Dropdown */}
            <div className="group relative">
              <button className="whitespace-nowrap text-[#546259] font-extrabold hover:bg-[#267b9a] hover:text-white p-4 transition-colors duration-300">
                MEET THE TEAM
              </button>

              {/* MEET THE TEAM Dropdown Group */}
              <div className="absolute left-0 top-full z-10 hidden group-hover:flex flex-col bg-[#267b9a] shadow-md min-w-[280px] text-white">
                <Link href="/services/programming-seo" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Review Us</Link>
              </div>
            </div>


            {/* RESULTS Dropdown */}
            <div className="group relative">
              <button className="whitespace-nowrap text-[#546259] font-extrabold hover:bg-[#267b9a] hover:text-white p-4 transition-colors duration-300">
                RESULTS
              </button>

              {/* RESULTS Dropdown Group */}
              <div className="absolute left-0 top-full z-10 hidden group-hover:flex flex-col bg-[#267b9a] shadow-md min-w-[280px] text-white">
                <Link href="/services/programming-seo" className="whitespace-nowrap font-medium hover:bg-[#267b9a] hover:text-white p-3 border-b">Contact Us</Link>
              </div>
            </div>


            <Link href="/confluence-ai" className="whitespace-nowrap text-[#546259] font-extrabold hover:bg-[#267b9a] hover:text-white p-4 transition-colors duration-300">CONFLUENCE AI</Link>
          </div>


          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-4xl text-[#546259]"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 font-bold">
          <Link href="/" className="block hover:text-blue-500">Home</Link>
          <Link href="/about" className="block hover:text-blue-500">About</Link>
          <Link href="/services" className="block hover:text-blue-500">Services</Link>
          <Link href="/contact" className="block hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}
