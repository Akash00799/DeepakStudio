"use client";

import { useState, useRef, useEffect, use } from "react";
import { toddler } from "../../../data/toddler";
import { useParams } from "next/navigation";
import AlbumHero from "@/components/AlbumHero";
import AlbumTags from "@/components/AlbumTags";
import AlbumDescription from "@/components/AlbumDescription";
import ImageGrid from "@/components/ImageGrid";
import Lightbox from "@/components/Lightbox";
import Link from "next/link";

export default function PreWeddingDetailPage() {
  const { slug } = useParams();
  const album = toddler.find((a) => a.slug === slug);

  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const slideshowIntervalRef = useRef(null);

  useEffect(() => {
    if (lightbox.open && !isPaused) {
      slideshowIntervalRef.current = setInterval(() => {
        setLightbox((prev) => ({
          ...prev,
          index: (prev.index + 1) % album.images.length,
        }));
      }, 3000);
    }
    return () => clearInterval(slideshowIntervalRef.current);
  }, [lightbox.open, isPaused]);

  if (!album) return <div className="text-center py-20">Album not found.</div>;

  return (
    <section className="w-full py-12 md:py-20 bg-[#111] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <AlbumHero cover={album.cover} title={album.title} />
        <AlbumTags tags={album.tags} />
        <AlbumDescription description={album.description} />

        <p className="text-sm text-gray-400 mb-6">
          Showing {album.images.length} beautiful moments
        </p>

        <ImageGrid
          images={album.images}
          setLightbox={setLightbox}
          setIsPaused={setIsPaused}
        />

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block text-sm px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
          >
            ← Back to Pre-wedding
          </Link>
        </div>

        {lightbox.open && (
          <Lightbox
            album={album}
            lightbox={lightbox}
            setLightbox={setLightbox}
            setIsPaused={setIsPaused}
            slideshowIntervalRef={slideshowIntervalRef}
          />
        )}
      </div>
    </section>
  );
}
