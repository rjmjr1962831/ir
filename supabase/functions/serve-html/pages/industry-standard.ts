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
  .subpage-card {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background: #fff;
    max-width: 100%;
    min-height: 400px;
  }
  .subpage-card-image {
    flex: 1 1 50%;
    min-width: 0;
  }
  .subpage-card-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    aspect-ratio: 2222 / 1667;
  }
  .subpage-card-text {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 2.5rem;
    background: #fff;
  }
  .subpage-card-text h1 {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: #272727;
    margin: 0 0 1rem;
    line-height: 1.3;
    letter-spacing: 0.5px;
  }
  .subpage-card-text p {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #3e3e3e;
    line-height: 1.7;
    margin: 0;
  }
  @media (max-width: 768px) {
    .subpage-card {
      flex-direction: column;
    }
    .subpage-card-image,
    .subpage-card-text {
      flex: 1 1 auto;
    }
    .subpage-card-text {
      padding: 2rem 1.5rem;
    }
  }
</style>
<section class="subpage-card">
  <div class="subpage-card-image">
    <img
      src="/images/IndustryGoldStandard.webp"
      alt="Industry Gold Standard"
      width="2222"
      height="1667"
      loading="eager"
    />
  </div>
  <div class="subpage-card-text">
    <h1>Industry Gold Standard</h1>
    <p>Instant Recall serves the largest and most prestigious food companies in the world. Enjoy peace-of-mind knowing that your customers and brand are protected by leader-shared practices, recall technology, and 24x7 response team.</p>
  </div>
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
