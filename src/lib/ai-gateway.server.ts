import { createOpenAI } from "@ai-sdk/openai";
import { createGatewayRunIdFetch, getGatewayRunId } from "./ai-gateway-run-id.server";

export function createPortfolioModel(apiKey: string, request: Request) {
  const gateway = createGatewayRunIdFetch(getGatewayRunId(request));
  const model = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: {
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "vercel-ai-sdk",
    },
    fetch: gateway.fetch,
  }).responses("openai/gpt-6-astra");

  return { model, gateway };
}