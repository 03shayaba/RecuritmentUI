import { Check, Send, PhoneCall } from 'lucide-react';

const HIGHLIGHTS = [
  'Executive Search & CEO Roles',
  'Business & Marketing Strategy',
  'HR Consulting & Transformation',
  'AVY Kochhar Academy Training',
  'PAN-India & Overseas Reach',
  'Franchise Partner Network',
];

export default function AboutLeadershipSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left 6 Cols: 2-Column Bento Photo + #337AB7 Experience Card */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Sub-column 1 */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm h-60 sm:h-64">
                <img
                  src="/executive-leadership.jpg"
                  alt="IBA Consulting advisory team meeting"
                  loading="lazy"
                  className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm h-48 sm:h-52">
                <img
                  src="/executive-search.jpg"
                  alt="IBA Executive Search worldwide"
                  loading="lazy"
                  className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Sub-column 2 */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* #337AB7 Outlined Experience Stat Card */}
              <div className="rounded-xl bg-[#337AB7] text-white p-6 sm:p-7 shadow-lg shadow-[#337AB7]/20 flex items-center justify-center gap-4 h-36 sm:h-40">
                <div className="flex flex-col items-center leading-none">
                  <span
                    className="text-5xl sm:text-[54px] font-extrabold tracking-tight text-transparent select-none"
                    style={{ WebkitTextStroke: '1.75px #ffffff' }}
                  >
                    25
                  </span>
                  <span
                    className="text-2xl font-extrabold text-transparent -mt-1 select-none"
                    style={{ WebkitTextStroke: '1.5px #ffffff' }}
                  >
                    +
                  </span>
                </div>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Years of
                  <br />
                  experience
                </p>
              </div>

              {/* Tall Consultation Image */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm h-64 sm:h-[304px]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80"
                  alt="Senior IBA HR consultant"
                  loading="lazy"
                  className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right 6 Cols: / WHO ARE WE / Copy + Checklist Box + Contact/FAQ Row */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#337AB7]">
                / Who Are We /
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0C2544] tracking-tight leading-[1.15]">
                Building Success <span className="text-[#337AB7]">Together,</span>
                <br />
                <span className="text-[#337AB7]">HR Solutions</span> at Scale.
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              International Business Advantage (IBA Consulting Worldwide) is a Global
              Search &amp; Business Consulting Company headquartered in Gurgaon with a
              PAN-India presence and overseas market capabilities. For over two and a half
              decades, we have partnered with MNCs, Blue-Chip Companies, Large Corporate
              Houses, SMEs, and Family-Owned Businesses.
            </p>

            {/* Gray Checklist Box */}
            <div className="rounded-xl bg-slate-100/90 border border-slate-200/70 p-6 sm:p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                    <Check className="w-4 h-4 text-[#337AB7] shrink-0" strokeWidth={2.5} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Dual Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <a
                href="mailto:info@ibaconsultingworldwide.com"
                className="group flex items-center gap-3.5"
              >
                <span className="w-12 h-12 rounded-full bg-[#337AB7] group-hover:bg-[#286090] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#337AB7]/25 transition-colors">
                  <Send className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-[#337AB7]">Email Us</p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#337AB7] transition-colors">
                    info@ibaconsultingworldwide.com
                  </p>
                </div>
              </a>

              <a href="#faqs" className="group flex items-center gap-3.5">
                <span className="w-12 h-12 rounded-full bg-[#337AB7] group-hover:bg-[#286090] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#337AB7]/25 transition-colors">
                  <PhoneCall className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-[#337AB7]">Have question?</p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#337AB7] transition-colors">
                    Explore our FAQ section
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
