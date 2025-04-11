"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { wedding } from "../../data/wedding";
import Pagination from "@/components/pagination";

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
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 select-none"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-white">
          WEDDING
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentItems.map((album, index) => (
            <Link key={index} href={`/wedding/${album.slug}`}>
              <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={album.cover}
                  alt={album.title}
                  width={500}
                  height={500}
                  className="w-full h-60 sm:h-72 md:h-80 object-cover transform group-hover:scale-110 transition-all duration-500"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Centered Title */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-base sm:text-lg font-semibold text-center px-2">
                    {album.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {wedding.length > ITEMS_PER_PAGE && (
          <div className="mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                sectionRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
