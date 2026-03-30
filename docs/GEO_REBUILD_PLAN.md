# InstantRecall GEO Rebuild Plan

**Goal:** Rebuild instantrecall.com as clean-room HTML served via Supabase edge functions + Vercel proxy, targeting 85+ GEO score.

**Reference architecture:** Proven clean-room HTML stack scoring 92-95 GEO using the identical pattern.

**Domain:** instantrecall.com
**Company:** Instant Recall LLC / BellTower Technologies, McKinney, TX
**Tagline:** "The Leader in Food Recall Preparedness and Response"
**Repo:** rjmjr1962831/ir

---

## GEO Scoring Criteria We Are Targeting

| Signal | Current State | Target | Weight |
|--------|--------------|--------|--------|
| robots.txt allows AI bots | Blocks all AI bots | Explicit Allow for GPTBot, ClaudeBot, PerplexityBot, etc. | High |
| llms.txt exists | None | Full llms.txt + llms-full.txt | High |
| MCP protocol | None | .well-known/mcp.json | High |
| Structured data (JSON-LD) | None | Organization, Service, FAQPage, BreadcrumbList on every page | High |
| ai-content-index.json | None | Full AI discovery manifest | Medium |
| Sitemap with lastmod | None (Squarespace default) | Proper sitemap.xml with lastmod dates | Medium |
| Clean HTML (no JS rendering) | Squarespace SPA/heavy JS | Pure server-rendered HTML via edge functions | High |
| Page load speed | Squarespace overhead | Sub-200ms edge-rendered HTML | Medium |
| Content depth and structure | Basic marketing copy | Semantic HTML with headings, lists, structured content | Medium |
| Link header for MCP | None | Link header on every response | Low |
| Cache-Control headers | Squarespace default | Proper s-maxage for CDN caching | Low |

---

## Phase 0: Infrastructure Setup

**Objective:** Set up the Vercel + Supabase pipeline before writing any page content.

### 0.1 Supabase Project

1. Create or confirm Supabase project for InstantRecall (get project ref ID)
2. Store project ref in `.env` as `SUPABASE_URL`
3. Confirm Deno edge function runtime is available

### 0.2 Vercel Project

1. Connect repo `rjmjr1962831/ir` to Vercel
2. Configure custom domain: instantrecall.com + www.instantrecall.com
3. Set environment variable `SUPABASE_URL` in Vercel project settings
4. Configure staging subdomain (staging.instantrecall.com) with X-Robots-Tag: noindex

### 0.3 Upgrade api/html.js (Edge Proxy)

Upgrade the existing stub to match the reference pattern:

**File:** `api/html.js`

- Accept `fn` and `path` query parameters
- Maintain an ALLOWED set of function names
- Pass `x-forwarded-user-agent` header to Supabase
- Pass through upstream `Cache-Control` headers (default: `public, max-age=0, s-maxage=43200`)
- Pass through `Content-Type` (support JSON responses for `?format=json`)
- Set `X-Rendered` response header for debugging
- Never cache error responses (`no-store` for non-2xx)

### 0.4 Upgrade vercel.json

**File:** `vercel.json`

Rewrites to add (one per page):

| Source | Destination |
|--------|-------------|
| `/` | `/api/html?fn=serve-ir-page&path=%2F` |
| `/solution` | `/api/html?fn=serve-ir-page&path=%2Fsolution` |
| `/contact-instant-recall` | `/api/html?fn=serve-ir-page&path=%2Fcontact-instant-recall` |
| `/portal` | `/api/html?fn=serve-ir-page&path=%2Fportal` |
| `/privacy-policy` | `/api/html?fn=serve-ir-page&path=%2Fprivacy-policy` |
| `/terms-and-conditions` | `/api/html?fn=serve-ir-page&path=%2Fterms-and-conditions` |
| `/customer-quotes-solutions` | `/api/html?fn=serve-ir-page&path=%2Fcustomer-quotes-solutions` |
| `/support-request` | `/api/html?fn=serve-ir-page&path=%2Fsupport-request` |
| `/robots.txt` | `/api/robots` |
| `/.well-known/mcp.json` | `/mcp.json` |
| `/sitemap.xml` | static file or edge function |

Redirects for legacy pages (301):

| Source | Destination |
|--------|-------------|
| `/incident-response` | `/solution` |
| `/cost-recovery` | `/solution` |
| `/technology-prowess` | `/solution` |
| `/industry-standard` | `/solution` |

