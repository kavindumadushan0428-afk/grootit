"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DIMENSIONS } from "@/components/data";
import { buildWhatsAppUrl, LEAD_CONFIG } from "@/lib/leads";
import {
  Reveal,
  MaskLine,
  MagneticWrap,
  ScrollTimelineLine,
} from "@/components/MotionPrimitives";
import {
  Check,
  ArrowRight,
  Mail,
  MessageCircle,
  ExternalLink,
  AlertCircle,
  Loader2,
} from "lucide-react";

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

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  division?: string;
  details?: string;
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const qDiv = searchParams.get("division");
  const qSrv = searchParams.get("service");
  const initialMatchedDivision = qDiv
    ? DIMENSIONS.find(
        (d) => d.id === qDiv || d.title.toLowerCase() === qDiv.toLowerCase()
      )
    : undefined;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [divisionId, setDivisionId] = useState(
    () => initialMatchedDivision?.id || ""
  );
  const [specificService, setSpecificService] = useState(() =>
    initialMatchedDivision && qSrv && initialMatchedDivision.services.includes(qSrv)
      ? qSrv
      : ""
  );
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("Prefer not to say");
  const [timeline, setTimeline] = useState("Prefer not to say");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const activeDivision = DIMENSIONS.find((d) => d.id === divisionId);

  const validateForm = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    const phoneClean = phone.replace(/[\s\-()]/g, "");
    if (!phoneClean || !/^\+?[0-9]{7,15}$/.test(phoneClean)) {
      nextErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }

    if (!divisionId) {
      nextErrors.division = "Please select a service division.";
    }

    if (!details.trim() || details.trim().length < 12) {
      nextErrors.details =
        "Please share a brief project description (at least 12 characters).";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    const endpoint = LEAD_CONFIG.formspreeEndpoint;
    if (!endpoint) {
      // Never show a fake success message when Formspree endpoint is missing
      setSubmitError(
        "Formspree endpoint is not configured yet (set NEXT_PUBLIC_FORMSPREE_ID in .env.local). You can send your pre-filled inquiry immediately via WhatsApp or Email below."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedServiceText = specificService
        ? `${activeDivision?.title} — ${specificService}`
        : activeDivision?.title || "General Inquiry";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New GROOTIT Inquiry: ${selectedServiceText} from ${name.trim()}`,
          name: name.trim(),
          email: email.trim(),
          _replyto: email.trim(),
          phone: phone.trim(),
          company: company.trim() || "Not specified",
          serviceDivision: activeDivision?.title || divisionId,
          specificService: specificService || "All / General in Division",
          budget,
          timeline,
          projectDescription: details.trim(),
          targetBusinessEmail: LEAD_CONFIG.businessEmail,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const errMsg =
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ||
          data?.error ||
          "We could not submit your inquiry right now. Please try again or use the pre-filled WhatsApp button below.";
        setSubmitError(errMsg);
        setSubmitted(false);
        return;
      }

      // Only mark submitted = true when Formspree confirms 2xx success
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Network error while connecting to Formspree. Please check your connection or send your pre-filled inquiry via WhatsApp below."
      );
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappParams = {
    division: activeDivision?.title,
    service: specificService || undefined,
    name,
    company,
    phone,
    email,
    details,
    budget,
    timeline,
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

              {/* Direct Social & Messaging Channels with Pre-filled Service Context */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                    CONNECT DIRECTLY
                  </span>
                  {activeDivision && (
                    <span className="rounded-full bg-[#EAF2FF] px-2.5 py-0.5 text-[10px] font-semibold text-[#0066FF]">
                      Pre-filled: {specificService || activeDivision.title}
                    </span>
                  )}
                </div>

                <a
                  href={`mailto:${LEAD_CONFIG.businessEmail}?subject=${encodeURIComponent(
                    `Project Inquiry: ${
                      specificService || activeDivision?.title || "GROOTIT"
                    }`
                  )}`}
                  className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-xs font-semibold text-[#0B132B] shadow-2xs transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-[#EAF2FF]/40"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-[#0066FF]" />
                    <span>{LEAD_CONFIG.businessEmail}</span>
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#0066FF]" />
                </a>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={buildWhatsAppUrl({
                      ...whatsappParams,
                      account: "primary",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-emerald-200/80 bg-emerald-50/50 px-4 py-3 text-xs font-semibold text-emerald-900 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-emerald-600 group-hover:text-white" />
                      <span>{LEAD_CONFIG.whatsappPrimary.display}</span>
                    </span>
                    <span className="text-[10px] font-medium opacity-75">
                      WhatsApp 1
                    </span>
                  </a>

                  <a
                    href={buildWhatsAppUrl({
                      ...whatsappParams,
                      account: "secondary",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-emerald-200/80 bg-emerald-50/50 px-4 py-3 text-xs font-semibold text-emerald-900 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-emerald-600 group-hover:text-white" />
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
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#0B132B] transition-all hover:-translate-y-0.5 hover:border-[#0066FF] hover:bg-[#0066FF] hover:text-white"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://www.instagram.com/grootit04/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#0B132B] transition-all hover:-translate-y-0.5 hover:border-[#0066FF] hover:bg-[#0066FF] hover:text-white"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right Rounded White Card Form with Formspree Integration */}
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
                      Thank you, {name}.
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      Your inquiry has been delivered to{" "}
                      <strong className="text-[#0B132B]">
                        {LEAD_CONFIG.businessEmail}
                      </strong>
                      . We&apos;ll review your project details and respond
                      shortly.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setEmail("");
                          setPhone("");
                          setCompany("");
                          setDetails("");
                        }}
                        className="rounded-full bg-[#0066FF] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0052CC]"
                      >
                        Send Another Inquiry
                      </button>
                      <a
                        href={buildWhatsAppUrl(whatsappParams)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-500 hover:text-white"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>Also Message on WhatsApp</span>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_32px_rgba(15,23,42,0.04)] md:p-8"
                  >
                    {/* Row 1: Full Name & Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="lead-name"
                          className="mb-1.5 block text-xs font-semibold text-[#0B132B]"
                        >
                          Full name <span className="text-[#0066FF]">*</span>
                        </label>
                        <input
                          id="lead-name"
                          type="text"
                          required
                          disabled={isSubmitting}
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name)
                              setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="Your full name"
                          className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:outline-none focus:ring-2 ${
                            errors.name
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/15"
                              : "border-slate-200 focus:border-[#0066FF] focus:ring-[#0066FF]/15"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-[11px] text-rose-600">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lead-email"
                          className="mb-1.5 block text-xs font-semibold text-[#0B132B]"
                        >
                          Email <span className="text-[#0066FF]">*</span>
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          required
                          disabled={isSubmitting}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email)
                              setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="you@company.com"
                          className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:outline-none focus:ring-2 ${
                            errors.email
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/15"
                              : "border-slate-200 focus:border-[#0066FF] focus:ring-[#0066FF]/15"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-rose-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="lead-phone"
                          className="mb-1.5 block text-xs font-semibold text-[#0B132B]"
                        >
                          Phone / WhatsApp{" "}
                          <span className="text-[#0066FF]">*</span>
                        </label>
                        <input
                          id="lead-phone"
                          type="tel"
                          required
                          disabled={isSubmitting}
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone)
                              setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="+94 78 743 1328"
                          className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/15"
                              : "border-slate-200 focus:border-[#0066FF] focus:ring-[#0066FF]/15"
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[11px] text-rose-600">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lead-company"
                          className="mb-1.5 block text-xs font-semibold text-[#0B132B]"
                        >
                          Company{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="lead-company"
                          type="text"
                          disabled={isSubmitting}
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Your business or brand name"
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/15"
                        />
                      </div>
                    </div>

                    {/* Row 3: Service Division & Specific Service */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="lead-division"
                          className="mb-1.5 block text-xs font-semibold text-[#0B132B]"
                        >
                          Service division{" "}
                          <span className="text-[#0066FF]">*</span>
                        </label>
                        <select
                          id="lead-division"
                          disabled={isSubmitting}
                          value={divisionId}
                          onChange={(e) => {
                            setDivisionId(e.target.value);
                            setSpecificService("");
                            if (errors.division)
                              setErrors({ ...errors, division: undefined });
                          }}
                          className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:outline-none focus:ring-2 ${
                            errors.division
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/15"
                              : "border-slate-200 focus:border-[#0066FF] focus:ring-[#0066FF]/15"
                          }`}
                        >
                          <option value="">Select a division</option>
                          {DIMENSIONS.map((d) => (
                            <option key={d.id} value={d.id}>
                              {d.title}
                            </option>
                          ))}
                        </select>
                        {errors.division && (
                          <p className="mt-1 text-[11px] text-rose-600">
                            {errors.division}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lead-service"
                          className="mb-1.5 block text-xs font-semibold text-[#0B132B]"
                        >
                          Specific service{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <select
                          id="lead-service"
                          value={specificService}
                          onChange={(e) => setSpecificService(e.target.value)}
                          disabled={!activeDivision || isSubmitting}
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

                    {/* Row 4: Project Description */}
                    <div>
                      <label
                        htmlFor="lead-details"
                        className="mb-1.5 block text-xs font-semibold text-[#0B132B]"
                      >
                        Project description{" "}
                        <span className="text-[#0066FF]">*</span>
                      </label>
                      <textarea
                        id="lead-details"
                        rows={4}
                        required
                        disabled={isSubmitting}
                        value={details}
                        onChange={(e) => {
                          setDetails(e.target.value);
                          if (errors.details)
                            setErrors({ ...errors, details: undefined });
                        }}
                        placeholder="Tell us about your project, goals, timeline or what you'd like to build..."
                        className={`w-full resize-none rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#0B132B] transition-colors focus:outline-none focus:ring-2 ${
                          errors.details
                            ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/15"
                            : "border-slate-200 focus:border-[#0066FF] focus:ring-[#0066FF]/15"
                        }`}
                      />
                      {errors.details && (
                        <p className="mt-1 text-[11px] text-rose-600">
                          {errors.details}
                        </p>
                      )}
                    </div>

                    {/* Row 5: Budget & Timeline */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="lead-budget"
                          className="mb-1.5 block text-xs font-semibold text-[#0B132B]"
                        >
                          Budget range{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <select
                          id="lead-budget"
                          disabled={isSubmitting}
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
                        <label
                          htmlFor="lead-timeline"
                          className="mb-1.5 block text-xs font-semibold text-[#0B132B]"
                        >
                          Preferred timeline{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <select
                          id="lead-timeline"
                          disabled={isSubmitting}
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

                    {/* Error Banner (Only shown on validation/Formspree error) */}
                    {submitError && (
                      <div
                        role="alert"
                        className="rounded-xl border border-rose-200 bg-rose-50/80 p-4 text-xs text-rose-900"
                      >
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                          <div className="space-y-2">
                            <p className="leading-relaxed">{submitError}</p>
                            <div className="flex flex-wrap gap-2 pt-1">
                              <a
                                href={buildWhatsAppUrl(whatsappParams)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3.5 py-1.5 text-[11px] font-semibold text-white hover:bg-emerald-700"
                              >
                                <MessageCircle className="h-3.5 w-3.5" />
                                <span>Send via WhatsApp Instead</span>
                              </a>
                              <a
                                href={`mailto:${LEAD_CONFIG.businessEmail}?subject=${encodeURIComponent(
                                  `GROOTIT Inquiry: ${
                                    specificService ||
                                    activeDivision?.title ||
                                    "Project"
                                  }`
                                )}&body=${encodeURIComponent(
                                  `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nService: ${
                                    specificService ||
                                    activeDivision?.title ||
                                    ""
                                  }\n\nDetails:\n${details}`
                                )}`}
                                className="inline-flex items-center gap-1.5 rounded-full border border-rose-300 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-rose-900 hover:bg-rose-100"
                              >
                                <Mail className="h-3.5 w-3.5" />
                                <span>Send via Email Client</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Row: Formspree Submit + Pre-filled WhatsApp Click-to-Chat */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <MagneticWrap>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-3 text-xs font-semibold text-white shadow-[0_6px_20px_rgba(0,102,255,0.28)] transition-colors hover:bg-[#0052CC] disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              <span>Sending Inquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Inquiry</span>
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </MagneticWrap>

                      <a
                        href={buildWhatsAppUrl(whatsappParams)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-5 py-3 text-xs font-semibold text-emerald-900 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>
                          {specificService || activeDivision
                            ? `WhatsApp About ${
                                specificService || activeDivision?.title
                              }`
                            : "Chat on WhatsApp"}
                        </span>
                      </a>
                    </div>
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

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactPageContent />
    </Suspense>
  );
}
