import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main>
      <Header />

      <section className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <p className="text-8xl font-bold text-primary mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            {"Sorry, we couldn't find the page you're looking for. It might have been moved or no longer exists."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-full px-8">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 bg-transparent">
              <Link href="/help">Get Help</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



