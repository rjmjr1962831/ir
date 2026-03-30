export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Raleway',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#fff;line-height:1.6;background:#0b0b1a}
a{color:#c8a951;text-decoration:none}
a:hover{text-decoration:underline;color:#e0c36a}

/* Header */
.site-header{background:#0b0b1a;padding:0 3rem;display:flex;align-items:center;justify-content:space-between;height:80px;border-bottom:1px solid rgba(255,255,255,0.08)}
.site-header .logo{display:flex;align-items:center}
.site-header .logo img{height:50px;width:auto}
.site-header nav{display:flex;align-items:center;gap:0}
.site-header nav a{color:rgba(255,255,255,.85);padding:0.5rem 1.25rem;font-size:.85rem;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;transition:color 0.2s}
.site-header nav a:hover{color:#c8a951;text-decoration:none}
.mobile-menu-toggle{display:none;background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer}

/* Hero */
.hero{position:relative;background-size:cover;background-position:center;color:#fff;padding:6rem 2rem;text-align:center;min-height:500px;display:flex;flex-direction:column;align-items:center;justify-content:center}
.hero-overlay{position:absolute;inset:0;background:rgba(11,11,26,0.75);z-index:0}
.hero-content{position:relative;z-index:1;max-width:900px}
.hero h1{font-size:2.8rem;margin-bottom:1.25rem;font-weight:700;letter-spacing:0.5px;line-height:1.2}
.hero p{max-width:750px;margin:0 auto;font-size:1.1rem;opacity:.9;line-height:1.8;font-weight:300}
.hero .btn{display:inline-block;background:#c8a951;color:#0b0b1a;padding:.85rem 2.5rem;border-radius:0;font-weight:600;font-size:.9rem;letter-spacing:1px;text-transform:uppercase;margin-top:1.5rem;transition:background 0.2s}
.hero .btn:hover{background:#e0c36a;text-decoration:none}

/* Container */
.container{max-width:1100px;margin:0 auto;padding:3rem 2rem}

/* Section headings */
.section-title{text-align:center;font-size:1.8rem;color:#fff;margin:2rem 0 .75rem;font-weight:700;letter-spacing:0.5px}
.section-subtitle{text-align:center;color:rgba(255,255,255,.7);margin-bottom:2rem;font-size:1rem;max-width:700px;margin-left:auto;margin-right:auto;font-weight:300}

/* Cards (3-column service pillars) */
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin:2.5rem 0}
.card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2rem;transition:transform 0.2s,box-shadow 0.2s;overflow:hidden}
.card:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,.3)}
.card img{width:100%;height:200px;object-fit:cover;border-radius:2px;margin-bottom:1.25rem}
.card h3{color:#c8a951;margin-bottom:.75rem;font-size:1.15rem;font-weight:600;letter-spacing:0.5px}
.card p{font-size:.95rem;color:rgba(255,255,255,.75);line-height:1.7;font-weight:300}

/* Feature icons grid */
.features-section{background:rgba(255,255,255,0.02);padding:4rem 2rem}
.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;max-width:1100px;margin:0 auto}
.feature{text-align:center;padding:2rem 1.5rem}
.feature img{width:80px;height:80px;margin-bottom:1rem;border-radius:50%}
.feature h4{color:#c8a951;margin-bottom:.5rem;font-size:1rem;font-weight:600;letter-spacing:0.3px}
.feature p{font-size:.9rem;color:rgba(255,255,255,.7);line-height:1.6;font-weight:300}

/* CTA */
.cta{background:linear-gradient(135deg,#0f0f2e 0%,#1a1a3e 100%);color:#fff;text-align:center;padding:4rem 2rem}
.cta h2{font-size:1.8rem;margin-bottom:1rem;font-weight:700}
.cta p{max-width:600px;margin:0 auto 1.25rem;font-size:1.05rem;opacity:.85;font-weight:300}
.cta a.btn{display:inline-block;background:#c8a951;color:#0b0b1a;padding:.85rem 2.5rem;border-radius:0;font-weight:600;font-size:.9rem;letter-spacing:1px;text-transform:uppercase;transition:background 0.2s}
.cta a.btn:hover{background:#e0c36a;text-decoration:none}

/* Testimonials */
.testimonials{background:rgba(255,255,255,0.02);padding:4rem 2rem}
.testimonials h2{text-align:center;font-size:1.8rem;margin-bottom:2.5rem;font-weight:700;color:#fff}
.testimonial-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:2rem;max-width:1100px;margin:0 auto}
.testimonial{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2rem}
.testimonial blockquote{font-style:italic;color:rgba(255,255,255,.85);line-height:1.7;margin-bottom:1rem;font-size:.95rem;font-weight:300}
.testimonial .attribution{color:#c8a951;font-size:.85rem;font-weight:600}
.testimonial .attribution span{display:block;color:rgba(255,255,255,.6);font-weight:400;font-size:.8rem}

/* Routing / portal page */
.route-options{display:flex;flex-direction:column;gap:1.25rem;max-width:500px;margin:2rem auto}
.route-option{display:block;background:#c8a951;color:#0b0b1a;text-align:center;padding:1.15rem 1.5rem;border-radius:0;font-weight:600;font-size:1rem;letter-spacing:0.5px;text-transform:uppercase;transition:background 0.2s}
.route-option:hover{background:#e0c36a;text-decoration:none;color:#0b0b1a}
.route-option.secondary{background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.15)}
.route-option.secondary:hover{background:rgba(255,255,255,0.15)}
.route-option.muted{background:transparent;color:rgba(255,255,255,.5);font-size:.85rem;text-transform:none;letter-spacing:0;font-weight:400}
.route-option.muted:hover{color:#c8a951}

/* Contact info */
.contact-info{max-width:600px;margin:0 auto;text-align:center}
.contact-info h3{color:#c8a951;font-size:1.1rem;margin-bottom:1rem}
.contact-info p{color:rgba(255,255,255,.8);line-height:1.8;font-weight:300}
.contact-info .phone-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;text-align:left}
.contact-info .phone-grid dt{color:#c8a951;font-weight:600;font-size:.85rem;letter-spacing:0.5px;text-transform:uppercase}
.contact-info .phone-grid dd{color:rgba(255,255,255,.85);font-size:1rem;margin-bottom:0.75rem}

/* Ticker */
.ticker-section{background:#0f0f2e;padding:1.5rem 0;overflow:hidden;border-top:1px solid rgba(200,169,81,0.2);border-bottom:1px solid rgba(200,169,81,0.2)}
.ticker-section h3{text-align:center;color:#c8a951;font-size:.85rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:1rem}
.ticker-wrapper{overflow:hidden;position:relative;height:2rem}
.ticker-content{display:flex;gap:3rem;animation:ticker 60s linear infinite;white-space:nowrap;position:absolute}
.ticker-content span{color:rgba(255,255,255,.6);font-size:.8rem;font-weight:300}
@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* About / Bio cards */
.about-intro{max-width:800px;margin:0 auto 2rem;font-size:1.05rem;color:rgba(255,255,255,.8);line-height:1.8;font-weight:300}
.about-intro p{margin-bottom:1rem}
.bio-card{display:flex;flex-direction:column;align-items:center;text-align:center}
.bio-card img{width:150px;height:150px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:2px solid rgba(200,169,81,0.3)}
.bio-card h3{font-size:1.15rem;color:#c8a951;margin-bottom:.25rem}
.bio-role{font-weight:600;color:rgba(255,255,255,.6);font-size:.85rem;margin-bottom:.75rem;letter-spacing:0.5px;text-transform:uppercase}
.bio-card p:last-child{font-size:.9rem;color:rgba(255,255,255,.7);line-height:1.7;font-weight:300}

/* Decades of trust */
.trust-section{text-align:center;padding:4rem 2rem;max-width:900px;margin:0 auto}
.trust-section h2{font-size:1.8rem;color:#fff;margin-bottom:1.25rem;font-weight:700}
.trust-section p{color:rgba(255,255,255,.75);font-size:1.05rem;line-height:1.8;font-weight:300}

/* Legal pages */
.legal{max-width:800px;margin:0 auto;padding:2rem}
.legal h1{font-size:1.8rem;margin-bottom:1rem;color:#fff}
.legal h2{font-size:1.3rem;margin:1.5rem 0 .5rem;color:#c8a951}
.legal h3{font-size:1.1rem;margin:1rem 0 .4rem;color:rgba(255,255,255,.9)}
.legal p,.legal li{font-size:.95rem;color:rgba(255,255,255,.7);line-height:1.7;margin-bottom:.5rem;font-weight:300}
.legal ul{padding-left:1.5rem;margin-bottom:1rem}
.legal ol{padding-left:1.5rem;margin-bottom:1rem}

/* Why Food Safety section */
.news-ticker{background:rgba(255,255,255,0.02);padding:4rem 2rem}
.news-ticker h2{text-align:center;font-size:1.8rem;color:#fff;margin-bottom:2rem;font-weight:700}
.news-quotes{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;max-width:1100px;margin:0 auto}
.news-quote{background:rgba(255,255,255,0.04);border-left:3px solid #c8a951;padding:1.25rem 1.5rem;border-radius:0 4px 4px 0}
.news-quote p{font-style:italic;color:rgba(255,255,255,.8);font-size:.9rem;line-height:1.6;font-weight:300;margin-bottom:.5rem}
.news-quote cite{color:#c8a951;font-size:.8rem;font-weight:500;font-style:normal}

/* Footer */
.site-footer{background:#060612;color:rgba(255,255,255,.6);padding:3rem 2rem;border-top:1px solid rgba(255,255,255,0.05)}
.footer-inner{max-width:1100px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1.5rem}
.footer-left{display:flex;flex-direction:column;gap:.75rem}
.footer-left img{height:80px;width:auto}
.footer-links{display:flex;flex-direction:column;gap:.5rem}
.footer-links a{color:rgba(255,255,255,.7);font-size:.85rem;letter-spacing:0.5px;transition:color 0.2s}
.footer-links a:hover{color:#c8a951}
.footer-bottom{width:100%;text-align:center;margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,0.05);font-size:.8rem}
.footer-bottom a{color:rgba(255,255,255,.5)}
.footer-nav{display:flex;gap:1.5rem;justify-content:center;margin-top:.75rem}
.footer-nav a{color:rgba(255,255,255,.5);font-size:.75rem;letter-spacing:1px;text-transform:uppercase}
.footer-nav a:hover{color:#c8a951}

/* Schedule embed */
.schedule-section{max-width:800px;margin:0 auto;padding:2rem;text-align:center}
.schedule-section p{color:rgba(255,255,255,.8);font-size:1.05rem;margin-bottom:2rem;font-weight:300}

/* Responsive */
@media(max-width:768px){
  .hero h1{font-size:1.8rem}
  .hero p{font-size:1rem}
  .hero{padding:4rem 1.5rem;min-height:350px}
  .site-header{flex-direction:column;height:auto;padding:1rem 1.5rem}
  .site-header nav{margin-top:.5rem;flex-wrap:wrap;justify-content:center}
  .site-header nav a{padding:0.4rem 0.75rem;font-size:.75rem}
  .cards{grid-template-columns:1fr}
  .features{grid-template-columns:1fr}
  .testimonial-grid{grid-template-columns:1fr}
  .footer-inner{flex-direction:column;text-align:center;align-items:center}
  .footer-links{align-items:center}
  .contact-info .phone-grid{grid-template-columns:1fr}
}
`;
