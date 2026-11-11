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
    href: '#top-programs',
    children: [
      { label: 'Executive Leadership Coaching', href: '#top-programs' },
      { label: 'Impact Sales Training', href: '#top-programs' },
      { label: 'Soft Skills & Train-the-Trainer', href: '#top-programs' },
      { label: 'University Employability', href: '#top-programs' },
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
      'I know Varun for the last 6 yrs. He is a passionate professional and brings commitment as a value to his deliveries. His leadership searches are marvelous and befitting to the requirements. His warmth, energy and dedication is what differentiates him from others. He believes in long term relationship building.',
    name: 'Vinod Chaturvedi',
    role: 'Ex Chief Operating Officer',
    company: 'Airtel, Karnataka',
    tag: 'Executive Search',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'I have known Varun for almost 14 years now — a versatile Professional and a visionary Entrepreneur. IBA under his able leadership has grown multi folds and has carved out a niche position for itself in the Talent and Acquisition domain, creating a true differentiator for the industry.',
    name: 'Sharad Khanna',
    role: 'Sales Head FTTH',
    company: 'Shyam Spectra Pvt Ltd',
    tag: 'Talent Acquisition',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Ever since I met Varun, I realized here is someone who is so competent yet very modest and humane; very passionate yet very focused; very professional yet very personal in providing solutions to the agenda in hand. He walks the talk and is master of his trade.',
    name: 'Dr. Amarjeet Malhotra',
    role: 'Dean & Professor of Accounting',
    company: 'Ansal University, Gurgaon',
    tag: 'Leadership & Advisory',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
  },
];

export const FAQS = [
  {
    num: '01.',
    question: 'What does IBA’s Executive Search & Recruitment cover?',
    answer:
      'We manage end-to-end search assignments from Managing Directors, Board Directors, CEO, CFO, CHRO, CMO, and CIO/CTO roles to senior management through Executive Search Partners, Recruitment Partners, and Campus Hiring Partners.',
  },
  {
    num: '02.',
    question: 'How does IBA assess candidates and mitigate hiring risk?',
    answer:
      'Our methodology combines Smart Search & Need Analysis, role-specific competency evaluation, deep-dive industry intelligence, psychometric leadership questionnaires, reference checks, and attrition-risk mitigation.',
  },
  {
    num: '03.',
    question: 'What programs are offered under Coaching & Training Solutions?',
    answer:
      'Through AVY Kochhar Academy, we deliver Leadership Coaching Solutions, Behavioural Executive Coaching, Family Business Management 1 & 2, Impact Sales Training, Soft Skill Programs, Train the Trainer, and University Programs.',
  },
  {
    num: '04.',
    question: 'What is covered under Business & HR Consulting Transformation?',
    answer:
      'We advise MNCs, blue-chip corporations, SMEs, and family-owned businesses on corporate marketing strategy, distribution planning, workforce restructuring, manpower planning, PMS, 360-degree & culture surveys, and policy manuals.',
  },
];

export const CAPABILITY_STATS = [
  { percent: 77, labelTop: 'People', labelBottom: 'Advocacy' },
  { percent: 80, labelTop: 'Business', labelBottom: 'Acumen' },
  { percent: 70, labelTop: 'Digital', labelBottom: 'Proficiency' },
  { percent: 92, labelTop: 'Data', labelBottom: 'Literacy' },
];

