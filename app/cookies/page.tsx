import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: December 11, 2025</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="space-y-10 text-foreground/80 leading-relaxed">
              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What Are Cookies</h2>
                <p className="text-base md:text-lg">
                  Cookies are small text files stored on your device when you visit a website. They help us provide you
                  with a better experience by remembering your preferences and understanding how you use our service.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How We Use Cookies</h2>
                <p className="text-base md:text-lg">We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-base md:text-lg">
                  <li>
                    <strong className="text-foreground">Essential Cookies:</strong> Required for the service to function
                    properly
                  </li>
                  <li>
                    <strong className="text-foreground">Performance Cookies:</strong> Help us understand how visitors
                    interact with our service
                  </li>
                  <li>
                    <strong className="text-foreground">Functional Cookies:</strong> Remember your preferences and
                    settings
                  </li>
                  <li>
                    <strong className="text-foreground">Targeting Cookies:</strong> Used to deliver relevant
                    advertisements
                  </li>
                </ul>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Managing Cookies</h2>
                <p className="text-base md:text-lg">
                  Most web browsers allow you to control cookies through their settings. You can set your browser to
                  refuse cookies or delete certain cookies. However, if you block essential cookies, some features of
                  our service may not function properly.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
                <p className="text-base md:text-lg">
                  We may use third-party services that set cookies on our behalf. These include analytics providers,
                  advertising networks, and social media platforms. Please refer to their respective privacy policies
                  for more information.
                </p>
              </section>

              <section className="border-b border-border pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Updates to This Policy</h2>
                <p className="text-base md:text-lg">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                  updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-base md:text-lg">
                  If you have questions about our use of cookies, please contact us at privacy@seriusxfm.com or visit
                  our Contact page.
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



