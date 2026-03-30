import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Instant Recall LLC",
  alternateName: "BellTower Technologies",
  url: "https://www.instantrecall.com",
  telephone: "+1-214-220-8000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5900 South Lake Forest Dr., Suite 300",
    addressLocality: "McKinney",
    addressRegion: "TX",
    postalCode: "75070",
    addressCountry: "US",
  },
  description:
    "The Leader in Food Recall Preparedness and Response. Protecting Your Customers, Your Organization and Your Brand.",
});

export function renderHome(): string {
  const body = `
<section class="hero">
  <h1>Turn Recall Chaos Into Control</h1>
  <p>When a food recall strikes, every minute counts. Instant Recall transforms your recall communications from a scramble into a streamlined, auditable process, reaching every affected party faster, reducing risk, and protecting the trust your customers place in your brand.</p>
</section>

<div class="container">
  <h2 class="section-title">How We Help</h2>
  <p class="section-subtitle">End-to-end recall preparedness and response for the food industry</p>

  <div class="cards">
    <div class="card">
      <h3>Recall Preparedness Consulting</h3>
      <p>Proactive planning and readiness assessments to ensure your organization can respond to a recall swiftly and effectively, before one ever happens.</p>
    </div>
    <div class="card">
      <h3>Recall Communications Management</h3>
      <p>Automated, multi-channel notification workflows that reach every affected customer, distributor, and retailer within minutes, not days.</p>
    </div>
    <div class="card">
      <h3>Regulatory Reporting and Audit Response</h3>
      <p>Comprehensive documentation, real-time dashboards, and audit-ready reports to satisfy FDA, USDA, and other regulatory requirements.</p>
    </div>
  </div>

  <h2 class="section-title">Why Instant Recall</h2>
  <div class="features">
    <div class="feature">
      <h4>Faster Recalls</h4>
      <p>Reduce notification time from days to minutes with automated, parallel communications across every channel.</p>
    </div>
    <div class="feature">
      <h4>Automation</h4>
      <p>Eliminate manual spreadsheets and phone trees. Our platform automates contact lists, notifications, escalations, and follow-ups.</p>
    </div>
    <div class="feature">
      <h4>Minimize Disruption</h4>
      <p>Keep your operations running while the recall is managed. Targeted notifications mean only affected parties are contacted.</p>
    </div>
    <div class="feature">
      <h4>Compliance</h4>
      <p>Built-in regulatory templates and audit trails ensure you meet FDA, USDA, and FSMA requirements every time.</p>
    </div>
    <div class="feature">
      <h4>Action From Anywhere</h4>
      <p>Initiate and manage recalls from any device. Mobile-responsive dashboards give your team full control on the go.</p>
    </div>
    <div class="feature">
      <h4>Cost Recovery</h4>
      <p>Detailed tracking and documentation support insurance claims and cost recovery efforts after a recall event.</p>
    </div>
    <div class="feature">
      <h4>Purpose-Built for Food</h4>
      <p>Unlike generic recall tools, Instant Recall is designed exclusively for the food industry, with workflows tailored to food safety regulations and supply chains.</p>
    </div>
  </div>
</div>

<section class="cta">
  <h2>Accelerate Your Recall Response</h2>
  <p>See how Instant Recall can protect your customers, your organization, and your brand.</p>
  <a href="/contact-instant-recall" class="btn">Get Started</a>
</section>`;

  return renderPage({
    title: "Instant Recall -- The Leader in Food Recall Preparedness and Response",
    description:
      "Protecting Your Customers, Your Organization and Your Brand",
    path: "/",
    jsonLd: JSON_LD,
    body,
  });
}
