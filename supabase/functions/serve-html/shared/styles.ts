export const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,sans-serif;color:#1a1a2e;line-height:1.6;background:#fff}
a{color:#0d47a1;text-decoration:none}
a:hover{text-decoration:underline}

/* Header */
.site-header{background:#0d47a1;padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:64px}
.site-header .logo{color:#fff;font-size:1.25rem;font-weight:700;letter-spacing:.5px}
.site-header nav a{color:rgba(255,255,255,.9);margin-left:1.5rem;font-size:.9rem;font-weight:500}
.site-header nav a:hover{color:#fff;text-decoration:none}

/* Hero */
.hero{background:linear-gradient(135deg,#0d47a1 0%,#1565c0 50%,#1976d2 100%);color:#fff;padding:4rem 2rem;text-align:center}
.hero h1{font-size:2.5rem;margin-bottom:1rem;font-weight:800}
.hero p{max-width:700px;margin:0 auto;font-size:1.15rem;opacity:.95;line-height:1.7}

/* Container */
.container{max-width:1100px;margin:0 auto;padding:2rem}

/* Cards */
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin:2rem 0}
.card{background:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;padding:1.5rem;transition:box-shadow .2s}
.card:hover{box-shadow:0 4px 16px rgba(0,0,0,.08)}
.card h3{color:#0d47a1;margin-bottom:.5rem;font-size:1.1rem}
.card p{font-size:.95rem;color:#444;line-height:1.6}

/* Features */
.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;margin:2rem 0}
.feature{padding:1.25rem;border-left:3px solid #0d47a1;background:#fafafa;border-radius:0 6px 6px 0}
.feature h4{color:#0d47a1;margin-bottom:.35rem;font-size:1rem}
.feature p{font-size:.9rem;color:#555}

/* CTA */
.cta{background:#0d47a1;color:#fff;text-align:center;padding:3rem 2rem;margin-top:2rem}
.cta h2{font-size:1.8rem;margin-bottom:.75rem}
.cta p{max-width:600px;margin:0 auto .75rem;font-size:1.05rem;opacity:.9}
.cta a.btn{display:inline-block;background:#fff;color:#0d47a1;padding:.75rem 2rem;border-radius:4px;font-weight:600;margin-top:.5rem}
.cta a.btn:hover{background:#e3f2fd;text-decoration:none}

/* Section headings */
.section-title{text-align:center;font-size:1.6rem;color:#1a1a2e;margin:2rem 0 .5rem;font-weight:700}
.section-subtitle{text-align:center;color:#666;margin-bottom:1.5rem;font-size:1rem}

/* Routing / portal page */
.route-options{display:flex;flex-direction:column;gap:1rem;max-width:500px;margin:2rem auto}
.route-option{display:block;background:#0d47a1;color:#fff;text-align:center;padding:1rem 1.5rem;border-radius:6px;font-weight:600;font-size:1.05rem}
.route-option:hover{background:#1565c0;text-decoration:none;color:#fff}
.route-option.secondary{background:#f5f5f5;color:#333;border:1px solid #ddd}
.route-option.secondary:hover{background:#eee}
.route-option.danger{background:#c62828;color:#fff}
.route-option.danger:hover{background:#b71c1c}

/* Legal pages */
.legal{max-width:800px;margin:0 auto;padding:2rem}
.legal h1{font-size:1.8rem;margin-bottom:1rem;color:#1a1a2e}
.legal h2{font-size:1.3rem;margin:1.5rem 0 .5rem;color:#0d47a1}
.legal h3{font-size:1.1rem;margin:1rem 0 .4rem;color:#333}
.legal p,.legal li{font-size:.95rem;color:#444;line-height:1.7;margin-bottom:.5rem}
.legal ul{padding-left:1.5rem;margin-bottom:1rem}
.legal ol{padding-left:1.5rem;margin-bottom:1rem}

/* Footer */
.site-footer{background:#1a1a2e;color:rgba(255,255,255,.8);padding:2rem;text-align:center;font-size:.85rem}
.site-footer a{color:rgba(255,255,255,.9)}
.site-footer .footer-links{margin-bottom:.75rem}
.site-footer .footer-links a{margin:0 .75rem}

/* About / Bio cards */
.about-intro{max-width:800px;margin:0 auto 2rem;font-size:1.05rem;color:#444;line-height:1.8}
.about-intro p{margin-bottom:1rem}
.bio-card h3{font-size:1.15rem;color:#0d47a1;margin-bottom:.25rem}
.bio-role{font-weight:600;color:#1565c0;font-size:.95rem;margin-bottom:.75rem}

/* Responsive */
@media(max-width:768px){
  .hero h1{font-size:1.8rem}
  .hero p{font-size:1rem}
  .site-header{flex-direction:column;height:auto;padding:1rem}
  .site-header nav{margin-top:.5rem}
  .site-header nav a{margin:0 .75rem}
  .cards{grid-template-columns:1fr}
  .features{grid-template-columns:1fr}
}
`;
