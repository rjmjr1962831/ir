import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Recall Communications Management",
  provider: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
  },
  description:
    "24/7/365 recall communications experts backed by purpose-built technology with real-time 360-degree recall progress visibility.",
  serviceType: "Recall Communications Management",
  areaServed: { "@type": "Country", name: "United States" },
});

export function renderIncidentResponse(): string {
  const body = `
<section class="hero" style="background-image:url('/images/IncidentResponse.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Recall Communications Management</h1>
    <p>Our team of recall communications experts is available to you 24x7x365 for your recall emergencies, backed by unrivaled, purpose-built technology, with real-time 360-degree recall progress visibility.</p>
  </div>
</section>

<div class="container">
  <div class="cards">
    <div class="card">
      <h3>24/7/365 Expert Recall Team</h3>
      <p>Recall events do not follow a schedule. Our dedicated team of recall communications experts is available around the clock, every day of the year, ready to guide your organization through any recall emergency with speed and precision.</p>
    </div>
    <div class="card">
      <h3>Real-Time 360-Degree Visibility</h3>
      <p>Monitor every aspect of your recall in real time. Track notification delivery, customer acknowledgments, product retrieval, and resolution status across your entire supply chain from a single, unified dashboard.</p>
    </div>
    <div class="card">
      <h3>Multi-Channel Notification</h3>
      <p>Reach every affected location through the channels that work best for them. Our platform delivers recall alerts via voice, email, SMS, and web portal simultaneously, ensuring no stakeholder is left uninformed.</p>
    </div>
  </div>
</div>

<section class="features-section">
  <div style="max-width:1100px;margin:0 auto">
    <h2 class="section-title">How We Manage Your Recall</h2>
    <p class="section-subtitle">From the moment a recall is triggered to final resolution, our team and technology work together to protect your customers, your brand, and your bottom line.</p>
  </div>

  <div class="features">
    <div class="feature">
      <h4>Acknowledgment Tracking and Escalation</h4>
      <p>Every notification is tracked to confirmation. When locations fail to respond, automated escalation workflows ensure follow-up happens immediately, without manual intervention.</p>
    </div>
    <div class="feature">
      <h4>Stakeholder Dashboards</h4>
      <p>Leadership, field teams, quality assurance, and regulatory affairs each see the information most relevant to their role. Personalized dashboards keep every stakeholder informed and aligned.</p>
    </div>
    <div class="feature">
      <h4>Regulatory Agency Coordination</h4>
      <p>Our team works directly with FDA, USDA, CFIA, and other agencies to ensure your recall meets all regulatory reporting requirements, reducing compliance risk during critical events.</p>
    </div>
    <div class="feature">
      <h4>Post-Event Analysis and Reporting</h4>
      <p>After every recall, we deliver comprehensive post-event reports covering response times, completion rates, and improvement recommendations to strengthen your recall readiness.</p>
    </div>
  </div>
</section>

<section class="cta">
  <h2>Be Ready Before the Next Recall</h2>
  <p>See how our 24/7 team and purpose-built platform transform recall response.</p>
  <a href="/contact-instant-recall" class="btn">Contact Us</a>
</section>`;

  return renderPage({
    title: "Recall Communications Management | Instant Recall",
    description:
      "Our team of recall communications experts is available 24x7x365 for your recall emergencies, backed by unrivaled, purpose-built technology with real-time 360-degree recall progress visibility.",
    path: "/incident-response",
    jsonLd: JSON_LD,
    body,
  });
}