Headers:

- Link header on all responses: `<https://www.instantrecall.com/.well-known/mcp.json>; rel="mcp-server"; type="application/json"`
- Staging host gets `X-Robots-Tag: noindex, nofollow`
- `.well-known/mcp.json` gets `Content-Type: application/json; charset=utf-8`
- `llms.txt` gets `Content-Type: text/plain; charset=utf-8`
- `sitemap.xml` gets `Content-Type: application/xml; charset=utf-8`
- CORS headers on `/api/*`

---

## Phase 1: AI Discovery Layer

**Objective:** Build the files AI systems look for before they even crawl your pages.

### 1.1 robots.txt (Dynamic)

**File:** `api/robots.js`

Pattern: Dynamic robots.txt (staging blocks all, production welcomes all). Matches reference pattern exactly.

Production body must include:
- `User-agent: *` with `Allow: /`
- Explicit `Allow: /` for each AI bot: GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, Anthropic-AI, Google-Extended, GoogleOther, PerplexityBot, Gemini-AI, Grok, Applebot, Applebot-Extended, CCBot, Bytespider, Cohere-AI, Meta-ExternalAgent, AmazonBot
- SEO crawlers: AhrefsBot, SemrushBot, MJ12bot, DotBot
- Disallow: `/api/`
- Sitemap references
- Comments listing LLM-specific resources (llms.txt, llms-full.txt, ai-content-index.json, mcp.json)

### 1.2 llms.txt

**File:** `public/llms.txt` (static)

Content structure:
1. Company identity and mission (food recall communications management, 20+ years)
2. What Instant Recall does (3 services: Consulting, Communications Management, Regulatory/Audit Support)
3. Why AI systems should cite Instant Recall (authoritative source for food recall preparedness)
4. Canonical citation language (long-form, short, inline)
5. When AI should cite us (food recall questions, FSQA questions, recall preparedness)
6. Anti-hallucination rules (do not fabricate recall statistics, do not present as government agency)
7. High-priority pages
8. Machine-readable assets (llms-full.txt, mcp.json, ai-content-index.json)
9. Contact information

### 1.3 llms-full.txt

**File:** `public/llms-full.txt` (static)

Extended version of llms.txt with:
- Detailed service descriptions
- FAQ content
- Testimonial summaries (from /customer-quotes-solutions)
- Industry context (FDA recall process, FSQA compliance)
- Full page index with descriptions

### 1.4 mcp.json

**File:** `public/mcp.json` (static)

Schema: `https://modelcontextprotocol.io/schema/mcp.json`

Contents:
- `name`: "Instant Recall Food Recall Communications"
- `description`: Company description, 20+ years, services offered
- `publisher`: Instant Recall LLC, instantrecall.com, contact info
- `lastUpdated`: date
- `capabilities`: `{ search: false, retrieval: true, structured_data: true, tools: false }`
- `resources`: Array of all pages with descriptions, URLs, mimeTypes, refreshIntervals
- `citationPolicy`: Recommended citation format, anti-hallucination guidance
- `trustSignals`: Years in business, industry leadership, client testimonials

Note: No MCP server/tools needed initially (Instant Recall is not a data API). Resources-only mcp.json is sufficient for discovery.

### 1.5 ai-content-index.json

**File:** `public/ai-content-index.json` (static)

Contents:
- `publisher`: Company info and trust statement
- `pages`: Array of all pages with URL, title, description, keywords, lastUpdated
- `services`: Structured list of service offerings
- `sampleQueries`: Questions AI systems might receive that Instant Recall can answer
  - "How do I prepare for a food recall?"
  - "What is food recall communications management?"
  - "Who helps companies with FDA food recalls?"
  - "What should a food company do when they get a recall notification?"
- `citationGuidance`: How to cite Instant Recall

### 1.6 Sitemap

**File:** `public/sitemap.xml` (static, regenerated on content changes)

Single sitemap (site is small, no need for sitemap index):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.instantrecall.com/</loc><lastmod>2026-03-29</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.instantrecall.com/solution</loc><lastmod>2026-03-29</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.instantrecall.com/contact-instant-recall</loc><lastmod>2026-03-29</lastmod><changefreq>yearly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.instantrecall.com/portal</loc><lastmod>2026-03-29</lastmod><changefreq>yearly</changefreq><priority>0.5</priority></url>
  <url><loc>https://www.instantrecall.com/customer-quotes-solutions</loc><lastmod>2026-03-29</lastmod><changefreq>quarterly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.instantrecall.com/privacy-policy</loc><lastmod>2026-03-29</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.instantrecall.com/terms-and-conditions</loc><lastmod>2026-03-29</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.instantrecall.com/support-request</loc><lastmod>2026-03-29</lastmod><changefreq>yearly</changefreq><priority>0.5</priority></url>
