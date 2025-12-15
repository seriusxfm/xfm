import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 11, 2025</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="space-y-10 text-foreground/80 leading-relaxed">
              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-base md:text-lg">
                  By accessing or using seriusxfm, you agree to be bound by these Terms of Service. If you disagree with
                  any part of the terms, you may not access the service.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-base md:text-lg">
                  seriusxfm is an audio streaming service that provides access to music, podcasts, and other audio
                  content. We offer various subscription plans with different features and pricing.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">3. Account Registration</h2>
                <p className="text-base md:text-lg">
                  To use certain features of the service, you must register for an account. You agree to provide
                  accurate information and keep your account credentials secure. You are responsible for all activity
                  under your account.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">4. Subscriptions and Payments</h2>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-base md:text-lg">
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>You may cancel your subscription at any time</li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>Prices may change with 30 days notice</li>
                </ul>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">5. Acceptable Use</h2>
                <p className="text-base md:text-lg">You agree not to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-base md:text-lg">
                  <li>Share your account credentials</li>
                  <li>Download or redistribute content without authorization</li>
                  <li>Circumvent any access controls or restrictions</li>
                  <li>Use the service for any illegal purpose</li>
                </ul>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                <p className="text-base md:text-lg">
                  All content on seriusxfm is protected by copyright and other intellectual property laws. You may not
                  reproduce, distribute, or create derivative works without explicit permission.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">7. Termination</h2>
                <p className="text-base md:text-lg">
                  We may terminate or suspend your account at any time for violations of these terms. Upon termination,
                  your right to use the service will immediately cease.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-base md:text-lg">
                  seriusxfm shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from your use of the service.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">9. Changes to Terms</h2>
                <p className="text-base md:text-lg">
                  We reserve the right to modify these terms at any time. We will notify users of significant changes
                  via email or through the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">10. Contact</h2>
                <p className="text-base md:text-lg">
                  For questions about these Terms, please contact us at legal@seriusxfm.com or through our Contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



