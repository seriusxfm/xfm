"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Headphones, Volume2, SkipForward, Heart, Pause } from "lucide-react"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTrack] = useState({
    title: "Midnight Dreams",
    artist: "Luna Nova",
    progress: 65,
  })

  const floatingAlbums = []

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop"
          alt="Music background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animate-float" />
        <div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Animated badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-white">200+ Premium Channels Live Now</span>
            </div>

            {/* Animated headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 animate-fade-in-up text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block animate-fade-in-left" style={{ animationDelay: "0.3s" }}>Sound that</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent animate-fade-in-right animate-gradient" style={{ animationDelay: "0.5s" }}>
                moves you.
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-xl mb-8 lg:mb-10 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              Experience music, podcasts, and live content like never before. Crystal-clear Hi-Fi audio that adapts to
              your world.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all w-full sm:w-auto"
              >
                <Link href="/plans">
                  <Headphones className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-base bg-transparent border-foreground/20 hover:bg-foreground/5"
              >
                <Link href="/channels">
                  <Play className="mr-2 h-5 w-5" />
                  Explore Channels
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <Image
                      src={`https://i.pravatar.cc/150?img=${i + 1}`}
                      alt="User"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">50M+ listeners worldwide</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Interactive music player card */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main player card with 3D effect */}
              <div className="relative w-[280px] sm:w-[340px] md:w-[400px] bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
                {/* Album art */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&q=80" alt="Now Playing" fill className="object-cover" />
                  {/* Animated vinyl overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/20 ${isPlaying ? "opacity-0" : "opacity-100"} transition-opacity`}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-10 h-10 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Sound wave animation */}
                  {isPlaying && (
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-center gap-1 h-8">
                      {[48, 67, 92, 25, 92, 21, 58, 31, 85, 88, 7, 48, 78, 55, 19, 100, 82, 60, 85, 22].map((height, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white/80 rounded-full animate-seriusxfm"
                          style={{
                            animationDelay: `${i * 0.1}s`,
                            height: `${height}%`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Track info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{currentTrack.title}</h3>
                  <p className="text-muted-foreground">{currentTrack.artist}</p>
                </div>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${currentTrack.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>2:34</span>
                    <span>3:45</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <button className="w-10 h-10 rounded-full hover:bg-muted/50 flex items-center justify-center transition-colors">
                    <Heart className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </button>
                  <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full hover:bg-muted/50 flex items-center justify-center transition-colors">
                      <SkipForward className="w-5 h-5 text-foreground rotate-180" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors shadow-lg shadow-primary/30"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-primary-foreground" fill="currentColor" />
                      ) : (
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      )}
                    </button>
                    <button className="w-10 h-10 rounded-full hover:bg-muted/50 flex items-center justify-center transition-colors">
                      <SkipForward className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                  <button className="w-10 h-10 rounded-full hover:bg-muted/50 flex items-center justify-center transition-colors">
                    <Volume2 className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Floating mini cards */}
              <div
                className="absolute -left-12 sm:-left-16 top-16 sm:top-20 glass p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hidden lg:flex items-center gap-2 sm:gap-3 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Hi-Fi Quality</p>
                  <p className="text-[10px] text-muted-foreground">24-bit/192kHz</p>
                </div>
              </div>

              <div
                className="absolute -right-8 sm:-right-12 bottom-24 sm:bottom-32 glass p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hidden lg:flex items-center gap-2 sm:gap-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">124K</p>
                  <p className="text-[10px] text-muted-foreground">Listening now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-scroll" />
        </div>
      </div>
    </section>
  )
}



