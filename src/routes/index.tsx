import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Figma,
  Layers3,
  Menu,
  Palette,
  Rocket,
  ShoppingBag,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import aiStudioImage from "@/assets/ai-studio-showcase.jpg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarwat Afreen — Frontend & AI Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sarwat Afreen, a Karachi-based junior frontend and AI web developer building thoughtful digital experiences.",
      },
      { property: "og:title", content: "Sarwat Afreen — Frontend & AI Web Developer" },
      {
        property: "og:description",
        content: "Modern frontend craft, AI-powered ideas, and thoughtful digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Work", "#work"],
  ["Journey", "#journey"],
] as const;

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    icon: Code2,
    items: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend & data",
    icon: Database,
    items: ["Supabase", "Authentication", "Database concepts", "API integration"],
  },
  {
    number: "03",
    title: "AI systems",
    icon: BrainCircuit,
    items: ["Generative AI", "Prompt engineering", "AI automation", "MCP", "RAG concepts", "Agent workflows"],
  },
  {
    number: "04",
    title: "Design & tools",
    icon: Figma,
    items: ["UI / UX", "Figma", "Graphic design", "Git & GitHub", "Vercel", "Responsive design"],
  },
];

const services = [
  { icon: Layers3, title: "Frontend development", text: "Responsive interfaces built with React, Next.js, TypeScript, and clean reusable patterns." },
  { icon: WandSparkles, title: "AI web experiences", text: "Exploring useful AI integrations, prompt systems, automation, and agent-based workflows." },
  { icon: Palette, title: "UI design to code", text: "Translating visual ideas and Figma designs into polished, accessible web experiences." },
];

const products = [
  ["AI Prompt Bundle", "$19"],
  ["Instagram Canva Kit", "$29"],
  ["Business Branding Kit", "$49"],
];

function Mark() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Sarwat Afreen, back to top">
      <span className="grid size-9 place-items-center rounded-sm bg-primary text-sm font-black text-primary-foreground transition-transform group-hover:-rotate-6">SA</span>
      <span className="font-display text-sm font-bold tracking-wide text-foreground">SARWAT AFREEN</span>
    </a>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Mark />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{label}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="lg"><a href="#contact">Let&apos;s talk <ArrowUpRight /></a></Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Open navigation"><Menu /></Button>
          </SheetTrigger>
          <SheetContent className="border-border bg-background">
            <SheetHeader>
              <SheetTitle className="font-display">Sarwat Afreen</SheetTitle>
              <SheetDescription>Frontend & AI web developer</SheetDescription>
            </SheetHeader>
            <nav className="mt-12 flex flex-col gap-6" aria-label="Mobile navigation">
              {navItems.map(([label, href]) => (
                <SheetClose asChild key={href}><a href={href} className="font-display text-3xl font-bold text-foreground">{label}</a></SheetClose>
              ))}
              <SheetClose asChild><Button asChild size="lg" className="mt-4"><a href="#contact">Let&apos;s talk <ArrowUpRight /></a></Button></SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function SectionHeading({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-[1fr_2fr] md:gap-10">
      <div className="flex items-start gap-4 text-xs font-bold uppercase text-primary"><span>{index}</span><span>{eyebrow}</span></div>
      <div><h2 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h2>{intro && <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{intro}</p>}</div>
    </div>
  );
}

