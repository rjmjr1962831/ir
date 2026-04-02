import { renderPage } from "../shared/layout.ts";

export function renderSchedule(): string {
  const body = `
<style>
  .schedule-page { background: #fff; color: #272727; }
  .schedule-page .schedule-section { max-width: 800px; margin: 0 auto; padding: 2rem; text-align: center; }
  .schedule-page .schedule-section p { color: #3e3e3e; font-size: 1.05rem; margin-bottom: 2rem; font-weight: 400; }
</style>

<section class="hero" style="background-image:url('/images/iStock-685238966.webp')">
  <div class="hero-overlay" style="background:rgba(0,0,0,0.4)"></div>
  <div class="hero-content">
    <h1>Book an Appointment</h1>
  </div>
</section>

<div class="schedule-page">
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
