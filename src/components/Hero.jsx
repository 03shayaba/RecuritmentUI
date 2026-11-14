import { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  X,
  MapPin,
  Briefcase,
  ShieldCheck,
  Users,
  Award,
  Globe2,
} from 'lucide-react';
import { HERO_METRICS } from '../data/homeData';

const SLIDES = [
  {
    id: 1,
    image: '/building-leader.jpg',
    badge: 'Executive Search & Leadership Advisory',
    title: 'Building Leaders... Who Can LEAD',
    highlight: 'Who Can LEAD',
    subtitle:
      'Partnering with Fortune 500 MNCs, Blue-Chip Enterprises, and High-Growth Businesses to place visionary C-Suite leadership (MD, CEO, CFO, CHRO).',
    primaryCta: { label: 'Explore Executive Search', href: '#services' },
    secondaryCta: { label: 'Inquire Mandate', href: '#contact' },
  },
  {
    id: 2,
    image: '/banner4.jpg',
    badge: 'Leadership & Capability Transformation',
    title: 'Don’t Just Manage... LEAD!',
    highlight: 'LEAD!',
    subtitle:
      'Unleash high-impact performance across teams. Strategic HR transformation, competency modeling, and workforce advisory for over 25+ years.',
    primaryCta: { label: 'HR Consulting & Advisory', href: '#services' },
    secondaryCta: { label: 'Speak to a Practice Lead', href: '#contact' },
  },
  {
    id: 3,
    image: '/achiever-banner.jpg',
    badge: 'AVY Kochhar Academy',
    title: 'Be an Achiever... Not a Performer',
    highlight: 'Not a Performer',
    subtitle:
      'Executive coaching, commercial sales enablement, behavioral leadership transformation, and university employability programs.',
    primaryCta: { label: 'View Academy Programs', href: '#top-programs' },
    secondaryCta: { label: 'Download Program Brochure', href: '#top-programs' },
  },
  {
    id: 4,
    image: '/banner-team.jpg',
    badge: 'Business & Talent Strategy',
    title: 'Unleash Your Team’s True Talent',
    highlight: 'True Talent',
    subtitle:
      'Aligning business vision with flawless execution — sales process optimization, corporate strategy, distribution planning, and HR audits.',
    primaryCta: { label: 'Business Consulting', href: '#services' },
    secondaryCta: { label: 'Request Consultation', href: '#contact' },
  },
  {
    id: 5,
    image: '/banner-things.jpg',
    badge: '25+ Years of Advisory Excellence',
    title: 'Attitude. Ambition. Initiation.',
    highlight: 'Initiation.',
    subtitle:
      'Based in Gurgaon with a PAN-India and overseas footprint, IBA turns human capability into a decisive competitive advantage.',
    primaryCta: { label: 'Our 4 Practice Pillars', href: '#services' },
    secondaryCta: { label: 'Explore Current Mandates', href: '#top' },
  },
];

const LOCATIONS = [
  'Gurgaon / Delhi NCR',
  'Mumbai',
  'Bengaluru',
  'PAN-India',
  'International / Global',
];

const SPECIALISMS = [
  { label: 'Executive Search & Recruitment', target: '#services' },
  { label: 'Business & Marketing Consulting', target: '#services' },
  { label: 'HR Consulting & Transformation', target: '#services' },
  { label: 'Coaching & Training (AVY Kochhar Academy)', target: '#top-programs' },
];

