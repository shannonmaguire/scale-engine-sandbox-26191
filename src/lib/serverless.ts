type FetchInit = RequestInit | undefined;

// Cache the first working base path so subsequent calls avoid extra round-trips.
let cachedBasePath: string | null = null;

const normalizeBase = (base: string) => base.replace(/\/+$/, "");
const stripLeadingSlash = (path: string) => path.replace(/^\/+/, "");

const createCandidates = (): string[] => {
  const explicitBase = import.meta.env.VITE_FUNCTIONS_BASE?.trim();
  const defaults = ["/api"];

  const expanded = explicitBase
    ? [explicitBase, ...defaults.filter((candidate) => candidate !== explicitBase)]
    : defaults;

  return Array.from(new Set(expanded.map(normalizeBase)));
};

const cloneInit = (init: FetchInit): RequestInit => {
  if (!init) return {};

  const { headers, ...rest } = init;
  let clonedHeaders: HeadersInit | undefined;

  if (headers instanceof Headers) {
    clonedHeaders = new Headers(headers);
  } else if (Array.isArray(headers)) {
    clonedHeaders = headers.map(([key, value]) => [key, value]);
  } else if (headers) {
    clonedHeaders = { ...headers };
  }

  return {
    ...rest,
    headers: clonedHeaders,
  };
};

/**
 * Resolve and call a serverless function on Vercel-style runtimes.
 * Defaults to `/api` and respects an explicit `VITE_FUNCTIONS_BASE` override.
 */
export async function callServerlessFunction(
  endpoint: string,
  init?: RequestInit,
): Promise<Response> {
  const normalizedEndpoint = stripLeadingSlash(endpoint);
  const bases = cachedBasePath
    ? [cachedBasePath, ...createCandidates().filter((base) => base !== cachedBasePath)]
    : createCandidates();

  let lastError: unknown = new Error("No serverless function base path responded.");

  for (const base of bases) {
    const url = `${base}/${normalizedEndpoint}`;

    try {
      const response = await fetch(url, cloneInit(init));

      if (response.status === 404) {
        lastError = new Error(`Function "${normalizedEndpoint}" not found at ${url}`);
        continue;
      }

      cachedBasePath = base;
      return response;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

/**
 * Convenience helper for JSON requests that returns the parsed response body.
 */
export async function callJsonFunction<TBody extends object, TResult = unknown>(
  endpoint: string,
  body: TBody,
  init?: Omit<RequestInit, "body">,
): Promise<{ response: Response; data: TResult | Record<string, never> }> {
  const response = await callServerlessFunction(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
    body: JSON.stringify(body),
  });

  const data = (await response
    .json()
    .catch(() => ({}))) as TResult | Record<string, never>;

  return { response, data };
}
