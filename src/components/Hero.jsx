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
  { label: 'Leadership Coaching', specialism: 'Coaching & Training (AVY Kochhar Academy)', target: '#top-programs' },
  { label: 'Sales Training', specialism: 'Coaching & Training (AVY Kochhar Academy)', target: '#top-programs' },
];

const ROLE_LABELS = [
  'CEO & MD ROLES',
  'CFO & CHRO',
  'CMO & CIO/CTO',
  'HR CONSULTING',
  'AVY KOCHHAR ACADEMY',
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
      <div className="relative pt-8 pb-8 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-36">
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
          <p className="inline-flex items-center rounded-full bg-white/10 border border-sky-300/30 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-sky-200 mb-3 sm:mb-4 backdrop-blur-xs">
            Don’t Manage, Lead &bull; Unleash Your Team’s Talent
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.18] drop-shadow-sm">
            Global Search, Business Consulting &amp;{' '}
            <span className="text-sky-300">Leadership Solutions</span>
          </h1>

          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-xs">
            International Business Advantage (IBA Consulting Worldwide) — Serving MNCs,
            Blue-Chip Companies, SMEs &amp; Family-Owned Businesses across India and
            overseas markets for over two and a half decades.
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
          <div className="mt-5 sm:mt-8 rounded-xl bg-gradient-to-r from-[#0C2544]/85 via-[#1A497D]/85 to-[#337AB7]/90 border border-sky-300/25 backdrop-blur-md p-3.5 sm:p-6 shadow-2xl shadow-black/35 text-left">
            <form
              onSubmit={handleSearch}
              className="grid grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-3"
            >
              {/* Keyword Input */}
              <div className="col-span-2 lg:col-span-4">
                <label htmlFor="hero-keyword" className="sr-only">
                  Keyword or Role
                </label>
                <input
                  id="hero-keyword"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="E.G. EXECUTIVE SEARCH, HR, SALES"
                  className="w-full h-11 sm:h-12 rounded-md bg-white px-3.5 sm:px-4 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 placeholder:uppercase placeholder:tracking-wide focus:outline-none focus:ring-2 focus:ring-white/80"
                />
              </div>

              {/* Location Dropdown */}
              <div className="col-span-1 lg:col-span-3 relative">
                <label htmlFor="hero-location" className="sr-only">
                  Location
                </label>
                <select
                  id="hero-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-11 sm:h-12 appearance-none rounded-md bg-white px-3 sm:px-4 pr-8 sm:pr-10 text-xs sm:text-sm font-medium text-slate-700 uppercase tracking-wide truncate focus:outline-none focus:ring-2 focus:ring-white/80"
                >
                  <option value="">LOCATION</option>
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none w-4 h-4 text-slate-500 absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2" />
              </div>

              {/* Specialism Dropdown */}
              <div className="col-span-1 lg:col-span-3 relative">
                <label htmlFor="hero-specialism" className="sr-only">
                  Specialism
                </label>
                <select
                  id="hero-specialism"
                  value={specialism}
                  onChange={(e) => setSpecialism(e.target.value)}
                  className="w-full h-11 sm:h-12 appearance-none rounded-md bg-white px-3 sm:px-4 pr-8 sm:pr-10 text-xs sm:text-sm font-medium text-slate-700 uppercase tracking-wide truncate focus:outline-none focus:ring-2 focus:ring-white/80"
                >
                  <option value="">SPECIALISM</option>
                  {SPECIALISMS.map((spec) => (
                    <option key={spec.label} value={spec.label}>
                      {spec.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none w-4 h-4 text-slate-500 absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2" />
              </div>

              {/* Search Button */}
              <div className="col-span-2 lg:col-span-2">
                <button
                  type="submit"
                  className="w-full h-11 sm:h-12 rounded-md bg-[#0C2544] hover:bg-[#081A30] border border-sky-300/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </form>

            {/* Quick Searches Bar */}
            <div className="mt-3.5 sm:mt-4 pt-3 border-t border-white/25 flex flex-wrap items-center gap-1.5 sm:gap-x-3 sm:gap-y-2 text-[11px] sm:text-sm text-white">
              <span className="font-bold w-full sm:w-auto mb-0.5 sm:mb-0">Quick Searches:</span>
              {QUICK_SEARCHES.map((item, idx) => (
                <div key={item.label} className="inline-flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleQuickSearch(item)}
                    className="rounded-full bg-white/15 px-2.5 py-1 sm:rounded-none sm:bg-transparent sm:p-0 text-white/95 hover:text-white sm:hover:underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                  {idx < QUICK_SEARCHES.length - 1 && (
                    <span className="hidden sm:inline text-white/40 select-none">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Search Feedback Banner */}
          {searchResult && (
            <div className="mt-4 mx-auto max-w-3xl rounded-xl bg-white/95 border border-[#337AB7]/30 px-4 sm:px-5 py-3.5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div className="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#337AB7] shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  Showing IBA solutions for{' '}
                  <strong className="text-[#337AB7]">{searchResult.keyword}</strong> in{' '}
                  <strong>{searchResult.location}</strong>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto shrink-0">
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
                  className="ml-auto sm:ml-0 p-1 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Deep #081A30 -> #174375 Bottom Accent Strip */}
      <div className="relative bg-gradient-to-r from-[#081A30] via-[#0C2544] to-[#174375] text-white py-3.5 sm:py-6 border-t border-sky-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center text-center lg:items-start lg:text-left rounded-lg bg-white/5 p-2.5 sm:p-3 lg:bg-transparent lg:rounded-none lg:p-0 lg:border-r lg:border-white/20 lg:last:border-r-0 lg:pr-6"
            >
              <span className="text-lg sm:text-2xl font-extrabold tracking-tight whitespace-nowrap">
                {metric.value}
              </span>
              <span className="text-[11px] sm:text-sm text-white/90 font-medium mt-0.5 leading-snug">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
