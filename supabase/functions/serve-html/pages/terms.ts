import { renderPage } from "../shared/layout.ts";

export function renderTerms(): string {
  const body = `
<style>
  /* Terms page: match production Squarespace white-background layout */
  .legal-terms { background:#fff; color:#272727; padding:4rem 2rem; }
  .legal-terms .legal { color:#272727; }
  .legal-terms .legal h1 { color:#272727; font-size:1.8rem; margin-bottom:1rem; font-weight:700; }
  .legal-terms .legal h2 { color:#272727; font-size:1.3rem; margin:1.5rem 0 .5rem; }
  .legal-terms .legal h3 { color:#272727; font-size:1.1rem; margin:1rem 0 .4rem; }
  .legal-terms .legal p,
  .legal-terms .legal li { color:#272727; font-size:.95rem; line-height:1.7; margin-bottom:.5rem; font-weight:400; }
  .legal-terms .legal p strong { color:#272727; font-weight:700; }
  .legal-terms .legal a { color:#000; text-decoration:underline; }
  .legal-terms .legal a:hover { color:#000; }
  .legal-terms .legal ul,
  .legal-terms .legal ol { padding-left:1.5rem; margin-bottom:1rem; }
</style>
<div class="legal-terms">
<div class="legal">
  <h1>Terms and Conditions</h1>

  <p>BY USING THIS WEBSITE, YOU ARE AGREEING TO ABIDE BY THE TERMS OF SERVICE BELOW.</p>

  <p>These rules and guidelines have been created to protect all users and ensure that the site works for all. If you encounter another member who fails to abide by these rules in any manner, including but not limited to, using improper, threatening, or harassing language and/or behavior, please contact us immediately. By agreeing to these terms, you are entrusted to abide by the provisions of these Terms of Service and take personal responsibility for your own actions.</p>

  <p><strong>1. Acknowledgment and Acceptance of Terms of Use</strong><br>
  This website (&ldquo;the website&rdquo;) is provided free of charge to you by BellTower Technologies LLC, a Texas limited liability company (&ldquo;BTT&rdquo;) under these Terms of Service. If you register as a member of the website community, these Terms of Service will govern your use of the website and of the alerts sent by FoodAlert.org. BY SIGNING ON TO THE WEBSITE AND/OR COMPLETING THE REGISTRATION PROCESS AND SELECTING THE &ldquo;REGISTER&rdquo; OPTION, YOU ARE INDICATING YOUR AGREEMENT TO BE BOUND BY THESE TERMS OF USE AS SUCH TERMS MAY BE MODIFIED FROM TIME TO TIME. These Terms of Service govern your use of the website and all services provided with the website. BTT shall not be liable to you for any breach of these Terms of Service. IF YOU DO NOT AGREE TO THESE TERMS OF SERVICE, PLEASE DO NOT REGISTER FOR OR OTHERWISE ENTER THE WEBSITE. The Terms of Service is available to refer to throughout any and all visits. Please refer to the terms of service if you have any questions before using the website to determine whether a change has been made to these Terms of Service. If you do not agree to these changes in the Terms of Service as they may occur, please arrange to terminate your registration with the website immediately (i) by notifying BTT of your unwillingness to accept the changes to the Terms of Service; and (ii) by discontinuing your use of the website. YOUR CONTINUED USE OF THE WEBSITE WILL SIGNIFY YOUR ACCEPTANCE OF THE TERMS OF SERVICE AGREEMENT AND ANY CHANGE IN THE TERMS AND CONDITIONS SET FORTH HEREIN.</p>

  <p>From time to time BTT may supplement these Terms of Service with additional terms pertaining to specific content or events, (&ldquo;Additional Terms&rdquo;), which Additional Terms may be placed on the website to be viewed related to specific content or events and shall be identified as such. You understand and agree that such Additional Terms are hereby incorporated by reference into these Terms of Service.</p>

  <p><strong>2. Registration Information/Privacy Policy</strong><br>
  When you register for the website, you will be required to provide BTT with the following information: your name, email address, and notification telephone number.</p>

  <p>Except as provided herein, BTT will not sell to any third party your name, address, email address and member name, unless you provide your informed consent, except to the extent necessary to comply with applicable laws, police investigations, or in legal proceedings where such information is relevant. BTT allows access to database information by third parties providing technical services, but only to the extent necessary to provide you with those services. In those instances, the third party is bound by these terms. Your informed consent shall be in the form of an &ldquo;opt in&rdquo; or similar policy. You agree that BTT may assign, sell, license, or otherwise transfer to a third party, your name, email address, and/or telephone number with an assignment, sale, joint venture, or other transfer or disposition of a portion or all of the assets or stock of FoodAlert.org or its affiliated entities. BTT reserves the right to provide third parties the right to advertise or promote products or services on its site that, in its sole discretion, it deems appropriate for its membership.</p>

  <p><strong>3. Termination</strong><br>
  BTT reserves the right, at its sole discretion, to immediately, without notice to suspend or terminate (i) these Terms of Service; (ii) your registration with or ability to access the website and/or any service provided to you by BTT upon any breach by you of the Terms of Service.</p>

  <p><strong>4. Modifications of these Terms of Service</strong><br>
  BTT MAY MODIFY THESE TERMS OF SERVICE AT ANYTIME AND AS OFTEN AS BTT DESIRES IN ITS SOLE DISCRETION. EACH TIME YOU VISIT THE WEBSITE OR RECEIVE ITS SERVICES PRIOR TO YOUR WRITTEN TERMINATION; YOU WILL BE DEEMED TO HAVE ACCEPTED ANY SUCH CHANGES.</p>

  <p><strong>5. Modifications of BTT</strong><br>
  At any time BTT may modify or discontinue the website with or without notice to you and without liability to you or any third party.</p>

  <p><strong>6. Content of Messages</strong><br>
  You alone are responsible for the Friends &amp; Family e-mail addresses provided to invite registration to the site, and the consequences of any such messages. BTT reserves the right to terminate your registration if it becomes aware and determines, in its sole discretion, that you are violating any of the following guidelines.</p>

  <p>Any use by you of any other subscriber&rsquo;s information, personal or otherwise, for any commercial purpose or to obtain direct financial gain (e.g. mass marketing) is prohibited. Any such use shall be deemed to be a violation of these Terms of Service. The website is to be used by you for your personal use only. Commercial uses of the website are strictly prohibited unless prior written consent from BTT has been granted.</p>

  <p>You further agree not to use the website to send or post any message or material that is unlawful, harassing, libelous, defamatory, abusive, threatening, harmful, vulgar, obscene, profane, sexually oriented, threatening, racially offensive, inaccurate, or otherwise objectionable material of any kind or nature or that encourages conduct that could constitute a criminal offense, give rise to civil liability, encourage the use of controlled substances, or otherwise violate any applicable local, state, national or international law or regulation. BTT will cooperate fully with all law enforcement officials and/or agencies in the investigation of any person or persons who violate the Terms of Service contained in this Section 6.</p>

  <p>You further agree not to impersonate any other person or entity, whether actual or fictitious, including impersonating an employee or consultant of BTT. You also agree not to use an inappropriate member name of any kind.<br>
  You further agree not to post or use the website to distribute or send any illegal material of any kind, including but not limited to, illegal material in the form of text, graphics, video, programs or audio. Posting content or participating in any form of discussion with the intention to commit any illegal activity is strictly prohibited.</p>

  <p>You acknowledge that (i) BTT permits access to content that is protected by copyrights, trademarks and other intellectual and proprietary rights (&ldquo;Rights&rdquo;); (ii) these Rights are valid and protected in all media and technologies existing now or later developed; and (iii) except as explicitly provided otherwise, the Terms of Service and applicable copyright, trademark and other laws govern your use of such content. You may not post to the website, copy, reproduce, retransmit, distribute, publish, commercially exploit or otherwise transfer any material subject to any Rights. The burden of determining that any information, software, images or any other content on the website is not protected by Rights rests with you. You acknowledge that BTT may acquire Rights to use any posted materials as described below, and that you will not acquire any of those Rights by downloading such materials.</p>

  <p><strong>7. Third Party Services</strong><br>
  You may order services or merchandise through the website from other persons not affiliated with BTT (&ldquo;Seller&rdquo;) who may time to time be permitted to advertise or promote on the site. All matters concerning the merchandise and services desired from Seller, including but not limited to purchase terms, payment terms, warranties, guarantees, maintenance and delivery, are solely between you and Seller. BTT makes no warranties or representations whatsoever with regard to any goods or services provided by Sellers. You will not consider BTT, nor will BTT be construed as a party to such transactions, whether or not BTT may have received revenue or other remuneration in connection with the transaction or be liable for any costs or damages arising out of, either directly or indirectly, to you or any other person involved or related to the transaction.</p>

  <p>BTT may include special routing icons which may be located within the website, the activation of which will allow you to access and learn more about BTT and other services provided by BTT or its affiliates whereby the use of such icons is free of charge to you. WHEN YOU ACCESS ANY OF THESE SERVICES, YOUR RIGHTS AND OBLIGATIONS WILL BE GOVERNED BY BTT AGREEMENTS AND POLICIES RELATING TO THE USE OF THESE SERVICES.</p>

  <p><strong>8. Registration</strong><br>
  You are responsible for maintaining the confidentiality of your Information. You shall be responsible for all uses of your registration, whether or not authorized by you. You agree to immediately notify BTT of any unauthorized use of your registration.</p>

  <p><strong>9. Disclaimer of Warranties</strong><br>
  YOU EXPRESSLY AGREE THAT USE OF THE WEBSITE IS AT YOUR SOLE RISK. THE WEBSITE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. BTT EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT.</p>

  <p>BTT MAKES NO WARRANTY THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS, OR THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR FREE; NOR DOES BTT MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE WEBSITE. BTT WILL NOT BE LIABLE FOR ANY DIRECT, CONSEQUENTIAL OR INCIDENTAL DAMAGES, WHETHER FORSEEABLE OR NOT, WHICH MAY RESULT FROM THE UNAVAILABILITY OR MALFUNCTION OF THE WEBSITE.</p>

  <p>YOU UNDERSTAND AND AGREE THAT ANY MATERIAL, DATA OR OTHERWISE OBTAINED THROUGH THE USE OF THE WEBSITE IS AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR DATA LOSS THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL AND/OR DATA.</p>

  <p>YOU UNDERSTAND AND AGREE THAT BTT DOES NOT GUARANTEE THE ACCURACY OR COMPLETENESS OF ANY INFORMATION IN OR PROVIDED IN CONNECTION WITH THE WEBSITE. BTT IS NOT RESPONSIBLE FOR ANY ERRORS OR OMISSIONS OR FOR THE RESULTS OBTAINED FROM THE USE OF SUCH INFORMATION. THE INFORMATION IS PROVIDED WITH THE UNDERSTANDING THAT NEITHER BTT NOR ITS MEMBERS, WHILE SUCH MEMBERS ARE PARTICIPATING IN THE WEBSITE, ARE ENGAGED IN RENDERING LEGAL, MEDICAL, COUNSELING OR OTHER PROFESSIONAL SERVICES OR ADVICE. BTT ENCOURAGES YOU TO SEEK APPROPRIATE PROFESSIONAL ADVICE OR CARE FOR ANY SITUATION OR PROBLEM THAT YOU MAY HAVE.</p>

  <p>BTT SHALL NOT BE RESPONSIBLE FOR ANY LOSS OR DAMAGE CAUSED, OR ALLEGED TO HAVE BEEN CAUSED, DIRECTLY OR INDIRECTLY, BY THE INFORMATION OR IDEAS CONTAINED, SUGGESTED OR REFERENCED IN THIS SITE. YOUR PARTICIPATION IN THE WEBSITE IS SOLELY AT YOUR OWN RISK. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM BTT OR THROUGH THE WEBSITE SHALL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.</p>

  <p>BTT MAKES NO WARRANTY REGARDING ANY GOODS OR SERVICES PURCHASED OR OBTAINED THROUGH THE WEBSITE OR ANY TRANSACTIONS ENTERED INTO THROUGH THE WEBSITE.</p>

  <p>BTT IS NOT RESPONSIBLE FOR THE CONTENT ON THE INTERNET OR WORLD WIDE WEB PAGES THAT IS CONTAINED OUTSIDE BTT&rsquo;S SITE. As a convenience to our members, we may provide links to resources that are beyond our control. We make no representations as to the reliability, validity, quality, suitability, functionality or legality of any sites to which we may provide links, and you hereby waive any claim you might have against BTT with respect to such sites.</p>

  <p>BY PERMITTING ADVERTISING, BTT MAKES NO WARRANTIES OR REPRESENTATIONS OF ANY KIND AS TO THE ACCURACY OF THE CONTENT OR SUITABILITY OF THE SUBJECT MATTER OF ANY SUCH ADVERTISEMENT. BTT specifically disclaims liability for direct, consequential or incidental damages arising from such advertisements. By responding to an advertisement on the website, you waive any claims against BTT for damages arising from such advertisement or your reliance upon statements in such advertisement.</p>

  <p><strong>10. Promotional Messages</strong><br>
  BTT and/or third parties may, from time to time, allow promotional messages on its site. BTT makes no representation or warranty with respect to the content of any such e-mail messages or any goods or services which may be obtained from such third parties, and you agree that neither BTT nor such third party shall have any liability with respect thereto.</p>

  <p><strong>11. Indemnification</strong><br>
  You agree to indemnify and hold each of BTT, their parents, subsidiaries, affiliates, officers, consultants and employees, harmless from any claim or demand, including attorneys&rsquo; fees, made by any third party due to or arising out of your use of the website, the violation of these Terms of Service by you, or any other subscriber of your account, of any intellectual property or other right of any person or entity.</p>

  <p><strong>12. Applicable Law</strong><br>
  These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without giving effect to its conflict of laws provisions.</p>

  <p><strong>13. Remedies for Breach of these Terms by You</strong><br>
  In the event that BTT determines, at its sole discretion, that you have breached any portion of these Terms of Service, or have otherwise demonstrated conduct inappropriate for the community of the website, BTT reserves the right to (i) warn you via e-mail that you have violated these Terms of Service; (ii) discontinue your registration with the website and/or any other BTT community; (iii) notify and/or send content to and/or fully cooperate with the proper law enforcement authorities for further action; and/or (vi) any other action which BTT deems to be appropriate.</p>

  <p><strong>14. Severability</strong><br>
  In the event that any provision of the Terms of Service conflicts with the law under which the Terms of Service are to be construed or if any such provisions are held invalid by a court with jurisdiction over the parties to the Terms of Service, such provision will be deemed to be restated to reflect as nearly as possible the original intentions of the parties in accordance with applicable law, and the remainder of these Terms of Service will remain in full force and effect.</p>

  <p><strong>15. Miscellaneous</strong><br>
  The failure of either party to insist upon or enforce strict performance by the other party of any provision of the Terms of Service or to exercise any right under the Terms of Service will not be construed as a waiver or relinquishment to any extent of such party&rsquo;s right to assert or rely upon any such provision or right in that or any other instance, rather, the same will be and remain in full force and effect. BTT may assign its rights and obligations under these Terms of Service and upon such assignment BTT may be relieved of any further obligation hereunder. You represent to BTT that you have the authority to register with the website according to these Terms of Service.</p>

  <p>These Terms of Service and any Additional Terms (as such terms shall be identified when posted on the website by BTT) constitute the entire understanding between the parties as to subject matter hereof, and supersede all prior agreements and understandings. Any legally unenforceable provision of these Terms of Service will, at the election of BTT, be deleted or modified to correct the defect and, regardless, the remainder of the terms of these Terms of Service will remain valid and enforceable.</p>
</div>
</div>`;

  return renderPage({
    title: "Terms and Conditions | Instant Recall\u2122",
    description:
      "Terms and Conditions for the Instant Recall platform operated by BellTower Technologies LLC.",
    path: "/terms-and-conditions",
    body,
  });
}
