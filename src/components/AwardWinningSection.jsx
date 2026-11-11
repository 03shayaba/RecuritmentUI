import { useState, useEffect } from 'react';
import { ChevronRight, X, UploadCloud, UserPlus, CheckCircle2 } from 'lucide-react';

const ACTION_CARDS = [
  {
    id: 'profile',
    title: 'Create your profile',
    image: '/executive-leadership.jpg',
    alt: 'IBA Consulting leadership team in modern office',
  },
  {
    id: 'cv',
    title: 'Upload your CV',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=700&q=80',
    alt: 'Resume and job application document on desk',
  },
];

export default function AwardWinningSection() {
  const [modalMode, setModalMode] = useState(null); // 'profile' | 'cv' | null
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const openModal = (mode) => {
    setModalMode(mode);
    setSubmitted(false);
    setFileName('');
  };

  const closeModal = () => {
    setModalMode(null);
    setSubmitted(false);
  };

  useEffect(() => {
    if (!modalMode) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalMode]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading matching reference layout */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0C2544] leading-[1.2] mb-10 sm:mb-12">
          Welcome to an{' '}
          <span className="text-[#337AB7]">Award Winning</span>
          <br className="hidden sm:inline" /> Recruitment &amp; Consulting Agency
        </h2>

        {/* 2 Editorial Columns + 2 Image Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          {/* Column 1 */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <p className="text-sm sm:text-[15px] leading-7 text-slate-600">
              For over two decades, International Business Advantage (IBA Consulting
              Worldwide) has partnered with leading multinational corporations, blue-chip
              enterprises, and agile growth firms to connect visionary leadership with
              high-impact business opportunities across India and global markets.
            </p>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <p className="text-sm sm:text-[15px] leading-7 text-slate-600">
              Whether you are an ambitious professional ready for your next career
              milestone or an enterprise scaling specialized teams, our Gurgaon-led search
              practice delivers precision matching, confidential advisory, and tailored
              talent guidance at every stage.
            </p>
          </div>

          {/* Column 3 & 4: Action Image Cards */}
          <div className="md:col-span-2 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {ACTION_CARDS.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() => openModal(card.id)}
                className="group relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#337AB7]"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Bottom #337AB7 bar */}
                <div className="absolute inset-x-0 bottom-0 bg-[#337AB7]/95 group-hover:bg-[#286090] px-5 py-4 flex items-center justify-between text-white transition-colors">
                  <span className="text-sm sm:text-base font-semibold tracking-tight">
                    {card.title}
                  </span>
                  <ChevronRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Modal for Profile / CV Upload */}
      {modalMode && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#EDF4FB] text-[#337AB7] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {modalMode === 'cv'
                    ? 'CV Received Successfully'
                    : 'Candidate Profile Created'}
                </h3>
                <p className="text-sm text-slate-600">
                  Thank you! Our IBA executive search advisors will review your details and
                  connect with matching mandates.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-xl bg-[#337AB7] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#286090] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF4FB] text-[#337AB7] flex items-center justify-center">
                    {modalMode === 'cv' ? (
                      <UploadCloud className="w-5 h-5" />
                    ) : (
                      <UserPlus className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {modalMode === 'cv' ? 'Upload Your CV' : 'Create Your Candidate Profile'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      IBA Consulting Worldwide • Candidate Zone
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                  />
                </div>

                <input
                  type="text"
                  required
                  placeholder="Current Role & Industry (e.g. Sales Head • BFSI)"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                />

                {modalMode === 'cv' ? (
                  <label className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center cursor-pointer hover:border-[#337AB7] hover:bg-[#EDF4FB]/50 transition-colors">
                    <UploadCloud className="w-7 h-7 text-[#337AB7] mb-2" />
                    <span className="text-sm font-semibold text-slate-800">
                      {fileName || 'Click to select PDF or DOCX resume'}
                    </span>
                    <span className="text-xs text-slate-500 mt-1">Max file size 5MB</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="sr-only"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                    />
                  </label>
                ) : (
                  <textarea
                    rows={3}
                    required
                    placeholder="Key skills, years of experience & preferred locations..."
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                  />
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#337AB7] py-3 text-sm font-bold text-white hover:bg-[#286090] transition-colors"
                >
                  {modalMode === 'cv' ? 'Submit CV' : 'Save Profile'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

