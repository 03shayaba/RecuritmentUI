import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label="Scroll back to top"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#C5A16D] text-[#0A0F14] shadow-lg shadow-[#C5A16D]/30 hover:bg-[#A9844F] hover:-translate-y-0.5 flex items-center justify-center transition-all cursor-pointer font-bold"
    >
      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
    </a>
  );
}