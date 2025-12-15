"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote: "The audio quality is incredible. I can hear details in my favorite songs that I never noticed before.",
    author: "Sarah M.",
    role: "Music Producer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    quote: "Finally, a streaming service that understands what music lovers want. The curated playlists are spot on.",
    author: "James K.",
    role: "Audio Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    quote: "I use it in my car every day. The seamless switching between devices is a game changer.",
    author: "Emily R.",
    role: "Daily Commuter",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Loved by millions
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            See what our listeners are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger-animation">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`bg-background rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover-lift group cursor-pointer ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 text-yellow-400 transition-all duration-300 group-hover:scale-110 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`} fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: `${0.7 + index * 0.2 + i * 0.1}s` }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



