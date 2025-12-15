import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Headphones, Globe, Award } from "lucide-react"

const stats = [
  { value: "50M+", label: "Active Listeners", icon: Users },
  { value: "200+", label: "Premium Channels", icon: Headphones },
  { value: "190", label: "Countries", icon: Globe },
  { value: "15+", label: "Years of Excellence", icon: Award },
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image: "professional woman executive portrait modern office",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    image: "professional man tech executive portrait modern",
  },
  {
    name: "Emily Watson",
    role: "Chief Content Officer",
    image: "professional woman creative director portrait",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    image: "professional man engineer portrait tech company",
  },
]

const values = [
  {
    title: "Quality First",
    description:
      "We never compromise on audio quality. Every track is delivered in the highest fidelity possible because music deserves to be heard as the artist intended.",
  },
  {
    title: "Creator Focused",
    description:
      "We believe in fair compensation for artists. Our platform ensures creators are rewarded for their work, fostering a sustainable creative ecosystem.",
  },
  {
    title: "Innovation Driven",
    description:
      "We're constantly pushing the boundaries of what's possible in audio streaming, from AI-powered recommendations to spatial audio experiences.",
  },
  {
    title: "Community Centered",
    description:
      "Music brings people together. We build features that help our listeners connect, share, and discover together.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Redefining how the world listens
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              seriusxfm was founded with a simple mission: to create the best audio streaming experience on the planet.
              Today, we're proud to serve millions of listeners who share our passion for great sound.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Started in a garage, now global</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2009, two music-obsessed engineers set out to solve a problem they experienced every day: the lack
                  of a truly premium audio streaming experience.
                </p>
                <p>
                  What started as a side project in a San Francisco garage has grown into one of the world's leading
                  audio platforms, serving over 50 million listeners across 190 countries.
                </p>
                <p>
                  Today, seriusxfm continues to innovate with features like Hi-Fi lossless audio, AI-powered
                  personalization, and exclusive original content—all while staying true to our founding belief that
                  everyone deserves access to exceptional sound.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-tech-office-team-collaboration-creative-spa.jpg"
                alt="seriusxfm team"
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-background/70 max-w-2xl mx-auto">
              These principles guide everything we do, from the products we build to the partnerships we form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-background/5 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-background mb-3">{value.title}</h3>
                <p className="text-background/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">The people driving seriusxfm's mission forward</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <img
                  src={`/.jpg?height=300&width=300&query=${person.image}`}
                  alt={person.name}
                  className="w-48 h-48 rounded-2xl object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
                <p className="text-muted-foreground text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join our team</h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for talented people who share our passion for great audio experiences.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}



