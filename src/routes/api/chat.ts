import { portfolioKnowledge } from "@/lib/portfolio-data";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { z } from "zod";

const ChatBody = z.object({ messages: z.array(z.unknown()).max(80) });

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return Response.json({ error: "The portfolio assistant is not configured yet." }, { status: 500 });
        }

        const parsed = ChatBody.safeParse(await request.json());
        if (!parsed.success) {
          return Response.json({ error: "The conversation could not be read." }, { status: 400 });
        }

        const { createPortfolioModel } = await import("@/lib/ai-gateway.server");
        const messages = parsed.data.messages as UIMessage[];
        const result = streamText({
          model: createPortfolioModel(key),
          system: `You are Sarwat Afreen's portfolio assistant. Answer warmly, clearly, and concisely using only the verified facts below. Never invent employers, clients, testimonials, metrics, contact details, social links, completed outcomes, or practical Shopify/WooCommerce experience. Clearly label planned work and concepts. If the answer is not in the knowledge, say the portfolio does not include that information and suggest using the portfolio profile link in the contact section.\n\nVERIFIED PORTFOLIO KNOWLEDGE\n${portfolioKnowledge}`,
          messages: await convertToModelMessages(messages),
          abortSignal: request.signal,
          providerOptions: {
            openai: {
              forceReasoning: true,
              reasoningEffort: "low",
              reasoningSummary: "auto",
              store: false,
              include: ["reasoning.encrypted_content"],
            },
          },
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages,
          sendReasoning: true,
          onError: (error) => error instanceof Error ? error.message : "The assistant could not answer right now.",
        });
      },
    },
  },
});