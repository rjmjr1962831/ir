import { CSS } from "./styles.ts";
import { FreshnessData, formatDate, getCurrentFreshness } from "./freshness.ts";

const SITE = "https://www.instantrecall.com";

interface LayoutOptions {
  title: string;
  description: string;
  path: string;
  jsonLd?: string;
  body: string;
  freshness?: FreshnessData;
  noIndex?: boolean;
}

const NOINDEX_PATHS = [
  "/dashboard",
  "/crawl-stats",
  "/geo-ledger",
  "/internal/",
  "/docs/",
];

const BREADCRUMB_NAMES: Record<string, string> = {
  "/": "Home",
  "/solution": "Services",
  "/contact-instant-recall": "Contact",
  "/contact": "Contact",
  "/portal": "Login",
  "/schedule": "Book an Appointment",
  "/privacy-policy": "Privacy Policy",
  "/terms-and-conditions": "Terms and Conditions",
  "/about-us": "About Us",
  "/research": "Research",
  "/research/industry-survey": "Industry Survey",
  "/research/regulatory-environment": "Regulatory Environment",
  "/research/legal-case-data": "Legal Case Data",
  "/methodology": "Research Methodology",
  "/who-trusts-us": "Who Trusts Us",
  "/research/usfoods-recall-process": "US Foods Recall Process Overview",
  "/research/sysco-recall-packet": "Sysco Customer Recall Orientation Packet",
};

