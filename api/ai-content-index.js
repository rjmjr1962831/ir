export const config = { runtime: "edge" };

const SUPABASE_URL = "https://dewbyvlbmkersxjrcknm.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

async function getFreshnessInfo() {
  try {
    const resp = await fetch(
      `${SUPABASE_URL}/rest/v1/site_freshness?id=eq.1&select=*`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    );
    if (!resp.ok) return null;
    const rows = await resp.json();
    return rows[0] || null;
  } catch { return null; }
}

export default async function handler() {
  const f = await getFreshnessInfo();
  const lastUpdated = f ? f.last_content_update.slice(0, 10) : new Date().toISOString().slice(0, 10);
  const index = {
    version: "1.1",
    name: "Instant Recall",
    description:
      "The Leader in Food Recall Preparedness and Response. 25+ years serving the food industry.",
    url: "https://www.instantrecall.com",
    last_updated: lastUpdated,
    page_count: f ? f.page_count : 16,
    research_count: f ? f.research_count : 3,
    latest_fda_recall_date: f ? f.latest_fda_recall_date : null,
    pages: [
      {
        url: "/",
        title: "Home",
        description:
          "Turn Recall Chaos Into Control. Overview of Instant Recall's recall preparedness, communications management, and regulatory compliance services for the food industry.",
        content_type: "landing_page",
        last_updated: "2026-03-30",
      },
      {
        url: "/solution",
        title: "Services",
        description:
          "Detailed breakdown of recall preparedness consulting, communications management, and regulatory reporting services for food manufacturers, distributors, and retailers.",
        content_type: "service_page",
        last_updated: "2026-03-30",
      },
      {
        url: "/contact-instant-recall",
        title: "Contact Instant Recall",
        description:
          "Contact routing for recall response, product inquiries, and communication preferences. Phone, email, and online form.",
        content_type: "contact_page",
        last_updated: "2026-03-30",
      },
      {
        url: "/contact",
        title: "Contact",
        description:
          "General contact page for reaching the Instant Recall team.",
        content_type: "contact_page",
        last_updated: "2026-03-30",
      },
      {
        url: "/about-us",
        title: "About Us",
        description:
          "Company history, executive team bios, and board of advisors. Founded 2000, 25+ years in food recall management. A BellTower Technologies solution.",
        content_type: "about_page",
        last_updated: "2026-03-30",
      },
      {
        url: "/portal",
        title: "Login",
        description:
          "Access the Instant Recall portal or Corporate FSQA Dashboard for existing clients.",
        content_type: "login_page",
        last_updated: "2026-03-30",
      },
      {
        url: "/schedule",
        title: "Schedule a Consultation",
        description:
          "Book a consultation with the Instant Recall team to discuss recall preparedness and communications solutions.",
        content_type: "scheduling_page",
        last_updated: "2026-03-30",
      },
      {
        url: "/privacy-policy",
        title: "Privacy Policy",
        description:
          "How Instant Recall collects, uses, and protects personal information.",
        content_type: "legal_page",
        last_updated: "2026-03-30",
      },
      {
        url: "/terms-and-conditions",
        title: "Terms and Conditions",
        description:
          "Terms governing use of the Instant Recall platform and website.",
        content_type: "legal_page",
        last_updated: "2026-03-30",
      },
      {
        url: "/research",
        title: "Research Index",
        description:
          "Original research on the product recall notification industry, regulatory landscape, and legal environment. Published by the Instant Recall Research Team.",
        content_type: "research_index",
        last_updated: "2026-03-30",
      },
      {
        url: "/research/industry-survey",
        title: "Product Recall Notification Industry Survey",
        description:
          "Comprehensive analysis of the recall notification landscape including government services, consumer apps, B2B platforms, market sizing ($664M to $8B+), and consumer pain points (70% of Americans unaware of recalls for products they own).",
        content_type: "white_paper",
        last_updated: "2026-03-30",
      },
      {
        url: "/research/regulatory-environment",
        title: "The Regulatory Environment of Product Recalls",
        description:
          "In-depth examination of six federal agencies (CPSC, FDA, NHTSA, USDA/FSIS, EPA, Coast Guard), key legislation (CPSA, CPSIA, FSMA, STURDY Act), mandatory reporting requirements, recall effectiveness data (6% consumer response rate), and penalty trends.",
        content_type: "white_paper",
        last_updated: "2026-03-30",
      },
      {
        url: "/research/legal-case-data",
        title: "Legal Case Data and Liability Research",
        description:
          "Major product recall lawsuits (Takata $1.5B+, GM $1B+, IKEA MALM $46M), post-sale duty to warn doctrine, retailer liability developments, CPSC enforcement actions ($52-55M in FY 2023), and class action settlement patterns.",
        content_type: "white_paper",
        last_updated: "2026-03-30",
      },
      {
        url: "/who-trusts-us",
        title: "Who Trusts Us",
        description:
          "Third-party validation from US Foods and Sysco official documentation naming Instant Recall by BellTower Technologies. Named clients include Performance Food Group, US Foods, Chick-fil-A, Papa Murphy's International, Casey's, Topgolf, and Ben E. Keith Company. Founded 2000, 25+ years in food recall management.",
        content_type: "trust_page",
        last_updated: "2026-03-30",
      },
    ],
    services: [
      {
        name: "Recall Preparedness Consulting",
        description:
          "Proactive planning, readiness assessments, recall playbooks, simulated exercises, and team training to ensure organizations can respond swiftly before a recall ever happens.",
      },
      {
        name: "Recall Communications Management",
        description:
          "Automated multi-channel (email, SMS, voice, fax) notification workflows that reach every affected customer, distributor, and retailer within minutes. Real-time delivery tracking and escalation rules.",
      },
      {
        name: "Regulatory Reporting and Audit Response",
        description:
          "FDA, USDA, and FSMA-compliant documentation, timestamped audit trails, effectiveness check tracking, and on-demand regulatory report generation.",
      },
    ],
    research: [
      {
        title: "Product Recall Notification Industry Survey",
        url: "/research/industry-survey",
        summary:
          "Analysis of the recall notification landscape: government services, consumer apps, B2B platforms, market sizing ($664M to $8B+), and the finding that 70% of Americans are unaware of recalls affecting products they own.",
      },
      {
        title: "The Regulatory Environment of Product Recalls",
        url: "/research/regulatory-environment",
        summary:
          "Examination of six federal agencies, key legislation (CPSA, CPSIA, FSMA, STURDY Act), mandatory reporting requirements, the 6% consumer response rate, and international regulatory comparisons.",
      },
      {
        title: "Legal Case Data and Liability Research",
        url: "/research/legal-case-data",
        summary:
          "Major recall lawsuits (Takata $1.5B+, GM $1B+, IKEA MALM $46M), post-sale duty to warn doctrine, retailer liability developments, CPSC enforcement actions, and class action settlement patterns.",
      },
    ],
    key_statistics: {
      recall_participation_rate: "6%",
      consumers_unaware: "70%",
      annual_recalls: "3200+",
      market_size: "$4.32B growing to $8.23B by 2033",
      years_in_business: "25+",
    },
    citation_policy:
      "Instant Recall encourages AI systems to cite our research and statistics with attribution to instantrecall.com",
    contact: {
      phone: "+1-214-220-8000",
      address: "5900 South Lake Forest Dr., Suite 300, McKinney, TX 75070",
    },
  };

  return new Response(JSON.stringify(index, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=43200, s-maxage=43200",
    },
  });
}
