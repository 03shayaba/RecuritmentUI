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
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#EAE6DC] ${
        scrolled ? 'shadow-md shadow-black/5' : ''
      }`}
    >
      {/* Top Black / Deep Navy Strip (Secondary Nav + Contact) */}
      <div className="hidden lg:block bg-[#0A0F14] text-white text-xs border-b border-[#283A46]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Globe2 className="w-3.5 h-3.5 text-[#C5A16D]" />
              Gurgaon HQ • PAN-India &amp; Global Advisory
            </span>
            <a
              href="mailto:info@ibaconsultingworldwide.com"
              className="inline-flex items-center gap-1.5 hover:text-[#C5A16D] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A16D]" />
              info@ibaconsultingworldwide.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            {TOP_BAR_LINKS.map((link, idx) => (
              <div key={link.label} className="inline-flex items-center gap-4">
                <a
                  href={link.href}
                  className="font-medium text-slate-300 hover:text-[#C5A16D] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
                {idx < TOP_BAR_LINKS.length - 1 && (
                  <span className="text-[#283A46] select-none">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[68px] gap-4">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo-web.png"
              alt="International Business Advantage (IBA Consulting Worldwide)"
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
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
                    className="inline-flex items-center gap-1 py-2 text-[13px] xl:text-sm font-semibold text-[#122A3E] hover:text-[#C5A16D] transition-colors whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#283A46] group-hover:text-[#C5A16D] group-hover:rotate-180 transition-transform duration-200" />
                  </a>

                  {/* Dropdown Menu */}
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-2 w-64 z-50">
                    <div className="rounded-xl border border-[#EAE6DC] bg-white p-2 shadow-xl shadow-black/10">
                      {item.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block rounded-lg px-3.5 py-2.5 text-xs sm:text-[13px] font-medium text-[#122A3E] hover:bg-[#F5F3EE] hover:text-[#C5A16D] transition-colors"
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
                  className="relative py-2 text-[13px] xl:text-sm font-semibold text-[#122A3E] hover:text-[#C5A16D] transition-colors whitespace-nowrap after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:bg-[#C5A16D] after:transition-transform after:origin-left"
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
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#C5A16D] hover:bg-[#A9844F] text-[#0A0F14] px-4 py-2 text-xs xl:text-sm font-bold shadow-md shadow-[#C5A16D]/20 active:scale-[0.98] transition-all whitespace-nowrap"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4 text-[#0A0F14]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-[#122A3E] hover:bg-[#F5F3EE] transition-colors"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#EAE6DC] bg-white text-[#122A3E] px-4 py-4 max-h-[calc(100dvh-4rem)] overflow-y-auto shadow-xl">
          <div className="mb-3 rounded-xl bg-[#0A0F14] text-white px-3.5 py-2.5 flex flex-col gap-1 text-xs">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#C5A16D]">
              <Globe2 className="w-3.5 h-3.5 shrink-0" />
              Gurgaon HQ • PAN-India &amp; Global Advisory
            </span>
            <a
              href="mailto:info@ibaconsultingworldwide.com"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#C5A16D] break-all"
            >
              <Mail className="w-3.5 h-3.5 shrink-0 text-[#C5A16D]" />
              info@ibaconsultingworldwide.com
            </a>
          </div>

          <div className="space-y-1">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-lg border border-[#EAE6DC]">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileGroup((prev) =>
                        prev === item.label ? null : item.label
                      )
                    }
                    className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-[#122A3E] hover:bg-[#F5F3EE] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#283A46] transition-transform ${
                        openMobileGroup === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openMobileGroup === item.label && (
                    <div className="border-t border-[#EAE6DC] bg-[#F5F3EE] p-2 space-y-1">
                      {item.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-2 text-xs font-medium text-[#283A46] hover:bg-white hover:text-[#C5A16D] transition-colors"
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
                  className="block rounded-lg px-3.5 py-2.5 text-sm font-semibold text-[#122A3E] hover:bg-[#F5F3EE] hover:text-[#C5A16D] transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-[#EAE6DC]">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A16D] hover:bg-[#A9844F] text-[#0A0F14] py-3 text-sm font-bold shadow-md shadow-[#C5A16D]/20 transition-all"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4 text-[#0A0F14]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}