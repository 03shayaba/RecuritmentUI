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
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#337AB7] text-white shadow-lg shadow-[#337AB7]/30 hover:bg-[#286090] hover:-translate-y-0.5 flex items-center justify-center transition-all"
    >
      <ChevronUp className="w-5 h-5" />
    </a>
  );
}

