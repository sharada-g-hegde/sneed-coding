"use client";

import { useEffect, useRef, useState } from "react";

const OPTIONS = ["Investor", "Adviser", "SI"];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

export default function ClassDropdown({
  options = OPTIONS,
  placeholder = "Investor",
  onChange,
}: {
  options?: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // close when clicking outside or pressing Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent | TouchEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    // fixed-height wrapper so the page doesn't jump when the panel opens
    <div
      ref={wrapperRef}
      className="relative h-12 w-full w-[13rem] mt-1.5 sm:w-[16.5625rem]"
    >
      <div
        className={`absolute inset-x-0 top-0 z-50 overflow-hidden rounded-2xl bg-gray-300/80 text-slate-500 backdrop-blur-md ${
          open ? "shadow-lg" : ""
        }`}
      >
        {/* Header row (always visible) */}
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`flex h-10 w-full cursor-pointer font-albertSans items-center justify-between px-5 text-left text-[16px] ${
            open ? "border-b border-slate-600" : ""
          }`}
        >
          {/* text hidden while open, like in your design */}
          <span className={open ? "invisible" : ""}>
            {selected ?? placeholder}
          </span>
          <Chevron
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Options */}
        {open && (
          <div role="listbox" className="flex flex-col py-2">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selected === option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                  onChange?.(option);
                }}
                className="w-full cursor-pointer px-5 py-4 text-left text-[16px] transition-colors text-gray-700/20 hover:bg-white/30"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
