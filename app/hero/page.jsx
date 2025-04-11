"use client";

import { Button } from "../../components/ui/button";
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
    <section className="w-full pt-36 md:pt-48 pb-10 bg-background overflow-hidden select-none">
      <div className="space-y-6 text-center px-4 sm:px-6">
        <div className="space-y-6 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-title">
            Capturing Moments
            <br />
            Creating Memories that last forever.
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl">
            From dreamy pre-wedding shoots to unforgettable wedding moments and
            cherished family portraits - we turn your special moments into
            timeless treasures.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0">
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
              className="w-full max-w-[90%] sm:max-w-2xl rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
