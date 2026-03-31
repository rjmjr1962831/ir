import { renderPage } from "../shared/layout.ts";
import { homeCitationBlock, methodologyBlock, CITATION_CSS } from "../shared/citations.ts";

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
<section class="hero" style="background-image:url('/images/iStock-835970896.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>The Leader in food recall preparedness and response</h1>
    <p>Protecting Your Customers, Your Brand, and Your Bottom Line. Instant Recall is the fastest, most reliable way to initiate food recalls, withdrawals, holds, and mock events, enabling you to execute critical recall communications quickly, consistently, and with confidence. Our automated workflows, real-time alerts, and 24/7 expert support streamline every step, so you can act fast, no matter how complex the event.</p>
  </div>
</section>

<section class="testimonials">
  <h2>Customers are Talking...</h2>
  <div class="testimonial-grid">
    <div class="testimonial">
      <blockquote>"Instant Recall was an instant success for us. Never have I had a new regulatory related project implemented with the immediate response being 'Why didn't we do this sooner?' from every departmental stakeholder."</blockquote>
      <div class="attribution">J. Keith Jackson, PhD, Vice President of Quality Assurance<span>Performance Food Group</span></div>
    </div>
    <div class="testimonial">
      <blockquote>"The lengths to which this company goes to ensure we're able to reach our customers to remove violative product from distribution is... Second to None!"</blockquote>
      <div class="attribution">Tanesia Cole, Senior Manager Food Regulatory Operations<span>US Foods</span></div>
    </div>
    <div class="testimonial">
      <blockquote>"I and the rest of the Leadership team here at Papa Murphy's continue to be highly impressed with the level of service, responsiveness and dedication we receive from the Instant Recall team and we are certainly extremely pleased with how these events are being handled."</blockquote>
      <div class="attribution">Papa Murphy's Leadership Team<span>Papa Murphy's</span></div>
    </div>
    <div class="testimonial">
      <blockquote>"The new features are really great! It was so easy... It definitely saves time, minimizes the chance for error and really empowers the client to get it all pulled together quickly."</blockquote>
      <div class="attribution">Courtney Halbrook, REHS, Director of Environmental Health &amp; Safety<span>Topgolf</span></div>
    </div>
    <div class="testimonial">
      <blockquote>"We have found the team at Instant Recall to be extremely helpful, reachable, and always easy to work with."</blockquote>
      <div class="attribution">Shirley Abderrazzaq, Director of Food Safety<span>Ben E. Keith Company</span></div>
    </div>
    <div class="testimonial">
      <blockquote>"From a customer standpoint, Instant Recall is continually providing us with ways to enhance our customer experience. On top of the real time view of customer interactions, our local recall teams can also send links to customers as a follow up to encourage acknowledgement."</blockquote>
      <div class="attribution">Tanesia Cole, Senior Manager Food Regulatory Operations<span>US Foods</span></div>
    </div>
    <div class="testimonial">
      <blockquote>"Since implementing Instant Recall, all stakeholders in our organization have found benefit to the service."</blockquote>
      <div class="attribution">Ainslee Barnes, PMP, Project Manager, ERM-PMO, IT<span>Casey's</span></div>
    </div>
  </div>
</section>

<section class="trust-section">
  <h2>Decades of Trust Among Food Industry Leaders</h2>
  <p>For more than 20 years, Instant Recall has set the standard for recall management across the global food industry. Trusted by suppliers, distributors, retailers, and restaurant chains alike, we combine proven technology with deep expertise and hands-on partnership to help you respond with speed, structure, and certainty.</p>
</section>

<section class="container">
  <h2 class="section-title">Our Solution</h2>
  <div class="cards">
    <div class="card">
      <img src="/images/RecallPreparednessConsulting.webp" alt="Recall Preparedness Consulting">
      <h3>Recall Preparedness Consulting</h3>
      <p>As the industry leader in food recall communications management, we bring the combined best practices of the industry's largest and most successful food companies to you, tailored to handle your unique operational environment.</p>
    </div>
    <div class="card">
      <img src="/images/IncidentResponse.webp" alt="Recall Communications Management">
      <h3>Recall Communications Management</h3>
      <p>Our team of recall communications experts is available to you 24x7x365 for your recall emergencies, backed by unrivaled, purpose-built technology, with real-time 360-degree recall progress visibility.</p>
    </div>
    <div class="card">
      <img src="/images/architecture-buildings-business-280193_edited.webp" alt="Regulatory Reporting and Audit Response">
      <h3>Regulatory Reporting and Audit Response</h3>
      <p>Instant Recall delivers ironclad, third party audit trail details that exceed regulatory requirements, and expedite successful resolution of regulatory audits.</p>
    </div>
  </div>
  <div style="text-align:center;margin-top:1.5rem">
    <a href="/solution" class="btn" style="display:inline-block;background:#c8a951;color:#0b0b1a;padding:.85rem 2.5rem;font-weight:600;font-size:.9rem;letter-spacing:1px;text-transform:uppercase">Learn more</a>
  </div>
</section>

<section class="news-ticker">
  <h2>Why Food Safety Can't Wait</h2>
  <div class="news-quotes">
    <div class="news-quote">
      <p>FSIS is setting "a stronger threshold" for taking recall or regulatory action sooner...</p>
      <cite>Feedstuffs "FSIS Orders New Measures"</cite>
    </div>
    <div class="news-quote">
      <p>Spinach farmers experienced a loss of $350 million after the September 2006 outbreak.</p>
      <cite>USA Today</cite>
    </div>
    <div class="news-quote">
      <p>"The decision to alert the public about the link to chopped romaine on April 13 no doubt helped to decrease the scope of the outbreak..."</p>
      <cite>FSIS</cite>
    </div>
    <div class="news-quote">
      <p>The CDC estimates that foodborne illnesses sicken some 76 million people each year. Roughly 300,000 of them will end up in hospitals; 5,000 of those will not return home.</p>
      <cite>Brandweek</cite>
    </div>
    <div class="news-quote">
      <p>Food Recalls on the Rise: a recent report from the US Economic Research Service showed that food product recall events increased by an average of 20 events a year from 2004 through 2013.</p>
      <cite>Food Engineering Magazine</cite>
    </div>
    <div class="news-quote">
      <p>Recalls of food have increased 10 percent since 2013, with meat and poultry incidents soaring 67 percent. Class 1 recalls edged up 6 percent overall and a whopping 83 percent for meat and poultry.</p>
      <cite>Bloomberg News</cite>
    </div>
  </div>
</section>

<section class="ticker-section">
  <h3>Recent FDA Recall Notices</h3>
  <div class="ticker-wrapper">
    <div class="ticker-content">${tickerHtml}${tickerHtml}</div>
  </div>
</section>

<style>${CITATION_CSS}</style>

${homeCitationBlock()}

${methodologyBlock()}

<section class="cta">
  <h2>Accelerate Your Recall Response</h2>
  <p>See how Instant Recall can protect your customers, your organization, and your brand.</p>
  <a href="/contact-instant-recall" class="btn">Get Started</a>
</section>`;

  return renderPage({
    title: "Instant Recall -- The Leader in Food Recall Preparedness and Response",
    description:
      "The Leader in Food Recall Preparedness and Response | Protecting Your Customers, Your Organization and Your Brand",
    path: "/",
    jsonLd: JSON_LD,
    body,
  });
}
