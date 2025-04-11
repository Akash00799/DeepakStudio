"use client";

import Image from "next/image";
import websitelogo from "@/public/websitelogo.svg";
import { scrollToSection } from "./ui/scrollToSection";

export default function FooterClient() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-10 sm:py-12 select-none">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
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

          <div className="md:w-1/3 text-center md:text-right">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <div className="text-sm sm:text-base mb-4 space-y-1">
              <p>
                📍{" "}
                <a
                  href="https://maps.app.goo.gl/8Fiw4zeFPNwKTvKy9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-400"
                >
                  WTP Jawahar Lal Nehru Marg, D-Block, Malviya Nagar, Jaipur,
                  Rajasthan 302017
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
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=deepakstudio@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  deepakstudio@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-xl overflow-hidden border border-gray-700 shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5888726013172!2d75.8020938748929!3d26.853025762653996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d0abb464cf%3A0x43440aa416c9fdaf!2sWorld%20Trade%20Park!5e0!3m2!1sen!2sin!4v1744412150818!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

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
