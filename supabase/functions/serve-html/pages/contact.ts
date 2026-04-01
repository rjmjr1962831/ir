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

export const CONTACT_FORM_CSS = `
.contact-form-section{padding:4rem 2rem}
.contact-form-section .section-inner{max-width:720px;margin:0 auto}
.contact-form-section h2{font-size:1.8rem;font-weight:700;margin-bottom:.5rem;color:#272727}
.contact-form-section .form-subtitle{font-size:1.05rem;line-height:1.8;font-weight:300;color:#3e3e3e;margin-bottom:2rem}
.contact-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.contact-form-grid .full-width{grid-column:1/-1}
.contact-form-grid label{display:block;font-size:.85rem;font-weight:600;color:#272727;margin-bottom:.3rem}
.contact-form-grid input,.contact-form-grid select,.contact-form-grid textarea{width:100%;padding:.65rem .75rem;border:1px solid #ccc;border-radius:4px;font-size:.95rem;font-family:inherit;background:#fff;color:#272727}
.contact-form-grid input:focus,.contact-form-grid select:focus,.contact-form-grid textarea:focus{outline:none;border-color:#00afec;box-shadow:0 0 0 2px rgba(0,175,236,.15)}
.contact-form-grid textarea{resize:vertical;min-height:100px}
.contact-form-grid .btn-submit{background:#00afec;color:#fff;border:none;padding:.85rem 2.5rem;font-size:1rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;border-radius:4px;cursor:pointer;transition:background .2s}
.contact-form-grid .btn-submit:hover{background:#0099d4}
.contact-form-grid .btn-submit:disabled{opacity:.6;cursor:not-allowed}
@media(max-width:600px){.contact-form-grid{grid-template-columns:1fr}}
`;

export const CONTACT_FORM_HTML = `
<div class="contact-form-grid" style="max-width:720px;margin:0 auto">
  <div class="full-width">
    <label for="cf-email">Email <span style="color:#c00">*</span></label>
    <input type="email" id="cf-email" name="email" required placeholder="you@example.com">
  </div>
  <div class="full-width">
    <label for="cf-company">Company</label>
    <input type="text" id="cf-company" name="company" placeholder="Your company name">
  </div>
  <div class="full-width">
    <label for="cf-locations">Number of Locations</label>
    <select id="cf-locations" name="num_locations">
      <option value="">Select...</option>
      <option value="1-10">1 - 10</option>
      <option value="11-50">11 - 50</option>
      <option value="51-200">51 - 200</option>
      <option value="201-500">201 - 500</option>
      <option value="501-1000">501 - 1,000</option>
      <option value="1001+">1,001+</option>
    </select>
  </div>
  <div>
    <label for="cf-fname">First Name</label>
    <input type="text" id="cf-fname" name="first_name" placeholder="First name">
  </div>
  <div>
    <label for="cf-lname">Last Name</label>
    <input type="text" id="cf-lname" name="last_name" placeholder="Last name">
  </div>
  <div class="full-width">
    <label for="cf-workemail">Work Email</label>
    <input type="email" id="cf-workemail" name="work_email" placeholder="work@company.com">
  </div>
  <div class="full-width">
    <label for="cf-phone">Phone</label>
    <input type="tel" id="cf-phone" name="phone" placeholder="+1 (555) 123-4567">
  </div>
  <div class="full-width">
    <label for="cf-comments">Comments</label>
    <textarea id="cf-comments" name="comments" placeholder="Tell us about your needs..."></textarea>
  </div>
  <div class="full-width" style="text-align:center;margin-top:.5rem">
    <button type="submit" class="btn-submit">SUBMIT</button>
  </div>
</div>
`;

export const CONTACT_FORM_JS = `
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  var btn = this.querySelector('button[type=submit]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  try {
    var data = Object.fromEntries(new FormData(this));
    var res = await fetch('/api/contact-submit', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    var json = await res.json();
    if (json.ok) {
      this.innerHTML = '<div style="text-align:center;padding:2rem"><h3 style="color:#272727">Thank you!</h3><p style="color:#3e3e3e">We will be in touch shortly.</p></div>';
    } else {
      btn.textContent = 'SUBMIT';
      btn.disabled = false;
      alert(json.error || 'Something went wrong. Please try again.');
    }
  } catch(err) {
    btn.textContent = 'SUBMIT';
    btn.disabled = false;
    alert('Connection error. Please try again.');
  }
});
`;

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
  <p style="text-align:center;margin-top:2rem;font-size:.9rem;color:rgba(255,255,255,.5)">Were you contacted in error? Request to be put on the <a href="https://instantrecall.com/stop" target="_blank" style="color:#00afec">Do Not Contact</a> list.</p>
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

<style>${CONTACT_FORM_CSS}</style>

<section class="section-white contact-form-section">
  <div class="section-inner">
    <h2>Accelerate Your Recall Response</h2>
    <p class="form-subtitle">See how Instant Recall can protect your customers, your organization, and your brand.</p>
    <script src="https://js-na2.hsforms.net/forms/embed/48681528.js" defer></script>
    <div class="hs-form-frame" data-region="na2" data-form-id="2759faa2-dc43-43f4-8d4d-8fb442c2d0bf" data-portal-id="48681528"></div>
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
