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
  <a href="/" class="logo"><img src="/images/InstantRecall_Horizontal-01.webp" alt="Instant Recall" height="50"></a>
  <nav>
    <a href="/">Home</a>
    <a href="/solution">Solution</a>
    <a href="/research">Research</a>
    <a href="/portal">Login</a>
    <a href="/contact-instant-recall">Contact Us</a>
  </nav>
</header>`;
}

function footer(freshness?: FreshnessData | null): string {
  const year = new Date().getFullYear();
  const updatedLine = freshness
    ? `<p style="margin-top:.5rem;font-size:.8rem;color:rgba(255,255,255,.5)">Last updated: ${formatDate(freshness.lastContentUpdate)}</p>`
    : "";
  return `<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-left">
      <img src="/images/footerlogo.webp" alt="Instant Recall" height="80">
    </div>
    <div class="footer-links">
      <a href="/">Home</a>
      <a href="/solution">Solution</a>
      <a href="/contact-instant-recall">Sign Up</a>
      <a href="/contact-instant-recall">Contact Us</a>
      <a href="/portal">Login</a>
      <a href="/schedule">Book an Appointment</a>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${year} Instant Recall LLC. All Rights Reserved.</p>
      <div class="footer-nav">
        <a href="/">HOME</a>
        <a href="/solution">SOLUTION</a>
        <a href="/portal">LOGIN</a>
        <a href="/contact-instant-recall">CONTACT US</a>
      </div>
      <p style="margin-top:.75rem"><a href="/terms-and-conditions">Terms and Conditions</a> | <a href="/privacy-policy">Privacy Policy</a></p>
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
  ${lastModMeta}
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${opts.title}">
  <meta property="og:description" content="${opts.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Instant Recall">
  <meta property="og:image" content="${SITE}/images/InstantRecall_Horizontal-01.webp">
  <meta property="og:image:type" content="image/webp">
  <meta property="og:image:width" content="800">
  <meta property="og:image:height" content="200">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${opts.title}">
  <meta name="twitter:description" content="${opts.description}">
  <meta name="twitter:image" content="${SITE}/images/InstantRecall_Horizontal-01.webp">
  <style>${CSS}</style>
  ${enrichedJsonLd ? `<script type="application/ld+json">${enrichedJsonLd}</script>` : ""}
  <script type="application/ld+json">${buildBreadcrumbLd(opts.path)}</script>
  ${webPageLd}
</head>
<body>
${header()}
${opts.body}
${footer(f)}
</body>
</html>`;
}
