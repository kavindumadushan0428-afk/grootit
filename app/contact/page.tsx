import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildWhatsAppUrl, LEAD_CONFIG } from "@/lib/leads";
import {
  Reveal,
  MaskLine,
  MagneticWrap,
  ScrollTimelineLine,
  ScrollPortalCard,
} from "@/components/MotionPrimitives";
import { ExternalLink } from "lucide-react";
import {
  FacebookBrandIcon,
  InstagramBrandIcon,
  WhatsAppBrandIcon,
  GmailBrandIcon,
} from "@/components/BrandIcons";

import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Contact: Start a Project via WhatsApp or Email",
  description:
    "Talk to GROOTIT about your website, brand or AI project. Message us on WhatsApp, email grootit04@gmail.com or follow us on Facebook and Instagram.",
  path: "/contact",
});

const NEXT_STEPS = [
  {
    num: "01",
    title: "We listen",
    desc: "We read your inquiry and learn your goals.",
  },
  {
    num: "02",
    title: "We discuss",
    desc: "We talk through ideas, scope and fit.",
  },
  {
    num: "03",
    title: "We propose",
    desc: "You receive a clear plan and proposal.",
  },
  {
    num: "04",
    title: "We begin",
    desc: "We start building together.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white bg-page-glow text-[#0B132B]">
      <Navbar />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <main className="pt-32 md:pt-40">
        {/* Hero & Direct Contact Channels */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <Reveal y={12}>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
              CONTACT
            </div>
          </Reveal>

          <h1 className="mt-3 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl">
            <MaskLine delay={0.05}>Have something</MaskLine>
            <MaskLine delay={0.16}>
              <span className="bg-gradient-to-r from-[#0B132B] via-[#0044AA] to-[#0066FF] bg-clip-text text-transparent">
                ambitious in mind?
              </span>
            </MaskLine>
          </h1>

          <Reveal delay={0.22}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500">
              Whether it&apos;s a campaign, a website, a creative project or an
              AI idea, we&apos;d love to understand what you&apos;re building.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left Intro */}
            <Reveal delay={0.1} className="lg:col-span-5">
              <h2 className="text-xl font-extrabold text-[#0B132B]">
                Let&apos;s start with a conversation.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Reach out directly on WhatsApp, email, or social media and
                we&apos;ll get back to you promptly. We work closely with you
                from the first conversation to the final result.
              </p>
            </Reveal>

            {/* Right Direct Social & Messaging Channels */}
            <Reveal delay={0.16} className="space-y-4 lg:col-span-7">
              <a
                href={buildWhatsAppUrl({
                  message:
                    "Hi GROOTIT! I'd like to book a consultation about my project.",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066FF] px-5 py-4 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,102,255,0.28)] transition-colors hover:bg-[#0052CC] sm:w-auto"
              >
                <WhatsAppBrandIcon className="h-4 w-4" />
                <span>Book a consultation on WhatsApp</span>
              </a>

              <div className="pt-2 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                OR CONNECT DIRECTLY
              </div>

              <a
                href={`mailto:${LEAD_CONFIG.businessEmail}?subject=${encodeURIComponent(
                  "Project Inquiry — GROOTIT"
                )}`}
                className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-5 py-4 text-xs font-semibold text-[#0B132B] shadow-2xs transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-[#EAF2FF]/40"
              >
                <span className="inline-flex items-center gap-2.5">
                  <GmailBrandIcon className="h-5 w-5" />
                  <span>{LEAD_CONFIG.businessEmail}</span>
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#0066FF]" />
              </a>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={buildWhatsAppUrl({ account: "primary" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-emerald-200/80 bg-emerald-50/50 px-5 py-4 text-xs font-semibold text-emerald-900 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <WhatsAppBrandIcon className="h-5 w-5" />
                    <span>{LEAD_CONFIG.whatsappPrimary.display}</span>
                  </span>
                  <span className="text-[10px] font-medium opacity-75">
                    WhatsApp 1
                  </span>
                </a>

                <a
                  href={buildWhatsAppUrl({ account: "secondary" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-emerald-200/80 bg-emerald-50/50 px-5 py-4 text-xs font-semibold text-emerald-900 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <WhatsAppBrandIcon className="h-5 w-5" />
                    <span>{LEAD_CONFIG.whatsappSecondary.display}</span>
                  </span>
                  <span className="text-[10px] font-medium opacity-75">
                    WhatsApp 2
                  </span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://web.facebook.com/grootit04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#0B132B] transition-all hover:-translate-y-0.5 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                >
                  <FacebookBrandIcon className="h-4 w-4" />
                  <span>Facebook</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
                <a
                  href="https://www.instagram.com/grootit04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#0B132B] transition-all hover:-translate-y-0.5 hover:border-[#D6249F] hover:bg-[#D6249F] hover:text-white"
                >
                  <InstagramBrandIcon className="h-4 w-4" />
                  <span>Instagram</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* What Happens Next (4 Steps with Scroll Timeline) */}
        <section className="mx-auto max-w-[1200px] px-6 py-16">
          <Reveal>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
              WHAT HAPPENS NEXT?
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
              From first message to first
              <br />
              steps.
            </h2>
          </Reveal>

          <div className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ScrollTimelineLine />
            {NEXT_STEPS.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.09} className="group relative">
                <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF2FF] text-xs font-bold text-[#0066FF] ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white">
                  {step.num}
                </span>
                <h3 className="mt-4 text-sm font-bold text-[#0B132B]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Prefer to start with an idea? Rounded Dark Navy Card */}
        <section className="mx-auto max-w-[1200px] px-6 pb-20">
          <ScrollPortalCard>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07132A] via-[#0B1E40] to-[#102B5C] px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-navy-grid"
              />
              <div className="relative z-10">
                <h2 className="mx-auto max-w-lg text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Prefer to start with an idea?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-xs text-slate-300 sm:text-sm">
                  Tell us what you&apos;re building. We&apos;ll listen first.
                </p>
                <div className="mt-8">
                  <MagneticWrap>
                    <Link
                      href="/work"
                      className="inline-flex items-center rounded-full bg-white px-7 py-3 text-xs font-semibold text-[#0B132B] shadow-md transition-colors hover:bg-blue-50"
                    >
                      See our work
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
