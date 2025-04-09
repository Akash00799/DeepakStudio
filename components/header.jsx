import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="fixed top-0 w-full border-b  bg-background/80 backdrop-blur-md  z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <h1>DeepakStudio</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