function buildBreadcrumbLd(path: string): string {
  const items: { name: string; url: string }[] = [
    { name: "Home", url: SITE },
  ];
  if (path !== "/") {
    // For research sub-pages, insert the Research parent level
    if (path.startsWith("/research/")) {
      items.push({ name: "Research", url: `${SITE}/research` });
    }
    const name = BREADCRUMB_NAMES[path] || path.slice(1);
    items.push({ name, url: `${SITE}${path}` });
  }
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

function header(): string {
  return `<header class="site-header">
  <a href="/" class="logo"><img src="/images/InstantRecall_Horizontal-01.webp" alt="Instant Recall\u2122" height="50"></a>
  <button class="mobile-menu-toggle" aria-label="Menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <nav>
    <a href="/">Home</a>
    <a href="/solution">Solution</a>
    <a href="/portal">Login</a>
    <a href="/contact-instant-recall" class="nav-btn">Contact Us</a>
  </nav>
  <script>(function(){var b=document.querySelector('.mobile-menu-toggle'),n=document.querySelector('.site-header nav');if(!b||!n)return;b.addEventListener('click',function(){var open=n.classList.toggle('nav-open');b.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open))})})()</script>
</header>`;
}

function footer(): string {
  return `
<footer class="site-footer">
  <a href="#" style="display:block;text-align:center;color:rgba(255,255,255,.5);font-size:.8rem;padding:1rem 0;text-decoration:none">Back to Top</a>
  <div class="footer-inner">
    <div class="footer-left">
      <img src="/images/footerlogo.webp" alt="Instant Recall" style="max-width:150px;height:auto">
      <a href="https://belltowertech.com" target="_blank" rel="noopener" style="display:inline-block;margin-top:.75rem"><img src="/images/aserviceofbelltower.webp" alt="A service of BellTower Technologies" height="40"></a>
      <p style="font-size:.6em;color:rgba(255,255,255,.4);margin-top:.75rem">&copy; Instant Recall LLC<br>All Rights Reserved</p>
    </div>
    <div class="footer-center" style="grid-column:2/4;text-align:center">
      <div style="margin-bottom:1.5rem">
        <a href="/" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">HOME</a>
        <a href="/solution" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">SOLUTION</a>
        <a href="/contact-instant-recall" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">SIGN UP</a>
        <a href="/contact-instant-recall" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">CONTACT US</a>
        <a href="/portal" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">LOGIN</a>
        <a href="/schedule" style="color:#fff;font-size:.85rem;letter-spacing:1.5px;text-transform:uppercase;margin:0 .75rem;font-weight:500;text-decoration:none">BOOK AN APPOINTMENT</a>
      </div>

      <p style="font-size:.8rem;color:rgba(255,255,255,.4)"><a href="/terms-and-conditions" style="color:rgba(255,255,255,.4)">Terms and Conditions</a> | <a href="/privacy-policy" style="color:rgba(255,255,255,.4)">Privacy Policy</a> | <a href="#" style="color:rgba(255,255,255,.4)" onclick="return false;">Cookie Settings</a></p>
    </div>
    <div class="footer-right" style="text-align:center">
      <a href="https://www.linkedin.com/showcase/instantrecall/" target="_blank" rel="noopener" aria-label="LinkedIn" style="display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;border:2px solid rgba(255,255,255,.5);color:rgba(255,255,255,.5);transition:all .2s">
        <svg viewBox="0 0 64 64" width="28" height="28" style="fill:currentColor"><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44h5.4v-9.5C46,29.8,45,26.2,39.5,26.2z"></path></svg>
      </a>
    </div>
    <div class="footer-bottom" style="grid-column:1/-1">
    </div>
  </div>
</footer>`;
}

/**
 * Inject dateModified into a pre-stringified JSON-LD payload.
 * Handles both single objects and arrays of objects.
 * Leaves the original untouched if parsing fails.
 */
function injectDateModified(jsonLdStr: string, dateModified: string): string {
  try {
    const parsed = JSON.parse(jsonLdStr);
    if (Array.isArray(parsed)) {
      for (const item of parsed) {
        if (item && typeof item === "object" && !item.dateModified) {
          item.dateModified = dateModified;
        }
      }
    } else if (parsed && typeof parsed === "object" && !parsed.dateModified) {
      parsed.dateModified = dateModified;
    }
    return JSON.stringify(parsed);
  } catch {
    return jsonLdStr;
  }
}

function newsletterPopup(): string {
  return `
<!-- Newsletter Popup Overlay -->
<div id="nl-popup-overlay" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.6);align-items:center;justify-content:center">
  <div style="background:#fff;max-width:520px;width:90%;border-radius:4px;position:relative;padding:2.5rem 2rem;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.4)">
    <button id="nl-popup-close" aria-label="Close" style="position:absolute;top:12px;right:14px;background:none;border:none;font-size:1.6rem;color:#666;cursor:pointer;line-height:1">&times;</button>
    <img src="/images/InstantRecall_Horizontal-01.webp" alt="Instant Recall" style="max-width:200px;height:auto;margin-bottom:1.25rem">
    <h2 style="color:#272727;font-size:1.6rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:.5rem">LIKE WHAT YOU SEE?</h2>
    <p style="color:#555;font-size:.95rem;margin-bottom:1.5rem;line-height:1.5">Sign up for our newsletter to stay informed on food recall preparedness, industry insights, and regulatory updates.</p>
    <form id="nl-popup-form" style="display:flex;flex-direction:column;gap:.75rem;max-width:360px;margin:0 auto">
      <input type="email" name="email" required placeholder="Email address" style="padding:.75rem 1rem;border:1px solid #ccc;border-radius:2px;font-size:.95rem;font-family:inherit;color:#333;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='#00afec'" onblur="this.style.borderColor='#ccc'">
      <button type="submit" style="background:#00afec;color:#fff;border:none;padding:.8rem 1.5rem;font-size:.9rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;cursor:pointer;border-radius:2px;transition:background .2s;font-family:inherit">Sign Up</button>
    </form>
    <p id="nl-popup-success" style="display:none;color:#2a9d2a;font-weight:600;margin-top:1rem">Thank you for subscribing!</p>
    <p id="nl-popup-error" style="display:none;color:#d32f2f;font-size:.85rem;margin-top:.5rem"></p>
  </div>
</div>
<script>
(function(){
  var COOKIE='ir_nl_dismiss';
  var FREQ=30;
  var DELAY=5000;
  var SCROLL_PCT=25;

  function getCookie(n){var m=document.cookie.match(new RegExp('(?:^|;\\s*)'+n+'=([^;]*)'));return m?m[1]:null}
  function setCookie(n,v,d){var e=new Date();e.setDate(e.getDate()+d);document.cookie=n+'='+v+';expires='+e.toUTCString()+';path=/;SameSite=Lax'}

  if(getCookie(COOKIE))return;

  var overlay=document.getElementById('nl-popup-overlay');
  var shown=false;

  function showPopup(){
    if(shown)return;
    shown=true;
    overlay.style.display='flex';
  }

  // Timer trigger
  setTimeout(showPopup,DELAY);

  // Scroll trigger
  window.addEventListener('scroll',function(){
    var pct=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight))*100;
    if(pct>=SCROLL_PCT)showPopup();
  },{passive:true});

  // Close handlers
  document.getElementById('nl-popup-close').addEventListener('click',function(){
    overlay.style.display='none';
    setCookie(COOKIE,'1',FREQ);
  });
  overlay.addEventListener('click',function(e){
    if(e.target===overlay){overlay.style.display='none';setCookie(COOKIE,'1',FREQ)}
  });

  // Form submit to HubSpot
  document.getElementById('nl-popup-form').addEventListener('submit',function(e){
    e.preventDefault();
    var email=this.email.value.trim();
    if(!email)return;
    var btn=this.querySelector('button[type="submit"]');
    btn.disabled=true;btn.textContent='Sending...';
    document.getElementById('nl-popup-error').style.display='none';

    fetch('https://api.hsforms.com/submissions/v3/integration/submit/48681528/2759faa2-dc43-43f4-8d4d-8fb442c2d0bf',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        fields:[{name:'email',value:email}],
        context:{pageUri:window.location.href,pageName:document.title}
      })
    }).then(function(r){
      if(!r.ok)throw new Error('Submit failed');
      document.getElementById('nl-popup-form').style.display='none';
      document.getElementById('nl-popup-success').style.display='block';
      setCookie(COOKIE,'1',FREQ);
      setTimeout(function(){overlay.style.display='none'},2500);
    }).catch(function(){
      btn.disabled=false;btn.textContent='Sign Up';
      var err=document.getElementById('nl-popup-error');
      err.textContent='Something went wrong. Please try again.';
      err.style.display='block';
    });
  });
})();
</script>`;
}

export function renderPage(opts: LayoutOptions): string {
  const canonical = `${SITE}${opts.path === "/" ? "" : opts.path}`;
  const f = opts.freshness || getCurrentFreshness();

  // Freshness meta tag for AI crawlers
  const lastModMeta = f
    ? `<meta name="last-modified" content="${f.lastContentUpdate}">`
    : "";

  // Inject dateModified into the page-level JSON-LD block
  const enrichedJsonLd = opts.jsonLd && f
    ? injectDateModified(opts.jsonLd, f.lastContentUpdate)
    : opts.jsonLd;

  // Inject dateModified into a WebPage JSON-LD block
  const webPageLd = f
    ? `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: canonical,
        name: opts.title,
        dateModified: f.lastContentUpdate,
        description: opts.description,
      })}</script>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${opts.title}</title>
  <meta name="description" content="${opts.description}">
  ${(opts.noIndex || NOINDEX_PATHS.some(p => opts.path.startsWith(p))) ? '<meta name="robots" content="noindex, nofollow">' : ''}
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  ${lastModMeta}
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${opts.title}">
  <meta property="og:description" content="${opts.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Instant Recall">
  <meta property="og:image" content="${SITE}/images/iStock-854374912.jpg">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1500">
  <meta property="og:image:height" content="1000">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${opts.title}">
  <meta name="twitter:description" content="${opts.description}">
  <meta name="twitter:image" content="${SITE}/images/iStock-854374912.jpg">
  <style>${CSS}</style>
  ${enrichedJsonLd ? `<script type="application/ld+json">${enrichedJsonLd}</script>` : ""}
  <script type="application/ld+json">${buildBreadcrumbLd(opts.path)}</script>
  ${webPageLd}
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/48681528.js"></script>
  <!-- Start cookieyes banner -->
  <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/d28e30c29e2a7ae093f19b1e8b0d5f98/script.js"></script>
  <!-- End cookieyes banner -->
</head>
<body>
${header()}
${opts.body}
${f ? `<div style="text-align:center;padding:1rem 0 0;color:rgba(255,255,255,.45);font-size:.75rem;letter-spacing:.5px">Last updated: ${formatDate(f.lastContentUpdate)}</div>` : ""}
${footer()}
${opts.path === "/" ? newsletterPopup() : ""}
</body>
</html>`;
}
