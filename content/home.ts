// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... All type exports remain unchanged ...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "ClientControl CRM is ready",
    titleBefore: "Manage clients, projects & invoices with",
    titleHighlight: "ClientControl",
    titleAfter: "",
    subtitle:
      "ClientControl empowers your internal teams to manage relationships, projects, and billing in one powerful dashboard. Get started with robust permissions, instant exports, and a seamless experience.",
    primaryCta: { label: "Try ClientControl", href: "#pricing" },
    secondaryCta: { label: "CRM Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "ClientControl dashboard preview",
  },
  // ── Sponsors ── (unchanged)
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },
  // ── Benefits ── (update branding in text)
  benefits: {
    eyebrow: "Why ClientControl",
    heading: "A practical CRM & project management starter",
    description:
      "Built for teams that want production-ready CRM and project tracking with robust permissions and a clean, extensible setup.",
    items: [
      {
        icon: "Blocks",
        title: "Ship With Confidence",
        description: "ClientControl gives your team robust, scalable CRM, project, and invoice logic—built right in.",
      },
      {
        icon: "LineChart",
        title: "Adapt To Real Teams",
        description: "Granular roles, secure data boundaries, and tight tenant controls keep each client safe.",
      },
      {
        icon: "Wallet",
        title: "Lower Admin Burden",
        description: "Batch actions, CSV export, and instant feedback speed up back-office tasks.",
      },
      {
        icon: "Sparkle",
        title: "Cleaner UX By Default",
        description: "Responsive pages, empty/error states, and shadcn UI primitives make every action actionable.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    heading: "Unified client, project, and invoice management",
    subtitle: "ClientControl gives you CRM, project tracking, and invoicing—ready to use, easy to extend.",
    items: [
      { icon: "TabletSmartphone", title: "Seamless Dashboard", description: "Overview, CRM, settings, and more—switch between teams with a click." },
      { icon: "BadgeCheck", title: "Uncompromising Security", description: "Role-based permissions, strict tenant scoping, and audit-ready change logs." },
      { icon: "Goal", title: "All Core Entities", description: "Clients, projects, invoices, and team settings in one place." },
      { icon: "MousePointerClick", title: "Ready For Power Users", description: "Fast filtering, search, pagination, and CSV export built-in." },
      { icon: "PictureInPicture", title: "Setup in Minutes", description: "Deploy, invite your team, and start managing clients with zero friction." },
      { icon: "Newspaper", title: "Professional Defaults", description: "Sensible validation, actionable errors, and a layout your team can rely on." },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "Core ClientControl capabilities",
    subtitle: "A pragmatic base for organizations managing growing client lists and projects.",
    items: [
      { title: "CRM & Project Management", description: "Add, edit, and organize your clients, projects, and invoices in minutes.", pro: false },
      { title: "Strong Permissions", description: "Powerful role control and safe, team-scoped data structures.", pro: false },
      { title: "CSV Export", description: "All list views support one-click export for team reporting.", pro: false },
      { title: "Production Hardening", description: "Robust error handling, audit-ready patterns, and maintainable UI.", pro: true },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams trust ClientControl",
    reviews: [
      { image: "/demo-img.jpg", name: "Chirag Dodiya", role: "Founder, ClientControl", comment: "We built ClientControl to solve our own need for a clear, actionable CRM—it's saved us hours every week.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Sales Lead", comment: "The ClientControl dashboard let our team run faster and keep everything in sync.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Operations", comment: "We finally have an invoice log and project timeline in one UI. Super clear, super easy!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Engineering Manager", comment: "Security and auditability are critical—ClientControl got this right from the start.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Sofia Green", role: "Founder", comment: "No more SaaS Frankensteins. ClientControl is the clean slate our team needed.", rating: 4.9 },
    ],
  },
  team: {
    eyebrow: "Team",
    heading: "Meet the ClientControl Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Leo",
        lastName: "Miranda",
        positions: ["Lead Engineer", "Starter Architecture"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/elizabethmoore" },
          { name: "X", url: "https://x.com/elizabethmoore" },
        ],
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Plans for every business",
    subtitle: "Get started free, scale ClientControl as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Ideal for startups and internal teams.",
        buttonText: "Start ClientControl free",
        benefits: ["Up to 3 teammates", "CRM & project basics", "Export-ready", "Community support", "Deploy-ready"],
      },
      {
        title: "Growth",
        popular: true,
        price: 79,
        description: "Best for teams growing fast and shipping projects.",
        buttonText: "Start trial",
        benefits: ["Unlimited teammates", "Advanced filtering", "Manager/role controls", "Priority support", "Team workflows"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 299,
        description: "For organizations needing compliance and auditable workflows.",
        buttonText: "Contact sales",
        benefits: ["Security review support", "Data export controls", "Dedicated onboarding", "Phone and email support", "Enterprise advisory"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Talk to ClientControl’s team",
    description:
      "Have feedback or need help with CRM, projects or invoicing? Chirag and the ClientControl team are here to help.",
    mailtoAddress: "hi@chirag.co",
    info: {
      address: { label: "Find us", value: "Global • Remote-first" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "hi@chirag.co" },
      hours: { label: "Visit us", value: ["Monday - Friday", "8AM - 6PM"] },
    },
    formSubjects: ["Product Demo", "Onboarding", "Role Setup", "CSV Export", "Feature Request"],
    formSubmitLabel: "Contact ClientControl",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "ClientControl Questions",
    items: [
      { question: "Is ClientControl free to start with?", answer: "Yes. Our free plan supports startups and internal pilots." },
      { question: "Can I customize fields or workflows?", answer: "Not yet—custom fields and automations are upcoming!" },
      { question: "Does it support strict data boundaries?", answer: "Yes. Each team's data is completely isolated per design." },
      { question: "Is CSV export included?", answer: "Yes—export your client, project, or invoice logs with a click." },
      { question: "How do I contact support?", answer: "Email hi@chirag.co and our support team will get back within 24h." },
    ],
  },
  footer: {
    brandName: "ClientControl",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "hi@chirag.co", href: "mailto:hi@chirag.co" },
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://linkedin.com/in/chiragdodiya" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "CRM Features", href: "#features" },
          { label: "Plans", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://linkedin.com/in/chiragdodiya" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 ClientControl CRM.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },
  navbar: {
    brandName: "ClientControl",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "CRM Features",
    featureImage: { src: "/demo-img.jpg", alt: "ClientControl preview" },
    features: [
      { title: "CRM & Projects", description: "Production-ready CRM, projects, and invoicing for teams and organizations." },
      { title: "Modern UI", description: "Shadcn components, responsive, with instant feedback." },
      { title: "Easy Deploy", description: "Next.js 16 with Docker and Vercel—all ready to use." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View ClientControl on GitHub" },
  },
};
export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}