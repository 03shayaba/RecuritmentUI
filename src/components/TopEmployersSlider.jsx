const ROW_ONE_LOGOS = [
  {
    name: 'ACME',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="ACME">
        <path d="M18 46 C22 30 34 20 46 14" stroke="#E11D48" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M23 48 C28 33 40 24 52 18" stroke="#E11D48" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M28 50 C34 37 45 29 56 23" stroke="#E11D48" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <text x="44" y="42" fill="#0284C7" fontFamily="sans-serif" fontWeight="800" fontStyle="italic" fontSize="22" letterSpacing="1">
          ACME
        </text>
      </svg>
    ),
  },
  {
    name: 'Aditya Birla Fashion & Retail',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-12 w-auto" aria-label="Aditya Birla">
        <rect x="40" y="6" width="100" height="52" rx="3" fill="#B91C1C" />
        <text x="90" y="16" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.8">
          ADITYA BIRLA
        </text>
        <path d="M52 43 A38 22 0 0 1 128 43 Z" fill="#FACC15" />
        <path d="M90 43 L90 22 M90 43 L70 26 M90 43 L110 26 M90 43 L58 35 M90 43 L122 35" stroke="#B91C1C" strokeWidth="2" />
        <text x="90" y="54" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.7">
          FASHION &amp; RETAIL
        </text>
      </svg>
    ),
  },
  {
    name: 'Amadeus',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Amadeus">
        <circle cx="90" cy="20" r="11" fill="#0284C7" />
        <text x="90" y="24.5" textAnchor="middle" fill="#FFFFFF" fontFamily="serif" fontWeight="700" fontSize="15">
          a
        </text>
        <text x="90" y="48" textAnchor="middle" fill="#0369A1" fontFamily="serif" fontWeight="600" fontSize="22" letterSpacing="1.2">
          amadeus
        </text>
      </svg>
    ),
  },
  {
    name: 'Amway',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Amway">
        <text x="90" y="38" textAnchor="middle" fill="#0C2544" fontFamily="sans-serif" fontWeight="800" fontSize="25" letterSpacing="-0.5">
          Amway
        </text>
        <path d="M34 45 Q90 39 146 47" stroke="#DC2626" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'CEAT',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="CEAT">
        <text x="34" y="42" fill="#1E3A8A" fontFamily="sans-serif" fontWeight="900" fontSize="28">
          C
        </text>
        <rect x="64" y="21" width="18" height="4.5" rx="1" fill="#DC2626" />
        <rect x="64" y="30" width="16" height="4.5" rx="1" fill="#DC2626" />
        <rect x="64" y="39" width="18" height="4.5" rx="1" fill="#DC2626" />
        <text x="88" y="42" fill="#1E3A8A" fontFamily="sans-serif" fontWeight="900" fontSize="28" letterSpacing="1">
          ΛT
        </text>
      </svg>
    ),
  },
  {
    name: 'Audi',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Audi">
        <g stroke="#64748B" strokeWidth="3.2" fill="none">
          <circle cx="54" cy="23" r="11" />
          <circle cx="72" cy="23" r="11" />
          <circle cx="90" cy="23" r="11" />
          <circle cx="108" cy="23" r="11" />
        </g>
        <text x="81" y="51" textAnchor="middle" fill="#DC2626" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="2">
          Audi
        </text>
      </svg>
    ),
  },
  {
    name: 'Birla Sun Life Insurance',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Birla Sun Life Insurance">
        <path d="M56 31 A34 18 0 0 1 124 31 Z" fill="#991B1B" />
        <path d="M90 31 L90 13 M90 31 L73 17 M90 31 L107 17" stroke="#FFFFFF" strokeWidth="1.8" />
        <text x="90" y="44" textAnchor="middle" fill="#7F1D1D" fontFamily="sans-serif" fontWeight="700" fontSize="13">
          Birla Sun Life
        </text>
        <text x="90" y="56" textAnchor="middle" fill="#991B1B" fontFamily="sans-serif" fontStyle="italic" fontSize="11">
          Insurance
        </text>
      </svg>
    ),
  },
  {
    name: 'BMW',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-12 w-auto" aria-label="BMW">
        <circle cx="90" cy="32" r="24" fill="#0F172A" />
        <circle cx="90" cy="32" r="14.5" fill="#FFFFFF" />
        <path d="M90 17.5 A14.5 14.5 0 0 0 75.5 32 L90 32 Z" fill="#0284C7" />
        <path d="M90 46.5 A14.5 14.5 0 0 0 104.5 32 L90 32 Z" fill="#0284C7" />
        <text x="90" y="15.5" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="4">
          BMW
        </text>
      </svg>
    ),
  },
  {
    name: 'Citibank',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Citibank">
        <path d="M52 24 Q65 13 78 24" stroke="#DC2626" strokeWidth="3.2" fill="none" strokeLinecap="round" />
        <text x="90" y="42" textAnchor="middle" fill="#003B70" fontFamily="sans-serif" fontWeight="700" fontSize="24">
          citibank
        </text>
      </svg>
    ),
  },
  {
    name: 'Coca-Cola',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Coca-Cola">
        <text x="90" y="41" textAnchor="middle" fill="#DC2626" fontFamily="Georgia, serif" fontWeight="700" fontStyle="italic" fontSize="27">
          Coca-Cola
        </text>
      </svg>
    ),
  },
];

