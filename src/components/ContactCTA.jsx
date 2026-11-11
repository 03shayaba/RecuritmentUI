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
    <section
      id="contact"
      className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-[#EDF4FB] via-[#F4F8FD] to-[#E4EFFA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Side: Clean Simple UI Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 min-w-0">
            <div className="space-y-3 sm:space-y-3.5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#337AB7]">
                / Start a Conversation /
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0C2544] leading-[1.18]">
                Let’s Build Your{' '}
                <span className="text-[#337AB7]">Competitive Advantage</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Share your hiring mandate, business transformation goal, or training
                requirement. A senior practice lead will respond within one business day.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm pt-2 border-t border-[#337AB7]/15">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0C2544] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4 text-sky-300" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[#0C2544]">Corporate Headquarters</p>
                  <p className="text-slate-600">Gurgaon (Gurugram), Haryana, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#337AB7] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[#0C2544]">Advisory Desk</p>
                  <p className="text-slate-600 break-words">info@ibasearch.com • business@ibasearch.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0C2544] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <PhoneCall className="w-4 h-4 text-sky-300" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[#0C2544]">Direct Lines</p>
                  <p className="text-slate-600 break-words">+91 8802756666, +91-8802706666</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Open Clean Form */}
          <div className="lg:col-span-7 text-slate-900">
            {submitted ? (
              <div className="flex flex-col items-start justify-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-white text-[#337AB7] border border-[#337AB7]/25 flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0C2544]">
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
                  className="mt-2 rounded-xl bg-[#0C2544] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#337AB7] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2544]/75 mb-2.5">
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
                          className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                            active
                              ? 'bg-[#0C2544] text-white border-[#0C2544] shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-[#337AB7] hover:text-[#337AB7]'
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
                      className="block text-sm font-semibold text-[#0C2544] mb-1.5"
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
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-[#0C2544] mb-1.5"
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
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-semibold text-[#0C2544] mb-1.5"
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
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-[#0C2544] mb-1.5"
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
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#337AB7] focus:outline-none focus:ring-2 focus:ring-[#337AB7]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0C2544] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0C2544]/20 hover:bg-[#337AB7] transition-all cursor-pointer"
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
