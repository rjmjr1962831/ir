export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700;800&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Lato',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#fff;line-height:1.6;background:#272727}
a{color:#00afec;text-decoration:none}
a:hover{text-decoration:underline;color:#33c4ff}

/* Header */
.site-header{background:#272727;padding:0 20px;display:flex;align-items:center;justify-content:space-between;height:80px;position:relative;width:100%;z-index:1000;box-sizing:border-box}
.site-header .logo{display:flex;align-items:center}
.site-header .logo img{height:50px;width:auto}
.site-header nav{display:flex;align-items:center;gap:0;white-space:nowrap}
.site-header nav a{color:#fff;padding:0.5rem 1.25rem;font-size:17px;font-weight:500;letter-spacing:2px;text-transform:uppercase;transition:color 0.2s;text-decoration:none;font-family:'Lato','Helvetica Neue',Helvetica,Arial,sans-serif}
.site-header nav a:hover{color:rgba(255,255,255,.8);text-decoration:none}
.site-header nav a.nav-btn{background:transparent;border:2px solid #fff;color:#fff;padding:1em 1.5em;margin-left:1em;transition:background-color .1s ease-in-out,color .1s ease-in-out;border-radius:0}
.site-header nav a.nav-btn:hover{background:#fff;color:#181818}
.mobile-menu-toggle{display:none;background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer}

/* Hero */
.hero{position:relative;background-size:cover;background-position:center;color:#fff;padding:4rem 2rem;text-align:center;min-height:500px;display:flex;flex-direction:column;align-items:center;justify-content:center}
.hero-overlay{position:absolute;inset:0;z-index:1}
.hero-content{position:relative;z-index:2;max-width:900px}
.hero h1{font-size:46px;margin-bottom:1.25rem;font-weight:700;letter-spacing:1.34px;line-height:1.4em;text-transform:uppercase}
.hero p{max-width:750px;margin:0 auto;font-size:23px;line-height:1.4em;font-weight:300}
.hero .btn{display:inline-block;background:#00afec;color:#fff;padding:.85rem 2.5rem;border-radius:0;font-weight:600;font-size:.9rem;letter-spacing:1px;text-transform:uppercase;margin-top:1.5rem;transition:background 0.2s}
.hero .btn:hover{background:#33c4ff;text-decoration:none}

/* Container */
.container{max-width:1100px;margin:0 auto;padding:76px 32px}

/* Section headings */
.section-title{text-align:center;font-size:1.8rem;color:#fff;margin:2rem 0 .75rem;font-weight:700;letter-spacing:0.5px}
.section-subtitle{text-align:center;color:rgba(255,255,255,.7);margin-bottom:2rem;font-size:1rem;max-width:700px;margin-left:auto;margin-right:auto;font-weight:300}

/* Cards (3-column service pillars) */
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin:2.5rem 0}
.card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2rem;transition:transform 0.2s,box-shadow 0.2s;overflow:hidden}
.card:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,.3)}
.card img{width:100%;height:200px;object-fit:cover;border-radius:2px;margin-bottom:1.25rem}
.card h3{color:#00afec;margin-bottom:.75rem;font-size:1.15rem;font-weight:600;letter-spacing:0.5px}
.card p{font-size:.95rem;color:rgba(255,255,255,.75);line-height:1.7;font-weight:300}

/* Feature icons grid */
.features-section{background:rgba(255,255,255,0.02);padding:4rem 2rem}
.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;max-width:1100px;margin:0 auto}
.feature{text-align:center;padding:2rem 1.5rem}
.feature img{width:80px;height:80px;margin-bottom:1rem;border-radius:50%}
.feature h4{color:#00afec;margin-bottom:.5rem;font-size:1rem;font-weight:600;letter-spacing:0.3px}
.feature p{font-size:.9rem;color:rgba(255,255,255,.7);line-height:1.6;font-weight:300}

/* CTA */
.cta{background:linear-gradient(135deg,#1f1f1f 0%,#333333 100%);color:#fff;text-align:center;padding:4rem 2rem}
.cta h2{font-size:1.8rem;margin-bottom:1rem;font-weight:700}
.cta p{max-width:600px;margin:0 auto 1.25rem;font-size:1.05rem;opacity:.85;font-weight:300}
.cta a.btn{display:inline-block;background:#00afec;color:#fff;padding:.85rem 2.5rem;border-radius:0;font-weight:600;font-size:.9rem;letter-spacing:1px;text-transform:uppercase;transition:background 0.2s}
.cta a.btn:hover{background:#33c4ff;text-decoration:none}

/* Testimonials */
.testimonials{background:rgba(255,255,255,0.02);padding:4rem 2rem}
.testimonials h2{text-align:center;font-size:1.8rem;margin-bottom:2.5rem;font-weight:700;color:#fff}
.testimonial-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:2rem;max-width:1100px;margin:0 auto}
.testimonial{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2rem}
.testimonial blockquote{font-style:italic;color:rgba(255,255,255,.85);line-height:1.7;margin-bottom:1rem;font-size:.95rem;font-weight:300}
.testimonial .attribution{color:#00afec;font-size:.85rem;font-weight:600}
.testimonial .attribution span{display:block;color:rgba(255,255,255,.6);font-weight:400;font-size:.8rem}

/* Routing / portal page */
.route-options{display:flex;flex-direction:column;gap:1.25rem;max-width:500px;margin:2rem auto}
.route-option{display:block;background:#00afec;color:#fff;text-align:center;padding:1.15rem 1.5rem;border-radius:0;font-weight:600;font-size:1rem;letter-spacing:0.5px;text-transform:uppercase;transition:background 0.2s}
.route-option:hover{background:#33c4ff;text-decoration:none;color:#fff}
.route-option.secondary{background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.15)}
.route-option.secondary:hover{background:rgba(255,255,255,0.15)}
.route-option.muted{background:transparent;color:rgba(255,255,255,.5);font-size:.85rem;text-transform:none;letter-spacing:0;font-weight:400}
.route-option.muted:hover{color:#00afec}

/* Contact info */
.contact-info{max-width:600px;margin:0 auto;text-align:center}
.contact-info h3{color:#00afec;font-size:1.1rem;margin-bottom:1rem}
.contact-info p{color:rgba(255,255,255,.8);line-height:1.8;font-weight:300}
.contact-info .phone-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;text-align:left}
.contact-info .phone-grid dt{color:#00afec;font-weight:600;font-size:.85rem;letter-spacing:0.5px;text-transform:uppercase}
.contact-info .phone-grid dd{color:rgba(255,255,255,.85);font-size:1rem;margin-bottom:0.75rem}

/* Ticker (legacy - used on non-home pages) */
.ticker-section{background:#1f1f1f;padding:1.5rem 0;overflow:hidden;border-top:1px solid rgba(0,175,236,0.2);border-bottom:1px solid rgba(0,175,236,0.2)}
.ticker-section h3{text-align:center;color:#00afec;font-size:.85rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:1rem}
.ticker-wrapper{overflow:hidden;position:relative;height:2rem}
.ticker-content{display:flex;gap:3rem;animation:ticker 60s linear infinite;white-space:nowrap;position:absolute}
.ticker-content span{color:rgba(255,255,255,.6);font-size:.8rem;font-weight:300}
@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* About / Bio cards */
.about-intro{max-width:800px;margin:0 auto 2rem;font-size:1.05rem;color:rgba(255,255,255,.8);line-height:1.8;font-weight:300}
.about-intro p{margin-bottom:1rem}
.bio-card{display:flex;flex-direction:column;align-items:center;text-align:center}
.bio-card img{width:150px;height:150px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:2px solid rgba(0,175,236,0.3)}
.bio-card h3{font-size:1.15rem;color:#00afec;margin-bottom:.25rem}
.bio-role{font-weight:600;color:rgba(255,255,255,.6);font-size:.85rem;margin-bottom:.75rem;letter-spacing:0.5px;text-transform:uppercase}
.bio-card p:last-child{font-size:.9rem;color:rgba(255,255,255,.7);line-height:1.7;font-weight:300}

/* Video embed */
.video-section{padding:3rem 2rem;background:rgba(255,255,255,0.02)}
.video-wrapper{max-width:800px;margin:0 auto;border-radius:4px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.3)}

/* Decades of trust */
.trust-section{text-align:center;padding:4rem 2rem;max-width:900px;margin:0 auto}
.trust-section h2{font-size:1.8rem;color:#fff;margin-bottom:1.25rem;font-weight:700}
.trust-section p{color:rgba(255,255,255,.75);font-size:1.05rem;line-height:1.8;font-weight:300}

/* Legal pages */
.legal{max-width:800px;margin:0 auto;padding:2rem}
.legal h1{font-size:1.8rem;margin-bottom:1rem;color:#fff}
.legal h2{font-size:1.3rem;margin:1.5rem 0 .5rem;color:#00afec}
.legal h3{font-size:1.1rem;margin:1rem 0 .4rem;color:rgba(255,255,255,.9)}
.legal p,.legal li{font-size:.95rem;color:rgba(255,255,255,.7);line-height:1.7;margin-bottom:.5rem;font-weight:300}
.legal ul{padding-left:1.5rem;margin-bottom:1rem}
.legal ol{padding-left:1.5rem;margin-bottom:1rem}

/* Why Food Safety section */
.news-ticker{background:rgba(255,255,255,0.02);padding:4rem 2rem}
.news-ticker h2{text-align:center;font-size:1.8rem;color:#fff;margin-bottom:2rem;font-weight:700}
.news-quotes{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;max-width:1100px;margin:0 auto}
.news-quote{background:rgba(255,255,255,0.04);border-left:3px solid #00afec;padding:1.25rem 1.5rem;border-radius:0 4px 4px 0}
.news-quote p{font-style:italic;color:rgba(255,255,255,.8);font-size:.9rem;line-height:1.6;font-weight:300;margin-bottom:.5rem}
.news-quote cite{color:#00afec;font-size:.8rem;font-weight:500;font-style:normal}

/* Footer */
.site-footer{background:#201a16;color:rgba(255,255,255,.4);padding:3rem 2rem;border-top:1px solid rgba(255,255,255,0.05)}
.footer-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 3fr 1fr;gap:2rem;align-items:start}
.footer-left{display:flex;flex-direction:column;align-items:center;gap:.5rem}
.footer-left img{height:80px;width:auto}
.footer-bottom{grid-column:1/-1;text-align:center;margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.05);font-size:.8rem}
.footer-bottom a{color:rgba(255,255,255,.35);transition:color .2s}
.footer-bottom a:hover{color:#00afec}

/* Schedule embed */
.schedule-section{max-width:800px;margin:0 auto;padding:2rem;text-align:center}
.schedule-section p{color:rgba(255,255,255,.8);font-size:1.05rem;margin-bottom:2rem;font-weight:300}

/* Section backgrounds */
.section-white{background:#fff;color:#272727;padding:4rem 2rem}
.section-white h2,.section-white h3{color:#272727}
.section-white p{color:#3e3e3e}
.section-white a{color:#00afec}

.section-cyan{background:#00afec;color:#fff;padding:4rem 2rem}
.section-cyan h2,.section-cyan h3{color:#fff}
.section-cyan p{color:rgba(255,255,255,.95)}
.section-cyan a{color:#fff;text-decoration:underline}
.section-cyan blockquote{color:#fff;border-left-color:rgba(255,255,255,.5)}

.section-gray{background:#f6f6f6;color:#272727;padding:4rem 2rem}
.section-gray h2,.section-gray h3{color:#272727}
.section-gray p{color:#3e3e3e}

.section-dark{background:#272727;color:#fff;padding:4rem 2rem}

/* Nav button - defined in header section above */

/* Service icons */
.service-icon{width:100px;height:100px;border-radius:50%;background:#00afec;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem}
.service-icon img{width:50px;height:50px;filter:brightness(0) invert(1)}

/* Section inner */
.section-inner{max-width:800px;margin:0 auto;text-align:center}

/* Single testimonial */
.testimonial-single{max-width:700px;margin:0 auto;text-align:center}
.testimonial-single blockquote{font-size:1.25rem;font-weight:600;color:#fff;font-style:italic;line-height:1.6;margin-bottom:1.5rem}
.testimonial-single .attribution{color:rgba(255,255,255,.9);font-size:.9rem}

/* Outline button */
.btn-outline{display:inline-block;border:2px solid #272727;color:#272727;padding:.75rem 2.5rem;font-weight:600;font-size:.9rem;letter-spacing:1px;text-transform:uppercase;transition:all 0.2s;background:transparent}
.btn-outline:hover{background:#272727;color:#fff;text-decoration:none}

/* Responsive */
@media(max-width:640px){
  .hero h1{font-size:2em}
  .hero p{font-size:1rem}
  .hero{padding:4rem 1.5rem;min-height:350px}
  .site-header{flex-direction:column;height:auto;padding:1rem 1.5rem;position:relative;background:#575757}
  .site-header nav{margin-top:.5rem;flex-wrap:wrap;justify-content:center}
  .site-header nav a{padding:0.4rem 0.75rem;font-size:.75rem}
  .site-header nav a.nav-btn{padding:0.4rem 0.75rem;margin-left:0;border-width:2px}
  .cards{grid-template-columns:1fr}
  .features{grid-template-columns:1fr}
  .testimonial-grid{grid-template-columns:1fr}
  .footer-inner{grid-template-columns:1fr;text-align:center}
  .footer-left{align-items:center}
  .footer-center{grid-column:1 !important}
  .contact-info .phone-grid{grid-template-columns:1fr}
  blockquote{font-size:22px;line-height:24px}
  .collection-type-index .page-content{padding:26px 32px !important}
}
`;
