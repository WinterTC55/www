import handler from "vinext/server/app-router-entry";

interface Env {
  REDIRECT_DOMAINS?: string;
  PRIMARY_DOMAIN?: string;
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

    return handler.fetch(request, env, ctx);
  },
};
