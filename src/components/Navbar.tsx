"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pages, setPages] = useState<any[]>([]);
  const [childPages, setChildPages] = useState<any[]>([]);
  const [grandChildPages, setGrandChildPages] = useState<any[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchData() {
      try {
        const [pagesRes, childPagesRes, grandChildPagesRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages`),
          fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/child-pages?populate=parent`),
          fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/grand-child-pages?populate=parent`),
        ]);

        const pagesData = await pagesRes.json();
        const childPagesData = await childPagesRes.json();
        const grandChildPagesData = await grandChildPagesRes.json();

        setPages(pagesData.data || []);
        setChildPages(childPagesData.data || []);
        setGrandChildPages(grandChildPagesData.data || []);
      } catch (err) {
        console.error("Failed to fetch navbar data:", err);
      }
    }
    fetchData();
  }, []);

  // Helpers
  const getChildren = (parentId: number) =>
    childPages.filter((c) => c.parent?.id === parentId);

  const getGrandChildren = (childId: number) =>
    grandChildPages.filter((gc) => gc.parent?.id === childId);

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
              const children = getChildren(page.id);

              return (
                <div key={page.id} className="relative group">
                  <Link
                    href={slug}
                    className={`whitespace-nowrap font-extrabold p-4 transition-colors duration-300 ${
                      isActive
                        ? "bg-[#267b9a] text-white"
                        : "text-[#546259] hover:bg-[#267b9a] hover:text-white"
                    }`}
                  >
                    {page.Title.toUpperCase()}

                    {children.length > 0 && (
                      <span className="ml-2">
                        <ChevronUp className="w-4 h-4 hidden group-hover:inline" />
                        <ChevronDown className="w-4 h-4 inline group-hover:hidden" />
                      </span>
                    )}
                  </Link>

                  {/* Child dropdown */}
                  {children.length > 0 && (
                    <ul className="absolute left-0 mt-2 text-white hidden group-hover:block bg-[#267b9a] shadow-lg w-88">
                      {children.map((child, index) => {
                        const grandChildren = getGrandChildren(child.id);
                        return (
                          <li
                            key={child.id}
                            className="relative group/child" // important: nested group for child hover
                          >
                            <Link
                              href={`/${child.slug}`}
                              className={`flex justify-between items-center px-4 py-2 text-md hover:text-white hover:bg-[#546259] ${
                                children.length > 1 && index !== children.length - 1
                                  ? "border-b border-white"
                                  : ""
                              }`}
                            >
                              {child.title}
                              {grandChildren.length > 0 && (
                                <ChevronRight className="w-4 h-4 ml-2" />
                              )}
                            </Link>

                            {/* Grandchild dropdown - ONLY shows on hover of this child */}
                            {grandChildren.length > 0 && (
                              <ul className="absolute left-full top-0 hidden group-hover/child:block bg-[#267b9a] shadow-lg w-88">
                                {grandChildren.map((grandChild, gIndex) => (
                                  <li key={grandChild.id}>
                                    <Link
                                      href={`/${grandChild.slug}`}
                                      className={`block px-4 py-2 text-md hover:text-white hover:bg-[#546259] ${
                                        grandChildren.length > 1 &&
                                        gIndex !== grandChildren.length - 1
                                          ? "border-b border-white"
                                          : ""
                                      }`}
                                    >
                                      {grandChild.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
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
            const children = getChildren(page.id);

            return (
              <div key={page.id}>
                <Link
                  href={slug}
                  className={`block p-2 rounded-md ${
                    isActive
                      ? "bg-[#267b9a] text-white"
                      : "text-[#546259] hover:bg-[#267b9a] hover:text-white"
                  }`}
                >
                  {page.Title}
                </Link>

                {children.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1">
                    {children.map((child) => {
                      const grandChildren = getGrandChildren(child.id);
                      return (
                        <div key={child.id}>
                          <Link
                            href={`/${child.slug}`}
                            className="block px-2 py-1 text-sm text-[#546259] hover:bg-[#267b9a] hover:text-white rounded"
                          >
                            {child.title}
                          </Link>

                          {grandChildren.length > 0 && (
                            <div className="ml-4 mt-1 space-y-1">
                              {grandChildren.map((grandChild) => (
                                <Link
                                  key={grandChild.id}
                                  href={`/${grandChild.slug}`}
                                  className="block px-2 py-1 text-sm text-[#546259] hover:bg-[#267b9a] hover:text-white rounded"
                                >
                                  {grandChild.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
