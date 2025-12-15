"use client"

import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const channelsRow1 = [
  { name: "Chill Vibes", genre: "Electronic", image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop", listeners: "245K" },
  { name: "Hip Hop Heat", genre: "Hip Hop", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop", listeners: "512K" },
  { name: "Acoustic Sessions", genre: "Acoustic", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop", listeners: "189K" },
  { name: "EDM Arena", genre: "Dance", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop", listeners: "678K" },
  { name: "Jazz Lounge", genre: "Jazz", image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop", listeners: "134K" },
  { name: "Rock Classics", genre: "Rock", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&h=600&fit=crop", listeners: "423K" },
]

const channelsRow2 = [
  { name: "Classical Focus", genre: "Classical", image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop", listeners: "98K" },
  { name: "Indie Discovery", genre: "Indie", image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?w=800&h=600&fit=crop", listeners: "267K" },
  { name: "R&B Nights", genre: "R&B", image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&h=600&fit=crop", listeners: "356K" },
  { name: "Latin Beats", genre: "Latin", image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=600&fit=crop", listeners: "445K" },
  { name: "Country Roads", genre: "Country", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop", listeners: "198K" },
  { name: "Metal Mayhem", genre: "Metal", image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=600&fit=crop", listeners: "287K" },
]

function ChannelCard({ channel }: { channel: (typeof channelsRow1)[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
        <Image
          src={channel.image || "/placeholder.svg"}
          alt={channel.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Live indicator */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-white text-xs font-medium">{channel.listeners} listening</span>
        </div>

        {/* Content */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white/70 text-sm mb-1 font-medium">{channel.genre}</p>
          <h3 className="text-white text-xl font-bold">{channel.name}</h3>
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
            <Play className="w-7 h-7 text-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ChannelsSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Curated Channels
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Featured Channels</h2>
          <p className="text-lg text-muted-foreground">
            Expertly curated playlists for every mood, moment, and genre. Updated daily by our team of music experts.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Row 1 - Moving Left */}
        <div className="relative">
          <div className="flex animate-marquee-left">
            {/* Duplicate channels for seamless loop */}
            {[...channelsRow1, ...channelsRow1].map((channel, idx) => (
              <div key={`row1-${idx}`} className="px-3">
                <ChannelCard channel={channel} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="relative">
          <div className="flex animate-marquee-right">
            {/* Duplicate channels for seamless loop */}
            {[...channelsRow2, ...channelsRow2].map((channel, idx) => (
              <div key={`row2-${idx}`} className="px-3">
                <ChannelCard channel={channel} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 text-center">
        <Button asChild variant="outline" className="rounded-full px-8 bg-transparent">
          <Link href="/channels">Explore All Channels</Link>
        </Button>
      </div>
    </section>
  )
}



