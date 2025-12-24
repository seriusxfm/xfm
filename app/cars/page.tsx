import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Smartphone, Bluetooth, Radio, Check } from "lucide-react"

const connectionMethods = [
  {
    icon: Smartphone,
    name: "Apple CarPlay",
    description: "Connect your iPhone and control Audio verse right from your car's display",
  },
  {
    icon: Smartphone,
    name: "Android Auto",
    description: "Seamless integration with Android phones for hands-free control",
  },
  {
    icon: Radio,
    name: "Built-in Systems",
    description: "Pre-installed in millions of vehicles from top manufacturers",
  },
  {
    icon: Bluetooth,
    name: "Bluetooth",
    description: "Universal wireless connection for any vehicle with Bluetooth audio",
  },
]

const carFeatures = [
  "Voice control for hands-free operation",
  "Steering wheel controls integration",
  "Hi-Fi audio optimized for car speakers",
  "Offline listening for areas with no signal",
  "Automatic resume when you start your car",
  "Traffic-aware volume adjustment",
]

const partnerBrands = [
  { name: "Audi", logo: "audi logo simple black white automotive" },
  { name: "BMW", logo: "bmw logo simple black white automotive" },
  { name: "Mercedes", logo: "mercedes benz logo simple black white" },
  { name: "Tesla", logo: "tesla logo simple black white automotive" },
  { name: "Porsche", logo: "porsche logo simple black white automotive" },
  { name: "Volvo", logo: "volvo logo simple black white automotive" },
]

export default function CarsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                In-Car Audio
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Premium audio for the road
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform every drive into a premium listening experience. Audio verse integrates seamlessly with your
                vehicle for the ultimate road trip soundtrack.
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/plans">Start Free Trial</Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="/luxury-car-interior-dashboard-infotainment-screen-music-pla.jpg"
                alt="Car dashboard with Audio verse"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connection Methods */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Multiple ways to connect</h2>
            <p className="text-muted-foreground">Choose the connection method that works best for your vehicle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectionMethods.map((method) => (
              <div key={method.name} className="bg-background rounded-2xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{method.name}</h3>
                <p className="text-muted-foreground text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for driving</h2>
              <p className="text-background/70 mb-8 leading-relaxed">
                Audio verse's car experience is built from the ground up for safe, enjoyable driving. Large touch targets,
                voice control, and smart features let you focus on the road.
              </p>

              <ul className="space-y-4">
                {carFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-background/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src="/car-infotainment-screen-close-up-music-app-interfa.jpg"
                alt="Car infotainment screen"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Available in leading vehicles</h2>
          <p className="text-muted-foreground mb-12">Pre-installed or easily accessible in these brands and more</p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-70">
            {partnerBrands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center h-16">
                <span className="text-2xl font-bold text-foreground">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to upgrade your drive?</h2>
          <p className="text-muted-foreground mb-8">
            Start your free trial and experience premium audio in your car today.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/plans">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}



