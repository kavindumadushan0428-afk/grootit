"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Bot,
  Sparkles,
  Layout,
  TrendingUp,
} from "lucide-react";
import { DIMENSIONS } from "./data";
import { GrootitLogo } from "./GrootitLogo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/work" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const DIVISION_ICONS = {
  ai: Bot,
  brand: Sparkles,
  digital: Layout,
  growth: TrendingUp,
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct =
        docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(pct);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      onMouseLeave={() => setMegaOpen(false)}
      className="fixed left-0 top-0 z-50 w-full pt-4"
    >
      {/* Top 2027 Scroll Progress Hairline */}
      <div className="fixed left-0 top-0 z-50 h-[2.5px] w-full bg-slate-200/40">
        <div
          className="h-full bg-gradient-to-r from-[#0066FF] to-[#4DA3FF] transition-[width] duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Floating White Pill Navigation Bar */}
        <div
          className={`flex items-center justify-between bg-white/95 px-6 py-3 backdrop-blur-xl transition-all duration-300 ${
            megaOpen
              ? "rounded-t-3xl border border-b-0 border-slate-200/90 shadow-sm"
              : "rounded-full border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
          }`}
        >
          {/* Official Uploaded GROOTIT Logo */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none"
            aria-label="GROOTIT Home"
          >
            <GrootitLogo />
          </Link>

          {/* Desktop Center Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-1.5 md:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                        isActive || megaOpen
                          ? "bg-[#EAF2FF] text-[#0066FF]"
                          : "text-slate-700 hover:bg-slate-100 hover:text-[#0B132B]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          megaOpen ? "rotate-180 text-[#0066FF]" : ""
                        }`}
                      />
                    </Link>
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setMegaOpen(false)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#EAF2FF] text-[#0066FF]"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#0B132B]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Pill */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-[#0066FF] px-5 py-2 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(0,102,255,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0052CC] hover:shadow-[0_6px_20px_rgba(0,102,255,0.4)] sm:inline-flex"
            >
              <span>Let&apos;s Talk</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Services Mega-Menu Dropdown with Motion */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="hidden rounded-b-3xl border border-t border-slate-200/90 bg-white/98 px-8 py-9 shadow-[0_24px_60px_rgba(15,23,42,0.1)] backdrop-blur-xl md:block"
            >
              <div className="grid grid-cols-4 gap-8">
                {DIMENSIONS.map((div) => {
                  const Icon = DIVISION_ICONS[div.visualType];
                  return (
                    <div key={div.id} className="group/col">
                      <Link
                        href={`/services#${div.id}`}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-center gap-2.5 text-base font-bold text-[#0B132B] transition-colors hover:text-[#0066FF]"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#0066FF] transition-transform duration-200 group-hover/col:scale-110">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span>{div.title}</span>
                      </Link>
                      <ul className="mt-4 space-y-2.5 pl-0.5">
                        {div.services.map((service) => (
                          <li key={service}>
                            <Link
                              href={`/services#${div.id}`}
                              onClick={() => setMegaOpen(false)}
                              className="inline-flex items-center gap-1.5 text-xs text-slate-500 transition-all hover:translate-x-1 hover:text-[#0066FF]"
                            >
                              <span className="h-1 w-1 rounded-full bg-slate-300" />
                              <span>{service}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                <Link
                  href="/services"
                  onClick={() => setMegaOpen(false)}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:underline"
                >
                  <span>View All Services</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] font-medium text-slate-400">
                  Creativity Meets Intelligence · 4 Focused Divisions
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                        isActive
                          ? "bg-[#EAF2FF] text-[#0066FF]"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0066FF] px-5 py-2.5 text-xs font-semibold text-white"
                >
                  Let&apos;s Talk
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
