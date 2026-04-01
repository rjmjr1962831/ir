export function renderDevWorkflow(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Instant Recall -- Developer Workflow</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,sans-serif;background:#0f1923;color:#e8e8e8;line-height:1.7;min-height:100vh}
    a{color:#00d4aa;text-decoration:none}
    a:hover{text-decoration:underline;color:#33e0be}

    .doc-header{background:linear-gradient(135deg,#0f1923 0%,#1a2a3a 100%);border-bottom:2px solid #00d4aa;padding:1.5rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
    .doc-header h1{font-size:1.5rem;font-weight:800;color:#fff;letter-spacing:.5px}
    .doc-header h1 span{color:#00d4aa}
    .doc-header-meta{text-align:right;font-size:.85rem;color:#8899aa}
    .conf-badge{display:inline-block;padding:2px 10px;border-radius:12px;font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;background:#ff6b6b;color:#fff}

    .doc-container{max-width:900px;margin:0 auto;padding:2rem}

    h2{font-size:1.2rem;font-weight:700;color:#00d4aa;text-transform:uppercase;letter-spacing:1.5px;margin:2.5rem 0 1rem;padding-bottom:.5rem;border-bottom:1px solid #1a2a3a}
    h3{font-size:1rem;font-weight:700;color:#fff;margin:1.5rem 0 .5rem}
    p{margin:.75rem 0;color:#ccd6e0;font-size:.95rem}
    strong{color:#e8e8e8}
    ul,ol{margin:.75rem 0 .75rem 1.5rem;color:#ccd6e0;font-size:.95rem}
    li{margin:.35rem 0}
    hr{border:none;border-top:1px solid #1a2a3a;margin:2rem 0}

    table{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.9rem}
    th{padding:.6rem .75rem;text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:1px;color:#556677;border-bottom:2px solid #1a2a3a;background:#111d28}
    td{padding:.6rem .75rem;border-bottom:1px solid #1a2a3a;color:#ccd6e0}
    tr:hover td{background:rgba(0,212,170,.03)}

    code{font-family:"SF Mono",Monaco,Consolas,monospace;font-size:.85em;background:#111d28;padding:2px 6px;border-radius:4px;color:#00d4aa}
    pre{background:#111d28;border:1px solid #1a2a3a;border-radius:8px;padding:1.25rem;margin:1rem 0;overflow-x:auto}
    pre code{background:none;padding:0;font-size:.85rem;color:#ccd6e0;line-height:1.6}

    .highlight-box{background:#111d28;border:1px solid #1a2a3a;border-radius:8px;padding:1.25rem;margin:1rem 0}
    .highlight-box p{margin:.25rem 0}

    .checklist{list-style:none;margin-left:0;padding-left:0}
    .checklist li{padding-left:1.5rem;position:relative;margin:.35rem 0}
    .checklist li::before{content:"\\2610";position:absolute;left:0;color:#556677}

    .doc-footer{text-align:center;padding:2rem;font-size:.8rem;color:#556677;border-top:1px solid #1a2a3a;margin-top:2rem}

    @media(max-width:600px){
      .doc-header{flex-direction:column;align-items:flex-start}
      .doc-header-meta{text-align:left}
      table{font-size:.8rem}
      th,td{padding:.4rem .5rem}
    }
  </style>
</head>
<body>

<div class="doc-header">
  <h1>Instant Recall <span>Developer Workflow</span></h1>
  <div class="doc-header-meta">
    <div>Last updated: March 31, 2026</div>
    <span class="conf-badge">Confidential</span>
  </div>
</div>

<div class="doc-container">
  <p style="text-align:center;color:#ff6b6b;font-weight:700;margin:1.5rem 0">CONFIDENTIAL -- Instant Recall Internal Document</p>

  <p><a href="/dashboard">&larr; Back to Dashboard</a></p>

  <p>Practical, step-by-step reference for any developer (human or AI) working on the Instant Recall codebase.<br>
  Repository: <code>rjmjr1962831/ir</code></p>

  <hr>

  <!-- SECTION 1 -->
  <h2>1. Environment Setup</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li><strong>Git</strong> (any recent version)</li>
    <li><strong>Node.js</strong> (v18+) and npm</li>
    <li><strong>Supabase CLI</strong> (<code>npm install -g supabase</code> or <code>npx supabase</code>)</li>
    <li><strong>Vercel CLI</strong> (optional, for manual deploys: <code>npm install -g vercel</code>)</li>
  </ul>

  <h3>Clone and Branch</h3>
  <pre><code>git clone https://github.com/rjmjr1962831/ir.git
cd ir
git checkout staging
npm install</code></pre>

  <h3>Environment Variables</h3>
  <p>Create a <code>.env</code> file in the project root with these keys (never commit actual values):</p>
  <table>
    <thead><tr><th>Variable</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>SUPABASE_URL</code></td><td>Supabase project URL (<code>https://dewbyvlbmkersxjrcknm.supabase.co</code>)</td></tr>
      <tr><td><code>SUPABASE_SERVICE_ROLE_KEY</code></td><td>Supabase service role key (used by edge functions and API routes)</td></tr>
      <tr><td><code>SUPABASE_ACCESS_TOKEN</code></td><td>Personal access token for Supabase CLI deployments</td></tr>
      <tr><td><code>VERCEL_TOKEN</code></td><td>Vercel API token (used for force-redeploy commands)</td></tr>
    </tbody>
  </table>

  <hr>

  <!-- SECTION 2 -->
  <h2>2. Architecture Overview</h2>

  <h3>Request Flow</h3>
  <pre><code>Browser/Bot
    |
    v
Vercel Edge (vercel.json rewrites)
    |  e.g. /solution -> /api/html?path=%2Fsolution
    v
api/html.js  (Vercel Edge Function -- thin proxy)
    |  Fetches from Supabase, forwards path via x-forwarded-path header
    v
Supabase Edge Function: serve-html/index.ts  (Deno runtime)
    |  Matches path in ROUTES map, calls page renderer
    v
Page renderer (e.g. pages/solution.ts)
    |  Returns clean-room HTML string
    v
shared/layout.ts  (wraps body in full HTML document with header, footer, JSON-LD, meta tags)
    |
    v
Response flows back through api/html.js which sets Content-Type: text/html</code></pre>

  <p><strong>Why the proxy?</strong> Supabase gateway forces <code>Content-Type: text/plain</code> on edge function responses. The Vercel proxy (<code>api/html.js</code>) re-wraps the response with <code>Content-Type: text/html; charset=utf-8</code> and passes through upstream <code>Cache-Control</code> headers.</p>

  <h3>Directory Structure</h3>
  <pre><code>ir/
├── api/                          # Vercel Edge Functions (proxy + AI discovery endpoints)
│   ├── html.js                   # Main proxy: forwards to Supabase serve-html
│   ├── sitemap.js                # /sitemap.xml
│   ├── llms.js                   # /llms.txt
│   ├── llms-full.js              # /llms-full.txt
│   ├── ai-content-index.js       # /ai-content-index.json
│   ├── robots.js                 # /robots.txt
│   ├── for-ai.js                 # /for-ai, /for-ai.txt
│   ├── mcp.js                    # /.well-known/mcp.json
│   ├── contact-submit.js         # Contact form handler
│   └── nightly-refresh.js        # Cron job (runs daily at 5 AM UTC)
│
├── supabase/functions/serve-html/ # The main edge function (Deno)
│   ├── index.ts                  # Router: imports pages, maps paths, bot detection, logCrawl
│   ├── shared/
│   │   ├── layout.ts             # renderPage() -- wraps body in full HTML document
│   │   ├── styles.ts             # CSS constant -- shared styles for all pages
│   │   ├── freshness.ts          # FreshnessData cache from site_freshness table
│   │   └── citations.ts          # Citation blocks + CSS for AI-facing data sections
│   └── pages/                    # One file per page
│       ├── home.ts
│       ├── solution.ts
│       ├── contact.ts
│       ├── about.ts
│       ├── research-index.ts
│       ├── ... (28 page files total)
│       └── work-log.ts
│
├── vercel.json                   # Rewrites, headers, cron config
├── public/                       # Static assets (images, favicon)
├── admin/                        # Admin panel static files
└── CLAUDE.md                     # Project SSoT and execution rules</code></pre>

  <h3>Shared Modules</h3>
  <table>
    <thead><tr><th>Module</th><th>What it provides</th></tr></thead>
    <tbody>
      <tr><td><code>shared/layout.ts</code></td><td><code>renderPage({ title, description, path, jsonLd?, body })</code> -- wraps any page body in a full HTML document with header, footer, canonical URL, Open Graph tags, BreadcrumbList JSON-LD, WebPage JSON-LD with freshness dates, and HubSpot script</td></tr>
      <tr><td><code>shared/styles.ts</code></td><td><code>CSS</code> constant -- all shared CSS (header, hero, cards, features, footer, responsive breakpoints) inlined into every page via <code>&lt;style&gt;</code> tag</td></tr>
      <tr><td><code>shared/freshness.ts</code></td><td><code>getFreshness()</code> / <code>setCurrentFreshness()</code> / <code>getCurrentFreshness()</code> -- fetches and caches <code>site_freshness</code> table data (last content update, page count, latest FDA recall, etc.)</td></tr>
      <tr><td><code>shared/citations.ts</code></td><td><code>homeCitationBlock()</code>, <code>methodologyBlock()</code>, <code>CITATION_CSS</code> -- pre-formatted, citable data blocks with Schema.org Dataset JSON-LD for AI systems to quote</td></tr>
    </tbody>
  </table>

  <hr>

  <!-- SECTION 3 -->
  <h2>3. How to Add a New Page</h2>

  <h3>Step 1: Create the page file</h3>
  <p>Create <code>supabase/functions/serve-html/pages/my-new-page.ts</code>:</p>
  <pre><code>import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "My New Page Title",
  description: "Description of the page for structured data.",
  url: "https://www.instantrecall.com/my-new-page",
});

export function renderMyNewPage(): string {
  return renderPage({
    title: "My New Page Title | Instant Recall",
    description: "Meta description for search engines and AI systems (under 160 chars).",
    path: "/my-new-page",
    jsonLd: JSON_LD,
    body: \`
      &lt;section class="hero" style="background-image:url('/images/your-hero.jpg')"&gt;
        &lt;div class="hero-overlay" style="background:rgba(0,0,0,0.65)"&gt;&lt;/div&gt;
        &lt;div class="hero-content"&gt;
          &lt;h1&gt;My New Page Heading&lt;/h1&gt;
          &lt;p&gt;Subheading text here.&lt;/p&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;div class="container"&gt;
        &lt;h2 class="section-title"&gt;Section Title&lt;/h2&gt;
        &lt;p class="section-subtitle"&gt;Section description.&lt;/p&gt;

        &lt;div class="cards"&gt;
          &lt;article class="card"&gt;
            &lt;h3&gt;Card Title&lt;/h3&gt;
            &lt;p&gt;Card content with semantic HTML.&lt;/p&gt;
          &lt;/article&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    \`,
  });
}</code></pre>

  <h3>Step 2: Add import and route in index.ts</h3>
  <p>Open <code>supabase/functions/serve-html/index.ts</code>:</p>
  <p><strong>Add the import</strong> (alphabetical with existing imports):</p>
  <pre><code>import { renderMyNewPage } from "./pages/my-new-page.ts";</code></pre>
  <p><strong>Add the route</strong> to the <code>ROUTES</code> map:</p>
  <pre><code>const ROUTES: Record&lt;string, () =&gt; string&gt; = {
  // ... existing routes ...
  "/my-new-page": renderMyNewPage,
};</code></pre>

  <h3>Step 3: Add vercel.json rewrite</h3>
  <p>Open <code>vercel.json</code> and add to the <code>rewrites</code> array:</p>
  <pre><code>{ "source": "/my-new-page", "destination": "/api/html?path=%2Fmy-new-page" }</code></pre>
  <p>Note: The <code>path</code> query parameter value must be URL-encoded (<code>/</code> becomes <code>%2F</code>). For nested paths like <code>/research/something</code>, encode as <code>%2Fresearch%2Fsomething</code>.</p>

  <h3>Step 4: Add to sitemap</h3>
  <p>Open <code>api/sitemap.js</code> and add to the <code>urls</code> array:</p>
  <pre><code>{ loc: "/my-new-page", priority: "0.7", changefreq: "monthly" },</code></pre>

  <h3>Step 5: Add to llms.txt</h3>
  <p>Open <code>api/llms.js</code> and add a line to the text body:</p>
  <pre><code>- [My New Page Title](https://www.instantrecall.com/my-new-page): Brief description of the page content.</code></pre>
  <p>Also update <code>api/llms-full.js</code> if the page has substantive content worth including in the full version.</p>

  <h3>Step 6: Add to ai-content-index.json</h3>
  <p>Open <code>api/ai-content-index.js</code> and add to the <code>pages</code> array:</p>
  <pre><code>{
  url: "https://www.instantrecall.com/my-new-page",
  title: "My New Page Title",
  description: "Brief description.",
  content_type: "informational",  // or "research", "service", "legal"
  last_updated: lastUpdated,
},</code></pre>

  <h3>Step 7: Add breadcrumb name (for SEO)</h3>
  <p>Open <code>shared/layout.ts</code> and add to the <code>BREADCRUMB_NAMES</code> map:</p>
  <pre><code>"/my-new-page": "My New Page Title",</code></pre>

  <h3>Step 8: Add dashboard card (if applicable)</h3>
  <p>If the page should appear on the internal dev dashboard, update <code>pages/dashboard.ts</code> to include a card for it.</p>

  <h3>Checklist</h3>
  <ul class="checklist">
    <li>Page file created in <code>pages/</code></li>
    <li>Import added to <code>index.ts</code></li>
    <li>Route added to <code>ROUTES</code> map in <code>index.ts</code></li>
    <li>Rewrite added to <code>vercel.json</code></li>
    <li>Breadcrumb name added to <code>layout.ts</code></li>
    <li>Entry added to <code>api/sitemap.js</code></li>
    <li>Entry added to <code>api/llms.js</code> (and <code>llms-full.js</code> if appropriate)</li>
    <li>Entry added to <code>api/ai-content-index.js</code></li>
    <li>JSON-LD structured data included in the page</li>
    <li>Page uses semantic HTML, inline CSS, no client-side JS rendering</li>
  </ul>

  <hr>

  <!-- SECTION 4 -->
  <h2>4. How to Modify an Existing Page</h2>

  <h3>Find the page file</h3>
  <p>The naming convention maps URL paths to filenames:</p>
  <table>
    <thead><tr><th>URL</th><th>File</th></tr></thead>
    <tbody>
      <tr><td><code>/</code></td><td><code>pages/home.ts</code></td></tr>
      <tr><td><code>/solution</code></td><td><code>pages/solution.ts</code></td></tr>
      <tr><td><code>/contact-instant-recall</code></td><td><code>pages/contact.ts</code> (<code>renderContact</code>)</td></tr>
      <tr><td><code>/contact</code></td><td><code>pages/contact.ts</code> (<code>renderContactDirect</code>)</td></tr>
      <tr><td><code>/research</code></td><td><code>pages/research-index.ts</code></td></tr>
      <tr><td><code>/research/industry-survey</code></td><td><code>pages/research-industry.ts</code></td></tr>
      <tr><td><code>/who-trusts-us</code></td><td><code>pages/press.ts</code></td></tr>
    </tbody>
  </table>
  <p>Check the <code>ROUTES</code> map in <code>index.ts</code> to find the exact render function and trace it to its import.</p>

  <h3>Edit the content</h3>
  <p>All page content is TypeScript template literals returning HTML strings. Edit the HTML directly. Use the shared CSS classes from <code>styles.ts</code> (<code>.hero</code>, <code>.container</code>, <code>.cards</code>, <code>.card</code>, <code>.section-title</code>, <code>.section-subtitle</code>, <code>.features</code>, <code>.feature</code>).</p>

  <h3>Deploy and verify</h3>
  <p>After editing, deploy the edge function (see Section 6) and verify with curl:</p>
  <pre><code>curl -s -H "Cache-Control: no-cache" "https://ir-zeta.vercel.app/my-page" | head -50</code></pre>

  <hr>

  <!-- SECTION 5 -->
  <h2>5. Git Workflow (Critical)</h2>

  <h3>The Rules</h3>
  <ol>
    <li><strong>ALWAYS create a feature branch from staging before writing code.</strong></li>
    <li><strong>NEVER commit directly to staging or main.</strong></li>
    <li><strong>ALWAYS run code through Qodo review before merging to staging.</strong></li>
    <li><strong>Branch flow is one-way: staging -&gt; main. Never merge main into staging.</strong></li>
  </ol>

  <h3>Step-by-Step</h3>
  <pre><code># 1. Start from staging
cd C:\\Users\\rober\\ir
git checkout staging
git pull origin staging

# 2. Create a feature branch
git checkout -b feature/my-change

# 3. Make your changes
# ... edit files ...

# 4. Commit
git add &lt;specific-files&gt;
git commit -m "Add my-new-page with JSON-LD and citation blocks"

# 5. Push feature branch
git push origin feature/my-change

# 6. Create a PR to staging
gh pr create --base staging --title "Add my-new-page" --body "Description of changes"

# 7. WAIT FOR QODO REVIEW (mandatory gate)
# Poll for Qodo comments -- do not ask the user to paste them
# Fix all issues Qodo raises
# Push fixes to the feature branch

# 8. After Qodo approval, merge PR to staging
gh pr merge &lt;PR-number&gt; --merge

# 9. Deploy (see Section 6)</code></pre>

  <h3>Special Commands (only when instructed by Robert)</h3>
  <table>
    <thead><tr><th>Command</th><th>What it does</th></tr></thead>
    <tbody>
      <tr><td><code>pts</code></td><td>Push to staging: <code>git add . &amp;&amp; git commit &amp;&amp; git push origin staging</code>, then deploy edge function, then force-redeploy Vercel</td></tr>
      <tr><td><code>ptm</code></td><td>Push to main: runs <code>npm run merge-to-main</code> only. <strong>Never touch main without explicit <code>ptm</code> instruction.</strong></td></tr>
    </tbody>
  </table>

  <hr>

  <!-- SECTION 6 -->
  <h2>6. Deploying Edge Functions</h2>

  <h3>When to deploy</h3>
  <p>Any time you change files under <code>supabase/functions/serve-html/</code> (including <code>index.ts</code>, any page in <code>pages/</code>, or any shared module).</p>

  <h3>Deploy command</h3>
  <pre><code>cd C:\\Users\\rober\\ir
SUPABASE_ACCESS_TOKEN=$SUPABASE_ACCESS_TOKEN npx supabase functions deploy serve-html --no-verify-jwt --project-ref dewbyvlbmkersxjrcknm</code></pre>
  <p>(Load <code>SUPABASE_ACCESS_TOKEN</code> from <code>.env</code>)</p>

  <h3>Verify deployment</h3>
  <pre><code># Test a specific page through the full proxy chain
curl -s -H "Cache-Control: no-cache" "https://ir-zeta.vercel.app/solution" | head -20

# Test the edge function directly (returns text/plain due to Supabase gateway)
curl -s "https://dewbyvlbmkersxjrcknm.supabase.co/functions/v1/serve-html" \\
  -H "x-forwarded-path: /solution" | head -20

# Verify Content-Type through Vercel proxy
curl -sI "https://ir-zeta.vercel.app/solution" | grep -i content-type
# Should show: Content-Type: text/html; charset=utf-8</code></pre>

  <hr>

  <!-- SECTION 7 -->
  <h2>7. Deploying to Vercel</h2>

  <h3>Automatic deployment</h3>
  <p>Vercel auto-deploys from the <strong>main</strong> branch. Changes to main trigger a production build automatically.</p>

  <h3>Manual force-redeploy (clears edge cache)</h3>
  <pre><code>curl -s -X POST "https://api.vercel.com/v13/deployments?teamId=team_7PGzhT9wecJMLFkOWDGGxptE&amp;forceNew=1" \\
  -H "Authorization: Bearer $VERCEL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"ir","project":"prj_htbgIKYkHEwa0WNdPKVQ4sVy3iiE","target":"production","gitSource":{"type":"github","org":"rjmjr1962831","repo":"ir","ref":"staging"}}'</code></pre>

  <h3>When vercel.json changes take effect</h3>
  <p>Changes to <code>vercel.json</code> (rewrites, headers, crons) only take effect after a push to the deployed branch and a Vercel redeploy. If you add a new rewrite, it will not work until that deploy completes.</p>

  <hr>

  <!-- SECTION 8 -->
  <h2>8. Adding AI Discovery Content</h2>

  <h3>llms.txt and llms-full.txt</h3>
  <p>These files are generated by <code>api/llms.js</code> and <code>api/llms-full.js</code> (Vercel Edge Functions). They are NOT static files.</p>
  <ul>
    <li><strong><code>api/llms.js</code></strong>: Concise summary of the site for LLMs. Add new page entries as markdown list items.</li>
    <li><strong><code>api/llms-full.js</code></strong>: Extended version with deeper content. Add full sections for substantive pages.</li>
  </ul>
  <p>Both pull freshness data from the <code>site_freshness</code> Supabase table to show last-updated dates.</p>

  <h3>ai-content-index.json</h3>
  <p>Generated by <code>api/ai-content-index.js</code>. Add new pages to the <code>pages</code> array with <code>url</code>, <code>title</code>, <code>description</code>, <code>content_type</code>, and <code>last_updated</code>.</p>

  <h3>JSON-LD on pages</h3>
  <p>Every public page should include at least one JSON-LD block. The <code>renderPage()</code> function in <code>layout.ts</code> automatically adds:</p>
  <ul>
    <li><strong>BreadcrumbList</strong> JSON-LD (based on the path and <code>BREADCRUMB_NAMES</code> map)</li>
    <li><strong>WebPage</strong> JSON-LD (with <code>dateModified</code> from freshness data)</li>
  </ul>
  <p>For page-specific structured data, pass a <code>jsonLd</code> string to <code>renderPage()</code>:</p>
  <pre><code>const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Food Recall Response Platform",
  provider: { "@type": "Organization", name: "Instant Recall LLC" },
  description: "Description here.",
  url: "https://www.instantrecall.com/my-service",
});

export function renderMyService(): string {
  return renderPage({
    title: "...",
    description: "...",
    path: "/my-service",
    jsonLd: JSON_LD,  // &lt;-- passed here
    body: \`...\`,
  });
}</code></pre>
  <p>The <code>layout.ts</code> function will automatically inject <code>dateModified</code> into your JSON-LD objects from the freshness cache.</p>

  <h3>Sitemap</h3>
  <p>Generated by <code>api/sitemap.js</code>. Add entries to the <code>urls</code> array with <code>loc</code>, <code>priority</code>, and <code>changefreq</code>. The <code>lastmod</code> date is pulled from the <code>site_freshness</code> table automatically.</p>

  <hr>

  <!-- SECTION 9 -->
  <h2>9. GEO Rules</h2>

  <h3>Core Principle</h3>
  <p><strong>Every change must enhance GEO (Generative Engine Optimization) or be neutral.</strong> Never make a change that degrades the site's ability to be discovered, cited, and recommended by AI systems.</p>

  <h3>The 8-Signal Framework</h3>
  <p>The project tracks 8 GEO signals (stored in <code>geo_signal_status</code> table):</p>
  <ol>
    <li><strong>Structured Data</strong> -- JSON-LD on every page (Organization, WebPage, BreadcrumbList, Service, Dataset, etc.)</li>
    <li><strong>Freshness Signals</strong> -- <code>dateModified</code> in JSON-LD, <code>Last-Modified</code> header, <code>&lt;meta name="last-modified"&gt;</code> tag</li>
    <li><strong>AI Discovery Files</strong> -- <code>llms.txt</code>, <code>llms-full.txt</code>, <code>ai-content-index.json</code>, <code>robots.txt</code>, <code>for-ai.txt</code></li>
    <li><strong>Citation-Ready Content</strong> -- Semantic <code>&lt;blockquote&gt;</code> blocks with source attribution that AI systems can quote directly</li>
    <li><strong>Topical Authority</strong> -- Research pages, methodology, legal case data, industry surveys</li>
    <li><strong>Entity Clarity</strong> -- Consistent Organization/Person entities across all JSON-LD</li>
    <li><strong>Crawl Accessibility</strong> -- Bot detection + logging, clean HTML, fast response times</li>
    <li><strong>Link Headers</strong> -- HTTP <code>Link</code> headers pointing to AI discovery files (set in <code>vercel.json</code>)</li>
  </ol>

  <h3>Clean-Room HTML Requirements</h3>
  <p>All bot-facing pages MUST follow these rules:</p>
  <ul>
    <li><strong>No JavaScript rendering.</strong> All content is server-rendered HTML returned by the edge function. The page must be fully readable with JS disabled.</li>
    <li><strong>Inline CSS only.</strong> Styles are embedded via <code>&lt;style&gt;</code> tags (from <code>shared/styles.ts</code>), not external stylesheets that bots might not load.</li>
    <li><strong>Semantic HTML.</strong> Use <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;cite&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> appropriately.</li>
    <li><strong>No React SPA.</strong> This is not a single-page app. Every URL returns a complete HTML document.</li>
  </ul>

  <h3>Bot Logging</h3>
  <p>Every page response must trigger bot logging for known crawlers. This happens automatically in <code>index.ts</code>:</p>
  <pre><code>// In the ROUTES handler:
if (bot) logCrawl(bot, path, ua, 200, ip);

// For 404s:
if (bot) logCrawl(bot, path, ua, 404, ip);</code></pre>
  <p>The <code>logCrawl</code> function fires-and-forgets an INSERT to the <code>crawl_log</code> table in Supabase. The bot detection covers: GPTBot, ClaudeBot, PerplexityBot, Googlebot, Bingbot, and 30+ other patterns.</p>
  <p>If you add a page that uses a special handler (not via the <code>ROUTES</code> map), you must manually call <code>logCrawl</code>:</p>
  <pre><code>if (path === "/my-special-page") {
  const resp = await handleMySpecialPage(req);
  if (bot) logCrawl(bot, path, ua, resp.status, ip);
  return resp;
}</code></pre>

  <hr>

  <!-- SECTION 10 -->
  <h2>10. Testing and Verification</h2>

  <h3>After deploying the edge function</h3>
  <pre><code># 1. Verify the page renders through the full chain
curl -s -H "Cache-Control: no-cache" "https://ir-zeta.vercel.app/my-page"

# 2. Verify Content-Type is text/html
curl -sI -H "Cache-Control: no-cache" "https://ir-zeta.vercel.app/my-page" | grep -i content-type
# Expected: content-type: text/html; charset=utf-8

# 3. Verify JSON-LD is present
curl -s "https://ir-zeta.vercel.app/my-page" | grep -o '&lt;script type="application/ld+json"&gt;[^&lt;]*&lt;/script&gt;' | head -5

# 4. Verify Cache-Control headers
curl -sI "https://ir-zeta.vercel.app/my-page" | grep -i cache-control
# Public pages: public, max-age=60, s-maxage=86400, stale-while-revalidate=3600
# Internal pages: private, no-store

# 5. Test bot crawl logging (simulate a bot)
curl -s -H "User-Agent: GPTBot/1.0" "https://ir-zeta.vercel.app/my-page" &gt; /dev/null
# Then check crawl_log table in Supabase for the entry

# 6. Verify AI discovery files include the new page
curl -s "https://ir-zeta.vercel.app/sitemap.xml" | grep "my-page"
curl -s "https://ir-zeta.vercel.app/llms.txt" | grep "my-page"
curl -s "https://ir-zeta.vercel.app/ai-content-index.json" | grep "my-page"</code></pre>

  <h3>Structured data validation</h3>
  <p>Paste the page URL into Google's Rich Results Test (<a href="https://search.google.com/test/rich-results">https://search.google.com/test/rich-results</a>) or Schema.org's validator (<a href="https://validator.schema.org/">https://validator.schema.org/</a>) to verify JSON-LD.</p>

  <h3>Verification protocol</h3>
  <p>From CLAUDE.md: <strong>"You are not done until you confirm the change actually worked. Deploy, load the live page, verify. 'Code updated' is not completion. 'Deployed. Verified at [URL].' is."</strong></p>

  <hr>

  <!-- SECTION 11 -->
  <h2>11. Common Gotchas</h2>

  <h3>Supabase gateway forces text/plain</h3>
  <p>Supabase Edge Functions always return <code>Content-Type: text/plain</code> regardless of what you set. That is why <code>api/html.js</code> exists as a proxy -- it re-wraps the response with <code>text/html</code>. If you call the Supabase function directly, you will get plain text.</p>

  <h3>vercel.json rewrites must encode the path</h3>
  <p>The <code>destination</code> in vercel.json rewrites passes the path as a query parameter. Forward slashes must be encoded as <code>%2F</code>:</p>
  <pre><code>// CORRECT:
{ "source": "/research/industry-survey", "destination": "/api/html?path=%2Fresearch%2Findustry-survey" }

// WRONG (will break):
{ "source": "/research/industry-survey", "destination": "/api/html?path=/research/industry-survey" }</code></pre>

  <h3>Routes must be added in TWO places</h3>
  <p>A new page will not work unless you add:</p>
  <ol>
    <li>The route in <code>index.ts</code> (the <code>ROUTES</code> map)</li>
    <li>The rewrite in <code>vercel.json</code></li>
  </ol>
  <p>Missing either one means a 404. The <code>index.ts</code> route handles the Supabase side; the <code>vercel.json</code> rewrite handles the Vercel side.</p>

  <h3>Cache-Control: private vs public</h3>
  <ul>
    <li><strong>Public pages</strong> (home, solution, research, etc.): <code>public, max-age=300, s-maxage=3600</code> from the edge function; Vercel proxy upgrades to <code>public, max-age=60, s-maxage=86400, stale-while-revalidate=3600</code></li>
    <li><strong>Internal/protected pages</strong> (dashboard, crawl-stats, work-log, ai-best-practices, project-knowledge): <code>private, max-age=30</code> from the edge function; Vercel proxy converts to <code>private, no-store</code></li>
  </ul>
  <p>If your page requires authentication (token check), use <code>private</code> caching. If it is public content, use <code>public</code>.</p>

  <h3>Pages with request access (special handlers)</h3>
  <p>Most pages use the simple <code>ROUTES</code> map pattern (function takes no arguments, returns HTML string). Some pages need access to the request object (for query params, auth tokens, etc.) and are handled separately before the <code>ROUTES</code> lookup:</p>
  <pre><code>// These are handled as special cases in index.ts:
if (path === "/geo-ledger") return await handleGeoLedger(req);
if (path === "/dashboard") return await handleDashboard(req);
if (path === "/crawl-stats") return await handleCrawlStats(req);</code></pre>
  <p>If your new page needs request access, add it as a special-case <code>if</code> block before the <code>ROUTES</code> lookup, and make sure to call <code>logCrawl</code> manually.</p>

  <h3>Internal docs stay on staging</h3>
  <p>Files like <code>CLAUDE.md</code>, <code>COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md</code>, takeaways, and prompts must never be pushed to main. They live on the staging branch only.</p>

  <h3>"ALL" means every single instance</h3>
  <p>From CLAUDE.md: when fixing something across the codebase, you must grep exhaustively and fix every occurrence. Do not fix one file and assume you are done.</p>

  <h3>Never use web_fetch for live site checks</h3>
  <p>Always use <code>curl -s -H "Cache-Control: no-cache"</code> to check live pages. <code>web_fetch</code> returns stale/cached content.</p>

  <h3>No em dashes</h3>
  <p>Project style rule: never use em dashes in generated content, file edits, or responses. Use commas, semicolons, periods, or restructure the sentence.</p>

  <hr>

  <!-- QUICK REFERENCE -->
  <h2>Quick Reference Card</h2>
  <table>
    <thead><tr><th>Task</th><th>Command/Action</th></tr></thead>
    <tbody>
      <tr><td>Deploy edge function</td><td><code>SUPABASE_ACCESS_TOKEN=$SUPABASE_ACCESS_TOKEN npx supabase functions deploy serve-html --no-verify-jwt --project-ref dewbyvlbmkersxjrcknm</code></td></tr>
      <tr><td>Force Vercel redeploy</td><td>See Section 7 curl command</td></tr>
      <tr><td>Verify page renders</td><td><code>curl -s -H "Cache-Control: no-cache" "https://ir-zeta.vercel.app/PAGE"</code></td></tr>
      <tr><td>Check Content-Type</td><td><code>curl -sI "https://ir-zeta.vercel.app/PAGE" | grep content-type</code></td></tr>
      <tr><td>Check crawl logs</td><td>Query <code>crawl_log</code> table in Supabase</td></tr>
      <tr><td>Dev dashboard</td><td><code>https://ir-zeta.vercel.app/dashboard?token=&lt;TOKEN&gt;</code></td></tr>
      <tr><td>Crawl stats</td><td><code>https://ir-zeta.vercel.app/crawl-stats?token=&lt;TOKEN&gt;</code></td></tr>
      <tr><td>GEO ledger</td><td><code>https://ir-zeta.vercel.app/geo-ledger</code></td></tr>
    </tbody>
  </table>

  <hr>
  <p style="text-align:center;color:#556677;font-style:italic;margin-top:2rem">Generated from the actual IR codebase on 2026-03-31.</p>
  <p style="text-align:center;color:#ff6b6b;font-style:italic;margin-top:1rem">CONFIDENTIAL -- Instant Recall -- Do not distribute</p>
</div>

<div class="doc-footer">
  <a href="/dashboard">Back to Dashboard</a> | Instant Recall Internal Document. Not indexed by search engines.
</div>

</body>
</html>`;
}
