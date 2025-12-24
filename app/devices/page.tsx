import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Smartphone, Car, Speaker, Tv, Watch, Laptop, Headphones, Gamepad2 } from "lucide-react"

const deviceCategories = [
  {
    name: "Mobile",
    icon: Smartphone,
    description: "Take your music everywhere with our iOS and Android apps",
    devices: ["iPhone", "iPad", "Android Phones", "Android Tablets"],
    image: "smartphone mobile device music app modern sleek",
  },
  {
    name: "Connected Cars",
    icon: Car,
    description: "Premium audio for every journey",
    devices: ["Apple CarPlay", "Android Auto", "Built-in Systems", "Bluetooth"],
    image: "luxury car interior dashboard infotainment music",
  },
  {
    name: "Smart Speakers",
    icon: Speaker,
    description: "Voice-controlled listening throughout your home",
    devices: ["Amazon Echo", "Google Nest", "Apple HomePod", "Sonos"],
    image: "smart speaker home device modern living room",
  },
  {
    name: "Smart TVs",
    icon: Tv,
    description: "Big screen, bigger sound",
    devices: ["Samsung", "LG", "Sony", "Roku TV", "Fire TV"],
    image: "smart TV living room entertainment center modern",
  },
  {
    name: "Wearables",
    icon: Watch,
    description: "Music on your wrist",
    devices: ["Apple Watch", "Wear OS", "Fitbit", "Garmin"],
    image: "smartwatch wearable fitness music streaming modern",
  },
  {
    name: "Desktop",
    icon: Laptop,
    description: "Work and listen on any computer",
    devices: ["Mac App", "Windows App", "Web Player", "Chrome Extension"],
    image: "desktop computer workspace modern minimal setup",
  },
  {
    name: "Headphones",
    icon: Headphones,
    description: "Optimized for premium audio devices",
    devices: ["AirPods", "Sony WH-1000XM", "Bose", "Sennheiser"],
    image: "premium headphones audiophile quality sleek design",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    description: "Background music while you play",
    devices: ["PlayStation", "Xbox", "Nintendo Switch", "Steam Deck"],
    image: "gaming setup console controller modern RGB lighting",
  },
]

const carBrands = [
  "Audi",
  "BMW",
  "Mercedes",
  "Tesla",
  "Ford",
  "Toyota",
  "Honda",
  "Chevrolet",
  "Volkswagen",
  "Porsche",
  "Lexus",
  "Volvo",
]

export default function DevicesPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Listen on every device</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Audio verse works seamlessly across all your devices. Start on one, continue on another. Your music follows
              you everywhere.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/plans">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Device Grid */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Supported Devices</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deviceCategories.map((category) => (
              <div
                key={category.name}
                className="bg-background rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>

                <ul className="space-y-2">
                  {category.devices.map((device) => (
                    <li key={device} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {device}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                In-Car Audio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Built into your car</h2>
              <p className="text-background/70 mb-8 leading-relaxed">
                Audio verse comes pre-installed in millions of vehicles worldwide. Connect via CarPlay, Android Auto, or
                your car's built-in entertainment system for the ultimate driving soundtrack.
              </p>

              <div className="mb-8">
                <p className="text-sm text-background/50 mb-4">Available in vehicles from:</p>
                <div className="flex flex-wrap gap-3">
                  {carBrands.map((brand) => (
                    <span key={brand} className="px-3 py-1 rounded-full bg-background/10 text-background/80 text-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/cars">Learn More About Cars</Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="/luxury-car-interior-dashboard-infotainment-screen-music-app-night.jpg"
                alt="Car dashboard with Audio verse"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Switching */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Seamless device switching</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Start listening on your phone, continue in your car, then finish at home. Audio verse remembers exactly where
            you left off.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-card flex items-center justify-center mx-auto mb-4 shadow-md">
                <Smartphone className="w-10 h-10 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Phone</p>
            </div>

            <div className="hidden md:block">
              <svg className="w-16 h-8 text-primary" fill="none" viewBox="0 0 64 32">
                <path
                  d="M0 16h56m0 0l-8-8m8 8l-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-card flex items-center justify-center mx-auto mb-4 shadow-md">
                <Car className="w-10 h-10 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Car</p>
            </div>

            <div className="hidden md:block">
              <svg className="w-16 h-8 text-primary" fill="none" viewBox="0 0 64 32">
                <path
                  d="M0 16h56m0 0l-8-8m8 8l-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-card flex items-center justify-center mx-auto mb-4 shadow-md">
                <Speaker className="w-10 h-10 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Home</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



