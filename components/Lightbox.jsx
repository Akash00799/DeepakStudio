import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle, XCircle } from "lucide-react";
import { useRef } from "react";

export default function Lightbox({
  album,
  lightbox,
  setLightbox,
  setIsPaused,
  slideshowIntervalRef,
}) {
  const modalRef = useRef();
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

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
        onClick={handleBackdropClick}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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

          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <ArrowLeftCircle
              size={40}
              color="white"
              className="cursor-pointer hover:scale-110"
              onClick={() => {
                handlePrev();
                setIsPaused(true);
              }}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <ArrowRightCircle
              size={40}
              color="white"
              className="cursor-pointer hover:scale-110"
              onClick={() => {
                handleNext();
                setIsPaused(true);
              }}
            />
          </div>
          <div className="absolute top-4 right-4">
            <XCircle
              size={36}
              color="white"
              className="cursor-pointer hover:scale-110"
              onClick={() => {
                setLightbox({ open: false, index: 0 });
                clearInterval(slideshowIntervalRef.current);
              }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
