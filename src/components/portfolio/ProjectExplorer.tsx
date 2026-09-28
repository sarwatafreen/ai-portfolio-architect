"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Layers3, RotateCcw } from "lucide-react";
import aiStudioImage from "@/assets/ai-studio-showcase.jpg";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { projects } from "@/lib/portfolio-data";

const ALL = "All";

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
      <div className="grid gap-3 border-y border-border py-5 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto]">
        {[
          { label: "Technology", value: technology, set: setTechnology, options: technologies },
          { label: "Category", value: category, set: setCategory, options: categories },
          { label: "Project type", value: type, set: setType, options: types },
        ].map((filter) => (
          <div key={filter.label}>
            <label className="mb-2 block text-xs font-bold uppercase text-muted-foreground">{filter.label}</label>
            <Select value={filter.value} onValueChange={filter.set}>
              <SelectTrigger className="h-11 bg-card"><SelectValue /></SelectTrigger>
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
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <article key={project.title} className="group overflow-hidden border border-border bg-card transition-colors hover:border-cobalt/50">
              {project.featured ? <div className="aspect-[16/9] overflow-hidden border-b border-border"><img src={aiStudioImage} alt="AI Content Studio interface concept" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" width={1600} height={1000} /></div> : <div className="blueprint-grid grid aspect-[16/9] place-items-center border-b border-border"><span className="font-display text-5xl font-bold text-cobalt/70">{project.title.split(" ").map((word) => word[0]).join("")}</span></div>}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4"><span className="text-xs font-bold uppercase text-teal">{project.status}</span><ArrowUpRight className="size-4 text-muted-foreground" /></div>
                <h3 className="mt-4 font-display text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((tag) => <span key={tag} className="border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}