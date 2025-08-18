"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-10 py-5">
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
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white">HOME</Link>
            <Link href="/about" className="text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white">TECHNICAL SEO</Link>
            <Link href="/services" className="text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white">SERVICES</Link>
            <Link href="/contact" className="text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white">MEET THE TEAM</Link>
            <Link href="/contact" className="text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white">RESULTS</Link>
            <Link href="/contact" className="text-[#546259] font-bold hover:bg-[#267b9a] hover:text-white">CONFLUENCE AI</Link>
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
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-500">Home</Link>
          <Link href="/about" className="block hover:text-blue-500">About</Link>
          <Link href="/services" className="block hover:text-blue-500">Services</Link>
          <Link href="/contact" className="block hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}
