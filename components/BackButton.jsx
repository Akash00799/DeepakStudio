import Link from "next/link";

export default function BackButton() {
  return (
    <div className="mt-16 text-center">
      <Link
        href="/"
        className="inline-block text-sm px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
      >
        ← Back to Pre-wedding
      </Link>
    </div>
  );
}
