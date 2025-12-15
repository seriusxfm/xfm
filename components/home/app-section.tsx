import Link from "next/link"
import Image from "next/image"
import { Download, Star, Sparkles, Headphones, CloudDownload, Music2 } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Discovery",
    description: "Smart recommendations that learn your unique taste",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: CloudDownload,
    title: "Offline Mode",
    description: "Download unlimited songs for offline listening",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Headphones,
    title: "Spatial Audio",
    description: "Immersive 3D sound with Dolby Atmos",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Music2,
    title: "Lossless Hi-Fi",
    description: "Studio-quality up to 24-bit/192kHz",
    color: "from-amber-500 to-orange-500",
  },
]

export function AppSection() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Devices showcase */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[500px] h-[600px]">
              {/* Laptop - back */}
              <div className="absolute left-0 top-10 w-[280px] opacity-50 blur-[1px]">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                  alt="MacBook"
                  width={280}
                  height={176}
                  className="rounded-xl shadow-xl"
                />
              </div>

              {/* Main phone (center) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[260px] z-20 animate-float">
                <div className="relative">
                  <Image
                    src="/device-iphone-music-app-dark-ui-playing.jpg"
                    alt="iPhone with seriusxfm"
                    width={260}
                    height={520}
                    className="rounded-[36px] shadow-2xl"
                  />
                  {/* Glowing effect */}
                  <div className="absolute inset-0 rounded-[36px] shadow-[0_0_60px_rgba(59,130,246,0.3)]" />
                </div>
              </div>

              {/* Car dashboard - right */}
              <div className="absolute right-0 top-20 w-[240px] z-10 animate-float" style={{ animationDelay: "1s" }}>
                <Image
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80"
                  alt="CarPlay Dashboard"
                  width={240}
                  height={150}
                  className="rounded-2xl shadow-xl"
                />
              </div>

              {/* Smart Speaker - bottom left */}
              <div
                className="absolute bottom-20 left-0 w-[140px] z-30 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&q=80"
                  alt="Smart Speaker"
                  width={140}
                  height={180}
                  className="rounded-2xl shadow-xl"
                />
              </div>

              {/* Apple Watch - bottom right */}
              <div
                className="absolute bottom-10 right-10 w-[120px] z-30 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=200&q=80"
                  alt="Apple Watch"
                  width={120}
                  height={140}
                  className="rounded-[20px] shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Multi-Device
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Your music, on every device
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Switch between devices seamlessly. Start on your phone, continue in your car, and pick up exactly where
              you left off at home.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/app" className="inline-block transform hover:scale-105 transition-transform">
                <Image
                  src="/badge-app-store-download-black.svg"
                  alt="Download on App Store"
                  width={150}
                  height={50}
                  className="h-14 w-auto"
                />
              </Link>
              <Link href="/app" className="inline-block transform hover:scale-105 transition-transform">
                <Image
                  src="/badge-google-play-download-black.svg"
                  alt="Get it on Google Play"
                  width={168}
                  height={50}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



