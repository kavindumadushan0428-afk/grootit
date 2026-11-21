import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WorkFilterGrid } from "@/components/Scene04Work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A selection of concepts and interactive demonstrations from GROOTIT across AI, Branding, Web, and Digital Growth.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white bg-page-glow text-[#0B132B]">
      <Navbar />

      <main className="pt-32 md:pt-40">
        {/* Header + Filter Grid (Matching Image 5) */}
        <section className="mx-auto max-w-[1200px] px-6 pb-20">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
            OUR WORK
          </div>
          <h1 className="mt-3 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B132B] sm:text-5xl">
            Ideas, thoughtfully
            <br />
            brought to life.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500">
            A selection of concepts and demonstrations. Each one is clearly
            labelled — we only mark something as a real project when it is one.
          </p>

          <div className="mt-12">
            <WorkFilterGrid />
          </div>
        </section>

        {/* Full-Width Dark Navy Collaboration Band */}
        <section className="bg-gradient-to-r from-[#07132A] via-[#0B1D3F] to-[#0E244D] py-16 text-white md:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#4D94FF]">
              COLLABORATION
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let&apos;s make the next one together.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              We work closely with the people behind each idea, so the result
              feels like yours, only sharper.
            </p>
          </div>
        </section>

        {/* Rounded Dark Navy CTA Card */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#07132A] via-[#0B1E40] to-[#102B5C] px-8 py-16 text-center text-white shadow-xl md:px-16 md:py-20">
            <h2 className="mx-auto max-w-lg text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Have something great in
              <br />
              mind?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-xs text-slate-300 sm:text-sm">
              Tell us what you&apos;re building. We&apos;ll listen first.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-xs font-semibold text-[#0B132B] shadow-sm transition-colors hover:bg-slate-100"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
