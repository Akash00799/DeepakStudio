"use client";

import Image from "next/image";
import websitelogo from "@/public/websitelogo.svg";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { scrollToSection } from "./ui/scrollToSection";

export default function FooterClient() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-10 sm:py-12 select-none">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="md:w-1/3 text-center md:text-left">
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <Image src={websitelogo} alt="logo" width={40} height={40} />
              <h2 className="text-lg sm:text-xl font-bold">Deepak Studio</h2>
            </div>
            <p className="text-sm sm:text-base">
              Capturing timeless memories through our expert lens. Specializing
              in Wedding Shoots, Pre-Wedding, Newborn, and Toddler Photography.
              Let us tell your story with beauty and emotion.
            </p>
          </div>

          {/* Middle Section */}
          <div className="md:w-1/3 text-center">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                { label: "Our Services", section: "services-section" },
                { label: "Portfolio", section: "portfolio" },
                { label: "Contact Us", section: "contact-section" },
                { label: "Review", section: "review" },
              ].map((link, index) => (
                <li key={index}>
                  <span
                    onClick={() => scrollToSection(link.section)}
                    className="hover:underline cursor-pointer"
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="md:w-1/3 text-center md:text-right">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <div className="text-sm sm:text-base mb-4 space-y-1">
              <p>
                📍{" "}
                <a
                  href="https://www.google.com/maps/place/City+Mall,+MG+Road,+Indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-400"
                >
                  Near City Mall, MG Road, Indore, MP
                </a>
              </p>
              <p>
                📞{" "}
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </p>
              <p>
                📧{" "}
                <a
                  href="mailto:deepakstudio@gmail.com"
                  className="hover:underline"
                >
                  deepakstudio@gmail.com
                </a>
              </p>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 text-xl sm:text-2xl">
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-transform hover:scale-110"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 text-center text-xs sm:text-sm border-t border-gray-700 pt-4">
          <p>
            © {new Date().getFullYear()} Deepak Studio. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs mt-1">
            Made with ❤️ by Akash IT Solution
          </p>
        </div>
      </div>
    </footer>
  );
}
