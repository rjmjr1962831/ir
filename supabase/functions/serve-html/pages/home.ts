import { renderPage } from "../shared/layout.ts";
import { homeCitationBlock, methodologyBlock, CITATION_CSS } from "../shared/citations.ts";
import { CONTACT_FORM_CSS, CONTACT_FORM_HTML, CONTACT_FORM_JS } from "./contact.ts";

const JSON_LD = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Instant Recall LLC",
    alternateName: "BellTower Technologies",
    url: "https://www.instantrecall.com",
    telephone: "+1-214-220-8000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5900 South Lake Forest Dr., Suite 300",
      addressLocality: "McKinney",
      addressRegion: "TX",
      postalCode: "75070",
      addressCountry: "US",
    },
    description:
      "The Leader in Food Recall Preparedness and Response. Protecting Your Customers, Your Organization and Your Brand.",
    foundingDate: "2000",
    slogan: "The Leader in Food Recall Preparedness and Response",
    areaServed: "United States",
    knowsAbout: [
      "food recall management",
      "recall communications",
      "food safety compliance",
      "FDA recall reporting",
      "USDA recall reporting",
      "FSMA compliance",
    ],
    sameAs: ["https://www.belltowertech.com"],
    founder: {
      "@type": "Person",
      name: "Michael Martin",
      jobTitle: "Co-Founder and Chairman",
      url: "https://www.instantrecall.com/about-us",
      description: "Co-founder and Chairman of Instant Recall LLC. Previously co-founded Red Alert (sold to Keynote Systems in 2000) and held engineering, sales, and management positions at IBM and Nortel Networks. President's Endowed Scholar at Texas A&M University.",
      worksFor: {
        "@type": "Organization",
        name: "Instant Recall LLC",
        url: "https://www.instantrecall.com",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Instant Recall",
    url: "https://www.instantrecall.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.instantrecall.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
]);

/* ------------------------------------------------------------------ */
/*  TICKER ITEMS (from instantrecall.com live data)                   */
/* ------------------------------------------------------------------ */
const TICKER_ITEMS = [
  "Weis Markets Issues Recall for Undeclared Egg Allergen In WQ Banana Puddin Ice Cream",
  `Mondel\u0113z Global LLC Conducts Voluntary Recall of Certain Chewy Chips Ahoy 13oz Due to Unexpected Solidified Ingredient in Product in the US`,
  "Jensen Tuna of Louisiana is Voluntarily Recalling Frozen Ground Tuna Imported from JK Fish, Because it may Potentially be Contaminated with Salmonella",
  "Hercules Candy LLC Issues Allergy Alert on Undeclared Peanuts in Cashew Brittle Bits",
  "Wakefern Food Corp. Voluntarily Recalls Wholesome Pantry Organic Nut Butters Because of Possible Health Risk",
  "NadaMoo! Voluntarily Recalls Select Pints of Strawberry Cheesecake Due to Undeclared Almond",
  "Thomas Hammer Coffee Roasters Inc. Issues Allergy Alert on Undeclared Egg in Blueberry Bread",
  "Surtidoras Bakery Inc. Issues Allergy Alert on Undeclared Milk in Marble Muffin, Banana Muffin, and Blueberry Muffin",
  "Fullei Fresh Recalls Organic Bean Sprouts Because of Possible Health Risk",
  "Hometown Food Company Recalls Two Production LOT Codes of Pillsbury Unbleached All-Purpose 5lb Flour Due to Possible Health Risk",
  "B&amp;G Foods Voluntarily Recalls a Limited Number of Jars of Victoria Marinara Sauce Due to Possible Undeclared Cashew",
  "Frito-Lay Issues Voluntary Allergy Alert on Undeclared Milk In Small Number of Stacy's Simply Naked Pita Chips",
  "RXBAR Recalls Certain Varieties of Bars Due to a Potential Undeclared Peanut Allergen",
  "Hill's Pet Nutrition Voluntarily Recalls Select Canned Dog Food for Excessive Vitamin D",
];

