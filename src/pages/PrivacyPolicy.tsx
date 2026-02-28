import { memo } from "react";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = memo(() => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | CWT Studio"
        description="How CWT Studio collects, uses, and protects your data. Review your privacy rights under PIPEDA, GDPR, and CCPA."
        keywords={[
          'CWT Studio privacy policy',
          'revenue systems data protection',
          'PIPEDA compliance',
          'GDPR CCPA notice'
        ]}
        canonicalUrl="/privacy-policy"
      />
      
      <main id="main-content" className="min-h-screen">
        <Section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: February 28, 2026</p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  CWT Studio ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium mb-3">2.1 Personal Data</h3>
                <p className="mb-4">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Communication preferences</li>
                  <li>Information provided in contact forms or assessments</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">2.2 Usage Data</h3>
                <p className="mb-4">We automatically collect certain information when you visit our website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website and exit pages</li>
                  <li>Device information and operating system</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries and provide requested services</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To analyze usage patterns and improve user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your experience. 
                  For detailed information about our cookie usage, please review our <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
                <p className="mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our website and services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                </ul>
                <p className="mt-4">We do not sell your personal information to third parties.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights (PIPEDA, GDPR & CCPA)</h2>
                <p className="mb-4">Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), the EU General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA), you have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data</li>
                  <li><strong>Restriction:</strong> Request limitation of processing</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to processing of your data</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at{' '}
                  <a href="mailto:shannon@thecwtstudio.com?subject=Data%20Rights%20Request" className="text-primary hover:underline font-medium">
                    shannon@thecwtstudio.com
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against 
                  unauthorized access, alteration, disclosure, or destruction. No method of transmission over 
                  the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
                <p className="mb-4">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this 
                  privacy policy or as required by law. When data is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
                <p className="mb-4">
                  CWT Studio is based in Canada. Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place, consistent with PIPEDA and applicable international regulations, to protect your data in accordance with this privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
                <p className="mb-4">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
                  personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting 
                  the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
                <p className="mb-4">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> shannon@thecwtstudio.com</li>
                  <li><strong>Company:</strong> CWT Studio</li>
                  <li><strong>Location:</strong> Canada</li>
                </ul>
              </section>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
});

PrivacyPolicy.displayName = "PrivacyPolicy";

export default PrivacyPolicy;
