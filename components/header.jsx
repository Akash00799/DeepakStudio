import Link from "next/link";
import Image from "next/image";
import websitelogo from "@/public/websitelogo.svg";
import React from "react";

function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 select-none">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={websitelogo}
            alt="logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <Link href="/">
            <h1 className="text-lg md:text-xl font-semibold">DeepakStudio</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
