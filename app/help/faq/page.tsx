"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqCategories = [
  {
    name: "Getting Started",
    faqs: [
      {
        question: "How do I create a seriusxfm account?",
        answer:
          "Creating an account is easy! Click the 'Start Free Trial' button, enter your email and create a password. You'll have instant access to all features during your 30-day free trial.",
      },
      {
        question: "What's included in the free trial?",
        answer:
          "Your free trial includes full access to all Premium features: 200+ channels, Hi-Fi audio quality, offline listening, and exclusive content. No credit card required to start.",
      },
      {
        question: "What devices are supported?",
        answer:
          "seriusxfm works on computers, tablets, smart TVs, smart speakers, cars with CarPlay/Android Auto, and smartwatches. Stream directly from your web browser or through compatible devices.",
      },
    ],
  },
  {
    name: "Subscriptions & Billing",
    faqs: [
      {
        question: "What subscription plans are available?",
        answer:
          "We offer three plans: Essential ($9.99/month) for casual listeners, Premium ($14.99/month) for devoted music lovers with Hi-Fi audio, and Family ($22.99/month) for up to 6 accounts.",
      },
      {
        question: "How do I cancel my subscription?",
        answer:
          "You can cancel anytime from your Account Settings. Go to Settings > Subscription > Cancel Subscription. You'll continue to have access until the end of your billing period.",
      },
      {
        question: "Can I change my plan?",
        answer:
          "Yes! You can upgrade or downgrade your plan at any time from Account Settings. Changes take effect at the start of your next billing cycle.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a full refund within 14 days of your initial subscription or renewal if you're not satisfied. Contact our support team to request a refund.",
      },
    ],
  },
  {
    name: "Audio & Quality",
    faqs: [
      {
        question: "What audio quality does seriusxfm offer?",
        answer:
          "Essential plan offers standard 256kbps quality. Premium and Family plans include Hi-Fi lossless audio up to 24-bit/192kHz for studio-quality sound.",
      },
      {
        question: "How do I enable Hi-Fi audio?",
        answer:
          "Hi-Fi audio is automatically enabled for Premium and Family subscribers. Go to Settings > Audio Quality to confirm it's set to 'Lossless' or 'Hi-Fi'.",
      },
      {
        question: "Does streaming Hi-Fi use more data?",
        answer:
          "Yes, Hi-Fi streaming uses more data than standard quality. We recommend using Wi-Fi for Hi-Fi streaming or downloading content for offline listening to save mobile data.",
      },
    ],
  },
  {
    name: "Devices & Connectivity",
    faqs: [
      {
        question: "What devices can I use seriusxfm on?",
        answer:
          "seriusxfm works on iOS, Android, web browsers, smart TVs, smart speakers (Alexa, Google Home), Apple Watch, CarPlay, Android Auto, PlayStation, Xbox, and more.",
      },
      {
        question: "How many devices can I use at once?",
        answer:
          "Essential allows 1 device at a time, Premium allows 3 simultaneous streams, and Family provides 6 individual accounts each with their own streams.",
      },
      {
        question: "How do I connect to my car?",
        answer:
          "Connect via Apple CarPlay, Android Auto, Bluetooth, or your car's built-in entertainment system. Visit our Cars page for detailed setup instructions for your vehicle.",
      },
    ],
  },
  {
    name: "Content & Features",
    faqs: [
      {
        question: "How do I download music for offline listening?",
        answer:
          "Tap the download icon on any song, album, or playlist. Downloaded content is stored in your Library under 'Downloads' and plays without an internet connection.",
      },
      {
        question: "Can I create my own playlists?",
        answer:
          "Yes! Tap the '+' button to create a new playlist, then add songs by tapping the three dots menu on any track and selecting 'Add to Playlist'.",
      },
      {
        question: "How does the recommendation system work?",
        answer:
          "Our AI analyzes your listening history, likes, and skips to suggest new music you'll love. The more you listen, the better your recommendations become.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">Find answers to common questions about seriusxfm</p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div key={category.name} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.name}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.name}-${index}`} className="border-b border-border">
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8">Our support team is here to help 24/7</p>
          <Button asChild className="rounded-full px-8">
            <Link href="/contact">Contact Support</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">Or call us at <a href="tel:+18444498445" className="text-foreground hover:text-primary transition-colors font-medium">(844) 449-8445</a></p>
        </div>
      </section>

      <Footer />
    </main>
  )
}



