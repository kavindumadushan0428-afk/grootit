"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { WhatsAppBrandIcon } from "./BrandIcons";
import { DIMENSIONS } from "./data";
import { buildWhatsAppUrl, LEAD_CONFIG } from "@/lib/leads";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<string>("");

  return (
    <div data-section="floating_whatsapp" className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#07132A] to-[#0E244D] px-4 py-3.5 text-white">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <WhatsAppBrandIcon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-bold">Chat with GROOTIT</div>
                  <div className="text-[10px] text-slate-300">
                    Quick WhatsApp Inquiry
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                aria-label="Close WhatsApp widget"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <label className="mb-2 block text-[11px] font-semibold text-slate-600">
                1. Select a service topic (pre-fills your message):
              </label>
              <div className="flex flex-wrap gap-1.5">
                {DIMENSIONS.map((div) => {
                  const active = selectedDivision === div.title;
                  return (
                    <button
                      key={div.id}
                      type="button"
                      onClick={() =>
                        setSelectedDivision(active ? "" : div.title)
                      }
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                        active
                          ? "bg-[#0066FF] text-white"
                          : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-[#EAF2FF]"
                      }`}
                    >
                      {div.title}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 space-y-2">
                <div className="text-[11px] font-semibold text-slate-600">
                  2. Start chat on either account:
                </div>
                <a
                  href={buildWhatsAppUrl({
                    account: "primary",
                    division: selectedDivision || undefined,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 px-3.5 py-2.5 text-xs font-semibold text-emerald-900 transition-colors hover:bg-emerald-500 hover:text-white"
                >
                  <span>WhatsApp 1 · {LEAD_CONFIG.whatsappPrimary.display}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={buildWhatsAppUrl({
                    account: "secondary",
                    division: selectedDivision || undefined,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 px-3.5 py-2.5 text-xs font-semibold text-emerald-900 transition-colors hover:bg-emerald-500 hover:text-white"
                >
                  <span>
                    WhatsApp 2 · {LEAD_CONFIG.whatsappSecondary.display}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open WhatsApp quick chat"
        className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.38)] transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
      >
        <WhatsAppBrandIcon className="h-4 w-4 rounded-full ring-1 ring-white/50" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </button>
    </div>
  );
}
