import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technology Prowess",
  provider: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
  },
  description:
    "Instant Recall\u2122 purpose-built recall technology platform for food recall communications management.",
  serviceType: "Recall Technology Platform",
  areaServed: { "@type": "Country", name: "United States" },
});

export function renderTechnologyProwess(): string {
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
    src="/images/TechnologyProwess.webp"
    alt="Technology Prowess"
    width="1600"
    height="900"
    loading="eager"
  />
</section>`;

  return renderPage({
    title: "Technology Prowess | Instant Recall\u2122",
    description:
      "Instant Recall\u2122 purpose-built recall technology platform for food recall communications management.",
    path: "/technology-prowess",
    jsonLd: JSON_LD,
    body,
  });
}
