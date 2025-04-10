"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 bg-background overflow-hidden">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            Capturing Moments
            <br />
            Creating Memories that last forever.
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            From dreamy pre-wedding shoots to unforgettable wedding moments and
            cherished family portraits - we turn your special moments into
            timeless treasures.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Button
            size="lg"
            className="px-8 cursor-pointer"
            onClick={() => {
              const section = document.getElementById("portfolio");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </Button>

          <Button
            size="lg"
            className="px-8 cursor-pointer"
            variant="outline"
            onClick={() => {
              const formSection = document.getElementById("contact-section");
              formSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </Button>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="https://www.taj.studio/wp-content/uploads/2018/05/053.jpg"
              width={1280}
              height={720}
              alt="Banner sensai"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
