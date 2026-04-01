import { renderPage } from "../shared/layout.ts";

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

const SOLUTION_CSS = `
  /* Solution page overrides - white background theme */
  body { background: #fff; color: #272727; }

  .hero { min-height: 350px; padding: 3rem 2rem; }
  .hero h1 { font-size: 52px; letter-spacing: 4px; margin-bottom: 0; }

  .solution-intro { background: #fff; padding: 4rem 2rem; text-align: center; max-width: 900px; margin: 0 auto; }
  .solution-intro h2 { color: #272727; font-size: 1.8rem; font-weight: 700; margin-bottom: 1.25rem; }
  .solution-intro p { color: #3e3e3e; font-size: 1.05rem; line-height: 1.8; font-weight: 300; margin-bottom: 1rem; }

  .container { background: #fff; }

  .card { background: #fff; border: none; border-radius: 0; padding: 0; }
  .card:hover { transform: none; box-shadow: none; }
  .card img { border-radius: 0; margin-bottom: 1rem; }
  .card h3 { color: #272727; font-size: 1.15rem; font-weight: 700; }
  .card p { color: #3e3e3e; font-weight: 300; }

  .features-section { background: #f5f5f5; padding: 4rem 2rem; }
  .feature h4 { color: #272727; }
  .feature p { color: #3e3e3e; }
  .feature img { width: 100px; height: 100px; }

  .feature-fullwidth { grid-column: 1 / -1; }

  .cta { background: #fff; color: #272727; }
  .cta h2 { color: #272727; }

  .site-footer { background: #201a16; color: rgba(255,255,255,.4); }

  .hero .btn:hover { background: #1cace6; }
  .cta a.btn:hover { background: #1cace6; border-color: #1cace6; }
  a:hover { color: #1cace6; }
`;

export function renderSolution(): string {
  const body = `
<style>${SOLUTION_CSS}</style>

<section class="hero" style="background-image:url('/images/iStock-685238966.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>SOLUTION</h1>
  </div>
</section>

<div class="solution-intro">
  <h2>Turn Recall Chaos Into Control</h2>
  <p>At Instant Recall\u2122, we understand that communicating mission-critical information instantly is essential to protecting both people and brands.</p>
  <p>Trusted by the world's leading food companies, we unite the best practices of the global food supply chain into the trusted, gold standard for recall performance\u2014empowering teams to act faster and smarter, from anywhere, at any time.</p>
</div>

<div class="container">
  <div class="cards">
    <div class="card">
      <img src="/images/RecallPreparednessConsulting.webp" alt="Recall Preparedness Consulting">
      <h3>Recall Preparedness Consulting</h3>
      <p>As the industry leader in food recall communications management, we bring the combined best practices of the industry's largest and most successful food companies to you, tailored to handle your unique operational environment.</p>
    </div>
    <div class="card">
      <img src="/images/IncidentResponse.webp" alt="Recall Communications Management">
      <h3>Recall Communications Management</h3>
      <p>Our team of recall communications experts is available to you 24x7x365 for your recall emergencies\u2014backed by unrivaled, purpose-built technology, with real-time 360-degree recall progress visibility.</p>
    </div>
    <div class="card">
      <img src="/images/RecallPreparednessConsulting2.webp" alt="Regulatory Reporting and Audit Response">
      <h3>Regulatory Reporting and Audit Response</h3>
      <p>Instant Recall delivers ironclad, third party audit trail details that exceed regulatory requirements, and expedite successful resolution of regulatory audits.</p>
    </div>
  </div>
</div>

<div style="max-width:1100px;margin:0 auto;padding:0 32px"><hr style="border:none;height:2px;background:#00afec"></div>

<section class="features-section">
  <div class="features-header" style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 2fr;gap:2rem;align-items:start;margin-bottom:2.5rem">
    <h3 style="font-size:1.15rem;font-weight:700;color:#272727;margin:0;line-height:1.4;text-transform:uppercase">SOLUTION FEATURES</h3>
    <p style="color:#3e3e3e;font-size:1rem;line-height:1.6;font-weight:300;margin:0">Behind every recall is a team under pressure to act fast and get it right. Instant Recall gives those teams a better way, uniting the proven best practices of the industry's leading supply chain partners into the trusted gold standard for recall performance.</p>
  </div>

  <div class="features">
    <div class="feature">
      <img src="/images/icon01.webp" alt="Faster Recalls">
      <div class="feature-text">
        <h4>We make recalls faster than ever</h4>
        <p>Launch recalls, withdrawals, holds, and mock events in minutes\u2014not days\u2014to protect customers, safeguard brands, and stay ahead of compliance risk.</p>
      </div>
    </div>
    <div class="feature">
      <img src="/images/icon02.webp" alt="Automation">
      <div class="feature-text">
        <h4>Automation that saves time, money, and lives</h4>
        <p>By combining automated workflows, real-time alerts, and 24/7 expert support, we drive operational efficiency and eliminate the delays that put public health, brand reputation, and your bottom line at risk.</p>
      </div>
    </div>
    <div class="feature">
      <img src="/images/icon03.webp" alt="Minimize Disruption">
      <div class="feature-text">
        <h4>Minimize disruption to your business</h4>
        <p>Our automated workflows allow one person to initiate and oversee the process, while stakeholders across your organization are kept informed via personalized dashboards.</p>
      </div>
    </div>
    <div class="feature">
      <img src="/images/icon04.webp" alt="Compliance">
      <div class="feature-text">
        <h4>Enables compliance with regulatory standards</h4>
        <p>Achieve 100% confirmed notification compliance faster. Stay compliant with evolving FDA, USDA, CFIA, and other regulatory reporting with built-in audit trails.</p>
      </div>
    </div>
    <div class="feature">
      <img src="/images/icon05.webp" alt="Action From Anywhere">
      <div class="feature-text">
        <h4>Take action instantly from anywhere</h4>
        <p>Launch an FSQA event from anywhere and at any time from your phone or laptop, without the need to go into the office or cancel plans.</p>
      </div>
    </div>
    <div class="feature">
      <img src="/images/icon06.webp" alt="Cost Recovery">
      <div class="feature-text">
        <h4>Cost recovery made easy</h4>
        <p>FSQA teams are able to use Instant Recall to quickly recover costs, minimize lost sales, avoid business disruption, and deliver bottom-line value to their organization.</p>
      </div>
    </div>
    <div class="feature feature-fullwidth">
      <img src="/images/icon07.webp" alt="Purpose-Built for Food">
      <div class="feature-text">
        <h4>Purpose-built for the food industry</h4>
        <p>Unlike other generic tools, our service is designed exclusively for food industry recall and withdrawal execution, making us the most trusted name in the industry.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta" style="background:#fff;color:#272727">
  <h2 style="color:#272727;font-size:2.2rem">Accelerate Your Recall Response</h2>
  <script src="https://js-na2.hsforms.net/forms/embed/48681528.js" defer></script>
  <div class="hs-form-frame" data-region="na2" data-form-id="2759faa2-dc43-43f4-8d4d-8fb442c2d0bf" data-portal-id="48681528"></div>
</section>`;

  return renderPage({
    title: "Services | Instant Recall\u2122",
    description:
      "Protecting Your Customers, Your Organization and Your Brand. Turn Recall Chaos Into Control with Instant Recall's recall preparedness, communications management, and regulatory reporting services.",
    path: "/solution",
    jsonLd: JSON_LD,
    body,
  });
}
