import { renderPage } from "../shared/layout.ts";

export function renderSchedule(): string {
  const body = `
<section class="hero" style="background-image:url('/images/iStock-685238966.webp')">
  <div class="hero-overlay" style="background:rgba(0,0,0,0.4)"></div>
  <div class="hero-content">
    <h1>Book an Appointment</h1>
  </div>
</section>

<div class="container">
  <div class="schedule-section">
    <p>Please follow the instructions below to book an appointment to learn more about Instant Recall's services.</p>
    <iframe
      src="https://app.squarespacescheduling.com/schedule.php?owner=23981430&ref=sched_block"
      title="Schedule Appointment"
      width="100%"
      style="min-height:680px;border:0"
      frameborder="0"
    ></iframe>
  </div>
</div>`;

  return renderPage({
    title: "Book an Appointment | Instant Recall\u2122",
    description:
      "Book an Appointment. Schedule a meeting to learn more about Instant Recall's food recall preparedness and response services.",
    path: "/schedule",
    body,
  });
}
