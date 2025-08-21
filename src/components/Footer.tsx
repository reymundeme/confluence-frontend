import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const iconClass = "text-white text-lg hover:text-gray-300 transition-colors";


    return (
        <div className="flex w-full bg-white px-96 py-12 flex flex-col text-black">

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
            <div className="flex w-full gap-8 py-8 border-b-2 border-[#34464b]">

                {/* Column 1 */}
                <div className="w-full text-lg">
                    <h6>Mon-Fri: 9:00 AM - 5:00 PM</h6>
                    <h6>Sat-Sun: Closed</h6>
                    <br />

                    <Link
                        href="https://www.google.com/maps/place/Confluence+Local+Marketing/@41.8052949,-88.2019069,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg"
                    >
                        2020 Calamos Ct, Naperville, IL 60563, United States
                    </Link>
                    <br />

                    <h6 className="text-lg">630.447.8434</h6>
                    <br />

                    <h6 className="text-lg mb-4">SOCIAL NETWORKS</h6>

                    <div className="flex space-x-3">
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
                <div className="w-1/4 flex flex-col space-y-2">
                    <h6 className="text-xl font-semibold mb-10">Services</h6>
                    <Link href="/services/local-seo">Local SEO</Link>
                    <Link href="/services/technical-seo">Technical SEO</Link>
                    <Link href="/services/GEO">GEO</Link>
                    <Link href="/services/AIO">AIO</Link>
                    <Link href="/services/youtube-seo">Youtube SEO</Link>
                </div>

                {/* Column 3 */}
                <div className="w-1/2 flex flex-col space-y-2 ml-12">
                    <h6 className="text-xl font-semibold mb-10">Useful Links</h6>
                    <Link href="/">Meet the team</Link>
                    <Link href="/">Review Us</Link>
                    <Link href="/">Contact Us</Link>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col space-y-2">
                    <h6 className="text-xl font-semibold mb-10">Company</h6>
                    <p>Companies around the U.S.A use Confluence Local Marketing to manage their marketing, reputation, Schema, social media, and SEO.</p>
                </div>
            </div>

            {/* copyright */}
            <span className="mt-12 text-sm">Copyright © 2025 Confluence Local Marketing . All rights reserved.</span>
        </div>
    )
}