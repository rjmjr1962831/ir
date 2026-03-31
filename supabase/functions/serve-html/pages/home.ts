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

const TICKER_ITEMS = [
  "Weis Markets Issues Recall for Undeclared Egg Allergen In WQ Banana Puddin Ice Cream",
  "Jensen Tuna of Louisiana is Voluntarily Recalling Frozen Ground Tuna Imported from JK Fish",
  "Hercules Candy LLC Issues Allergy Alert on Undeclared Peanuts in Cashew Brittle Bits",
  "Unilever Issues Allergy Alert on Undeclared Tree Nut in Limited Quantities of Ben &amp; Jerry's",
  "Caito Foods, LLC Voluntarily Recalls Fresh Cut Melon Product Because of Possible Health Risk",
  "Conagra Brands Announces Recall of Hunt's Tomato Paste Cans Due to Potential Presence of Mold",
  "NadaMoo! Voluntarily Recalls Select Pints of Strawberry Cheesecake Due to Undeclared Almond",
  "Henry Avocado Recalls Whole Avocados Because Of Possible Health Risk",
  "Hill's Pet Nutrition Expands Voluntary Recall of Select Canned Dog Food for Elevated Vitamin D",
  "RXBAR Recalls Certain Varieties of Bars Due to a Potential Undeclared Peanut Allergen",
  "Frito-Lay Issues Voluntary Allergy Alert on Undeclared Milk In Stacy's Simply Naked Pita Chips",
  "Hometown Food Company Recalls Pillsbury Unbleached All-Purpose 5lb Flour Due to Possible Health Risk",
];

