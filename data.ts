import { Attorney, Insight, PracticeArea } from './types';

export const attorneys: Attorney[] = [
  {
    id: 'jordan-wolff',
    name: 'Jordan Wolff',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
    bio: 'Founding partner with over 25 years of experience. A formidable advocate known for strategic brilliance in complex litigation and corporate governance.',
    practiceAreas: ['Complex Litigation', 'Corporate Governance'],
    education: ['J.D., Harvard Law School', 'B.A., Yale University'],
    admissions: ['New York State Bar', 'U.S. District Court, SDNY']
  },
  {
    id: 'james-davis',
    name: 'James Davis',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'Expert in real estate acquisitions and zoning regulations. James advises major developers on transformative urban projects.',
    practiceAreas: ['Real Estate', 'Zoning & Land Use'],
    education: ['J.D., Stanford Law School', 'B.A., UCLA'],
    admissions: ['California State Bar', 'Arizona State Bar']
  },
  {
    id: 'amanda-lee',
    name: 'Amanda Lee',
    role: 'Associate',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Focusing on intellectual property rights and technology litigation. Amanda brings a background in computer science to legal strategy.',
    practiceAreas: ['Intellectual Property', 'Tech Litigation'],
    education: ['J.D., Columbia Law School', 'B.S., MIT'],
    admissions: ['California State Bar', 'USPTO']
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Senior Counsel',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop',
    bio: 'Leading our international arbitration practice. Sarah has represented sovereigns and multinational corporations in high-stakes disputes.',
    practiceAreas: ['International Arbitration', 'Cross-Border Disputes'],
    education: ['LL.M., Georgetown', 'J.D., University of Chicago'],
    admissions: ['New York State Bar', 'DC Bar']
  },
  {
    id: 'michael-ross',
    name: 'Michael Ross',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    bio: 'Specializing in mergers and acquisitions for private equity clients.',
    practiceAreas: ['M&A', 'Private Equity'],
    education: ['J.D., NYU School of Law', 'B.A., Princeton'],
    admissions: ['New York State Bar']
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    role: 'Associate',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    bio: 'Focusing on labor and employment disputes for Fortune 500 companies.',
    practiceAreas: ['Labor & Employment', 'Commercial Litigation'],
    education: ['J.D., Berkeley Law', 'B.A., Stanford'],
    admissions: ['California State Bar']
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 'business-law',
    slug: 'business-law',
    title: 'Business Law',
    subtitle: 'Comprehensive counsel for the modern enterprise.',
    description: 'Our Business Law practice provides sophisticated legal counsel to market leaders, startups, and investors. We navigate the entire lifecycle of a corporation, from foundational structuring to high-stakes exits. We act not just as legal advisors, but as strategic partners dedicated to unlocking commercial value while mitigating risk in a complex global marketplace.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    subPractices: [
      'Corporate Governance',
      'Commercial Agreements',
      'Mergers & Acquisitions',
      'Business Formation & Structuring',
      'Shareholder & Partnership Agreements',
      'Strategic Transactions',
      'General Counsel Services'
    ]
  },
  {
    id: 'litigation',
    slug: 'litigation-dispute-resolution',
    title: 'Litigation & Dispute Resolution',
    subtitle: 'Relentless advocacy in high-stakes conflicts.',
    description: 'When commercial disputes threaten your business, Wolff Law delivers aggressive, strategic representation. Our trial attorneys are renowned for their ability to simplify complex narratives and achieve favorable outcomes in federal and state courts, as well as arbitration tribunals. We focus on the endgame from day one.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2412&auto=format&fit=crop',
    subPractices: [
      'Business Litigation',
      'Partnership Disputes',
      'Contract Litigation',
      'Fraud & Misrepresentation',
      'Trade Secret Litigation',
      'Arbitration & Mediation',
      'Real Estate Litigation'
    ]
  },
  {
    id: 'real-estate',
    slug: 'real-estate-law',
    title: 'Real Estate Law',
    subtitle: 'Structuring the skylines of tomorrow.',
    description: 'We represent developers, REITs, and institutional investors in transformative real estate projects. From land use and entitlements to complex financing and disposition, our team possesses the technical expertise to close deals in the most competitive markets. We understand that every square foot counts.',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2369&auto=format&fit=crop',
    subPractices: [
      'Commercial Real Estate Transactions',
      'Leasing (Office, Retail, Industrial)',
      'Land Use & Zoning',
      'Development & Entitlement',
      'Property Disputes',
      'Construction Issues'
    ]
  },
  {
    id: 'corporate-securities',
    slug: 'corporate-securities',
    title: 'Corporate & Securities',
    subtitle: 'Navigating capital markets with precision.',
    description: 'Our Corporate & Securities practice guides clients through the intricacies of capital raising and regulatory compliance. We advise issuers, underwriters, and private funds on debt and equity offerings, ensuring seamless execution and robust compliance with SEC regulations.',
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2370&auto=format&fit=crop',
    subPractices: [
      'Capital Markets',
      'Commercial Finance',
      'Securities Filings & Reporting',
      'Venture Financing',
      'Private Offerings',
      'Fund Formation',
      'Corporate Governance Litigation'
    ]
  },
  {
    id: 'employment',
    slug: 'employment-law',
    title: 'Employment (Employer-Side)',
    subtitle: 'Protecting your most valuable asset: your workforce.',
    description: 'We provide preventative counsel and vigorous defense for employers facing a rapidly evolving labor landscape. From drafting ironclad executive agreements to conducting sensitive internal investigations, we help companies maintain compliant, productive, and secure workplaces.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
    subPractices: [
      'Executive Employment Agreements',
      'Internal Investigations',
      'Workplace Policies',
      'Restrictive Covenants (Non-compete)',
      'Employment Compliance Advisory'
    ]
  },
  {
    id: 'compliance',
    slug: 'compliance-regulatory',
    title: 'Compliance & Regulatory',
    subtitle: 'Proactive strategies for a regulated world.',
    description: 'In an era of heightened scrutiny, compliance is not optional—it is a competitive advantage. We design and implement robust risk management frameworks that protect organizations from regulatory pitfalls while enabling sustainable growth.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2342&auto=format&fit=crop',
    subPractices: [
      'Internal Investigations',
      'Risk Management Frameworks',
      'Regulatory Strategy',
      'Licensing & Permitting',
      'Ethics & Compliance Programs'
    ]
  }
];

