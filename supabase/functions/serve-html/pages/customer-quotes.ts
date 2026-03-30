import { renderPage } from "../shared/layout.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Customer Testimonials",
  description:
    "What the world's leading food companies say about Instant Recall's recall communications management platform.",
  url: "https://www.instantrecall.com/customer-quotes-solutions",
  publisher: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "J. Keith Jackson, PhD" },
      reviewBody:
        "Instant Recall was an instant success for us. Never have I had a new regulatory related project implemented with the immediate response being 'Why didn't we do this sooner?' from every departmental stakeholder.",
      publisher: {
        "@type": "Organization",
        name: "Performance Food Group",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Tanesia Cole" },
      reviewBody:
        "The lengths to which this company goes to ensure we're able to reach our customers to remove violative product from distribution is... Second to None!",
      publisher: { "@type": "Organization", name: "US Foods" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Shawn Lyons" },
      reviewBody:
        "Instant Recall allows us to be confident in delivering urgent messages to each of our Restaurants. We know that when we launch the communication campaign we are in good hands.",
      publisher: { "@type": "Organization", name: "Chick-fil-A" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ainslee Barnes, PMP" },
      reviewBody:
        "[Instant Recall] provides a path for efficient communication for our Field Operations, an easy to use system for time sensitive activities, audit-ready documentation for our Regulatory Compliance and reliable data for our organization.",
      publisher: { "@type": "Organization", name: "Casey's" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Courtney Halbrook, REHS" },
      reviewBody:
        "The new features are really great! It was so easy... It definitely saves time, minimizes the chance for error and really empowers the client to get it all pulled together quickly.",
      publisher: { "@type": "Organization", name: "Topgolf" },
    },
  ],
});

export function renderCustomerQuotes(): string {
  const body = `
<section class="hero" style="min-height:360px;padding:4rem 2rem">
  <div class="hero-overlay" style="background:rgba(11,11,26,0.85)"></div>
  <div class="hero-content">
    <h1>Customers Are Talking</h1>
    <p>The world's leading food companies trust Instant Recall to protect their customers and their brands. Here is what they have to say.</p>
  </div>
</section>

<section class="testimonials" style="padding:4rem 2rem">
  <div class="testimonial-grid">
    <div class="testimonial">
      <blockquote>"Instant Recall was an instant success for us. Never have I had a new regulatory related project implemented with the immediate response being 'Why didn't we do this sooner?' from every departmental stakeholder."</blockquote>
      <div class="attribution">J. Keith Jackson, PhD<span>Vice President of Quality Assurance, Performance Food Group</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"The lengths to which this company goes to ensure we're able to reach our customers to remove violative product from distribution is... Second to None!"</blockquote>
      <div class="attribution">Tanesia Cole<span>Senior Manager Food Regulatory Operations, US Foods</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"I and the rest of the Leadership team here at Papa Murphy's continue to be highly impressed with the level of service, responsiveness and dedication we receive from the Instant Recall team and we are certainly extremely pleased with how these events are being handled."</blockquote>
      <div class="attribution">Nik Rupp<span>EVP Finance, Papa Murphy's International</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"Instant Recall allows us to be confident in delivering urgent messages to each of our Restaurants. We know that when we launch the communication campaign we are in good hands. There is no time to waste in issues of food safety and brand protection."</blockquote>
      <div class="attribution">Shawn Lyons<span>Supplier Quality and Safety, Supply Chain, Chick-fil-A</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"Recalls are no longer looked at as 'the dreaded email' our team could receive on a Friday night since we have partnered with BellTower Technologies and began using their Instant Recall system."</blockquote>
      <div class="attribution">Shirley Abderrazzaq<span>Director of Food Safety, Ben E. Keith Company</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"Recall and withdrawal incidents are disruptive, difficult circumstances in our business. Having a reliable, trusted partner in Instant Recall makes a big difference when navigating through crises."</blockquote>
      <div class="attribution">Shawn Lyons<span>Supplier Quality and Safety, Supply Chain, Chick-fil-A</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"[Instant Recall] provides a path for efficient communication for our Field Operations, an easy to use system for time sensitive activities, audit-ready documentation for our Regulatory Compliance and reliable data for our organization."</blockquote>
      <div class="attribution">Ainslee Barnes, PMP<span>Project Manager, ERM-PMO, IT, Casey's</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"From the beginning, they've been not only our 3rd party recall communication provider, but also a partner in recall execution and process improvement efforts."</blockquote>
      <div class="attribution">Tanesia Cole<span>Senior Manager Food Regulatory Operations, US Foods</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"The new features... are really great! It was so easy... It definitely saves time, minimizes the chance for error and really empowers the client to get it all pulled together quickly. Of course I had a great teacher with [my IR Recall Manager] walking me through it step by step and patiently guiding me through the process."</blockquote>
      <div class="attribution">Courtney Halbrook, REHS<span>Director of Environmental Health and Safety, Topgolf</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"We have found the team at Instant Recall to be extremely helpful, reachable, and always easy to work with."</blockquote>
      <div class="attribution">Shirley Abderrazzaq<span>Director of Food Safety, Ben E. Keith Company</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"From a customer standpoint, Instant Recall is continually providing us with ways to enhance our customer experience. On top of the real time view of customer interactions, our local recall teams can also send links to customers as a follow up to encourage acknowledgement."</blockquote>
      <div class="attribution">Tanesia Cole<span>Senior Manager Food Regulatory Operations, US Foods</span></div>
    </div>

    <div class="testimonial">
      <blockquote>"Since implementing Instant Recall, all stakeholders in our organization have found benefit to the service."</blockquote>
      <div class="attribution">Ainslee Barnes, PMP<span>Project Manager, ERM-PMO, IT, Casey's</span></div>
    </div>
  </div>
</section>

<section class="cta">
  <h2>Join the Industry Leaders</h2>
  <p>See why the world's leading food companies trust Instant Recall for their recall communications.</p>
  <a href="/contact-instant-recall" class="btn">Contact Us</a>
</section>`;

  return renderPage({
    title: "Customer Testimonials | Instant Recall",
    description:
      "What the world's leading food companies say about Instant Recall. Trusted by Performance Food Group, US Foods, Chick-fil-A, Casey's, Papa Murphy's, Ben E. Keith, Topgolf, and more.",
    path: "/customer-quotes-solutions",
    jsonLd: JSON_LD,
    body,
  });
}
