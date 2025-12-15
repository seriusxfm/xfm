"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Music2, Award, TrendingUp } from "lucide-react"

const featuredArtists = [
  {
    name: "Luna Nova",
    genre: "Pop / Electronic",
    followers: "2.4M",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    trending: true,
    newRelease: "Midnight Dreams",
  },
  {
    name: "The Resonance",
    genre: "Alternative Rock",
    followers: "1.8M",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop",
    trending: false,
    newRelease: "Electric Soul",
  },
  {
    name: "Marcus Webb",
    genre: "R&B / Soul",
    followers: "3.1M",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    trending: true,
    newRelease: "Velvet Hours",
  },
  {
    name: "Sierra Jade",
    genre: "Country",
    followers: "1.2M",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
    trending: false,
    newRelease: "Golden Fields",
  },
  {
    name: "Kai Tanaka",
    genre: "Jazz / Neo-Soul",
    followers: "890K",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
    trending: true,
    newRelease: "Blue Horizons",
  },
]

export function ArtistsSpotlightSection() {
  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Artist Spotlight</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Discover New Artists</h2>
            <p className="text-lg text-muted-foreground">Trending creators and exclusive releases just for you.</p>
          </div>
          <Button asChild variant="outline" className="rounded-full px-8 bg-transparent mt-6 md:mt-0">
            <Link href="/artists">Explore All Artists</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredArtists.map((artist) => (
            <Link key={artist.name} href="/artists" className="group">
              <div className="relative">
                <div className="relative aspect-square rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ring-4 ring-transparent group-hover:ring-primary/20">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {artist.trending && (
                  <div className="absolute top-0 right-0 flex items-center gap-1 px-2 py-1 bg-primary rounded-full">
                    <TrendingUp className="w-3 h-3 text-primary-foreground" />
                    <span className="text-primary-foreground text-xs font-medium">Trending</span>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-foreground font-semibold mb-1 group-hover:text-primary transition-colors">
                  {artist.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{artist.genre}</p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/70">
                  <Music2 className="w-3 h-3" />
                  <span>{artist.followers} followers</span>
                </div>
                <p className="text-xs text-primary mt-2">New: {artist.newRelease}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}



