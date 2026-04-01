import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Incident Response",
  provider: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
  },
  description:
    "Instant Recall\u2122 incident response services for food recall communications management.",
  serviceType: "Recall Communications Management",
  areaServed: { "@type": "Country", name: "United States" },
});

export function renderIncidentResponse(): string {
  const body = `
<style>
  .page-hero-image {
    width: 100%;
    display: block;
    aspect-ratio: 2222 / 1667;
    object-fit: contain;
  }
</style>
<section style="background:#fff;padding:0;margin:0">
  <img
    class="page-hero-image"
    src="/images/IncidentResponse.webp"
    alt="Incident Response"
    width="2222"
    height="1667"
    loading="eager"
  />
</section>`;

  return renderPage({
    title: "Incident Response | Instant Recall\u2122",
    description:
      "Instant Recall\u2122 incident response services for food recall communications management.",
    path: "/incident-response",
    jsonLd: JSON_LD,
    body,
  });
}
