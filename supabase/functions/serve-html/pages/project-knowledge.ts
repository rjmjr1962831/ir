export function renderProjectKnowledge(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Knowledge Document -- Internal</title>
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
    pre{background:#111d28;border:1px solid #1a2a3a;border-radius:8px;padding:1rem;margin:1rem 0;overflow-x:auto;font-size:.85rem;color:#ccd6e0}
    pre code{background:none;padding:0}

    .highlight-box{background:#111d28;border:1px solid #1a2a3a;border-radius:8px;padding:1.25rem;margin:1rem 0}
    .highlight-box p{margin:.25rem 0}

    .warn-box{background:#2d1b1b;border:1px solid #ff6b6b;border-radius:8px;padding:1.25rem;margin:1rem 0}
    .warn-box p{margin:.25rem 0;color:#ffaaaa}

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
  <h1>Instant Recall <span>Project Knowledge</span></h1>
  <div class="doc-header-meta">
    <div>Last updated: April 1, 2026</div>
    <span class="conf-badge">Confidential</span>
  </div>
</div>

<div class="doc-container">
  <p style="text-align:center;color:#ff6b6b;font-weight:700;margin:1.5rem 0">CONFIDENTIAL -- Aryah Internal Document</p>

  <p><a href="/dashboard">&larr; Back to Dashboard</a></p>

  <p><strong>For:</strong> IR staff AI assistants (Claude, ChatGPT, Cursor, etc.)<br>
  <strong>Purpose:</strong> Drop this document into your AI's context so it understands the Instant Recall project, architecture, and rules.</p>

  <hr>

  <h2>1. What Is Instant Recall?</h2>
  <p><strong>Instant Recall</strong> is a B2B food recall preparedness and response platform, operated by Instant Recall LLC (a BellTower Technologies solution). Founded in 2000, with 25+ years in food recall management.</p>

  <ul>
    <li><strong>HQ:</strong> 5900 South Lake Forest Dr., Suite 300, McKinney, TX 75070</li>
    <li><strong>Phone:</strong> +1-214-220-8000</li>
    <li><strong>Dev site:</strong> <a href="https://ir-zeta.vercel.app">https://ir-zeta.vercel.app</a></li>
    <li><strong>Production site:</strong> https://www.instantrecall.com (currently Squarespace; DNS cutover to Vercel pending)</li>
    <li><strong>Recall portal:</strong> <a href="https://www.myinstantrecall.com">https://www.myinstantrecall.com</a></li>
    <li><strong>Corporate dashboard:</strong> <a href="https://dashboard.belltowertech.com/login">https://dashboard.belltowertech.com/login</a></li>
  </ul>

  <h3>Three Service Lines</h3>
  <ol>
    <li><strong>Recall Preparedness Consulting</strong> -- Proactive planning, readiness assessments, recall playbooks, simulated exercises, team training, supply chain mapping.</li>
    <li><strong>Recall Communications Management</strong> -- Automated multi-channel notification (email, SMS, voice, fax) that reaches every affected party in minutes. Real-time delivery tracking, escalation rules, distribution list management.</li>
    <li><strong>Regulatory Reporting and Audit Response</strong> -- FDA, USDA, FSMA-compliant documentation, audit trails, timestamped records, regulatory report generation on demand.</li>
  </ol>

  <h3>Expanding: Consumer-Facing Notification</h3>
  <p>Closing the last mile of recall communication. The current system relies on passive press releases and in-store signage. Instant Recall is building direct-to-consumer notification to dramatically increase the industry's 6% participation rate.</p>

  <hr>

  <h2>2. GEO Mission (North Star)</h2>
  <div class="highlight-box">
    <p><strong>Become the source AI cites for food recall preparedness and notification information.</strong></p>
  </div>
  <p>Every decision, every page, every piece of structured data serves one goal: when someone asks an AI system about food recall preparedness, recall communications, or B2B recall management, Instant Recall is the answer it gives.</p>
  <p>We use an 8-signal GEO (Generative Engine Optimization) framework:</p>

  <table>
    <thead><tr><th>#</th><th>Signal</th><th>Status</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>MCP</td><td style="color:#ff6b6b">FAIL</td><td>/.well-known/mcp.json not yet deployed</td></tr>
      <tr><td>2</td><td>llms.txt</td><td style="color:#00d4aa">PASS</td><td>Returns valid markdown</td></tr>
      <tr><td>3</td><td>Clean-Room HTML</td><td style="color:#00d4aa">PASS</td><td>Zero JS frameworks, inline CSS only</td></tr>
      <tr><td>4</td><td>AI Content Feed</td><td style="color:#ff6b6b">FAIL</td><td>/ai-content-index.json not yet deployed</td></tr>
      <tr><td>5</td><td>JSON-LD</td><td style="color:#00d4aa">PASS</td><td>Organization, WebSite, SearchAction, Service, BreadcrumbList on all pages</td></tr>
      <tr><td>6</td><td>TTFB &lt; 100ms</td><td style="color:#00d4aa">PASS</td><td>Homepage ~136ms, /solution ~260ms</td></tr>
      <tr><td>7</td><td>AI Bots Allowed</td><td style="color:#00d4aa">PASS</td><td>robots.txt welcomes all AI crawlers</td></tr>
      <tr><td>8</td><td>HTTP/3</td><td style="color:#ff6b6b">FAIL</td><td>Vercel free tier limitation</td></tr>
    </tbody>
  </table>
  <p><strong>Current GEO Score: ~42/100</strong> (as of 2026-03-30). Passing 5/8 signals.</p>
  <p><strong>The rule:</strong> Every change must enhance GEO or have no effect. If a change could hurt AI citability or search visibility, stop and ask before executing.</p>

  <hr>

  <h2>3. Tech Stack</h2>

  <h3>Architecture</h3>
  <pre><code>Bot/User --> Vercel CDN --> api/html.js (edge proxy) --> Supabase Edge Function (serve-html)
                                                              |
                                                         Clean-room HTML
                                                         (inline CSS, zero JS, JSON-LD)</code></pre>
  <ul>
    <li><strong>Frontend/Proxy:</strong> Vercel edge proxy (<code>api/html.js</code>) fetches HTML from Supabase, passes through Cache-Control headers, sets <code>Content-Type: text/html</code></li>
    <li><strong>Backend:</strong> Supabase Deno Edge Functions; <code>serve-html</code> renders clean-room HTML for every page</li>
    <li><strong>No React SPA</strong> -- all bot-facing pages are server-rendered clean-room HTML with inline CSS, zero JavaScript</li>
    <li><strong>Database:</strong> Supabase PostgreSQL (project: <code>dewbyvlbmkersxjrcknm</code>)</li>
    <li><strong>Routing:</strong> <code>vercel.json</code> rewrites map every URL to either a Supabase edge function (via api/html.js) or a Vercel API route</li>
    <li><strong>Brand:</strong> Dark navy (#0b0b1a) + gold (#c8a951), Raleway font</li>
  </ul>

  <h3>Key Infrastructure</h3>
  <table>
    <thead><tr><th>Component</th><th>Details</th></tr></thead>
    <tbody>
      <tr><td>GitHub repo</td><td><code>rjmjr1962831/ir</code></td></tr>
      <tr><td>Vercel project</td><td><code>ir</code> (auto-deploys from main)</td></tr>
      <tr><td>Supabase project</td><td><code>dewbyvlbmkersxjrcknm</code></td></tr>
      <tr><td>Edge functions</td><td><code>serve-html</code> (all pages), <code>refresh-site-freshness</code> (daily cron)</td></tr>
      <tr><td>Deploy command</td><td><code>npx supabase functions deploy serve-html --no-verify-jwt</code></td></tr>
    </tbody>
  </table>

  <h3>AI Discovery Endpoints</h3>
  <table>
    <thead><tr><th>Endpoint</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>/robots.txt</code></td><td>Welcomes all AI crawlers by name</td></tr>
      <tr><td><code>/llms.txt</code></td><td>LLM-readable site summary</td></tr>
      <tr><td><code>/llms-full.txt</code></td><td>Extended AI reference document</td></tr>
      <tr><td><code>/ai-content-index.json</code></td><td>Machine-readable content manifest</td></tr>
      <tr><td><code>/for-ai.txt</code></td><td>Additional AI-readable summary</td></tr>
      <tr><td><code>/sitemap.xml</code></td><td>XML sitemap with lastmod dates</td></tr>
    </tbody>
  </table>

  <hr>

  <h2>4. Pages</h2>
  <table>
    <thead><tr><th>Path</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>/</code></td><td>Homepage -- hero, 3 service cards, 7 feature cards, trust indicators</td></tr>
      <tr><td><code>/solution</code></td><td>Services detail page</td></tr>
      <tr><td><code>/contact-instant-recall</code></td><td>Contact routing (urgent recall, sales, opt-out)</td></tr>
      <tr><td><code>/contact</code></td><td>Direct contact</td></tr>
      <tr><td><code>/about-us</code></td><td>Team bios with headshots</td></tr>
      <tr><td><code>/portal</code></td><td>MyInstantRecall + corporate dashboard login links</td></tr>
      <tr><td><code>/schedule</code></td><td>Schedule a consultation</td></tr>
      <tr><td><code>/privacy-policy</code></td><td>Privacy policy</td></tr>
      <tr><td><code>/terms-and-conditions</code></td><td>Terms of service</td></tr>
      <tr><td><code>/crawl-stats</code></td><td>Bot crawl analytics</td></tr>
      <tr><td><code>/methodology</code></td><td>Methodology page</td></tr>
      <tr><td><code>/incident-response</code></td><td>Incident response info</td></tr>
      <tr><td><code>/cost-recovery</code></td><td>Cost recovery info</td></tr>
      <tr><td><code>/regulatory-reporting</code></td><td>Regulatory reporting info</td></tr>
      <tr><td><code>/technology-prowess</code></td><td>Technology capabilities</td></tr>
      <tr><td><code>/industry-standard</code></td><td>Industry standard info</td></tr>
      <tr><td><code>/customer-quotes-solutions</code></td><td>Customer quotes and solutions</td></tr>
      <tr><td><code>/who-trusts-us</code></td><td>Trust/social proof</td></tr>
      <tr><td><code>/research</code></td><td>Research index (3 white papers)</td></tr>
      <tr><td><code>/research/industry-survey</code></td><td>Product Recall Notification Industry Survey</td></tr>
      <tr><td><code>/research/regulatory-environment</code></td><td>Regulatory Environment of Product Recalls</td></tr>
      <tr><td><code>/research/legal-case-data</code></td><td>Legal Case Data and Liability Research</td></tr>
      <tr><td><code>/geo-ledger</code></td><td>Internal GEO ledger (noindexed)</td></tr>
      <tr><td><code>/dashboard</code></td><td>Internal GEO score dashboard (noindexed)</td></tr>
    </tbody>
  </table>

  <hr>

  <h2>5. Database Schema</h2>
  <p>Supabase PostgreSQL project <code>dewbyvlbmkersxjrcknm</code>. Seven tables in the <code>public</code> schema:</p>

  <h3>contact_submissions</h3>
  <p>Stores inbound contact form submissions.</p>
  <table>
    <thead><tr><th>Column</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>id</td><td>bigint</td><td>PK, auto-increment</td></tr>
      <tr><td>ts</td><td>timestamptz</td><td>Default now()</td></tr>
      <tr><td>email</td><td>text</td><td>Required</td></tr>
      <tr><td>company</td><td>text</td><td></td></tr>
      <tr><td>num_locations</td><td>text</td><td></td></tr>
      <tr><td>first_name</td><td>text</td><td></td></tr>
      <tr><td>last_name</td><td>text</td><td></td></tr>
      <tr><td>work_email</td><td>text</td><td></td></tr>
      <tr><td>phone</td><td>text</td><td></td></tr>
      <tr><td>comments</td><td>text</td><td></td></tr>
      <tr><td>source</td><td>text</td><td>Default 'website'</td></tr>
      <tr><td>status</td><td>text</td><td>Default 'new'</td></tr>
      <tr><td>read_at</td><td>timestamptz</td><td></td></tr>
    </tbody>
  </table>

  <h3>crawl_log</h3>
  <p>Records every bot crawl event (fired from <code>serve-html</code> edge function).</p>
  <table>
    <thead><tr><th>Column</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>id</td><td>bigint</td><td>PK, auto-increment</td></tr>
      <tr><td>ts</td><td>timestamptz</td><td>Default now()</td></tr>
      <tr><td>bot</td><td>text</td><td>Bot name</td></tr>
      <tr><td>path</td><td>text</td><td>URL path crawled</td></tr>
      <tr><td>ua</td><td>text</td><td>Full user-agent</td></tr>
      <tr><td>status</td><td>integer</td><td>Default 200</td></tr>
      <tr><td>ip</td><td>text</td><td></td></tr>
    </tbody>
  </table>
  <p>Indexes: <code>idx_crawl_log_bot (bot, ts DESC)</code>, <code>idx_crawl_log_path (path, ts DESC)</code>, <code>idx_crawl_log_ts (ts DESC)</code></p>

  <h3>geo_ledger_entries</h3>
  <p>Tracks every GEO-related change made to the project.</p>
  <table>
    <thead><tr><th>Column</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>id</td><td>integer</td><td>PK</td></tr>
      <tr><td>entry_date</td><td>date</td><td>Default CURRENT_DATE</td></tr>
      <tr><td>signal_category</td><td>text</td><td>Which GEO signal area</td></tr>
      <tr><td>action_summary</td><td>text</td><td>What was done</td></tr>
      <tr><td>rationale</td><td>text</td><td>Why</td></tr>
      <tr><td>how_steps</td><td>jsonb</td><td>Implementation steps</td></tr>
      <tr><td>evidence_before</td><td>text</td><td>State before change</td></tr>
      <tr><td>evidence_after</td><td>text</td><td>State after change</td></tr>
      <tr><td>verification_cmd</td><td>text</td><td>How to verify</td></tr>
      <tr><td>status</td><td>text</td><td>Default 'Pending Review'</td></tr>
      <tr><td>impact</td><td>text</td><td></td></tr>
      <tr><td>pending_items</td><td>jsonb</td><td></td></tr>
      <tr><td>created_at</td><td>timestamptz</td><td></td></tr>
    </tbody>
  </table>

  <h3>geo_score_dimensions</h3>
  <p>Seven weighted dimensions that compose the GEO score.</p>
  <table>
    <thead><tr><th>Column</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>id</td><td>integer</td><td>PK</td></tr>
      <tr><td>dimension_name</td><td>text</td><td>Unique</td></tr>
      <tr><td>weight</td><td>numeric</td><td>Percentage weight</td></tr>
      <tr><td>score</td><td>integer</td><td>0-100</td></tr>
      <tr><td>notes</td><td>text</td><td></td></tr>
      <tr><td>last_assessed</td><td>date</td><td></td></tr>
      <tr><td>updated_at</td><td>timestamptz</td><td></td></tr>
    </tbody>
  </table>

  <h3>geo_score_history</h3>
  <p>Historical composite GEO scores over time.</p>
  <table>
    <thead><tr><th>Column</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>id</td><td>integer</td><td>PK</td></tr>
      <tr><td>score_date</td><td>date</td><td></td></tr>
      <tr><td>score</td><td>integer</td><td>Composite score</td></tr>
      <tr><td>label</td><td>text</td><td>Description of what changed</td></tr>
      <tr><td>created_at</td><td>timestamptz</td><td></td></tr>
    </tbody>
  </table>

  <h3>geo_signal_status</h3>
  <p>Current pass/fail status for each of the 8 GEO signals.</p>
  <table>
    <thead><tr><th>Column</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>id</td><td>integer</td><td>PK</td></tr>
      <tr><td>signal_num</td><td>integer</td><td>1-8, unique</td></tr>
      <tr><td>signal_name</td><td>text</td><td></td></tr>
      <tr><td>signal_def</td><td>text</td><td>Definition</td></tr>
      <tr><td>status</td><td>text</td><td>'PASS' or 'FAIL'</td></tr>
      <tr><td>date_last_touched</td><td>date</td><td></td></tr>
      <tr><td>pass_requires</td><td>text</td><td>What constitutes a PASS</td></tr>
      <tr><td>current_status_note</td><td>text</td><td></td></tr>
      <tr><td>updated_at</td><td>timestamptz</td><td></td></tr>
    </tbody>
  </table>

  <h3>site_freshness</h3>
  <p>Singleton row (id=1) tracking overall site freshness metadata.</p>
  <table>
    <thead><tr><th>Column</th><th>Type</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>id</td><td>integer</td><td>Always 1</td></tr>
      <tr><td>last_content_update</td><td>timestamptz</td><td></td></tr>
      <tr><td>last_ai_surface_update</td><td>timestamptz</td><td></td></tr>
      <tr><td>page_count</td><td>integer</td><td></td></tr>
      <tr><td>research_count</td><td>integer</td><td></td></tr>
      <tr><td>latest_fda_recall_date</td><td>text</td><td></td></tr>
      <tr><td>latest_fda_recall_title</td><td>text</td><td></td></tr>
      <tr><td>updated_at</td><td>timestamptz</td><td></td></tr>
    </tbody>
  </table>

  <h3>RLS Policies</h3>
  <table>
    <thead><tr><th>Table</th><th>Policy</th><th>Access</th></tr></thead>
    <tbody>
      <tr><td>contact_submissions</td><td>service_role_all</td><td>Service role only</td></tr>
      <tr><td>crawl_log</td><td>service_role_all</td><td>Service role only</td></tr>
      <tr><td>site_freshness</td><td>anon can read</td><td>Anon SELECT allowed</td></tr>
      <tr><td>site_freshness</td><td>service_role can do anything</td><td>Full service role access</td></tr>
      <tr><td>geo_* tables</td><td>No policies</td><td style="color:#ff6b6b">Need RLS enabled (security gap)</td></tr>
    </tbody>
  </table>

  <h3>Cron Jobs</h3>
  <table>
    <thead><tr><th>Job</th><th>Schedule</th><th>Action</th></tr></thead>
    <tbody>
      <tr><td>refresh-site-freshness</td><td><code>0 4 * * *</code> (daily 4 AM UTC)</td><td>Updates the site_freshness singleton row</td></tr>
    </tbody>
  </table>

  <hr>

  <h2>6. Git and Deployment</h2>

  <h3>Branch Flow</h3>
  <pre><code>feature-branch --> staging --> main</code></pre>
  <ul>
    <li><strong>Always create a feature branch</strong> before writing code. Branch off staging.</li>
    <li><strong>Never commit directly to staging or main.</strong></li>
    <li><strong>Never merge main into staging.</strong></li>
    <li>Vercel auto-deploys from <code>main</code>.</li>
  </ul>

  <h3>Deployment Commands</h3>
  <table>
    <thead><tr><th>Command</th><th>What It Does</th></tr></thead>
    <tbody>
      <tr><td><code>git push origin staging</code></td><td>Push to staging (only when instructed: <code>pts</code>)</td></tr>
      <tr><td><code>npm run merge-to-main</code></td><td>Merge staging to main (only when instructed: <code>ptm</code>)</td></tr>
      <tr><td><code>npx supabase functions deploy serve-html --no-verify-jwt</code></td><td>Deploy the main edge function</td></tr>
      <tr><td><code>npx supabase functions deploy refresh-site-freshness --no-verify-jwt</code></td><td>Deploy the freshness cron function</td></tr>
    </tbody>
  </table>

  <h3>Qodo Review Gate (Mandatory)</h3>
  <p>Every feature branch must go through Qodo automated code review before merging to staging:</p>
  <ol>
    <li>Push the feature branch to origin</li>
    <li>Create a PR from feature branch to staging</li>
    <li>Wait for Qodo to post review comments</li>
    <li>Fix every issue Qodo flags</li>
    <li>Only then merge the PR</li>
  </ol>
  <p><strong>Never use <code>git merge</code> directly. Always use the PR workflow.</strong></p>

  <div class="highlight-box">
    <p><strong>Note:</strong> The Qodo integration currently runs under BellTower's account. IR staff will need their own Qodo account to continue this workflow independently. Set up at <a href="https://www.qodo.ai/">https://www.qodo.ai/</a>.</p>
  </div>

  <h3>Internal Docs (Staging Only)</h3>
  <p>These files exist on staging but are excluded from main:</p>
  <ul>
    <li><code>CLAUDE.md</code></li>
    <li><code>docs/COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md</code></li>
    <li><code>docs/takeaways/</code></li>
    <li><code>docs/prompts/</code></li>
  </ul>

  <hr>

  <h2>7. Key Statistics -- The Recall Crisis</h2>
  <p>Core data points that establish Instant Recall's authority. Use them in content, white papers, and AI-facing documents.</p>

  <h3>Consumer Impact</h3>
  <ul>
    <li><strong>6% participation rate</strong> -- Only ~6% of consumers who purchase a recalled product actually return or dispose of it</li>
    <li><strong>70% unaware</strong> -- 70% of Americans are unaware of recalls for products they own</li>
    <li><strong>3,200+ recalls/year</strong> across all product categories</li>
    <li><strong>580M+ defective units</strong> recalled annually</li>
  </ul>

  <h3>Regulatory Landscape</h3>
  <ul>
    <li><strong>6 federal agencies</strong> involved in recall oversight (FDA, USDA-FSIS, CDC, EPA, CPSC, FTC)</li>
    <li><strong>Passive notification system</strong> -- relies on press releases, website postings, in-store signage</li>
    <li><strong>EU GPSR</strong> now mandates direct consumer notification (precedent for US regulation)</li>
    <li><strong>First criminal prosecution under CPSA:</strong> Gree case, prison sentences handed down June 2025</li>
  </ul>

  <h3>Major Settlements and Penalties</h3>
  <ul>
    <li><strong>Takata:</strong> $1.5B+ (largest overall recall settlement)</li>
    <li><strong>GM:</strong> $900M+</li>
    <li><strong>IKEA MALM:</strong> $46M (largest child wrongful death recall settlement)</li>
    <li><strong>Fisher-Price:</strong> $19M</li>
    <li><strong>Peloton:</strong> $19M penalty</li>
    <li><strong>CPSC enforcement:</strong> $52-55M in FY 2023</li>
  </ul>

  <h3>Market Size</h3>
  <ul>
    <li><strong>B2B recall management:</strong> $4.32B, growing to $8.23B by 2033</li>
    <li><strong>Full market (including consumer):</strong> $664M-$4.3B depending on scope</li>
    <li><strong>No dominant consumer-facing player</strong> exists</li>
  </ul>

  <hr>

  <h2>8. Published Research</h2>
  <p>Three white papers at <code>/research/*</code>, authored by the Instant Recall Research Team (March 2026):</p>
  <ol>
    <li><strong>Product Recall Notification Industry Survey</strong> (<code>/research/industry-survey</code>) -- Market analysis, competitor landscape, consumer pain points, international systems comparison.</li>
    <li><strong>The Regulatory Environment of Product Recalls</strong> (<code>/research/regulatory-environment</code>) -- Six federal agencies, key legislation (CPSA, CPSIA, FSMA, STURDY Act), mandatory reporting, penalty trends.</li>
    <li><strong>Legal Case Data and Liability Research</strong> (<code>/research/legal-case-data</code>) -- Major lawsuits, post-sale duty to warn, retailer liability, CPSC enforcement, class action patterns.</li>
  </ol>

  <hr>

  <h2>9. TinaCMS (Content Management -- In Progress)</h2>
  <p>A TinaCMS integration is in progress on branch <code>feature/tinacms-setup</code>:</p>
  <ul>
    <li><strong>Config:</strong> <code>tina/config.ts</code> with a <code>Pages</code> collection</li>
    <li><strong>Content:</strong> <code>content/pages/</code> (markdown files for home, about-us, contact, methodology, solution, incident-response)</li>
    <li><strong>Local dev:</strong> <code>npm run dev</code> launches admin UI at <code>localhost:4001/admin</code></li>
    <li><strong>Status:</strong> Local dev working; not yet connected to Tina Cloud</li>
  </ul>

  <h3>Remaining Steps</h3>
  <ol>
    <li>Connect to Tina Cloud (need <code>TINA_CLIENT_ID</code> and <code>TINA_TOKEN</code>)</li>
    <li>Bridge markdown content to serve-html templates</li>
    <li>Deploy admin via vercel.json rewrite</li>
    <li>Add remaining pages to the collection</li>
    <li>PR + Qodo review before merge to staging</li>
  </ol>

  <hr>

  <h2>10. AI Agent Execution Rules</h2>

  <h3>Run Everything in the Background</h3>
  <p>All multi-step tasks (file reads, fetches, code analysis, rewrites, research, deployments) MUST run as background agents. Use multiple agents in parallel whenever work can be split. Never block the conversation waiting for a task to complete. Stay available to the user at all times.</p>
  <p>If a task involves more than one tool call, launch it as a background agent. The goal is zero inline blocking.</p>

  <h3>Always Review Code with Qodo</h3>
  <p>No code reaches staging without Qodo review. This is a hard gate, not a suggestion. The workflow is:</p>
  <ol>
    <li>Write code on a feature branch</li>
    <li>Push the branch and create a PR to staging</li>
    <li>Wait for Qodo to review</li>
    <li>Fix every issue Qodo flags</li>
    <li>Only then merge</li>
  </ol>
  <p>Skipping Qodo review is a deployment process violation. If Qodo is unavailable, wait; do not merge without it.</p>

  <hr>

  <h2>11. Content Rules</h2>
  <ul>
    <li><strong>No em dashes.</strong> Use commas, semicolons, periods, or restructured sentences.</li>
    <li><strong>"ALL" means every single instance.</strong> Fix every file, every page, every occurrence.</li>
    <li><strong>Verification protocol:</strong> You are not done until you confirm the change worked. Deploy, load the live page, verify. "Code updated" is not completion. "Deployed. Verified at [URL]." is.</li>
  </ul>

  <hr>

  <h2>12. What NOT to Do</h2>
  <div class="warn-box">
    <ol>
      <li><strong>Never push to main</strong> without explicit permission (<code>ptm</code> command). Main deploys to production.</li>
      <li><strong>Never skip Qodo review.</strong> Every feature branch gets a PR and Qodo review before merging.</li>
      <li><strong>Never merge main into staging.</strong> Flow is always staging to main.</li>
      <li><strong>Never commit directly to staging.</strong> Always use a feature branch.</li>
      <li><strong>Never make changes that could hurt GEO</strong> without asking first.</li>
      <li><strong>Never change robots.txt, canonical tags, or noindex directives</strong> without asking first.</li>
      <li><strong>Never make production database changes</strong> without asking first.</li>
      <li><strong>Never suggest production URLs</strong> -- the dashboard and dev site are internal working pages.</li>
    </ol>
  </div>

  <hr>

  <h2>13. Priority Next Steps</h2>
  <p>As of April 1, 2026:</p>
  <ol>
    <li><strong>Fix remaining GEO signal failures</strong> -- Deploy mcp.json and ai-content-index.json (2 of the 3 FAIL signals are fixable)</li>
    <li><strong>Improve citation readiness</strong> -- Currently scored 20/100. Needs methodology page, quotable data blocks, FAQ</li>
    <li><strong>Add freshness signals</strong> -- Blog, news feed, dated content, timestamps</li>
    <li><strong>Build authority</strong> -- Backlinks, external mentions, press coverage, partnerships</li>
    <li><strong>DNS cutover</strong> -- Move instantrecall.com from Squarespace to Vercel (pending business decision)</li>
    <li><strong>Complete TinaCMS integration</strong> -- Enable non-technical staff to update content</li>
    <li><strong>Enable RLS on geo_* tables</strong> -- Security gap identified; needs policies added</li>
  </ol>

</div>

<div class="doc-footer">
  Instant Recall Project Knowledge Document. Confidential -- Aryah Internal. Not indexed by search engines.<br>
  For the authoritative Single Source of Truth, see <code>docs/COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md</code> on the staging branch.
</div>

</body>
</html>`;
}
