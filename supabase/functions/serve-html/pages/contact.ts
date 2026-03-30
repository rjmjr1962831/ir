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
<section class="hero" style="background-image:url('/images/AdobeStock_185382984-CMYK.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Contact Us</h1>
    <p>Please select one of the following according to your needs:</p>
  </div>
</section>

<div class="container">
  <div class="route-options">
    <a href="https://myinstantrecall.com" class="route-option" rel="noopener">I am responding to a recall notification</a>
    <a href="/contact" class="route-option secondary">I want to learn more about Instant Recall</a>
  </div>
  <p style="text-align:center;margin-top:2rem;font-size:.9rem;color:rgba(255,255,255,.5)">Were you contacted in error? <a href="mailto:support@instantrecall.com?subject=Do Not Contact Request" style="color:#c8a951">Request to be put on the Do Not Contact list.</a></p>
</div>`;

  return renderPage({
    title: "Contact Us | Instant Recall",
    description:
      "Get in touch with Instant Recall for recall response, product information, or communication preferences.",
    path: "/contact-instant-recall",
    jsonLd: JSON_LD,
    body,
  });
}

export function renderContactDirect(): string {
  const body = `
<section class="hero" style="background-image:url('/images/AdobeStock_185382984-CMYK.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Contact Us</h1>
    <p>Want to learn more about Instant Recall?</p>
  </div>
</section>

<div class="container">
  <div class="contact-info">
    <h3>How to Reach Us</h3>
    <dl class="phone-grid">
      <dt>Main</dt>
      <dd><a href="tel:+12142208000" style="color:rgba(255,255,255,.85)">+1 (214) 220-8000</a></dd>
      <dt>Sales (Toll-Free)</dt>
      <dd><a href="tel:+18884004786" style="color:rgba(255,255,255,.85)">(888) 400-4786</a></dd>
      <dt>Service (Toll-Free)</dt>
      <dd><a href="tel:+18886004786" style="color:rgba(255,255,255,.85)">(888) 600-4786</a></dd>
    </dl>
    <p style="margin-top:1.5rem">Instant Recall LLC<br>5900 S Lake Forest Drive Suite 300<br>McKinney, TX 75070</p>
  </div>
</div>`;

  return renderPage({
    title: "Contact Us | Instant Recall",
    description:
      "The Leader in Food Recall Preparedness and Response. Contact Instant Recall for more information.",
    path: "/contact",
    jsonLd: JSON_LD,
    body,
  });
}
