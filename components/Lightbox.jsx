"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle, XCircle } from "lucide-react";

export default function Lightbox({ album, lightbox, setLightbox }) {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentImage = album.images[lightbox.index];

  const handleNext = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % album.images.length,
    }));

  const handlePrev = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + album.images.length) % album.images.length,
    }));

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setLightbox({ open: false, index: 0 });
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
        onClick={handleBackdropClick}
      >
        <div ref={modalRef} className="relative max-w-5xl mx-auto p-4">
          <motion.div
            key={currentImage.src}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.caption}
              width={1000}
              height={800}
              className="rounded-lg shadow-xl max-h-[80vh] object-contain mx-auto"
            />
            {currentImage.caption && (
              <p className="text-white text-center mt-4 text-lg">
                {currentImage.caption}
              </p>
            )}
          </motion.div>

          <ArrowLeftCircle
            size={40}
            color="white"
            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110"
            onClick={handlePrev}
          />
          <ArrowRightCircle
            size={40}
            color="white"
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110"
            onClick={handleNext}
          />
          <XCircle
            size={36}
            color="white"
            className="absolute right-4 top-4 cursor-pointer hover:scale-110"
            onClick={() => setLightbox({ open: false, index: 0 })}
          />
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
