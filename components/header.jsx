import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 w-full border-b  bg-background/80 backdrop-blur-md  z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <h1>DeepakStudio</h1>
        </Link>

        <div>
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button>
                <LayoutDashboard />
                <span>Industry Insights</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button varient="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
