import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Recall Technology Platform",
  provider: { "@type": "Organization", name: "Instant Recall LLC" },
  description:
    "Purpose-built recall infrastructure with mobile-friendly web portals, multi-channel notifications, real-time dashboards, and automated escalation workflows.",
});

export function renderTechnologyProwess(): string {
  const body = `
<section class="hero" style="background-image:url('/images/TechnologyProwess.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Technology Prowess</h1>
    <p>Our mobile-friendly web portals and recall infrastructure are purpose-built to optimize recall speed and compliance rates, empowering your locations to quickly understand, do, and report, when it counts most.</p>
  </div>
</section>

<div class="container">
  <div class="cards">
    <div class="card">
      <h3>Purpose-Built Recall Infrastructure</h3>
      <p>Our platform was designed from the ground up for recall execution. Unlike generic tools adapted for recalls, every feature exists to accelerate response times, improve compliance rates, and protect your brand during critical events.</p>
    </div>
    <div class="card">
      <h3>Mobile-Friendly Web Portals</h3>
      <p>Field teams access recall instructions, confirm actions, and report status from any device. Responsive portals ensure your locations can act immediately, whether on a desktop in the back office or a phone on the receiving dock.</p>
    </div>
    <div class="card">
      <h3>Multi-Channel Notification Engine</h3>
      <p>Reach every stakeholder through the channel that works best for them. Our notification engine delivers recall alerts via voice, email, SMS, and web portal, ensuring no location is left uninformed.</p>
    </div>
  </div>
</div>

<section class="features-section">
  <div style="max-width:1100px;margin:0 auto">
    <h2 class="section-title">Platform Capabilities</h2>
    <p class="section-subtitle">Built for speed, visibility, and compliance. Every component of our platform serves a single mission: getting the right information to the right people at the right time so they can act with confidence.</p>
  </div>

  <div class="features">
    <div class="feature">
      <h4>Real-Time Dashboards and Progress Tracking</h4>
      <p>Monitor recall progress across every location in real time. Dashboards provide a 360-degree view of notification delivery, confirmation status, and completion rates, giving leadership full visibility throughout the event.</p>
    </div>
    <div class="feature">
      <h4>Automated Escalation Workflows</h4>
      <p>When locations fail to respond, the system escalates automatically. Configurable escalation paths ensure that unresponsive sites are flagged and followed up on without manual intervention, reducing the risk of gaps in recall execution.</p>
    </div>
    <div class="feature">
      <h4>Integration With Existing Supply Chain Systems</h4>
      <p>Our platform connects with your existing supply chain and distribution systems to streamline recall targeting. Automated data flows eliminate manual list-building and reduce the time between decision and action.</p>
    </div>
    <div class="feature">
      <h4>Cloud-Based Platform Accessible From Anywhere</h4>
      <p>Launch and manage recalls from any location, at any time. Our cloud-based architecture means there is no software to install, no VPN required, and no dependency on being in the office when a recall strikes.</p>
    </div>
  </div>
</section>

<section class="cta">
  <h2>See the Platform in Action</h2>
  <p>Request a demo and discover how our purpose-built technology transforms recall response.</p>
  <a href="/contact-instant-recall" class="btn">Contact Us</a>
</section>`;

  return renderPage({
    title: "Technology Prowess | Instant Recall",
    description:
      "Purpose-built recall infrastructure with mobile-friendly web portals, multi-channel notifications, real-time dashboards, and automated escalation workflows from Instant Recall.",
    path: "/technology-prowess",
    jsonLd: JSON_LD,
    body,
  });
}
