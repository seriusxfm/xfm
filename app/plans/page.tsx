"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, X, Gift, Shield, Zap, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Essential",
    price: "9.99",
    description: "Perfect for casual listeners who want ad-free music",
    features: [
      { name: "Access to 100+ music channels", included: true },
      { name: "Standard audio quality (256kbps)", included: true },
      { name: "Listen on 1 device at a time", included: true },
      { name: "Ad-free streaming", included: true },
      { name: "Offline listening", included: true },
      { name: "Hi-Fi lossless audio", included: false },
      { name: "Exclusive podcasts", included: false },
      { name: "Live events access", included: false },
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Premium",
    price: "14.99",
    description: "For the devoted music lover who wants the best experience",
    features: [
      { name: "Access to all 200+ channels", included: true },
      { name: "Hi-Fi lossless audio (24-bit/192kHz)", included: true },
      { name: "Listen on 3 devices simultaneously", included: true },
      { name: "Ad-free streaming", included: true },
      { name: "Offline listening", included: true },
      { name: "Exclusive podcasts & originals", included: true },
      { name: "Live events & concerts", included: true },
      { name: "Personalized playlists", included: true },
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Family",
    price: "22.99",
    description: "Share premium audio with up to 6 family members",
    features: [
      { name: "Everything in Premium", included: true },
      { name: "6 individual accounts", included: true },
      { name: "Parental controls", included: true },
      { name: "Family mix playlists", included: true },
      { name: "Explicit content filter", included: true },
      { name: "Priority customer support", included: true },
      { name: "Family listening reports", included: true },
      { name: "Shared playlists", included: true },
    ],
    popular: false,
    cta: "Start Free Trial",
  },
]

const comparisons = [
  { feature: "Music channels", essential: "100+", premium: "200+", family: "200+" },
  { feature: "Audio quality", essential: "256kbps", premium: "Hi-Fi Lossless", family: "Hi-Fi Lossless" },
  { feature: "Simultaneous streams", essential: "1", premium: "3", family: "6 accounts" },
  { feature: "Offline downloads", essential: "Yes", premium: "Yes", family: "Yes" },
  { feature: "Ad-free", essential: "Yes", premium: "Yes", family: "Yes" },
  { feature: "Exclusive content", essential: "No", premium: "Yes", family: "Yes" },
  { feature: "Live events", essential: "No", premium: "Yes", family: "Yes" },
  { feature: "Parental controls", essential: "No", premium: "No", family: "Yes" },
]

const trustIndicators = [
  {
    icon: Gift,
    title: "30-Day Free Trial",
    description: "Try everything free for a month",
  },
  {
    icon: Shield,
    title: "Cancel Anytime",
    description: "No long-term commitment required",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Start listening in seconds",
  },
  {
    icon: Clock,
    title: "No Credit Card",
    description: "No payment info for trial",
  },
]

const planTestimonials = [
  {
    quote:
      "The Premium plan's Hi-Fi audio quality is incredible. I can hear details in my favorite songs I never noticed before.",
    name: "Alex Thompson",
    plan: "Premium",
    image: "/testimonials/alex.jpg",
  },
  {
    quote:
      "Family plan is perfect for us. Each kid has their own profile with parental controls, and we all discover music together.",
    name: "Maria Santos",
    plan: "Family",
    image: "/testimonials/maria.jpg",
  },
]

export default function PlansPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Choose the plan that fits your life
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Start with a 30-day free trial. No credit card required. Cancel anytime.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {trustIndicators.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2",
                  plan.popular
                    ? "bg-foreground text-background shadow-2xl scale-105 z-10"
                    : "bg-card shadow-lg hover:shadow-xl",
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className={cn("text-2xl font-bold mb-2", plan.popular ? "text-background" : "text-foreground")}>
                    {plan.name}
                  </h2>
                  <p className={cn("text-sm", plan.popular ? "text-background/70" : "text-muted-foreground")}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className={cn("text-5xl font-bold", plan.popular ? "text-background" : "text-foreground")}>
                    ${plan.price}
                  </span>
                  <span className={cn("text-sm", plan.popular ? "text-background/70" : "text-muted-foreground")}>
                    /month
                  </span>
                </div>

                <Button
                  asChild
                  className={cn(
                    "w-full rounded-full h-12 mb-8",
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-foreground/90",
                  )}
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check
                          className={cn("h-5 w-5 mt-0.5 flex-shrink-0", plan.popular ? "text-primary" : "text-primary")}
                        />
                      ) : (
                        <X
                          className={cn(
                            "h-5 w-5 mt-0.5 flex-shrink-0",
                            plan.popular ? "text-background/30" : "text-muted-foreground/30",
                          )}
                        />
                      )}
                      <span
                        className={cn(
                          "text-sm",
                          feature.included
                            ? plan.popular
                              ? "text-background/90"
                              : "text-foreground"
                            : plan.popular
                              ? "text-background/40"
                              : "text-muted-foreground/50",
                        )}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">What our subscribers say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {planTestimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-background rounded-2xl p-8 shadow-sm">
                <p className="text-foreground text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.plan} subscriber</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Compare plans</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-4 font-medium text-muted-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Essential</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground bg-primary/5 rounded-t-xl">
                    Premium
                  </th>
                  <th className="text-center py-4 pl-4 font-semibold text-foreground">Family</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-4 pr-4 text-foreground">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{row.essential}</td>
                    <td className="text-center py-4 px-4 text-foreground font-medium bg-primary/5">{row.premium}</td>
                    <td className="text-center py-4 pl-4 text-muted-foreground">{row.family}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-6 pr-4"></td>
                  <td className="text-center py-6 px-4">
                    <Button asChild variant="outline" className="rounded-full bg-transparent">
                      <Link href="/signup">Get Essential</Link>
                    </Button>
                  </td>
                  <td className="text-center py-6 px-4 bg-primary/5 rounded-b-xl">
                    <Button asChild className="rounded-full">
                      <Link href="/signup">Get Premium</Link>
                    </Button>
                  </td>
                  <td className="text-center py-6 pl-4">
                    <Button asChild variant="outline" className="rounded-full bg-transparent">
                      <Link href="/signup">Get Family</Link>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Have questions?</h2>
          <p className="text-muted-foreground mb-8">
            Check out our FAQ or contact our support team for help choosing the right plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <Link href="/help/faq">View FAQ</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



