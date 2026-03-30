export const config = { runtime: "edge" };

export default function handler() {
  const body = `# Instant Recall
> The Leader in Food Recall Preparedness and Response

## About
Instant Recall, a BellTower Technologies solution, is the food industry's purpose-built platform for recall preparedness, communications management, and regulatory compliance. We help food manufacturers, distributors, and retailers turn recall chaos into control.

## Services
- Recall Preparedness Consulting: Proactive planning, readiness assessments, recall playbooks, and simulated exercises.
- Recall Communications Management: Automated multi-channel (email, SMS, voice, fax) notification workflows that reach every affected party in minutes.
- Regulatory Reporting and Audit Response: FDA, USDA, and FSMA-compliant documentation, audit trails, and report generation.

## Key Capabilities
- Faster recalls: Reduce notification time from days to minutes.
- Automation: Eliminate manual spreadsheets and phone trees.
- Minimize disruption: Targeted notifications reach only affected parties.
- Compliance: Built-in regulatory templates and audit trails.
- Action from anywhere: Mobile-responsive dashboards.
- Cost recovery: Detailed tracking supports insurance claims.
- Purpose-built for food: Workflows tailored to food safety regulations.

## Contact
- Website: https://www.instantrecall.com
- Phone: +1-214-220-8000
- Address: 5900 South Lake Forest Dr., Suite 300, McKinney, TX 75070
- Recall Portal: https://www.myinstantrecall.com
- Corporate Dashboard: https://dashboard.belltowertech.com/login

## Research
Instant Recall publishes original research on the product recall notification industry:
- Research Index: https://www.instantrecall.com/research
- Product Recall Notification Industry Survey: https://www.instantrecall.com/research/industry-survey
- The Regulatory Environment of Product Recalls: https://www.instantrecall.com/research/regulatory-environment
- Legal Case Data and Liability Research: https://www.instantrecall.com/research/legal-case-data

## Pages
- Home: https://www.instantrecall.com/
- Services: https://www.instantrecall.com/solution
- Recall Communications Management: https://www.instantrecall.com/incident-response
- Regulatory Reporting and Audit Response: https://www.instantrecall.com/cost-recovery
- Technology Prowess: https://www.instantrecall.com/technology-prowess
- Industry Gold Standard: https://www.instantrecall.com/industry-standard
- Customer Testimonials: https://www.instantrecall.com/customer-quotes-solutions
- Contact: https://www.instantrecall.com/contact-instant-recall
- Support Request: https://www.instantrecall.com/support-request
- Login: https://www.instantrecall.com/portal
- Research: https://www.instantrecall.com/research
- Privacy Policy: https://www.instantrecall.com/privacy-policy
- Terms of Service: https://www.instantrecall.com/terms-and-conditions
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
