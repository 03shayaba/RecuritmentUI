import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS, CAPABILITY_STATS } from '../data/homeData';

function CircularStat({ percent, labelTop, labelBottom, animate }) {
  const [displayPercent, setDisplayPercent] = useState(0);
  const radius = 44;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!animate) return;
    let frameId;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayPercent(Math.round(eased * percent));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [animate, percent]);

  const strokeDashoffset =
    circumference - (displayPercent / 100) * circumference;

  return (
    <div className="flex items-center gap-4 sm:gap-5 justify-center sm:justify-start">
      <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.2"
            strokeWidth="3.5"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#5CA8EB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="absolute inset-3.5 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-extrabold text-[#337AB7] tracking-tight tabular-nums">
            {displayPercent}
            <span className="text-xs font-bold align-top ml-0.5">%</span>
          </span>
        </div>
      </div>

      <div className="text-left leading-snug">
        <p className="text-base sm:text-lg font-bold text-white">{labelTop}</p>
        <p className="text-base sm:text-lg font-bold text-white/90">{labelBottom}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faqs"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-[#0C2544] via-[#13345D] to-[#1D4C80] text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-[#337AB7]/25 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Image + Balanced 2-Line Heading | Numbered FAQ Accordion */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-7">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl">
              <img
                src="/bottom-banner.jpg"
                alt="IBA Consulting Worldwide team collaboration"
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover object-center"
              />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                / Why Choose Us? /
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.15]">
                Trusted Search &amp;
                <br />
                <span className="text-sky-300">HR Advisory Partner.</span>
              </h2>
            </div>
          </div>

          {/* Right Column: Numbered Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.num}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'bg-white text-slate-900 border-white shadow-2xl'
                      : 'bg-white/[0.07] text-white border-white/15 hover:bg-white/[0.12] hover:border-white/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 sm:px-7 py-5 sm:py-6 text-left cursor-pointer"
                  >
                    <span
                      className={`text-sm sm:text-base font-bold ${
                        isOpen ? 'text-[#0C2544]' : 'text-white'
                      }`}
                    >
                      <span className={`mr-1.5 ${isOpen ? 'text-[#337AB7]' : 'text-sky-300'}`}>
                        {faq.num}
                      </span>
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#EDF4FB] text-[#337AB7]'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="my-16 sm:my-20 border-t border-white/15" />

        {/* Bottom Row: Animated Circular Progress Gauges */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
        >
          {CAPABILITY_STATS.map((stat) => (
            <CircularStat
              key={stat.labelTop + stat.labelBottom}
              percent={stat.percent}
              labelTop={stat.labelTop}
              labelBottom={stat.labelBottom}
              animate={statsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
