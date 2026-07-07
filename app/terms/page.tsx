import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for CodingMitra Pvt. Ltd.",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-12 space-y-8 prose prose-neutral dark:prose-invert">
          <section>
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website and services of CodingMitra Pvt. Ltd., you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Services</h2>
            <p>
              CodingMitra Pvt. Ltd. provides IT services, software development, web development, AI solutions, training programs, and internship services. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when using our services.</li>
              <li>Use our services for lawful purposes only.</li>
              <li>Not attempt to gain unauthorized access to our systems or networks.</li>
              <li>Not use our services to transmit malicious code or viruses.</li>
              <li>Respect intellectual property rights of CodingMitra and third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on our website and in our services are owned by CodingMitra Pvt. Ltd. or its licensors. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Payment Terms</h2>
            <p>
              For paid services, payment terms will be specified in individual service agreements. You agree to pay all fees in accordance with the billing terms in effect at the time a fee is due and payable. We reserve the right to change our fees at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, CodingMitra Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> {siteConfig.email}<br />
              <strong>Phone:</strong> {siteConfig.phone}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
