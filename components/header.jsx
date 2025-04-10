import Link from "next/link";
import Image from "next/image";
import websitelogo from "@/public/websitelogo.svg";
import React from "react";

function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md  z-50 supports-[backdrop-filter]:bg-background/60 flex items-center">
      <nav className="container mx-auto px-4  flex gap-4 items-center">
        <Image src={websitelogo} alt="logo" />

        <Link href="/">
          <h1>DeepakStudio</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
