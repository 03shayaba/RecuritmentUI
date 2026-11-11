import { Building2 } from 'lucide-react';
import { CLIENT_SEGMENTS } from '../data/homeData';

export default function TrustedMetrics() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">
          Trusted Partner Across Segments
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {CLIENT_SEGMENTS.map((segment) => (
            <span
              key={segment}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/90 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-2xs hover:border-[#337AB7]/40 hover:text-[#337AB7] transition-colors"
            >
              <Building2 className="w-3.5 h-3.5 text-[#337AB7] shrink-0" />
              <span>{segment}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
