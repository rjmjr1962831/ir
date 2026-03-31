import { renderPage } from "../shared/layout.ts";

export function renderSchedule(): string {
  const body = `
<section class="hero" style="background-image:url('/images/iStock-835970896.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Book an Appointment</h1>
  </div>
</section>

<div class="container">
  <div class="schedule-section">
    <p>Please follow the instructions below to book an appointment to learn more about Instant Recall's services.</p>
    <p style="margin-top:2rem">To schedule an appointment, please contact us:</p>
    <div style="margin-top:1.5rem">
      <p><strong style="color:#00afec">Sales (Toll-Free):</strong> <a href="tel:+18884004786" style="color:rgba(255,255,255,.85)">(888) 400-4786</a></p>
      <p><strong style="color:#00afec">Email:</strong> <a href="mailto:sales@instantrecall.com" style="color:rgba(255,255,255,.85)">sales@instantrecall.com</a></p>
    </div>
    <div style="margin-top:2rem">
      <a href="/contact-instant-recall" style="display:inline-block;background:#00afec;color:#272727;padding:.85rem 2.5rem;font-weight:600;font-size:.9rem;letter-spacing:1px;text-transform:uppercase">Contact Us</a>
    </div>
  </div>
</div>`;

  return renderPage({
    title: "Book an Appointment | Instant Recall",
    description:
      "Book an Appointment. Schedule a meeting to learn more about Instant Recall's food recall preparedness and response services.",
    path: "/schedule",
    body,
  });
}
