import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DIMENSIONS } from "@/components/data";
import {
  Reveal,
  MaskLine,
  TiltCard,
  MagneticWrap,
  ScrollTimelineLine,
} from "@/components/MotionPrimitives";
import { buildWhatsAppUrl } from "@/lib/leads";
import { Bot, Sparkles, Layout, TrendingUp, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore GROOTIT's four focused divisions: AI & Automation, Creative & Branding, Web & Digital Experiences, and Digital Growth.",
};

const DIVISION_ICONS = {
  ai: Bot,
  brand: Sparkles,
  digital: Layout,
  growth: TrendingUp,
};

const COLLABORATION_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "We start with your goals, audience and context.",
  },
  {
    num: "02",
    title: "Collaborate",
    desc: "You stay involved at every important decision.",
  },
  {
    num: "03",
    title: "Deliver",
    desc: "We build and hand over work you can use and maintain.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white bg-page-glow text-[#0B132B]">
      <Navbar />

      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <Reveal y={14}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/85 px-3.5 py-1 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0066FF]" />
              <span>SERVICES</span>
            </div>
          </Reveal>

          <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl">
            <MaskLine delay={0.05}>Everything you need to</MaskLine>
            <MaskLine delay={0.16}>
              <span className="bg-gradient-to-r from-[#0B132B] via-[#0044AA] to-[#0066FF] bg-clip-text text-transparent">
                bring ideas to life.
              </span>
            </MaskLine>
          </h1>

          <Reveal delay={0.22}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500">
              We combine creativity, intelligent technology, digital experiences
              and growth strategy to help businesses create, build and grow.
            </p>
          </Reveal>

          {/* 4 Quick Division Jump Pills */}
          <Reveal delay={0.28} className="mt-8 flex flex-wrap gap-2.5">
            {DIMENSIONS.map((div) => (
              <a
                key={div.id}
                href={`#${div.id}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-[#EAF2FF] hover:text-[#0066FF]"
              >
                {div.title}
              </a>
            ))}
          </Reveal>

          {/* 4 Summary Cards Row with 3D Tilt */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIMENSIONS.map((div, idx) => {
              const Icon = DIVISION_ICONS[div.visualType];
              return (
                <Reveal key={div.id} delay={idx * 0.07}>
                  <TiltCard className="h-full rounded-2xl">
                    <a
                      href={`#${div.id}`}
                      className="group block h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.02)] transition-all hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#0066FF] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-sm font-bold text-[#0B132B] transition-colors group-hover:text-[#0066FF]">
                        {div.title}
                      </h2>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                        {div.tagline}
                      </p>
                    </a>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>

          {/* 4 Large Detailed Division Cards */}
          <div className="mt-10 space-y-6">
            {DIMENSIONS.map((div) => (
              <Reveal key={div.id}>
                <article
                  id={div.id}
                  className="scroll-mt-28 grid gap-8 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_2px_14px_rgba(15,23,42,0.03)] transition-colors hover:border-blue-200 md:grid-cols-12 md:p-10"
                >
                  <div className="flex flex-col justify-between md:col-span-5">
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#0B132B]">
                        {div.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate-500">
                        {div.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-2.5">
                      <Link
                        href={`/contact?division=${div.id}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#0066FF] px-4 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-[#0052CC]"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                      <a
                        href={buildWhatsAppUrl({ division: div.title })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/70 px-4 py-2 text-[11px] font-semibold text-emerald-900 transition-colors hover:bg-emerald-500 hover:text-white"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 md:col-span-7">
                    {div.services.map((service) => (
                      <div
                        key={service}
                        className="group/item flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-xs font-medium text-[#0B132B] transition-all duration-200 hover:translate-x-1 hover:border-blue-200 hover:bg-[#EAF2FF]/60"
                      >
                        <Link
                          href={`/contact?division=${div.id}&service=${encodeURIComponent(
                            service
                          )}`}
                          className="flex flex-1 items-center gap-2.5"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF] transition-transform group-hover/item:scale-150" />
                          <span>{service}</span>
                        </Link>
                        <a
                          href={buildWhatsAppUrl({
                            division: div.title,
                            service,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`WhatsApp about ${service}`}
                          aria-label={`WhatsApp inquiry for ${service}`}
                          className="rounded-full p-1 text-slate-400 transition-colors hover:bg-emerald-500 hover:text-white"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Soft Blue Capability Notice Banner */}
          <Reveal className="mt-8">
            <div className="rounded-2xl border border-blue-100 bg-[#EAF2FF]/80 px-6 py-4 text-xs leading-relaxed text-slate-700">
              <strong className="font-semibold text-[#0B132B]">
                These are our proposed service categories,
              </strong>{" "}
              including capabilities we are still building out. If you are
              interested in an advanced or emerging capability, send an inquiry
              and we will tell you honestly what we can deliver today.{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#0066FF] underline underline-offset-2"
              >
                Send an inquiry
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Full-Width Dark Navy Band: One team, joined-up work */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#07132A] via-[#0B1D3F] to-[#0E244D] py-16 text-white md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-navy-grid"
          />
          <Reveal className="relative z-10 mx-auto grid max-w-[1200px] gap-8 px-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#4D94FF]">
                FEATURED CAPABILITY
              </div>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                One team, joined-up
                <br />
                work.
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-sm leading-relaxed text-slate-300">
                Because creative, web, automation and growth sit under one roof,
                your brand, website and workflows are designed together rather
                than stitched together afterwards.
              </p>
            </div>
          </Reveal>
        </section>

        {/* How We Collaborate (3 Steps with Scroll Timeline) */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <Reveal>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
              WORKING TOGETHER
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
              How we collaborate.
            </h2>
          </Reveal>

          <div className="relative mt-10 grid gap-8 md:grid-cols-3">
            <ScrollTimelineLine className="md:block" />
            {COLLABORATION_STEPS.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.1} className="group relative">
                <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF2FF] text-xs font-bold text-[#0066FF] ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white">
                  {step.num}
                </span>
                <h3 className="mt-4 text-base font-bold text-[#0B132B]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Rounded Dark Navy CTA Card */}
        <section className="mx-auto max-w-[1200px] px-6 pb-20">
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
