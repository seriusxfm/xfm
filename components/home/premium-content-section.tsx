import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PremiumContentSection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80"
              alt="Premium podcast studio"
              className="rounded-3xl shadow-2xl w-full"
            />
            {/* Floating glass card */}
            <div className="absolute -bottom-8 -right-8 glass bg-white/10 backdrop-blur-xl p-6 rounded-2xl max-w-[260px] hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">New Episode</p>
                  <p className="text-xs text-white/60">Tech Talk Daily</p>
                </div>
              </div>
              <p className="text-xs text-white/70">{"Exclusive interview with industry leaders"}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Exclusive Content
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Premium podcasts and originals</h2>
            <p className="text-lg text-background/70 mb-8 leading-relaxed">
              Access award-winning original shows, exclusive interviews, and premium podcast series you won't find
              anywhere else. From true crime to comedy, business to culture—discover content crafted for the curious
              mind.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "1000+ exclusive podcast episodes",
                "Original series from top creators",
                "Ad-free listening experience",
                "Early access to new releases",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-background/80">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/podcasts">Explore Podcasts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}



