import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import websitelogo from "@/public/websitelogo.svg";
import Header from "@/components/header";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deepak-studio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main className="min-h-screen">{children}</main>

          <footer className="bg-[#111827] text-gray-300 py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between gap-10">
                {/* About Section */}
                <div className="md:w-1/3 text-center md:text-left">
                  <div className="flex items-center gap-4 mb-2 justify-center md:justify-start">
                    <Image src={websitelogo} alt="logo" />
                    <h2 className="text-xl font-bold">Deepak Studio</h2>
                  </div>
                  <p className="text-sm">
                    Capturing timeless memories through our expert lens.
                    Specializing in Wedding Shoots, Pre-Wedding, Newborn, and
                    Toddler Photography. Let us tell your story with beauty and
                    emotion.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="md:w-1/3 text-center">
                  <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#services" className="hover:underline">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" className="hover:underline">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:underline">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#testimonials" className="hover:underline">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Info & Social Media */}
                <div className="md:w-1/3 text-center md:text-right">
                  <h2 className="text-xl font-bold mb-4">Get in Touch</h2>

                  {/* Address, Phone & Email */}
                  <div className="text-sm mb-4 space-y-1">
                    <p>📍 Near City Mall, MG Road, Indore, MP</p>
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

                  {/* Social Icons */}
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

              {/* Bottom Line */}
              <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
                <p>
                  © {new Date().getFullYear()} Deepak Studio. All rights
                  reserved.
                </p>
                <p className="text-xs mt-1">Made with ❤️ by Akash</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
