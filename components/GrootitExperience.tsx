"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DIMENSIONS } from "./data";
import { Scene04Work } from "./Scene04Work";
import {
  Bot,
  Sparkles,
  Layout,
  TrendingUp,
  ArrowRight,
  Settings,
  Zap,
} from "lucide-react";

const DIVISION_ICONS = {
  ai: Bot,
  brand: Sparkles,
  digital: Layout,
  growth: TrendingUp,
};

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We learn your goals, audience and challenges.",
  },
  {
    num: "02",
    title: "Plan & Design",
    desc: "We shape a clear direction and plan.",
  },
  {
    num: "03",
    title: "Build",
    desc: "We create, test and refine the work together.",
  },
  {
    num: "04",
    title: "Improve",
    desc: "We launch, support and help you grow.",
  },
];

const HUB_NODES = [
  {
    id: "strategy",
    label: "Strategy",
    pos: "left-3 top-2",
    detail: "Brand positioning, growth roadmaps & digital planning.",
  },
  {
    id: "creative",
    label: "Creative",
    pos: "right-3 top-2",
    detail: "Visual identity, motion reels & memorable storytelling.",
  },
  {
    id: "web",
    label: "Web",
    pos: "bottom-2 left-3",
    detail: "High-speed websites, e-commerce & interactive experiences.",
  },
  {
    id: "automation",
    label: "Automation",
    pos: "bottom-2 right-3",
    detail: "AI agents, chatbots & connected business workflows.",
  },
];