export const TOP_PROGRAM_TABS = [
  {
    id: 'leadership-coaching',
    label: 'Leadership Coaching Solutions',
    programs: [
      {
        title: 'BEHAVIOURAL EXECUTIVE COACHING',
        image: '/executive-leadership.jpg',
        summary:
          'Building leaders who can lead — targeted behavioral executive coaching to sharpen leadership agility, self-awareness, and C-suite impact.',
        audience: 'MDs, Board Directors, CEOs & Senior Management',
      },
      {
        title: 'FAMILY BUSINESS MANAGEMENT 1',
        image:
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
        summary:
          'Foundational governance, professionalized leadership systems, and vision alignment tailored for family-owned businesses.',
        audience: 'Promoters & Next-Gen Family Business Leaders',
      },
      {
        title: 'FAMILY BUSINESS MANAGEMENT 2',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
        summary:
          'Succession planning, structural transformation, and multi-generational scale execution for established corporate houses.',
        audience: 'Managing Directors & Succession Cohorts',
      },
      {
        title: 'INSPIRING LEADERSHIP',
        image: '/executive-search.jpg',
        summary:
          'Don’t manage — LEAD! Empower leaders to inspire ambition, initiative, and high-trust ownership across teams.',
        audience: 'Business Unit Heads & Senior Leaders',
      },
      {
        title: 'LEADING HIGH PERFORMANCE TEAMS',
        image:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        summary:
          'Unleash your team’s talent through clear goal alignment, coaching feedback loops, and execution accountability.',
        audience: 'Department Heads & People Managers',
      },
      {
        title: 'MANAGING ROLE TRANSITION: PREPARING FOR THE NEXT ROLE',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
        summary:
          'Structured leadership transition program preparing executives and rising leaders to step confidently into higher roles.',
        audience: 'Newly Promoted CXOs, VPs & Functional Heads',
      },
    ],
  },
  {
    id: 'impact-sales',
    label: 'Impact Sales Training',
    programs: [
      {
        title: 'IMPACT SALES TRAINING',
        image:
          'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
        summary:
          'Flagship revenue enablement program built to help commercial teams shift from transactional pitches to consultative value wins.',
        audience: 'Enterprise Sales & Business Development Teams',
      },
      {
        title: 'SELL LIKE A CHAMPION',
        image:
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
        summary:
          'Be an achiever, not just a performer — mindset, attitude, and pipeline habits of top-decile sales producers.',
        audience: 'Territory Managers & Account Executives',
      },
      {
        title: 'POWER SELLING',
        image: '/executive-leadership.jpg',
        summary:
          'High-velocity discovery, stakeholder persuasion, and confident deal acceleration in competitive markets.',
        audience: 'B2B & Channel Sales Professionals',
      },
      {
        title: 'NEGOTIATION TECHNIQUES FOR SALES TEAM',
        image:
          'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
        summary:
          'Margin-protecting negotiation frameworks, objection mastery, and win-win enterprise contract closures.',
        audience: 'Commercial Heads & Key Account Managers',
      },
      {
        title: 'CUSTOMER FIRST',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
        summary:
          'Embed customer centricity, account farming, and long-term relationship building into every client touchpoint.',
        audience: 'Client Servicing & Account Management Teams',
      },
      {
        title: 'YOU ARE A BRAND',
        image:
          'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80',
        summary:
          'Build executive credibility, consultative trust, and memorable personal positioning with enterprise buyers.',
        audience: 'Client-Facing Leaders & Sales Advisors',
      },
    ],
  },
  {
    id: 'soft-skills',
    label: 'Soft Skill Programs',
    programs: [
      {
        title: 'REINVENT THE INNER YOU',
        image:
          'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
        summary:
          'Attitude, ambition, and initiative — unlock peak personal motivation, resilience, and workplace clarity.',
        audience: 'Professionals & Emerging Managers',
      },
      {
        title: 'IMPRESSIVE PERSONALITY FOR ACHIEVING SUCCESS',
        image:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
        summary:
          'Elevate poise, emotional intelligence, and professional demeanor to become a confident workplace standout.',
        audience: 'Executives & Client-Facing Teams',
      },
      {
        title: 'BUSINESS COMMUNICATION SKILLS',
        image: '/executive-leadership.jpg',
        summary:
          'Clear verbal, written, and cross-functional corporate communication designed for modern organizations.',
        audience: 'Managers, Analysts & Corporate Cohorts',
      },
      {
        title: 'HI IMPACT PRESENTATION SKILL PROGRAM',
        image:
          'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80',
        summary:
          'Design structured business presentations and deliver boardroom stories with confidence and persuasion.',
        audience: 'Team Leads, Trainers & Consultants',
      },
      {
        title: 'INFLUENCING OTHERS',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
        summary:
          'Practical assertiveness, stakeholder alignment, and collaboration skills without relying solely on authority.',
        audience: 'Project Managers & Cross-Functional Leads',
      },
      {
        title: 'MASTER YOUR DECISION MAKING',
        image:
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
        summary:
          'Structured analytical prioritization, assertiveness at work, and overcoming procrastination — first things first.',
        audience: 'Supervisors & Operational Leaders',
      },
    ],
  },
  {
    id: 'university-programs',
    label: 'University Programs',
    programs: [
      {
        title: 'JOURNEY TO CORPORATE LIFE (FOUNDATION PROGRAM)',
        image:
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
        summary:
          'Foundation track bridging university academics with real corporate culture, etiquette, attitude, and execution habits.',
        audience: 'Undergraduate & Early Postgraduate Students',
      },
      {
        title: 'HOW TO BE EMPLOYABLE? (MASTER PROGRAM)',
        image:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
        summary:
          'Comprehensive employability certification covering communication, structured interviews, GD readiness, and career positioning.',
        audience: 'Final-Year Graduates & MBA Placement Cohorts',
      },
      {
        title: 'HOW TO BE EMPLOYABLE? (SPECIALIZED PROGRAM)',
        image:
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
        summary:
          'Targeted campus hiring specialization aligned with corporate competency benchmarks and Partner University drives.',
        audience: 'Campus Hiring Partners & University Cells',
      },
    ],
  },
];


