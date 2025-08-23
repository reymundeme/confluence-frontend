import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const iconClass = "text-white text-3xl hover:text-gray-300 transition-colors mt-6";

    return (
        <div className="flex w-full bg-[#333] px-6 lg:px-20 xl:px-92 py-12 flex flex-col text-white">

            {/* Logo */}
            <div className=" items-center mb-8">
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

            {/* Columns wrapper */}
            <div className="grid w-full gap-8 py-4 border-b-2 border-[#34464b] 
                            grid-cols-2 md:grid-cols-4">

                {/* Column 1 */}
                <div className="w-full order-3 md:order-1 text-xl">
                    <h6 className="">Mon-Fri: 9:00 AM - 5:00 PM</h6>
                    <h6>Sat-Sun: Closed</h6>
                    <br />

                    <Link
                        href="https://www.google.com/maps/place/Confluence+Local+Marketing/@41.8052949,-88.2019069,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl"
                    >
                        2020 Calamos Ct, Naperville, IL 60563, United States
                    </Link>
                    <br />

                    <h6 className="text-xl mt-4">630.447.8434</h6>
                    <br />

                    <h6 className="mt-6">SOCIAL NETWORKS</h6>

                    <div className="flex space-x-3 mb-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className={iconClass} />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <AiFillYoutube className={iconClass} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className={iconClass} />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <FaGoogle className={iconClass} />
                        </a>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="md:w-1/2 flex flex-col md:space-y-2 md:mx-auto order-1 md:order-2">
                    <h6 className="whitespace-nowrap text-2xl font-semibold mb-10 ">Services</h6>
                    <Link href="/services/local-seo" className="whitespace-nowrap font-medium">Local SEO</Link>
                    <Link href="/services/technical-seo" className="whitespace-nowrap font-medium">Technical SEO</Link>
                    <Link href="/services/GEO" className="whitespace-nowrap font-medium">GEO</Link>
                    <Link href="/services/AIO" className="whitespace-nowrap font-medium">AIO</Link>
                    <Link href="/services/youtube-seo" className="whitespace-nowrap font-medium">Youtube SEO</Link>
                </div>

                {/* Column 3 */}
                <div className="md:w-1/2 flex flex-col md:space-y-2 md:mx-auto order-2 md:order-3">
                    <h6 className="text-2xl font-semibold mb-10">Useful Links</h6>
                    <Link href="/" className="whitespace-nowrap font-medium">Meet the team</Link>
                    <Link href="/" className="whitespace-nowrap font-medium">Review Us</Link>
                    <Link href="/" className="whitespace-nowrap font-medium">Contact Us</Link>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col space-y-2 order-4 md:order-3">
                    <h6 className="text-2xl font-semibold mb-10">Company</h6>
                    <p className="font-medium">Companies around the U.S.A use Confluence Local Marketing to manage their marketing, reputation, Schema, social media, and SEO.</p>
                </div>
            </div>

            {/* copyright */}
            <span className="mt-8 text-md mx-4">Copyright © 2025 Confluence Local Marketing . All rights reserved.</span>
        </div>
    )
}