import { renderPage } from "../shared/layout.ts";

export function renderTerms(): string {
  const body = `
<div class="legal">
  <h1>Terms of Service</h1>
  <p><strong>Effective Date:</strong> January 1, 2024<br>
  <strong>Last Updated:</strong> January 1, 2024</p>

  <h2>1. Acceptance of Terms</h2>
  <p>By accessing or using the Instant Recall platform and website at www.instantrecall.com (the "Service"), operated by BellTower Technologies LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>

  <h2>2. Description of Service</h2>
  <p>Instant Recall is a food recall preparedness and communications platform that enables organizations to manage recall notifications, regulatory reporting, and stakeholder communications. The Service includes web-based applications, mobile interfaces, APIs, and related support services.</p>

  <h2>3. Eligibility</h2>
  <p>You must be at least 18 years old and have the legal authority to enter into these Terms on behalf of yourself or the organization you represent. By using the Service, you represent and warrant that you meet these requirements.</p>

  <h2>4. Account Registration and Security</h2>
  <p>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these Terms.</p>

  <h2>5. Acceptable Use</h2>
  <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not:</p>
  <ul>
    <li>Use the Service to transmit harmful, fraudulent, or misleading content</li>
    <li>Attempt to gain unauthorized access to any part of the Service or its systems</li>
    <li>Interfere with or disrupt the integrity or performance of the Service</li>
    <li>Reverse engineer, decompile, or disassemble any aspect of the Service</li>
    <li>Use the Service to violate any applicable law or regulation</li>
    <li>Resell, sublicense, or redistribute the Service without our prior written consent</li>
  </ul>

  <h2>6. Intellectual Property</h2>
  <p>The Service, including all software, content, designs, trademarks, and documentation, is the property of BellTower Technologies LLC and is protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Service in accordance with these Terms. You retain ownership of all data and content you upload to the Service.</p>

  <h2>7. Data and Privacy</h2>
  <p>Your use of the Service is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which describes how we collect, use, and protect your information. By using the Service, you consent to the data practices described in the Privacy Policy. You are responsible for ensuring that any personal data you upload to the Service has been collected in compliance with applicable laws.</p>

  <h2>8. Service Availability and Modifications</h2>
  <p>We strive to maintain high availability but do not guarantee uninterrupted access to the Service. We may modify, suspend, or discontinue any aspect of the Service at any time, with or without notice. We will make reasonable efforts to notify you of material changes that affect your use of the Service.</p>

  <h2>9. Fees and Payment</h2>
  <p>Certain features of the Service require payment. Fees are described in your service agreement or order form. All fees are non-refundable unless otherwise stated. We reserve the right to modify pricing with 30 days' written notice. Failure to pay may result in suspension or termination of your access to the Service.</p>

  <h2>10. Limitation of Liability</h2>
  <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, BELLTOWER TECHNOLOGIES LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. OUR TOTAL LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.</p>

  <h2>11. Indemnification</h2>
  <p>You agree to indemnify, defend, and hold harmless BellTower Technologies LLC, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney fees, arising out of or in any way connected with your use of the Service, your violation of these Terms, or your violation of any rights of a third party.</p>

  <h2>12. Termination</h2>
  <p>Either party may terminate these Terms upon 30 days' written notice. We may terminate or suspend your access immediately, without prior notice, if you breach these Terms. Upon termination, your right to use the Service ceases immediately. We will make your data available for export for 30 days following termination, after which it may be deleted.</p>

  <h2>13. Governing Law and Dispute Resolution</h2>
  <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of law principles. Any dispute arising under these Terms shall be resolved exclusively in the state or federal courts located in Collin County, Texas.</p>

  <h2>14. Changes to These Terms</h2>
  <p>We may update these Terms from time to time. We will notify you of material changes by posting the revised Terms on this page and updating the "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the revised Terms.</p>

  <h2>15. Contact Information</h2>
  <p>If you have questions about these Terms, please contact us:</p>
  <p>
    BellTower Technologies LLC<br>
    5900 South Lake Forest Dr., Suite 300<br>
    McKinney, TX 75070<br>
    Phone: (214) 220-8000<br>
    Email: legal@belltowertech.com
  </p>
</div>`;

  return renderPage({
    title: "Terms of Service -- Instant Recall",
    description:
      "Terms of Service for the Instant Recall platform operated by BellTower Technologies LLC.",
    path: "/terms-and-conditions",
    body,
  });
}
