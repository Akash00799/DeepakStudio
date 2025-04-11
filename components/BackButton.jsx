import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ label = "Go Back" }) {
  return (
    <div className="mt-16 text-center">
      <Link
        href="/"
        className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md bg-white/10 border border-white/20 rounded-full overflow-hidden shadow-lg hover:shadow-silver transition-all duration-300 group"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
        <ArrowLeft className="w-4 h-4 text-slate-200 relative z-10 group-hover:-translate-x-1 transition-all duration-300" />
        <span className="relative z-10">Back to {label}</span>
      </Link>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .group-hover\\:animate-shine {
          animation: shine 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