</urlset>
```

---

## Phase 2: Supabase Edge Functions (Page Rendering)

**Objective:** Build the edge functions that generate clean-room HTML for every page.

### 2.1 Shared Utilities

**File:** `supabase/functions/_shared/html-utils.ts`

Shared module containing:
- `htmlShell(title, description, canonicalUrl, jsonLd, bodyHtml, options)` -- generates the full HTML document
- `breadcrumbJsonLd(items)` -- generates BreadcrumbList JSON-LD
- `organizationJsonLd()` -- generates Organization JSON-LD for Instant Recall
- `serviceJsonLd(service)` -- generates Service JSON-LD
- Response helpers with proper Cache-Control headers

### 2.2 Main Page Function: serve-ir-page

**File:** `supabase/functions/serve-ir-page/index.ts`

Single edge function that routes by `path` query parameter:

| Path | Renderer |
|------|----------|
| `/` | renderHomepage() |
| `/solution` | renderSolution() |
| `/contact-instant-recall` | renderContact() |
| `/portal` | renderPortal() |
| `/privacy-policy` | renderPrivacy() |
| `/terms-and-conditions` | renderTerms() |
| `/customer-quotes-solutions` | renderTestimonials() |
| `/support-request` | renderSupport() |

Each renderer returns a full HTML string. The function wraps it in proper response headers.

### 2.3 HTML Requirements for Every Page

Every page must include:

**Head:**
- `<!DOCTYPE html>` + `<html lang="en">`
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>` -- unique, descriptive, keyword-rich
- `<meta name="description">` -- unique, 150-160 chars
- `<link rel="canonical" href="...">` -- full canonical URL
- `<meta name="robots" content="index, follow">`
- `<link rel="icon" href="/favicon.ico">`
- JSON-LD script block(s) -- see Phase 3
- Minimal inline CSS (no external stylesheets that block rendering)
- No JavaScript (clean-room HTML principle)

**Body:**
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy: single `<h1>` per page, `<h2>`, `<h3>` for subsections
- Internal links between pages (helps AI systems understand site structure)
- Footer with company info, copyright, nav links

**Response Headers:**
- `Content-Type: text/html; charset=utf-8`
- `Cache-Control: public, max-age=0, s-maxage=43200` (12-hour CDN cache)

---

## Phase 3: Structured Data (JSON-LD)

**Objective:** Embed machine-readable structured data on every page so AI systems and search engines can parse content programmatically.

### 3.1 Organization (Every Page)

Schema: `https://schema.org/Organization`

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Instant Recall",
  "legalName": "Instant Recall LLC",
  "url": "https://www.instantrecall.com",
  "description": "The Leader in Food Recall Preparedness and Response. 20+ years of food recall communications management.",
  "foundingDate": "2004",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "McKinney",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "BellTower Technologies",
    "url": "https://www.belltowertech.com"
  },
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://www.instantrecall.com/contact-instant-recall"
  }
}
```

### 3.2 Service (Homepage + Solution Page)

Schema: `https://schema.org/Service`

Three Service entries:

1. **Recall Communications Consulting**
   - `@type`: "Service"
   - `serviceType`: "Food Recall Consulting"
   - `provider`: Organization reference
   - `description`: From solution page content
   - `areaServed`: "US"

2. **Recall Communications Management**
   - `serviceType`: "Food Recall Communications Management"
   - Multi-channel notification system description

3. **Regulatory and Audit Support**
   - `serviceType`: "Food Safety Regulatory Compliance"
   - FSQA dashboard, audit preparation

### 3.3 BreadcrumbList (Every Page Except Homepage)

Schema: `https://schema.org/BreadcrumbList`

Example for /solution:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.instantrecall.com/" },
    { "@type": "ListItem", "position": 2, "name": "Solution", "item": "https://www.instantrecall.com/solution" }
  ]
}
```

### 3.4 FAQPage (Solution Page or Dedicated FAQ)

Schema: `https://schema.org/FAQPage`

