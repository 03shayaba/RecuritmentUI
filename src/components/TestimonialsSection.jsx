import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/homeData';

const EXTENDED_SLIDES = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, 2)];

export default function TestimonialsSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isTwoUp, setIsTwoUp] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  );
  const touchStartX = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const updateLayout = () => setIsTwoUp(media.matches);
    updateLayout();
    media.addEventListener('change', updateLayout);
    return () => media.removeEventListener('change', updateLayout);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setSlideIndex((prev) => prev + 1);
  }, []);

  const prevSlide = () => {
    if (slideIndex === 0) {
      setIsTransitioning(false);
      setSlideIndex(TESTIMONIALS.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setSlideIndex(TESTIMONIALS.length - 1);
        });
      });
      return;
    }
    setIsTransitioning(true);
    setSlideIndex((prev) => prev - 1);
  };

  // Automatic smooth slide every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 3200);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleTransitionEnd = () => {
    if (slideIndex >= TESTIMONIALS.length) {
      setIsTransitioning(false);
      setSlideIndex(0);
    }
  };

  const stepPercent = isTwoUp ? 50 : 100;
  const activeDot = slideIndex % TESTIMONIALS.length;

  return (
    <section
      id="testimonials"
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F5F3EE] via-white to-[#F5F3EE] border-y border-[#EAE6DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-7 sm:gap-8 items-stretch">
          {/* Left 8 Cols: Header + Arrows + Smooth Auto-Sliding Carousel */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6 sm:space-y-8 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-5">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C5A16D]">
                  / Our Clients /
                </p>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#122A3E] tracking-tight leading-[1.18]">
                  What <span className="text-[#C5A16D]">clients say</span> about
                  <br className="hidden sm:inline" /> IBA Consulting Worldwide
                </h2>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonials"
                  className="w-11 h-11 rounded-full bg-[#0A0F14] hover:bg-[#122A3E] text-white flex items-center justify-center shadow-sm border border-[#283A46] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonials"
                  className="w-11 h-11 rounded-full bg-[#C5A16D] hover:bg-[#A9844F] text-[#0A0F14] flex items-center justify-center shadow-md shadow-[#C5A16D]/20 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sliding Viewport */}
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
                {EXTENDED_SLIDES.map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="w-full md:w-1/2 shrink-0 px-3"
                  >
                    <article className="h-full rounded-2xl border border-[#EAE6DC] border-t-4 border-t-[#C5A16D] bg-white p-6 shadow-md shadow-black/5 hover:shadow-xl hover:border-t-[#0A0F14] transition-all flex flex-col justify-between">
                      {/* Author Row */}
                      <div className="flex items-center gap-3.5 mb-5">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          loading="lazy"
                          className="w-12 h-12 rounded-full object-cover border border-[#EAE6DC] shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-bold text-sm sm:text-base text-[#122A3E] truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#283A46] truncate">
                            {item.role} • {item.company}
                          </p>
                        </div>
                      </div>

                      {/* Inner Quote Box + Floating Quote Circle */}
                      <div className="relative rounded-xl bg-[#F5F3EE] p-5 pt-6 flex-1">
                        <span className="absolute -top-5 right-4 w-11 h-11 rounded-full bg-white border border-[#EAE6DC] shadow-md flex items-center justify-center text-[#C5A16D]">
                          <Quote className="w-5 h-5 fill-current text-[#C5A16D]" />
                        </span>
                        <p className="text-sm text-[#283A46] leading-relaxed">
                          “{item.quote}”
                        </p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setIsTransitioning(true);
                    setSlideIndex(idx);
                  }}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeDot === idx
                      ? 'w-7 bg-[#C5A16D]'
                      : 'w-2 bg-[#EAE6DC] hover:bg-[#C5A16D]/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right 4 Cols: Tall Rating Highlight Card */}
          <div className="lg:col-span-4">
            <div className="relative h-full min-h-[260px] sm:min-h-[340px] rounded-2xl overflow-hidden shadow-xl border border-[#C5A16D]/30 bg-[#0A0F14] text-white flex flex-col justify-end">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"
                alt="Happy clients reviewing IBA Consulting results"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              {/* Top floating star badge in Champagne Gold */}
              <div className="absolute top-5 right-5 z-10 w-14 h-14 rounded-2xl bg-white/95 shadow-lg flex items-center justify-center border border-[#EAE6DC]">
                <Star className="w-8 h-8 text-[#C5A16D] fill-[#C5A16D]" />
              </div>

              {/* Black / Deep Navy Bottom Gradient Overlay with Champagne Gold Stroke */}
              <div className="relative z-10 bg-gradient-to-t from-[#0A0F14] via-[#122A3E]/95 to-transparent pt-20 pb-8 px-6 text-center space-y-1.5">
                <p
                  className="text-6xl font-extrabold tracking-tight text-transparent select-none leading-none"
                  style={{ WebkitTextStroke: '2px #C5A16D' }}
                >
                  4.8
                </p>
                <p className="text-lg font-bold text-white pt-1">Average Rating</p>
                <p className="text-xs sm:text-sm text-[#DFCAAA] font-medium">
                  (30+) Enterprise Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}