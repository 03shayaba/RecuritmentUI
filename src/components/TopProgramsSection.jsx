import { useState, useEffect } from 'react';
import { ArrowUpRight, GraduationCap, Users, X, CheckCircle2 } from 'lucide-react';
import { TOP_PROGRAM_TABS } from '../data/homeData';

export default function TopProgramsSection() {
  const [activeTabId, setActiveTabId] = useState(TOP_PROGRAM_TABS[0].id);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const activeTab =
    TOP_PROGRAM_TABS.find((t) => t.id === activeTabId) || TOP_PROGRAM_TABS[0];

  useEffect(() => {
    if (!selectedProgram) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProgram(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProgram]);

  return (
    <section
      id="top-programs"
      className="py-20 sm:py-24 bg-gradient-to-b from-white via-[#F5F9FE] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#337AB7]">
            / AVY Kochhar Academy /
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0C2544] tracking-tight uppercase">
            Top <span className="text-[#337AB7]">Program</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Executive coaching, commercial sales enablement, soft skills, and campus
            readiness tracks built for measurable capability uplift.
          </p>
        </div>

        {/* 4 Category Tabs matching reference */}
        <div
          role="tablist"
          aria-label="Top training programs"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 border-b border-slate-200 pb-0 mb-10 sm:mb-12"
        >
          {TOP_PROGRAM_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTabId(tab.id)}
                className={`relative px-3 sm:px-5 py-3.5 text-sm sm:text-[15px] font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#337AB7]'
                    : 'text-slate-600 hover:text-[#0C2544]'
                }`}
              >
                {tab.label}
                <span
                  className={`absolute inset-x-0 -bottom-[1px] h-[3px] rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[#337AB7] scale-x-100' : 'bg-transparent scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* 3x2 Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {activeTab.programs.map((program) => (
            <button
              key={program.title}
              type="button"
              onClick={() =>
                setSelectedProgram({ ...program, category: activeTab.label })
              }
              className="group rounded-xl border border-slate-200/90 bg-white overflow-hidden text-left shadow-sm hover:shadow-xl hover:border-[#337AB7]/45 transition-all duration-300 flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#337AB7]"
            >
              {/* Card Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2544]/60 via-[#0C2544]/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#0C2544]/85 backdrop-blur-xs px-3 py-1 text-[11px] font-semibold text-white">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-300" />
                  {activeTab.label}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-3 w-full border-t border-slate-100">
                <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0C2544] group-hover:text-[#337AB7] tracking-wide leading-snug transition-colors uppercase text-center">
                  {program.title}
                </h3>
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#337AB7]">
                  <span>View Program Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C2544]/60 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <button
              type="button"
              onClick={() => setSelectedProgram(null)}
              aria-label="Close program details"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <p className="text-xs font-bold text-[#337AB7] uppercase tracking-wider">
                {selectedProgram.category}
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0C2544] mt-1 leading-snug">
                {selectedProgram.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedProgram.summary}
            </p>

            <div className="rounded-xl bg-[#EDF4FB] border border-[#337AB7]/20 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0C2544]">
                <Users className="w-4 h-4 text-[#337AB7]" />
                <span>Ideal Audience</span>
              </div>
              <p className="text-sm font-medium text-slate-700">
                {selectedProgram.audience}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-[#337AB7] shrink-0" />
              <span>Customizable on-site, hybrid, and cohort formats via AVY Kochhar Academy</span>
            </div>

            <div className="pt-2 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProgram(null)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#0C2544] px-5 py-2 text-sm font-semibold text-white hover:bg-[#337AB7] transition-colors"
              >
                Request Program Brochure
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

