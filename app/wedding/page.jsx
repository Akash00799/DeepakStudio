"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { wedding } from "../../data/wedding";
import Pagination from "@/components/pagination"; // Make sure the path is correct

const ITEMS_PER_PAGE = 6;

export default function WeddingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(wedding.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = wedding.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">WEDDING</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentItems.map((album, index) => (
            <Link key={index} href={`wedding/${album.slug}`}>
              <div className="relative cursor-pointer">
                <Image
                  src={album.cover}
                  alt={album.title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
                <p className="text-center mt-2 font-semibold">{album.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Only show pagination if more than 6 images */}
        {wedding.length > ITEMS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              sectionRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        )}
      </div>
    </section>
  );
}
