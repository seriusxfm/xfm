import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ArrowRight } from "lucide-react"

const departments = ["All", "Engineering", "Design", "Product", "Marketing", "Sales", "Operations"]

const jobs = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Build beautiful, performant user interfaces for millions of listeners.",
  },
  {
    title: "iOS Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Shape the future of mobile audio experiences on Apple devices.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive experiences that delight music lovers worldwide.",
  },
  {
    title: "ML Engineer - Recommendations",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Develop AI systems that help listeners discover their next favorite song.",
  },
  {
    title: "Content Partnerships Manager",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    description: "Build relationships with artists, labels, and podcast creators.",
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive subscriber acquisition and engagement through creative campaigns.",
  },
]

const benefits = [
  "Competitive salary & equity",
  "Comprehensive health insurance",
  "Unlimited PTO",
  "Remote-friendly culture",
  "Learning & development budget",
  "Home office stipend",
  "Free Premium subscription",
  "Wellness programs",
]

export default function CareersPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Build the future of audio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our team of passionate music lovers and engineers. We're on a mission to create the best audio
              streaming experience in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Why work at Audio verse</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-background rounded-xl p-4 text-center shadow-sm">
                <p className="text-foreground font-medium text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Open Positions</h2>
          <p className="text-muted-foreground text-center mb-8">
            {jobs.length} roles available across {departments.length - 1} departments
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept, index) => (
              <button
                key={dept}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{job.department}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{job.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{"Don't see a perfect fit?"}</h2>
          <p className="text-background/70 mb-8">
            {"We're always looking for talented people. Send us your resume and we'll keep you in mind."}
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="mailto:careers@audiovers.com">Send Your Resume</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}



