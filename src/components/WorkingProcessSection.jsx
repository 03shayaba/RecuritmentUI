import { useState } from 'react';
import { Briefcase, FileText, Users, UserCheck } from 'lucide-react';

const RECRUITMENT_STEPS = [
  {
    step: 'Step 01',
    num: '01',
    title: 'Identifying The Needs',
    description:
      'Align with business leaders to scope role expectations, culture fit, and mandate priorities.',
    icon: Briefcase,
    desktopOffset: 'lg:mt-48',
  },
  {
    step: 'Step 02',
    num: '02',
    title: 'Preparing A Job Description',
    description:
      'Structure competency frameworks, market compensation benchmarks, and search strategy.',
    icon: FileText,
    desktopOffset: 'lg:mt-32',
  },
  {
    step: 'Step 03',
    num: '03',
    title: 'Find A Talented Candidate',
    description:
      'Leverage PAN-India & global headhunting networks to source high-caliber executive talent.',
    icon: Users,
    desktopOffset: 'lg:mt-16',
  },
  {
    step: 'Step 04',
    num: '04',
    title: 'Screening And Shortlisting',
    description:
      'Deliver vetted shortlists through structured behavioral assessments and advisory support.',
    icon: UserCheck,
    desktopOffset: 'lg:mt-0',
  },
];

export default function WorkingProcessSection() {
  const [activeStep, setActiveStep] = useState(1); // Step 02 active by default as in reference

  return (
    <section
      id="process"
      className="relative pt-20 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32 bg-gradient-to-b from-[#081D36] via-[#0C2B4E] to-[#081D36] text-white overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -top-32 right-1/4 w-[450px] h-[450px] rounded-full bg-[#1E4D7E]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0C2544]/60 blur-3xl" />

      {/* Large Outlined Watermark ("process") in Bottom Right */}
      <span
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute bottom-3 right-6 lg:right-12 text-[100px] lg:text-[144px] font-extrabold lowercase tracking-tight text-transparent select-none leading-none z-0"
        style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.07)' }}
      >
        process
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Generous Padding */}
        <div className="max-w-xl space-y-3 mb-12 sm:mb-16 lg:mb-4 text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-[#C5A16D]/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#DFCAAA]">
            <span>✦ HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.16]">
            <span className="text-sky-300">Steps</span> of Recruitment
            <br />
            Process
          </h2>
          <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed max-w-md pt-1">
            Our systematic, retained 4-stage search methodology engineered for C-Suite precision and cultural alignment.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP STAIRCASE (lg:grid)
            - 4 Ascending Columns (Step 01 at bottom -> Step 04 at top)
            - Clean Step Indicator Line
        ========================================================================== */}
        <div className="hidden lg:block relative mt-4">
          {/* Continuous Stepped Dotted Staircase Path */}
          <div className="pointer-events-none absolute inset-x-0 bottom-6 w-full h-52 z-0">
            <svg
              viewBox="0 0 1200 240"
              preserveAspectRatio="none"
              className="w-full h-full text-sky-400/40"
              aria-hidden="true"
            >
              <path
                d="M 150 200 H 450 V 136 H 750 V 72 H 1050"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* 4 Staircase Columns */}
          <div className="relative z-10 grid grid-cols-4 gap-6 items-start">
            {RECRUITMENT_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeStep;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`group flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${item.desktopOffset}`}
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-4.5 ${
                      isActive
                        ? 'bg-[#1E4D7E] border-2 border-sky-300 text-white shadow-xl shadow-sky-900/40 ring-4 ring-sky-400/30 scale-110'
                        : 'bg-[#0E2C4F] border border-[#23588F] text-sky-200 group-hover:bg-[#153D6B] group-hover:text-white group-hover:border-sky-300'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-extrabold text-white leading-snug max-w-[210px] min-h-[44px] flex items-center justify-center">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mt-2 max-w-[240px] min-h-[56px]">
                    {item.description}
                  </p>

                  {/* Step Pill on Staircase Line */}
                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveStep(idx);
                      }}
                      className={`inline-flex items-center justify-center rounded-lg px-4 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[#C5A16D] text-[#0A0F14] shadow-lg shadow-black/30 ring-2 ring-[#C5A16D]/40 scale-105'
                          : 'bg-[#0D2E52] text-sky-200 border border-[#23588F] hover:bg-[#153D6B] hover:text-white'
                      }`}
                    >
                      {item.step}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET TIMELINE STAIRCASE (Clean vertical stepper)
            - Prevents squishing and misalignment on mobile screens
        ========================================================================== */}
        <div className="lg:hidden relative space-y-6 pt-4">
          <div className="relative pl-7 sm:pl-9 border-l-2 border-dashed border-sky-400/40 space-y-8 sm:space-y-10 text-left">
            {RECRUITMENT_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeStep;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className="relative group cursor-pointer"
                >
                  {/* Floating Indicator Circle on Timeline Line */}
                  <div
                    className={`absolute -left-[41px] sm:-left-[49px] top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[#C5A16D] text-[#0A0F14] shadow-lg ring-4 ring-[#C5A16D]/30'
                        : 'bg-[#0D2E52] border border-[#23588F] text-sky-200'
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`rounded-2xl p-4 sm:p-5 transition-all ${
                      isActive
                        ? 'bg-[#0E2C4F] border border-sky-300/40 shadow-lg'
                        : 'bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-[#C5A16D] uppercase tracking-wider">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-semibold text-sky-200/60">
                        Phase 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}