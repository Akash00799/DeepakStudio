"use client";

import { useState } from "react";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import { toddler } from "../../../data/toddler";
import { useParams } from "next/navigation";
import AlbumHero from "@/components/AlbumHero";
import AlbumTags from "@/components/AlbumTags";
import AlbumDescription from "@/components/AlbumDescription";
import ImageGrid from "@/components/ImageGrid";
import Lightbox from "@/components/Lightbox";
import BackButton from "@/components/BackButton";

export default function PreWeddingDetailPage() {
  const { slug } = useParams();
  const album = toddler.find((a) => a.slug === slug);

  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  if (!album) {
    return (
      <div className="text-center py-20 text-white text-lg sm:text-xl">
        Album not found.
      </div>
    );
  }

  return (
    <SmoothScrollWrapper>
      <section className="w-full py-10 sm:py-12 md:py-20 bg-[#111] text-white select-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AlbumHero cover={album.cover} title={album.title} />

          <div className="mt-4 sm:mt-6">
            <AlbumTags tags={album.tags} />
          </div>

          <div className="mt-4 sm:mt-6">
            <AlbumDescription description={album.description} />
          </div>

          <p className="text-xs sm:text-sm text-gray-400 mt-6 mb-4 sm:mb-6">
            Showing {album.images.length} beautiful moments
          </p>

          <ImageGrid images={album.images} setLightbox={setLightbox} />

          <div className="mt-6 sm:mt-10">
            <BackButton label={album.title} />
          </div>

          {lightbox.open && (
            <Lightbox
              album={album}
              lightbox={lightbox}
              setLightbox={setLightbox}
            />
          )}
        </div>
      </section>
    </SmoothScrollWrapper>
  );
}
