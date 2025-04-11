"use client";

import { useState, useEffect, useRef } from "react";
import { marriageVideos } from "@/data/marriageVideos";
import Pagination from "@/components/pagination";

const ITEMS_PER_PAGE = 6;

export default function MarriageVideosPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const totalPages = Math.ceil(marriageVideos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = marriageVideos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 select-none"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-white">
          MARRIAGE VIDEOS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentItems.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(video)}
              className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-lg font-semibold text-center px-2">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {marriageVideos.length > ITEMS_PER_PAGE && (
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

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white text-4xl font-bold  cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
