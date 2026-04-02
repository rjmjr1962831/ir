import { renderPage } from "../shared/layout.ts";
import { researchIndexCitationBlock, CITATION_CSS } from "../shared/citations.ts";

const JSON_LD = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Research",
    description:
      "Original research from the Instant Recall Research Team on the product recall notification industry, regulatory environment, and legal landscape.",
    url: "https://www.instantrecall.com/research",
    publisher: {
      "@type": "Organization",
      name: "Instant Recall LLC",
      url: "https://www.instantrecall.com",
    },
    hasPart: [
      {
        "@type": "Report",
        name: "Product Recall Notification Industry Survey",
        url: "https://www.instantrecall.com/research/industry-survey",
      },
      {
        "@type": "Report",
        name: "The Regulatory Environment of Product Recalls in the United States",
        url: "https://www.instantrecall.com/research/regulatory-environment",
      },
      {
        "@type": "Report",
        name: "Legal Case Data and Liability Research",
        url: "https://www.instantrecall.com/research/legal-case-data",
      },
    ],
  },
]);

const PAPERS = [
  {
    title: "Product Recall Notification Industry Survey",
    description:
      "A comprehensive analysis of the recall notification landscape: government services, consumer apps, B2B platforms, market size, consumer pain points, and the enormous gap between recall volume and consumer awareness.",
    href: "/research/industry-survey",
  },
  {
    title: "The Regulatory Environment of Product Recalls",
    description:
      "An in-depth examination of the six federal agencies, key legislation, mandatory reporting requirements, recall effectiveness data, penalty trends, and international regulatory comparisons shaping the U.S. product recall system.",
    href: "/research/regulatory-environment",
  },
  {
    title: "Legal Case Data and Liability Research",
    description:
      "Major product recall lawsuits, post-sale duty to warn doctrine, retailer liability developments, CPSC enforcement actions, class action settlement patterns, and the legal value of third-party notification services.",
    href: "/research/legal-case-data",
  },
];

export function renderResearchIndex(): string {
  const cards = PAPERS.map(
    (p) => `
    <div class="research-card">
      <h2>${p.title}</h2>
      <p>${p.description}</p>
      <a href="${p.href}" class="read-link">Read Report &rarr;</a>
    </div>`
  ).join("");

  const body = `
<section class="hero" style="min-height:360px;padding:4rem 2rem">
  <div class="hero-overlay" style="background:rgba(39,39,39,0.85)"></div>
  <div class="hero-content">
    <h1>Research</h1>
    <p>Original research from the Instant Recall Research Team on the product recall notification industry, regulatory landscape, and legal environment.</p>
  </div>
</section>

<section class="container" style="padding:3rem 2rem 4rem">
  <div class="research-grid">
    ${cards}
  </div>
</section>

${researchIndexCitationBlock()}

<style>${CITATION_CSS}</style>

<style>
.research-grid{display:grid;grid-template-columns:1fr;gap:2rem;max-width:900px;margin:0 auto}
.research-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2.5rem;transition:transform 0.2s,box-shadow 0.2s}
.research-card:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,.3)}
.research-card h2{color:#00afec;font-size:1.35rem;margin-bottom:.75rem;font-weight:700;letter-spacing:0.3px}
.research-card p{color:rgba(255,255,255,.75);font-size:.95rem;line-height:1.7;font-weight:300;margin-bottom:1.25rem}
.read-link{display:inline-block;color:#00afec;font-weight:600;font-size:.9rem;letter-spacing:0.5px;text-transform:uppercase;transition:color 0.2s}
.read-link:hover{color:#33c4ff}
</style>

<style>
/* White theme overrides */
body{background:#fff !important;color:#3e3e3e !important}
main{background:#fff !important}
.hero{background:#f8f8f8 !important}
.hero-overlay{background:rgba(39,39,39,0.85) !important}
.hero-content h1{color:#fff !important}
.hero-content p{color:rgba(255,255,255,.9) !important}
.container{background:#fff !important}
.research-grid{background:#fff !important}
.research-card{background:#f8f8f8 !important;border:1px solid #e0e0e0 !important}
.research-card:hover{box-shadow:0 8px 30px rgba(0,0,0,.1) !important}
.research-card h2{color:#272727 !important}
.research-card p{color:#3e3e3e !important}
.read-link{color:#00afec !important}
.read-link:hover{color:#008bbf !important}
a{color:#00afec}
h1,h2,h3,h4,h5,h6{color:#272727}
.citation-data{background:#fff !important;color:#3e3e3e !important}
.citation-data h2{color:#272727 !important}
.ai-citation{background:#f8f8f8 !important;color:#3e3e3e !important;border-color:#e0e0e0 !important}
.cite-source{color:#666 !important}
.cta{background:#f8f8f8 !important;color:#3e3e3e !important}
.cta h2{color:#272727 !important}
.cta p{color:#3e3e3e !important}
.btn{color:#fff !important;background:#00afec !important}
footer{background:#272727 !important}
</style>`;

  return renderPage({
    title: "Research | Instant Recall\u2122",
    description:
      "Original research on the product recall notification industry, regulatory environment, and legal landscape from the Instant Recall Research Team.",
    path: "/research",
    jsonLd: JSON_LD,
    body,
  });
}