export const insights: Insight[] = [
  {
    id: '1',
    slug: 'antitrust-ai-era',
    title: "Navigating Antitrust in the AI Era",
    date: "April 12, 2024",
    author: "Jordan Wolff",
    category: "Business Law",
    excerpt: "As regulators tighten scrutiny on tech consolidation, companies must rethink their M&A playbooks. We analyze the DOJ's shifting stance on algorithmic competition.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2600&auto=format&fit=crop", 
    content: "The regulatory landscape for artificial intelligence is evolving at breakneck speed. Recent signals from the DOJ and FTC suggest a departure from traditional price-based harm theories towards a focus on innovation ecosystems and data monopolies."
  },
  {
    id: '2',
    slug: 'commercial-re-distress',
    title: "The Opportunity in Distressed Assets",
    date: "March 28, 2024",
    author: "James Davis",
    category: "Real Estate Law",
    excerpt: "Rising interest rates have created a dislocation in commercial real estate values. For the capitalized investor, the next 18 months offer generational acquisition opportunities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", 
    content: "Commercial office space is undergoing a fundamental repricing. We are advising private equity partners on acquiring high-quality assets at significant discounts to replacement cost, navigating complex capital stacks and debt restructuring."
  },
  {
    id: '3',
    slug: 'supply-chain-liability',
    title: "Cross-Border Supply Chain Liability",
    date: "March 15, 2024",
    author: "Sarah Chen",
    category: "Litigation",
    excerpt: "Global instability is rewriting the rules of vendor contracts. How to insulate your enterprise from upstream disruptions and geopolitical risk.",
    image: "https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=2600&auto=format&fit=crop", 
    content: "The era of frictionless global trade is over. From the Red Sea to the Panama Canal, logistics bottlenecks are becoming force majeure events. We examine how to draft resilience into your commercial agreements."
  },
  {
    id: '4',
    slug: 'esg-litigation-risks',
    title: "ESG: The New Litigation Frontier",
    date: "February 22, 2024",
    author: "Michael Ross",
    category: "Corporate & Securities",
    excerpt: "Greenwashing accusations are moving from PR crises to courtrooms. Public companies must align their sustainability disclosures with rigorous internal data.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2600&auto=format&fit=crop", 
    content: "Shareholder activists are increasingly using securities litigation to hold boards accountable for ESG commitments. We discuss the legal framework for vetting sustainability reports before they go public."
  },
  {
    id: '5',
    slug: 'cybersecurity-trade-secrets',
    title: "Trade Secrets in a Hybrid World",
    date: "February 10, 2024",
    author: "Amanda Lee",
    category: "Employment",
    excerpt: "With distributed teams comes distributed risk. Strategies for protecting intellectual property when your workforce is everywhere.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2600&auto=format&fit=crop", 
    content: "The perimeter of the modern corporation has dissolved. Protecting trade secrets now requires a fusion of legal agreements, technological controls, and cultural reinforcement."
  }
];
