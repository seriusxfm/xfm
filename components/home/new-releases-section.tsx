"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Clock, Heart } from "lucide-react"

const newReleases = [
  {
    title: "Midnight Dreams",
    artist: "Luna Nova",
    type: "Album",
    tracks: 12,
    duration: "48:32",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&h=800&fit=crop",
    releaseDate: "Today",
  },
  {
    title: "Electric Soul",
    artist: "The Resonance",
    type: "EP",
    tracks: 5,
    duration: "22:15",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop",
    releaseDate: "Today",
  },
  {
    title: "Golden Hour",
    artist: "Aria Waves",
    type: "Single",
    tracks: 1,
    duration: "3:45",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=800&fit=crop",
    releaseDate: "Yesterday",
  },
  {
    title: "Velvet Hours",
    artist: "Marcus Webb",
    type: "Album",
    tracks: 10,
    duration: "42:18",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
    releaseDate: "2 days ago",
  },
  {
    title: "Neon Nights",
    artist: "Synthwave Collective",
    type: "EP",
    tracks: 6,
    duration: "28:40",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop",
    releaseDate: "3 days ago",
  },
  {
    title: "Acoustic Horizons",
    artist: "Tom Harris",
    type: "Album",
    tracks: 14,
    duration: "52:10",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=800&fit=crop",
    releaseDate: "This week",
  },
]

export function NewReleasesSection() {
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
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className={`text-primary text-sm font-semibold tracking-wider uppercase mb-4 block transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-4'}`}>
              Fresh Music
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              New Releases
            </h2>
            <p className={`text-lg text-muted-foreground transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              The latest albums, EPs, and singles from your favorite artists.
            </p>
          </div>
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-4'}`}>
            <Button asChild variant="outline" className="rounded-full px-8 bg-transparent mt-6 md:mt-0 hover-glow transition-all duration-300 hover:scale-105">
              <Link href="/new-releases">View All New Music</Link>
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
          {newReleases.map((release, index) => (
            <div key={release.title} className={`group cursor-pointer transition-all duration-700 hover-lift ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`} style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={release.image || "/placeholder.svg"}
                  alt={release.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:animate-wiggle">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                  </button>
                </div>

                {/* Heart button */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50">
                  <Heart className="w-5 h-5 text-white" />
                </button>

                {/* Release badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary rounded-full">
                  <span className="text-primary-foreground text-xs font-medium">{release.type}</span>
                </div>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-1 group-hover:text-primary transition-colors">
                  {release.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{release.artist}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                  <span>
                    {release.tracks} {release.tracks === 1 ? "track" : "tracks"}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{release.duration}</span>
                  </div>
                  <span>{release.releaseDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



