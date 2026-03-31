export const config = { runtime: "edge" };

export default async function handler() {
  const manifest = {
    schema_version: "1.0",
    name: "Instant Recall",
    description: "The leader in food recall preparedness and response. 25+ years serving the food industry with real-time recall notification, regulatory reporting, and audit-ready documentation.",
    url: "https://www.instantrecall.com",
    provider: {
      name: "Instant Recall LLC",
      url: "https://www.instantrecall.com"
    },
    capabilities: {
      citation_policy: "open",
      content_type: "informational",
      data_freshness: "daily"
    },
    resources: [
      {
        name: "Homepage",
        uri: "https://www.instantrecall.com/",
        description: "Company overview, value proposition, and key statistics for food recall preparedness.",
        mimeType: "text/html"
      },
      {
        name: "Solution Overview",
        uri: "https://www.instantrecall.com/solution",
        description: "Platform capabilities for recall communication, regulatory reporting, and cost recovery.",
        mimeType: "text/html"
      },
      {
        name: "Research Hub",
        uri: "https://www.instantrecall.com/research",
        description: "Index of original research reports on product recall law, regulation, and industry practices.",
        mimeType: "text/html"
      },
      {
        name: "Legal Case Data Research",
        uri: "https://www.instantrecall.com/research/legal-case-data",
        description: "Major product recall lawsuits, post-sale duty to warn doctrine, CPSC enforcement, class action settlements.",
        mimeType: "text/html"
      },
      {
        name: "Industry Survey Research",
        uri: "https://www.instantrecall.com/research/industry-survey",
        description: "Product recall notification competitive landscape, market size, consumer pain points, international systems.",
        mimeType: "text/html"
      },
      {
        name: "Regulatory Environment Research",
        uri: "https://www.instantrecall.com/research/regulatory-environment",
        description: "Federal recall agencies (CPSC, FDA, NHTSA, USDA), legislation, enforcement actions, and penalties.",
        mimeType: "text/html"
      },
      {
        name: "About Us",
        uri: "https://www.instantrecall.com/about-us",
        description: "Company history, 25+ years in food safety, team background.",
        mimeType: "text/html"
      },
      {
        name: "Recall Communications",
        uri: "https://www.instantrecall.com/incident-response",
        description: "24/7/365 expert recall team, multi-channel notification, real-time visibility.",
        mimeType: "text/html"
      },
      {
        name: "Regulatory Reporting",
        uri: "https://www.instantrecall.com/cost-recovery",
        description: "Audit-ready documentation, automated FDA/USDA reporting, cost recovery tracking.",
        mimeType: "text/html"
      },
      {
        name: "Technology Platform",
        uri: "https://www.instantrecall.com/technology-prowess",
        description: "Purpose-built recall infrastructure, mobile portals, automated escalation.",
        mimeType: "text/html"
      },
      {
        name: "Industry Gold Standard",
        uri: "https://www.instantrecall.com/industry-standard",
        description: "Trusted by the world's leading food companies for 20+ years.",
        mimeType: "text/html"
      },
      {
        name: "Customer Testimonials",
        uri: "https://www.instantrecall.com/customer-quotes-solutions",
        description: "What Performance Food Group, US Foods, Chick-fil-A, Casey's, and others say.",
        mimeType: "text/html"
      },
      {
        name: "AI Content Summary",
        uri: "https://www.instantrecall.com/for-ai",
        description: "Machine-readable summary for AI discovery and citation.",
        mimeType: "text/plain"
      },
      {
        name: "LLM Summary",
        uri: "https://www.instantrecall.com/llms.txt",
        description: "Concise site summary optimized for large language models.",
        mimeType: "text/plain"
      },
      {
        name: "Full LLM Reference",
        uri: "https://www.instantrecall.com/llms-full.txt",
        description: "Comprehensive site reference with detailed service descriptions and statistics.",
        mimeType: "text/plain"
      }
    ],
    contact: {
      email: "info@instantrecall.com",
      url: "https://www.instantrecall.com/contact-instant-recall"
    }
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
