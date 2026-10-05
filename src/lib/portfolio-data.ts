export const portfolioKnowledge = `
Sarwat Afreen is based in Karachi, Pakistan. She is a student and junior frontend and AI web developer with approximately two months of practical learning experience. She is open to full-time junior opportunities with one-week notice. Her stated expected salary is PKR 80,000 per month.

Frontend skills: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Chakra UI, responsive design, and Figma-to-React implementation.
Backend and web platform knowledge: Supabase, authentication, database and API concepts, domains, hosting, and SSL.
AI learning areas: generative AI, prompt engineering, AI automation, MCP, RAG, agent workflows, Pydantic, and vector database concepts.
Additional skills: Python, Excel, basic WordPress and Elementor, UI/UX, graphic design, and Web3 concepts. Shopify and WooCommerce are not practical-experience claims.

Featured project: AI-Powered Content Studio & Digital Products Hub. It is an evolving product concept for small businesses, creators, boutiques, and startups. Planned services include AI Content Creation, Brand Identity, Website Content, AI Chatbot Setup, Prompt Engineering, and Marketing Strategy. Planned digital products include AI Prompt Bundle ($19), Instagram Canva Kit ($29), and Business Branding Kit ($49). Authentication, cart, wishlist, orders, and admin features are planned rather than launched.

Services Sarwat can discuss: responsive frontend development, UI design to code, AI-assisted web experiences, prompt systems, and early-stage product concepts. The portfolio does not provide an email address, phone number, GitHub profile, client testimonials, employer history, or verified external social links. Visitors can use the portfolio profile link in the contact section.
`.trim();

export const projects: ReadonlyArray<{
  title: string;
  status: string;
  summary: string;
  technologies: readonly string[];
  category: string;
  type: string;
  featured: boolean;
  url?: string;
}> = [
  {
    title: "Zyentic — Quiet Luxury, Couture Maison",
    status: "Live project",
    summary: "A quiet-luxury couture maison website with an elegant, restrained visual direction.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    type: "Client-style project",
    featured: false,
    url: "https://zyentic-luxe-emporium-jsuk.vercel.app/",
  },
  {
    title: "Hello from PhysicalAI Course Book",
    status: "Live project",
    summary: "An interactive course book experience exploring physical AI concepts.",
    technologies: ["React", "TypeScript", "AI"],
    category: "AI experience",
    type: "Learning project",
    featured: false,
    url: "https://hackathon-course-book.vercel.app/",
  },
  {
    title: "Sarwat Afreen — Creative Developer Portfolio",
    status: "Live project",
    summary: "A creative developer portfolio presenting projects, skills, and a grounded AI assistant.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "AI"],
    category: "Frontend",
    type: "Portfolio feature",
    featured: false,
    url: "https://cinematic-canvas-02.vercel.app/",
  },
  {
    title: "Todo App — Manage Your Tasks",
    status: "Live project",
    summary: "A clean task manager for adding, organizing, and completing daily tasks.",
    technologies: ["React", "TypeScript"],
    category: "Frontend",
    type: "Learning project",
    featured: false,
    url: "https://todo-six-neon-69.vercel.app/",
  },
  {
    title: "AI Content Studio",
    status: "Concept in progress",
    summary: "A focused hub for AI-assisted services, brand assets, and practical digital products.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    category: "AI experience",
    type: "Product concept",
    featured: true,
  },
  {
    title: "Portfolio Intelligence",
    status: "Live feature",
    summary: "A grounded assistant that answers questions using a verified portfolio knowledge source.",
    technologies: ["React", "TypeScript", "AI"],
    category: "AI experience",
    type: "Portfolio feature",
    featured: false,
  },
  {
    title: "Responsive Interface Studies",
    status: "Learning collection",
    summary: "Small interface exercises exploring component structure, accessibility, and responsive behavior.",
    technologies: ["React", "Tailwind CSS", "Figma"],
    category: "Frontend",
    type: "Learning project",
    featured: false,
  },
] as const;

export const journalEntries = [
  { category: "Frontend", date: "Sep 2026", title: "Designing responsive systems, not isolated screens", summary: "Notes on content-driven breakpoints, stable layout constraints, and testing the awkward sizes between mobile and desktop.", tags: ["Responsive design", "CSS", "Accessibility"] },
  { category: "AI workflows", date: "Sep 2026", title: "Grounding an assistant in honest portfolio facts", summary: "How a curated knowledge source keeps answers useful without inventing experience, clients, or project outcomes.", tags: ["AI", "Prompt engineering", "RAG concepts"] },
  { category: "Lessons learned", date: "Aug 2026", title: "Turning a visual concept into reusable React", summary: "A practical reflection on component boundaries, semantic tokens, and preserving clarity while a page grows.", tags: ["React", "TypeScript", "UI systems"] },
  { category: "Frontend", date: "Aug 2026", title: "Accessible interactions from the first draft", summary: "Keyboard focus, semantic controls, readable contrast, and reduced motion are structural decisions—not final polish.", tags: ["Accessibility", "React", "UX"] },
] as const;