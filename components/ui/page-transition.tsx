"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function PageTransition({ children, className, delay = 0 }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {children}
    </div>
  )
}

// Page entrance animation wrapper
export function PageEntrance({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      {children}
    </div>
  )
}

// Staggered list animation
export function StaggeredList({ 
  children, 
  delay = 100,
  className 
}: { 
  children: React.ReactNode
  delay?: number
  className?: string 
}) {
  return (
    <div className={cn("stagger-animation", className)}>
      {children}
    </div>
  )
}