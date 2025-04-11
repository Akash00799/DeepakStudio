"use client";

import Image from "next/image";
import websitelogo from "@/public/websitelogo.svg";
import Link from "next/link";
import { Button } from "./ui/button";
import { scrollToSection } from "./ui/scrollToSection";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function FooterClient() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-12 select-none">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-1/3 text-center md:text-left">
            <div className="flex items-center gap-4 mb-2 justify-center md:justify-start">
              <Image src={websitelogo} alt="logo" />
              <h2 className="text-xl font-bold">Deepak Studio</h2>
            </div>
            <p className="text-sm">
              Capturing timeless memories through our expert lens. Specializing
              in Wedding Shoots, Pre-Wedding, Newborn, and Toddler Photography.
              Let us tell your story with beauty and emotion.
            </p>
          </div>

          <div className="md:w-1/3 text-center">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <span
                  onClick={() => scrollToSection("services-section")}
                  className="hover:underline cursor-pointer"
                >
                  Our Services
                </span>
              </li>

              <li>
                <span
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:underline cursor-pointer"
                >
                  Portfolio
                </span>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection("contact-section")}
                  className="hover:underline cursor-pointer"
                >
                  Contact Us
                </span>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection("review")}
                  className="hover:underline cursor-pointer"
                >
                  Review
                </span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 text-center md:text-right">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <div className="text-sm mb-4 space-y-1">
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
                  href="mailto:deepakstudio@email.com"
                  className="hover:underline"
                >
                  deepakstudio@email.com
                </a>
              </p>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 text-2xl">
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

        <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
          <p>
            © {new Date().getFullYear()} Deepak Studio. All rights reserved.
          </p>
          <p className="text-xs mt-1">Made with ❤️ by Akash</p>
        </div>
      </div>
    </footer>
  );
}
