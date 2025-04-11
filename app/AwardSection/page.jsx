import Image from "next/image";

export default function AwardSection() {
  return (
    <section className="w-full py-12 md:py-24 gradient rounded-lg text-black select-none">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-[500px]">
          <Image
            src="/Awards.jpg"
            alt="logo"
            layout="intrinsic"
            width={500}
            height={60}
            className="w-full h-auto object-contain rounded-lg shadow-xl transition-transform transform hover:scale-105"
          />
        </div>
        <h2 className="mt-6 text-3xl font-bold text-center">
          Our Prestigious Awards
        </h2>
        <p className="mt-2 text-lg text-center max-w-xl mx-auto">
          We are proud to be recognized for our excellence and dedication to
          delivering top-notch solutions to our clients.
        </p>
      </div>
    </section>
  );
}
