"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import RealCostumerRealGrowth from "./RealCostumerRealGrowth";

const logos = [
  "https://irp.cdn-website.com/56f2ffad/dms3rep/multi/meta-1920w.webp",
  "https://irp.cdn-website.com/56f2ffad/dms3rep/multi/Facebook-Ads-1920w.webp",
  "https://irp.cdn-website.com/56f2ffad/dms3rep/multi/Google-Ads-1920w.webp",
  "https://irp.cdn-website.com/56f2ffad/dms3rep/multi/Artboard-3.svg",
  "https://irp.cdn-website.com/56f2ffad/dms3rep/multi/Artboard-4.svg",
  "https://irp.cdn-website.com/56f2ffad/dms3rep/multi/SchemaApp-logo-1920w.webp",
  "https://irp.cdn-website.com/56f2ffad/dms3rep/multi/Specifications-1920w.webp"
];

export default function LogoScroller() {
  return (
    <>
      <RealCostumerRealGrowth />
    <div className="overflow-hidden relative w-full h-full flex bg-white py-18">

       {/* Gradient overlay left */}
      <div className="absolute left-0 top-0 w-20 lg:w-50 h-full bg-gradient-to-r from-white to-transparent z-10"/>

      {/* Gradient overlay right */}
      <div className="absolute right-0 top-0 w-20 lg:w-50 h-full bg-gradient-to-l from-white to-transparent z-10"/>

      <motion.div
        className="flex space-x-35"
        initial={{ x: "100%", opacity: 0 }}     
        animate={{ x: "-100%", opacity: 1 }} 
        transition={{ 
          repeat: Infinity,
          duration: 50,
          ease: "linear",
          opacity: { duration: 2, ease: "easeInOut" }
        }}
      >

        {logos.map((logo, i) => (
          <Image key={i} src={logo} alt={`Logo ${i}`} width={120} height={40} />
        ))}

      </motion.div>
    </div>
       </>
  );
}
