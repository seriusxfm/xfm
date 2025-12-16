import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Headphones, CreditCard, Settings, Smartphone, HelpCircle } from "lucide-react"

const helpCategories = [
  {
    icon: Headphones,
    name: "Getting Started",
    description: "Learn the basics of using seriusxfm",
    articles: 12,
    href: "/help/getting-started",
  },
  {
    icon: CreditCard,
    name: "Billing & Subscriptions",
    description: "Manage your plan and payments",
    articles: 18,
    href: "/help/billing",
  },
  {
    icon: Settings,
    name: "Account Settings",
    description: "Update your profile and preferences",
    articles: 15,
    href: "/help/account",
  },
  {
    icon: Smartphone,
    name: "Devices & Apps",
    description: "Setup and troubleshooting guides",
    articles: 24,
    href: "/help/devices",
  },
  {
    icon: HelpCircle,
    name: "Troubleshooting",
    description: "Fix common issues and errors",
    articles: 30,
    href: "/help/troubleshooting",
  },
]

const popularArticles = [
  { title: "How to download music for offline listening", href: "#" },
  { title: "Changing your subscription plan", href: "#" },
  { title: "Connecting to your car's audio system", href: "#" },
  { title: "How to cancel your subscription", href: "#" },
  { title: "Setting up parental controls", href: "#" },
  { title: "Troubleshooting playback issues", href: "#" },
]

export default function HelpPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">How can we help?</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Search our help center or browse by category to find answers
          </p>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                <span className="text-xs text-muted-foreground">{category.articles} articles</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Popular Articles</h2>

          <div className="space-y-4">
            {popularArticles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="block p-4 rounded-xl hover:bg-card transition-colors group"
              >
                <span className="text-foreground group-hover:text-primary transition-colors">{article.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-8">Our support team is available 24/7 to assist you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-full px-8">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 bg-transparent">
              <Link href="/help/faq">View FAQ</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">Or call us at <a href="tel:+18444498445" className="text-foreground hover:text-primary transition-colors font-medium">(844) 449-8445</a></p>
        </div>
      </section>

      <Footer />
    </main>
  )
}



