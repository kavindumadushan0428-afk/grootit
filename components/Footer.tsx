import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061024] text-white">
      {/* Subtle top blue hairline glow */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-10">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
          {/* Left Brand Info with Uploaded GROOTIT Logo */}
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
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Available for new international projects</span>
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
