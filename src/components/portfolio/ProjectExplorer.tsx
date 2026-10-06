"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Layers3, RotateCcw } from "lucide-react";
import aiStudioImage from "@/assets/ai-studio-showcase.jpg";
import portfolioSiteImage from "@/assets/portfolio-site-card.jpg";
import comfortyImage from "@/assets/comforty-project-card.png.asset.json";
import zyenticImage from "@/assets/zyentic-project-card.png.asset.json";
import physicalaiImage from "@/assets/physicalai-project-card.jpeg.asset.json";
import sarwatPortfolioImage from "@/assets/sarwat-portfolio-project-card.jpeg.asset.json";
import todoImage from "@/assets/todo-project-card.jpeg.asset.json";
import intelligenceImage from "@/assets/portfolio-intelligence-project-card.jpeg.asset.json";
import responsiveStudiesImage from "@/assets/responsive-studies-project-card.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { projects } from "@/lib/portfolio-data";

const ALL = "All";

const projectVisuals: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "Zyentic — Quiet Luxury, Couture Maison": {
    src: zyenticImage.url,
    alt: "Uploaded Zyentic couture storefront visual with tailored clothing and a featured collection",
    width: 1536,
    height: 1024,
  },
  "Hello from PhysicalAI Course Book": {
    src: physicalaiImage.url,
    alt: "Uploaded PhysicalAI course book visual with desktop and mobile learning interfaces",
    width: 777,
    height: 524,
  },
  "Sarwat Afreen — Creative Developer Portfolio": {
    src: sarwatPortfolioImage.url,
    alt: "Uploaded Sarwat Afreen creative developer portfolio visual on desktop and mobile",
    width: 783,
    height: 487,
  },
  "Todo App — Manage Your Tasks": {
    src: todoImage.url,
    alt: "Uploaded Todo App visual with task lists on desktop and mobile",
    width: 750,
    height: 515,
  },
  "Portfolio Intelligence": {
    src: intelligenceImage.url,
    alt: "Uploaded Portfolio Intelligence visual showing the grounded portfolio assistant conversation",
    width: 761,
    height: 569,
  },
  "Responsive Interface Studies": {
    src: responsiveStudiesImage.url,
    alt: "Uploaded Responsive Interface Studies visual showing a task interface across laptop, tablet, and phone",
    width: 1535,
    height: 472,
  },
  "Portfolio Site — Graphic Designer & Front-end Developer": {
    src: portfolioSiteImage,
    alt: "Purple creative portfolio interface concept with graphic design, brand identity, and mobile UI work",
    width: 1600,
    height: 912,
  },
  "Comforty — Furniture Storefront": {
    src: comfortyImage.url,
    alt: "Comforty furniture storefront visual with a modern living room and sofa, chair, dining table, and bed products",
    width: 1152,
    height: 768,
  },
};

function unique(values: readonly string[]) {
  return [ALL, ...Array.from(new Set(values))];
}

export function ProjectExplorer() {
  const [technology, setTechnology] = useState(ALL);
  const [category, setCategory] = useState(ALL);
  const [type, setType] = useState(ALL);

  const technologies = unique(projects.flatMap((project) => [...project.technologies]));
  const categories = unique(projects.map((project) => project.category));
  const types = unique(projects.map((project) => project.type));
  const filtered = useMemo(() => projects.filter((project) =>
    (technology === ALL || project.technologies.includes(technology as never)) &&
    (category === ALL || project.category === category) &&
    (type === ALL || project.type === type)), [technology, category, type]);
  const hasFilters = technology !== ALL || category !== ALL || type !== ALL;

  const reset = () => {
    setTechnology(ALL);
    setCategory(ALL);
    setType(ALL);
  };

  return (
    <div className="mt-14">
      <div className="grid gap-4 border-y border-border py-7 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto]">
        {[
          { label: "Technology", value: technology, set: setTechnology, options: technologies },
          { label: "Category", value: category, set: setCategory, options: categories },
          { label: "Project type", value: type, set: setType, options: types },
        ].map((filter) => (
          <div key={filter.label}>
            <span id={`project-filter-${filter.label.replaceAll(" ", "-").toLowerCase()}`} className="mb-2 block text-xs font-bold uppercase text-muted-foreground">{filter.label}</span>
            <Select value={filter.value} onValueChange={filter.set}>
              <SelectTrigger aria-labelledby={`project-filter-${filter.label.replaceAll(" ", "-").toLowerCase()}`} className="h-11 w-full bg-card"><SelectValue /></SelectTrigger>
              <SelectContent>{filter.options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
            </Select>
          </div>
        ))}
        <Button variant="ghost" className="self-end" disabled={!hasFilters} onClick={reset}><RotateCcw />Clear</Button>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">Showing {filtered.length} of {projects.length} projects</p>
      {filtered.length === 0 ? (
        <div className="mt-5 border border-dashed border-border bg-card px-6 py-16 text-center">
          <Layers3 className="mx-auto size-8 text-cobalt" />
          <h3 className="mt-4 font-display text-2xl font-bold">No matching projects</h3>
          <p className="mt-2 text-sm text-muted-foreground">Try another combination or clear the filters.</p>
          <Button className="mt-6" onClick={reset}>Clear filters</Button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => {
            const visual = projectVisuals[project.title];
            return (
            <article key={project.title} className="group premium-card overflow-hidden border border-border bg-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-cobalt/60">
               {visual ? <div className="aspect-[16/9] overflow-hidden border-b border-border bg-secondary"><img src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" /></div> : project.featured ? <div className="aspect-[16/9] overflow-hidden border-b border-border"><img src={aiStudioImage} alt="AI Content Studio interface concept" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" width={1600} height={1000} /></div> : <div className="blueprint-grid relative grid aspect-[16/9] place-items-center overflow-hidden border-b border-border"><span className="absolute left-5 top-5 text-[0.65rem] font-bold uppercase text-muted-foreground">Selected work</span><span className="font-display text-5xl font-extrabold text-cobalt/75">{project.title.split(" ").map((word) => word[0]).join("")}</span><span className="absolute bottom-0 left-0 h-1 w-16 bg-coral transition-[width] duration-300 group-hover:w-full" /></div>}
              <div className="p-7">
                <div className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-teal" /><span className="text-xs font-bold uppercase text-teal">{project.status}</span></div>
                <h3 className="mt-5 font-display text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">{project.technologies.map((tag) => <span key={tag} className="border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{tag}</span>)}</div>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-cobalt underline decoration-coral/60 decoration-2 underline-offset-4 transition-colors hover:text-teal">
                    View Project<ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
            );
          })}
        </div>
      )}
    </div>
  );
}