/* ------------------------------------------------------------------ */
/*  CUSTOMER TESTIMONIALS (all 12 from instantrecall.com)             */
/* ------------------------------------------------------------------ */
const CUSTOMER_TESTIMONIALS = [
  {
    quote: `\u201CInstant Recall was an instant success for us. Never have I had a new regulatory related project implemented with the immediate response being \u201CWhy didn\u2019t we do this sooner?\u201D from every departmental stakeholder.\u201D`,
    name: "J. Keith Jackson, PhD, Vice President of Quality Assurance",
    company: "Performance Food Group",
  },
  {
    quote: `\u201CThe lengths to which this company goes to ensure we\u2019re able to reach our customers to remove violative product from distribution is\u2026 Second to None!\u201D`,
    name: "Tanesia Cole, Senior Manager Food Regulatory Operations",
    company: "US Foods",
  },
  {
    quote: `\u201CI and the rest of the Leadership team here at Papa Murphy\u2019s continue to be highly impressed with the level of service, responsiveness and dedication we receive from the Instant Recall team and we are certainly extremely pleased with how these events are being handled.\u201D`,
    name: "Nik Rupp, EVP Finance",
    company: "Papa Murphy\u2019s International",
  },
  {
    quote: `\u201CInstant Recall allows us to be confident in delivering urgent messages to each of our Restaurants. We know that when we launch the communication campaign we are in good hands. There is no time to waste in issues of food safety and brand protection.\u201D`,
    name: "Shawn Lyons, Supplier Quality and Safety, Supply Chain",
    company: "Chick-fil-A",
  },
  {
    quote: `\u201CRecalls are no longer looked at as \u2018the dreaded email\u2019 our team could receive on a Friday night since we have partnered with BellTower Technologies and began using their Instant Recall system.\u201D`,
    name: "Shirley Abderrazzaq, Director of Food Safety",
    company: "Ben E. Keith Company",
  },
  {
    quote: `\u201CRecall and withdrawal incidents are disruptive, difficult circumstances in our business. Having a reliable, trusted partner in Instant Recall makes a big difference when navigating through crises.\u201D`,
    name: "Shawn Lyons, Supplier Quality and Safety, Supply Chain",
    company: "Chick-fil-A",
  },
  {
    quote: `\u201C[Instant Recall] provides a path for efficient communication for our Field Operations, an easy to use system for time sensitive activities, audit-ready documentation for our Regulatory Compliance and reliable data for our organization.\u201D`,
    name: "Ainslee Barnes, PMP, Project Manager, ERM-PMO, IT",
    company: "Casey\u2019s",
  },
  {
    quote: `\u201CFrom the beginning, they\u2019ve been not only our 3rd party recall communication provider, but also a partner in recall execution and process improvement efforts.\u201D`,
    name: "Tanesia Cole, Senior Manager Food Regulatory Operations",
    company: "US Foods",
  },
  {
    quote: `\u201CThe new features\u2026 are really great! It was so easy... It definitely saves time, minimizes the chance for error and really empowers the client to get it all pulled together quickly. Of course I had a great teacher with [my IR Recall Manager] walking me through it step by step and patiently guiding me through the process.\u201D`,
    name: "Courtney Halbrook, REHS, Director of Environmental Health &amp; Safety",
    company: "Topgolf",
  },
  {
    quote: `\u201CWe have found the team at Instant Recall to be extremely helpful, reachable, and always easy to work with.\u201D`,
    name: "Shirley Abderrazzaq, Director of Food Safety",
    company: "Ben E. Keith Company",
  },
  {
    quote: `\u201CFrom a customer standpoint, Instant Recall is continually providing us with ways to enhance our customer experience. On top of the real time view of customer interactions, our local recall teams can also send links to customers as a follow up to encourage acknowledgement.\u201D`,
    name: "Tanesia Cole, Senior Manager Food Regulatory Operations",
    company: "US Foods",
  },
  {
    quote: `\u201CSince implementing Instant Recall, all stakeholders in our organization have found benefit to the service.\u201D`,
    name: "Ainslee Barnes, PMP, Project Manager, ERM-PMO, IT",
    company: "Casey\u2019s",
  },
];

