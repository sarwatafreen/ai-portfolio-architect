import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  message: z.string().trim().min(10, "Please share a little more detail.").max(2000),
  website: z.string().max(0).optional(),
});

const attempts = new Map<string, number[]>();

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for") ?? "unknown";
        const now = Date.now();
        const recent = (attempts.get(ip) ?? []).filter((time) => now - time < 60_000);
        if (recent.length >= 3) {
          return Response.json({ error: "Please wait a moment before sending another message." }, { status: 429 });
        }
        attempts.set(ip, [...recent, now]);

        const parsed = contactSchema.safeParse(await request.json().catch(() => null));
        if (!parsed.success) {
          return Response.json({ error: parsed.error.issues[0]?.message ?? "Please check your details." }, { status: 400 });
        }
        if (parsed.data.website) return Response.json({ ok: true });

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("contact_submissions").insert({
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
        });

        if (error) return Response.json({ error: "Your message could not be sent. Please try again." }, { status: 500 });
        return Response.json({ ok: true });
      },
    },
  },
});