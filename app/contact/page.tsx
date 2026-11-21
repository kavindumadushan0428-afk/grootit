"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DIMENSIONS } from "@/components/data";
import { Check } from "lucide-react";

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
        {/* Hero & Form Section (Matching Image 2) */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
            CONTACT
          </div>
          <h1 className="mt-3 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B132B] sm:text-5xl">
            Have something
            <br />
            ambitious in mind?
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-500">
            Whether it&apos;s a campaign, a website, a creative project or an AI
            idea, we&apos;d love to understand what you&apos;re building.
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            {/* Left Info */}
            <div className="lg:col-span-5">
              <h2 className="text-xl font-extrabold text-[#0B132B]">
                Let&apos;s start with a conversation.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Share a few details and we&apos;ll come back to you. We work
                closely with you from the first conversation to the final
                result.
              </p>

              <div className="mt-6 rounded-xl bg-[#EAF2FF] px-4 py-3 text-xs font-medium text-slate-700">
                Based in Sri Lanka, working with clients internationally.
              </div>
            </div>

            {/* Right Rounded White Card Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2FF] text-[#0066FF]">
                    <Check className="h-5 w-5" />
                  </div>
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
                    className="mt-6 rounded-full bg-[#0066FF] px-5 py-2 text-xs font-semibold text-white hover:bg-[#0052CC]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_24px_rgba(15,23,42,0.03)] md:p-8"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] focus:border-[#0066FF] focus:outline-none"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] focus:border-[#0066FF] focus:outline-none"
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
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] focus:border-[#0066FF] focus:outline-none"
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
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-600 disabled:text-slate-400 focus:border-[#0066FF] focus:outline-none"
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
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] focus:border-[#0066FF] focus:outline-none"
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

                  <button
                    type="submit"
                    className="rounded-full bg-[#0066FF] px-6 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0052CC]"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* What Happens Next (4 Steps) */}
        <section className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
            WHAT HAPPENS NEXT?
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
            From first message to first
            <br />
            steps.
          </h2>

          <div className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-4 hidden h-[1px] bg-slate-200 lg:block"
            />
            {NEXT_STEPS.map((step) => (
              <div key={step.num} className="relative">
                <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF2FF] text-xs font-bold text-[#0066FF] ring-4 ring-white">
                  {step.num}
                </span>
                <h3 className="mt-4 text-sm font-bold text-[#0B132B]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Prefer to start with an idea? Rounded Dark Navy Card */}
        <section className="mx-auto max-w-[1200px] px-6 pb-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#07132A] via-[#0B1E40] to-[#102B5C] px-8 py-16 text-center text-white shadow-xl md:px-16 md:py-20">
            <h2 className="mx-auto max-w-lg text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Prefer to start with an idea?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-xs text-slate-300 sm:text-sm">
              Tell us what you&apos;re building. We&apos;ll listen first.
            </p>
            <div className="mt-8">
              <Link
                href="/work"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-xs font-semibold text-[#0B132B] shadow-sm transition-colors hover:bg-slate-100"
              >
                See our work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
