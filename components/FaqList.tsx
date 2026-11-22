import type { Faq } from "@/lib/content";

/** Accessible, JS-free FAQ accordion (native <details>). */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-slate-200/80 overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
      {faqs.map((faq) => (
        <details key={faq.q} className="group px-6 py-5 open:bg-[#F7FAFF]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#0B132B] [&::-webkit-details-marker]:hidden">
            <span>{faq.q}</span>
            <span
              aria-hidden="true"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-base leading-none text-[#0066FF] transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-slate-600 sm:text-sm">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}
