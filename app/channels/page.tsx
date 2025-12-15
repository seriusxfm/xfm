import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Play, Heart, Users, Sparkles } from "lucide-react"

const genres = ["All", "Pop", "Hip Hop", "Rock", "Electronic", "Jazz", "Classical", "Country", "R&B", "Latin", "Indie"]

const channels = [
  {
    name: "Hip Hop Heat",
    genre: "Hip Hop",
    description: "The hottest hip hop tracks",
    listeners: "1.8M",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
  },
  {
    name: "Rock Classics",
    genre: "Rock",
    description: "Classic rock anthems",
    listeners: "1.5M",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&h=600&fit=crop",
  },
  {
    name: "EDM Arena",
    genre: "Electronic",
    description: "EDM & electronic beats",
    listeners: "1.2M",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
  },
  {
    name: "Jazz Lounge",
    genre: "Jazz",
    description: "Smooth jazz for any mood",
    listeners: "890K",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop",
  },
  {
    name: "Classical Focus",
    genre: "Classical",
    description: "Timeless classical compositions",
    listeners: "750K",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
  },
  {
    name: "Country Roads",
    genre: "Country",
    description: "Best country music",
    listeners: "1.1M",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
  },
  {
    name: "R&B Nights",
    genre: "R&B",
    description: "Soulful R&B classics & new",
    listeners: "980K",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&h=600&fit=crop",
  },
  {
    name: "Latin Beats",
    genre: "Latin",
    description: "Reggaeton, salsa & more",
    listeners: "1.3M",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=600&fit=crop",
  },
  {
    name: "Indie Discovery",
    genre: "Indie",
    description: "Discover indie artists",
    listeners: "670K",
    image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?w=800&h=600&fit=crop",
  },
  {
    name: "Chill Vibes",
    genre: "Electronic",
    description: "Relaxing ambient beats",
    listeners: "1.6M",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop",
  },
  {
    name: "Metal Mayhem",
    genre: "Rock",
    description: "Heavy metal and hard rock",
    listeners: "820K",
    image: "/channels/metal-mayhem.jpg",
  },
  {
    name: "Acoustic Sessions",
    genre: "Pop",
    description: "Stripped down acoustic performances",
    listeners: "920K",
    image: "/channels/acoustic-sessions.jpg",
  },
]

const featuredChannel = {
  name: "seriusxfm Exclusives",
  description:
    "Hand-picked tracks by our editorial team. Updated every Friday with the best new music across all genres.",
  image: "/channels/indie-discovery.jpg",
  curator: "Editorial Team",
  tracks: 250,
  listeners: "3.2M",
}

export default function ChannelsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Music Channels</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Over 200 expertly curated channels. Commercial-free music for every mood, genre, and moment.
          </p>

          {/* Genre Filter */}
          <div className="flex flex-wrap gap-2">
            {genres.map((genre, index) => (
              <button
                key={genre}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={featuredChannel.image || "/placeholder.svg"}
                alt={featuredChannel.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">Featured Channel</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{featuredChannel.name}</h2>
                <p className="text-white/70 mb-6 leading-relaxed">{featuredChannel.description}</p>

                <div className="flex items-center gap-6 mb-8 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{featuredChannel.listeners} listeners</span>
                  </div>
                  <span>{featuredChannel.tracks} tracks</span>
                  <span>Curated by {featuredChannel.curator}</span>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="rounded-full px-8">
                    <Play className="w-5 h-5 mr-2" fill="currentColor" />
                    Play Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-12 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Channels</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {channels.map((channel) => (
              <div key={channel.name}>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={channel.image || "/placeholder.svg"}
                    alt={channel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Info overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/70 text-sm">{channel.genre}</span>
                    <h3 className="text-white text-xl font-semibold">{channel.name}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-1">{channel.description}</p>
                <p className="text-xs text-muted-foreground/70">{channel.listeners} listeners</p>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-8 bg-transparent">
              Load More Channels
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start listening?</h2>
          <p className="text-background/70 mb-8">Start your free trial and access all 200+ channels today.</p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/plans">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}



