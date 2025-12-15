import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Ready to start listening?</h2>
        <p className="text-xl text-background/70 mb-10 max-w-2xl mx-auto">
          Join millions of listeners enjoying premium audio. Start your free 30-day trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/plans">Start Free Trial</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-10 h-14 text-base border-background/30 text-background hover:bg-background/10 bg-transparent"
          >
            <Link href="/channels">Explore Channels</Link>
          </Button>
        </div>
        <p className="text-sm text-background/50 mt-6">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  )
}



