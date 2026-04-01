import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Industry Standard",
  provider: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
  },
  description:
    "Instant Recall\u2122 serves the largest and most prestigious food companies in the world with industry gold standard recall services.",
  serviceType: "Industry Gold Standard Recall Services",
  areaServed: { "@type": "Country", name: "United States" },
});

export function renderIndustryStandard(): string {
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
    src="/images/IndustryGoldStandard.webp"
    alt="Industry Gold Standard"
    width="1600"
    height="900"
    loading="eager"
  />
</section>`;

  return renderPage({
    title: "Industry Standard | Instant Recall\u2122",
    description:
      "Instant Recall\u2122 serves the largest and most prestigious food companies in the world with industry gold standard recall services.",
    path: "/industry-standard",
    jsonLd: JSON_LD,
    body,
  });
}
