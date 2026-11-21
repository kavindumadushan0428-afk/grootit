"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DIMENSIONS } from "@/components/data";
import {
  Reveal,
  MaskLine,
  MagneticWrap,
  ScrollTimelineLine,
} from "@/components/MotionPrimitives";
import { Check, ArrowRight } from "lucide-react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [divisionId, setDivisionId] = useState("");
  const [specificService, setSpecificService] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("Prefer not to say");
  const [timeline, setTimeline] = useState("Prefer not to say");
  const [submitted, setSubmitted] = useState(false);

  const activeDivision = DIMENSIONS.find((d) => d.id === divisionId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white bg-page-glow text-[#0B132B]">
      <Navbar />

      <main className="pt-32 md:pt-40">
        {/* Hero & Form Section */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <Reveal y={14}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/85 px-3.5 py-1 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0066FF]" />
              <span>CONTACT</span>
            </div>
          </Reveal>

          <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl">
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

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            {/* Left Info */}
            <Reveal delay={0.1} className="lg:col-span-5">
              <h2 className="text-xl font-extrabold text-[#0B132B]">
                Let&apos;s start with a conversation.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Share a few details and we&apos;ll come back to you. We work
                closely with you from the first conversation to the final
                result.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-[#EAF2FF] px-4 py-3 text-xs font-medium text-slate-700">
                Based in Sri Lanka, working with clients internationally.
              </div>
            </Reveal>

            {/* Right Rounded White Card Form with Animated Transitions */}
            <Reveal delay={0.18} className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="rounded-2xl border border-blue-200/80 bg-white p-8 shadow-lg"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 320, damping: 18 }}
                      className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF2FF] text-[#0066FF]"
                    >
                      <Check className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#0B132B]">
                      Thank you, {name || "friend"}.
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      Your inquiry has been received. We&apos;ll review your
                      project details and get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-full bg-[#0066FF] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0052CC]"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_32px_rgba(15,23,42,0.04)] md:p-8"
                  >
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-[#0B132B]">
                        Full name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/15"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-[#0B132B]">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/15"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-[#0B132B]">
                          Service division
                        </label>
                        <select
                          value={divisionId}
                          onChange={(e) => {
                            setDivisionId(e.target.value);
                            setSpecificService("");
                          }}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/15"
                        >
                          <option value="">Select a division</option>
                          {DIMENSIONS.map((d) => (
                            <option key={d.id} value={d.id}>
                              {d.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-[#0B132B]">
                          Specific service{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <select
                          value={specificService}
                          onChange={(e) => setSpecificService(e.target.value)}
                          disabled={!activeDivision}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-600 transition-colors disabled:text-slate-400 focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/15"
                        >
                          <option value="">
                            {activeDivision
                              ? "Choose a service"
                              : "Choose a division first"}
                          </option>
                          {activeDivision?.services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-[#0B132B]">
                        Project details
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/15"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-[#0B132B]">
                          Budget range{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] focus:border-[#0066FF] focus:outline-none"
                        >
                          <option>Prefer not to say</option>
                          <option>Under $2,500</option>
                          <option>$2,500 – $5,000</option>
                          <option>$5,000 – $15,000</option>
                          <option>$15,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-[#0B132B]">
                          Preferred timeline{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] focus:border-[#0066FF] focus:outline-none"
                        >
                          <option>Prefer not to say</option>
                          <option>As soon as possible</option>
                          <option>1 – 2 months</option>
                          <option>3+ months</option>
                          <option>Flexible</option>
                        </select>
                      </div>
                    </div>

                    <MagneticWrap>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-3 text-xs font-semibold text-white shadow-[0_6px_20px_rgba(0,102,255,0.28)] transition-colors hover:bg-[#0052CC]"
                      >
                        <span>Send Inquiry</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </MagneticWrap>
                  </motion.form>
                )}
              </AnimatePresence>
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
          <Reveal>
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
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-semibold text-[#0B132B] shadow-md transition-colors hover:bg-blue-50"
                    >
                      <span>See our work</span>
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