export function renderHome(): string {
  const tickerHtml = TICKER_ITEMS.map(t => `<span>${t}</span>`).join("");

  const body = `
<style>
.video-hero{display:flex;align-items:center;justify-content:center}
.video-bg{position:absolute;inset:0;z-index:0;overflow:hidden}
.video-bg iframe{pointer-events:none}
</style>

<!-- 1. HERO: Dark, video background -->
<section class="hero video-hero" style="min-height:600px;position:relative;overflow:hidden">
  <div class="video-bg">
    <iframe src="https://player.vimeo.com/video/314904191?background=1&autoplay=1&loop=1&muted=1&quality=720p" frameborder="0" allow="autoplay; fullscreen" style="position:absolute;top:50%;left:50%;width:100vw;height:56.25vw;min-height:100%;min-width:177.78vh;transform:translate(-50%,-50%)"></iframe>
  </div>
  <div class="hero-overlay" style="background:rgba(39,39,39,0.7)"></div>
  <div class="hero-content">
    <h1 style="font-size:2.8rem;text-transform:uppercase;letter-spacing:2px">THE <span style="color:#00afec">LEADER</span> IN FOOD RECALL PREPAREDNESS AND RESPONSE</h1>
  </div>
</section>

<!-- 2. VALUE PROP: White background, dark text -->
<section class="section-white">
  <div class="section-inner">
    <h2 style="font-size:1.8rem;margin-bottom:1.25rem;font-weight:700">Protecting Your Customers, Your Brand, and Your Bottom Line</h2>
    <p style="font-size:1.05rem;line-height:1.8;font-weight:300;margin-bottom:1rem">Instant Recall is the fastest, most reliable way to initiate food recalls, withdrawals, holds, and mock events, enabling you to execute critical recall communications quickly, consistently, and with confidence.</p>
    <p style="font-size:1.05rem;line-height:1.8;font-weight:300;margin-bottom:1rem">Our automated workflows, real-time alerts, and 24/7 expert support streamline every step, so you can act fast, no matter how complex the event.</p>
  </div>
</section>

<!-- 3. VIDEO EMBED: White background continues -->
<section class="section-white" style="padding-top:0">
  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:800px;margin:0 auto;border-radius:4px;box-shadow:0 8px 30px rgba(0,0,0,.15)">
    <iframe src="https://player.vimeo.com/video/1152623274" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe>
  </div>
</section>

<!-- 4. TESTIMONIALS: Cyan solid background -->
<section class="section-cyan" style="padding:5rem 2rem">
  <div class="section-inner">
    <h2 style="font-size:1.8rem;margin-bottom:2.5rem;font-weight:700">Customers are Talking...</h2>
    <div class="testimonial-single">
      <blockquote>"The lengths to which this company goes to ensure we're able to reach our customers to remove violative product from distribution is... Second to None!"</blockquote>
      <div class="attribution">Tanesia Cole, Senior Manager Food Regulatory Operations - US Foods</div>
    </div>
  </div>
</section>

<!-- 5. TRUST STATEMENT: White background -->
<section class="section-white">
  <div class="section-inner">
    <h2 style="font-size:1.8rem;margin-bottom:1.25rem;font-weight:700">Decades of Trust Among Food Industry Leaders</h2>
    <p style="font-size:1.05rem;line-height:1.8;font-weight:300">For more than 20 years, Instant Recall has set the standard for recall management across the global food industry. Trusted by suppliers, distributors, retailers, and restaurant chains alike, we combine proven technology with deep expertise and hands-on partnership to help you respond with speed, structure, and certainty.</p>
  </div>
</section>

<!-- 6. OUR SOLUTION: Light gray background -->
<section class="section-gray">
  <div style="max-width:1100px;margin:0 auto;text-align:center">
    <h2 style="font-size:1.8rem;margin-bottom:2.5rem;font-weight:700">Our Solution</h2>
    <div style="display:flex;justify-content:center;gap:3rem;flex-wrap:wrap">
      <div style="flex:0 1 250px;text-align:center">
        <div class="service-icon"><img src="/images/icon01.webp" alt="Recall Preparedness Consulting"></div>
        <h3 style="font-size:.9rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-top:.75rem">RECALL PREPAREDNESS CONSULTING</h3>
      </div>
      <div style="flex:0 1 250px;text-align:center">
        <div class="service-icon"><img src="/images/icon02.webp" alt="Recall Communications Management"></div>
        <h3 style="font-size:.9rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-top:.75rem">RECALL COMMUNICATIONS MANAGEMENT</h3>
      </div>
      <div style="flex:0 1 250px;text-align:center">
        <div class="service-icon"><img src="/images/icon03.webp" alt="Regulatory Reporting and Audit Response"></div>
        <h3 style="font-size:.9rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-top:.75rem">REGULATORY REPORTING AND AUDIT RESPONSE</h3>
      </div>
    </div>
    <div style="margin-top:2rem">
      <a href="/solution" class="btn-outline">Learn More</a>
    </div>
  </div>
</section>

<!-- 7. WHY FOOD SAFETY CAN'T WAIT: Cyan background -->
<section class="section-cyan">
  <div style="max-width:1100px;margin:0 auto">
    <h2 style="text-align:center;font-size:1.8rem;margin-bottom:2rem;font-weight:700">Why Food Safety Can't Wait</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem">
      <div style="background:rgba(255,255,255,0.15);border-left:3px solid rgba(255,255,255,.5);padding:1.25rem 1.5rem;border-radius:0 4px 4px 0">
        <p style="font-style:italic;font-size:.9rem;line-height:1.6;font-weight:300;margin-bottom:.5rem">FSIS is setting "a stronger threshold" for taking recall or regulatory action sooner...</p>
        <cite style="font-size:.8rem;font-weight:500;font-style:normal;color:rgba(255,255,255,.8)">Feedstuffs "FSIS Orders New Measures"</cite>
      </div>
      <div style="background:rgba(255,255,255,0.15);border-left:3px solid rgba(255,255,255,.5);padding:1.25rem 1.5rem;border-radius:0 4px 4px 0">
        <p style="font-style:italic;font-size:.9rem;line-height:1.6;font-weight:300;margin-bottom:.5rem">Spinach farmers experienced a loss of $350 million after the September 2006 outbreak.</p>
        <cite style="font-size:.8rem;font-weight:500;font-style:normal;color:rgba(255,255,255,.8)">USA Today</cite>
      </div>
      <div style="background:rgba(255,255,255,0.15);border-left:3px solid rgba(255,255,255,.5);padding:1.25rem 1.5rem;border-radius:0 4px 4px 0">
        <p style="font-style:italic;font-size:.9rem;line-height:1.6;font-weight:300;margin-bottom:.5rem">"The decision to alert the public about the link to chopped romaine on April 13 no doubt helped to decrease the scope of the outbreak..."</p>
        <cite style="font-size:.8rem;font-weight:500;font-style:normal;color:rgba(255,255,255,.8)">FSIS</cite>
      </div>
      <div style="background:rgba(255,255,255,0.15);border-left:3px solid rgba(255,255,255,.5);padding:1.25rem 1.5rem;border-radius:0 4px 4px 0">
        <p style="font-style:italic;font-size:.9rem;line-height:1.6;font-weight:300;margin-bottom:.5rem">The CDC estimates that foodborne illnesses sicken some 76 million people each year. Roughly 300,000 of them will end up in hospitals; 5,000 of those will not return home.</p>
        <cite style="font-size:.8rem;font-weight:500;font-style:normal;color:rgba(255,255,255,.8)">Brandweek</cite>
      </div>
      <div style="background:rgba(255,255,255,0.15);border-left:3px solid rgba(255,255,255,.5);padding:1.25rem 1.5rem;border-radius:0 4px 4px 0">
        <p style="font-style:italic;font-size:.9rem;line-height:1.6;font-weight:300;margin-bottom:.5rem">Food Recalls on the Rise: a recent report from the US Economic Research Service showed that food product recall events increased by an average of 20 events a year from 2004 through 2013.</p>
        <cite style="font-size:.8rem;font-weight:500;font-style:normal;color:rgba(255,255,255,.8)">Food Engineering Magazine</cite>
      </div>
      <div style="background:rgba(255,255,255,0.15);border-left:3px solid rgba(255,255,255,.5);padding:1.25rem 1.5rem;border-radius:0 4px 4px 0">
        <p style="font-style:italic;font-size:.9rem;line-height:1.6;font-weight:300;margin-bottom:.5rem">Recalls of food have increased 10 percent since 2013, with meat and poultry incidents soaring 67 percent. Class 1 recalls edged up 6 percent overall and a whopping 83 percent for meat and poultry.</p>
        <cite style="font-size:.8rem;font-weight:500;font-style:normal;color:rgba(255,255,255,.8)">Bloomberg News</cite>
      </div>
    </div>
  </div>
</section>

<!-- 8. NEWS TICKER: Cyan bar -->
<section class="ticker-section">
  <h3>Recent FDA Recall Notices</h3>
  <div class="ticker-wrapper">
    <div class="ticker-content">${tickerHtml}${tickerHtml}</div>
  </div>
</section>

<style>${CITATION_CSS}</style>

${homeCitationBlock()}

${methodologyBlock()}

<!-- 9. CONTACT CTA: White background with form -->
<style>${CONTACT_FORM_CSS}</style>
<section class="section-white contact-form-section">
  <div class="section-inner">
    <h2>Accelerate Your Recall Response</h2>
    <p class="form-subtitle">See how Instant Recall can protect your customers, your organization, and your brand.</p>
    <form id="contact-form">
      ${CONTACT_FORM_HTML}
    </form>
  </div>
</section>
<script>${CONTACT_FORM_JS}</script>`;

  return renderPage({
    title: "Instant Recall -- The Leader in Food Recall Preparedness and Response",
    description:
      "The Leader in Food Recall Preparedness and Response | Protecting Your Customers, Your Organization and Your Brand",
    path: "/",
    jsonLd: JSON_LD,
    body,
  });
}
