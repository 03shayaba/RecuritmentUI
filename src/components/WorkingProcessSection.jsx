import { useState } from 'react';
import { Briefcase, FileSearch, Users, UserCheck } from 'lucide-react';

const RECRUITMENT_STEPS = [
  {
    step: 'Step 01',
    title: 'Identifying The Needs',
    description:
      'Align with business leaders to scope role expectations, culture fit, and mandate priorities.',
    icon: Briefcase,
    offsetClass: 'lg:mt-44',
  },
  {
    step: 'Step 02',
    title: 'Preparing A Job Description',
    description:
      'Structure competency frameworks, market compensation benchmarks, and search strategy.',
    icon: FileSearch,
    offsetClass: 'lg:mt-28',
  },
  {
    step: 'Step 03',
    title: 'Find A Talented Candidate',
    description:
      'Leverage PAN-India & global headhunting networks to source high-caliber executive talent.',
    icon: Users,
    offsetClass: 'lg:mt-14',
  },
  {
    step: 'Step 04',
    title: 'Screening And Shortlisting',
    description:
      'Deliver vetted shortlists through structured behavioral assessments and advisory support.',
    icon: UserCheck,
    offsetClass: 'lg:mt-0',
  },
];

export default function WorkingProcessSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section
      id="process"
      className="relative py-20 sm:py-24 bg-white overflow-hidden"
    >
      {/* Large Outlined Watermark ("process") in bottom-right */}
      <span
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute bottom-4 right-8 lg:right-16 text-[96px] lg:text-[132px] font-extrabold lowercase tracking-tight text-transparent select-none leading-none"
        style={{ WebkitTextStroke: '1.5px #E2E8F0' }}
      >
        process
      </span>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top-Left Header matching reference */}
        <div className="max-w-xl space-y-2.5 mb-12 lg:mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#337AB7]">
            / How It Works /
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0C2544] tracking-tight leading-[1.15]">
            <span className="text-[#337AB7]">Steps</span> of Recruitment
            <br />
            Process
          </h2>
        </div>

        {/* Stepped Dotted Staircase Connector (Desktop lg+) */}
        <div className="relative">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 280"
            preserveAspectRatio="none"
            className="pointer-events-none hidden lg:block absolute inset-x-0 bottom-4 w-full h-56 text-slate-300"
          >
            <path
              d="M 0 246 H 300 V 182 H 600 V 126 H 900 V 70 H 1200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
          </svg>

          {/* 4 Ascending Staircase Columns */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
            {RECRUITMENT_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  aria-pressed={isActive}
                  className={`group flex flex-col items-center text-center px-3 focus:outline-none cursor-pointer transition-transform duration-300 ${item.offsetClass}`}
                >
                  {/* Icon / Active #337AB7 Circle */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-5 ${
                      isActive
                        ? 'bg-[#337AB7] text-white shadow-xl shadow-[#337AB7]/30 scale-105'
                        : 'bg-[#EDF4FB]/60 text-[#337AB7] group-hover:bg-[#337AB7] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#337AB7]/25'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Copy */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0C2544] leading-snug max-w-[200px]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2.5 max-w-[240px]">
                    {item.description}
                  </p>

                  {/* Step Pill on Staircase Line */}
                  <span
                    className={`mt-7 inline-flex items-center justify-center rounded-md px-4 py-1.5 text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-[#337AB7] text-white shadow-md shadow-[#337AB7]/25'
                        : 'bg-white text-[#337AB7] border border-slate-200 lg:border-transparent group-hover:bg-[#337AB7] group-hover:text-white'
                    }`}
                  >
                    {item.step}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
