import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 11, 2025</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="space-y-10 text-foreground/80 leading-relaxed">
              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-base md:text-lg">
                  At Audio verse, we are committed to protecting your privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you use our service.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-base md:text-lg">We collect information you provide directly to us, such as:</p>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-base md:text-lg">
                  <li>Account information (name, email, password)</li>
                  <li>Payment information (processed securely through our payment providers)</li>
                  <li>Profile information (preferences, playlists, listening history)</li>
                  <li>Communications (support requests, feedback)</li>
                </ul>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-base md:text-lg">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-base md:text-lg">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Personalize your listening experience</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments and questions</li>
                </ul>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">4. Information Sharing</h2>
                <p className="text-base md:text-lg">
                  We do not sell your personal information. We may share your information with third parties only in the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-base md:text-lg">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>With service providers who assist our operations</li>
                  <li>In connection with a merger or acquisition</li>
                </ul>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p className="text-base md:text-lg">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-base md:text-lg">You have the right to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-base md:text-lg">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">7. Contact Us</h2>
                <p className="text-base md:text-lg">
                  If you have any questions about this Privacy Policy, please contact us at privacy@audiovers.com or
                  through our Contact page.
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



