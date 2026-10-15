"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { cn } from "@/utils";
import Container from "@/components/elements/container";

type PaginationProps = {
  page: number; // current page, starts at 1
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

const BASE =
  "flex size-9 cursor-pointer items-center justify-center rounded-full font-albertSans text-[15px] text-[#5a7388] transition-colors duration-200 hover:bg-[#e8ecef]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b0a3]";

export default function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Container
      component="nav"
      aria-label="Pagination"
      className={cn("items-center gap-1", className)}
    >
      {/* « and ‹ appear once you're past page 1 */}
      {page > 1 && (
        <>
          <button
            type="button"
            aria-label="First page"
            onClick={() => onPageChange(1)}
            className={BASE}
          >
            <ChevronsLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Previous page"
            onClick={() => onPageChange(page - 1)}
            className={BASE}
          >
            <ChevronLeft size={16} />
          </button>
        </>
      )}

      {pages.map((p) => {
        const isActive = p === page;
        return (
          <button
            key={p}
            type="button"
            aria-label={`Page ${p}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => onPageChange(p)}
            className={cn(BASE, isActive && "bg-[#e8ecef] text-[#2F3B47]")}
          >
            {p}
          </button>
        );
      })}

      {/* › and » disappear on the last page */}
      {page < totalPages && (
        <>
          <button
            type="button"
            aria-label="Next page"
            onClick={() => onPageChange(page + 1)}
            className={BASE}
          >
            <ChevronRight size={16} />
          </button>
          <button
            type="button"
            aria-label="Last page"
            onClick={() => onPageChange(totalPages)}
            className={BASE}
          >
            <ChevronsRight size={16} />
          </button>
        </>
      )}
    </Container>
  );
}