const ROW_TWO_LOGOS = [
  {
    name: 'Dell',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-12 w-auto" aria-label="Dell">
        <circle cx="90" cy="32" r="24" fill="none" stroke="#0284C7" strokeWidth="3.2" />
        <text x="90" y="39" textAnchor="middle" fill="#0284C7" fontFamily="sans-serif" fontWeight="900" fontSize="18" letterSpacing="1">
          DELL
        </text>
      </svg>
    ),
  },
  {
    name: 'DishTV',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="DishTV">
        <rect x="26" y="16" width="22" height="22" rx="4" fill="#EA580C" />
        <path d="M31 21 A12 12 0 0 1 43 33" stroke="#FFFFFF" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <text x="56" y="34" fill="#0F172A" fontFamily="sans-serif" fontWeight="800" fontSize="20">
          dish<tspan fill="#EA580C">tv</tspan>
        </text>
        <text x="56" y="46" fill="#64748B" fontFamily="sans-serif" fontWeight="600" fontSize="7.5">
          Direct To Your Home
        </text>
      </svg>
    ),
  },
  {
    name: 'DLF Building India',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="DLF">
        <text x="40" y="37" fill="#0F172A" fontFamily="sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">
          DLF
        </text>
        <polygon points="104,16 122,38 86,38" fill="#0C2544" />
        <polygon points="104,23 114,38 94,38" fill="#FFFFFF" />
        <text x="82" y="51" textAnchor="middle" fill="#334155" fontFamily="sans-serif" fontWeight="700" fontSize="8" letterSpacing="1.2">
          BUILDING INDIA
        </text>
      </svg>
    ),
  },
  {
    name: 'Emaar MGF',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Emaar MGF">
        <rect x="28" y="10" width="54" height="40" fill="#1D4ED8" rx="2" />
        <path d="M34 36 L76 36 L76 16 L34 16 Z" fill="#EAB308" />
        <path d="M55 36 L40 16 M55 36 L55 16 M55 36 L70 16" stroke="#FFFFFF" strokeWidth="2" />
        <text x="55" y="46" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="700" fontSize="8" letterSpacing="1">
          EMAAR
        </text>
        <text x="118" y="34" textAnchor="middle" fill="#1E3A8A" fontFamily="serif" fontWeight="700" fontSize="18">
          MGF
        </text>
      </svg>
    ),
  },
  {
    name: 'Genpact',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Genpact">
        <text x="90" y="34" textAnchor="middle" fill="#0284C7" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fontSize="22" letterSpacing="0.8">
          GENPACT
        </text>
        <text x="90" y="48" textAnchor="middle" fill="#475569" fontFamily="sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="0.8">
          GENERATING IMPACT
        </text>
      </svg>
    ),
  },
  {
    name: 'Gillette',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Gillette">
        <text x="90" y="40" textAnchor="middle" fill="#0F172A" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fontSize="26" letterSpacing="-0.5">
          Gillette
        </text>
      </svg>
    ),
  },
  {
    name: 'Godfrey Phillips India',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-12 w-auto" aria-label="Godfrey Phillips">
        <circle cx="90" cy="24" r="14" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="90" y="28" textAnchor="middle" fill="#0C2544" fontFamily="serif" fontWeight="800" fontSize="12">
          GPI
        </text>
        <text x="90" y="48" textAnchor="middle" fill="#0F172A" fontFamily="serif" fontWeight="700" fontSize="9.5" letterSpacing="0.6">
          GODFREY PHILLIPS
        </text>
        <text x="90" y="57" textAnchor="middle" fill="#64748B" fontFamily="sans-serif" fontSize="6.5" letterSpacing="1">
          INDIA LIMITED
        </text>
      </svg>
    ),
  },
  {
    name: 'HDFC Bank',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="HDFC Bank">
        <rect x="22" y="14" width="28" height="28" fill="#DC2626" />
        <rect x="29" y="21" width="14" height="14" fill="#FFFFFF" />
        <rect x="33" y="25" width="6" height="6" fill="#004C8F" />
        <rect x="54" y="14" width="104" height="28" fill="#004C8F" rx="2" />
        <text x="106" y="33" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.6">
          HDFC BANK
        </text>
      </svg>
    ),
  },
  {
    name: 'Hyatt',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="Hyatt">
        <text x="90" y="34" textAnchor="middle" fill="#0C2544" fontFamily="sans-serif" fontWeight="600" fontSize="22" letterSpacing="5">
          HYATT
        </text>
        <path d="M36 45 Q90 36 144 45" stroke="#DC2626" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'ICICI Bank',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="ICICI Bank">
        <circle cx="38" cy="32" r="11" fill="#EA580C" />
        <text x="38" y="36" textAnchor="middle" fill="#FFFFFF" fontFamily="serif" fontWeight="800" fontStyle="italic" fontSize="14">
          i
        </text>
        <text x="56" y="38" fill="#991B1B" fontFamily="sans-serif" fontWeight="800" fontStyle="italic" fontSize="19">
          ICICI Bank
        </text>
      </svg>
    ),
  },
  {
    name: 'ING',
    render: () => (
      <svg viewBox="0 0 180 64" className="h-11 w-auto" aria-label="ING">
        <text x="64" y="40" textAnchor="middle" fill="#002B7F" fontFamily="serif" fontWeight="800" fontSize="26" letterSpacing="1">
          ING
        </text>
        <circle cx="122" cy="31" r="13" fill="#FF6200" opacity="0.16" />
        <path d="M114 38 C115 24 124 20 132 24 C135 28 134 36 128 40 Z" fill="#FF6200" />
      </svg>
    ),
  },
];

