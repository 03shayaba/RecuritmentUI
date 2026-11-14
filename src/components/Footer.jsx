import { useState } from 'react';
import { Phone, Mail, CheckCircle2, Globe2 } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Business Partners', href: '#about' },
  { label: 'Editorial', href: '#about' },
  { label: 'Current Job Opening', href: '#top' },
  { label: 'Events', href: '#process' },
  { label: "FAQ's", href: '#faqs' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Terms & Conditions', href: '#contact' },
];

const PROGRAMS = [
  { label: 'AVY Kochhar Academy', href: '#top-programs' },
  { label: 'Coaching & Transformation', href: '#top-programs' },
  { label: 'Train The Trainer', href: '#top-programs' },
  { label: 'Top Sales Programs', href: '#top-programs' },
  { label: 'Softskills Programs', href: '#top-programs' },
];

export default function Footer() {
  const [enquirySent, setEnquirySent] = useState(false);

  return (
    <footer className="bg-[#0A0F14] text-slate-300 border-t border-[#283A46]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Column 1: QUICK LINKS */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A16D] pb-3 mb-4 border-b border-[#283A46]/40">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[#C5A16D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: PROGRAMS */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A16D] pb-3 mb-4 border-b border-[#283A46]/40">
              Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PROGRAMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-[#C5A16D] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: INTERNATIONAL BUSINESS ADVANTAGE */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A16D] pb-3 border-b border-[#283A46]/40">
              International Business Advantage
            </h3>

            <div className="inline-block rounded-xl bg-white px-3 py-2 shadow-sm">
              <img
                src="/logo-web.png"
                alt="International Business Advantage"
                className="h-11 w-auto object-contain"
              />
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="tel:+918802756666"
                className="flex items-start gap-2.5 hover:text-[#C5A16D] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A16D] shrink-0 mt-0.5" />
                <span>+91 8802756666, +91-8802706666</span>
              </a>
              <a
                href="mailto:business@ibasearch.com"
                className="flex items-center gap-2.5 hover:text-[#C5A16D] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C5A16D] shrink-0" />
                <span>business@ibasearch.com</span>
              </a>
              <a
                href="mailto:info@ibasearch.com"
                className="flex items-center gap-2.5 hover:text-[#C5A16D] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C5A16D] shrink-0" />
                <span>info@ibasearch.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-xs text-slate-400 pt-1">
                <Globe2 className="w-4 h-4 text-[#C5A16D] shrink-0" />
                <span>Gurugram, Haryana • PAN-India &amp; Global</span>
              </div>
            </div>
          </div>

          {/* Column 4: GET YOUR MEMBERSHIP */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A16D] pb-3 mb-4 border-b border-[#283A46]/40">
              Get Your Membership
            </h3>

            {enquirySent ? (
              <div className="rounded-xl bg-white/10 border border-white/15 p-5 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#C5A16D] mx-auto" />
                <p className="text-sm font-semibold text-white">
                  Enquiry Sent Successfully!
                </p>
                <p className="text-xs text-slate-300">
                  Our membership &amp; advisory desk will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setEnquirySent(false)}
                  className="text-xs font-semibold text-[#C5A16D] hover:underline cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnquirySent(true);
                }}
                className="space-y-2.5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    className="w-full rounded-md bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A16D]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Enter Your Phone"
                    className="w-full rounded-md bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A16D]"
                  />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full rounded-md bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A16D]"
                />
                <textarea
                  rows={3}
                  required
                  placeholder="Enter Your Message"
                  className="w-full rounded-md bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A16D]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-md bg-[#C5A16D] hover:bg-[#A9844F] px-5 py-2 text-xs font-bold text-[#0A0F14] shadow-sm transition-colors cursor-pointer"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Social Bar */}
      <div className="bg-[#060A0E] border-t border-[#283A46]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            &copy; 2001 IBA Manpower Consulting Services, India. All Rights Reserved
          </p>

          <div className="flex items-center gap-2">
            {[
              { label: 'Facebook', short: 'f', href: '#contact' },
              { label: 'X / Twitter', short: '𝕏', href: '#contact' },
              { label: 'LinkedIn', short: 'in', href: '#contact' },
              { label: 'Email', short: '@', href: 'mailto:info@ibasearch.com' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-md border border-[#283A46] bg-white/5 hover:bg-[#C5A16D] hover:text-[#0A0F14] hover:border-[#C5A16D] text-xs font-bold text-white flex items-center justify-center transition-colors"
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}