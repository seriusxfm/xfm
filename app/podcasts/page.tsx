import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play, Clock, Bookmark } from "lucide-react"
import Image from "next/image"

const categories = ["All", "True Crime", "Comedy", "Business", "Technology", "Health", "Society", "Science"]

const featuredPodcast = {
  name: "The Investigation",
  host: "Sarah Koenig",
  description:
    "A groundbreaking true crime series that takes you deep into unsolved mysteries with meticulous research and compelling storytelling.",
  episodes: 48,
  image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=800&fit=crop",
}

const podcasts = [
  {
    name: "Tech Today",
    host: "Silicon Valley Insiders",
    category: "Technology",
    episodes: 320,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop",
  },
  {
    name: "Mindful Living",
    host: "Dr. Emma Stone",
    category: "Health",
    episodes: 185,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=800&fit=crop",
  },
  {
    name: "Comedy Goldmine",
    host: "The Laugh Factory",
    category: "Comedy",
    episodes: 250,
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=800&fit=crop",
  },
  {
    name: "Business Blueprint",
    host: "Mark Cuban",
    category: "Business",
    episodes: 145,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop",
  },
  {
    name: "Crime Stories",
    host: "Detective Files",
    category: "True Crime",
    episodes: 89,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=800&fit=crop",
  },
  {
    name: "Science Explained",
    host: "Neil deGrasse Tyson",
    category: "Science",
    episodes: 210,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=800&fit=crop",
  },
  {
    name: "Society Now",
    host: "The Discussion Panel",
    category: "Society",
    episodes: 178,
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=800&fit=crop",
  },
  {
    name: "Startup Stories",
    host: "Y Combinator",
    category: "Business",
    episodes: 165,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=800&fit=crop",
  },
]

export default function PodcastsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Podcasts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Exclusive podcasts and originals you won't find anywhere else. Award-winning content from top creators.
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

      {/* Featured Podcast */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-foreground text-background">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative aspect-square lg:aspect-auto">
                <Image
                  src={featuredPodcast.image}
                  alt={featuredPodcast.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                  Featured Original
                </span>
                <h2 className="text-4xl font-bold mb-4">{featuredPodcast.name}</h2>
                <p className="text-background/70 mb-2">Hosted by {featuredPodcast.host}</p>
                <p className="text-background/80 mb-6 leading-relaxed">{featuredPodcast.description}</p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-1 text-sm text-background/60">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPodcast.episodes} episodes</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="rounded-full px-8">
                    <Play className="w-5 h-5 mr-2" fill="currentColor" />
                    Play Latest
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 border-background/30 text-background hover:bg-background/10 bg-transparent"
                  >
                    <Bookmark className="w-5 h-5 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Podcasts */}
      <section className="py-12 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse All Podcasts</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {podcasts.map((podcast) => (
              <div key={podcast.name}>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md">
                  <Image
                    src={podcast.image}
                    alt={podcast.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold">{podcast.name}</h3>
                    <p className="text-white/70 text-sm">{podcast.host}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{podcast.category}</span>
                  <span className="text-xs text-muted-foreground/70">{podcast.episodes} eps</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-8 bg-transparent">
              Load More Podcasts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



