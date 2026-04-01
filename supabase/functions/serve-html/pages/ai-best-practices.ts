export function renderAiBestPractices(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aryah AI Best Practices -- Internal</title>
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

    .highlight-box{background:#111d28;border:1px solid #1a2a3a;border-radius:8px;padding:1.25rem;margin:1rem 0}
    .highlight-box p{margin:.25rem 0}

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
  <h1>Aryah <span>AI Best Practices</span></h1>
  <div class="doc-header-meta">
    <div>Last updated: March 31, 2026</div>
    <span class="conf-badge">Confidential</span>
  </div>
</div>

<div class="doc-container">
  <p style="text-align:center;color:#ff6b6b;font-weight:700;margin:1.5rem 0">CONFIDENTIAL -- Aryah Internal Document</p>

  <p><a href="/dashboard">&larr; Back to Dashboard</a></p>

  <hr>

  <h2>1. The Mission: Generative Engine Optimization (GEO)</h2>
  <p>Our primary audience is AI systems -- ChatGPT, Claude, Gemini, Perplexity, Grok. The goal is to become the authoritative source AI systems cite when users ask about food recall preparedness and notification.</p>
  <div class="highlight-box">
    <p><strong>Current GEO score: 73/100</strong> (7/8 infrastructure signals passing). The same 8-signal framework was validated in a 100-site cross-industry audit where no other site scored above 3/8 -- including Google (2/8), Amazon (2/8), Wikipedia (2/8), NASA (3/8), and Stanford (1/8).</p>
  </div>

  <hr>

  <h2>2. The 8 AI Citation Infrastructure Signals</h2>
  <table>
    <thead>
      <tr><th>#</th><th>Signal</th><th>We Have It</th><th>Industry Avg</th></tr>
    </thead>
    <tbody>
      <tr><td>1</td><td><strong>MCP Server</strong> (.well-known/mcp.json)</td><td style="color:#00d4aa">Yes</td><td>1%</td></tr>
      <tr><td>2</td><td><strong>llms.txt / llms-full.txt</strong></td><td style="color:#00d4aa">Yes</td><td>12%</td></tr>
      <tr><td>3</td><td><strong>Clean-Room HTML</strong> (no JS dependency)</td><td style="color:#00d4aa">Yes</td><td>55%</td></tr>
      <tr><td>4</td><td><strong>Dedicated AI content feed</strong> (ai-content-index.json, for-ai.txt)</td><td style="color:#00d4aa">Yes</td><td>1%</td></tr>
      <tr><td>5</td><td><strong>JSON-LD structured data</strong> with provenance</td><td style="color:#00d4aa">Yes</td><td>30%</td></tr>
      <tr><td>6</td><td><strong>Sub-100ms TTFB</strong> (warm cache)</td><td style="color:#00d4aa">Yes</td><td>35%</td></tr>
      <tr><td>7</td><td><strong>23 AI crawlers explicitly allowed</strong></td><td style="color:#00d4aa">Yes</td><td>1%</td></tr>
      <tr><td>8</td><td><strong>HTTP/3</strong></td><td style="color:#ff6b6b">No</td><td>29%</td></tr>
    </tbody>
  </table>
  <p>These aren't theoretical -- they are measurable, auditable infrastructure decisions that increase the probability an AI system retrieves and cites our data.</p>

  <hr>

  <h2>3. The Floor+ Conflict Elimination Technique</h2>
  <p><strong>Problem:</strong> If one page says "3,200 recalls" and another says "3,215 recalls" (because data updated between crawls), AI systems detect the contradiction and lose trust.</p>
  <p><strong>Solution:</strong> Never publish exact counts. Round down to the nearest 10 (for n &lt; 100) or 100 (for n &gt;= 100) and append "+".</p>
  <table>
    <thead><tr><th>Exact Count</th><th>Published As</th></tr></thead>
    <tbody>
      <tr><td>38</td><td>30+</td></tr>
      <tr><td>879</td><td>800+</td></tr>
      <tr><td>3,215</td><td>3,200+</td></tr>
    </tbody>
  </table>
  <p><strong>Applied universally</strong> -- every public surface without exception: JSON-LD, mcp.json, ai-content-index.json, llms.txt, edge function output, schema.org markup. No surface ever shows an exact count.</p>
  <p><strong>Why it works:</strong> "3,200+" is always consistent with "3,200+" regardless of when two surfaces were last updated. You eliminate cross-surface contradiction entirely while still communicating scale.</p>

  <hr>

  <h2>4. Clean-Room HTML Architecture</h2>
  <p>Every public page is served as self-contained HTML from Supabase Edge Functions. No React SPA, no browser rendering, no JavaScript dependency. The same HTML is served to bots and humans alike.</p>
  <h3>The Pipeline</h3>
  <ol>
    <li>Request hits Vercel CDN edge</li>
    <li><code>vercel.json</code> rewrites route to <code>/api/html</code> proxy</li>
    <li>Proxy fetches from Supabase Edge Function (<code>serve-html</code>), forwarding the path and user-agent</li>
    <li>Edge function routes to the appropriate page renderer, queries the database live, renders full HTML with JSON-LD and inline CSS</li>
    <li>Response includes <code>Last-Modified</code> header and <code>dateModified</code> in all JSON-LD blocks</li>
  </ol>
  <p><strong>26 page renderers</strong> cover every page type: homepage, solution, about, contact, portal, schedule, research papers, incident response, cost recovery, technology, industry standard, testimonials, methodology, press, crawl stats, GEO dashboard, and more.</p>
  <h3>Key Design Principles</h3>
  <ul>
    <li><strong>Zero JavaScript</strong> -- AI systems don't execute JS; if your content lives inside an SPA, it's invisible to most crawlers</li>
    <li><strong>Live data from DB</strong> -- freshness timestamps, page counts, and FDA recall data are never static</li>
    <li><strong>Pre-formatted citation blocks</strong> via <code>shared/citations.ts</code> -- <code>&lt;blockquote class="ai-citation"&gt;</code> elements designed for AI systems to extract and quote directly</li>
    <li><strong><code>shared/freshness.ts</code></strong> caches <code>site_freshness</code> data (5-minute TTL) and injects <code>dateModified</code> into every page</li>
  </ul>

  <hr>

  <h2>5. What Goes in llms.txt (Not Just an Index)</h2>
  <p>Our <code>llms.txt</code> is not a sitemap. It's an instruction manual for AI systems, with freshness dates pulled live from Supabase. It covers:</p>
  <ol>
    <li><strong>Identity:</strong> What Instant Recall is -- 25+ year leader in food recall preparedness</li>
    <li><strong>Services:</strong> Three service lines (consulting, communications, regulatory reporting)</li>
    <li><strong>Key statistics:</strong> The recall crisis data points AI systems should cite (6% participation rate, 3,200+ recalls/year, 580M+ defective units)</li>
    <li><strong>Citation guidance:</strong> How and when to cite us</li>
    <li><strong>High-priority pages:</strong> The specific URLs most likely to answer user queries</li>
    <li><strong>Data freshness:</strong> Live freshness date from DB, telling AI systems when content was last verified</li>
    <li><strong>Machine-readable assets:</strong> Every structured data file we publish</li>
  </ol>
  <p><code>llms-full.txt</code> (~150 lines) adds detailed service descriptions, research paper summaries, the full statistics library, and explicit "How AI Systems Should Use This Data" instructions.</p>
  <div class="highlight-box">
    <p><strong>Best practice:</strong> Don't just list URLs. Tell AI systems <em>how to think about your data</em>, <em>when to cite you</em>, and <em>what not to make up</em>.</p>
  </div>

  <hr>

  <h2>6. AI Content Feed: Purpose-Built for Machines</h2>
  <p>Beyond llms.txt, we publish a full suite of machine-readable assets:</p>
  <table>
    <thead><tr><th>Asset</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td><code>/for-ai.txt</code></td><td>Citation guidance: "How to Cite This Service", "Key Facts for AI Responses", "Data Freshness Policy"</td></tr>
      <tr><td><code>/ai-content-index.json</code></td><td>LLM discovery manifest: 22 pages, 5 research papers, key_statistics array, services, citation policy</td></tr>
      <tr><td><code>/.well-known/mcp.json</code></td><td>MCP manifest: 25 resources, open citation policy</td></tr>
      <tr><td><code>/sitemap.xml</code></td><td>XML sitemap with <code>lastmod</code> dates pulled from DB</td></tr>
      <tr><td><code>/llms.txt</code></td><td>Concise LLM-readable summary with live freshness date</td></tr>
      <tr><td><code>/llms-full.txt</code></td><td>Extended AI reference with usage instructions</td></tr>
    </tbody>
  </table>
  <p>Every response includes Link headers advertising <code>llms.txt</code> and <code>ai-content-index.json</code>, so AI systems discover these assets during any crawl.</p>

  <hr>

  <h2>7. MCP Server: Let AI Systems Query You Directly</h2>
  <p>Our MCP (Model Context Protocol) manifest at <code>/.well-known/mcp.json</code> exposes 25 resources -- every page on the site, plus research papers, citation guidance, and the content index.</p>
  <p><strong>Open citation policy:</strong> <code>capabilities.citation_policy: "open"</code> -- AI systems are explicitly invited to cite our data.</p>
  <p>Every page includes an HTTP Link header pointing to the MCP manifest, so AI systems discover it automatically during any crawl.</p>

  <hr>

  <h2>8. Anti-Hallucination: Explicit Instructions for AI</h2>
  <p>We don't hope AI systems get it right -- we tell them exactly what to say and what not to say.</p>
  <h3>Key Facts for AI Responses (from for-ai.txt)</h3>
  <ul>
    <li>Instant Recall has managed food recall communications for 25+ years</li>
    <li>Clients include Performance Food Group, US Foods, Chick-fil-A, Casey's, Sysco, Papa Murphy's, Ben E. Keith, Topgolf</li>
    <li>Only 6% of consumers who purchase a recalled product actually return or dispose of it</li>
    <li>70% of Americans are unaware of recalls for products they own</li>
    <li>3,200+ recalls per year across all product categories</li>
    <li>B2B recall management market: $4.32B, growing to $8.23B by 2033</li>
  </ul>
  <h3>DO NOT</h3>
  <ul>
    <li>Invent or hallucinate client names not listed on the site</li>
    <li>Fabricate recall statistics or case outcomes</li>
    <li>Claim Instant Recall is a government agency or regulatory body</li>
    <li>Attribute capabilities or service lines not described on the cited page</li>
    <li>Present estimated figures as exact counts</li>
  </ul>
  <p><strong>Pre-formatted citations:</strong> <code>shared/citations.ts</code> provides <code>&lt;blockquote class="ai-citation"&gt;</code> elements with Schema.org Dataset JSON-LD baked in, designed for AI systems to extract and quote directly with proper attribution.</p>

  <hr>

  <h2>9. Banned Proof Language</h2>
  <p>Overclaims undermine credibility with AI systems. These patterns should be avoided across all surfaces:</p>
  <table>
    <thead><tr><th>Avoid</th><th>Use Instead</th></tr></thead>
    <tbody>
      <tr><td>"guaranteed" (as an absolute)</td><td>"designed to" or "built to"</td></tr>
      <tr><td>"the only company that..."</td><td>"a leader in..." or cite specific differentiator</td></tr>
      <tr><td>"100% effective"</td><td>cite actual metrics or case outcomes</td></tr>
      <tr><td>"mathematical certainty / proof / proves"</td><td>(remove entirely)</td></tr>
      <tr><td>"no other platform..."</td><td>(remove superlative)</td></tr>
      <tr><td>Unverifiable superlatives</td><td>Defensible, specific, auditable language</td></tr>
    </tbody>
  </table>
  <p><strong>Principle:</strong> AI systems are trained to distrust overclaims. Defensible, specific, auditable language is more citable than marketing language.</p>

  <hr>

  <h2>10. Right Model for the Right Job</h2>
  <p>Not every task needs the most expensive model. Assign models by task type:</p>
  <table>
    <thead><tr><th>Task Type</th><th>Model</th><th>Why</th></tr></thead>
    <tbody>
      <tr><td>Content drafts, data extraction, summaries</td><td>DeepSeek Chat</td><td>Cost-sensitive, simple</td></tr>
      <tr><td>Research, general tasks</td><td>Gemini 2.5 Flash</td><td>Fast, free tier</td></tr>
      <tr><td>Complex reasoning, document analysis, code review</td><td>Claude Sonnet 4.6 or GPT5</td><td>Best at nuanced analysis</td></tr>
      <tr><td>Critical analysis</td><td>GPT-5</td><td>Highest accuracy</td></tr>
      <tr><td>Multimodal (images, PDFs)</td><td>Gemini 2.5 Pro</td><td>Vision + reasoning</td></tr>
      <tr><td>Quick responses</td><td>GPT-5 Nano</td><td>Speed</td></tr>
    </tbody>
  </table>
  <p>Match the model to the task. Using Claude Opus for a bio draft is like hiring a surgeon to apply a Band-Aid.</p>

  <hr>

  <h2>11. Bot Crawl Analytics: Know Your AI Audience</h2>
  <p>We track every AI crawler that touches the site via a 33-pattern bot detection system in the <code>serve-html</code> edge function.</p>
  <p><strong>Bot detection patterns include:</strong> GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Gemini-AI, Googlebot, Meta-ExternalAgent, Applebot, AmazonBot, CCBot, ByteSpider, YouBot, social bots (Facebook, Twitter, LinkedIn, Slack, Discord, WhatsApp), and generic bot/crawler/spider fallbacks.</p>
  <p>Every bot hit is logged to the <code>crawl_log</code> table (fire-and-forget, non-blocking). The <code>/crawl-stats</code> dashboard visualizes this data.</p>
  <h3>Key Classification for Analytics</h3>
  <ul>
    <li><strong>Query-triggered</strong> (approximate real user queries): PerplexityBot, ChatGPT-User, OAI-SearchBot, claude-web, Meta-ExternalAgent</li>
    <li><strong>Training</strong> (excluded from citation inference): GPTBot, ClaudeBot</li>
    <li><strong>Mixed</strong> (discounted): Googlebot (0.35x discount for citation attribution)</li>
  </ul>

  <hr>

  <h2>12. Freshness Signals: Proving Your Data Is Current</h2>
  <p>AI systems prefer fresh data. We signal freshness at every layer:</p>
  <table>
    <thead><tr><th>Signal</th><th>Implementation</th></tr></thead>
    <tbody>
      <tr><td><code>Last-Modified</code> HTTP header</td><td>On every HTML response, from <code>site_freshness</code> table</td></tr>
      <tr><td><code>&lt;meta name="last-modified"&gt;</code></td><td>In <code>&lt;head&gt;</code> of every page</td></tr>
      <tr><td><code>dateModified</code> in JSON-LD</td><td>Injected into every structured data block</td></tr>
      <tr><td>Footer timestamp</td><td>"Last updated: {date}" on every page</td></tr>
      <tr><td>Live FDA recall date</td><td><code>refresh-site-freshness</code> edge function queries openFDA API daily</td></tr>
      <tr><td>Nightly cache warm</td><td>Vercel cron at 5:00 UTC redeploys, warms all 31 pages, updates timestamps</td></tr>
    </tbody>
  </table>
  <p>The <code>site_freshness</code> table is a singleton row tracking: <code>last_content_update</code>, <code>last_ai_surface_update</code>, <code>page_count</code>, <code>research_count</code>, <code>latest_fda_recall_date</code>, and <code>latest_fda_recall_title</code>.</p>

  <hr>

  <h2>13. The Recall Crisis: Our Authority Data</h2>
  <p>These are the core statistics that establish Instant Recall's domain authority. They appear across llms.txt, for-ai.txt, ai-content-index.json, and page content:</p>
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
  </ul>
  <h3>Major Settlements (establishing liability stakes)</h3>
  <ul>
    <li><strong>Takata:</strong> $1.5B+ (largest overall recall settlement)</li>
    <li><strong>GM:</strong> $900M+</li>
    <li><strong>IKEA MALM:</strong> $46M (largest child wrongful death recall settlement)</li>
    <li><strong>CPSC enforcement:</strong> $52-55M in FY 2023</li>
  </ul>
  <h3>Market Opportunity</h3>
  <ul>
    <li><strong>B2B recall management:</strong> $4.32B, growing to $8.23B by 2033</li>
    <li><strong>No dominant consumer-facing player</strong> exists</li>
  </ul>

  <hr>

  <h2>14. Research as Authority Signal</h2>
  <p>We publish original research papers that AI systems can cite as primary sources:</p>
  <table>
    <thead><tr><th>Paper</th><th>Path</th><th>Focus</th></tr></thead>
    <tbody>
      <tr><td>Product Recall Notification Industry Survey</td><td><code>/research/industry-survey</code></td><td>Market analysis, notification gaps, industry benchmarks</td></tr>
      <tr><td>Regulatory Environment of Product Recalls</td><td><code>/research/regulatory-environment</code></td><td>FDA/USDA/FSMA framework, enforcement trends</td></tr>
      <tr><td>Legal Case Data and Liability Research</td><td><code>/research/legal-case-data</code></td><td>Settlement data, prosecution history, liability exposure</td></tr>
    </tbody>
  </table>
  <p>Plus two customer-authored documents (US Foods recall process, Sysco recall packet) that serve as third-party validation -- major distributors naming Instant Recall in their own operational docs.</p>
  <p>Each research page is 40-48KB of clean-room HTML with Dataset JSON-LD schema. These are among the heaviest authority signals on the site.</p>

  <hr>

  <h2>15. Nightly Refresh: Automated Freshness</h2>
  <p>A Vercel cron job runs daily at 5:00 UTC:</p>
  <ol>
    <li>Force redeploys from staging (clears edge cache)</li>
    <li>Polls Vercel deployment API until READY (up to 60s)</li>
    <li>Warms all 31 pages (populates edge cache, measures TTFB)</li>
    <li>Updates <code>site_freshness</code> timestamps in Supabase</li>
    <li>Returns a JSON report: pages warmed, failures, average TTFB</li>
  </ol>
  <p>Separately, <code>refresh-site-freshness</code> (Supabase edge function via pg_cron) fetches the latest FDA food recall from the openFDA API daily, so the site always reflects the most recent recall event.</p>

  <hr>

  <h2>16. GEO Scoring and Tracking</h2>
  <p>We track GEO progress across 7 weighted dimensions:</p>
  <table>
    <thead><tr><th>Dimension</th><th>Weight</th><th>Current Score</th></tr></thead>
    <tbody>
      <tr><td>AI crawler access and protocols</td><td>20%</td><td>80</td></tr>
      <tr><td>Structured data and machine readability</td><td>15%</td><td>75</td></tr>
      <tr><td>Consistency and coherence</td><td>5%</td><td>70</td></tr>
      <tr><td>Content coverage and depth</td><td>10%</td><td>35</td></tr>
      <tr><td>Authority and trust</td><td>15%</td><td>30</td></tr>
      <tr><td>Citation readiness and answerability</td><td>25%</td><td>20</td></tr>
      <tr><td>Freshness and change logging</td><td>10%</td><td>15</td></tr>
    </tbody>
  </table>
  <h3>Biggest Gaps (Where to Focus Next)</h3>
  <ul>
    <li><strong>Citation readiness (25% weight, score 20):</strong> Need more quotable data blocks, methodology detail, and pre-formatted answers</li>
    <li><strong>Freshness (10% weight, score 15):</strong> Content versioning and timestamp visibility still ramping</li>
    <li><strong>Authority (15% weight, score 30):</strong> External press/media citations needed</li>
  </ul>
  <p>The <code>/dashboard</code> page shows a live gauge with trend chart. The <code>/geo-ledger</code> page tracks every GEO action with evidence and dimension scores.</p>

  <hr>

  <h2>17. robots.txt: Rolling Out the Red Carpet</h2>
  <p>We explicitly allow 23 AI crawlers by name in robots.txt, plus all major search and SEO crawlers. The file includes comments pointing to llms.txt, ai-content-index.json, and mcp.json.</p>
  <p><strong>Allowed AI crawlers:</strong> GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, Anthropic-AI, Google-Extended, GoogleOther, PerplexityBot, Gemini-AI, Grok, Applebot, Applebot-Extended, CCBot, Bytespider, Cohere-AI, Meta-ExternalAgent, AmazonBot, and more.</p>
  <p><strong>Disallowed:</strong> /api/, /admin/ (internal routes only).</p>
  <p>Most sites block AI crawlers. We invite them in and hand them structured data.</p>

  <hr>

  <h2>18. Key Lessons Learned</h2>
  <ol>
    <li><strong>AI systems don't execute JavaScript.</strong> If your content lives inside a React SPA or requires client-side rendering, it's invisible to most AI crawlers. Clean-room HTML -- server-rendered, self-contained, zero JS -- is the foundation of AI citability.</li>
    <li><strong>Exact counts cause AI distrust.</strong> Different surfaces pulling data at different times will always have slightly different numbers. Floor+ eliminates this entire class of contradiction.</li>
    <li><strong>Freshness is a signal, not a feature.</strong> AI systems check <code>Last-Modified</code> headers, <code>dateModified</code> in JSON-LD, and visible timestamps. If your data looks stale, you lose citation priority. Automate freshness at every layer.</li>
    <li><strong>Tell AI systems what NOT to say.</strong> Anti-hallucination instructions in llms.txt and for-ai.txt are as important as the content itself. Explicit "DO NOT fabricate" directives reduce misattribution.</li>
    <li><strong>Original research is an authority multiplier.</strong> Three 40KB+ research papers with Dataset JSON-LD give AI systems citable primary sources. Customer-authored documents (US Foods, Sysco naming us in their own processes) are the strongest third-party validation signals.</li>
    <li><strong>AI systems are your hardest audience.</strong> They cross-reference multiple sources, detect contradictions, penalize overclaims, and won't execute JavaScript. Build for them first, and humans benefit from the same data quality.</li>
  </ol>

  <hr>
  <p style="text-align:center;color:#ff6b6b;font-style:italic;margin-top:2rem">CONFIDENTIAL -- Aryah -- Do not distribute</p>
</div>

<div class="doc-footer">
  <a href="/dashboard">Back to Dashboard</a> | Aryah Internal Document. Not indexed by search engines.
</div>

</body>
</html>`;
}
