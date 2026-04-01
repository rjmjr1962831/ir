import { renderPage } from "../shared/layout.ts";

export function renderPortal(): string {
  const body = `
<style>
  .portal-page{background:#fff;color:#1f1f1f;padding:76px 32px}
  .portal-page h1{font-family:futura-pt,"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:46px;font-weight:700;letter-spacing:1.34px;line-height:1.4em;text-transform:uppercase;color:#1f1f1f;text-align:center;margin:0 0 1.25rem}
  .portal-page p{font-family:europa,"proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;font-size:23px;font-weight:300;letter-spacing:.43px;line-height:1.4em;color:#1f1f1f;text-align:center;margin:0 0 2rem}
  .portal-buttons{display:flex;gap:2rem;justify-content:center;max-width:900px;margin:0 auto}
  .portal-buttons a{display:inline-block;padding:21px 34px;font-family:futura-pt,"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;font-weight:500;letter-spacing:2px;text-transform:uppercase;text-align:center;text-decoration:none;border:2px solid #111;color:#111;background:transparent;transition:background-color .1s linear,color .1s linear;cursor:pointer;flex:1;max-width:400px}
  .portal-buttons a:hover{background:#111;color:#fff;text-decoration:none}
  @media(max-width:640px){
    .portal-page h1{font-size:2em}
    .portal-page p{font-size:1rem}
    .portal-page{padding:26px 32px}
    .portal-buttons{flex-direction:column;align-items:center}
    .portal-buttons a{width:100%;max-width:100%}
  }
</style>

<div class="portal-page">
  <h1>Instant Recall&#8482; Customer Portal</h1>
  <p>Please select from one of the following:</p>
  <div class="portal-buttons">
    <a href="https://myinstantrecall.com/" rel="noopener">my instant recall portal</a>
    <a href="https://dashboard.belltowertech.com/login" rel="noopener">Corporate FSQA Dashboard</a>
  </div>
</div>`;

  return renderPage({
    title: "Login Portal | Instant Recall\u2122",
    description:
      "My Instant Recall Portal | Corporate FSQA Dashboard",
    path: "/portal",
    body,
  });
}
