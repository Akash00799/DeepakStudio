import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function SocialIcon() {
  return (
    <div
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-5 
  p-4 w-20 rounded-xl 
  bg-transparent backdrop-blur-lg 
  border-2 border-transparent 
  bg-clip-padding 
  shadow-[0_4px_15px_rgba(0,0,0,0.2),0_8px_30px_rgba(0,0,0,0.3)]
  border-gradient-to-br from-pink-500 via-purple-500 to-blue-500
  animate-border"
    >
      <a
        href="https://www.instagram.com/deepakstudiobhadra?utm_source=qr&igsh=YW5zMGozcGJ5cndt"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-pink-500 text-2xl transition-transform hover:scale-110"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/Deepakstudiobhadra/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-blue-500 text-2xl transition-transform hover:scale-110"
      >
        <FaFacebook />
      </a>
      <a
        href="https://youtube.com/@deepakstudiobhadra?si=E93fQVSpDjeDOAJB"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-red-600 text-2xl transition-transform hover:scale-110"
      >
        <FaYoutube />
      </a>
      <a
        href="https://www.justdial.com/Bhadra/Deepak-Studio-Near-Government-Hospital-Balaji-Katla-Market-Bhadra/9999P1552-1552-170116120134-I3I5_BZDET"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-blue-600 text-2xl transition-transform hover:scale-110"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
