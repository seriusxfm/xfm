"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const moods = [
  {
    name: "Focus",
    description: "Deep concentration",
    color: "from-blue-500/80 to-cyan-500/80",
    image: "/mood-focus-person-working-calm-minimal-desk.jpg",
    tracks: 124,
  },
  {
    name: "Workout",
    description: "High energy beats",
    color: "from-red-500/80 to-orange-500/80",
    image: "/mood-workout-gym-weights-energy-motivation.jpg",
    tracks: 98,
  },
  {
    name: "Relax",
    description: "Calm and peaceful",
    color: "from-green-500/80 to-teal-500/80",
    image: "/mood-relax-nature-peaceful-sunset-calm-water.jpg",
    tracks: 156,
  },
  {
    name: "Party",
    description: "Dance all night",
    color: "from-purple-500/80 to-pink-500/80",
    image: "/mood-party-nightclub-dancing-colorful-lights.jpg",
    tracks: 87,
  },
  {
    name: "Sleep",
    description: "Drift away",
    color: "from-indigo-500/80 to-slate-500/80",
    image: "/mood-sleep-cozy-bedroom-night-stars-peaceful.jpg",
    tracks: 112,
  },
  {
    name: "Romance",
    description: "Love songs",
    color: "from-rose-500/80 to-pink-500/80",
    image: "/mood-romance-couple-sunset-warm-love-intimate.jpg",
    tracks: 134,
  },
]

export function MoodPlaylistsSection() {
  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Mood Playlists</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Music for Every Moment</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're working, working out, or winding down—we've got the perfect soundtrack.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {moods.map((mood) => (
            <Link key={mood.name} href="/playlists" className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={mood.image || "/placeholder.svg"}
                  alt={mood.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-lg font-bold mb-0.5">{mood.name}</h3>
                  <p className="text-white/70 text-xs">{mood.tracks} tracks</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="rounded-full px-8 bg-transparent">
            <Link href="/playlists">Explore All Playlists</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}



