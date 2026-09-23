"use client";

import { useState, FormEvent } from "react";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

export default function LetsMeetForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <Container
      width="fullWidth"
      className="flex-col px-4 py-6 items-center justify-center"
    >
      <Container
        width="pageWidth"
        className="relative flex-col overflow-hidden justify-center items-center rounded-[28px] px-6 py-9 lg:py-12"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 6px), radial-gradient(120% 80% at 50% 0%, #E85D2C 0%, #B22A1F 35%, #4A0F0C 70%, #0A0505 100%)",
        }}
      >
        <Typography className="m-0 text-center font-outfit text-[32px] font-bold lg:text-[56px] leading-tight text-white">
          Let&apos;s meet!
        </Typography>

        <Typography className="mx-auto mt-3 lg:mt-5 font-inter max-w-87.5 lg:max-w-130 text-center tracking-[0.5px] text-[12px]lg:text-[14px] leading-snug lg:leading-6 text-white/85">
          Prefer to schedule a specific day and time for a call back? Take
          advantage of our integrated calendar above, where you can conveniently
          schedule a virtual consultation with one of our representatives.
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="mt-6 lg:mt-12 flex-col flex lg:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="font-inter w-full rounded-2xl border-none bg-white px-5 py-3 text-[15px] text-[#24232D] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-white/60"
          />

          <button
            type="submit"
            className="font-outfit w-full lg:max-w-25 cursor-pointer rounded-full bg-[#9B1B32] py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#7f1628]"
          >
            Submit
          </button>
        </form>
      </Container>
    </Container>
  );
}
