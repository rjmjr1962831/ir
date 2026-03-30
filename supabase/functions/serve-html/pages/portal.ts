import { renderPage } from "../shared/layout.ts";

export function renderPortal(): string {
  const body = `
<section class="hero">
  <h1>Login</h1>
  <p>Access your Instant Recall portal or corporate dashboard.</p>
</section>

<div class="container">
  <h2 class="section-title">Choose Your Portal</h2>
  <div class="route-options">
    <a href="https://www.myinstantrecall.com" class="route-option" rel="noopener">Instant Recall Portal</a>
    <a href="https://dashboard.belltowertech.com/login" class="route-option secondary" rel="noopener">Corporate FSQA Dashboard</a>
  </div>
</div>`;

  return renderPage({
    title: "Login -- Instant Recall",
    description:
      "Access the Instant Recall portal or Corporate FSQA Dashboard.",
    path: "/portal",
    body,
  });
}
