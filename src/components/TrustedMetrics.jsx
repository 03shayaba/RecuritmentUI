import { Building2 } from 'lucide-react';
import { CLIENT_SEGMENTS } from '../data/homeData';

export default function TrustedMetrics() {
  return (
    <section className="bg-[#E6F0FA] border-y border-[#337AB7]/20 py-5 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4">
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0C2544]/80">
          Trusted Partner Across Segments
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CLIENT_SEGMENTS.map((segment) => (
            <span
              key={segment}
              className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white border border-[#337AB7]/25 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-semibold text-[#0C2544] shadow-2xs hover:bg-[#0C2544] hover:text-white hover:border-[#0C2544] transition-colors"
            >
              <Building2 className="w-3.5 h-3.5 text-[#337AB7] group-hover:text-sky-300 shrink-0 transition-colors" />
              <span>{segment}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
