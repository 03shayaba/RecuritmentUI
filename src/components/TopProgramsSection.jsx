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
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F5F3EE]/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C5A16D]">
            / AVY Kochhar Academy /
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#122A3E] tracking-tight uppercase">
            Top <span className="text-[#C5A16D]">Program</span>
          </h2>
          <p className="text-xs sm:text-base text-[#283A46]">
            Executive coaching, commercial sales enablement, soft skills, and campus
            readiness tracks built for measurable capability uplift.
          </p>
        </div>

        {/* 4 Category Tabs */}
        <div
          role="tablist"
          aria-label="Top training programs"
          className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-6 sm:border-b sm:border-[#EAE6DC] pb-0 mb-8 sm:mb-12"
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
                className={`relative rounded-xl sm:rounded-none px-3 sm:px-5 py-2.5 sm:py-3.5 text-xs sm:text-[15px] font-bold transition-colors cursor-pointer text-center leading-snug ${
                  isActive
                    ? 'bg-[#0A0F14] text-[#DFCAAA] sm:bg-transparent sm:text-[#C5A16D]'
                    : 'bg-[#F5F3EE] text-[#122A3E] hover:bg-[#EAE6DC] sm:bg-transparent sm:text-[#283A46] sm:hover:bg-transparent sm:hover:text-[#122A3E]'
                }`}
              >
                {tab.label}
                <span
                  className={`hidden sm:block absolute inset-x-0 -bottom-[1px] h-[3px] rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[#C5A16D] scale-x-100' : 'bg-transparent scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* 3x2 Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {activeTab.programs.map((program) => (
            <button
              key={program.title}
              type="button"
              onClick={() =>
                setSelectedProgram({ ...program, category: activeTab.label })
              }
              className="group rounded-xl border border-[#EAE6DC] bg-white overflow-hidden text-left shadow-xs hover:shadow-xl hover:border-[#C5A16D]/50 transition-all duration-300 flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A16D]"
            >
              {/* Card Image */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#F5F3EE]">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14]/70 via-[#0A0F14]/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#0A0F14]/90 backdrop-blur-xs px-3 py-1 text-[11px] font-semibold text-white border border-[#C5A16D]/30">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C5A16D]" />
                  {activeTab.label}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-3 w-full border-t border-[#EAE6DC]">
                <h3 className="text-sm sm:text-[15px] font-extrabold text-[#122A3E] group-hover:text-[#C5A16D] tracking-wide leading-snug transition-colors uppercase text-center">
                  {program.title}
                </h3>
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#C5A16D]">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-8 shadow-2xl border border-[#EAE6DC] space-y-5">
            <button
              type="button"
              onClick={() => setSelectedProgram(null)}
              aria-label="Close program details"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-[#283A46] hover:bg-[#F5F3EE] hover:text-[#122A3E] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <p className="text-xs font-bold text-[#C5A16D] uppercase tracking-wider">
                {selectedProgram.category}
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#122A3E] mt-1 leading-snug">
                {selectedProgram.title}
              </h3>
            </div>

            <p className="text-sm text-[#283A46] leading-relaxed">
              {selectedProgram.summary}
            </p>

            <div className="rounded-xl bg-[#F5F3EE] border border-[#EAE6DC] p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#122A3E]">
                <Users className="w-4 h-4 text-[#C5A16D]" />
                <span>Ideal Audience</span>
              </div>
              <p className="text-sm font-medium text-[#283A46]">
                {selectedProgram.audience}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#283A46]">
              <CheckCircle2 className="w-4 h-4 text-[#C5A16D] shrink-0" />
              <span>Customizable on-site, hybrid, and cohort formats via AVY Kochhar Academy</span>
            </div>

            <div className="pt-2 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="rounded-xl border border-[#EAE6DC] px-4 py-2 text-sm font-semibold text-[#122A3E] hover:bg-[#F5F3EE] cursor-pointer"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProgram(null)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#C5A16D] hover:bg-[#A9844F] px-5 py-2 text-sm font-bold text-[#0A0F14] transition-colors"
              >
                Request Program Brochure
                <ArrowUpRight className="w-4 h-4 text-[#0A0F14]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}