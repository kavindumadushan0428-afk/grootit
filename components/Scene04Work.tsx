"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { WORK_ITEMS, WorkCategory, WorkItem } from "./data";
import { TiltCard } from "./MotionPrimitives";
import { ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";

const CATEGORIES: WorkCategory[] = [
  "All",
  "AI & Automation",
  "Creative & Branding",
  "Web & Digital Experiences",
  "Digital Growth",
];

export function getCardGradient(motif: WorkItem["visualMotif"]) {
  switch (motif) {
    case "brand":
      return "bg-gradient-to-br from-[#DCEBFF] via-[#7FB8FF] to-[#126DFF]";
    case "website":
      return "bg-gradient-to-br from-[#EAF3FF] via-[#ACD1FF] to-[#4A90FF]";
    case "ai":
      return "bg-gradient-to-br from-[#061229] via-[#0A2558] to-[#0058DC]";
    case "reel":
      return "bg-gradient-to-br from-[#DCE8F8] via-[#7B9EC9] to-[#2F4E78]";
    case "campaign":
      return "bg-gradient-to-br from-[#E8F3FF] via-[#A6CEFF] to-[#3B86FF]";
    case "interactive":
      return "bg-gradient-to-br from-[#E2EEFF] via-[#8AB9F7] to-[#1E60C2]";
  }
}

export function ProjectStageArtwork({
  motif,
}: {
  motif: WorkItem["visualMotif"];
}) {
  if (motif === "brand") {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="relative flex w-56 items-center justify-between rounded-2xl border border-white/60 bg-white/90 p-4 shadow-[0_14px_34px_rgba(11,19,43,0.12)] backdrop-blur-md transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
          <div>
            <div className="text-[9px] font-bold tracking-widest uppercase text-[#0066FF]">
              TYPE &amp; MARK
            </div>
            <div className="mt-0.5 text-2xl font-black tracking-tight text-[#0B132B]">
              Aa Bb
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-3.5 w-3.5 rounded-full bg-[#0066FF]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#0B132B]" />
              <span className="h-3.5 w-3.5 rounded-full border border-slate-200 bg-[#EAF2FF]" />
            </div>
          </div>
          <div className="flex items-center -space-x-1.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#0066FF] bg-white">
              <span className="h-3 w-3 rounded-full bg-[#0066FF]" />
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#0B132B] bg-white">
              <span className="h-3 w-3 rounded-full bg-[#0066FF]" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (motif === "website") {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="w-60 overflow-hidden rounded-xl border border-white/70 bg-white/95 shadow-[0_16px_36px_rgba(11,19,43,0.12)] transition-transform duration-500 group-hover:scale-105">
          <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-rose-300" />
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[8px] font-medium text-slate-400">
              grootit.studio
            </span>
          </div>
          <div className="grid grid-cols-12 gap-2 p-3">
            <div className="col-span-7 space-y-1.5">
              <div className="h-2 w-12 rounded-full bg-[#0066FF]/30" />
              <div className="h-3 w-24 rounded bg-[#0B132B]" />
              <div className="h-2 w-20 rounded bg-slate-200" />
              <div className="mt-2 inline-block rounded-full bg-[#0066FF] px-2.5 py-1 text-[7px] font-bold text-white">
                Explore →
              </div>
            </div>
            <div className="col-span-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#DCEBFF] to-[#7FB8FF] p-2">
              <div className="h-8 w-8 rounded-full bg-white/90 shadow-xs" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (motif === "ai") {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="relative flex w-64 items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[10px] font-bold text-white">
              IN
            </div>
            <span className="text-[8px] text-blue-200">Inquiry</span>
          </div>

          <div className="relative flex-1 px-2">
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-400/40 via-[#4DA3FF] to-blue-400/40" />
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#4DA3FF] shadow-[0_0_10px_#4DA3FF]" />
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0066FF] text-white shadow-[0_0_24px_rgba(0,102,255,0.8)]">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-[8px] font-semibold text-white">AI Agent</span>
          </div>

          <div className="relative flex-1 px-2">
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-400/40 via-emerald-400 to-emerald-400/40" />
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/15 text-emerald-300">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="text-[8px] text-emerald-200">Routed</span>
          </div>
        </div>
      </div>
    );
  }

  if (motif === "reel") {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="w-60 rounded-2xl border border-white/50 bg-slate-900/85 p-3.5 text-white shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
          <div className="flex items-center justify-between">
            <span className="rounded bg-white/15 px-2 py-0.5 font-mono-tech text-[8px] tracking-wider text-blue-200">
              00:14:22 / 4K
            </span>
            <span className="h-2 w-2 animate-pulse rounded-full bg-rose-400" />
          </div>
          <div className="my-3 flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066FF] shadow-[0_0_20px_rgba(0,102,255,0.7)] transition-transform group-hover:scale-110">
              <div className="ml-0.5 h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-white" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-3/4 rounded-full bg-[#4DA3FF]" />
            </div>
            <div className="h-1.5 w-5/6 overflow-hidden rounded-full bg-white/15">
              <div className="ml-4 h-full w-1/2 rounded-full bg-blue-300" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (motif === "campaign") {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="w-56 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg transition-transform duration-500 group-hover:scale-105">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              GROWTH TELEMETRY
            </span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-600">
              +142% ROI
            </span>
          </div>
          <div className="mt-3 flex h-16 items-end justify-between gap-2 px-1">
            <div className="animate-bar-1 h-6 w-full rounded-t bg-blue-100" />
            <div className="animate-bar-2 h-9 w-full rounded-t bg-blue-200" />
            <div className="animate-bar-3 h-11 w-full rounded-t bg-blue-400" />
            <div className="animate-bar-2 h-14 w-full rounded-t bg-[#0066FF]" />
            <div className="animate-bar-1 h-16 w-full rounded-t bg-[#0B132B]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center p-6">
      <div className="relative flex w-60 items-center justify-center">
        <div className="h-24 w-36 -rotate-6 rounded-xl border border-white/60 bg-white/60 shadow-md backdrop-blur-xs transition-transform duration-500 group-hover:-translate-x-2 group-hover:-rotate-12" />
        <div className="absolute h-24 w-40 rotate-3 rounded-xl border border-white bg-white/95 p-3 shadow-xl transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-0">
          <div className="text-[8px] font-bold tracking-widest uppercase text-[#0066FF]">
            SCROLL SCENE 01
          </div>
          <div className="mt-1.5 h-2.5 w-24 rounded bg-[#0B132B]" />
          <div className="mt-1 h-2 w-16 rounded bg-slate-200" />
          <div className="mt-3 flex items-center gap-1.5">
            <span className="h-4 w-12 rounded-full bg-[#0066FF]" />
            <span className="h-4 w-4 rounded-full bg-[#EAF2FF]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkDetailModal({
  activeWork,
  onClose,
}: {
  activeWork: WorkItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!activeWork) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeWork, onClose]);

  return (
    <AnimatePresence>
      {activeWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl md:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#EAF2FF] px-3 py-1 text-[11px] font-semibold text-[#0066FF]">
                  {activeWork.badge}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {activeWork.category}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              className={`mt-5 h-52 w-full overflow-hidden rounded-2xl ${getCardGradient(
                activeWork.visualMotif
              )}`}
            >
              <ProjectStageArtwork motif={activeWork.visualMotif} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#0B132B]">
              {activeWork.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {activeWork.details}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {activeWork.deliverables.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {d}
                </span>
              ))}
            </div>

            <div className="mt-7 flex justify-end border-t border-slate-100 pt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0052CC]"
              >
                <span>Start a Similar Project</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface Scene04WorkProps {
  showAll?: boolean;
}

export function Scene04Work({ showAll = false }: Scene04WorkProps) {
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);
  const visibleItems = showAll ? WORK_ITEMS : WORK_ITEMS.slice(0, 3);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {visibleItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: idx * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TiltCard className="h-full rounded-2xl">
              <article
                onClick={() => setActiveWork(item)}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_14px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(0,102,255,0.1)]"
              >
                <div
                  className={`relative h-48 w-full overflow-hidden ${getCardGradient(
                    item.visualMotif
                  )}`}
                >
                  <ProjectStageArtwork motif={item.visualMotif} />
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-[#0B132B] shadow-xs backdrop-blur-xs">
                    {item.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0066FF]">
                      {item.category}
                    </div>
                    <h3 className="mt-2 text-base font-bold text-[#0B132B] transition-colors group-hover:text-[#0066FF]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-5">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0066FF] group-hover:underline">
                      <span>View details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <WorkDetailModal
        activeWork={activeWork}
        onClose={() => setActiveWork(null)}
      />
    </>
  );
}

export function WorkFilterGrid() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("All");
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? WORK_ITEMS
      : WORK_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Animated Sliding Filter Pills */}
      <div className="mb-10 flex flex-wrap gap-2.5">
        {CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                isSelected
                  ? "text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="activeFilterPill"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className="absolute inset-0 -z-0 rounded-full bg-[#0066FF] shadow-[0_4px_14px_rgba(0,102,255,0.3)]"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* 3x2 Animated Grid with 3D Tilt Cards */}
      <motion.div layout className="grid gap-6 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full rounded-2xl">
                <article
                  onClick={() => setActiveWork(item)}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_14px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(0,102,255,0.1)]"
                >
                  <div
                    className={`relative h-48 w-full overflow-hidden ${getCardGradient(
                      item.visualMotif
                    )}`}
                  >
                    <ProjectStageArtwork motif={item.visualMotif} />
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-[#0B132B] shadow-xs backdrop-blur-xs">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0066FF]">
                        {item.category}
                      </div>
                      <h3 className="mt-2 text-base font-bold text-[#0B132B] transition-colors group-hover:text-[#0066FF]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {item.summary}
                      </p>
                    </div>

                    <div className="mt-5">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0066FF] group-hover:underline">
                        <span>View details</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <WorkDetailModal
        activeWork={activeWork}
        onClose={() => setActiveWork(null)}
      />
    </>
  );
}
