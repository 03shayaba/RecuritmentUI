import { useState } from 'react';
import { Search, ChevronDown, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { HERO_METRICS } from '../data/homeData';

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
  { label: 'Coaching & Training (AVY Kochhar Academy)', target: '#services' },
];

const QUICK_SEARCHES = [
  { label: 'Executive Search', specialism: 'Executive Search & Recruitment', target: '#services' },
  { label: 'Business Consulting', specialism: 'Business & Marketing Consulting', target: '#services' },
  { label: 'HR Transformation', specialism: 'HR Consulting & Transformation', target: '#services' },
  { label: 'Leadership Coaching', specialism: 'Coaching & Training (AVY Kochhar Academy)', target: '#services' },
  { label: 'Sales Training', specialism: 'Coaching & Training (AVY Kochhar Academy)', target: '#services' },
];

const ROLE_LABELS = [
  'CXO & LEADERSHIP',
  'HR PARTNER',
  'IT & DIGITAL',
  'SALES & STRATEGY',
  'CORPORATE TRAINER',
];

export default function Hero() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [specialism, setSpecialism] = useState('');
  const [searchResult, setSearchResult] = useState(null);

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

  return (
    <section id="top" className="relative bg-[#0C2544] text-white overflow-hidden">
      {/* Main Hero Canvas with Darkish-Blueish Gradient Overlay */}
      <div className="relative pt-12 pb-28 sm:pt-16 sm:pb-36 lg:pt-20 lg:pb-44">
        {/* Background Photo + Sheer Darkish-Blueish Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
            alt="Professionals collaborating at IBA Consulting Worldwide"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C2544]/75 via-[#133863]/52 to-[#1E4F87]/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2544]/35 via-transparent to-[#0C2544]/30" />
        </div>

        {/* Centered Content */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-sm">
            Empowering Enterprises with{' '}
            <span className="text-sky-300">Talent, Strategy &amp; Leadership</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-xs">
            International Business Advantage (IBA Consulting Worldwide) — Select your
            industry, location, or keyword to explore executive roles &amp; consulting
            solutions.
          </p>

          {/* Subtle role labels floating above the search box */}
          <div
            aria-hidden="true"
            className="hidden lg:grid grid-cols-5 gap-4 text-[11px] font-extrabold tracking-widest text-sky-200/80 uppercase mt-6 -mb-3 px-4"
          >
            {ROLE_LABELS.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>

          {/* Rich #0C2544 -> #337AB7 Glassmorphic Search Box */}
          <div className="mt-6 sm:mt-8 rounded-xl bg-gradient-to-r from-[#0C2544]/85 via-[#1A497D]/85 to-[#337AB7]/90 border border-sky-300/25 backdrop-blur-md p-4 sm:p-6 shadow-2xl shadow-black/35 text-left">
            <form
              onSubmit={handleSearch}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3"
            >
              {/* Keyword Input */}
              <div className="lg:col-span-4">
                <label htmlFor="hero-keyword" className="sr-only">
                  Keyword or Role
                </label>
                <input
                  id="hero-keyword"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="E.G. EXECUTIVE SEARCH, HR, SALES"
                  className="w-full h-12 rounded-md bg-white px-4 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 placeholder:uppercase placeholder:tracking-wide focus:outline-none focus:ring-2 focus:ring-white/80"
                />
              </div>

              {/* Location Dropdown */}
              <div className="lg:col-span-3 relative">
                <label htmlFor="hero-location" className="sr-only">
                  Location
                </label>
                <select
                  id="hero-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-12 appearance-none rounded-md bg-white px-4 pr-10 text-xs sm:text-sm font-medium text-slate-700 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-white/80"
                >
                  <option value="">LOCATION</option>
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>

              {/* Specialism Dropdown */}
              <div className="lg:col-span-3 relative">
                <label htmlFor="hero-specialism" className="sr-only">
                  Specialism
                </label>
                <select
                  id="hero-specialism"
                  value={specialism}
                  onChange={(e) => setSpecialism(e.target.value)}
                  className="w-full h-12 appearance-none rounded-md bg-white px-4 pr-10 text-xs sm:text-sm font-medium text-slate-700 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-white/80"
                >
                  <option value="">SPECIALISM</option>
                  {SPECIALISMS.map((spec) => (
                    <option key={spec.label} value={spec.label}>
                      {spec.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>

              {/* Search Button */}
              <div className="sm:col-span-2 lg:col-span-2">
                <button
                  type="submit"
                  className="w-full h-12 rounded-md bg-[#0C2544] hover:bg-[#081A30] border border-sky-300/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </form>

            {/* Quick Searches Bar */}
            <div className="mt-4 pt-3.5 border-t border-white/25 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-white">
              <span className="font-bold">Quick Searches:</span>
              {QUICK_SEARCHES.map((item, idx) => (
                <div key={item.label} className="inline-flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleQuickSearch(item)}
                    className="text-white/95 hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                  {idx < QUICK_SEARCHES.length - 1 && (
                    <span className="text-white/40 select-none">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Search Feedback Banner */}
          {searchResult && (
            <div className="mt-4 mx-auto max-w-3xl rounded-xl bg-white/95 border border-[#337AB7]/30 px-5 py-3.5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-2.5 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#337AB7] shrink-0" />
                <span>
                  Showing IBA solutions for{' '}
                  <strong className="text-[#337AB7]">{searchResult.keyword}</strong> in{' '}
                  <strong>{searchResult.location}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={searchResult.target}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#337AB7] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#286090] transition-colors"
                >
                  Explore Practice
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Inquire Now
                </a>
                <button
                  type="button"
                  onClick={() => setSearchResult(null)}
                  aria-label="Clear search summary"
                  className="p-1 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Deep #081A30 -> #174375 Bottom Accent Strip */}
      <div className="relative bg-gradient-to-r from-[#081A30] via-[#0C2544] to-[#174375] text-white py-5 sm:py-6 border-t border-sky-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center text-center lg:items-start lg:text-left lg:border-r lg:border-white/20 lg:last:border-r-0 lg:pr-6"
            >
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight whitespace-nowrap">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-white/90 font-medium mt-0.5 leading-snug">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
