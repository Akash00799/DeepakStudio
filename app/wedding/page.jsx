import Link from "next/link";
import Image from "next/image";
import { wedding } from "../../data/wedding";

export default function weddingPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">WEDDING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {wedding.map((album, index) => (
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
      </div>
    </section>
  );
}
