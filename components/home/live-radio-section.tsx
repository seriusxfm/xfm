"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Users, Volume2 } from "lucide-react"

const liveStations = [
  {
    name: "seriusxfm Live",
    host: "DJ Marcus Cole",
    show: "Morning Grooves",
    listeners: "124K",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=800&fit=crop",
    isLive: true,
  },
  {
    name: "Beats FM",
    host: "Lisa Chen",
    show: "Urban Nights",
    listeners: "89K",
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&h=800&fit=crop",
    isLive: true,
  },
  {
    name: "Acoustic Hour",
    host: "Tom Harris",
    show: "Unplugged Sessions",
    listeners: "56K",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=800&fit=crop",
    isLive: true,
  },
  {
    name: "Electronic Pulse",
    host: "DJ Synthia",
    show: "Bass Drop",
    listeners: "102K",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=800&fit=crop",
    isLive: false,
  },
]

export function LiveRadioSection() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-foreground to-foreground/95 text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-red-500/20 rounded-full">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 text-xs sm:text-sm font-medium">LIVE NOW</span>
              </div>
              <span className="text-background/50 text-xs sm:text-sm">{currentTime}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">Live Radio Stations</h2>
            <p className="text-base sm:text-lg text-background/70">Tune in to live broadcasts from our expert DJs and hosts.</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-4 sm:px-6 lg:px-8 border-background/20 text-background hover:bg-background/10 mt-4 md:mt-0 bg-transparent text-sm sm:text-base"
          >
            <Link href="/live">View All Stations</Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {liveStations.map((station) => (
            <div key={station.name} className="group cursor-pointer">
              <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4">
                <Image
                  src={station.image || "/placeholder.svg"}
                  alt={station.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {station.isLive && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-red-500/90 rounded-full">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-[10px] sm:text-xs font-medium">LIVE</span>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <Play className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground ml-0.5 sm:ml-1" fill="currentColor" />
                  </button>
                </div>

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-white text-base sm:text-lg font-semibold mb-0.5 sm:mb-1">{station.name}</h3>
                  <p className="text-white/80 text-xs sm:text-sm">{station.show}</p>
                  <p className="text-white/60 text-[10px] sm:text-xs">with {station.host}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2 text-background/60 text-xs sm:text-sm">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{station.listeners} listening</span>
                </div>
                <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-background/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



