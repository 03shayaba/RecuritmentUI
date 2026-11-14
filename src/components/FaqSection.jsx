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
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left justify-center sm:justify-start">
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
        <svg className="w-20 h-20 sm:w-28 sm:h-28 -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="3.5"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#C5A16D"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="absolute inset-2.5 sm:inset-3.5 rounded-full bg-[#0A0F14] border border-[#C5A16D]/30 shadow-lg flex items-center justify-center">
          <span className="text-lg sm:text-2xl font-extrabold text-[#C5A16D] tracking-tight tabular-nums">
            {displayPercent}
            <span className="text-[10px] sm:text-xs font-bold align-top ml-0.5">%</span>
          </span>
        </div>
      </div>

      <div className="leading-snug">
        <p className="text-sm sm:text-lg font-bold text-white">{labelTop}</p>
        <p className="text-sm sm:text-lg font-bold text-[#DFCAAA]">{labelBottom}</p>
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
      className="relative py-14 sm:py-24 lg:py-32 bg-gradient-to-br from-[#0A0F14] via-[#122A3E] to-[#0A0F14] text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-[#C5A16D]/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Image + Balanced 2-Line Heading | Numbered FAQ Accordion */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-7">
            <div className="overflow-hidden rounded-2xl border border-[#C5A16D]/30 bg-white shadow-2xl">
              <img
                src="/bottom-banner.jpg"
                alt="IBA Consulting Worldwide team collaboration"
                loading="lazy"
                className="w-full h-52 sm:h-72 object-cover object-center"
              />
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C5A16D]">
                / Why Choose Us? /
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18]">
                Trusted Search &amp;
                <br />
                <span className="text-[#C5A16D]">HR Advisory Partner.</span>
              </h2>
            </div>
          </div>

          {/* Right Column: Numbered Accordion */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.num}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'bg-white text-[#122A3E] border-white shadow-2xl'
                      : 'bg-white/[0.05] text-white border-white/10 hover:bg-white/[0.1] hover:border-[#C5A16D]/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-7 py-4 sm:py-6 text-left cursor-pointer"
                  >
                    <span
                      className={`text-sm sm:text-base font-bold ${
                        isOpen ? 'text-[#122A3E]' : 'text-white'
                      }`}
                    >
                      <span className={`mr-1.5 ${isOpen ? 'text-[#C5A16D]' : 'text-[#DFCAAA]'}`}>
                        {faq.num}
                      </span>
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#F5F3EE] text-[#C5A16D]'
                          : 'bg-white/10 text-[#DFCAAA]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-7 pb-5 sm:pb-6 text-xs sm:text-[15px] text-[#283A46] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hairline Divider in Slate/Gold */}
        <div className="my-12 sm:my-16 lg:my-20 border-t border-white/10" />

        {/* Bottom Row: Animated Circular Progress Gauges in Champagne Gold */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10"
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