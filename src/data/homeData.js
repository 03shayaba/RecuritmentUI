export const TOP_BAR_LINKS = [
  { label: 'Editorial', href: '#about' },
  { label: 'Events', href: '#process' },
  { label: 'Career With IBA', href: '#about' },
  { label: 'FAQs', href: '#faqs' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Job Search', href: '#top' },
  {
    label: 'Recruitment',
    href: '#services',
    children: [
      { label: 'Executive Search', href: '#services' },
      { label: 'Recruitment Partnerships (RPO)', href: '#services' },
      { label: 'Campus & Lateral Hiring', href: '#services' },
    ],
  },
  {
    label: 'Consulting',
    href: '#services',
    children: [
      { label: 'Business & Marketing Strategy', href: '#services' },
      { label: 'HR Consulting & Transformation', href: '#services' },
      { label: 'Working Process', href: '#process' },
    ],
  },
  {
    label: 'Professional Courses',
    href: '#services',
    children: [
      { label: 'Executive Leadership Coaching', href: '#services' },
      { label: 'Impact Sales Training', href: '#services' },
      { label: 'Soft Skills & Train-the-Trainer', href: '#faqs' },
      { label: 'University Employability', href: '#contact' },
    ],
  },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_METRICS = [
  { value: '25+', label: 'Years of Advisory Excellence' },
  { value: 'PAN-India', label: '& Overseas Market Reach' },
  { value: '4 Pillars', label: 'Search, Strategy, HR & Training' },
  { value: '360°', label: 'Enterprise & Talent Solutions' },
];

export const CLIENT_SEGMENTS = [
  'Multinational Corporations (MNCs)',
  'Blue-Chip Enterprises',
  'High-Growth SMEs & Startups',
  'Family-Owned Business Houses',
  'Universities & Emerging Talent',
];

export const SERVICES = [
  {
    id: 'recruitment',
    badge: 'Talent Acquisition',
    title: 'Executive Search & Recruitment',
    summary:
      'Precision leadership hiring, recruitment process partnerships, and high-volume campus drives built for scale and cultural fit.',
    highlights: [
      'C-Suite & Senior Executive Search',
      'Dedicated Recruitment Partnerships (RPO)',
      'Structured Campus & Lateral Hiring',
      'Market Mapping & Talent Benchmarking',
    ],
    accent: 'blue',
  },
  {
    id: 'business-consulting',
    badge: 'Growth Strategy',
    title: 'Business & Marketing Consulting',
    summary:
      'Actionable market intelligence, go-to-market planning, and sales process innovation to accelerate top-line revenue.',
    highlights: [
      'Corporate Strategy & Market Analysis',
      'Sales Process Structuring & Enablement',
      'Distribution & Channel Expansion',
      'Brand Positioning & Go-To-Market Advisory',
    ],
    accent: 'indigo',
  },
  {
    id: 'hr-transformation',
    badge: 'People & Culture',
    title: 'HR Consulting & Transformation',
    summary:
      'Future-ready organizational design, performance frameworks, and HR governance that turn people strategy into business edge.',
    highlights: [
      'Manpower Planning & Org Restructuring',
      'HR Policies, Handbooks & Compliance',
      'Performance Management Systems (PMS)',
      '360° Feedback & Culture Diagnostics',
    ],
    accent: 'cyan',
  },
  {
    id: 'training-coaching',
    badge: 'AVY Kochhar Academy',
    title: 'Coaching & Training Solutions',
    summary:
      'High-impact behavioral workshops, executive coaching, and sales bootcamps designed for measurable capability uplift.',
    highlights: [
      'Executive & Behavioral Leadership Coaching',
      'High-Impact B2B & Enterprise Sales Training',
      'Train-the-Trainer Certification Tracks',
      'University Employability & Soft Skills',
    ],
    accent: 'amber',
  },
];

export const TRAINING_PROGRAMS = [
  {
    id: 'leadership',
    tab: 'Executive Coaching',
    title: 'Leadership & Behavioral Executive Coaching',
    description:
      'Personalized 1-on-1 and cohort-based coaching helping senior directors and founders sharpen decision-making, executive presence, and cross-functional alignment.',
    outcomes: [
      'Strategic leadership transition & succession readiness',
      'Emotional intelligence & high-stakes stakeholder influence',
      'Measurable 90-day behavioral action plans',
    ],
    audience: 'CXOs, VPs, Business Unit Heads & Founders',
    duration: '8 – 16 Weeks Hybrid Format',
  },
  {
    id: 'sales',
    tab: 'Sales Excellence',
    title: 'Impact Sales Training & Revenue Enablement',
    description:
      'Field-tested consultative selling frameworks that equip commercial teams to shorten deal cycles, defend margins, and win enterprise accounts.',
    outcomes: [
      'Structured discovery, objection handling & negotiation',
      'Key account farming & pipeline conversion rigor',
      'Live role-plays tailored to your industry vertical',
    ],
    audience: 'B2B Sales Teams, Regional Managers & BD Leads',
    duration: '2 – 4 Day Intensive + Coaching Reinforcement',
  },
  {
    id: 'hr-workshops',
    tab: 'Soft Skills & TTT',
    title: 'Corporate Soft Skills & Train-the-Trainer',
    description:
      'Interactive capability-building modules and facilitator certifications via AVY Kochhar Academy that build lasting internal learning cultures.',
    outcomes: [
      'Communication, presentation & collaboration mastery',
      'Certified internal trainers with ready toolkits',
      'Pre- and post-training competency scorecards',
    ],
    audience: 'Mid-Level Managers, L&D Teams & Supervisors',
    duration: 'Modular Workshops & Certification Tracks',
  },
  {
    id: 'campus',
    tab: 'Employability',
    title: 'University Employability & Campus Readiness',
    description:
      'Bridging the gap between academic theory and corporate expectations through mock interviews, business etiquette, and career readiness bootcamps.',
    outcomes: [
      'Resume craftsmanship & structured interview prep',
      'Workplace communication & problem-solving mindset',
      'Direct alignment with corporate hiring benchmarks',
    ],
    audience: 'Universities, Business Schools & Final-Year Graduates',
    duration: 'Semester-Long or Bootcamp Tracks',
  },
];

export const INDUSTRIES = [
  { name: 'Information Technology & SaaS', count: 'Tech & Digital' },
  { name: 'E-Commerce & Retail', count: 'Consumer & D2C' },
  { name: 'Banking & Financial Services', count: 'BFSI & FinTech' },
  { name: 'Telecom & Infrastructure', count: 'Connectivity' },
  { name: 'FMCG & Consumer Durables', count: 'Distribution' },
  { name: 'Manufacturing & Engineering', count: 'Industrial' },
  { name: 'Healthcare & Life Sciences', count: 'Pharma & MedTech' },
  { name: 'Consulting & Professional Services', count: 'Advisory' },
];

export const WHY_IBA = [
  {
    title: 'Two Decades of Proven Trust',
    desc: 'Over 20 years advising global MNCs, Indian conglomerates, and agile SMEs from our Gurgaon headquarters.',
  },
  {
    title: 'Integrated 4-Pillar Advantage',
    desc: 'Unlike siloed vendors, we connect hiring, business strategy, HR architecture, and capability training under one roof.',
  },
  {
    title: 'Founder-Led Accountability',
    desc: 'Every mandate benefits from senior partner oversight, domain rigor, and transparent turnaround milestones.',
  },
  {
    title: 'Dual Employer & Candidate Focus',
    desc: 'A dedicated talent ecosystem uniting corporate decision-makers with vetted professionals ready to make an impact.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'IBA Consulting Worldwide transformed our regional leadership hiring. Their market mapping and executive search rigor helped us close three critical VP roles ahead of schedule.',
    name: 'Rajeshwar Mehta',
    role: 'VP Human Resources',
    company: 'Leading Telecom Enterprise',
    tag: 'Executive Search',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Working with the IBA advisory team brought structure to our sales process and HR policies as we scaled from a family-run business into a PAN-India brand.',
    name: 'Ananya Sharma',
    role: 'Managing Director',
    company: 'Meridian Consumer Goods',
    tag: 'Business & HR Consulting',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The behavioral leadership and impact sales programs delivered through AVY Kochhar Academy created an immediate, measurable lift in team confidence and quota attainment.',
    name: 'Vikramaditya Kapoor',
    role: 'Commercial Head',
    company: 'Apex Industrial Solutions',
    tag: 'Corporate Training',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'From campus recruitment drives to senior HR restructuring, IBA’s Gurgaon practice acts as a true strategic extension of our leadership team.',
    name: 'Meenakshi Iyer',
    role: 'Chief People Officer',
    company: 'FinEdge Technologies',
    tag: 'HR Transformation',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
];

export const FAQS = [
  {
    num: '01.',
    question: 'What does IBA’s Search & HR Advisory cover?',
    answer:
      'It encompasses executive search, employer branding, talent selection, onboarding, HR policies, workforce structuring, performance management, and organizational culture.',
  },
  {
    num: '02.',
    question: 'How does IBA conduct a training-needs analysis?',
    answer:
      'Our advisors combine stakeholder interviews, competency gap diagnostics, and 360-degree surveys to design high-impact coaching and capability roadmaps.',
  },
  {
    num: '03.',
    question: 'Do you offer on-site corporate & HR training as well?',
    answer:
      'Yes. Through the AVY Kochhar Academy, we deliver on-site and hybrid leadership workshops, impact sales bootcamps, soft skills modules, and Train-the-Trainer certifications.',
  },
  {
    num: '04.',
    question: 'Do you offer advice and counsel on strategic HR & business issues?',
    answer:
      'Yes. With over 25 years of experience, our Gurgaon-based partners advise MNCs, SMEs, and family enterprises on growth strategy, restructuring, and HR transformation.',
  },
];

export const CAPABILITY_STATS = [
  { percent: 77, labelTop: 'People', labelBottom: 'Advocacy' },
  { percent: 80, labelTop: 'Business', labelBottom: 'Acumen' },
  { percent: 70, labelTop: 'Digital', labelBottom: 'Proficiency' },
  { percent: 92, labelTop: 'Data', labelBottom: 'Literacy' },
];


