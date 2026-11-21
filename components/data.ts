export interface DimensionItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  visualType: "ai" | "brand" | "digital" | "growth";
}

export const DIMENSIONS: DimensionItem[] = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI & Automation",
    tagline: "Intelligent systems that take repetitive work off your plate.",
    description:
      "AI agents, assistants and automation designed around how your business actually works.",
    services: [
      "AI Agent Development",
      "AI Chatbots & Virtual Assistants",
      "Business Process Automation",
      "Workflow Automation",
      "AI Integrations",
      "Custom AI Solutions",
    ],
    visualType: "ai",
  },
  {
    id: "creative-branding",
    number: "02",
    title: "Creative & Branding",
    tagline: "Brands and visual stories people remember.",
    description:
      "From strategy and identity to video and content, we shape how your brand looks, sounds and feels.",
    services: [
      "Brand Strategy",
      "Brand Identity Design",
      "Graphic Design",
      "Creative Direction",
      "Social Media Content Creation",
      "Video Editing & Production",
      "Visual Storytelling",
    ],
    visualType: "brand",
  },
  {
    id: "web-digital-experiences",
    number: "03",
    title: "Web & Digital Experiences",
    tagline: "Fast, considered websites and interactive experiences.",
    description:
      "Modern websites and digital experiences that are clear to use, easy to maintain and built to perform.",
    services: [
      "Website Design & Development",
      "Business Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Interactive Web Experiences",
      "Website Maintenance",
    ],
    visualType: "digital",
  },
  {
    id: "digital-growth",
    number: "04",
    title: "Digital Growth",
    tagline: "Strategy and measurement that help you reach the right people.",
    description:
      "Marketing strategy, content and analysis that connect your creative work to business growth.",
    services: [
      "Digital Marketing Strategy",
      "Social Media Management",
      "SEO",
      "Content Strategy",
      "Digital Campaigns",
      "Performance Analysis",
    ],
    visualType: "growth",
  },
];

export type WorkCategory =
  | "All"
  | "AI & Automation"
  | "Creative & Branding"
  | "Web & Digital Experiences"
  | "Digital Growth";

export interface WorkItem {
  id: string;
  index: string;
  title: string;
  badge: "Concept" | "Demo";
  category: Exclude<WorkCategory, "All">;
  year: string;
  summary: string;
  details: string;
  deliverables: string[];
  visualMotif: "brand" | "website" | "ai" | "reel" | "campaign" | "interactive";
}

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "brand-identity-system",
    index: "01",
    title: "Brand Identity System",
    badge: "Concept",
    category: "Creative & Branding",
    year: "2026",
    summary:
      "A concept exploring a cohesive logo, colour and type system.",
    details:
      "An internal studio study demonstrating how disciplined typography, a strict three-colour palette, and modular brand geometry create immediate recognition across digital and physical touchpoints.",
    deliverables: ["Logo Architecture", "Typography System", "Brand Guidelines"],
    visualMotif: "brand",
  },
  {
    id: "business-website",
    index: "02",
    title: "Business Website",
    badge: "Concept",
    category: "Web & Digital Experiences",
    year: "2026",
    summary:
      "A concept for a clear, fast small-business website.",
    details:
      "Designed to show how independent businesses can communicate value in seconds—combining crisp editorial hierarchy, fast load performance, and frictionless inquiry flows.",
    deliverables: ["Information Architecture", "Responsive UI", "Performance Build"],
    visualMotif: "website",
  },
  {
    id: "ai-workflow-automation",
    index: "03",
    title: "AI Workflow Automation",
    badge: "Demo",
    category: "AI & Automation",
    year: "2026",
    summary:
      "A demonstration of an inquiry-handling automation flow.",
    details:
      "A live studio demonstration illustrating how incoming customer inquiries can be qualified, routed, and summarized automatically—saving hours of manual triage every week.",
    deliverables: ["AI Agent Flow", "CRM Integration", "Automated Triage"],
    visualMotif: "ai",
  },
  {
    id: "visual-storytelling-reel",
    index: "04",
    title: "Visual Storytelling Reel",
    badge: "Concept",
    category: "Creative & Branding",
    year: "2026",
    summary:
      "A concept reel mixing motion, video and aerial-style visuals.",
    details:
      "An exploration in kinetic pacing, editorial title cards, and rhythmic sound-visual storytelling designed for modern brand launches and social campaigns.",
    deliverables: ["Creative Direction", "Motion System", "Edit & Pacing Study"],
    visualMotif: "reel",
  },
  {
    id: "digital-campaign-plan",
    index: "05",
    title: "Digital Campaign Plan",
    badge: "Concept",
    category: "Digital Growth",
    year: "2026",
    summary:
      "A concept campaign plan with content and measurement outline.",
    details:
      "A structured growth blueprint connecting creative storytelling to measurable outcomes—mapping channel cadence, content pillars, and clear performance benchmarks.",
    deliverables: ["Campaign Strategy", "Content Calendar", "KPI Framework"],
    visualMotif: "campaign",
  },
  {
    id: "interactive-web-experience",
    index: "06",
    title: "Interactive Web Experience",
    badge: "Concept",
    category: "Web & Digital Experiences",
    year: "2026",
    summary:
      "A concept for a scroll-driven product story.",
    details:
      "A spatial web prototype exploring continuous scroll choreography, architectural masking, and interactive transitions that turn product exploration into a memorable narrative.",
    deliverables: ["Scroll Choreography", "Interactive Prototype", "Motion Spec"],
    visualMotif: "interactive",
  },
];

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
  align: "left" | "right";
}

