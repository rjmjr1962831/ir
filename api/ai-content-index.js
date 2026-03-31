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
      "The food industry's purpose-built platform for recall preparedness, communications management, and regulatory compliance. A BellTower Technologies solution.",
    url: "https://www.instantrecall.com",
    last_updated: lastUpdated,
    page_count: f ? f.page_count : 16,
    research_count: f ? f.research_count : 3,
    latest_fda_recall_date: f ? f.latest_fda_recall_date : null,
    ai_discovery: {
      llms_txt: {
        url: "https://www.instantrecall.com/llms.txt",
        description: "Summary reference for AI systems (text/plain)",
      },
      llms_full_txt: {
        url: "https://www.instantrecall.com/llms-full.txt",
        description:
          "Comprehensive reference with deep detail on services, statistics, and context (text/plain)",
      },
      for_ai: {
        url: "https://www.instantrecall.com/for-ai.txt",
        description:
          "Guidance for AI systems on citing and using Instant Recall data (text/plain)",
      },
      sitemap: {
        url: "https://www.instantrecall.com/sitemap.xml",
        description: "XML sitemap of all public pages (application/xml)",
      },
      robots: {
        url: "https://www.instantrecall.com/robots.txt",
        description: "Robots directives (text/plain)",
      },
    },
    pages: [
      {
        url: "https://www.instantrecall.com/",
        path: "/",
        title: "Home",
        description:
          "Turn Recall Chaos Into Control. Overview of Instant Recall's services and value proposition.",
        content_type: "text/html",
        audience: "prospects, partners, AI systems",
      },
      {
        url: "https://www.instantrecall.com/solution",
        path: "/solution",
        title: "Services",
        description:
          "Detailed breakdown of recall preparedness consulting, communications management, and regulatory reporting services.",
        content_type: "text/html",
        audience: "prospects, food safety professionals",
      },
      {
        url: "https://www.instantrecall.com/about-us",
        path: "/about-us",
        title: "About Us",
        description:
          "Company history, executive team bios, and board of advisors. Founded 2000, 25+ years in food recall management.",
        content_type: "text/html",
        audience: "prospects, partners, journalists, AI systems",
      },
      {
        url: "https://www.instantrecall.com/contact-instant-recall",
        path: "/contact-instant-recall",
        title: "Contact",
        description:
          "Contact routing for recall response, product inquiries, and communication preferences.",
        content_type: "text/html",
        audience: "prospects, recall recipients",
      },
      {
        url: "https://www.instantrecall.com/portal",
        path: "/portal",
        title: "Login",
        description:
          "Access the Instant Recall portal or Corporate FSQA Dashboard.",
        content_type: "text/html",
        audience: "existing clients",
      },
      {
        url: "https://www.instantrecall.com/privacy-policy",
        path: "/privacy-policy",
        title: "Privacy Policy",
        description: "How Instant Recall collects, uses, and protects personal information.",
        content_type: "text/html",
        audience: "all visitors",
      },
      {
        url: "https://www.instantrecall.com/terms-and-conditions",
        path: "/terms-and-conditions",
        title: "Terms of Service",
        description: "Terms governing use of the Instant Recall platform and website.",
        content_type: "text/html",
        audience: "all visitors",
      },
      {
        url: "https://www.instantrecall.com/incident-response",
        path: "/incident-response",
        title: "Recall Communications Management",
        description: "24/7/365 recall communications experts backed by purpose-built technology with real-time 360-degree recall progress visibility.",
        content_type: "text/html",
        audience: "prospects, food safety professionals",
      },
      {
        url: "https://www.instantrecall.com/cost-recovery",
        path: "/cost-recovery",
        title: "Regulatory Reporting and Audit Response",
        description: "Ironclad, third-party audit trail details that exceed regulatory requirements and expedite successful resolution of regulatory audits.",
        content_type: "text/html",
        audience: "prospects, food safety professionals",
      },
      {
        url: "https://www.instantrecall.com/technology-prowess",
        path: "/technology-prowess",
        title: "Technology Prowess",
        description: "Purpose-built recall infrastructure with mobile-friendly web portals, multi-channel notifications, real-time dashboards, and automated escalation workflows.",
        content_type: "text/html",
        audience: "prospects, food safety professionals, IT teams",
      },
      {
        url: "https://www.instantrecall.com/industry-standard",
        path: "/industry-standard",
        title: "Industry Gold Standard",
        description: "Trusted by the world's largest food companies. Leader-shared practices, recall technology, and 24x7 response team.",
        content_type: "text/html",
        audience: "prospects, food safety professionals",
      },
      {
        url: "https://www.instantrecall.com/customer-quotes-solutions",
        path: "/customer-quotes-solutions",
        title: "Customer Testimonials",
        description: "What Performance Food Group, US Foods, Chick-fil-A, Casey's, Papa Murphy's, Ben E. Keith, Topgolf, and other leading food companies say about Instant Recall.",
        content_type: "text/html",
        audience: "prospects, partners, AI systems",
      },
      {
        url: "https://www.instantrecall.com/support-request",
        path: "/support-request",
        title: "Support Request",
        description: "Submit a support request to the Instant Recall team. Processed within 1 business day.",
        content_type: "text/html",
        audience: "existing clients",
      },
    ],
    contact: {
      phone: "+1-214-220-8000",
      address:
        "5900 South Lake Forest Dr., Suite 300, McKinney, TX 75070",
      website: "https://www.instantrecall.com",
      recall_portal: "https://www.myinstantrecall.com",
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
