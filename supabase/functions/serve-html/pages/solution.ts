import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Recall Preparedness Consulting",
    provider: { "@type": "Organization", name: "Instant Recall LLC" },
    description:
      "Proactive planning and readiness assessments to ensure your organization can respond to a recall swiftly and effectively.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Recall Communications Management",
    provider: { "@type": "Organization", name: "Instant Recall LLC" },
    description:
      "Automated, multi-channel notification workflows that reach every affected customer, distributor, and retailer within minutes.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Regulatory Reporting and Audit Response",
    provider: { "@type": "Organization", name: "Instant Recall LLC" },
    description:
      "Comprehensive documentation, real-time dashboards, and audit-ready reports for FDA, USDA, and other regulatory requirements.",
  },
]);

export function renderSolution(): string {
  const body = `
<section class="hero">
  <h1>Services</h1>
  <p>End-to-end recall preparedness, communications, and compliance for food manufacturers, distributors, and retailers.</p>
</section>

<div class="container">
  <h2 class="section-title">Our Services</h2>

  <div class="cards">
    <div class="card">
      <h3>Recall Preparedness Consulting</h3>
      <p>Our consultants work with your food safety and quality assurance teams to build a recall-ready organization. We assess your current processes, identify gaps, develop recall playbooks, and run simulated recall exercises so your team knows exactly what to do when a real event occurs. Preparedness reduces response time, limits exposure, and protects your brand reputation.</p>
    </div>
    <div class="card">
      <h3>Recall Communications Management</h3>
      <p>When a recall is initiated, Instant Recall's platform takes over communications. Automated workflows notify every affected party via email, SMS, voice, and fax simultaneously. Real-time tracking confirms delivery and response. Escalation rules ensure no contact falls through the cracks. The result: faster, more complete notifications that satisfy regulatory requirements and protect public safety.</p>
    </div>
    <div class="card">
      <h3>Regulatory Reporting and Audit Response</h3>
      <p>Every action taken during a recall is logged, timestamped, and stored in an audit-ready format. Our platform generates the reports regulators require, including FDA Reportable Food Registry submissions, USDA recall notifications, and effectiveness check documentation. When auditors arrive, you are ready with a complete, defensible record of your recall response.</p>
    </div>
  </div>

  <h2 class="section-title">Solution Features</h2>
  <p class="section-subtitle">Every capability your recall team needs, in one platform</p>

  <div class="features">
    <div class="feature">
      <h4>Faster Recalls</h4>
      <p>Automated, parallel communications across email, SMS, voice, and fax reduce notification time from days to minutes. Every second saved reduces risk to consumers and liability for your organization.</p>
    </div>
    <div class="feature">
      <h4>Automation</h4>
      <p>Upload your distribution lists and let the platform handle the rest. Automatic contact matching, notification sequencing, escalation triggers, and follow-up reminders eliminate manual work and human error.</p>
    </div>
    <div class="feature">
      <h4>Minimize Disruption</h4>
      <p>Targeted recall notifications reach only the parties who received affected product. Your unaffected operations, customers, and supply chain partners continue without interruption.</p>
    </div>
    <div class="feature">
      <h4>Compliance</h4>
      <p>Pre-built templates aligned with FDA, USDA, FSMA, and GFSI requirements. Automatic audit trails, timestamped records, and regulatory report generation keep you in compliance from start to finish.</p>
    </div>
    <div class="feature">
      <h4>Action From Anywhere</h4>
      <p>Initiate recalls, monitor progress, and approve communications from any device. Mobile-responsive dashboards and push notifications keep your recall team connected whether they are in the office, on the plant floor, or traveling.</p>
    </div>
    <div class="feature">
      <h4>Cost Recovery</h4>
      <p>Detailed event logs, contact records, and product tracking data support insurance claims and cost recovery. Demonstrate the scope and efficiency of your response with defensible documentation.</p>
    </div>
    <div class="feature">
      <h4>Purpose-Built for Food</h4>
      <p>Instant Recall is not a generic mass-notification tool. Every feature, workflow, and template is designed specifically for food recall scenarios, from lot-level traceability to FDA effectiveness checks.</p>
    </div>
  </div>
</div>

<section class="cta">
  <h2>Ready to See Instant Recall in Action?</h2>
  <p>Request a demo and discover how our platform transforms recall response.</p>
  <a href="/contact-instant-recall" class="btn">Contact Us</a>
</section>`;

  return renderPage({
    title: "Services -- Instant Recall",
    description:
      "End-to-end recall preparedness, communications, and compliance services for the food industry.",
    path: "/solution",
    jsonLd: JSON_LD,
    body,
  });
}
