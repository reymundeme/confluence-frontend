import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">


      <section className="relative w-full h-screen flex items-center justify-center text-center">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        

        {/* Overlay (optional, for darkening video so text is readable) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        {/* Foreground content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="mt-4 text-lg">This is with a video background</p>
        </div>
      </section>





      <section>
        2
      </section>





    </div>
  );
}
