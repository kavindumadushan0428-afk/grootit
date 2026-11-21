import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white bg-page-glow text-[#0B132B]">
      <Navbar />

      <main className="mx-auto flex max-w-[1200px] flex-1 flex-col items-center justify-center px-6 pt-36 pb-20 text-center">
        <span className="rounded-full bg-[#EAF2FF] px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#0066FF]">
          404 — PAGE NOT FOUND
        </span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0B132B] sm:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-3 max-w-md text-sm text-slate-500">
          Let&apos;s bring you back to GROOTIT&apos;s creative and intelligent
          solutions.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#0052CC]"
        >
          <span>Back to Home</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </main>

      <Footer />
    </div>
  );
}
