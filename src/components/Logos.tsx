interface PartnerLogo {
  src: string | null;
  href: string;
  name: string;
  restrict?: "horizontal" | "vertical";
  licenseExpiration?: Date;
}

// NOTE to all: keep this list sorted alphabetically by name.
const PARTNER_LOGOS: PartnerLogo[] = [
  {
    src: "/static/logos/alibaba.png",
    href: "https://alibabagroup.com/",
    name: "Alibaba",
    restrict: "horizontal",
  },
  {
    src: null,
    href: "https://techatbloomberg.com/",
    name: "Bloomberg",
  },
  {
    src: "/static/logos/bytedance.png",
    href: "https://bytedance.com/",
    name: "ByteDance",
    restrict: "horizontal",
    licenseExpiration: new Date(2026, 6, 28), // We are only licensed to use the image until 2026-06-29.
  },
  {
    src: "/static/logos/cloudflare.svg",
    href: "https://cloudflare.com/",
    name: "Cloudflare",
  },
  {
    src: "/static/logos/deno.svg",
    href: "https://deno.com/",
    name: "Deno",
  },
  {
    src: "/static/logos/fastly.svg",
    href: "https://www.fastly.com/",
    name: "Fastly",
    restrict: "vertical",
  },
  {
    src: "/static/logos/igalia.png",
    href: "https://igalia.com/",
    name: "Igalia",
    restrict: "horizontal",
  },
  {
    src: "/static/logos/netlify.svg",
    href: "https://netlify.com/",
    name: "Netlify",
    restrict: "horizontal",
  },
  {
    src: "/static/logos/nodejs.svg",
    href: "https://nodejs.org",
    name: "Node.js",
    restrict: "horizontal",
  },
  {
    src: "/static/logos/shopify.svg",
    href: "https://shopify.dev/",
    name: "Shopify",
    restrict: "horizontal",
  },
  {
    src: "/static/logos/suborbital.svg",
    href: "https://suborbital.dev/",
    name: "Suborbital",
    restrict: "horizontal",
  },
  {
    src: "/static/logos/vercel.svg",
    href: "https://vercel.com/",
    name: "Vercel",
    restrict: "horizontal",
  },
  {
    src: "/static/logos/azion.svg",
    href: "https://azion.com/",
    name: "Azion",
    restrict: "horizontal",
  },
  /** TODO: Add additional logos here */
];

function getActiveLogos() {
  const now = new Date();
  return PARTNER_LOGOS.filter(({ licenseExpiration }) =>
    !licenseExpiration || licenseExpiration > now
  );
}

export function Logos() {
  const logos = getActiveLogos();

  return (
    <div>
      <p className="mt-16 text-center">
        The work of WinterTC (and its predecessor WinterCG) has included
        participation from:
      </p>
      <div className="mt-8 flex gap-4 flex-wrap justify-evenly sm:justify-evenly items-center">
        {logos.map(({ src, href, name, restrict }) => (
          <a key={name} href={href}>
            {src === null ? (
              name
            ) : (
              <img
                src={src}
                title={`${name} logo`}
                alt={`${name} logo`}
                className={
                  restrict === "vertical"
                    ? "h-8 sm:h-11"
                    : restrict === "horizontal"
                      ? "w-28 sm:w-36"
                      : "h-12 sm:h-16"
                }
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