export const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "THINK CREATIVELY",
    description: "Every meaningful solution starts with a different perspective.",
    align: "left",
  },
  {
    number: "02",
    title: "BUILD INTELLIGENTLY",
    description:
      "Use the right technology to turn ideas into practical solutions.",
    align: "right",
  },
  {
    number: "03",
    title: "CONNECT EVERYTHING",
    description: "Bring creative, digital and business thinking together.",
    align: "left",
  },
  {
    number: "04",
    title: "KEEP EVOLVING",
    description: "Explore, experiment and improve continuously.",
    align: "right",
  },
];

export interface ApproachStage {
  number: string;
  title: string;
  description: string;
  artifact: string;
}

export const APPROACH_STAGES: ApproachStage[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, audience and challenge.",
    artifact: "Research · Audit · Alignment",
  },
  {
    number: "02",
    title: "STRATEGIZE",
    description: "Define the direction and identify the right solution.",
    artifact: "Architecture · Creative Direction · Roadmap",
  },
  {
    number: "03",
    title: "CREATE & BUILD",
    description: "Turn ideas into meaningful creative and digital experiences.",
    artifact: "Design · Engineering · AI Integration",
  },
  {
    number: "04",
    title: "EVOLVE",
    description: "Improve, adapt and grow over time.",
    artifact: "Optimization · Iteration · Scale",
  },
];

export interface InsightArticle {
  id: string;
  number: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
}

export const INSIGHTS: InsightArticle[] = [
  {
    id: "ai-for-small-businesses",
    number: "01",
    category: "AI & AUTOMATION",
    readTime: "4 MIN READ",
    title: "AI for Small Businesses: Beyond the Hype",
    excerpt:
      "How practical, focused AI integrations eliminate daily friction and create measurable leverage without enterprise complexity.",
    content: [
      "Most conversations around artificial intelligence oscillate between futuristic speculation and generic chatbot widgets. For independent and growing businesses, neither extreme is useful.",
      "Real leverage begins by mapping where human attention is repeatedly drained: qualifying incoming leads, answering repetitive operational questions, routing bookings, and reconciling scattered tools.",
      "When AI is designed as a quiet, reliable layer inside your existing business systems—rather than a bolted-on novelty—teams reclaim hours every week while delivering faster, more consistent experiences to their customers.",
    ],
  },
  {
    id: "more-than-a-beautiful-website",
    number: "02",
    category: "WEB & DIGITAL EXPERIENCES",
    readTime: "5 MIN READ",
    title: "Why Your Business Needs More Than a Beautiful Website",
    excerpt:
      "Aesthetics earn the first three seconds. Clarity, narrative architecture, and connected systems earn long-term trust.",
    content: [
      "A visually polished website that sits disconnected from how a business actually operates is just a digital brochure. Modern audiences expect immediacy, coherence, and effortless interaction.",
      "The strongest digital experiences unite three layers: an unmistakable brand story, purposeful motion that guides attention, and intelligent backend workflows that turn curiosity into action.",
      "When design, engineering, and business operations are conceived together from day one, your website stops being a static expense and becomes an active engine for growth.",
    ],
  },
  {
    id: "creative-thinking-memorable-brands",
    number: "03",
    category: "CREATIVE & BRANDING",
    readTime: "4 MIN READ",
    title: "The Role of Creative Thinking in Building Memorable Brands",
    excerpt:
      "In an era of automated templates and sameness, original perspective is the most durable competitive advantage.",
    content: [
      "As production tools become faster and more accessible, average execution has become abundant. Markets are saturated with brands that look, sound, and behave identically.",
      "Creative thinking is not decoration applied at the end of a project. It is the discipline of reframing a problem, distilling what makes an organization genuinely distinct, and expressing it with conviction.",
      "Memorable brands pair disciplined restraint with unexpected ideas—creating visual and interactive worlds that people recognize instantly and remember long after they close the tab.",
    ],
  },
];

export const FOUNDERS = [
  {
    number: "01",
    role: "Founder — AI and Technology",
    focus:
      "AI agents, integrations, automation, intelligent systems and technical development.",
    tags: ["AI Agents", "Automation", "Systems Architecture", "Engineering"],
  },
  {
    number: "02",
    role: "Founder — Creative and Digital",
    focus:
      "Branding, graphic design, creative direction, video production, content creation, web development and digital experiences.",
    tags: ["Brand Identity", "Creative Direction", "Web Experiences", "Motion"],
  },
];

export const BELIEFS = [
  {
    number: "01",
    title: "Creativity needs intelligence",
    description:
      "Good ideas land harder when they are informed and well built.",
  },
  {
    number: "02",
    title: "Technology should feel human",
    description: "Tools should make work clearer, not more complicated.",
  },
  {
    number: "03",
    title: "Small teams move well",
    description:
      "Close collaboration keeps quality high and decisions quick.",
  },
];

export const WORKING_PRINCIPLES = [
  "Be honest about what we can deliver today.",
  "Keep you involved at every important step.",
  "Make things clear, fast and easy to maintain.",
  "Measure what matters, then improve it.",
];
