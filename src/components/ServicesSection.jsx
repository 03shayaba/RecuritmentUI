import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  UserSearch,
  BarChart3,
  GraduationCap,
  Layers,
  X,
  CheckCircle2,
} from 'lucide-react';

const SERVICE_CARDS = [
  {
    tag: '/ 01 executive search',
    title: 'Executive Search & Recruitment',
    description:
      'Managing searches from MDs and Board Directors to CEO, CFO, CHRO, CMO & senior management across global markets.',
    image: '/executive-search.jpg',
    icon: UserSearch,
    details: [
      'MD, Board Directors, CEO, CFO, CHRO & CMO Search',
      'Executive Search Partners & Recruitment Partners',
      'Campus Hiring Partners & Lateral Acquisition',
      'Competency Interviews, Psychometrics & Risk Mitigation',
    ],
  },
  {
    tag: '/ 02 business consulting',
    title: 'Business & Marketing Consulting',
    description:
      'Corporate marketing strategy, sales process optimization, distribution planning, and IT support consulting.',
    image: '/executive-leadership.jpg',
    icon: BarChart3,
    details: [
      'Corporate Strategy & Business Market Analysis',
      'Brand Positioning, Customer & Competitor Research',
      'Sales Process Optimization & Distribution Planning',
      'Change Management & IT Support Consulting',
    ],
  },
  {
    tag: '/ 03 avy kochhar academy',
    title: 'Coaching & Training Solutions',
    description:
      'Behavioral executive coaching, leadership transition, impact sales training, soft skills, and university programs.',
    image: '/bottom-banner.jpg',
    icon: GraduationCap,
    details: [
      'Leadership Coaching & Family Business Management 1 & 2',
      'Impact Sales Training, Power Selling & Negotiation',
      'Soft Skill Programs & Train the Trainer Certification',
      'Digital Marketing & University Employability Tracks',
    ],
  },
  {
    tag: '/ 04 hr consulting',
    title: 'HR Consulting & Transformation',
    description:
      'Workforce restructuring, manpower planning, PMS, 360-degree & culture surveys, and policy manuals.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80',
    icon: Layers,
    details: [
      'Workforce Restructuring & Organizational Design',
      'Performance Management Systems & Reward Advisory',
      'Career & Succession Planning & Competency Modeling',
      '360-Degree & Culture Surveys, HR Audits & Handbooks',
    ],
  },
];

const EXTENDED_SERVICES = [...SERVICE_CARDS, ...SERVICE_CARDS.slice(0, 3)];

export default function ServicesSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  });
  const [selectedService, setSelectedService] = useState(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setSlideIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setSlideIndex((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const handleTransitionEnd = () => {
    if (slideIndex >= SERVICE_CARDS.length) {
      setIsTransitioning(false);
      setSlideIndex(0);
    }
  };

  const stepPercent = 100 / visibleCount;

  return (
    <section
      id="services"
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F5F3EE]/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Eyebrow + Title | Circular Prev/Next Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-5 mb-8 sm:mb-12">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C5A16D]">
              / Services /
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#122A3E] tracking-tight leading-[1.18]">
              Innovative <span className="text-[#C5A16D]">Solutions</span> for Talents
            </h2>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous services"
              className="w-11 h-11 rounded-full bg-[#0A0F14] hover:bg-[#122A3E] text-white flex items-center justify-center shadow-sm border border-[#283A46] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next services"
              className="w-11 h-11 rounded-full bg-[#C5A16D] hover:bg-[#A9844F] text-[#0A0F14] flex items-center justify-center shadow-md shadow-[#C5A16D]/20 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Smooth Sliding Cards Track */}
        <div
          className="overflow-hidden -mx-3 touch-pan-y"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (diff > 45) nextSlide();
            else if (diff < -45) prevSlide();
            touchStartX.current = null;
          }}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${
              isTransitioning
                ? 'transition-transform duration-700 ease-in-out'
                : ''
            }`}
            style={{
              transform: `translate3d(-${slideIndex * stepPercent}%, 0, 0)`,
            }}
          >
            {EXTENDED_SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={`${service.title}-${idx}`}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <article className="group h-full rounded-2xl border border-[#EAE6DC] border-t-4 border-t-[#C5A16D] hover:border-t-[#0A0F14] bg-white p-5 sm:p-6 shadow-md shadow-black/5 hover:shadow-xl hover:border-[#C5A16D]/50 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      {/* Card Image + Floating Icon Badge */}
                      <div className="relative mb-8">
                        <div className="overflow-hidden rounded-xl h-52 bg-[#F5F3EE]">
                          <img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-6 right-5 w-14 h-14 rounded-xl bg-[#F5F3EE] border border-[#C5A16D]/30 shadow-lg flex items-center justify-center text-[#C5A16D] group-hover:bg-[#0A0F14] group-hover:text-[#C5A16D] transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <p className="text-xs font-semibold text-[#C5A16D] mb-1.5 uppercase tracking-wider">
                        {service.tag}
                      </p>
                      <h3 className="text-xl font-extrabold text-[#122A3E] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#283A46] leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#122A3E] hover:text-[#C5A16D] transition-colors cursor-pointer"
                      >
                        Read More
                        <ArrowUpRight className="w-4 h-4 text-[#C5A16D]" />
                      </button>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
          {SERVICE_CARDS.map((service, idx) => {
            const activeDot = slideIndex % SERVICE_CARDS.length === idx;
            return (
              <button
                key={service.title}
                type="button"
                onClick={() => {
                  setIsTransitioning(true);
                  setSlideIndex(idx);
                }}
                aria-label={`Show ${service.title}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeDot ? 'w-7 bg-[#C5A16D]' : 'w-2 bg-[#EAE6DC]'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-8 shadow-2xl border border-[#EAE6DC] space-y-5">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-[#283A46] hover:bg-[#F5F3EE] hover:text-[#122A3E]"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <p className="text-xs font-bold text-[#C5A16D] uppercase tracking-wider">
                {selectedService.tag}
              </p>
              <h3 className="text-2xl font-extrabold text-[#122A3E] mt-1">
                {selectedService.title}
              </h3>
              <p className="text-sm text-[#283A46] mt-2 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            <ul className="space-y-2.5 pt-2 border-t border-[#EAE6DC]">
              {selectedService.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2.5 text-sm text-[#122A3E]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C5A16D] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-xl border border-[#EAE6DC] px-4 py-2.5 text-sm font-semibold text-[#122A3E] hover:bg-[#F5F3EE]"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#C5A16D] hover:bg-[#A9844F] px-5 py-2.5 text-sm font-bold text-[#0A0F14]"
              >
                Request Proposal
                <ArrowUpRight className="w-4 h-4 text-[#0A0F14]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}