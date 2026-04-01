import { renderPage } from "../shared/layout.ts";

export function renderPrivacy(): string {
  const body = `
<div class="legal">
  <h1>Privacy Policy</h1>

  <p>Your privacy is important to BellTower Technologies. This privacy statement provides information about the personal information that BellTower Technologies collects, and the ways in which BellTower Technologies uses that personal information.</p>

  <p><strong>Personal information collection</strong></p>

  <p>BellTower Technologies may collect and use the following kinds of personal information:</p>
  <ul>
    <li>information about your use of this website (including pages visited and your host IP address);</li>
    <li>information about transactions carried out over this website (including time, login id and type of transactions);</li>
    <li>information that you provide for the purpose of subscribing to the website services or executing a product demonstration (including name, telephone number and email address); and</li>
    <li>any other information that you send to BellTower Technologies (including contact information necessary to perform mass notification services at your request, billing information and contact information for the users you provision to have access to your account).</li>
  </ul>

  <p><strong>Using personal information</strong></p>

  <p>BellTower Technologies may use your personal information to:</p>
  <ul>
    <li>enable your access to and use of the website services;</li>
    <li>supply to you services that you purchase;</li>
    <li>send you statements and invoices;</li>
    <li>collect payments from you; and</li>
    <li>send you marketing communications.</li>
  </ul>

  <p>To opt-out from any communications, or to view, modify or delete your personal information, please contact us at PrivacyOfficer@belltowertech.com.</p>

  <p>Where BellTower Technologies discloses your personal information to its agents or vendors (telecommunications providers, messaging services and call centers) for these purposes, the agent or vendor in question will be obligated to use that personal information in accordance with the terms of this privacy statement.</p>

  <p>In addition to the disclosures reasonably necessary for the purposes identified elsewhere above, BellTower Technologies may disclose your personal information to the extent that it is required to do so by law, including to meet national security or law enforcement requirements, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise or defend its legal rights.</p>

  <p><strong>Securing your data</strong></p>

  <p>BellTower Technologies will take reasonable technical and organizational precautions to prevent the loss, misuse or alteration of your personal information. BellTower Technologies will store all the personal information you provide on its secure servers. Access to your personal information is restricted to the personnel that have business purpose for such access. Transmission of personal information using our websites is secured using SSL encryption technology.</p>

  <p><strong>Children&rsquo;s Privacy</strong></p>

  <p>We do not knowingly collect personal data from children.<br>
  We take specific steps to protect the privacy of children by making reasonable efforts to ensure that a parent has authorized the collection of the child&rsquo;s personal data.</p>

  <p><strong>EU-U.S. Data Privacy Framework (EU-U.S. DPF) Compliance</strong></p>

  <p>BellTower Technologies LLC complies with the EU-U.S. Data Privacy Framework (EU-U.S. DPF)  as set forth by the U.S. Department of Commerce. BellTower Technologies has certified to the U.S. Department of Commerce that it adheres to the EU-U.S. Data Privacy Framework Principles (EU-U.S. DPF Principles) with regard to the processing of personal data received from the European Union in reliance on the EU-U.S. DPF. If there is any conflict between the terms in this privacy policy and the EU-U.S. DPF Principles, the Principles shall govern. To learn more about the Data Privacy Framework (DPF) program, and to view our certification, please visit <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener"><strong><u>www.dataprivacyframework.gov</u></strong></a>.</p>

  <p>With respect to onward transfers to third-party agents under DPF, DPF requires that BellTower Technologies LLC remains liable should such agents process personal information in a manner inconsistent with the DPF Principles, unless we prove that we are not responsible for the event giving rise to the damage.</p>

  <p>You have a right to access your personal data to correct or delete it, or limit its use or disclosure. Please contact PrivacyOfficer@belltowertech.com for assistance.</p>

  <p>We will provide an individual opt-out choice, or opt-in for sensitive data, before we share your data with third parties other than our agents, or before we use it for a purpose other than which it was originally collected or subsequently authorized. To request to limit the use and disclosure of your personal information, please submit a written request to PrivacyOfficer@belltowertech.com.</p>

  <p><strong>Members of the European Union</strong></p>

  <p>If you are a resident of a Member State of the European Union and have any concerns or complaints, please first address these issues to our Privacy Officer. BellTower Technologies LLC is located in the United States, as are the servers that make our websites available. Except with respect to the personal data of EU individuals processed pursuant to DPF, all matters relating to privacy issues and websites are governed by the laws of the United States and the State of Texas.</p>

  <p>In compliance with the EU-U.S. Data Privacy Framework (EU-U.S. DPF), BellTower Technologies LLC commits to resolve complaints about our collection or use of your personal information transferred to the U.S. pursuant to the EU-U.S. DPF. EU individuals with inquiries or complaints should first contact BellTower Technologies LLC at:</p>

  <p>Email: PrivacyOfficer@belltowertech.com<br>
  Phone: +1-214-220-8000<br>
  Fax: +1-214-999-6761<br>
  Mail:<br>
  BellTower Technologies LLC<br>
  5900 South Lake Forest Dr.<br>
  Suite 300<br>
  McKinney, TX 75070</p>

  <p>BellTower Technologies LLC has further committed to refer unresolved DPF Principles-related complaints to an independent dispute resolution mechanism, BBB NATIONAL PROGRAMS. If you do not receive timely acknowledgment of your complaint, or if your complaint is not satisfactorily addressed, please visit <a href="https://www.bbbprograms.org/dpf-complaints" rel="noopener"><strong><u>www.bbbprograms.org/dpf-complaints</u></strong></a> for more information and to file a complaint. This service is provided free of charge to you. BellTower Technologies is subject to the investigatory and enforcement powers of the United States Federal Trade Commission (FTC).</p>

  <p>If your DPF complaint cannot be resolved through the above channels, under certain conditions, you may invoke binding arbitration for some residual claims not resolved by other redress mechanisms. See <a href="https://www.dataprivacyframework.gov/s/article/ANNEX-I-introduction-dpf" target="_blank" rel="noopener"><strong><u>www.dataprivacyframework.gov/s/article/ANNEX-I-introduction-dpf</u></strong></a> for details.</p>

  <p><strong>Updating this statement</strong></p>

  <p>BellTower Technologies may update this privacy policy by posting a new version on this website.</p>

  <p>You should check this page occasionally to ensure you are familiar with any changes.</p>

  <p><strong>Other websites</strong></p>

  <p>This website contains links to other websites. BellTower Technologies is not responsible for the privacy policies or practices of any third party.</p>

  <p><strong>Contact BellTower Technologies</strong></p>

  <p>If you have any questions about this privacy policy or BellTower Technologies&rsquo; treatment of your personal information, please contact the Privacy Officer:</p>

  <p>Email: PrivacyOfficer@belltowertech.com<br>
  Phone: +1-214-220-8000<br>
  Fax: +1-214-999-6761<br>
  Mail:<br>
  BellTower Technologies LLC<br>
  5900 South Lake Forest Dr.<br>
  Suite 300<br>
  McKinney, TX 75070</p>

  <p>We will address your concern and attempt to resolve any problem.</p>
</div>`;

  return renderPage({
    title: "Privacy Policy -- Instant Recall",
    description:
      "Privacy Policy for Instant Recall and BellTower Technologies LLC. Learn how we collect, use, and protect your information.",
    path: "/privacy-policy",
    body,
  });
}