const QUICK_SEARCHES = [
  { label: 'Executive Search', specialism: 'Executive Search & Recruitment', target: '#services' },
  { label: 'Business Consulting', specialism: 'Business & Marketing Consulting', target: '#services' },
  { label: 'HR Transformation', specialism: 'HR Consulting & Transformation', target: '#services' },
  { label: 'Leadership Coaching', specialism: 'Coaching & Training (AVY Kochhar Academy)', target: '#top-programs' },
  { label: 'Sales Training', specialism: 'Coaching & Training (AVY Kochhar Academy)', target: '#top-programs' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [specialism, setSpecialism] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-slide every 6 seconds unless user is hovering
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleSearch = (e) => {
    e.preventDefault();
    const matchedSpecialism =
      SPECIALISMS.find((s) => s.label === specialism) ||
      SPECIALISMS.find((s) =>
        keyword.trim()
          ? s.label.toLowerCase().includes(keyword.trim().toLowerCase())
          : false
      ) ||
      SPECIALISMS[0];

    setSearchResult({
      keyword: keyword.trim() || matchedSpecialism.label,
      location: location || 'PAN-India & Global',
      specialism: specialism || matchedSpecialism.label,
      target: matchedSpecialism.target,
    });
  };

  const handleQuickSearch = (item) => {
    setKeyword(item.label);
    setSpecialism(item.specialism);
    setSearchResult({
      keyword: item.label,
      location: location || 'PAN-India & Global',
      specialism: item.specialism,
      target: item.target,
    });
  };

  const slide = SLIDES[currentSlide];

  return (
    <section
      id="top"
      className="relative bg-[#07182C] text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          AUTHENTIC 1920x730 HERO BANNER CAROUSEL
          - Multi-stop rich Navy/Sapphire gradient allows image to be clearly visible
          - Editorial typography with authentic leadership quotes
          - Prev / Next controls + dynamic slide pagination dashes
      ========================================================================== */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* Background Slide Images with Crossfade */}
        {SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="h-full w-full object-cover object-center transform scale-100 transition-transform duration-7000 ease-out"
            />
          </div>
        ))}

        {/* Rich Executive Navy & Sapphire Cinematic Gradient Overlay */}
        {/* Left side has strong navy gradient for perfect typography contrast; Right side softens so people/photo are visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2544]/95 via-[#0C2544]/80 to-[#123A66]/40 pointer-events-none z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07182C] via-transparent to-[#07182C]/60 pointer-events-none z-1" />

        {/* Carousel Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6 text-left">
            {/* Slide Category Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0C2544]/80 border border-[#C5A16D]/50 px-3.5 py-1.5 backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C5A16D]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#DFCAAA]">
                {slide.badge}
              </span>
            </div>

            {/* High-Impact Authentic Leadership Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-md">
              {slide.title.replace(slide.highlight, '')}
              <span className="text-[#C5A16D]">{slide.highlight}</span>
            </h1>

            {/* Genuine Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-xs">
              {slide.subtitle}
            </p>

            {/* Slide Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={slide.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl bg-[#C5A16D] hover:bg-[#B38F5C] text-[#0A0F14] px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold shadow-lg shadow-black/30 transition-all duration-200 cursor-pointer"
              >
                <span>{slide.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#0A0F14]" />
              </a>
              <a
                href={slide.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0C2544]/80 hover:bg-[#123A66] border border-sky-300/30 text-white px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                <span>{slide.secondaryCta.label}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Arrow Navigation Controls */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0C2544]/80 hover:bg-[#C5A16D] border border-white/20 hover:border-[#C5A16D] text-white hover:text-[#0A0F14] flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-xl cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0C2544]/80 hover:bg-[#C5A16D] border border-white/20 hover:border-[#C5A16D] text-white hover:text-[#0A0F14] flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-xl cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Pagination Indicator Dashes */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 sm:w-10 bg-[#C5A16D]'
                  : 'w-2.5 sm:w-3 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* =========================================================================
          INTEGRATED EXECUTIVE MANDATE & TALENT SEARCH CONSOLE
          - Deep Corporate Navy container
          - Soft-tinted inputs (No stark white glare)
          - Solid Champagne Gold Search button
          - Micro-trust institutional proof points
      ========================================================================== */}
      <div className="relative bg-[#091E36] border-y border-[#1E4B82]/50 py-7 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0C2B4E]/90 border border-[#24588E]/60 p-4 sm:p-5 shadow-2xl text-left">
            <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A16D]">
                Find Executive Roles &amp; Consulting Practices:
              </span>
              <span className="text-[11px] text-sky-200/80">
                Over 500+ C-Suite Mandates Delivered Across India &amp; Overseas
              </span>
            </div>

            <form
              onSubmit={handleSearch}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3"
            >
              {/* Keyword / Role Input */}
              <div className="sm:col-span-4 relative">
                <label htmlFor="hero-keyword" className="sr-only">
                  Keyword or Role
                </label>
                <div className="relative">
                  <Search className="pointer-events-none w-4 h-4 text-sky-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="hero-keyword"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="E.G. CEO, CFO, HR CONSULTING, SALES"
                    className="w-full h-11 sm:h-12 rounded-xl bg-[#081E38] border border-[#1E4D7E] pl-10 pr-3.5 text-xs sm:text-sm font-medium text-white placeholder:text-sky-200/50 placeholder:uppercase placeholder:text-[11px] focus:bg-[#0B2544] focus:border-[#C5A16D] focus:ring-2 focus:ring-[#C5A16D]/30 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Location Select */}
              <div className="sm:col-span-3 relative">
                <label htmlFor="hero-location" className="sr-only">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="pointer-events-none w-4 h-4 text-sky-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    id="hero-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-11 sm:h-12 appearance-none rounded-xl bg-[#081E38] border border-[#1E4D7E] pl-10 pr-9 text-xs sm:text-sm font-medium text-white uppercase tracking-wide truncate focus:bg-[#0B2544] focus:border-[#C5A16D] focus:ring-2 focus:ring-[#C5A16D]/30 focus:outline-none transition-all"
                  >
                    <option value="" className="bg-[#0C2544] text-white">ALL LOCATIONS</option>
                    {LOCATIONS.map((loc) => (
                      <option key={loc} value={loc} className="bg-[#0C2544] text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none w-4 h-4 text-sky-300 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Specialism Select */}
              <div className="sm:col-span-3 relative">
                <label htmlFor="hero-specialism" className="sr-only">
                  Specialism
                </label>
                <div className="relative">
                  <Briefcase className="pointer-events-none w-4 h-4 text-sky-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    id="hero-specialism"
                    value={specialism}
                    onChange={(e) => setSpecialism(e.target.value)}
                    className="w-full h-11 sm:h-12 appearance-none rounded-xl bg-[#081E38] border border-[#1E4D7E] pl-10 pr-9 text-xs sm:text-sm font-medium text-white uppercase tracking-wide truncate focus:bg-[#0B2544] focus:border-[#C5A16D] focus:ring-2 focus:ring-[#C5A16D]/30 focus:outline-none transition-all"
                  >
                    <option value="" className="bg-[#0C2544] text-white">ALL PRACTICES</option>
                    {SPECIALISMS.map((spec) => (
                      <option key={spec.label} value={spec.label} className="bg-[#0C2544] text-white">
                        {spec.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none w-4 h-4 text-sky-300 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Solid Champagne Gold Search Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full h-11 sm:h-12 rounded-xl bg-[#C5A16D] hover:bg-[#B38F5C] text-[#0A0F14] font-extrabold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg shadow-black/30 transition-all duration-200 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#0A0F14]" />
                  Search
                </button>
              </div>
            </form>

            {/* Quick Searches Row */}
            <div className="mt-3.5 pt-3 border-t border-[#1E4D7E]/50 flex flex-wrap items-center gap-1.5 sm:gap-x-3 sm:gap-y-2 text-[11px] sm:text-xs text-sky-100">
              <span className="font-bold text-[#C5A16D] w-full sm:w-auto mb-0.5 sm:mb-0">
                Quick Searches:
              </span>
              {QUICK_SEARCHES.map((item, idx) => (
                <div key={item.label} className="inline-flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleQuickSearch(item)}
                    className="hover:text-[#C5A16D] hover:underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                  {idx < QUICK_SEARCHES.length - 1 && (
                    <span className="text-sky-300/30 select-none">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Micro-Trust Institutional Proof Points */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-sky-200/90 font-medium">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A16D]" />
              <span>100% Confidential Mandates</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C5A16D]" />
              <span>500+ C-Suite Roles Closed</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C5A16D]" />
              <span>Retained Executive Search</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#C5A16D]" />
              <span>PAN-India &amp; Global Reach</span>
            </div>
          </div>

          {/* Interactive Search Feedback Banner */}
          {searchResult && (
            <div className="mt-4 mx-auto max-w-3xl rounded-xl bg-[#0D2E52] border border-[#C5A16D]/50 px-4 sm:px-5 py-3.5 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div className="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-[#C5A16D] shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  Showing IBA solutions for{' '}
                  <strong className="text-[#C5A16D]">{searchResult.keyword}</strong> in{' '}
                  <strong>{searchResult.location}</strong>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto shrink-0">
                <a
                  href={searchResult.target}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#C5A16D] px-3.5 py-1.5 text-xs font-bold text-[#0A0F14] hover:bg-[#B38F5C] transition-colors"
                >
                  Explore Practice
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-sky-300/30 bg-[#081E38] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#103A68] transition-colors"
                >
                  Inquire Now
                </a>
                <button
                  type="button"
                  onClick={() => setSearchResult(null)}
                  aria-label="Clear search summary"
                  className="ml-auto sm:ml-0 p-1 text-sky-300 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grounded Executive Credentials Strip in Rich Navy & Gold */}
      <div className="relative bg-[#061629] text-white py-4 sm:py-6 border-t border-[#1E4D7E]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {HERO_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center text-center lg:items-start lg:text-left p-2.5 sm:p-3 ${
                idx < HERO_METRICS.length - 1 ? 'lg:border-r lg:border-[#1E4D7E]/40 lg:pr-6' : ''
              }`}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#C5A16D] whitespace-nowrap">
                {metric.value}
              </span>
              <span className="text-[11px] sm:text-xs lg:text-sm text-sky-100 font-medium mt-0.5 leading-snug">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}