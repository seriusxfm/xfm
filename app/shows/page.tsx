import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play, Clock } from "lucide-react"

const categories = ["All", "Talk Shows", "Comedy", "News", "Sports", "True Crime", "Business", "Culture"]

const shows = [
  {
    name: "Morning Buzz",
    host: "Sarah & Mike",
    category: "Talk Shows",
    episodes: 245,
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=800&fit=crop",
    featured: true,
  },
  {
    name: "Comedy Hour",
    host: "Jake Williams",
    category: "Comedy",
    episodes: 180,
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=800&fit=crop",
    featured: true,
  },
  {
    name: "Daily News Roundup",
    host: "News Team",
    category: "News",
    episodes: 500,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=800&fit=crop",
    featured: false,
  },
  {
    name: "Sports Central",
    host: "Tom Brady Jr.",
    category: "Sports",
    episodes: 320,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=800&fit=crop",
    featured: false,
  },
  {
    name: "True Crime Files",
    host: "Detective Amy",
    category: "True Crime",
    episodes: 95,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=800&fit=crop",
    featured: true,
  },
  {
    name: "Business Insider",
    host: "Mark Chen",
    category: "Business",
    episodes: 210,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop",
    featured: false,
  },
  {
    name: "Culture Cast",
    host: "The Culture Crew",
    category: "Culture",
    episodes: 156,
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&h=800&fit=crop",
    featured: false,
  },
  {
    name: "Late Night Talks",
    host: "David Stone",
    category: "Talk Shows",
    episodes: 400,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=800&fit=crop",
    featured: false,
  },
]

export default function ShowsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Shows & Talk</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Exclusive talk shows, interviews, and live programming from the best hosts in entertainment.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Shows */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Shows</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {shows
              .filter((s) => s.featured)
              .map((show) => (
                <div key={show.name}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <Image
                      src={show.image}
                      alt={show.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>

                  <span className="text-primary text-sm font-medium">{show.category}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-1">{show.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">Hosted by {show.host}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground/70 mt-2">
                    <Clock className="w-3 h-3" />
                    <span>{show.episodes} episodes</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Shows */}
      <section className="py-12 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Shows</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shows.map((show) => (
              <div key={show.name}>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md">
                  <Image
                    src={show.image}
                    alt={show.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold">{show.name}</h3>
                    <p className="text-white/70 text-sm">{show.host}</p>
                  </div>
                </div>

                <span className="text-xs text-muted-foreground">{show.category}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-8 bg-transparent">
              View All Shows
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



