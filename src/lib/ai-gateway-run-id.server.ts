const RUN_ID_HEADER = "X-Lovable-AIG-Run-ID";

export function createGatewayRunIdFetch(initialRunId?: string) {
  let runId = initialRunId?.trim() || undefined;
  let resolveRunId: (value: string | undefined) => void = () => undefined;
  let settled = false;
  const ready = new Promise<string | undefined>((resolve) => {
    resolveRunId = resolve;
  });

  const settle = (value?: string) => {
    runId ||= value?.trim() || undefined;
    if (!settled) {
      settled = true;
      resolveRunId(runId);
    }
  };

  if (runId) settle(runId);

  return {
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      const headers = new Headers(init?.headers);
      if (runId && !headers.has(RUN_ID_HEADER)) headers.set(RUN_ID_HEADER, runId);
      try {
        const response = await fetch(input, { ...init, headers });
        settle(response.headers.get(RUN_ID_HEADER) ?? undefined);
        return response;
      } catch (error) {
        settle();
        throw error;
      }
    },
    getRunId: () => runId,
    waitForRunId: () => (runId ? Promise.resolve(runId) : ready),
  };
}

export function getGatewayRunId(request: Request) {
  return request.headers.get(RUN_ID_HEADER)?.trim() || undefined;
}

export async function withGatewayRunId(response: Response, gateway: ReturnType<typeof createGatewayRunIdFetch>) {
  const runId = await gateway.waitForRunId();
  const headers = new Headers(response.headers);
  if (runId) {
    headers.set(RUN_ID_HEADER, runId);
    headers.set("Access-Control-Expose-Headers", RUN_ID_HEADER);
  }
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}