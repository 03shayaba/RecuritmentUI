import { Building2 } from 'lucide-react';
import { CLIENT_SEGMENTS } from '../data/homeData';

export default function TrustedMetrics() {
  return (
    <section className="bg-gradient-to-r from-[#081D36] via-[#0C2B4E] to-[#081D36] border-y border-[#1E4D7E]/50 py-5 sm:py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4">
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-300">
          Trusted Partner Across Segments
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CLIENT_SEGMENTS.map((segment) => (
            <span
              key={segment}
              className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#10345C]/90 border border-[#24588E] px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-semibold text-sky-100 shadow-xs hover:bg-[#18487D] hover:text-white hover:border-[#C5A16D] transition-all duration-200 cursor-default"
            >
              <Building2 className="w-3.5 h-3.5 text-[#C5A16D] group-hover:text-[#C5A16D] shrink-0 transition-colors" />
              <span>{segment}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}