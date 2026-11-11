import { useState } from 'react';
import { Send, CheckCircle2, MapPin, Mail, PhoneCall } from 'lucide-react';

const INQUIRY_TYPES = [
  'Executive Search & Hiring',
  'Business & HR Consulting',
  'Corporate Training (AVY Kochhar Academy)',
  'Franchise & Regional Partnership',
  'Job Seeker / Candidate Submission',
];

export default function ContactCTA() {
  const [inquiryType, setInquiryType] = useState(INQUIRY_TYPES[0]);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xl shadow-slate-200/60 grid lg:grid-cols-12">
          {/* Left Contact Info (Rich #0C2544 -> #337AB7 Blue Panel) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0C2544] via-[#18416E] to-[#337AB7] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-white/15 border border-white/25 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-200">
                Start a Conversation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Let’s Build Your Competitive Advantage
              </h2>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                Share your hiring mandate, business transformation goal, or training
                requirement. A senior practice lead will respond within one business day.
              </p>
            </div>

            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Corporate Headquarters</p>
                  <p className="text-white/80">Gurgaon (Gurugram), Haryana, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-sky-200" />
                </div>
                <div>
                  <p className="font-semibold text-white">Advisory Desk</p>
                  <p className="text-white/80">info@ibasearch.com • business@ibasearch.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Direct Lines</p>
                  <p className="text-white/80">+91 8802756666, +91-8802706666</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white text-slate-900">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EDF4FB] text-[#337AB7] flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Thank You, {formState.name || 'Partner'}!
                </h3>
                <p className="text-slate-600 max-w-md text-sm sm:text-base">
                  Your inquiry regarding <span className="font-semibold">{inquiryType}</span>{' '}
                  has been captured. Our consulting desk will reach out to{' '}
                  <span className="font-semibold">{formState.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Select Inquiry Area
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INQUIRY_TYPES.map((type) => {
                      const active = inquiryType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`rounded-lg px-3 py-2 text-xs sm:text-sm font-medium border transition-all ${
                            active
                              ? 'bg-[#337AB7] text-white border-[#337AB7] shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#337AB7]/50'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. Rohan Verma"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="rohan@company.com"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Organization / Current Role
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    placeholder="Company name or current designation"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    How Can We Help?
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell us about your hiring mandate, consulting objective, or training needs..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#337AB7] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#337AB7]/25 hover:bg-[#286090] transition-all"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
