import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Music2, Podcast, Radio, Disc3, Mic2, ListMusic } from "lucide-react"

const contentTypes = [
  {
    name: "Music Library",
    icon: Music2,
    description: "100M+ songs",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Podcasts",
    icon: Podcast,
    description: "5M+ episodes",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Live Radio",
    icon: Radio,
    description: "50K+ stations",
    color: "from-purple-500 to-pink-500",
  },
  { name: "Albums", icon: Disc3, description: "New releases daily", color: "from-green-500 to-emerald-500" },
  {
    name: "Original Shows",
    icon: Mic2,
    description: "Exclusive content",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Playlists",
    icon: ListMusic,
    description: "Curated by experts",
    color: "from-indigo-500 to-blue-500",
  },
]

export function DevicesSection() {
  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Endless Content
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Everything you love to listen to
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From chart-topping hits to underground gems, podcasts to live radio—discover a world of audio content
            tailored to your taste.
          </p>
        </div>

        {/* Content showcase with images */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Music Albums */}
            <div className="relative group animate-float">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
                  alt="Album Covers"
                  width={400}
                  height={400}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">New Albums</h3>
                  <p className="text-white/80 text-sm">Fresh releases every Friday</p>
                </div>
              </div>
            </div>

            {/* Podcasts */}
            <div className="relative group animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80"
                  alt="Podcast Studio"
                  width={400}
                  height={400}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Podcasts</h3>
                  <p className="text-white/80 text-sm">Stories, news, and conversations</p>
                </div>
              </div>
            </div>

            {/* Live Events */}
            <div className="relative group animate-float" style={{ animationDelay: "1s" }}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
                  alt="Live Concerts"
                  width={400}
                  height={400}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Live Events</h3>
                  <p className="text-white/80 text-sm">Concerts and exclusive sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content type grid with icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {contentTypes.map((content) => (
            <div
              key={content.name}
              className="bg-background rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${content.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
              >
                <content.icon className="w-7 h-7 text-white" />
              </div>
              <p className="font-semibold text-foreground">{content.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{content.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="rounded-full px-8 bg-transparent">
            <Link href="/channels">Explore All Content</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}



