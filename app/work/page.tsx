import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WorkFilterGrid } from "@/components/Scene04Work";
import { Reveal, MaskLine, MagneticWrap } from "@/components/MotionPrimitives";
import { ArrowRight } from "lucide-react";

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
        {/* Header + Filter Grid */}
        <section className="mx-auto max-w-[1200px] px-6 pb-20">
          <Reveal y={14}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/85 px-3.5 py-1 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0066FF]" />
              <span>OUR WORK</span>
            </div>
          </Reveal>

          <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl">
            <MaskLine delay={0.05}>Ideas, thoughtfully</MaskLine>
            <MaskLine delay={0.16}>
              <span className="bg-gradient-to-r from-[#0B132B] via-[#0044AA] to-[#0066FF] bg-clip-text text-transparent">
                brought to life.
              </span>
            </MaskLine>
          </h1>

          <Reveal delay={0.22}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500">
              A selection of concepts and demonstrations. Each one is clearly
              labelled — we only mark something as a real project when it is
              one.
            </p>
          </Reveal>

          <div className="mt-12">
            <WorkFilterGrid />
          </div>
        </section>

        {/* Full-Width Dark Navy Collaboration Band */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#07132A] via-[#0B1D3F] to-[#0E244D] py-16 text-white md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-navy-grid"
          />
          <Reveal className="relative z-10 mx-auto max-w-[1200px] px-6">
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
          </Reveal>
        </section>

        {/* Rounded Dark Navy CTA Card */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07132A] via-[#0B1E40] to-[#102B5C] px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-navy-grid"
              />
              <div className="relative z-10">
                <h2 className="mx-auto max-w-lg text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Have something great in
                  <br />
                  mind?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-xs text-slate-300 sm:text-sm">
                  Tell us what you&apos;re building. We&apos;ll listen first.
                </p>
                <div className="mt-8">
                  <MagneticWrap>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-semibold text-[#0B132B] shadow-md transition-colors hover:bg-blue-50"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </MagneticWrap>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
