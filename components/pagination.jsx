"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const MAX_VISIBLE = 5;

  const getVisiblePages = () => {
    if (totalPages <= MAX_VISIBLE) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    const start = Math.max(currentPage - 2, 1);
    const end = Math.min(start + MAX_VISIBLE - 1, totalPages);

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-200 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
        title="Previous"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {currentPage > 3 && totalPages > MAX_VISIBLE && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="w-9 h-9 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:ring-2 hover:ring-gray-300 transition-all"
          >
            1
          </button>
          <span className="px-1 text-gray-400 text-lg font-bold">...</span>
        </>
      )}

      {getVisiblePages().map((pageNum) => {
        const isActive = currentPage === pageNum;

        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`w-10 h-10 rounded-full text-sm font-semibold border transition-all duration-300
              ${
                isActive
                  ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg ring-2 ring-gray-500 scale-110"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:ring-2 hover:ring-gray-300 border-gray-300"
              }`}
          >
            {pageNum}
          </button>
        );
      })}

      {currentPage < totalPages - 2 && totalPages > MAX_VISIBLE && (
        <>
          <span className="px-1 text-gray-400 text-lg font-bold">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="w-9 h-9 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:ring-2 hover:ring-gray-300 transition-all"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-200 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
        title="Next"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
