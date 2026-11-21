import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DIMENSIONS } from "@/components/data";
import { Bot, Sparkles, Layout, TrendingUp } from "lucide-react";

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
        {/* Hero Section (Matching Image 4) */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
            SERVICES
          </div>
          <h1 className="mt-3 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B132B] sm:text-5xl">
            Everything you need to
            <br />
            bring ideas to life.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500">
            We combine creativity, intelligent technology, digital experiences
            and growth strategy to help businesses create, build and grow.
          </p>

          {/* 4 Quick Division Jump Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {DIMENSIONS.map((div) => (
              <a
                key={div.id}
                href={`#${div.id}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-2xs transition-colors hover:border-blue-200 hover:bg-[#EAF2FF] hover:text-[#0066FF]"
              >
                {div.title}
              </a>
            ))}
          </div>

          {/* 4 Summary Cards Row */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIMENSIONS.map((div) => {
              const Icon = DIVISION_ICONS[div.visualType];
              return (
                <a
                  key={div.id}
                  href={`#${div.id}`}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.02)] transition-all hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#0066FF]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-sm font-bold text-[#0B132B]">
                    {div.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {div.tagline}
                  </p>
                </a>
              );
            })}
          </div>

          {/* 4 Large Detailed Division Cards */}
          <div className="mt-10 space-y-6">
            {DIMENSIONS.map((div) => (
              <article
                key={div.id}
                id={div.id}
                className="scroll-mt-28 grid gap-8 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_2px_12px_rgba(15,23,42,0.02)] md:grid-cols-12 md:p-10"
              >
                <div className="md:col-span-5">
                  <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                    DIVISION {div.number}
                  </div>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#0B132B]">
                    {div.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    {div.description}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 md:col-span-7">
                  {div.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-xs font-medium text-[#0B132B]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF]" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Soft Blue Capability Notice Banner */}
          <div className="mt-8 rounded-2xl bg-[#EAF2FF]/80 px-6 py-4 text-xs leading-relaxed text-slate-700">
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
        </section>

        {/* Full-Width Dark Navy Band: One team, joined-up work */}
        <section className="bg-gradient-to-r from-[#07132A] via-[#0B1D3F] to-[#0E244D] py-16 text-white md:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-6 md:grid-cols-12 md:items-center">
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
          </div>
        </section>

        {/* How We Collaborate (3 Steps) */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
            WORKING TOGETHER
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
            How we collaborate.
          </h2>

          <div className="relative mt-10 grid gap-8 md:grid-cols-3">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-4 hidden h-[1px] bg-slate-200 md:block"
            />
            {COLLABORATION_STEPS.map((step) => (
              <div key={step.num} className="relative">
                <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF2FF] text-xs font-bold text-[#0066FF] ring-4 ring-white">
                  {step.num}
                </span>
                <h3 className="mt-4 text-base font-bold text-[#0B132B]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Rounded Dark Navy CTA Card */}
        <section className="mx-auto max-w-[1200px] px-6 pb-20">
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
