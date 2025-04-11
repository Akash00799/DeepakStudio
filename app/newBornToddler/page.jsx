import Link from "next/link";
import Image from "next/image";
import { toddler } from "../../data/toddler";

export default function newBornToddlerPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 select-none">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          NEWBORN/TODDLER
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {toddler.map((album, index) => (
            <Link key={index} href={`newBornToddler/${album.slug}`}>
              <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={album.cover}
                  alt={album.title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-all duration-500"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Centered Title */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-lg font-semibold">
                    {album.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