function LogoMarqueeRow({ logos, direction = 'left' }) {
  const repeated = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-1.5">
      <div
        className={`flex w-max gap-5 sm:gap-6 hover:[animation-play-state:paused] ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {repeated.map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            title={brand.name}
            className="w-44 sm:w-48 h-24 rounded-xl border border-slate-200/90 bg-white px-4 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#337AB7]/45 transition-all duration-300 shrink-0"
          >
            {brand.render()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TopEmployersSlider() {
  return (
    <section
      id="employers"
      className="py-16 sm:py-20 bg-white border-y border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-2.5">
        <p className="text-xs font-bold uppercase tracking-widest text-[#337AB7]">
          / Our Clients &amp; Partners /
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2544] tracking-tight uppercase">
          Top <span className="text-[#337AB7]">Employers</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Trusted by Fortune 500 MNCs, Indian conglomerates, and high-growth industry
          leaders across sectors.
        </p>
      </div>

      {/* Full-Width Dual-Row Continuous Slider with Edge Fades */}
      <div className="relative max-w-[1440px] mx-auto">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-white via-white/85 to-transparent" />

        <div className="space-y-4">
          <LogoMarqueeRow logos={ROW_ONE_LOGOS} direction="left" />
          <LogoMarqueeRow logos={ROW_TWO_LOGOS} direction="right" />
        </div>
      </div>
    </section>
  );
}

