import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Industry Gold Standard",
  provider: { "@type": "Organization", name: "Instant Recall LLC" },
  description:
    "Instant Recall serves the largest and most prestigious food companies in the world, delivering leader-shared practices, recall technology, and 24x7 response.",
});

export function renderIndustryStandard(): string {
  const body = `
<section class="hero" style="background-image:url('/images/IndustryGoldStandard.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Industry Gold Standard</h1>
    <p>Instant Recall serves the largest and most prestigious food companies in the world. Enjoy peace of mind knowing that your customers and brand are protected by leader-shared practices, recall technology, and a 24x7 response team.</p>
  </div>
</section>

<div class="container">
  <section class="features-section">
    <div style="max-width:1100px;margin:0 auto">
      <h2 class="section-title">Setting the Standard in Food Recall Excellence</h2>
      <p class="section-subtitle">For more than two decades, the world's leading food companies have trusted Instant Recall to protect their customers and their brands. Our platform combines the collective expertise of the industry's largest supply chain partners into a single, proven solution.</p>
    </div>

    <div class="features">
      <div class="feature">
        <h4>Trusted by the World's Leading Food Companies</h4>
        <p>The most recognized names in the global food industry rely on Instant Recall to manage their recall communications, safeguarding their customers and their reputations.</p>
      </div>
      <div class="feature">
        <h4>More Than Two Decades of Food Recall Expertise</h4>
        <p>With over 20 years of dedicated focus on food recall communications management, our team brings unmatched depth of knowledge and operational experience to every engagement.</p>
      </div>
      <div class="feature">
        <h4>Combined Best Practices From Industry Leaders</h4>
        <p>We continuously integrate the proven strategies and processes of the industry's largest supply chain partners, delivering a platform built on collective wisdom rather than a single perspective.</p>
      </div>
      <div class="feature">
        <h4>24/7/365 Dedicated Response Team</h4>
        <p>Recall events do not follow a schedule. Our dedicated team of recall communications experts is available around the clock, every day of the year, to support your organization when it matters most.</p>
      </div>
      <div class="feature">
        <h4>Proven Track Record Across Thousands of Recall Events</h4>
        <p>Our platform and team have successfully managed thousands of recall events, providing the confidence that comes from a track record built on real-world results.</p>
      </div>
      <div class="feature">
        <h4>Continuous Improvement Driven by Industry Leaders</h4>
        <p>Every recall event strengthens our platform. We apply the collective experience of our industry-leading partners to refine and improve our processes, technology, and service delivery.</p>
      </div>
    </div>
  </section>
</div>

<section class="cta">
  <h2>Experience the Industry Gold Standard</h2>
  <p>Learn how Instant Recall can protect your customers and your brand with proven, leader-shared recall practices.</p>
  <a href="/contact-instant-recall" class="btn">Contact Us</a>
</section>`;

  return renderPage({
    title: "Industry Gold Standard | Instant Recall",
    description:
      "Instant Recall serves the largest and most prestigious food companies in the world. Enjoy peace of mind knowing your customers and brand are protected by leader-shared practices, recall technology, and a 24x7 response team.",
    path: "/industry-standard",
    jsonLd: JSON_LD,
    body,
  });
}