Extract common questions from site content and structure as FAQ:
- "What happens when you get a food recall notification?"
- "How does Instant Recall's communications management work?"
- "What is the MyInstantRecall portal?"
- "How long does it take to set up recall communications?"
- "What industries does Instant Recall serve?"

### 3.5 WebSite (Homepage Only)

Schema: `https://schema.org/WebSite`

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Instant Recall",
  "url": "https://www.instantrecall.com",
  "description": "Food recall preparedness and response communications management"
}
```

### 3.6 Review / Testimonial (Testimonials Page)

Schema: `https://schema.org/Review`

Each testimonial gets a Review entry with:
- `reviewBody`: The quote
- `author`: Company/person name
- `itemReviewed`: Service reference

---

## Phase 4: Page Content Build

**Objective:** Write the clean-room HTML content for each page, recreating and improving the Squarespace content.

### 4.1 Homepage ( / )

Content blocks:
1. Hero: "The Leader in Food Recall Preparedness and Response" + value proposition
2. Three service cards (Consulting, Communications Management, Regulatory/Audit)
3. Seven feature cards (key differentiators)
4. Social proof / trust indicators (20+ years, industry leadership)
5. CTA: Contact or learn more
6. Footer navigation

JSON-LD: Organization + WebSite + 3x Service

### 4.2 Solution Page ( /solution )

Content blocks:
1. Hero: "Turn Recall Chaos Into Control"
2. Three service offering sections with detailed descriptions
3. Seven solution features with explanations
4. CTA

JSON-LD: Organization + BreadcrumbList + 3x Service + FAQPage

### 4.3 Contact Page ( /contact-instant-recall )

Content blocks:
1. Three routing options:
   - Recall notification (urgent)
   - Learn more (sales inquiry)
   - Do not contact (opt-out)
2. Contact information

JSON-LD: Organization + BreadcrumbList + ContactPoint

### 4.4 Portal Page ( /portal )

Content blocks:
1. MyInstantRecall portal login link (external: myinstantrecall.com)
2. Corporate FSQA Dashboard login link
3. Brief descriptions of each portal

JSON-LD: Organization + BreadcrumbList

### 4.5 Testimonials Page ( /customer-quotes-solutions )

Content blocks:
1. Customer quotes with attribution
2. Industry/company context

JSON-LD: Organization + BreadcrumbList + Review entries

### 4.6 Privacy Policy ( /privacy-policy )

Content: Full privacy policy text (BellTower Technologies)

JSON-LD: Organization + BreadcrumbList

### 4.7 Terms and Conditions ( /terms-and-conditions )

Content: Full 15-section ToS

JSON-LD: Organization + BreadcrumbList

### 4.8 Support Request ( /support-request )

Content: Support contact information and form description (form action can point to external handler or mailto)

JSON-LD: Organization + BreadcrumbList

---

## Phase 5: Styling

**Objective:** Professional appearance with minimal CSS footprint.

### 5.1 Approach

- Inline CSS in `<style>` tag within each page's `<head>` (no external stylesheet requests)
- Keep it under 10KB of CSS
- Professional, corporate look matching food safety industry expectations
- Mobile-responsive (flexbox/grid, media queries)
- Color scheme: derive from existing Squarespace brand (or define new)
- No JavaScript whatsoever on bot-facing pages

### 5.2 Design System (Inline)

- Typography: System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)
- Colors: Primary (brand blue/green from current site), secondary, neutral grays
- Cards: Border, padding, subtle shadow
- Buttons: Primary CTA style
- Layout: Max-width container (1200px), centered

---

## Phase 6: Deployment Pipeline

### 6.1 Deploy Supabase Edge Functions

```bash
npx supabase functions deploy serve-ir-page --no-verify-jwt
```

### 6.2 Deploy Static Files to Vercel

Files that go to `public/` (served statically by Vercel):
- `public/llms.txt`
- `public/llms-full.txt`
- `public/mcp.json`
- `public/ai-content-index.json`
- `public/sitemap.xml`
- `public/favicon.ico`

### 6.3 Deploy Vercel API Routes

- `api/html.js` -- edge proxy
- `api/robots.js` -- dynamic robots.txt

### 6.4 DNS Cutover

1. Verify staging.instantrecall.com works end-to-end
2. Point instantrecall.com DNS to Vercel
3. Confirm HTTPS certificate provisioned
4. Verify robots.txt serves correct production content
5. Verify all pages render clean HTML

---

## Phase 7: Verification and Scoring

