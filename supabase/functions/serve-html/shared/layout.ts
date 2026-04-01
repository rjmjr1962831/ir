import { CSS } from "./styles.ts";
import { FreshnessData, formatDate, getCurrentFreshness } from "./freshness.ts";

const SITE = "https://www.instantrecall.com";

interface LayoutOptions {
  title: string;
  description: string;
  path: string;
  jsonLd?: string;
  body: string;
  freshness?: FreshnessData;
}

const BREADCRUMB_NAMES: Record<string, string> = {
  "/": "Home",
  "/solution": "Services",
  "/contact-instant-recall": "Contact",
  "/contact": "Contact",
  "/portal": "Login",
  "/schedule": "Book an Appointment",
  "/privacy-policy": "Privacy Policy",
  "/terms-and-conditions": "Terms of Service",
  "/about-us": "About Us",
  "/research": "Research",
  "/research/industry-survey": "Industry Survey",
  "/research/regulatory-environment": "Regulatory Environment",
  "/research/legal-case-data": "Legal Case Data",
  "/methodology": "Research Methodology",
  "/who-trusts-us": "Who Trusts Us",
  "/research/usfoods-recall-process": "US Foods Recall Process Overview",
  "/research/sysco-recall-packet": "Sysco Customer Recall Orientation Packet",
};

function buildBreadcrumbLd(path: string): string {
  const items: { name: string; url: string }[] = [
    { name: "Home", url: SITE },
  ];
  if (path !== "/") {
    // For research sub-pages, insert the Research parent level
    if (path.startsWith("/research/")) {
      items.push({ name: "Research", url: `${SITE}/research` });
    }
    const name = BREADCRUMB_NAMES[path] || path.slice(1);
    items.push({ name, url: `${SITE}${path}` });
  }
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

function header(): string {
  return `<header class="site-header">
  <a href="/" class="logo"><img src="/images/InstantRecall_Horizontal-01.webp" alt="Instant Recall\u2122" height="50"></a>
  <nav>
    <a href="/">Home</a>
    <a href="/solution">Solution</a>
    <a href="/portal">Login</a>
    <a href="/contact-instant-recall" class="nav-btn">Contact Us</a>
  </nav>
</header>`;
}

function footer(freshness?: FreshnessData | null): string {
  const updatedLine = freshness
    ? `<p style="margin-top:.5rem;font-size:.8rem;color:rgba(255,255,255,.5)">Last updated: ${formatDate(freshness.lastContentUpdate)}</p>`
    : "";
  return `
<footer class="site-footer">
  <a href="#" style="display:block;text-align:center;color:rgba(255,255,255,.5);font-size:.8rem;padding:1rem 0;text-decoration:none">Back to Top</a>
  <div class="footer-inner">
    <div class="footer-left">
      <img src="/images/footerlogo.webp" alt="Instant Recall" style="max-width:150px;height:auto">
      <a href="https://belltowertech.com" target="_blank" rel="noopener" style="display:inline-block;margin-top:.75rem"><img src="/images/aserviceofbelltower.webp" alt="A service of BellTower Technologies" height="40"></a>
      <p style="font-size:.6em;color:rgba(255,255,255,.4);margin-top:.75rem">&copy; Instant Recall LLC<br>All Rights Reserved</p>
    </div>
    <div class="footer-center" style="grid-column:2/4;text-align:center">
      <div style="margin-bottom:1.5rem">
        <a href="/" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">HOME</a>
        <a href="/solution" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">SOLUTION</a>
        <a href="/portal" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">LOGIN</a>
        <a href="/contact-instant-recall" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">CONTACT US</a>
      </div>

      <p style="font-size:.8rem;color:rgba(255,255,255,.4)"><a href="/terms-and-conditions" style="color:rgba(255,255,255,.4)">Terms and Conditions</a> | <a href="/privacy-policy" style="color:rgba(255,255,255,.4)">Privacy Policy</a></p>
    </div>
    <div class="footer-right" style="text-align:center">
      <a href="https://www.linkedin.com/showcase/instantrecall/" target="_blank" rel="noopener" aria-label="LinkedIn" style="display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;border:2px solid rgba(255,255,255,.5);color:rgba(255,255,255,.5);transition:all .2s">
        <svg viewBox="0 0 64 64" width="28" height="28" style="fill:currentColor"><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44h5.4v-9.5C46,29.8,45,26.2,39.5,26.2z"></path></svg>
      </a>
    </div>
    <div class="footer-bottom" style="grid-column:1/-1">
      <div class="footer-extra-links" style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;margin-top:.5rem">
        <a href="/research" style="color:rgba(255,255,255,.35);font-size:.75rem">Research</a>
        <a href="/about-us" style="color:rgba(255,255,255,.35);font-size:.75rem">About Us</a>
        <a href="/for-ai" style="color:rgba(255,255,255,.35);font-size:.75rem">For AI</a>
        <a href="/llms.txt" style="color:rgba(255,255,255,.35);font-size:.75rem">llms.txt</a>
        <a href="/sitemap.xml" style="color:rgba(255,255,255,.35);font-size:.75rem">Sitemap</a>
      </div>
      ${updatedLine}
    </div>
  </div>
</footer>`;
}

/**
 * Inject dateModified into a pre-stringified JSON-LD payload.
 * Handles both single objects and arrays of objects.
 * Leaves the original untouched if parsing fails.
 */
function injectDateModified(jsonLdStr: string, dateModified: string): string {
  try {
    const parsed = JSON.parse(jsonLdStr);
    if (Array.isArray(parsed)) {
      for (const item of parsed) {
        if (item && typeof item === "object" && !item.dateModified) {
          item.dateModified = dateModified;
        }
      }
    } else if (parsed && typeof parsed === "object" && !parsed.dateModified) {
      parsed.dateModified = dateModified;
    }
    return JSON.stringify(parsed);
  } catch {
    return jsonLdStr;
  }
}

export function renderPage(opts: LayoutOptions): string {
  const canonical = `${SITE}${opts.path === "/" ? "" : opts.path}`;
  const f = opts.freshness || getCurrentFreshness();

  // Freshness meta tag for AI crawlers
  const lastModMeta = f
    ? `<meta name="last-modified" content="${f.lastContentUpdate}">`
    : "";

  // Inject dateModified into the page-level JSON-LD block
  const enrichedJsonLd = opts.jsonLd && f
    ? injectDateModified(opts.jsonLd, f.lastContentUpdate)
    : opts.jsonLd;

  // Inject dateModified into a WebPage JSON-LD block
  const webPageLd = f
    ? `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: canonical,
        name: opts.title,
        dateModified: f.lastContentUpdate,
        description: opts.description,
      })}</script>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${opts.title}</title>
  <meta name="description" content="${opts.description}">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  ${lastModMeta}
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${opts.title}">
  <meta property="og:description" content="${opts.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Instant Recall">
  <meta property="og:image" content="${SITE}/images/iStock-854374912.jpg">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1500">
  <meta property="og:image:height" content="1000">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${opts.title}">
  <meta name="twitter:description" content="${opts.description}">
  <meta name="twitter:image" content="${SITE}/images/iStock-854374912.jpg">
  <style>${CSS}</style>
  ${enrichedJsonLd ? `<script type="application/ld+json">${enrichedJsonLd}</script>` : ""}
  <script type="application/ld+json">${buildBreadcrumbLd(opts.path)}</script>
  ${webPageLd}
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/48681528.js"></script>
</head>
<body>
${header()}
${opts.body}
${footer(f)}
</body>
</html>`;
}
