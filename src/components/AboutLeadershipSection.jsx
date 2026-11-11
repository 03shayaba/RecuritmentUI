import { Check, Send, PhoneCall } from 'lucide-react';

const HIGHLIGHTS = [
  'Executive Search (MD, CEO, CFO, CHRO)',
  'Business & Marketing Strategy',
  'HR Consulting & Transformation',
  'Coaching & Training (AVY Kochhar Academy)',
  'PAN-India & Overseas Presence',
  'Campus Hiring & Recruitment Partners',
];

export default function AboutLeadershipSection() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left 6 Cols: 2-Column Bento Photo + #337AB7 Experience Card */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Sub-column 1 */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm h-52 sm:h-64">
                <img
                  src="/executive-leadership.jpg"
                  alt="IBA Consulting advisory team meeting"
                  loading="lazy"
                  className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm h-44 sm:h-52">
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
              {/* #0C2544 -> #337AB7 Outlined Experience Stat Card */}
              <div className="rounded-xl bg-gradient-to-br from-[#0C2544] via-[#1B497D] to-[#337AB7] text-white p-5 sm:p-7 shadow-lg shadow-[#0C2544]/25 flex items-center justify-center gap-4 h-32 sm:h-40">
                <div className="flex flex-col items-center leading-none">
                  <span
                    className="text-4xl sm:text-[54px] font-extrabold tracking-tight text-transparent select-none"
                    style={{ WebkitTextStroke: '1.75px #ffffff' }}
                  >
                    25
                  </span>
                  <span
                    className="text-xl sm:text-2xl font-extrabold text-transparent -mt-1 select-none"
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
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm h-56 sm:h-[304px]">
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
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0C2544] tracking-tight leading-[1.18]">
                Building Success <span className="text-[#337AB7]">Together,</span>
                <br />
                <span className="text-[#337AB7]">HR Solutions</span> at Scale.
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              International Business Advantage is a Global Search &amp; Business Consulting
              Company. IBA undertakes complete projects of Search &amp; Recruitment, Business
              Consulting, and Coaching &amp; Training Solutions with MNCs, Blue-Chip
              Companies, Large Corporate Houses, SMEs, and Family-Owned Businesses since over
              two and a half decades — based at Gurgaon with a PAN-India presence.
            </p>

            {/* Soft Blue Checklist Box */}
            <div className="rounded-xl bg-[#EDF4FB] border border-[#337AB7]/20 p-6 sm:p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-[#0C2544]">
                    <Check className="w-4 h-4 text-[#337AB7] shrink-0" strokeWidth={2.5} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Dual Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
              <a
                href="mailto:info@ibaconsultingworldwide.com"
                className="group flex items-center gap-3.5 min-w-0"
              >
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0C2544] group-hover:bg-[#337AB7] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0C2544]/25 transition-colors">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#337AB7]">Email Us</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0C2544] group-hover:text-[#337AB7] transition-colors break-all sm:break-normal">
                    info@ibaconsultingworldwide.com
                  </p>
                </div>
              </a>

              <a href="#faqs" className="group flex items-center gap-3.5 min-w-0">
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#337AB7] group-hover:bg-[#0C2544] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#337AB7]/25 transition-colors">
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#337AB7]">Have question?</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0C2544] group-hover:text-[#337AB7] transition-colors">
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