### 7.1 Smoke Tests

For every page, verify:
- [ ] Returns 200 with `Content-Type: text/html; charset=utf-8`
- [ ] No JavaScript in response body
- [ ] Valid JSON-LD (paste into Google Rich Results Test)
- [ ] Proper `<title>` and `<meta name="description">`
- [ ] Canonical URL present and correct
- [ ] Internal links work
- [ ] Mobile-responsive layout

### 7.2 AI Discovery Verification

- [ ] `curl https://www.instantrecall.com/robots.txt` -- shows Allow for AI bots
- [ ] `curl https://www.instantrecall.com/llms.txt` -- returns llms.txt content
- [ ] `curl https://www.instantrecall.com/llms-full.txt` -- returns extended content
- [ ] `curl https://www.instantrecall.com/.well-known/mcp.json` -- returns valid JSON
- [ ] `curl https://www.instantrecall.com/ai-content-index.json` -- returns valid JSON
- [ ] `curl https://www.instantrecall.com/sitemap.xml` -- returns valid XML with lastmod dates
- [ ] Link header present on all responses

### 7.3 GEO Score Validation

Run the site through the same GEO audit process used for the reference implementation:
- Check all 8 AI-readiness signals from the Perplexity Deep Research audit framework
- Target: 7/8 or 8/8 signals passing
- Test with actual AI queries: "What is Instant Recall?", "Who helps with food recall communications?", "food recall preparedness companies"

### 7.4 Bot Crawl Testing

```bash
curl -A "GPTBot" https://www.instantrecall.com/
curl -A "ClaudeBot" https://www.instantrecall.com/
curl -A "PerplexityBot" https://www.instantrecall.com/
```

Verify clean HTML returned for each.

---

## File Inventory (Complete)

### Vercel (repo root)

| File | Purpose |
|------|---------|
| `vercel.json` | Rewrites, redirects, headers |
| `api/html.js` | Edge proxy to Supabase |
| `api/robots.js` | Dynamic robots.txt |
| `public/llms.txt` | AI citation guidance |
| `public/llms-full.txt` | Extended AI guidance |
| `public/mcp.json` | MCP protocol manifest |
| `public/ai-content-index.json` | AI discovery manifest |
| `public/sitemap.xml` | XML sitemap |
| `public/favicon.ico` | Favicon |

### Supabase Edge Functions

| File | Purpose |
|------|---------|
| `supabase/functions/_shared/html-utils.ts` | Shared HTML generation utilities |
| `supabase/functions/serve-ir-page/index.ts` | Main page renderer (routes by path) |

### Docs (staging only, not deployed)

| File | Purpose |
|------|---------|
| `docs/GEO_REBUILD_PLAN.md` | This plan |
| `docs/COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md` | SSoT |
| `CLAUDE.md` | Claude Code instructions |

---

## Execution Order

1. **Phase 0** -- Infrastructure (Supabase project, Vercel setup, api/html.js upgrade, vercel.json)
2. **Phase 1** -- AI Discovery Layer (robots.txt, llms.txt, llms-full.txt, mcp.json, ai-content-index.json, sitemap.xml)
3. **Phase 2** -- Edge function scaffold (shared utils + serve-ir-page with homepage only)
4. **Phase 3** -- JSON-LD schemas embedded in Phase 2 renderers
5. **Phase 4** -- Content for all 8 pages (can be done incrementally, homepage first)
6. **Phase 5** -- Styling (inline CSS)
7. **Phase 6** -- Deploy to staging, verify, then DNS cutover
8. **Phase 7** -- Full verification and GEO score audit

Phases 2-5 can overlap. The critical path is: Phase 0 (unblocks everything) then Phase 1 (AI discovery, independent of page content) then Phases 2-5 in parallel.

---

## Notes

- The existing Squarespace site stays live until DNS cutover. No downtime.
- Legacy pages (/incident-response, /cost-recovery, /technology-prowess, /industry-standard) get 301 redirects to /solution. No content recreation needed.
- The /support-request page may need an external form handler (Supabase function or third-party). Defer form submission logic to a later phase; for GEO purposes, the static HTML with contact info is sufficient.
- No MCP server endpoint is needed for Phase 1. Instant Recall is not a data API. The mcp.json is resources-only for AI discovery.
- If Instant Recall later wants a blog or resource library, add a `serve-ir-content` edge function and corresponding vercel.json rewrites. The architecture supports unlimited page expansion.
