import { useState, useEffect } from 'react';
import { Menu, X, Globe2, ChevronDown, ArrowUpRight, Mail } from 'lucide-react';
import { NAV_LINKS, TOP_BAR_LINKS } from '../data/homeData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200 ${
        scrolled ? 'shadow-md shadow-slate-900/5' : ''
      }`}
    >
      {/* Top Corporate #337AB7 Strip (Secondary Nav + Location) */}
      <div className="hidden lg:block bg-[#337AB7] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 text-white/90">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Globe2 className="w-3.5 h-3.5 text-white" />
              Gurgaon HQ • PAN-India &amp; Global Advisory
            </span>
            <a
              href="mailto:info@ibaconsultingworldwide.com"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              info@ibaconsultingworldwide.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            {TOP_BAR_LINKS.map((link, idx) => (
              <div key={link.label} className="inline-flex items-center gap-4">
                <a
                  href={link.href}
                  className="font-medium text-white/90 hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
                {idx < TOP_BAR_LINKS.length - 1 && (
                  <span className="text-white/35 select-none">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px] gap-4">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo-web.png"
              alt="International Business Advantage (IBA Consulting Worldwide)"
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Primary Links */}
          <nav
            className="hidden lg:flex items-center gap-3.5 xl:gap-5"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 py-2 text-[13px] xl:text-sm font-semibold text-slate-700 hover:text-[#337AB7] transition-colors whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#337AB7] group-hover:rotate-180 transition-transform duration-200" />
                  </a>

                  {/* Dropdown Menu */}
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-2 w-60 z-50">
                    <div className="rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10">
                      {item.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block rounded-lg px-3.5 py-2.5 text-xs sm:text-[13px] font-medium text-slate-700 hover:bg-[#EDF4FB] hover:text-[#337AB7] transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative py-2 text-[13px] xl:text-sm font-semibold text-slate-700 hover:text-[#337AB7] transition-colors whitespace-nowrap after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:bg-[#337AB7] after:transition-transform after:origin-left"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#337AB7] px-4 py-2 text-xs xl:text-sm font-semibold text-white shadow-sm shadow-[#337AB7]/25 hover:bg-[#286090] active:scale-[0.98] transition-all whitespace-nowrap"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer (All 12 Links Organized Cleanly) */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white text-slate-800 px-4 py-4 max-h-[80vh] overflow-y-auto shadow-xl">
          <div className="space-y-1">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-lg border border-slate-100">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileGroup((prev) =>
                        prev === item.label ? null : item.label
                      )
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#337AB7]"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMobileGroup === item.label ? 'rotate-180 text-[#337AB7]' : ''
                      }`}
                    />
                  </button>
                  {openMobileGroup === item.label && (
                    <div className="bg-slate-50 px-3 pb-2.5 pt-1 space-y-1">
                      {item.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-[#EDF4FB] hover:text-[#337AB7]"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-[#EDF4FB] hover:text-[#337AB7] transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Secondary Quick Links in Mobile Drawer */}
          <div className="mt-4 pt-3 border-t border-slate-200">
            <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              More From IBA
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {TOP_BAR_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-[#EDF4FB] hover:text-[#337AB7]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#337AB7] px-4 py-3 text-sm font-semibold text-white hover:bg-[#286090] transition-colors"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
