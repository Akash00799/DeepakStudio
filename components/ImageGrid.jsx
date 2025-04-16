import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageGrid({ images, setLightbox, setIsPaused }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  items-center">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => {
            setLightbox({ open: true, index });
            setIsPaused(false);
          }}
        >
          <Image
            src={img.src}
            alt={img.caption || `Image ${index + 1}`}
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
        </motion.div>
      ))}
    </div>
  );
}
