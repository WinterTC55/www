import handler from "vinext/server/app-router-entry";

interface Env {
  REDIRECT_DOMAINS?: string;
  PRIMARY_DOMAIN?: string;
}

// The site is fully server-rendered with no client-side interactivity.
// Strip all client-side JavaScript injected by the framework (hydration
// bootstrap, RSC data chunks, modulepreload links) from HTML responses
// to avoid shipping unnecessary JS to the browser.
function stripClientScripts(response: Response): Response {
  return new HTMLRewriter()
    .on("script", {
      element(el) {
        el.remove();
      },
    })
    .on('link[rel="modulepreload"]', {
      element(el) {
        el.remove();
      },
    })
    .transform(response);
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const url = new URL(request.url);

    // Redirect legacy/alternate domains to the primary domain.
    // Configured via environment variables in wrangler.jsonc or .dev.vars.
    const redirectDomains = (env?.REDIRECT_DOMAINS || "")
      .split(",")
      .map((d) => d.trim())
      .filter(Boolean);
    const primaryDomain = env?.PRIMARY_DOMAIN || "wintertc.org";

    if (redirectDomains.includes(url.hostname)) {
      url.hostname = primaryDomain;
      return Response.redirect(url, 301);
    }

    const response = await handler.fetch(request, env, ctx);

    // Only process HTML responses — static assets pass through untouched.
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      return stripClientScripts(response);
    }

    return response;
  },
};
