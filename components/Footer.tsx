import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8.2h2.75l.41-3.2H13.5V8.55c0-.93.26-1.56 1.59-1.56h1.7V4.13c-.29-.04-1.3-.13-2.47-.13-2.45 0-4.12 1.49-4.12 4.24v2.36H7.44v3.2h2.76V22h3.3z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061024] text-white">
      {/* Subtle top blue hairline glow */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-10">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
          {/* Left Brand Info + Social & Direct Contact */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center rounded-xl bg-white px-3.5 py-2 shadow-sm transition-transform hover:scale-[1.02]"
            >
              <Image
                src="/grootit-logo.png"
                alt="GROOTIT"
                width={132}
                height={32}
                className="h-6 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-400">
              Creativity Meets Intelligence. A hybrid Creative + AI agency based
              in Sri Lanka, working with businesses internationally.
            </p>

            {/* Social Media & Direct Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href="https://web.facebook.com/grootit04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GROOTIT on Facebook"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-[#0066FF] hover:bg-[#0066FF] hover:text-white"
              >
                <FacebookIcon className="h-3.5 w-3.5" />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/grootit04/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GROOTIT on Instagram"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-[#0066FF] hover:bg-[#0066FF] hover:text-white"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href="mailto:grootit04@gmail.com"
                aria-label="Email grootit04@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-[#0066FF] hover:bg-[#0066FF] hover:text-white"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>grootit04@gmail.com</span>
              </a>
            </div>

            {/* Dual WhatsApp Buttons */}
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/94787431328"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-2 text-xs font-medium text-emerald-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp · 078 743 1328</span>
              </a>

              <a
                href="https://wa.me/94725076038"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-2 text-xs font-medium text-emerald-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp · 072 507 6038</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-400">
              EXPLORE
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="transition-colors hover:text-[#4DA3FF]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="transition-colors hover:text-[#4DA3FF]">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-[#4DA3FF]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-[#4DA3FF]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#4DA3FF]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div className="md:col-span-4">
            <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-400">
              DIVISIONS
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <Link
                  href="/services#ai-automation"
                  className="transition-colors hover:text-[#4DA3FF]"
                >
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#creative-branding"
                  className="transition-colors hover:text-[#4DA3FF]"
                >
                  Creative &amp; Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services#web-digital-experiences"
                  className="transition-colors hover:text-[#4DA3FF]"
                >
                  Web &amp; Digital Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/services#digital-growth"
                  className="transition-colors hover:text-[#4DA3FF]"
                >
                  Digital Growth
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 GROOTIT. All rights reserved.</p>
          <p>Creativity Meets Intelligence.</p>
        </div>
      </div>
    </footer>
  );
}
