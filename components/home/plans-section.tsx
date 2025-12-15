"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Essential",
    price: "9.99",
    description: "Perfect for casual listeners",
    features: [
      "Access to 100+ music channels",
      "Standard audio quality",
      "Listen on 1 device",
      "Ad-free streaming",
      "Offline listening",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "14.99",
    description: "For the devoted music lover",
    features: [
      "Access to all 200+ channels",
      "Hi-Fi lossless audio",
      "Listen on 3 devices",
      "Exclusive podcasts",
      "Live events access",
      "Personalized playlists",
    ],
    popular: true,
  },
  {
    name: "Family",
    price: "22.99",
    description: "Share with up to 6 people",
    features: [
      "Everything in Premium",
      "6 individual accounts",
      "Parental controls",
      "Family mix playlists",
      "Explicit content filter",
      "Priority support",
    ],
    popular: false,
  },
]

export function PlansSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance animate-fade-in-up">Choose your plan</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Start with a 30-day free trial. Cancel anytime.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto stagger-animation">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover-lift hover-glow cursor-pointer scroll-animate",
                plan.popular
                  ? "bg-foreground text-background shadow-2xl sm:scale-105 animate-glow"
                  : "bg-background shadow-lg hover:shadow-xl",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4 sm:mb-6">
                <h3 className={cn("text-lg sm:text-xl font-semibold mb-2", plan.popular ? "text-background" : "text-foreground")}>
                  {plan.name}
                </h3>
                <p className={cn("text-xs sm:text-sm", plan.popular ? "text-background/70" : "text-muted-foreground")}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <span className={cn("text-4xl sm:text-5xl font-bold", plan.popular ? "text-background" : "text-foreground")}>
                  ${plan.price}
                </span>
                <span className={cn("text-xs sm:text-sm", plan.popular ? "text-background/70" : "text-muted-foreground")}>
                  /month
                </span>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3">
                    <Check
                      className={cn("h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0", plan.popular ? "text-primary" : "text-primary")}
                    />
                    <span className={cn("text-xs sm:text-sm", plan.popular ? "text-background/90" : "text-muted-foreground")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  "w-full rounded-full h-10 sm:h-12 text-sm sm:text-base",
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-foreground text-background hover:bg-foreground/90",
                )}
              >
                <Link href="/plans">Start Free Trial</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



