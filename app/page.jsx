"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import HeroSection from "@/components/hero";
import PREWEDDING from "@/app/preWedding/page";
import WEDDING from "@/app/wedding/page";
import NEWBORNTODDLER from "@/app/newBornToddler/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function page() {
  return (
    <div>
      <div className="grid-background"></div>

      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            "Discover Exceptional Services with Deepak Studio – Where Creativity
            Meets Perfection!"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Link key={index} href={`/${feature.slug}`}>
                <Card className="border-2 hover:border-primary transition-colors duration-300 cursor-pointer">
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Social Icons */}
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
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-pink-500 text-2xl transition-transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-blue-500 text-2xl transition-transform hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/your-channel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-red-600 text-2xl transition-transform hover:scale-110"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-blue-600 text-2xl transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>

      <section id="services-section">
        <PREWEDDING />
      </section>

      <WEDDING />
      <NEWBORNTODDLER />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            What Our Users Say
          </h2>

          <div className="relative max-w-6xl mx-auto">
            {/* Arrows Positioned Properly */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <div className="swiper-button-prev text-primary" />
            </div>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <div className="swiper-button-next text-primary" />
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                el: ".custom-swiper-pagination", // 👈 this makes it custom
              }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonial.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card className="bg-background h-full">
                    <CardContent className="pt-6 h-full">
                      <div className="flex flex-col space-y-4 h-full justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                              width={40}
                              height={40}
                              src={item.image}
                              alt={item.author}
                              className="rounded-full object-cover border-2 border-primary/20"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{item.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.role}
                            </p>
                            <p className="text-sm text-primary">
                              {item.company}
                            </p>
                          </div>
                        </div>
                        <blockquote>
                          <p className="text-muted-foreground italic relative mt-4">
                            <span className="text-3xl text-primary absolute -top-4 -left-2">
                              &quot;
                            </span>
                            {item.quote}
                            <span className="text-3xl text-primary absolute -bottom-4">
                              &quot;
                            </span>
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 👇 Pagination dots outside swiper 👇 */}
            <div className="custom-swiper-pagination flex justify-center mt-8" />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">300+</h3>
              <p className="text-muted-foreground">Weddings Captured</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-muted-foreground">Film Projects Completed</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 gradient rounded-lg text-black">
        <div className="container mx-auto flex flex-col items-center">
          <div className="relative w-full max-w-[500px]">
            <Image
              src="/Awards.jpg"
              alt="logo"
              layout="intrinsic"
              width={500}
              height={60}
              className="w-full h-auto object-contain rounded-lg shadow-xl transition-transform transform hover:scale-105"
            />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-center">
            Our Prestigious Awards
          </h2>
          <p className="mt-2 text-lg text-center max-w-xl mx-auto">
            We are proud to be recognized for our excellence and dedication to
            delivering top-notch solutions to our clients.
          </p>
        </div>
      </section>

      <section
        id="contact-section"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 text-black"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Get In Touch With Us
          </h2>
          <form
            className="max-w-2xl mx-auto space-y-6 bg-background text-white p-6 rounded-xl shadow-md"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                required
                placeholder="Enter your message....."
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/60 cursor-pointer transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
