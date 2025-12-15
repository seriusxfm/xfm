import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Download, Star, Zap, Heart, Music, Wifi } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant playback with zero buffering. Start listening in milliseconds.",
  },
  {
    icon: Heart,
    title: "Smart Recommendations",
    description: "AI-powered suggestions that learn your taste and surprise you with new favorites.",
  },
  {
    icon: Download,
    title: "Offline Mode",
    description: "Download unlimited songs and playlists for listening without internet.",
  },
  {
    icon: Music,
    title: "Hi-Fi Audio",
    description: "Lossless quality up to 24-bit/192kHz for audiophile-grade listening.",
  },
  {
    icon: Wifi,
    title: "Cross-Device Sync",
    description: "Your library, playlists, and progress sync instantly across all devices.",
  },
  {
    icon: Star,
    title: "Personalized Mixes",
    description: "Daily mixes created just for you based on your listening history.",
  },
]

const appScreens = [
  { name: "Home", image: "music app home screen discover playlists modern UI" },
  { name: "Now Playing", image: "music app now playing screen album art controls" },
  { name: "Library", image: "music app library collection playlists organized" },
  { name: "Search", image: "music app search screen explore genres artists" },
]

export default function AppPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Mobile App</span>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Music in your pocket</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The seriusxfm app puts millions of songs, podcasts, and live shows at your fingertips. Beautifully
                designed, incredibly intuitive.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9 rating • 2M+ reviews</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="#" className="inline-block hover:opacity-80 transition-opacity">
                  <img src="/app-store-download-button-black.jpg" alt="Download on App Store" className="h-14" />
                </Link>
                <Link href="#" className="inline-block hover:opacity-80 transition-opacity">
                  <img
                    src="/google-play-store-download-button-black.jpg"
                    alt="Get it on Google Play"
                    className="h-14"
                  />
                </Link>
              </div>
            </div>

            {/* Phone mockups */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/iphone-mockup-music-streaming-app-home-screen-beau.jpg"
                  alt="seriusxfm app"
                  className="relative z-20 drop-shadow-2xl animate-float"
                />
                <img
                  src="/iphone-mockup-now-playing-screen-album-art-music-c.jpg"
                  alt="Now playing"
                  className="absolute -right-12 top-16 z-10 opacity-80 drop-shadow-xl"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything you need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Packed with features that make listening a joy. Here's what makes seriusxfm special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-background rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See it in action</h2>
            <p className="text-muted-foreground">A glimpse of the seriusxfm experience</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {appScreens.map((screen) => (
              <div key={screen.name} className="group">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={`/.jpg?height=400&width=200&query=${screen.image}`}
                    alt={screen.name}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3">{screen.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Download now</h2>
          <p className="text-background/70 mb-8">Start your free trial and take your music everywhere.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img src="/app-store-download-button-black.jpg" alt="Download on App Store" className="h-14" />
            </Link>
            <Link href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img src="/google-play-store-download-button-black.jpg" alt="Get it on Google Play" className="h-14" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



