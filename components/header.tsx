"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Plans", href: "/plans" },
  {
    name: "Listen",
    href: "#",
    children: [
      { name: "Channels", href: "/channels" },
      { name: "Shows", href: "/shows" },
      { name: "Podcasts", href: "/podcasts" },
    ],
  },
  { name: "Help", href: "/help" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if we're on the home page hero section (home page and not scrolled)
  const isOnHomeHero = pathname === "/" && !isScrolled

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled ? "glass shadow-lg animate-slide-in-top" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Logo 
              textColor={isOnHomeHero ? "white" : undefined}
              iconColor={isOnHomeHero ? "white" : undefined}
              size="md"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all duration-300 hover:scale-110 hover:bg-white/10",
              isOnHomeHero ? "text-white" : "text-foreground"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  isOnHomeHero 
                    ? "text-white/80 hover:text-white" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="glass rounded-xl p-2 shadow-lg min-w-[180px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground rounded-lg hover:bg-secondary hover:text-foreground transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className={cn("h-5 w-5", isOnHomeHero ? "text-white" : "text-foreground")} />
              ) : (
                <Moon className={cn("h-5 w-5", isOnHomeHero ? "text-white" : "text-foreground")} />
              )}
            </button>
          )}
          <Button asChild className="rounded-full px-6">
            <Link href="/plans">Start Free Trial</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-lg transition-all duration-500 ease-in-out",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="-m-1.5 p-1.5 animate-fade-in-left" onClick={() => setMobileMenuOpen(false)}>
            <Logo size="md" />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-foreground hover:bg-accent/10 transition-all duration-300 hover:scale-110 animate-fade-in-right"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6 transition-transform duration-300 hover:rotate-180" />
          </button>
        </div>
        <div className="mt-6 flow-root px-6">
          <div className="-my-6 divide-y divide-border stagger-animation">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block rounded-lg py-3 text-base font-medium text-foreground"
                    onClick={() => !item.children && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-sm text-muted-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="py-6 space-y-4">
              <Button asChild className="w-full rounded-full">
                <Link href="/plans" onClick={() => setMobileMenuOpen(false)}>
                  Start Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}



