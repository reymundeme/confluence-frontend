"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pages, setPages] = useState<any[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchPages() {
      try {
        const res = await fetch("http://localhost:1337/api/pages");
        const data = await res.json();
        setPages(data.data || []);
      } catch (err) {
        console.error("Failed to fetch pages:", err);
      }
    }
    fetchPages();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 2xl:pr-60 bg-white shadow-md px-10 py-5 ${montserrat.variable}`}
    >
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
                className="h-12 w-auto sm:h-14 2xl:h-16"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 relative">
            {pages.map((page) => {
              const slug = page.Slug === "home" ? "/" : `/${page.Slug}`;
              const isActive = pathname === slug;

              return (
                <Link
                  key={page.id}
                  href={slug}
                  className={`whitespace-nowrap font-extrabold p-4 transition-colors duration-300 ${
                    isActive
                      ? "bg-[#267b9a] text-white"
                      : "text-[#546259] hover:bg-[#267b9a] hover:text-white"
                  }`}
                >
                  {page.Title.toUpperCase()}
                </Link>
              );
            })}
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
          {pages.map((page) => {
            const slug = page.Slug === "home" ? "/" : `/${page.Slug}`;
            const isActive = pathname === slug;

            return (
              <Link
                key={page.id}
                href={slug}
                className={`block p-2 rounded-md ${
                  isActive
                    ? "bg-[#267b9a] text-white"
                    : "text-[#546259] hover:bg-[#267b9a] hover:text-white"
                }`}
              >
                {page.Title}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
