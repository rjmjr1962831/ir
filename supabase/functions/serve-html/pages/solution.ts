import { renderPage } from "../shared/layout.ts";
import { solutionCitationBlock, CITATION_CSS } from "../shared/citations.ts";

const SERVICE_AUDIENCE = {
  "@type": "Audience",
  audienceType:
    "Food manufacturers, distributors, retailers, and restaurant chains",
};

const JSON_LD = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Recall Preparedness Consulting",
    serviceType: "Recall Preparedness Consulting",
    provider: { "@type": "Organization", name: "Instant Recall LLC" },
    description:
      "As the industry leader in food recall communications management, we bring the combined best practices of the industry's largest and most successful food companies to you.",
    areaServed: "United States",
    audience: SERVICE_AUDIENCE,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Recall Communications Management",
    serviceType: "Recall Communications Management",
    provider: { "@type": "Organization", name: "Instant Recall LLC" },
    description:
      "Our team of recall communications experts is available to you 24x7x365 for your recall emergencies, backed by unrivaled, purpose-built technology.",
    areaServed: "United States",
    audience: SERVICE_AUDIENCE,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Regulatory Reporting and Audit Response",
    serviceType: "Regulatory Reporting",
    provider: { "@type": "Organization", name: "Instant Recall LLC" },
    description:
      "Instant Recall delivers ironclad, third party audit trail details that exceed regulatory requirements, and expedite successful resolution of regulatory audits.",
    areaServed: "United States",
    audience: SERVICE_AUDIENCE,
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Instant Recall",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    description:
      "Food recall preparedness and response platform for automated multi-channel notification, regulatory reporting, and recall management.",
    provider: { "@type": "Organization", name: "Instant Recall LLC" },
  },
]);

export function renderSolution(): string {
  const body = `
<section class="hero" style="background-image:url('/images/iStock-685238966.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Turn Recall Chaos Into Control</h1>
    <p>At Instant Recall, we understand that communicating mission-critical information instantly is essential to protecting both people and brands. Trusted by the world's leading food companies, we unite the best practices of the global food supply chain into the trusted, gold standard for recall performance, empowering teams to act faster and smarter, from anywhere, at any time.</p>
  </div>
</section>

<div class="container">
  <div class="cards">
    <div class="card">
      <img src="/images/RecallPreparednessConsulting2.webp" alt="Recall Preparedness Consulting">
      <h3>Recall Preparedness Consulting</h3>
      <p>As the industry leader in food recall communications management, we bring the combined best practices of the industry's largest and most successful food companies to you, tailored to handle your unique operational environment.</p>
    </div>
    <div class="card">
      <img src="/images/IncidentResponse.webp" alt="Recall Communications Management">
      <h3>Recall Communications Management</h3>
      <p>Our team of recall communications experts is available to you 24x7x365 for your recall emergencies, backed by unrivaled, purpose-built technology, with real-time 360-degree recall progress visibility.</p>
    </div>
    <div class="card">
      <img src="/images/architecture-buildings-business-280193_edited.webp" alt="Regulatory Reporting and Audit Response">
      <h3>Regulatory Reporting and Audit Response</h3>
      <p>Instant Recall delivers ironclad, third party audit trail details that exceed regulatory requirements, and expedite successful resolution of regulatory audits.</p>
    </div>
  </div>
</div>

<section class="features-section">
  <div style="max-width:1100px;margin:0 auto">
    <h2 class="section-title">Solution Features</h2>
    <p class="section-subtitle">Behind every recall is a team under pressure to act fast and get it right. Instant Recall gives those teams a better way, uniting the proven best practices of the industry's leading supply chain partners into the trusted gold standard for recall performance.</p>
  </div>

  <div class="features">
    <div class="feature">
      <img src="/images/icon01.webp" alt="Faster Recalls">
      <h4>We make recalls faster than ever</h4>
      <p>Launch recalls, withdrawals, holds, and mock events in minutes, not days, to protect customers, safeguard brands, and stay ahead of compliance risk.</p>
    </div>
    <div class="feature">
      <img src="/images/icon02.webp" alt="Automation">
      <h4>Automation that saves time, money, and lives</h4>
      <p>By combining automated workflows, real-time alerts, and 24/7 expert support, we drive operational efficiency and eliminate the delays that put public health, brand reputation, and your bottom line at risk.</p>
    </div>
    <div class="feature">
      <img src="/images/icon03.webp" alt="Minimize Disruption">
      <h4>Minimize disruption to your business</h4>
      <p>Our automated workflows allow one person to initiate and oversee the process, while stakeholders across your organization are kept informed via personalized dashboards.</p>
    </div>
    <div class="feature">
      <img src="/images/icon04.webp" alt="Compliance">
      <h4>Enables compliance with regulatory standards</h4>
      <p>Achieve 100% confirmed notification compliance faster. Stay compliant with evolving FDA, USDA, CFIA, and other regulatory reporting with built-in audit trails.</p>
    </div>
    <div class="feature">
      <img src="/images/icon05.webp" alt="Action From Anywhere">
      <h4>Take action instantly from anywhere</h4>
      <p>Launch an FSQA event from anywhere and at any time from your phone or laptop, without the need to go into the office or cancel plans.</p>
    </div>
    <div class="feature">
      <img src="/images/icon06.webp" alt="Cost Recovery">
      <h4>Cost recovery made easy</h4>
      <p>FSQA teams are able to use Instant Recall to quickly recover costs, minimize lost sales, avoid business disruption, and deliver bottom-line value to their organization.</p>
    </div>
    <div class="feature">
      <img src="/images/icon07.webp" alt="Purpose-Built for Food">
      <h4>Purpose-built for the food industry</h4>
      <p>Unlike other generic tools, our service is designed exclusively for food industry recall and withdrawal execution, making us the most trusted name in the industry.</p>
    </div>
  </div>
</section>

<style>${CITATION_CSS}</style>

${solutionCitationBlock()}

<section class="cta">
  <h2>Accelerate Your Recall Response</h2>
  <p>Request a demo and discover how our platform transforms recall response.</p>
  <a href="/contact-instant-recall" class="btn">Contact Us</a>
</section>`;

  return renderPage({
    title: "Services | Instant Recall",
    description:
      "Protecting Your Customers, Your Organization and Your Brand. Turn Recall Chaos Into Control with Instant Recall's recall preparedness, communications management, and regulatory reporting services.",
    path: "/solution",
    jsonLd: JSON_LD,
    body,
  });
}
