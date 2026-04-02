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
<div class="support-page" style="background:#fff;color:#272727">
  <div class="container" style="max-width:700px;padding:3.5rem 2rem 4rem">
    <h1 style="font-size:2.4rem;font-weight:700;color:#272727;text-transform:uppercase;letter-spacing:1.34px;margin-bottom:.5rem">Support Request</h1>
    <h3 style="font-size:1.1rem;font-weight:300;color:#3e3e3e;margin-bottom:2.5rem">Please complete the form below</h3>

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
        <p class="field-desc">Please include your affected location ID or name, if applicable, and a detailed description of your concern.</p>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>

    <div class="support-note">
      <p>Support requests are processed within 1 business day. If you require immediate assistance, please call <a href="tel:+18886004786">(888) 600-4786</a>.</p>
    </div>
  </div>
</div>

<style>
.support-page{min-height:60vh}
.support-form{display:flex;flex-direction:column;gap:1.5rem}
.form-group{display:flex;flex-direction:column;gap:.4rem}
.form-group label{font-size:.9rem;font-weight:600;color:#272727;text-transform:uppercase;letter-spacing:0.5px}
.req{color:#d62828}
.field-desc{font-size:.8rem;color:#6e6e6e;margin:0;font-weight:300}
.form-group input,.form-group textarea{background:#fff;border:1px solid #d9d9d9;border-radius:4px;padding:.75rem 1rem;color:#272727;font-size:.95rem;font-family:inherit;transition:border-color 0.2s}
.form-group input:focus,.form-group textarea:focus{outline:none;border-color:#00afec}
.form-group textarea{resize:vertical;min-height:120px}
.support-form .btn{align-self:flex-start;background:#00afec;color:#fff;padding:.85rem 2.5rem;border-radius:0;font-weight:600;font-size:.9rem;letter-spacing:1px;text-transform:uppercase;cursor:pointer;border:none;font-family:inherit;transition:background 0.2s}
.support-form .btn:hover{background:#33c4ff}
.support-note{margin-top:2rem;padding:1.5rem;background:#f6f6f6;border:1px solid #e0e0e0;border-radius:4px}
.support-note p{font-size:.9rem;color:#3e3e3e;margin:0;font-weight:300}
.support-note a{color:#00afec;font-weight:600}
</style>`;

  return renderPage({
    title: "Support Request | Instant Recall\u2122",
    description:
      "Submit a support request to the Instant Recall team. Support requests are processed within 1 business day. For immediate assistance, call (888) 600-4786.",
    path: "/support-request",
    jsonLd: JSON_LD,
    body,
  });
}
