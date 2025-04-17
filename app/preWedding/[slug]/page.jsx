"use client";

import { useState } from "react";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import { preWedding } from "../../../data/preWedding";
import { useParams } from "next/navigation";
import AlbumHero from "@/components/AlbumHero";
import AlbumTags from "@/components/AlbumTags";
import AlbumDescription from "@/components/AlbumDescription";
import ImageGrid from "@/components/ImageGrid";
// import Lightbox from "@/components/Lightbox";
import BackButton from "@/components/BackButton";

export default function PreWeddingDetailPage() {
  const { slug } = useParams();
  const album = preWedding.find((a) => a.slug === slug);

  // const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  if (!album) return <div className="text-center py-20">Album not found.</div>;

  return (
    <SmoothScrollWrapper>
      <section className="w-full py-10 sm:py-12 md:py-20 bg-[#111] text-white select-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <AlbumHero cover={album.cover} title={album.title} />
          <AlbumTags tags={album.tags} />
          <AlbumDescription description={album.description} />

          <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
            Showing {album.images.length} beautiful moments
          </p>

          <ImageGrid images={album.images} />

          <div className="mt-6 sm:mt-10">
            <BackButton label={album.title} />
          </div>

          {/* {lightbox.open && (
            <Lightbox
              album={album}
              lightbox={lightbox}
              setLightbox={setLightbox}
            />
          )} */}
        </div>
      </section>
    </SmoothScrollWrapper>
  );
}
