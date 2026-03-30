import { renderPage } from "../shared/layout.ts";

export function renderPortal(): string {
  const body = `
<section class="hero" style="background-image:url('/images/iStock-835970896.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Instant Recall Customer Portal</h1>
    <p>Please select from one of the following:</p>
  </div>
</section>

<div class="container">
  <div class="route-options">
    <a href="https://myinstantrecall.com/" class="route-option" rel="noopener">My Instant Recall Portal</a>
    <a href="https://dashboard.belltowertech.com/login" class="route-option secondary" rel="noopener">Corporate FSQA Dashboard</a>
  </div>
</div>`;

  return renderPage({
    title: "Login Portal | Instant Recall",
    description:
      "My Instant Recall Portal | Corporate FSQA Dashboard. Access your Instant Recall portal or corporate dashboard.",
    path: "/portal",
    body,
  });
}
