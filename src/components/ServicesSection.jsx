import { useState, useEffect, useCallback } from 'react';
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
    tag: '/ 01 recruitment',
    title: 'Executive Search',
    description:
      'Precision leadership hiring, RPO partnerships, and campus drives for MNCs, blue-chip firms, and SMEs.',
    image: '/executive-search.jpg',
    icon: UserSearch,
    details: [
      'C-Suite, VP & Senior Leadership Headhunting',
      'Dedicated Recruitment Process Partnerships (RPO)',
      'Structured Campus & Lateral Talent Acquisition',
      'PAN-India & Overseas Talent Market Mapping',
    ],
  },
  {
    tag: '/ 02 strategy',
    title: 'Business Consulting',
    description:
      'Strategic marketing advisory, sales process innovation, and market expansion built for measurable growth.',
    image: '/executive-leadership.jpg',
    icon: BarChart3,
    details: [
      'Corporate Growth & Market Entry Analysis',
      'Sales Process Structuring & Channel Expansion',
      'Brand Positioning & Go-To-Market Advisory',
      'IT Support & Operational Efficiency Consulting',
    ],
  },
  {
    tag: '/ 03 leadership',
    title: 'AVY Kochhar Academy',
    description:
      'Behavioral executive coaching, impact sales bootcamps, and Train-the-Trainer capability programs.',
    image: '/bottom-banner.jpg',
    icon: GraduationCap,
    details: [
      'Leadership & Behavioral Executive Coaching',
      'High-Impact B2B & Enterprise Sales Training',
      'Train-the-Trainer Certification Tracks',
      'University Employability & Soft Skills Programs',
    ],
  },
  {
    tag: '/ 04 hr advisory',
    title: 'HR Transformation',
    description:
      'Manpower planning, organizational restructuring, and performance frameworks tailored for scale.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80',
    icon: Layers,
    details: [
      'Manpower Planning & Org Restructuring',
      'HR Policies, Handbooks & Governance',
      'Performance Management Systems (PMS)',
      '360-Degree Feedback & Culture Surveys',
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

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setSlideIndex((prev) => prev + 1);
  }, []);

  const prevSlide = () => {
    if (slideIndex === 0) {
      setIsTransitioning(false);
      setSlideIndex(SERVICE_CARDS.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setSlideIndex(SERVICE_CARDS.length - 1);
        });
      });
      return;
    }
    setIsTransitioning(true);
    setSlideIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (selectedService) return;
    const timer = setInterval(nextSlide, 4200);
    return () => clearInterval(timer);
  }, [nextSlide, selectedService]);

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
      className="py-20 sm:py-24 bg-slate-50/80 border-y border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Eyebrow + Title | Circular Prev/Next Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div className="space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#337AB7]">
              / Services /
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0C2544] tracking-tight leading-[1.15]">
              Innovative <span className="text-[#337AB7]">Solutions</span> for Talents
            </h2>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous services"
              className="w-11 h-11 rounded-full bg-[#0C2544] hover:bg-[#163C6B] text-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next services"
              className="w-11 h-11 rounded-full bg-[#337AB7] hover:bg-[#286090] text-white flex items-center justify-center shadow-md shadow-[#337AB7]/25 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Smooth Sliding Cards Track */}
        <div className="overflow-hidden -mx-3">
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
                  <article className="group h-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#337AB7]/40 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      {/* Card Image + Floating Icon Badge */}
                      <div className="relative mb-8">
                        <div className="overflow-hidden rounded-xl h-52 bg-slate-100">
                          <img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-6 right-5 w-14 h-14 rounded-xl bg-white border border-slate-100 shadow-lg flex items-center justify-center text-[#337AB7] group-hover:bg-[#337AB7] group-hover:text-white transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <p className="text-xs font-semibold text-[#337AB7] mb-1.5">
                        {service.tag}
                      </p>
                      <h3 className="text-xl font-extrabold text-[#0C2544] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-[#337AB7] transition-colors cursor-pointer"
                      >
                        Read More
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <p className="text-xs font-bold text-[#337AB7] uppercase tracking-wider">
                {selectedService.tag}
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                {selectedService.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            <ul className="space-y-2.5 pt-2 border-t border-slate-100">
              {selectedService.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#337AB7] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#337AB7] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#286090]"
              >
                Request Proposal
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

