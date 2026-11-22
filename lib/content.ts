import { DIMENSIONS } from "@/components/data";

export interface Faq {
  q: string;
  a: string;
}

export interface IndustryChallenge {
  problem: string;
  solution: string;
  services: string[];
}

export interface Industry {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  challenges: IndustryChallenge[];
  recommended: string[];
  proof?: { title: string; text: string; cta: string; href: string };
  faqs: Faq[];
  waMessage: string;
}

/** Returns the division id that contains a given service name. */
export function divisionIdForService(service: string): string {
  return (
    DIMENSIONS.find((d) => d.services.includes(service))?.id ?? "services"
  );
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "restaurants-and-cafes",
    name: "Restaurants & Cafés",
    metaTitle: "Web Design & Branding for Restaurants in Sri Lanka",
    metaDescription:
      "Mobile-first websites, brand identity and WhatsApp-ready marketing for restaurants and cafés in Sri Lanka. Help customers find you, trust you and get in touch.",
    eyebrow: "FOR RESTAURANTS & CAFÉS",
    h1: "Websites and branding that fill tables",
    intro:
      "Most customers choose where to eat on their phone: a Google search, an Instagram post or a message from a friend. If your menu is hard to find, your photos look inconsistent or booking means a phone call, they move on to the next place.",
    challenges: [
      {
        problem: "Your menu is buried in photos or PDFs",
        solution:
          "A fast, mobile-first website with a clear menu, opening hours, location and a one-tap WhatsApp button.",
        services: ["Website Design & Development", "Landing Pages"],
      },
      {
        problem: "Your brand looks different everywhere",
        solution:
          "One cohesive identity (logo, colours, typography and menu design) applied consistently across signage, social media and web.",
        services: ["Brand Identity Design", "Graphic Design"],
      },
      {
        problem: "Social posts are inconsistent",
        solution:
          "Content that shows your food, space and people, planned as a repeatable monthly rhythm instead of last-minute posting.",
        services: ["Social Media Content Creation", "Video Editing & Production"],
      },
      {
        problem: "Repeat questions take up staff time",
        solution:
          "A WhatsApp-ready flow or assistant for opening hours, menu and booking questions. We'll advise what is practical for your size.",
        services: ["AI Chatbots & Virtual Assistants", "Workflow Automation"],
      },
    ],
    recommended: [
      "Website Design & Development",
      "Brand Identity Design",
      "Social Media Content Creation",
      "Video Editing & Production",
      "SEO",
    ],
    faqs: [
      {
        q: "Does a café really need a website if it has Instagram?",
        a: "Instagram is great for discovery, but a website is a place you own. It can appear in Google searches, carries your menu, location and contact details, and works for people who don't use Instagram. We usually recommend both working together.",
      },
      {
        q: "Can customers reserve or order through WhatsApp?",
        a: "Yes. We can add click-to-chat buttons that open WhatsApp with a pre-filled message, for example a table reservation request. Fully automated ordering depends on your setup, and we'll advise what is practical.",
      },
      {
        q: "Can you also design our logo and menu?",
        a: "Yes. Brand Identity Design and Graphic Design are core services, so your brand, menu and website can be designed together.",
      },
    ],
    waMessage:
      "Hi GROOTIT! I run a restaurant/café and I'd like to talk about a website and marketing.",
  },
  {
    slug: "construction-and-property",
    name: "Construction & Property",
    metaTitle: "Construction & Property Web Design in Sri Lanka",
    metaDescription:
      "Professional websites, project portfolios and enquiry-ready marketing for construction, engineering and property businesses in Sri Lanka.",
    eyebrow: "FOR CONSTRUCTION & PROPERTY",
    h1: "Show the quality of your builds before the first site visit",
    intro:
      "Clients choose a builder on trust. They look at past projects, judge whether you look established and want an easy way to start a conversation. A dated website or a scattered Facebook page makes serious work look smaller than it is.",
    challenges: [
      {
        problem: "Your best projects aren't presented properly",
        solution:
          "A portfolio with strong imagery, clear project details and categories for new builds, renovations and landscaping.",
        services: ["Website Design & Development", "Business Websites"],
      },
      {
        problem: "Enquiries arrive slowly or inconsistently",
        solution:
          "Clear calls to action: WhatsApp, phone and email on every page, so a serious enquiry can reach you in one tap.",
        services: ["Landing Pages", "Website Design & Development"],
      },
      {
        problem: "Clients can't picture the finished result",
        solution:
          "Present 3D visualisation and walkthrough work through interactive web experiences that make plans easier to understand.",
        services: ["Interactive Web Experiences", "Visual Storytelling"],
      },
      {
        problem: "You are hard to find when people search",
        solution:
          "SEO foundations for the services and areas you actually cover, plus content that answers the questions clients ask before building.",
        services: ["SEO", "Content Strategy"],
      },
    ],
    recommended: [
      "Website Design & Development",
      "Interactive Web Experiences",
      "SEO",
      "Content Strategy",
      "Brand Identity Design",
      "Website Maintenance",
    ],
    proof: {
      title: "Client project: N&M Engineering & Construction",
      text: "We designed and built a portfolio-led website covering design & build, house plans, 3D visualisation, renovation, BOQ & estimation and landscaping.",
      cta: "See the project",
      href: "/work",
    },
    faqs: [
      {
        q: "What should a construction company's website include?",
        a: "At minimum: a clear description of your services, a project portfolio with real photos, the areas you work in, one-tap contact options and the basics that build trust, such as who you are and how you work.",
      },
      {
        q: "How do we keep our project portfolio up to date?",
        a: "We agree the update process during planning: either a structure you can add to yourself, or ongoing Website Maintenance handled by us.",
      },
      {
        q: "Do you work with property developers and real-estate businesses too?",
        a: "Yes. The same approach applies to property listings, development showcases and agent branding. Share your goals and we'll recommend what fits.",
      },
    ],
    waMessage:
      "Hi GROOTIT! I run a construction/property business and I'd like to discuss a website.",
  },
  {
    slug: "retail-and-ecommerce",
    name: "Retail & E-commerce",
    metaTitle: "E-commerce Web Design & Branding in Sri Lanka",
    metaDescription:
      "E-commerce websites, brand identity and social content for retail and online stores in Sri Lanka, built to turn browsers into buyers.",
    eyebrow: "FOR RETAIL & E-COMMERCE",
    h1: "A brand and online store people trust enough to buy from",
    intro:
      "In retail the product is only half the story. Shoppers judge a brand in seconds: the logo, the photos and how easy it is to ask a question or place an order. A consistent brand and a smooth path from browsing to buying make the difference.",
    challenges: [
      {
        problem: "Shoppers don't remember your brand",
        solution:
          "A distinctive identity (logo, colours, typography and packaging-ready assets) that looks the same on product, social and web.",
        services: ["Brand Strategy", "Brand Identity Design"],
      },
      {
        problem: "Selling only through DMs is hard to scale",
        solution:
          "An e-commerce website with a clear catalogue and checkout, with WhatsApp kept for questions and personal service.",
        services: ["E-commerce Websites", "Website Design & Development"],
      },
      {
        problem: "Content takes time you don't have",
        solution:
          "Creative direction, short-form video and social content built on one visual style so every post builds the brand.",
        services: ["Social Media Content Creation", "Video Editing & Production"],
      },
      {
        problem: "You can't tell what's working",
        solution:
          "Campaign planning and performance analysis so you can see which channels actually bring orders.",
        services: ["Digital Campaigns", "Performance Analysis"],
      },
    ],
    recommended: [
      "Brand Identity Design",
      "E-commerce Websites",
      "Social Media Content Creation",
      "Digital Campaigns",
      "Performance Analysis",
    ],
    proof: {
      title: "Client project: Neshu Bowie",
      text: "We created a brand identity for Neshu Bowie, a hair accessories brand: a custom line-art portrait emblem, signature script, logo variations and a warm product-led visual direction.",
      cta: "See the project",
      href: "/work",
    },
    faqs: [
      {
        q: "Do I need an online store, or is Instagram enough?",
        a: "Social selling works well to start. An online store becomes valuable when messages pile up: it gives customers a catalogue to browse, reduces repeated 'price?' questions and gives you a place that can appear in Google searches. We can help you choose the right step for your stage.",
      },
      {
        q: "Can you design our brand and the store together?",
        a: "Yes. Brand identity and the website are designed as one system, so the store feels like the brand from the first click.",
      },
      {
        q: "Can the store take online payments?",
        a: "E-commerce Websites is a core service. Payment options depend on the providers available to your business, and we review them with you during planning.",
      },
    ],
    waMessage:
      "Hi GROOTIT! I have a retail/online store and I'd like to discuss branding and an e-commerce website.",
  },
  {
    slug: "startups",
    name: "Startups",
    metaTitle: "Startup Branding & Website Design in Sri Lanka",
    metaDescription:
      "Brand identity, a launch-ready website and smart automation for startups and growing companies in Sri Lanka. One team, one coherent story.",
    eyebrow: "FOR STARTUPS & GROWING COMPANIES",
    h1: "Launch with a brand and website as ambitious as your idea",
    intro:
      "Startups rarely have the time or budget to manage a designer, a developer and a marketer separately. When brand, website and tools are designed together, you launch faster and look more credible to customers, partners and investors.",
    challenges: [
      {
        problem: "You need credibility from day one",
        solution:
          "A clean identity and website that explain what you do in seconds and look ready for the market.",
        services: ["Brand Strategy", "Brand Identity Design"],
      },
      {
        problem: "Everything needs building, but resources are limited",
        solution:
          "A phased plan: start with the essentials (brand and a focused landing page), then add web apps and tools as you learn what customers want.",
        services: ["Landing Pages", "Web Applications"],
      },
      {
        problem: "Manual work won't scale",
        solution:
          "Workflow automation and AI integrations that handle repetitive lead and support tasks so a small team can do more.",
        services: ["Workflow Automation", "AI Integrations"],
      },
      {
        problem: "You need your first customers",
        solution:
          "A digital marketing plan and content built around what your future customers actually search for and ask.",
        services: ["Digital Marketing Strategy", "Content Strategy"],
      },
    ],
    recommended: [
      "Brand Strategy",
      "Brand Identity Design",
      "Landing Pages",
      "Web Applications",
      "Workflow Automation",
      "Digital Marketing Strategy",
    ],
    faqs: [
      {
        q: "What should a startup build first?",
        a: "Usually the essentials: a clear brand, a focused landing page that explains your offer and a simple way for customers to contact you. We help you phase the rest as you learn what customers want.",
      },
      {
        q: "Can you build web apps and custom tools?",
        a: "Web Applications and Digital Platforms are listed services. Every product is different, so share your idea and we'll tell you honestly what we can deliver today.",
      },
      {
        q: "Can you help with positioning and messaging?",
        a: "Yes. Brand Strategy is part of our Creative & Branding division and helps define what you stand for before design begins.",
      },
    ],
    waMessage:
      "Hi GROOTIT! I'm building a startup and I'd like to talk about branding, a website and tools.",
  },
  {
    slug: "professional-and-local-services",
    name: "Professional & Local Services",
    metaTitle: "Web Design & Marketing for Service Businesses",
    metaDescription:
      "Websites, branding and digital marketing that help consultants, clinics, salons, tutors and other local service businesses in Sri Lanka get found and contacted.",
    eyebrow: "FOR PROFESSIONAL & LOCAL SERVICES",
    h1: "Be the obvious choice when someone nearby needs your service",
    intro:
      "People looking for a local service usually search, compare a few options and contact the one that looks most trustworthy and is easiest to reach. Clear information, consistent branding and one-tap contact win those moments.",
    challenges: [
      {
        problem: "Customers can't tell what you offer or how to begin",
        solution:
          "Service pages that explain what you do, who it's for and exactly how to get started.",
        services: ["Business Websites", "Website Design & Development"],
      },
      {
        problem: "You're hard to find when people search",
        solution:
          "SEO foundations: a clear site structure, well-written service information and the technical basics search engines need.",
        services: ["SEO", "Content Strategy"],
      },
      {
        problem: "Enquiries and questions swamp your phone",
        solution:
          "WhatsApp-friendly contact paths, with assistants for common questions where they genuinely help.",
        services: ["AI Chatbots & Virtual Assistants", "Workflow Automation"],
      },
      {
        problem: "You look like everyone else",
        solution:
          "A brand identity and social content that show your professionalism and personality.",
        services: ["Brand Identity Design", "Social Media Management"],
      },
    ],
    recommended: [
      "Business Websites",
      "SEO",
      "Brand Identity Design",
      "Social Media Management",
      "Website Maintenance",
    ],
    faqs: [
      {
        q: "How can a local service business get more enquiries from Google?",
        a: "Start with a fast, mobile-friendly website that clearly explains each service and where you work, with easy contact options. Then build on it with SEO and helpful content. Results depend on competition and effort, and we never promise specific rankings.",
      },
      {
        q: "Should we take bookings and questions on WhatsApp?",
        a: "Many customers prefer messaging to filling in forms. A pre-filled WhatsApp button lets them start a chat in one tap, and we can advise how to organise incoming enquiries.",
      },
      {
        q: "Can you manage our social media as well?",
        a: "Yes. Social Media Management and Social Media Content Creation are part of our Digital Growth and Creative & Branding divisions.",
      },
    ],
    waMessage:
      "Hi GROOTIT! I run a service business and I'd like to discuss a website and marketing.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export const SERVICE_FAQS: Faq[] = [
  {
    q: "What services does GROOTIT offer?",
    a: "GROOTIT works across four divisions: AI & Automation, Creative & Branding, Web & Digital Experiences and Digital Growth. That covers everything from brand identity and websites to AI assistants, workflow automation, SEO and social media.",
  },
  {
    q: "Do you work with small businesses in Sri Lanka?",
    a: "Yes. We are based in Sri Lanka and work with restaurants, construction and property businesses, retailers, startups and local service businesses, as well as international clients.",
  },
  {
    q: "How does a project with GROOTIT work?",
    a: "We start by understanding your goals, audience and challenges, then plan and design a clear direction. We build and refine the work with you, and after launch we help you improve and grow.",
  },
  {
    q: "How much does a website or branding project cost?",
    a: "It depends on scope, so we don't publish fixed prices. Message us on WhatsApp or email with your goals and we'll recommend a plan and give you a clear proposal.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on the size of the project and how quickly decisions and content are shared. You'll receive a clear timeline in your proposal before work begins.",
  },
  {
    q: "Can AI chatbots work with WhatsApp or my website?",
    a: "We design AI assistants and chatbots for website chat and messaging use cases. What is practical depends on your business and the platform's requirements, and we'll tell you honestly what we can deliver today.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Website Maintenance, Performance Analysis and Social Media Management are available if you want help improving and growing after launch.",
  },
  {
    q: "Do you work with clients outside Sri Lanka?",
    a: "Yes. We are based in Sri Lanka and work with businesses internationally.",
  },
];
