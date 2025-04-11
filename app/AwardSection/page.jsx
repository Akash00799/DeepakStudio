import Image from "next/image";

export default function AwardSection() {
  return (
    <section className="w-full py-12 md:py-24 gradient  text-black select-none">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="relative w-full max-w-[500px] aspect-[16/9]">
          <Image
            src="/Awards.jpg"
            alt="Awards"
            fill
            className="object-contain rounded-lg shadow-xl transition-transform transform hover:scale-105"
          />
        </div>
        <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-center">
          Our Prestigious Awards
        </h2>
        <p className="mt-2 text-base sm:text-lg text-center max-w-xl mx-auto">
          We are proud to be recognized for our excellence and dedication to
          delivering top-notch solutions to our clients.
        </p>
      </div>
    </section>
  );
}
