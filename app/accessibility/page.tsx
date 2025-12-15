import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AccessibilityPage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Accessibility Statement</h1>
            <p className="text-lg text-muted-foreground">Our commitment to accessible audio streaming</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="space-y-10 text-foreground/80 leading-relaxed">
              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Commitment</h2>
                <p className="text-base md:text-lg">
                  seriusxfm is committed to ensuring digital accessibility for people with disabilities. We are
                  continually improving the user experience for everyone and applying the relevant accessibility
                  standards.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Conformance Status</h2>
                <p className="text-base md:text-lg">
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These
                  guidelines help make web content more accessible to people with disabilities.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Accessibility Features</h2>
                <p className="text-base md:text-lg">seriusxfm includes the following accessibility features:</p>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-base md:text-lg">
                  <li>Full keyboard navigation support</li>
                  <li>Screen reader compatibility</li>
                  <li>High contrast mode support</li>
                  <li>Resizable text without loss of functionality</li>
                  <li>Alternative text for images</li>
                  <li>Captions for video content</li>
                  <li>Voice control integration on supported devices</li>
                </ul>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Assistive Technologies</h2>
                <p className="text-base md:text-lg">seriusxfm is designed to be compatible with assistive technologies including:</p>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-base md:text-lg">
                  <li>Screen readers (VoiceOver, NVDA, JAWS)</li>
                  <li>Voice recognition software</li>
                  <li>Screen magnification software</li>
                  <li>Alternative input devices</li>
                </ul>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Feedback</h2>
                <p className="text-base md:text-lg">
                  We welcome your feedback on the accessibility of seriusxfm. Please let us know if you encounter
                  accessibility barriers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
                  <li>Email: accessibility@seriusxfm.com</li>
                  <li>Phone: 1-800-SERIUSXFM (Option 3)</li>
                  <li>Contact form on our website</li>
                </ul>
                <p className="mt-4 text-base md:text-lg">We try to respond to accessibility feedback within 2 business days.</p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Continuous Improvement</h2>
                <p className="text-base md:text-lg">
                  We are constantly working to improve the accessibility of our platform. Our development team regularly
                  audits our applications and implements improvements based on user feedback and evolving standards.
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



