import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Instant Recall",
  url: "https://www.instantrecall.com/contact-instant-recall",
  mainEntity: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    telephone: "+1-214-220-8000",
  },
});

export function renderContact(): string {
  const body = `
<section class="hero">
  <h1>Contact Instant Recall</h1>
  <p>How can we help you today?</p>
</section>

<div class="container">
  <h2 class="section-title">What brings you here?</h2>
  <div class="route-options">
    <a href="https://www.myinstantrecall.com" class="route-option" rel="noopener">I am responding to a recall notification</a>
    <a href="/contact" class="route-option secondary">I want to learn more about Instant Recall</a>
    <a href="/stop" class="route-option danger">Do Not Contact Me</a>
  </div>
</div>`;

  return renderPage({
    title: "Contact -- Instant Recall",
    description:
      "Get in touch with Instant Recall for recall response, product information, or communication preferences.",
    path: "/contact-instant-recall",
    jsonLd: JSON_LD,
    body,
  });
}