function Portfolio() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <section className="hero-grid relative flex min-h-[94svh] items-end pt-28">
          <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-64 w-64 rounded-full border border-primary/20 lg:block" aria-hidden="true">
            <div className="absolute inset-8 rounded-full border border-primary/25" /><div className="absolute inset-16 rounded-full border border-primary/30" />
            <Sparkles className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 text-primary" />
          </div>
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-18">
            <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase text-muted-foreground"><span className="inline-block size-2 animate-pulse rounded-full bg-primary" /><span>Open to junior opportunities</span><span className="hidden text-border sm:inline">—</span><span className="hidden sm:inline">Karachi, Pakistan</span></div>
            <h1 className="max-w-5xl font-display text-[clamp(3.7rem,9vw,8.4rem)] font-black uppercase leading-[0.84] text-foreground">
              Building the web <span className="text-outline">with intelligence.</span>
            </h1>
            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
              <div className="hidden md:block"><ArrowDownRight className="size-10 text-primary" /></div>
              <div>
                <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">I&apos;m Sarwat — a junior frontend and AI web developer turning thoughtful ideas into clear, responsive digital experiences.</p>
                <div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#work">Explore my work <ArrowDownRight /></a></Button><Button asChild size="lg" variant="outline"><a href="#about">Meet Sarwat</a></Button></div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-border bg-primary py-3 text-primary-foreground">
          <div className="marquee-track flex min-w-max items-center gap-9 text-xs font-black uppercase">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "AI automation", "UI / UX", "Prompt engineering", "React", "Next.js", "TypeScript", "Tailwind CSS", "AI automation", "UI / UX", "Prompt engineering"].map((item, i) => <span key={`${item}-${i}`} className="flex items-center gap-9"><span>{item}</span><span>✦</span></span>)}
          </div>
        </div>

        <section id="about" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading index="01" eyebrow="About" title="Curious by nature. Intentional by design." />
            <div className="mt-14 grid gap-8 md:grid-cols-[1fr_2fr]">
              <div className="relative min-h-72 overflow-hidden rounded-md border border-border bg-secondary">
                <div className="absolute inset-0 dot-field" /><div className="absolute bottom-7 left-7 right-7"><span className="font-display text-7xl font-black text-primary">SA.</span><p className="mt-3 text-sm text-muted-foreground">Learner · Builder · Designer</p></div>
              </div>
              <div className="grid content-between gap-12">
                <p className="font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">I&apos;m a student and emerging developer focused on the space where modern frontend craft, visual thinking, and practical AI meet.</p>
                <div className="grid gap-7 text-sm leading-7 text-muted-foreground sm:grid-cols-2"><p>I build with React, Next.js, TypeScript, and Tailwind CSS while deepening my understanding of APIs, authentication, and data-driven products.</p><p>My current learning explores generative AI, prompt engineering, MCP, RAG, and agent workflows — always with a focus on useful, human-centered experiences.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading index="02" eyebrow="Capabilities" title="A growing toolkit for ambitious ideas." intro="A practical mix of frontend development, emerging AI systems, and visual design — grounded in continuous learning." />
            <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map(({ number, title, icon: Icon, items }) => <article key={title} className="group border-b border-r border-border p-6 transition-colors hover:bg-accent"><div className="flex items-center justify-between"><span className="text-xs font-bold text-primary">{number}</span><Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" /></div><h3 className="mt-10 font-display text-2xl font-bold">{title}</h3><ul className="mt-7 space-y-3">{items.map(item => <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="h-px w-3 bg-primary" />{item}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading index="03" eyebrow="Featured work" title="AI content studio, designed as a real business." intro="A portfolio case study and evolving product concept for small businesses, creators, boutiques, and startups." />
            <div className="mt-14 overflow-hidden rounded-md border border-border bg-card">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border sm:aspect-[16/8]"><img src={aiStudioImage} alt="Dark AI content studio dashboard concept with lime accents" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]" width={1600} height={1000} /><span className="absolute left-4 top-4 rounded-sm bg-primary px-3 py-1.5 text-xs font-black uppercase text-primary-foreground">Concept in progress</span></div>
              <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.4fr_1fr] lg:p-12">
                <div><div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary"><Bot className="size-4" /> AI-powered content studio</div><h3 className="font-display text-3xl font-bold sm:text-5xl">One creative hub for content, brand assets, and digital products.</h3><p className="mt-6 max-w-2xl leading-7 text-muted-foreground">The product brings AI-assisted services and ready-made resources into one focused experience, designed to help smaller teams create and launch with more clarity.</p><div className="mt-8 flex flex-wrap gap-2">{["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Authentication", "E-commerce UX"].map(tag => <span key={tag} className="rounded-sm border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">{tag}</span>)}</div></div>
                <div className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-3 lg:grid-cols-1">{products.map(([name, price]) => <div key={name} className="flex items-center justify-between bg-secondary px-5 py-4"><span className="text-sm font-medium">{name}</span><span className="font-display text-lg font-bold text-primary">{price}</span></div>)}</div>
              </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="rounded-md border border-border bg-card p-7 lg:col-span-2"><div className="flex items-center gap-3 text-primary"><ShoppingBag className="size-5" /><span className="text-xs font-bold uppercase">Product vision</span></div><h3 className="mt-6 font-display text-2xl font-bold">From service discovery to digital checkout</h3><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Service and product catalog", "Individual product pages", "Cart and wishlist flows", "Accounts and order history", "Contact and inquiry forms", "AI-assisted service workflows"].map(item => <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><Check className="size-4 text-primary" />{item}</div>)}</div></div>
              <div className="rounded-md border border-primary/40 bg-primary p-7 text-primary-foreground"><Rocket className="size-7" /><p className="mt-12 text-xs font-black uppercase">North star</p><p className="mt-3 font-display text-2xl font-bold">Make powerful creative tools feel simple, focused, and attainable.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading index="04" eyebrow="What I build" title="Digital craft with a useful point of view." />
            <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">{services.map(({ icon: Icon, title, text }, i) => <article key={title} className="group bg-surface p-7 sm:p-9"><div className="flex items-center justify-between"><Icon className="size-7 text-primary" /><span className="text-xs text-muted-foreground">0{i + 1}</span></div><h3 className="mt-14 font-display text-2xl font-bold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading index="05" eyebrow="Learning journey" title="Building depth, one system at a time." intro="Not a fabricated employment timeline — a transparent view of the disciplines I’m actively developing." />
            <div className="mt-14 ml-3 border-l border-border">
              {[{ label: "Foundation", title: "Web & interface craft", text: "HTML, CSS, JavaScript, responsive layouts, UI/UX, and graphic design fundamentals." }, { label: "Now", title: "Modern product development", text: "React, Next.js, TypeScript, Tailwind CSS, APIs, authentication, and database integration." }, { label: "Exploring", title: "AI engineering workflows", text: "Prompt systems, RAG concepts, MCP, structured outputs, Pydantic, vectors, and agent workflows." }, { label: "Next", title: "Client-focused AI web services", text: "Turning technical and design skills into useful products for real businesses and creators." }].map((item, i) => <article key={item.label} className="relative grid gap-3 border-b border-border py-8 pl-8 md:grid-cols-[.7fr_1fr_1.5fr] md:items-center"><span className="absolute -left-2 top-10 size-4 rounded-full border-4 border-background bg-primary" /><span className="text-xs font-bold uppercase text-primary">{String(i + 1).padStart(2, "0")} / {item.label}</span><h3 className="font-display text-xl font-bold">{item.title}</h3><p className="text-sm leading-6 text-muted-foreground">{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-primary py-24 text-primary-foreground sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr] lg:items-end"><div><p className="mb-6 text-xs font-black uppercase">Available for junior opportunities</p><h2 className="font-display text-5xl font-black uppercase leading-[.9] sm:text-7xl lg:text-8xl">Let&apos;s build something meaningful.</h2></div><div><p className="max-w-sm text-base leading-7 opacity-80">Based in Karachi and available for full-time junior roles, collaborations, and thoughtful web projects.</p><Button asChild variant="secondary" size="lg" className="mt-7"><a href="https://share.google/EhcQoDZuYhE8hUHw1" target="_blank" rel="noreferrer">View portfolio profile <ArrowUpRight /></a></Button></div></div>
          </div>
        </section>
      </main>
      <footer className="bg-footer py-10 text-footer-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between"><Mark /><p className="text-xs text-muted-foreground">Junior frontend & AI web developer · Karachi, Pakistan</p><a href="#top" className="inline-flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground transition-colors hover:text-primary">Back to top <ArrowUpRight className="size-4" /></a></div></footer>
    </div>
  );
}
