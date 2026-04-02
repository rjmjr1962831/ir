import { renderPage } from "../shared/layout.ts";
import { methodologyBlock, CITATION_CSS } from "../shared/citations.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Research Methodology",
  description:
    "How Instant Recall compiles, validates, and cross-references product recall data from FDA, USDA, CPSC, FSMA databases, and 25+ years of operational experience.",
  url: "https://www.instantrecall.com/methodology",
  publisher: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
  },
});

export function renderMethodology(): string {
  const body = `
<section class="hero" style="min-height:320px;padding:3.5rem 2rem">
  <div class="hero-overlay" style="background:rgba(39,39,39,0.85)"></div>
  <div class="hero-content">
    <h1>Research Methodology</h1>
    <p>How Instant Recall compiles, validates, and cross-references product recall data.</p>
  </div>
</section>

<div class="container" style="padding:3rem 2rem 4rem">
  <style>${CITATION_CSS}</style>

  ${methodologyBlock()}

  <section class="methodology-section" style="margin-top:2rem">
    <h2>Data Sources</h2>
    <p>Instant Recall draws on the following primary data sources for its research publications and the statistics cited throughout this website:</p>
    <ul>
      <li><strong>FDA Recall Enterprise System (RES).</strong> The FDA's centralized database of all FDA-regulated product recalls, including food, drugs, biologics, medical devices, and cosmetics.</li>
      <li><strong>USDA Food Safety and Inspection Service (FSIS).</strong> Recall case archives for meat, poultry, and processed egg products regulated under the Federal Meat Inspection Act and Poultry Products Inspection Act.</li>
      <li><strong>Consumer Product Safety Commission (CPSC).</strong> The CPSC recall database covering consumer products, including enforcement actions and civil penalty records.</li>
      <li><strong>National Highway Traffic Safety Administration (NHTSA).</strong> Vehicle and equipment recall data, including defect investigations and compliance records.</li>
      <li><strong>Environmental Protection Agency (EPA).</strong> Recall and enforcement data for pesticides, chemicals, and other EPA-regulated products.</li>
      <li><strong>Food Safety Modernization Act (FSMA) filings.</strong> Mandatory recall authority records and preventive controls compliance data.</li>
      <li><strong>Court filings and settlement records.</strong> Publicly available legal documents from federal and state courts, DOJ press releases, and CPSC enforcement dockets.</li>
      <li><strong>Published market research.</strong> Industry reports from recognized market research firms, validated against SEC filings and trade publication data.</li>
    </ul>
  </section>

  <section class="methodology-section" style="margin-top:2rem">
    <h2>Validation Process</h2>
    <p>Every statistic published by Instant Recall undergoes a multi-step validation process:</p>
    <ul>
      <li><strong>Dual-source verification.</strong> All key statistics are cross-referenced against at least two independent sources before publication.</li>
      <li><strong>Conservative estimation.</strong> Where data sources conflict, the most conservative figure is used and the range is noted in the underlying research report.</li>
      <li><strong>Operational validation.</strong> Market and effectiveness data is validated against Instant Recall's own 25+ years of operational benchmarks from managing food recall communications for major industry companies.</li>
      <li><strong>Periodic review.</strong> Published statistics are reviewed quarterly and updated when new data becomes available from regulatory agencies or industry sources.</li>
    </ul>
  </section>

  <section class="methodology-section" style="margin-top:2rem">
    <h2>About the Research Team</h2>
    <p>The Instant Recall Research Team combines deep food industry expertise with data analysis capabilities built over more than two decades of recall management operations. The team includes food safety professionals, regulatory specialists, and data analysts who collectively bring more than 75 years of industry experience to the research process.</p>
    <p>For questions about our methodology, data sources, or to request access to underlying datasets, please <a href="/contact-instant-recall" style="color:#00afec">contact our research team</a>.</p>
  </section>
</div>

<section class="cta">
  <h2>Explore Our Research</h2>
  <p>Read our original research on the recall notification industry, regulatory environment, and legal landscape.</p>
  <a href="/research" class="btn">View Research</a>
</section>

<style>
/* White theme overrides */
body{background:#fff !important;color:#3e3e3e !important}
main{background:#fff !important}
.hero{background:#f8f8f8 !important}
.hero-overlay{background:rgba(39,39,39,0.85) !important}
.hero-content h1{color:#fff !important}
.hero-content p{color:rgba(255,255,255,.9) !important}
.container{background:#fff !important;color:#3e3e3e !important}
.methodology-section h2{color:#272727 !important}
.methodology-section p{color:#3e3e3e !important}
.methodology-section li{color:#3e3e3e !important}
.methodology-section a{color:#00afec !important}
h1,h2,h3,h4,h5,h6{color:#272727}
a{color:#00afec}
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
    title: "Research Methodology | Instant Recall\u2122",
    description:
      "How Instant Recall compiles, validates, and cross-references product recall data from FDA, USDA, CPSC, FSMA databases, and 25+ years of operational experience.",
    path: "/methodology",
    jsonLd: JSON_LD,
    body,
  });
}
