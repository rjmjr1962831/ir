import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { renderHome } from "./pages/home.ts";
import { renderSolution } from "./pages/solution.ts";
import { renderContact } from "./pages/contact.ts";
import { renderPortal } from "./pages/portal.ts";
import { renderPrivacy } from "./pages/privacy.ts";
import { renderTerms } from "./pages/terms.ts";
import { handleGeoLedger } from "./pages/geo-ledger.ts";
import { renderAbout } from "./pages/about.ts";

const ROUTES: Record<string, () => string> = {
  "/": renderHome,
  "/solution": renderSolution,
  "/contact-instant-recall": renderContact,
  "/portal": renderPortal,
  "/privacy-policy": renderPrivacy,
  "/terms-and-conditions": renderTerms,
  "/about-us": renderAbout,
};

function render404(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found -- Instant Recall</title>
  <style>
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f8f9fa;color:#1a1a2e;text-align:center}
    .wrap{max-width:500px;padding:2rem}
    h1{font-size:3rem;color:#0d47a1;margin-bottom:.5rem}
    p{font-size:1.1rem;color:#666;margin-bottom:1.5rem}
    a{color:#0d47a1;font-weight:600}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>404</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Return to Home</a>
  </div>
</body>
</html>`;
}

serve(async (req: Request) => {
  const url = new URL(req.url);
  // Use x-forwarded-path header if present (set by Vercel proxy), else use URL path
  let path = req.headers.get("x-forwarded-path") || url.pathname;

  // Normalize: strip trailing slash (except root)
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  // Routes that need request access (for auth, query params, etc.)
  if (path === "/geo-ledger") {
    return await handleGeoLedger(req);
  }

  const renderFn = ROUTES[path];

  if (renderFn) {
    const html = renderFn();
    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=3600",
      },
    });
  }

  return new Response(render404(), {
    status: 404,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
});
