import { memo } from "react";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";

const CookiePolicy = memo(() => {
  return (
    <>
      <SEOHead
        title="Cookie Policy | CWT Studio"
        description="How CWT Studio uses cookies to deliver revenue infrastructure services. Cookie types, purposes, and your control options."
        keywords={[
          'CWT Studio cookies',
          'business automation analytics',
          'Salesforce services cookies',
          'Creator Wealth Tools privacy',
          'web development cookie policy'
        ]}
        canonicalUrl="/cookie-policy"
      />
      
      <main id="main-content" className="min-h-screen">
        <Section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-foreground/90">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
                <p className="mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. They help websites 
                  remember your preferences and improve your user experience. Cookies do not contain personal information 
                  and cannot harm your device.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
                <p className="mb-4">
                  CWT Studio uses cookies and similar technologies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-medium mb-3">3.1 Strictly Necessary Cookies</h3>
                <p className="mb-4">
                  These cookies are essential for the website to function and cannot be disabled. They include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Cookie Consent:</strong> Stores your cookie preferences</li>
                  <li><strong>Session Management:</strong> Maintains your session state</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">3.2 Functional Cookies</h3>
                <p className="mb-4">
                  These cookies enhance functionality and personalization:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Assessment Progress:</strong> Saves checklist and self-assessment progress</li>
                  <li><strong>UI Preferences:</strong> Remembers display preferences and settings</li>
                  <li><strong>Form Data:</strong> Temporarily stores form information for convenience</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">3.3 Analytics Cookies</h3>
                <p className="mb-4">
                  These cookies help us analyze website performance and user behavior (requires your consent):
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Page Views:</strong> Tracks which pages are visited most frequently</li>
                  <li><strong>User Journey:</strong> Analyzes how users navigate through the site</li>
                  <li><strong>Performance Metrics:</strong> Monitors page load times and errors</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">3.4 Marketing Cookies (Optional)</h3>
                <p className="mb-4">
                  These cookies track your activity across websites to deliver personalized advertising (requires your consent):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Retargeting:</strong> Shows relevant ads based on pages you've visited</li>
                  <li><strong>Conversion Tracking:</strong> Measures the effectiveness of marketing campaigns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Specific Cookies We Set</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border border-border px-4 py-2 text-left">Cookie Name</th>
                        <th className="border border-border px-4 py-2 text-left">Purpose</th>
                        <th className="border border-border px-4 py-2 text-left">Duration</th>
                        <th className="border border-border px-4 py-2 text-left">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-sm">cookie_consent</td>
                        <td className="border border-border px-4 py-2">Stores your cookie preferences</td>
                        <td className="border border-border px-4 py-2">1 year</td>
                        <td className="border border-border px-4 py-2">Necessary</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-sm">cwtIntroSeen</td>
                        <td className="border border-border px-4 py-2">Tracks if loading screen was shown</td>
                        <td className="border border-border px-4 py-2">Session</td>
                        <td className="border border-border px-4 py-2">Functional</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-sm">checklist_progress</td>
                        <td className="border border-border px-4 py-2">Saves assessment checklist progress</td>
                        <td className="border border-border px-4 py-2">30 days</td>
                        <td className="border border-border px-4 py-2">Functional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
                <p className="mb-4">
                  We may use third-party services that set their own cookies. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Analytics Providers:</strong> To understand website usage patterns</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                  <li><strong>Advertising Networks:</strong> For targeted advertising (with your consent)</li>
                </ul>
                <p className="mt-4">
                  We do not control third-party cookies. Please review the privacy policies of these third parties 
                  for more information about their cookie practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Local Storage and Session Storage</h2>
                <p className="mb-4">
                  In addition to cookies, we may use browser storage technologies like localStorage and sessionStorage 
                  for similar purposes. These store data locally on your browser and do not transmit data to our servers 
                  unless you perform an action that requires it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Managing Your Cookie Preferences</h2>
                <h3 className="text-xl font-medium mb-3">7.1 Cookie Banner</h3>
                <p className="mb-4">
                  When you first visit our website, you'll see a cookie banner where you can accept or decline 
                  non-essential cookies. You can change your preferences at any time by clicking the "Cookie Settings" 
                  link in the footer.
                </p>

                <h3 className="text-xl font-medium mb-3">7.2 Browser Settings</h3>
                <p className="mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete cookies after each browsing session</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
                <p className="mb-4">
                  Please note that blocking or deleting cookies may impact your ability to use certain features of our website.
                </p>

                <h3 className="text-xl font-medium mb-3">7.3 Opt-Out Links</h3>
                <p className="mb-4">For analytics and advertising cookies, you can opt out using these resources:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Network Advertising Initiative Opt-Out</a></li>
                  <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Advertising Alliance Opt-Out</a></li>
                  <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices (EU)</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Do Not Track Signals</h2>
                <p className="mb-4">
                  Some browsers support "Do Not Track" (DNT) signals. Currently, there is no industry standard for 
                  responding to DNT signals. We honor the cookie preferences you set through our cookie banner. 
                  DNT signal response is not currently supported, though your banner preferences remain enforced.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Updates to This Cookie Policy</h2>
                <p className="mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or legal 
                  requirements. We will post the updated policy on this page and update the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                <p className="mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> hello@thecwtstudio.com</li>
                  <li><strong>Privacy Policy:</strong> <a href="/privacy-policy" className="text-primary hover:underline">View our Privacy Policy</a></li>
                </ul>
              </section>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
});

CookiePolicy.displayName = "CookiePolicy";

export default CookiePolicy;
