"use client"

import { useRef, useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Phone } from "lucide-react"

const contactMethods = [
  {
    icon: MessageCircle,
    name: "Live Chat",
    description: "Chat with our support team",
    action: "Start Chat",
    available: "Available 24/7",
  },
  {
    icon: Mail,
    name: "Email",
    description: "Send us a message",
    action: "support@seriusxfm.com",
    available: "Response within 24 hours",
  },
  {
    icon: Phone,
    name: "Phone",
    description: "Call our support line",
    action: "(844) 449-8445",
    available: "Mon-Fri, 9am-6pm EST",
  },
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100)

    // Form scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <main>
      <Header />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-16 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className={`text-5xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              Get in touch
            </h1>
            <p className={`text-xl text-muted-foreground transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              Have a question, feedback, or just want to say hi? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            {contactMethods.map((method, index) => (
              <div key={method.name} className={`bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover-lift group cursor-pointer ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`} style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <method.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{method.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                {method.name === "Phone" ? (
                  <a href="tel:+18444498445" className="font-medium text-foreground mb-2 block hover:text-primary transition-colors">{method.action}</a>
                ) : method.name === "Email" ? (
                  <a href={`mailto:${method.action}`} className="font-medium text-foreground mb-2 block hover:text-primary transition-colors">{method.action}</a>
                ) : (
                  <p className="font-medium text-foreground mb-2">{method.action}</p>
                )}
                <p className="text-xs text-muted-foreground">{method.available}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-20 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-foreground mb-8 text-center transition-all duration-1000 ${formVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Send us a message
          </h2>

          <form className="space-y-6">
            <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${formVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
                />
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${formVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
              />
            </div>

            <div className={`transition-all duration-1000 delay-500 ${formVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing Question</option>
                <option>Partnership Inquiry</option>
                <option>Press & Media</option>
                <option>Other</option>
              </select>
            </div>

            <div className={`transition-all duration-1000 delay-600 ${formVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300 hover:border-primary/50"
              />
            </div>

            <div className={`transition-all duration-1000 delay-700 ${formVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <Button type="submit" size="lg" className="w-full rounded-full hover-glow transition-all duration-300 hover:scale-105">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>



      <Footer />
    </main>
  )
}



