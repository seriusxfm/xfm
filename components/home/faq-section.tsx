"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Start your 30-day free trial with full access to all features. No credit card required to start. You can cancel anytime during the trial period without being charged.",
  },
  {
    question: "What audio quality can I expect?",
    answer:
      "Audio verse offers multiple audio quality options. Our Premium and Family plans include Hi-Fi lossless audio up to 24-bit/192kHz, delivering studio-quality sound that audiophiles love.",
  },
  {
    question: "Can I listen offline?",
    answer:
      "Yes! All plans include offline listening. Simply download your favorite songs, albums, or playlists and enjoy them without an internet connection.",
  },
  {
    question: "What devices are supported?",
    answer:
      "Audio verse works on iOS, Android, web browsers, smart TVs, smart speakers (Alexa, Google Home), Apple Watch, CarPlay, Android Auto, and more. Your music follows you everywhere.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll continue to have access until the end of your billing period.",
  },
  {
    question: "Is there a student discount?",
    answer:
      "Yes! Students can get Premium for 50% off with a valid student email. Just verify your student status during signup to unlock the discount.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about Audio verse</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}



