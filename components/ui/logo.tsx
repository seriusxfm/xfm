import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  textColor?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ 
  className, 
  textColor = "currentColor", 
  showText = true,
  size = "lg"
}: LogoProps) {
  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  }

  return (
    <div className={cn("flex items-center", className)}>
      {/* Brand Text with modern styling */}
      {showText && (
        <div className="flex items-baseline gap-1 group">
          <span 
            className={cn(
              "font-sans font-bold tracking-tight transition-all duration-300 hover:scale-110 cursor-pointer",
              textSizeClasses[size]
            )}
            style={{ color: textColor }}
          >
            serius
          </span>
          <span 
            className={cn(
              "font-sans font-light text-opacity-80 transition-all duration-300 group-hover:text-primary",
              size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"
            )}
            style={{ color: textColor }}
          >
            xfm
          </span>
        </div>
      )}
    </div>
  )
}