import { CSS } from "./styles.ts";

const SITE = "https://www.instantrecall.com";

interface LayoutOptions {
  title: string;
  description: string;
  path: string;
  jsonLd?: string;
  body: string;
}

const BREADCRUMB_NAMES: Record<string, string> = {
  "/": "Home",
  "/solution": "Services",
  "/contact-instant-recall": "Contact",
  "/portal": "Login",
  "/privacy-policy": "Privacy Policy",
  "/terms-and-conditions": "Terms of Service",
  "/about-us": "About Us",
};

function buildBreadcrumbLd(path: string): string {
  const items: { name: string; url: string }[] = [
    { name: "Home", url: SITE },
  ];
  if (path !== "/") {
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
  <a href="/" class="logo">Instant Recall</a>
  <nav>
    <a href="/">Home</a>
    <a href="/solution">Solution</a>
    <a href="/portal">Login</a>
    <a href="/contact-instant-recall">Contact Us</a>
  </nav>
</header>`;
}

function footer(): string {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="footer-links">
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/terms-and-conditions">Terms of Service</a>
    <a href="/contact-instant-recall">Contact</a>
  </div>
  <p>&copy; ${year} Instant Recall LLC. All rights reserved.</p>
  <p>A <a href="https://www.belltowertech.com" rel="noopener">BellTower Technologies</a> solution.</p>
</footer>`;
}

export function renderPage(opts: LayoutOptions): string {
  const canonical = `${SITE}${opts.path === "/" ? "" : opts.path}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${opts.title}</title>
  <meta name="description" content="${opts.description}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${opts.title}">
  <meta property="og:description" content="${opts.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Instant Recall">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${opts.title}">
  <meta name="twitter:description" content="${opts.description}">
  <style>${CSS}</style>
  ${opts.jsonLd ? `<script type="application/ld+json">${opts.jsonLd}</script>` : ""}
  <script type="application/ld+json">${buildBreadcrumbLd(opts.path)}</script>
</head>
<body>
${header()}
${opts.body}
${footer()}
</body>
</html>`;
}
