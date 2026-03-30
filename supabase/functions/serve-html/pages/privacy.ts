import { renderPage } from "../shared/layout.ts";

export function renderPrivacy(): string {
  const body = `
<div class="legal">
  <h1>Privacy Policy</h1>
  <p><strong>Effective Date:</strong> January 1, 2024<br>
  <strong>Last Updated:</strong> January 1, 2024</p>

  <p>BellTower Technologies LLC ("we," "us," or "our") operates the Instant Recall platform and the website at www.instantrecall.com. This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you use our services.</p>

  <h2>1. Information We Collect</h2>
  <h3>Information You Provide</h3>
  <ul>
    <li>Contact information: name, email address, phone number, mailing address</li>
    <li>Account credentials: username and password</li>
    <li>Business information: company name, title, role</li>
    <li>Communications: messages, feedback, and support requests you send to us</li>
    <li>Recall-related data: product information, distribution lists, and contact records you upload to the platform</li>
  </ul>

  <h3>Information Collected Automatically</h3>
  <ul>
    <li>Device and browser information: IP address, browser type, operating system</li>
    <li>Usage data: pages visited, features used, timestamps, referral URLs</li>
    <li>Cookies and similar technologies for session management and analytics</li>
  </ul>

  <h2>2. How We Use Your Information</h2>
  <p>We use the information we collect to:</p>
  <ul>
    <li>Provide, operate, and maintain the Instant Recall platform</li>
    <li>Process recall notifications and communications on your behalf</li>
    <li>Respond to your inquiries and provide customer support</li>
    <li>Send administrative notices, updates, and security alerts</li>
    <li>Improve our services, develop new features, and conduct analytics</li>
    <li>Comply with legal obligations and enforce our terms</li>
  </ul>

  <h2>3. How We Disclose Your Information</h2>
  <p>We do not sell your personal information. We may share your information with:</p>
  <ul>
    <li><strong>Service providers:</strong> Third-party vendors who assist with hosting, analytics, email delivery, and other operational services, subject to confidentiality obligations</li>
    <li><strong>Regulatory authorities:</strong> When required by law, regulation, or legal process, or to protect the rights and safety of our users</li>
    <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
    <li><strong>With your consent:</strong> When you direct us to share information with third parties</li>
  </ul>

  <h2>4. Data Security</h2>
  <p>We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit and at rest, access controls, regular security assessments, and employee training. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

  <h2>5. Children's Privacy</h2>
  <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child under 16 has provided us with personal information, we will take steps to delete such information promptly.</p>

  <h2>6. EU-US Data Privacy Framework</h2>
  <p>BellTower Technologies LLC complies with the EU-US Data Privacy Framework (DPF) as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union to the United States. We have certified to the Department of Commerce that we adhere to the DPF Principles. If there is any conflict between the terms in this privacy policy and the DPF Principles, the DPF Principles shall govern. To learn more about the Data Privacy Framework program, visit <a href="https://www.dataprivacyframework.gov" rel="noopener">https://www.dataprivacyframework.gov</a>.</p>
  <p>In compliance with the DPF, we commit to resolve complaints about our collection or use of your personal information. EU individuals with inquiries or complaints regarding our DPF policy should first contact us using the information below.</p>

  <h2>7. Your Rights and Choices</h2>
  <p>Depending on your jurisdiction, you may have the right to:</p>
  <ul>
    <li>Access the personal information we hold about you</li>
    <li>Request correction of inaccurate information</li>
    <li>Request deletion of your personal information</li>
    <li>Object to or restrict certain processing activities</li>
    <li>Data portability</li>
    <li>Withdraw consent where processing is based on consent</li>
  </ul>
  <p>To exercise any of these rights, please contact us using the information below.</p>

  <h2>8. Data Retention</h2>
  <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements. When personal information is no longer needed, we will securely delete or anonymize it.</p>

  <h2>9. Changes to This Policy</h2>
  <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the revised policy.</p>

  <h2>10. Contact Information</h2>
  <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
  <p>
    BellTower Technologies LLC<br>
    5900 South Lake Forest Dr., Suite 300<br>
    McKinney, TX 75070<br>
    Phone: (214) 220-8000<br>
    Email: privacy@belltowertech.com
  </p>
</div>`;

  return renderPage({
    title: "Privacy Policy -- Instant Recall",
    description:
      "Privacy Policy for Instant Recall and BellTower Technologies LLC. Learn how we collect, use, and protect your information.",
    path: "/privacy-policy",
    body,
  });
}
