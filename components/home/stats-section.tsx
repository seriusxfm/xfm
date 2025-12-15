"use client"

import { useRef, useEffect, useState } from "react"
import { Users, Music, Headphones, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 50,
    suffix: "M+",
    label: "Active Listeners",
    description: "Music lovers worldwide",
  },
  {
    icon: Music,
    value: 100,
    suffix: "M+",
    label: "Songs Available",
    description: "Every genre imaginable",
  },
  {
    icon: Headphones,
    value: 200,
    suffix: "+",
    label: "Curated Channels",
    description: "Expert-crafted playlists",
  },
  {
    icon: Globe,
    value: 190,
    suffix: "+",
    label: "Countries",
    description: "Global reach",
  },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = value
    const duration = 2500
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-foreground text-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 hover-lift group ${isVisible ? "opacity-100 translate-y-0 animate-scale-in" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms`, animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-background/10 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-background/20 transition-all duration-300 hover:animate-wiggle">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-background/90 mb-0.5 sm:mb-1 group-hover:text-background transition-colors duration-300">{stat.label}</p>
              <p className="text-xs sm:text-sm text-background/50 group-hover:text-background/70 transition-colors duration-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



