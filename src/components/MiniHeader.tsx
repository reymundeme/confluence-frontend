"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa"; // Facebook icon
import { AiFillYoutube } from "react-icons/ai";

export default function MiniHeader() {
    const iconClass = "text-white text-lg hover:text-gray-300 transition-colors";


    return (
        <div className="hidden bg-[#267b9a] lg:flex justify-end items-end space-x-2 p-3 pr-14">
            <div className="flex items-center space-x-2">


                {/* Address */}
                <h6 className="text-lg font-bold">2020 Calamos Court Naperville, IL 60563</h6>
                <span className="text-lg font-bold">|</span>


                {/* Phone Number */}
                <h6><span className="text-lg font-bold">Phone: </span>630.447.8434</h6>


                  {/* Social Icons */}
                <div className="flex space-x-3 px-14">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className={iconClass} />
                    </a> 

                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className={iconClass} />
                    </a>

                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={iconClass} />
                    </a>

                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className={iconClass} />
                    </a>

                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <AiFillYoutube className={iconClass} />
                    </a>

                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <FaGoogle className={iconClass} />
                    </a>
                </div>
            </div>
        </div>
    );
}