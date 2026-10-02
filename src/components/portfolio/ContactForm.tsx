"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Your message could not be sent.");
      form.reset();
      setStatus("sent");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Your message could not be sent.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <div className="border border-primary-foreground/20 bg-primary-foreground/10 p-7" role="status"><CheckCircle2 className="size-7" /><h3 className="mt-5 font-display text-2xl font-bold">Message received.</h3><p className="mt-2 text-sm leading-6 opacity-80">Thank you for reaching out. Your inquiry has been saved securely.</p><Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>Send another</Button></div>;
  }

  return (
    <form onSubmit={submit} className="grid gap-4" aria-label="Contact Sarwat">
      <div className="grid gap-2"><label htmlFor="contact-name" className="text-xs font-bold uppercase">Name</label><Input id="contact-name" name="name" required maxLength={100} autoComplete="name" className="h-12 border-primary-foreground/25 bg-primary-foreground/10 placeholder:text-primary-foreground/60" placeholder="Your name" /></div>
      <div className="grid gap-2"><label htmlFor="contact-email" className="text-xs font-bold uppercase">Email</label><Input id="contact-email" name="email" type="email" required maxLength={255} autoComplete="email" className="h-12 border-primary-foreground/25 bg-primary-foreground/10 placeholder:text-primary-foreground/60" placeholder="you@example.com" /></div>
      <div className="hidden" aria-hidden="true"><label htmlFor="contact-website">Website</label><Input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="grid gap-2"><label htmlFor="contact-message" className="text-xs font-bold uppercase">Message</label><Textarea id="contact-message" name="message" required minLength={10} maxLength={2000} className="min-h-32 resize-y border-primary-foreground/25 bg-primary-foreground/10 placeholder:text-primary-foreground/60" placeholder="Tell me about the role or project..." /></div>
      {error && <p className="text-sm font-medium" role="alert">{error}</p>}
      <Button type="submit" variant="secondary" size="lg" className="mt-1 justify-self-start" disabled={status === "sending"}>{status === "sending" ? "Sending…" : <>Send inquiry <ArrowUpRight /></>}</Button>
    </form>
  );
}