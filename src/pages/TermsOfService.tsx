import { memo } from "react";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";

const TermsOfService = memo(() => {
  return (
    <>
      <SEOHead
        title="Terms of Service | CWT Studio Automation, Web & Salesforce Engagements"
        description="Read the service terms that govern CWT Studio's business automation, Salesforce consulting, and custom web and mobile development engagements."
        keywords={[
          'CWT Studio terms',
          'business automation contract',
          'Salesforce consulting agreement',
          'Creator Wealth Tools legal terms',
          'web development service terms'
        ]}
        canonicalUrl="/terms-of-service"
      />
      
      <main id="main-content" className="min-h-screen">
        <Section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 30, 2026</p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using the CWT Studio website and services ("Services"), you accept and agree to be 
                  bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
                <p className="mb-4">
                  CWT Studio provides revenue infrastructure installation and optimization services. Our Services include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Diagnostic: 2-week system diagnostic with findings report and implementation pathway</li>
                  <li>Implementation: Focused system builds based on diagnostic findings</li>
                  <li>Enterprise Architecture: Architect-led system rebuilds</li>
                  <li>Web Systems: Custom web application development and optimization</li>
                  <li>Salesforce: Implementation, optimization, and technical support</li>
                  <li>AE Technical Support: Deal support and objection handling for account executives</li>
                  <li>Custom development, integrations, and system installations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
                <h3 className="text-xl font-medium mb-3">3.1 Acceptable Use</h3>
                <p className="mb-4">You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful code or viruses</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with other users' access to the Services</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">3.2 Account Responsibility</h3>
                <p className="mb-4">
                  You are responsible for maintaining the confidentiality of any account credentials and for all 
                  activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
                <h3 className="text-xl font-medium mb-3">4.1 Our Content</h3>
                <p className="mb-4">
                  All content, materials, and intellectual property on our website and in our Services are owned by 
                  CWT Studio or our licensors. This includes text, graphics, logos, designs, and software.
                </p>

                <h3 className="text-xl font-medium mb-3">4.2 Your Content</h3>
                <p className="mb-4">
                  You retain ownership of any content you provide to us. By submitting content, you grant us a 
                  non-exclusive license to use it for the purpose of providing our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Service Modifications and Availability</h2>
                <p className="mb-4">
                  We reserve the right to modify, suspend, or discontinue any part of our Services at any time without 
                  notice. We are not liable for any modification, suspension, or discontinuation of Services.
                </p>
                <p className="mb-4">
                  We do not guarantee that our Services will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Fees and Payment</h2>
                <p className="mb-4">
                  Certain Services may require payment. You agree to pay all applicable fees as outlined in your service 
                  agreement. All fees are non-refundable unless otherwise specified.
                </p>
                <p className="mb-4">
                  We reserve the right to change our fees at any time with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Confidentiality</h2>
                <p className="mb-4">
                  Both parties agree to maintain confidentiality of any proprietary or sensitive information shared 
                  during the course of our engagement. This obligation survives the termination of Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, CWT Studio shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages arising out of or relating to your use of our Services.
                </p>
                <p className="mb-4">
                  Our total liability shall not exceed the amount you paid for the specific Service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
                <p className="mb-4">
                  You agree to indemnify and hold harmless CWT Studio, its affiliates, and their respective officers, 
                  directors, and employees from any claims, damages, or expenses arising from your use of our Services 
                  or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend your access to our Services immediately, without prior notice, for any 
                  reason, including breach of these Terms.
                </p>
                <p className="mb-4">
                  Upon termination, your right to use the Services will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Dispute Resolution</h2>
                <h3 className="text-xl font-medium mb-3">11.1 Governing Law</h3>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law provisions.
                </p>
                <p className="mb-4">
                  Any disputes arising under these Terms shall be resolved in the courts of competent 
                  jurisdiction located in Ontario, Canada, and you consent to personal jurisdiction in such courts.
                </p>

                <h3 className="text-xl font-medium mb-3">11.2 Arbitration</h3>
                <p className="mb-4">
                  Any disputes arising from these Terms or our Services shall be resolved through binding arbitration, 
                  except where prohibited by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Third-Party Services</h2>
                <p className="mb-4">
                  Our Services may integrate with or link to third-party services (e.g., Salesforce). We are not 
                  responsible for the content, privacy practices, or availability of third-party services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by 
                  posting the updated Terms on our website. Your continued use of our Services constitutes acceptance 
                  of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">14. Severability</h2>
                <p className="mb-4">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue 
                  to be valid and enforceable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
                <p className="mb-4">
                  For questions about these Terms, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> shannon@thecwtstudio.com</li>
                </ul>
              </section>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
});

TermsOfService.displayName = "TermsOfService";

export default TermsOfService;
