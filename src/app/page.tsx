"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5 = half speed
    }
  }, []);


  return (
    <div className="w-full">
      <section className="relative w-full h-screen flex items-center justify-center text-center">

        {/* Background image */}
        <Image
          src="/images/section1.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay (optional, for darkening video so text is readable) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        {/* Foreground content */}
        <div className="flex z-10 text-white gap-10">

          {/* content 1 */}
          <div className="bg-red-900 w-full h-full">
            qweqwe
          </div>

          {/* content 2 */}
          <div className="bg-blue-900 w-full h-full">
            qwqwe
          </div>

        </div>
      </section>





      <section>
        2
      </section>





    </div>
  );
}
