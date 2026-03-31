import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Support Request",
  description:
    "Submit a support request to the Instant Recall team. Support requests are processed within 1 business day.",
  url: "https://www.instantrecall.com/support-request",
  publisher: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
    telephone: "+1-888-600-4786",
  },
});

export function renderSupportRequest(): string {
  const body = `
<section class="hero" style="min-height:320px;padding:3.5rem 2rem">
  <div class="hero-overlay" style="background:rgba(39,39,39,0.85)"></div>
  <div class="hero-content">
    <h1>Support Request</h1>
    <p>Please complete the form below</p>
  </div>
</section>

<div class="container" style="max-width:700px;padding:3rem 2rem 4rem">
  <form class="support-form" action="/support-request" method="POST">
    <div class="form-group">
      <label for="name">Name <span class="req">*</span></label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="phone">Phone <span class="req">*</span></label>
      <input type="tel" id="phone" name="phone" required>
    </div>
    <div class="form-group">
      <label for="email">Email <span class="req">*</span></label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="subject">Subject <span class="req">*</span></label>
      <input type="text" id="subject" name="subject" required>
    </div>
    <div class="form-group">
      <label for="message">Message <span class="req">*</span></label>
      <p class="field-desc">Please include your affected location ID or name, if applicable, and a detailed description of your question or concern.</p>
      <textarea id="message" name="message" rows="6" required></textarea>
    </div>
    <button type="submit" class="btn">Submit</button>
  </form>

  <div class="support-note">
    <p>Support requests are processed within 1 business day. If you require immediate assistance, please call <a href="tel:+18886004786">(888) 600-4786</a>.</p>
  </div>
</div>

<style>
.support-form{display:flex;flex-direction:column;gap:1.5rem}
.form-group{display:flex;flex-direction:column;gap:.4rem}
.form-group label{font-size:.9rem;font-weight:600;color:#00afec;text-transform:uppercase;letter-spacing:0.5px}
.req{color:#d62828}
.field-desc{font-size:.8rem;color:rgba(255,255,255,.5);margin:0;font-weight:300}
.form-group input,.form-group textarea{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:.75rem 1rem;color:#fff;font-size:.95rem;font-family:inherit;transition:border-color 0.2s}
.form-group input:focus,.form-group textarea:focus{outline:none;border-color:#00afec}
.form-group textarea{resize:vertical;min-height:120px}
.support-form .btn{align-self:flex-start;cursor:pointer;border:none;font-family:inherit}
.support-note{margin-top:2rem;padding:1.5rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:4px}
.support-note p{font-size:.9rem;color:rgba(255,255,255,.7);margin:0;font-weight:300}
.support-note a{color:#00afec;font-weight:600}
</style>`;

  return renderPage({
    title: "Support Request | Instant Recall",
    description:
      "Submit a support request to the Instant Recall team. Support requests are processed within 1 business day. For immediate assistance, call (888) 600-4786.",
    path: "/support-request",
    jsonLd: JSON_LD,
    body,
  });
}
