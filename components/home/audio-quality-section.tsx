"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Waves, Headphones, Sparkles, Volume2 } from "lucide-react"

const audioFeatures = [
  {
    icon: Waves,
    title: "Hi-Fi Lossless",
    description: "24-bit/192kHz audio that captures every detail the artist intended",
    stat: "192kHz",
  },
  {
    icon: Headphones,
    title: "Spatial Audio",
    description: "Immersive 3D sound that puts you inside the music",
    stat: "Dolby Atmos",
  },
  {
    icon: Sparkles,
    title: "Dynamic EQ",
    description: "AI-powered optimization that adapts to your headphones",
    stat: "Adaptive",
  },
]

export function AudioQualitySection() {
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
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Animated background waveform */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          {[
            161.8, 117.6, 147.5, 114.0, 107.8, 98.6, 88.6, 121.5, 117.7, 135.3,
            154.2, 184.0, 192.2, 176.4, 121.5, 106.3, 95.6, 106.8, 126.8, 154.2,
            229.0, 197.1, 172.8, 145.2, 130.6, 122.4, 94.5, 120.4, 147.3, 130.6,
            123.4, 108.9, 156.0, 170.3, 182.8, 191.9, 170.3, 139.6, 193.1, 156.0,
            136.4, 130.6, 177.6, 226.0, 242.5, 231.0, 255.4, 237.2, 229.4, 234.9,
            268.3, 241.4, 255.6, 226.0, 223.4, 198.2, 193.1, 229.0, 250.2, 268.3
          ].map((height, i) => (
            <rect
              key={i}
              x={i * 20}
              y={200 - (height - 150)}
              width="4"
              height={height}
              className={`fill-primary transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${i * 30}ms` }}
            />
          ))}
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Volume2 className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Premium Audio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Hear music the way it was meant to be heard
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience studio-quality sound with our Hi-Fi lossless streaming. Every note, every breath, every subtle
              nuance—exactly as the artist intended. No compression, no compromise.
            </p>

            <div className="space-y-6 mb-8">
              {audioFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 transition-all duration-700 hover-lift group cursor-pointer ${isVisible ? "opacity-100 translate-x-0 animate-fade-in-left" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${index * 150}ms`, animationDelay: `${0.5 + index * 0.2}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300 hover:animate-wiggle">
                    <feature.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                        {feature.stat}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1s' }}>
              <Button asChild size="lg" className="rounded-full px-8 hover-glow transition-all duration-300 hover:scale-105">
                <Link href="/plans">Experience Hi-Fi Audio</Link>
              </Button>
            </div>
          </div>

          {/* Visualizer mockup */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Outer glow rings */}
              <div
                className={`absolute inset-0 rounded-full bg-primary/5 transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
              />
              <div
                className={`absolute inset-4 rounded-full bg-primary/10 transition-all duration-1000 delay-100 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
              />
              <div
                className={`absolute inset-8 rounded-full bg-primary/15 transition-all duration-1000 delay-200 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
              />

              {/* Center visualizer */}
              <div className="absolute inset-12 rounded-full bg-foreground flex items-center justify-center">
                <div className="flex items-end gap-1 h-20">
                  {[67, 21, 71, 63, 37, 63, 47, 73, 41, 39, 47, 38].map((height, i) => (
                    <div
                      key={i}
                      className="w-2 bg-primary rounded-full animate-pulse"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 100}ms`,
                        animationDuration: `${945 + (i * 37)}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating stats */}
              <div
                className={`absolute -top-4 -right-4 px-4 py-2 bg-card rounded-xl shadow-lg transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <p className="text-xs text-muted-foreground">Bit Depth</p>
                <p className="text-lg font-bold text-foreground">24-bit</p>
              </div>
              <div
                className={`absolute -bottom-4 -left-4 px-4 py-2 bg-card rounded-xl shadow-lg transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <p className="text-xs text-muted-foreground">Sample Rate</p>
                <p className="text-lg font-bold text-foreground">192kHz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



