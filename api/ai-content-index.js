export const config = { runtime: "edge" };

export default function handler() {
  const index = {
    version: "1.0",
    name: "Instant Recall",
    description:
      "The food industry's purpose-built platform for recall preparedness, communications management, and regulatory compliance. A BellTower Technologies solution.",
    url: "https://www.instantrecall.com",
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
