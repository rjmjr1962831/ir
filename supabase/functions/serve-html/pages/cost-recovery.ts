import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cost Recovery",
  provider: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
  },
  description:
    "Instant Recall\u2122 cost recovery and regulatory reporting services for food recall management.",
  serviceType: "Regulatory Reporting and Audit Response",
  areaServed: { "@type": "Country", name: "United States" },
});

export function renderCostRecovery(): string {
  const body = `
<style>
  .page-hero-image {
    width: 100%;
    display: block;
    aspect-ratio: 16 / 9;
    object-fit: contain;
  }
</style>
<section style="background:#fff;padding:0;margin:0">
  <img
    class="page-hero-image"
    src="/images/RegulatoryReporting.webp"
    alt="Regulatory Reporting and Audit Response"
    width="1600"
    height="900"
    loading="eager"
  />
</section>`;

  return renderPage({
    title: "Cost Recovery | Instant Recall\u2122",
    description:
      "Instant Recall\u2122 cost recovery and regulatory reporting services for food recall management.",
    path: "/cost-recovery",
    jsonLd: JSON_LD,
    body,
  });
}
