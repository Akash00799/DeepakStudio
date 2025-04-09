import Image from "next/image";

export default function AlbumHero({ cover, title }) {
  if (!cover) return null;
  return (
    <div className="relative w-full h-96 mb-10 rounded-lg overflow-hidden">
      <Image
        src={cover}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  );
}