/* ------------------------------------------------------------------ */
/*  WHY FOOD SAFETY CAN'T WAIT QUOTES (all 14 from instantrecall.com) */
/* ------------------------------------------------------------------ */
const SAFETY_QUOTES = [
  {
    quote: `FSIS is setting \u201Ca stronger threshold\u201D for taking recall or regulatory action sooner\u2026`,
    source: "Feedstuffs \u201CFSIS Orders New Measures\u201D",
  },
  {
    quote: `...spinach farmers experienced a loss of $350 million after the September 2006 outbreak. Spinach Recall: 5 Faces. 5 Agonizing Deaths. 1 year later.`,
    source: "USA Today",
  },
  {
    quote: `\u201CThe decision to alert the public about the link to chopped romaine on April 13 no doubt helped to decrease the scope of the outbreak...\u201D`,
    source: "FSIS",
  },
  {
    quote: `The CDC estimates that foodborne illnesses sicken some 76 million people each year. Roughly 300,000 of them will end up in hospitals; 5,000 of those will not return home.`,
    source: "Brandweek",
  },
  {
    quote: `Food Recalls on the Rise: In fact, a recent report from the US Economic Research Service (ERS) showed that food product recall events increased by an average of 20 events a year from 2004 through 2013.`,
    source: "Food Engineering Magazine",
  },
  {
    quote: `A report released Thursday by the U.S. PIRG Education Fund found that recalls of food have increased 10 percent since 2013, with meat and poultry incidents soaring 67 percent. The most hazardous \u2014 Class 1 recalls, or when there\u2019s a \u201Creasonable probability that eating the food will cause health problems or death\u201D \u2014 edged up 6 percent overall and a whopping 83 percent for meat and poultry, the study found.`,
    source: "Bloomberg News",
  },
  {
    quote: `Risk of Food Recalls Continues to Increase: ..an increasingly complex food supply system, technological improvements in health risk detection, increased regulatory oversight and enforcement, and the passing of two major food policy laws (FALCPA and FSMA) may have all contributed to the significant rise in food recalls.`,
    source: "Food Engineering Magazine",
  },
  {
    quote: `When you get food on a larger scale, it\u2019s not inherently any riskier, but if there\u2019s a problem, the potential harm is magnified.`,
    source: "The Washington Post",
  },
  {
    quote: `If consumers know a problem has been sourced and contained then there\u2019s less uncertainty about the marketplace as a whole, and as a result there tends to be less financial impact.`,
    source: "Insurance Business Magazine",
  },
  {
    quote: `Of the 60 patients who became ill between April 30, 2018 and May 30, 2018, 31 have been hospitalized. The patients range in age from 1 to 97 years.`,
    source: "HealthDay.com",
  },
  {
    quote: `FSIS routinely conducts recall effectiveness checks to verify recalling firms notify their customers of the recall and that steps are taken to make certain that the product is no longer available to consumers.`,
    source: "FSIS",
  },
  {
    quote: `(In 2016) the company recalled more than 132,000 pounds of chicken nuggets due to contamination with hard plastic, which the USDA rated as a \u201Chigh\u201D health risk.`,
    source: "Fortune.com",
  },
  {
    quote: `At least 60 people have been sickened and 31 hospitalized after eating prepackaged, presliced melon contaminated with salmonella, the Centers for Disease Control and Prevention (CDC) first announced on June 8.`,
    source: "Consumer Reports",
  },
  {
    quote: `Sixty-three people infected with the outbreak strains of E.coli O121 or O26 were reported from 24 states.`,
    source: "FDA",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE-SPECIFIC CSS                                                 */
/* ------------------------------------------------------------------ */
const HOME_CSS = `
/* Carousel / rslides */
.carousel{position:relative;overflow:hidden}
.carousel-track{position:relative;width:100%}
.carousel-track .slide{position:absolute;display:none;width:100%;left:0;top:0;opacity:0;transition:opacity .6s ease}
.carousel-track .slide:first-child{position:relative;display:block;opacity:1}
.carousel-track .slide.active{display:block;opacity:1;position:relative}
.carousel-dots{list-style:none;padding:0;margin:1.5rem 0 0;text-align:center;display:flex;justify-content:center;gap:10px}
.carousel-dots li{display:inline}
.carousel-dots li a{display:inline-block;width:6px;height:6px;border-radius:15px;background:rgba(0,0,0,.2);text-indent:-9999px;overflow:hidden;box-shadow:inset 0 0 2px 0 rgba(0,0,0,.3);transition:background .3s}
.carousel-dots li.active a{background:#222}

/* Customer testimonial styling */
.customer-carousel{padding:76px 32px}
.customer-carousel h2{color:#fff;font-weight:400;text-align:center;font-size:42px;margin-bottom:2rem}
.customer-carousel blockquote{font-size:1.15rem;font-style:italic;color:#fff;line-height:1.7;margin:0 auto 1.25rem;max-width:800px;text-align:center;font-weight:bold}
.customer-carousel .source{text-align:right;max-width:800px;margin:0 auto;line-height:1}
.customer-carousel .source p{color:#fff;font-size:.95rem;margin:0}

/* Safety quotes carousel */
.safety-carousel{padding:76px 32px}
.safety-carousel h2{color:#fff;font-weight:400;text-align:center;font-size:42px;margin-bottom:2rem}
.safety-carousel blockquote{font-size:1.15rem;font-style:italic;color:#fff;line-height:1.7;margin:0 auto 1.25rem;max-width:800px;text-align:center;font-weight:bold}
.safety-carousel .source{text-align:center;max-width:800px;margin:0 auto;color:rgba(255,255,255,.85);font-size:.95rem}

/* Hero video bg */
.video-hero{display:flex;align-items:center;justify-content:center}
.video-bg{position:absolute;inset:0;z-index:0;overflow:hidden}
.video-bg iframe{pointer-events:none}

/* Intro / value prop section */
.intro-section{background:#fff;padding:76px 32px}
.intro-section .intro-inner{max-width:800px;margin:0 auto;text-align:center}
.intro-section h1{font-size:46px;color:#272727;font-weight:700;margin-bottom:1.25rem;line-height:1.4em;letter-spacing:1.34px;text-transform:uppercase}
.intro-section p{font-size:23px;color:#272727;line-height:1.4em;font-weight:300;letter-spacing:.43px}

/* Video embed */
.video-embed{background:#fff;padding:0 32px 76px}
.video-embed .video-inner{max-width:800px;margin:0 auto;position:relative;padding-bottom:56.25%;height:0;overflow:hidden}
.video-embed .video-inner iframe{position:absolute;top:0;left:0;width:100%;height:100%}

/* Decades of Trust */
.decades-section{background:#fff;padding:76px 32px}
.decades-section .decades-inner{max-width:800px;margin:0 auto;text-align:center}
.decades-section h1{font-size:46px;color:#272727;font-weight:700;margin-bottom:1.25rem;line-height:1.4em;letter-spacing:1.34px;text-transform:uppercase}
.decades-section p{font-size:23px;color:#000;line-height:1.4em;font-weight:300;letter-spacing:.43px}

/* Our Solution section */
.solution-section{background:#f5f5f5;padding:76px 32px}
.solution-section h1{text-align:center;font-size:46px;color:#272727;font-weight:700;letter-spacing:1.34px;text-transform:uppercase;line-height:1.4em;margin-bottom:2rem}
.solution-pillars{display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;max-width:1100px;margin:0 auto}
.solution-pillar{flex:0 1 280px;text-align:center}
.solution-pillar .icon-circle{width:90px;height:90px;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;background:#00d49d;border-radius:50%}
.solution-pillar .icon-circle i{font-size:3em;color:#fff;line-height:90px}
.solution-pillar h3{font-size:1rem;font-weight:700;color:#272727;text-transform:none;margin:0}
.solution-section .learn-more-btn{display:block;text-align:center;margin-top:2rem}
.solution-section .learn-more-btn a{display:inline-block;padding:1em 1.5em;border:2px solid #272727;color:#272727;font-weight:600;font-size:.9rem;letter-spacing:1px;text-transform:uppercase;transition:all .1s linear;background:transparent;text-decoration:none;min-width:200px}
.solution-section .learn-more-btn a:hover{background:#1cace6;border-color:#106080;color:#fff}

/* Ticker / news scroller */
.ticker-bar{background:#ed0056;width:100%;overflow:hidden;height:60px;position:relative}
.ticker-bar #scrollerWrapper{width:100%;height:60px;overflow:hidden}
.ticker-bar #scroller{height:100%;margin:0;padding:0;line-height:40px;position:relative;display:flex;animation:tickerScroll 90s linear infinite}
.ticker-bar #scroller li{flex-shrink:0;height:60px;padding:10px 0 0 50px;list-style:none;white-space:nowrap}
.ticker-bar #scroller li a{color:#f1f1f1;text-decoration:none;font-size:.85rem}
@keyframes tickerScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* Contact form section on white */
.contact-section-home{background:#fff;padding:76px 32px}
.contact-section-home h1{font-size:46px;color:#272727;font-weight:700;margin-bottom:1rem;letter-spacing:1.34px;text-transform:uppercase;line-height:1.4em}

/* Footer links in source style */
.footer-links-bar{text-align:center;padding:1rem 0}
.footer-links-bar a{color:rgba(255,255,255,.5);font-size:.85rem;letter-spacing:1px;text-transform:uppercase;margin:0 .75rem;transition:color .2s}
.footer-links-bar a:hover{color:#00afec}
.footer-legal{text-align:center;margin-top:.75rem}
.footer-legal a{color:rgba(255,255,255,.5);font-size:.8rem}

@media(max-width:768px){
  .customer-carousel h2,.safety-carousel h2{font-size:28px}
  .customer-carousel blockquote,.safety-carousel blockquote{font-size:1rem}
  .customer-carousel,.safety-carousel{padding:26px 32px}
  .solution-pillars{flex-direction:column;align-items:center}
  .intro-section h1,.decades-section h1,.solution-section h1{font-size:1.5rem;text-transform:uppercase}
  .intro-section p,.decades-section p{font-size:16px}
  .intro-section,.decades-section,.solution-section,.video-embed,.contact-section-home{padding:26px 32px}
}
`;

/* ------------------------------------------------------------------ */
/*  CAROUSEL JS (lightweight, matches Squarespace responsiveSlides)   */
/* ------------------------------------------------------------------ */
const CAROUSEL_JS = `
(function(){
  function initCarousel(id, interval) {
    var container = document.getElementById(id);
    if (!container) return;
    var slides = container.querySelectorAll('.slide');
    var dots = container.querySelectorAll('.carousel-dots li');
    var current = 0;
    var total = slides.length;
    if (total <= 1) return;

    function showSlide(n) {
      slides[current].classList.remove('active');
      slides[current].style.display = 'none';
      slides[current].style.opacity = '0';
      if (dots[current]) dots[current].classList.remove('active');
      current = (n + total) % total;
      slides[current].style.display = 'block';
      setTimeout(function(){ slides[current].style.opacity = '1'; slides[current].classList.add('active'); }, 30);
      if (dots[current]) dots[current].classList.add('active');
    }

    // Initialize
    for (var i = 1; i < total; i++) {
      slides[i].style.display = 'none';
      slides[i].style.opacity = '0';
    }
    slides[0].classList.add('active');
    slides[0].style.display = 'block';
    slides[0].style.opacity = '1';
    if (dots[0]) dots[0].classList.add('active');

    // Dot click handlers
    dots.forEach(function(dot, idx) {
      dot.querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
        showSlide(idx);
      });
    });

    // Auto-advance
    setInterval(function(){ showSlide(current + 1); }, interval);
  }

  document.addEventListener('DOMContentLoaded', function(){
    initCarousel('customer-carousel', 6000);
    initCarousel('safety-carousel', 8000);
  });
})();
`;

/* ------------------------------------------------------------------ */
/*  TICKER JS (continuous horizontal scroll, matches source scroller) */
/* ------------------------------------------------------------------ */
const TICKER_JS = `
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var scroller = document.getElementById('scroller');
    if (!scroller) return;
    // Duplicate items for seamless loop
    scroller.innerHTML += scroller.innerHTML;
  });
})();
`;

export function renderHome(): string {
  /* Build customer testimonial slides */
  const customerSlides = CUSTOMER_TESTIMONIALS.map((t, i) =>
    `<div class="slide"${i === 0 ? ' style="display:block;opacity:1"' : ''}>
      <figure>
        <blockquote>${t.quote}</blockquote>
        <div class="source">
          <p>&mdash; ${t.name}</p>
          <p>${t.company}</p>
        </div>
      </figure>
    </div>`
  ).join("");

  const customerDots = CUSTOMER_TESTIMONIALS.map((_, i) =>
    `<li${i === 0 ? ' class="active"' : ''}><a href="#">${i + 1}</a></li>`
  ).join("");

  /* Build safety quote slides */
  const safetySlides = SAFETY_QUOTES.map((q, i) =>
    `<div class="slide"${i === 0 ? ' style="display:block;opacity:1"' : ''}>
      <figure>
        <blockquote>${q.quote}</blockquote>
        <div class="source">&mdash; <em>${q.source}</em></div>
      </figure>
    </div>`
  ).join("");

  const safetyDots = SAFETY_QUOTES.map((_, i) =>
    `<li${i === 0 ? ' class="active"' : ''}><a href="#">${i + 1}</a></li>`
  ).join("");

  /* Build ticker items */
  const tickerItems = TICKER_ITEMS.map(t =>
    `<li><a href="https://www.fda.gov">${t}</a></li>`
  ).join("");

  const body = `
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
<style>${HOME_CSS}</style>

<!-- 1. HERO: Dark video background with blue overlay -->
<section class="hero video-hero" style="min-height:700px;position:relative;overflow:hidden">
  <div class="video-bg">
    <img id="hero-fallback" src="/images/iStock-835970896_Small2.jpg" alt="Instant Recall - Food Recall Preparedness" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:1;transition:opacity 1.5s ease">
    <video id="hero-video" autoplay muted loop playsinline poster="/images/iStock-835970896_Small2.jpg" style="position:absolute;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%,-50%);object-fit:cover;z-index:0">
      <source src="/video/BTT_WebsiteHeader_v0005.mp4" type="video/mp4">
    </video>
    <script>
      var v=document.getElementById('hero-video');
      var f=document.getElementById('hero-fallback');
      if(v&&f){v.addEventListener('playing',function(){setTimeout(function(){f.style.opacity='0';setTimeout(function(){f.style.display='none'},1500)},2000)})}
    </script>
  </div>
  <div class="hero-overlay" style="background:rgba(34,68,102,0.68)"></div>
  <div class="hero-content">
    <h1>The <em style="color:#00aeeb;font-style:normal">Leader </em>in food recall preparedness and response</h1>
  </div>
</section>

<!-- 2. VALUE PROP: White background -->
<section class="intro-section">
  <div class="intro-inner">
    <h1>Protecting Your Customers, Your Brand, and Your Bottom Line</h1>
    <p>Instant Recall\u2122 is the fastest, most reliable way to initiate food recalls, withdrawals, holds, and mock events, enabling you to execute critical recall communications quickly, consistently, and with confidence. Our automated workflows, real-time alerts, and 24/7 expert support streamline every step, so you can act fast\u2014no matter how complex the event.</p>
  </div>
</section>

<!-- 3. VIDEO EMBED -->
<section class="video-embed">
  <div class="video-inner">
    <iframe src="https://player.vimeo.com/video/1152623274?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</section>

<!-- 4. CUSTOMER TESTIMONIALS: Cyan carousel -->
<section style="background:#00afec">
  <div class="carousel customer-carousel" id="customer-carousel">
    <h2>Customers are Talking...</h2>
    <div class="carousel-track">
      ${customerSlides}
    </div>
    <ul class="carousel-dots">
      ${customerDots}
    </ul>
  </div>
</section>

<!-- 5. DECADES OF TRUST: White background -->
<section class="decades-section">
  <div class="decades-inner">
    <h1>Decades of Trust Among Food Industry Leaders</h1>
    <p>For more than 20 years, Instant Recall has set the standard for recall management across the global food industry. Trusted by suppliers, distributors, retailers, and restaurant chains alike, we combine proven technology with deep expertise and hands-on partnership to help you respond with speed, structure, and certainty.</p>
  </div>
</section>

<!-- 6. OUR SOLUTION: Light gray background with FA icons -->
<section class="solution-section">
  <h1>Our Solution</h1>
  <div class="solution-pillars">
    <div class="solution-pillar">
      <div class="icon-circle"><i class="fas fa-phone-volume"></i></div>
      <h3>Recall Preparedness Consulting</h3>
    </div>
    <div class="solution-pillar">
      <div class="icon-circle"><i class="fas fa-clipboard-list"></i></div>
      <h3>Recall Communications Management</h3>
    </div>
    <div class="solution-pillar">
      <div class="icon-circle"><i class="fas fa-user-shield"></i></div>
      <h3>Regulatory Reporting and audit response</h3>
    </div>
  </div>
  <div class="learn-more-btn">
    <a href="/solution">Learn more</a>
  </div>
</section>

<!-- 7. WHY FOOD SAFETY CAN'T WAIT: Cyan carousel -->
<section style="background:#00afec">
  <div class="carousel safety-carousel" id="safety-carousel">
    <h2>Why Food Safety Can\u2019t Wait</h2>
    <div class="carousel-track">
      ${safetySlides}
    </div>
    <ul class="carousel-dots">
      ${safetyDots}
    </ul>
  </div>
</section>

<!-- 8. CONTACT CTA: White background with HubSpot form -->
<section class="section-white contact-form-section contact-section-home">
  <div class="section-inner">
    <h2 style="color:#272727">Accelerate Your Recall Response</h2>
    <p class="form-subtitle">See how Instant Recall can protect your customers, your organization, and your brand.</p>
    <script src="https://js-na2.hsforms.net/forms/embed/developer/48681528.js" defer></script>
    <div class="hs-form-html" data-region="na2" data-form-id="2759faa2-dc43-43f4-8d4d-8fb442c2d0bf" data-portal-id="48681528"></div>
  </div>
</section>

<!-- 9. NEWS TICKER: Red/coral bar -->
<section class="ticker-bar">
  <div id="scrollerWrapper">
    <ul id="scroller">
      ${tickerItems}
    </ul>
  </div>
</section>

<style>${CITATION_CSS}</style>

${homeCitationBlock()}

${methodologyBlock()}
<script>${CAROUSEL_JS}</script>
<script>${TICKER_JS}</script>`;

  return renderPage({
    title: "Instant Recall -- The Leader in Food Recall Preparedness and Response",
    description:
      "The Leader in Food Recall Preparedness and Response | Protecting Your Customers, Your Organization and Your Brand",
    path: "/",
    jsonLd: JSON_LD,
    body,
  });
}
