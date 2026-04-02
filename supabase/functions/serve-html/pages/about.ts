import { renderPage } from "../shared/layout.ts";
import { aboutCitationBlock, CITATION_CSS } from "../shared/citations.ts";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "Instant Recall LLC",
    url: "https://www.instantrecall.com",
    description:
      "The global leader in food incident management. For more than two decades, Instant Recall has helped the food industry act with speed, confidence, and clarity when food safety events occur.",
    foundingDate: "2000",
    member: [
      {
        "@type": "Person",
        name: "Michael Martin",
        jobTitle: "Chairman",
      },
      {
        "@type": "Person",
        name: "Shaun Dawson",
        jobTitle: "Senior Vice President for Development",
      },
      {
        "@type": "Person",
        name: "Tim Klein",
        jobTitle: "Vice President and Acting Vice-Chair for Development",
      },
      {
        "@type": "Person",
        name: "Susan Linn",
        jobTitle: "VP of Industry Relations",
      },
      {
        "@type": "Person",
        name: "Michael Schmit",
        jobTitle: "Vice President of Sales",
      },
    ],
  },
});

export function renderAbout(): string {
  const body = `
<style>
  /* About page: white-background branded overrides */
  .about-page { background:#fff; }
  .about-page .container { background:#fff; }
  .about-page .about-intro { color:#3e3e3e; }
  .about-page .about-intro p { color:#3e3e3e; }
  .about-page .section-title { color:#272727; }
  .about-page .cards { gap:2.5rem; }
  .about-page .card { background:#f8f8f8; border:1px solid #e0e0e0; }
  .about-page .card h3 { color:#272727; }
  .about-page .card p { color:#3e3e3e; }
  .about-page .bio-card img { border:2px solid #00afec; }
  .about-page .bio-card h3 { color:#272727; }
  .about-page .bio-role { color:#3e3e3e; }
  .about-page .bio-card p:last-child { color:#3e3e3e; }
  .about-page a { color:#00afec; }
</style>
<div class="about-page">
<section class="hero" style="background-image:url('/images/iStock-685238966.webp')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>About Us</h1>
    <p>The Global Leader in Food Incident Management</p>
  </div>
</section>

<div class="container">
  <div class="about-intro">
    <p>Food is more than a product; it's part of everyday life. It brings families together around the table, marks celebrations and traditions, and fuels communities around the world. The companies that produce, distribute, and serve that food carry an enormous responsibility: protecting the people who trust them.</p>
    <p>Instant Recall exists to help the food industry uphold that responsibility. For more than two decades, our team of food safety and recall experts has helped to ensure that when a food safety or quality event occurs, organizations can act with speed, confidence, and clarity, protecting customers, safeguarding brands, and helping strengthen the safety and integrity of the global food supply.</p>
  </div>

  <h2 class="section-title">Executive Team</h2>

  <div class="cards">
    <div class="card bio-card">
      <img src="/images/MichaelMartin.webp" alt="Michael Martin">
      <h3>Michael Martin</h3>
      <p class="bio-role">Co-Founder &amp; Chairman</p>
      <p>Michael Martin is co-founder and Chairman of InstantRecall LLC. Prior to BellTower, Mike co-founded Red Alert, a provider of network monitoring services. Under his leadership, forgoing debt and venture capital, Red Alert grew within 5 years to serve over half of the Fortune 1000 on a continuing basis. He served as CEO from Red Alert's inception in 1995 until its sale to Keynote Systems, Inc. in late 2000. Previously he held various engineering, sales and management positions at IBM and Nortel Networks. Mike was a President's Endowed Scholar at Texas A&amp;M University.</p>
    </div>
    <div class="card bio-card">
      <img src="/images/ShaunDawson.webp" alt="Shaun Dawson">
      <h3>Shaun Dawson</h3>
      <p class="bio-role">Co-Founder &amp; Senior Vice President for Development</p>
      <p>Shaun Dawson is co-founder and Senior Vice President for Development at InstantRecall. Previously, Shaun served as a software developer at Red Alert, and later as Director of Technology for the Red Alert division of Keynote Systems. Prior to Red Alert, he was the lead Developer and Systems Administrator for Matrix Information and Development Systems (MIDS), where he specialized in Internet performance monitoring. While there, he developed a patented algorithm for detecting Internet performance events. Shaun was a National Merit Scholar and holds a B.S. in Electrical Engineering from the University of Texas at Austin.</p>
    </div>
    <div class="card bio-card">
      <img src="/images/TimKlein.webp" alt="Tim Klein">
      <h3>Tim Klein</h3>
      <p class="bio-role">Co-Founder, Vice President &amp; Acting Vice-Chair for Development</p>
      <p>Tim Klein is co-founder, Vice President and Acting Vice-Chair for Development at InstantRecall. Prior to co-founding InstantRecall, Tim co-founded Red Alert, serving as Red Alert's Chief Technology Officer until Red Alert's sale to Keynote Systems, Inc. in late 2000. Previously, he was a software researcher for Texas Instruments, and a software engineer for Lexis-Nexis, where he co-invented a patented system for specialized natural language processing. He was a National Merit Scholar, and holds an M.S. degree in computer science from Ohio State University, as well as two Bachelor's degrees.</p>
    </div>
    <div class="card bio-card">
      <img src="/images/SusanLinn.webp" alt="Susan Linn">
      <h3>Susan Linn</h3>
      <p class="bio-role">VP of Industry Relations</p>
      <p>Susan Linn is VP of Industry Relations at InstantRecall. Prior to joining InstantRecall, she was Director of Regulatory &amp; Technical Services for Sysco Corporation, where she managed food recalls for 17 years. Susan has over 30 years of experience in the food industry including Food Safety, Quality Assurance, Product Development and Regulatory positions. She holds a B.S. in Food Science and Nutrition from California State University, Northridge and a M.S. in Food Safety from Michigan State University.</p>
    </div>
    <div class="card bio-card">
      <img src="/images/MichaelSchmit_Headshot-1.webp" alt="Michael Schmit">
      <h3>Michael Schmit</h3>
      <p class="bio-role">Vice President of Sales</p>
      <p>Michael Schmit is Vice President of Sales at InstantRecall. He began his sales career with Ringling Bros. and Barnum &amp; Bailey Circus as a regional sales and marketing director. Michael has extensive sales and sales management experience with B2B and B2C companies, spanning more than 30 years with Philips Medical Systems, Kimberly-Clark Professional, Steritech, Solaris Paper and ComplianceMetrix (CMX). He holds a B.A. in Economics from San Diego State University and resides in Austin, TX.</p>
    </div>
  </div>

  <h2 class="section-title">Board of Advisors</h2>

  <div class="cards">
    <div class="card bio-card">
      <img src="/images/WilliamDElliot.webp" alt="William D. Elliott">
      <h3>William D. Elliott</h3>
      <p class="bio-role">Legal Counsel</p>
      <p>William D. Elliott serves as legal counsel for InstantRecall LLC. Elliott is past chair of the Board of Directors of the State Bar of Texas, past chair of the Finance Committee and past member of the Executive Committee. A native of Sherman, TX, Elliott holds law degrees from Southern Methodist University School of Law (J.D. 1973) and New York University School of Law (LL.M. in Taxation 1974).</p>
    </div>
    <div class="card bio-card">
      <img src="/images/ClayCipione.webp" alt="Clay Cipione">
      <h3>Clay Cipione</h3>
      <p class="bio-role">Board Member</p>
      <p>Claymon A. Cipione brings a lifetime of development and operational experience to the board of InstantRecall. Most recently, Cipione was Corporate VP and CIO of AMD, a global provider of innovative processing solutions. Prior to that, Cipione co-founded Newisys, a server and storage company. He was also senior vice president of software development at America Online (AOL). He spent 25 years at IBM where his last assignment was the creation of AIX and the RS6000.</p>
    </div>
    <div class="card bio-card">
      <img src="/images/KM_BW_crop.webp" alt="Kyle Mistele">
      <h3>Kyle Mistele</h3>
      <p class="bio-role">Board Member</p>
      <p>Kyle Mistele brings to InstantRecall a wealth of experience in cybersecurity, artificial intelligence and emerging, best of breed, tech stacks and architectures. He is the founder of Constellate AI, which provides managed private AI solutions for businesses. He holds a Bachelor's degree in Computer Science from Southern Methodist University, and he is an Offensive Security Certified Professional (OSCP).</p>
    </div>
    <div class="card bio-card">
      <img src="/images/AlexeyKarasev.webp" alt="Alexey Karasev">
      <h3>Alexey Karasev</h3>
      <p class="bio-role">Board Member</p>
      <p>Alexey Karasev brings deep technical expertise and strategic insight to the InstantRecall board of advisors.</p>
    </div>
  </div>
</div>

<style>${CITATION_CSS}</style>

${aboutCitationBlock()}

<section class="cta">
  <h2>Ready to Strengthen Your Recall Readiness?</h2>
  <p>Connect with our team to learn how Instant Recall can protect your brand and your customers.</p>
  <a href="/contact-instant-recall" class="btn">Contact Us</a>
</section>
</div>`;

  return renderPage({
    title: "About Us | Instant Recall\u2122",
    description:
      "Meet the Instant Recall team. The global leader in food incident management with more than two decades of food safety and recall expertise.",
    path: "/about-us",
    jsonLd: JSON_LD,
    body,
  });
}
