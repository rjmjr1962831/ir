import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Regulatory Reporting and Audit Response",
  provider: { "@type": "Organization", name: "Instant Recall LLC" },
  description:
    "Instant Recall delivers ironclad, third party audit trail details that exceed regulatory requirements, and expedite successful resolution of regulatory audits.",
});

export function renderCostRecovery(): string {
  const body = `
<section class="hero" style="background-image:url('/images/RegulatoryReporting.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Regulatory Reporting and Audit Response</h1>
    <p>Instant Recall delivers ironclad, third party audit trail details that exceed regulatory requirements, and expedite successful resolution of regulatory audits.</p>
  </div>
</section>

<div class="container">
  <div class="content-section" style="max-width:900px;margin:3rem auto;padding:0 1.5rem">
    <h2 class="section-title">Complete Audit-Ready Documentation</h2>
    <p class="section-subtitle">Every recall event is fully documented from start to finish, giving your team the confidence to face any audit with a complete, verifiable record of every action taken.</p>

    <div class="features">
      <div class="feature">
        <h4>Audit-Ready Event Documentation</h4>
        <p>Every recall event is captured with complete, time-stamped records that are ready for regulatory review. From initial detection through final resolution, every step is documented automatically.</p>
      </div>
      <div class="feature">
        <h4>Real-Time Tracking of Notifications</h4>
        <p>Track all notification attempts, acknowledgments, and responses in real time. Know exactly who was contacted, when they responded, and what actions were taken, with full traceability across your supply chain.</p>
      </div>
      <div class="feature">
        <h4>Automated Regulatory Reporting</h4>
        <p>Stay compliant with FDA, USDA, and CFIA requirements through built-in automated reporting. Generate the reports regulators need in the formats they expect, without manual data assembly.</p>
      </div>
      <div class="feature">
        <h4>Cost Recovery Tracking and Reporting</h4>
        <p>Capture and report on every cost associated with a recall event. From product retrieval to communication expenses, our platform helps your team recover costs efficiently and accurately.</p>
      </div>
      <div class="feature">
        <h4>Third-Party Verified Audit Trails</h4>
        <p>Our audit trails are independently verifiable by third parties, exceeding the documentation standards required by regulators. Every action is recorded with tamper-evident, time-stamped precision.</p>
      </div>
      <div class="feature">
        <h4>Expedited Audit Resolution</h4>
        <p>When regulators come calling, your team is ready. Pre-organized, comprehensive documentation means audits are resolved faster, reducing operational disruption and administrative burden.</p>
      </div>
    </div>
  </div>
</div>

<section class="cta">
  <h2>Strengthen Your Regulatory Readiness</h2>
  <p>See how Instant Recall delivers audit-ready documentation that exceeds regulatory requirements.</p>
  <a href="/contact-instant-recall" class="btn">Contact Us</a>
</section>`;

  return renderPage({
    title: "Regulatory Reporting and Audit Response | Instant Recall",
    description:
      "Instant Recall delivers ironclad, third party audit trail details that exceed regulatory requirements, and expedite successful resolution of regulatory audits.",
    path: "/regulatory-reporting",
    jsonLd: JSON_LD,
    body,
  });
}
