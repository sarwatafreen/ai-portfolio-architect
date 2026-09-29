"use client";

import { useMemo, useState } from "react";
import { BookOpen, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { journalEntries } from "@/lib/portfolio-data";

const categories = ["All", "Frontend", "AI workflows", "Lessons learned"] as const;

export function LearningJournal() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return journalEntries.filter((entry) =>
      (category === "All" || entry.category === category) &&
      (!needle || [entry.title, entry.summary, entry.category, ...entry.tags].join(" ").toLowerCase().includes(needle)));
  }, [category, query]);

  const clear = () => { setQuery(""); setCategory("All"); };

  return (
    <div className="mt-14">
      <div className="flex flex-col gap-4 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-xl flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 bg-card pl-10 pr-10" placeholder="Search notes, topics, or skills" aria-label="Search learning journal" />{query && <Button variant="ghost" size="icon-sm" className="absolute right-1.5 top-1.5" onClick={() => setQuery("")} aria-label="Clear search"><X /></Button>}</div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Journal categories">{categories.map((item) => <Button key={item} size="sm" variant={category === item ? "default" : "outline"} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}</div>
      </div>
      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">{results.length} {results.length === 1 ? "note" : "notes"}</p>
      {results.length ? <div className="mt-5 grid gap-5 md:grid-cols-2">{results.map((entry, index) => <article key={entry.title} className="border border-border bg-card p-6 sm:p-8"><div className="flex items-center justify-between gap-4 text-xs font-bold uppercase"><span className="text-teal">{entry.category}</span><span className="text-muted-foreground">{entry.date}</span></div><div className="mt-8 flex items-start gap-4"><BookOpen className="mt-1 size-5 shrink-0 text-coral" /><div><p className="text-xs text-muted-foreground">Note {String(index + 1).padStart(2, "0")}</p><h3 className="mt-2 font-display text-2xl font-bold">{entry.title}</h3></div></div><p className="mt-5 text-sm leading-7 text-muted-foreground">{entry.summary}</p><div className="mt-6 flex flex-wrap gap-2">{entry.tags.map((tag) => <span key={tag} className="border border-border px-2.5 py-1 text-xs text-muted-foreground">{tag}</span>)}</div></article>)}</div> : <div className="mt-5 border border-dashed border-border bg-card px-6 py-14 text-center"><BookOpen className="mx-auto size-8 text-coral" /><h3 className="mt-4 font-display text-2xl font-bold">No notes found</h3><p className="mt-2 text-sm text-muted-foreground">Try a broader search or another topic.</p><Button className="mt-6" onClick={clear}>Clear search</Button></div>}
    </div>
  );
}