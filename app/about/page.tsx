import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BELIEFS,
  FOUNDERS,
  WORKING_PRINCIPLES,
  DIMENSIONS,
} from "@/components/data";
import {
  Reveal,
  MaskLine,
  TiltCard,
  MagneticWrap,
  ScrollExpandSection,
  ScrollPortalCard,
} from "@/components/MotionPrimitives";
import { Bot, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GROOTIT is a two-founder hybrid Creative + AI agency based in Sri Lanka, working with businesses internationally.",
};

const FOUNDER_ICONS = [Bot, Sparkles];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white bg-page-glow text-[#0B132B]">
      <Navbar />

      <main className="pt-32 md:pt-40">
        {/* Hero */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <Reveal y={12}>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
              ABOUT US
            </div>
          </Reveal>

          <h1 className="mt-3 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl">
            <MaskLine delay={0.05}>Small team.</MaskLine>
            <MaskLine delay={0.16}>
              <span className="bg-gradient-to-r from-[#0B132B] via-[#0044AA] to-[#0066FF] bg-clip-text text-transparent">
                Big creative thinking.
              </span>
            </MaskLine>
          </h1>

          <Reveal delay={0.22}>
            <p className="mt-4 text-sm text-slate-500">
              GROOTIT is a two-founder hybrid Creative + AI agency.
            </p>
          </Reveal>

          {/* Our Story */}
          <Reveal className="mt-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                  OUR STORY
                </div>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#0B132B] sm:text-3xl">
                  Where creativity and
                  <br />
                  intelligence meet.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm leading-relaxed text-slate-500">
                  GROOTIT brings together creative craft, modern technology and
                  artificial intelligence under one roof. We help businesses
                  build their brand, launch digital experiences and put
                  intelligent tools to work, with one team that understands all
                  of it.
                </p>
              </div>
            </div>
          </Reveal>

          {/* What We Believe */}
          <div className="mt-16">
            <Reveal>
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                WHAT WE BELIEVE
              </div>
            </Reveal>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {BELIEFS.map((belief, idx) => (
                <Reveal key={belief.number} delay={idx * 0.08}>
                  <TiltCard className="h-full rounded-2xl">
                    <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.02)] transition-all duration-300 hover:border-blue-200 hover:shadow-md">
                      <h3 className="text-sm font-bold text-[#0B132B]">
                        {belief.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {belief.description}
                      </p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>

          {/* The Team: Two Founders (Clean & Uncluttered) */}
          <div className="mt-16">
            <Reveal>
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                THE TEAM
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B132B] sm:text-3xl">
                Two founders, two complementary strengths.
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {FOUNDERS.map((founder, idx) => {
                const Icon = FOUNDER_ICONS[idx] || Bot;
                return (
                  <Reveal key={founder.number} delay={idx * 0.1}>
                    <TiltCard className="h-full rounded-2xl">
                      <div className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_14px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-blue-200 hover:shadow-md">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D8EAFF] to-[#8BBCFF] text-[#0066FF]">
                          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#0B132B]">
                            {founder.role}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                            {founder.focus}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Our Four Divisions */}
          <div className="mt-14">
            <Reveal>
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                OUR FOUR DIVISIONS
              </div>
            </Reveal>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DIMENSIONS.map((div, idx) => (
                <Reveal key={div.id} delay={idx * 0.06}>
                  <Link
                    href={`/services#${div.id}`}
                    className="block rounded-xl border border-slate-200/80 bg-white px-5 py-4 text-xs font-bold text-[#0B132B] shadow-2xs transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-[#EAF2FF] hover:text-[#0066FF]"
                  >
                    {div.title}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Scroll-Expanding Dark Navy Band: Working Principles */}
        <ScrollExpandSection className="relative bg-gradient-to-r from-[#07132A] via-[#0B1D3F] to-[#0E244D] py-16 text-white md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-navy-grid"
          />
          <div className="relative z-10 mx-auto grid max-w-[1200px] gap-8 px-6 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-6">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#4D94FF]">
                WORKING PRINCIPLES
              </div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                How we like to work.
              </h2>
            </Reveal>
            <ul className="space-y-3 md:col-span-6">
              {WORKING_PRINCIPLES.map((item, idx) => (
                <Reveal key={item} delay={idx * 0.08}>
                  <li className="flex items-center gap-3 text-xs text-slate-200 sm:text-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4D94FF]" />
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </ScrollExpandSection>

        {/* Our Promise Box */}
        <section className="mx-auto max-w-[1200px] px-6 pt-16">
          <Reveal>
            <div className="rounded-2xl bg-[#F2F7FF] p-8 md:p-10">
              <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                OUR PROMISE
              </div>
              <h2 className="mt-2 max-w-lg text-xl font-extrabold leading-snug text-[#0B132B] sm:text-2xl">
                Honest advice, careful work and a team that actually listens.
              </h2>
            </div>
          </Reveal>
        </section>

        {/* Scroll-Linked Rounded Dark Navy CTA Card */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <ScrollPortalCard>
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
                      className="inline-flex items-center rounded-full bg-white px-7 py-3 text-xs font-semibold text-[#0B132B] shadow-md transition-colors hover:bg-blue-50"
                    >
                      Start a Conversation
                    </Link>
                  </MagneticWrap>
                </div>
              </div>
            </div>
          </ScrollPortalCard>
        </section>
      </main>

      <Footer />
    </div>
  );
}