export function GrootitExperience() {
  const [activeHubNode, setActiveHubNode] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setMouseOffset({ x, y });
  };

  return (
    <div className="min-h-screen bg-white text-[#0B132B]">
      <Navbar />

      <main>
        {/* 1. HERO SECTION (2027 Interactive Upgrade of Image 6) */}
        <section
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={() => setMouseOffset({ x: 0, y: 0 })}
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F9FF] to-[#E6F1FF] pt-32 pb-20 md:pt-40 md:pb-28"
        >
          {/* Ambient radial glow + subtle grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-70"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#A9D8FF]/40 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1200px] px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:col-span-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-3.5 py-1.5 shadow-2xs backdrop-blur-xs">
                  <span className="h-2 w-2 rounded-full bg-[#0066FF]" />
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                    CREATIVE + INTELLIGENCE
                  </span>
                </div>

                <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-[#0B132B] sm:text-5xl lg:text-[3.65rem]">
                  Creativity Meets
                  <br />
                  <span className="bg-gradient-to-r from-[#0B132B] via-[#0044AA] to-[#0066FF] bg-clip-text text-transparent">
                    Intelligence.
                  </span>
                </h1>

                <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
                  We build brands, craft digital experiences and create
                  intelligent solutions designed for business growth.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-3.5 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,102,255,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0052CC] hover:shadow-[0_12px_30px_rgba(0,102,255,0.4)]"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/work"
                    className="rounded-full border border-slate-200/90 bg-white px-6 py-3.5 text-xs font-semibold text-[#0B132B] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-slate-50"
                  >
                    Explore Our Work
                  </Link>
                </div>

                {/* Subtle Studio Trust Strip */}
                <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200/60 pt-6 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0B132B]">04</span>
                    <span>Focused Divisions</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0B132B]">Hybrid</span>
                    <span>Creative + AI Studio</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0066FF]">Global</span>
                    <span>Sri Lanka → International</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Interactive 3D-Parallax Floating UI Sphere */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="relative flex items-center justify-center lg:col-span-6"
              >
                <div
                  style={{
                    transform: `translate3d(${mouseOffset.x * 0.5}px, ${
                      mouseOffset.y * 0.5
                    }px, 0)`,
                  }}
                  className="relative flex h-[350px] w-[350px] items-center justify-center rounded-full bg-gradient-to-br from-[#DBECFF] via-[#A4CEFF] to-[#67A3FF] shadow-[inset_0_4px_30px_rgba(255,255,255,0.6),0_25px_60px_rgba(0,102,255,0.14)] transition-transform duration-200 ease-out sm:h-[430px] sm:w-[430px]"
                >
                  {/* Decorative orbital ring */}
                  <div className="pointer-events-none absolute inset-5 rounded-full border border-white/45 border-dashed" />

                  {/* Main Floating Studio Window Card */}
                  <div
                    style={{
                      transform: `translate3d(${mouseOffset.x * -0.6}px, ${
                        mouseOffset.y * -0.6
                      }px, 0)`,
                    }}
                    className="w-[80%] rounded-2xl border border-white/90 bg-white/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-md transition-transform duration-200 ease-out"
                  >
                    {/* Window Header */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-200" />
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF2FF] px-2.5 py-0.5 text-[9px] font-bold text-[#0066FF]">
                        <Zap className="h-2.5 w-2.5" /> Creative + AI
                      </span>
                    </div>

                    {/* Visual Canvas inside Window */}
                    <div className="relative flex h-36 w-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#F0F7FF] via-[#DCEBFF] to-[#BADAFF] p-3.5">
                      <div className="flex items-center justify-between">
                        <Image
                          src="/grootit-logo.png"
                          alt="GROOTIT"
                          width={96}
                          height={24}
                          className="h-4 w-auto object-contain"
                        />
                        <span className="rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-semibold text-[#0B132B] shadow-2xs">
                          2027 Studio OS
                        </span>
                      </div>

                      {/* Mini interactive nodes inside canvas */}
                      <div className="my-auto flex items-center justify-center gap-2">
                        <div className="rounded-lg bg-white/90 px-2.5 py-1.5 text-[9px] font-bold text-[#0B132B] shadow-xs">
                          Brand
                        </div>
                        <div className="h-[1.5px] w-4 bg-[#0066FF]" />
                        <div className="rounded-lg bg-[#0066FF] px-2.5 py-1.5 text-[9px] font-bold text-white shadow-xs">
                          AI Core
                        </div>
                        <div className="h-[1.5px] w-4 bg-[#0066FF]" />
                        <div className="rounded-lg bg-white/90 px-2.5 py-1.5 text-[9px] font-bold text-[#0B132B] shadow-xs">
                          Growth
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[8px] font-medium text-slate-600">
                        <span>Intelligent Execution</span>
                        <span className="font-bold text-[#0066FF]">Active ●</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 w-3/4 rounded-full bg-slate-100" />
                        <div className="h-2 w-1/2 rounded-full bg-slate-100" />
                      </div>
                      <span className="rounded-full bg-[#EAF2FF] px-2.5 py-1 text-[9px] font-bold text-[#0066FF]">
                        +98% Efficiency
                      </span>
                    </div>
                  </div>

                  {/* Top-Right Floating AI Bot Badge */}
                  <div className="animate-float-slow absolute right-2 top-5 flex h-13 w-13 items-center justify-center rounded-2xl border border-white bg-white shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                    <Bot className="h-5 w-5 text-[#0066FF]" />
                  </div>

                  {/* Bottom-Left Floating Gear Badge */}
                  <div className="animate-float-delayed absolute bottom-9 left-5 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                    <Settings className="h-4 w-4 text-[#0066FF]" />
                  </div>

                  {/* Bottom-Right Floating Bar Chart Card */}
                  <div
                    style={{
                      transform: `translate3d(${mouseOffset.x * 0.8}px, ${
                        mouseOffset.y * 0.8
                      }px, 0)`,
                    }}
                    className="absolute -bottom-2 right-1 flex h-24 w-48 items-end justify-between rounded-2xl border border-white bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.14)] transition-transform duration-200 ease-out"
                  >
                    <div className="flex items-end gap-2">
                      <div className="h-8 w-3.5 rounded-t bg-blue-200 transition-all duration-500 hover:h-10" />
                      <div className="h-12 w-3.5 rounded-t bg-blue-400 transition-all duration-500 hover:h-14" />
                      <div className="h-16 w-3.5 rounded-t bg-[#0066FF]" />
                      <div className="h-10 w-3.5 rounded-t bg-blue-100" />
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Impact
                      </div>
                      <div className="text-sm font-extrabold text-[#0B132B]">
                        3.4×
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHAT WE DO — FOUR FOCUSED DIVISIONS */}
        <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                WHAT WE DO
              </div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
                One creative team.
                <br />
                Four focused divisions.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:underline"
            >
              <span>View full service matrix</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIMENSIONS.map((div, idx) => {
              const Icon = DIVISION_ICONS[div.visualType];
              return (
                <motion.div
                  key={div.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                >
                  <Link
                    href={`/services#${div.id}`}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_14px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_16px_36px_rgba(0,102,255,0.08)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#0066FF] transition-colors duration-300 group-hover:bg-[#0066FF] group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono-tech text-[10px] font-semibold text-slate-500">
                          {div.number}
                        </span>
                      </div>
                      <h3 className="mt-5 text-base font-bold text-[#0B132B] transition-colors group-hover:text-[#0066FF]">
                        {div.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {div.tagline}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0066FF] group-hover:underline">
                        <span>Explore</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {div.services.length} services
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 3. FEATURED CAPABILITY (Dark Navy Section with Interactive 5-Node Diagram) */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#07132A] via-[#0B1D3F] to-[#0E244D] py-20 text-white md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-navy-grid"
          />

          <div className="relative z-10 mx-auto max-w-[1200px] px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#4D94FF]">
                  FEATURED CAPABILITY
                </div>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  From creative thinking
                  <br />
                  to intelligent execution.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300">
                  Where a traditional agency stops at visuals, we connect brand,
                  web and automation together so your business runs smoother,
                  responds faster and grows with clarity.
                </p>

                {/* Dynamic Node Insight Pill */}
                <div className="mt-6 min-h-[44px] max-w-md rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-blue-200 backdrop-blur-xs">
                  {activeHubNode
                    ? HUB_NODES.find((n) => n.id === activeHubNode)?.detail
                    : "Hover any orbital discipline on the right to see how GROOTIT connects it."}
                </div>

                <div className="mt-7">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-[#0B132B] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Interactive 5-Node Connected Hub Diagram */}
              <div className="flex items-center justify-center lg:col-span-6">
                <div className="relative h-76 w-80 sm:h-84 sm:w-96">
                  {/* Connecting SVG Lines with Animated Data Pulses */}
                  <svg
                    viewBox="0 0 360 300"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                  >
                    <line
                      x1="85"
                      y1="65"
                      x2="180"
                      y2="150"
                      stroke="rgba(77,148,255,0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="275"
                      y1="65"
                      x2="180"
                      y2="150"
                      stroke="rgba(77,148,255,0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="85"
                      y1="235"
                      x2="180"
                      y2="150"
                      stroke="rgba(77,148,255,0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="275"
                      y1="235"
                      x2="180"
                      y2="150"
                      stroke="rgba(77,148,255,0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    {/* Subtle orbital circle */}
                    <circle
                      cx="180"
                      cy="150"
                      r="112"
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                  </svg>

                  {/* 4 Outer Orbital Nodes */}
                  {HUB_NODES.map((node) => {
                    const isHovered = activeHubNode === node.id;
                    return (
                      <button
                        key={node.id}
                        type="button"
                        onMouseEnter={() => setActiveHubNode(node.id)}
                        onMouseLeave={() => setActiveHubNode(null)}
                        className={`absolute ${node.pos} flex h-24 w-24 items-center justify-center rounded-full border text-xs font-semibold backdrop-blur-md transition-all duration-300 ${
                          isHovered
                            ? "scale-110 border-[#4DA3FF] bg-[#0066FF]/30 text-white shadow-[0_0_24px_rgba(0,102,255,0.5)]"
                            : "border-white/15 bg-white/5 text-slate-200 hover:border-white/30"
                        }`}
                      >
                        {node.label}
                      </button>
                    );
                  })}

                  {/* Center Node: GROOTIT Core with Pulse Ring */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#0066FF]" />
                    <div className="relative flex h-22 w-22 flex-col items-center justify-center rounded-full bg-[#0066FF] text-white shadow-[0_0_36px_rgba(0,102,255,0.75)]">
                      <span className="text-[11px] font-black tracking-wider">
                        GROOTIT
                      </span>
                      <span className="mt-0.5 text-[8px] font-medium text-blue-100">
                        CORE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SELECTED WORK — IDEAS TAKING SHAPE */}
        <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
            SELECTED WORK
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
            Ideas taking shape.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            Concepts and demonstrations showing how we think. These are labelled
            honestly and are not client projects.
          </p>

          <div className="mt-10">
            <Scene04Work showAll={false} />
          </div>

          <div className="mt-9">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-xs font-semibold text-[#0B132B] shadow-2xs transition-all hover:border-blue-200 hover:bg-slate-50"
            >
              <span>View all work</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        {/* 5. HOW WE WORK — A SIMPLE, COLLABORATIVE PROCESS */}
        <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
            HOW WE WORK
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
            A simple, collaborative
            <br />
            process.
          </h2>

          <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Horizontal connecting line on desktop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-4 hidden h-[1px] bg-gradient-to-r from-[#0066FF]/40 via-slate-200 to-slate-200 lg:block"
            />
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group relative"
              >
                <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF2FF] text-xs font-bold text-[#0066FF] ring-4 ring-white transition-colors duration-300 group-hover:bg-[#0066FF] group-hover:text-white">
                  {step.num}
                </span>
                <h3 className="mt-4 text-base font-bold text-[#0B132B]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. DARK NAVY ROUNDED CTA CARD */}
        <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07132A] via-[#0B1E40] to-[#102B5C] px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-navy-grid"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#0066FF]/20 blur-3xl"
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
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-semibold text-[#0B132B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
