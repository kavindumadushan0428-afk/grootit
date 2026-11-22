import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { FaqList } from "@/components/FaqList";
import { WhatsAppBrandIcon } from "@/components/BrandIcons";
import {
  Reveal,
  MaskLine,
  MagneticWrap,
  ScrollPortalCard,
} from "@/components/MotionPrimitives";
import {
  INDUSTRIES,
  divisionIdForService,
  getIndustry,
} from "@/lib/content";
import {
  breadcrumbSchema,
  faqSchema,
  industryServiceSchema,
  pageMetadata,
} from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/leads";
import { ArrowRight } from "lucide-react";

type Params = { slug: string };

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const path = `/industries/${industry.slug}`;
  const whatsappHref = buildWhatsAppUrl({ message: industry.waMessage });
  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug);

  return (
    <div className="min-h-screen bg-white bg-page-glow text-[#0B132B]">
      <Navbar />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: industry.name, path },
          ]),
          industryServiceSchema({
            name: industry.name,
            description: industry.metaDescription,
            path,
          }),
          faqSchema(industry.faqs),
        ]}
      />

      <main className="pt-32 md:pt-40">
        {/* Hero */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <nav aria-label="Breadcrumb" className="text-[11px] text-slate-500">
            <Link href="/" className="hover:text-[#0066FF]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B132B]">{industry.name}</span>
          </nav>

          <Reveal y={12}>
            <div className="mt-6 text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
              {industry.eyebrow}
            </div>
          </Reveal>

          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B132B] sm:text-5xl">
            <MaskLine delay={0.05}>{industry.h1}</MaskLine>
          </h1>

          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {industry.intro}
            </p>
          </Reveal>

          <Reveal delay={0.26} className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticWrap>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-3.5 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,102,255,0.28)] transition-colors hover:bg-[#0052CC]"
              >
                <WhatsAppBrandIcon className="h-4 w-4" />
                <span>Discuss your project on WhatsApp</span>
              </a>
            </MagneticWrap>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3.5 text-xs font-semibold text-[#0B132B] transition-colors hover:border-blue-200 hover:bg-slate-50"
            >
              Other ways to contact us
            </Link>
          </Reveal>
        </section>

        {/* Challenges */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <Reveal>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
              WHAT WE SOLVE
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
              Common challenges, practical solutions.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {industry.challenges.map((c, idx) => (
              <Reveal key={c.problem} delay={idx * 0.07}>
                <article className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_14px_rgba(15,23,42,0.03)] transition-colors hover:border-blue-200">
                  <h3 className="text-base font-bold text-[#0B132B]">
                    {c.problem}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {c.solution}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <Link
                        key={s}
                        href={`/services#${divisionIdForService(s)}`}
                        className="rounded-full bg-[#EAF2FF] px-3 py-1 text-[11px] font-semibold text-[#0066FF] transition-colors hover:bg-[#0066FF] hover:text-white"
                      >
                        {s}
                      </Link>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Real proof (only where we have genuine client work) */}
        {industry.proof && (
          <section className="mx-auto max-w-[1200px] px-6 pb-16">
            <Reveal>
              <div className="rounded-2xl border border-blue-100 bg-[#F2F7FF] p-8 md:p-10">
                <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
                  RELATED WORK
                </div>
                <h2 className="mt-2 text-xl font-extrabold text-[#0B132B] sm:text-2xl">
                  {industry.proof.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                  {industry.proof.text}
                </p>
                <Link
                  href={industry.proof.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:underline"
                >
                  <span>{industry.proof.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </section>
        )}

        {/* Recommended services */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <Reveal>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
              WHERE WE USUALLY START
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B132B] sm:text-3xl">
              Services we typically recommend
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {industry.recommended.map((s) => (
                <Link
                  key={s}
                  href={`/services#${divisionIdForService(s)}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-[#EAF2FF] hover:text-[#0066FF]"
                >
                  {s}
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[900px] px-6 pb-16">
          <Reveal>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
              QUESTIONS
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B132B] sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-6">
              <FaqList faqs={industry.faqs} />
            </div>
          </Reveal>
        </section>

        {/* Other industries (internal linking) */}
        <section className="mx-auto max-w-[1200px] px-6 pb-16">
          <Reveal>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0066FF]">
              OTHER INDUSTRIES
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {others.map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-5 py-3 text-xs font-bold text-[#0B132B] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-[#EAF2FF] hover:text-[#0066FF]"
                >
                  <span>{i.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1200px] px-6 pb-20">
          <ScrollPortalCard>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07132A] via-[#0B1E40] to-[#102B5C] px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-navy-grid"
              />
              <div className="relative z-10">
                <h2 className="mx-auto max-w-lg text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Tell us what you&apos;re building.
                </h2>
                <p className="mx-auto mt-3 max-w-md text-xs text-slate-300 sm:text-sm">
                  Message us on WhatsApp and we&apos;ll listen first.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <MagneticWrap>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-semibold text-[#0B132B] shadow-md transition-colors hover:bg-blue-50"
                    >
                      <WhatsAppBrandIcon className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </MagneticWrap>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Email or call us
                  </Link>
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
