import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface TrustStripProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: Array<{
    src: string
    alt: string
    name: string
  }>
  variant?: "default" | "compact" | "large"
}

const TrustStrip = React.forwardRef<HTMLDivElement, TrustStripProps>(
  ({ className, logos, variant = "default", ...props }, ref) => {
    const sizeClasses = {
      default: "h-8 sm:h-10",
      compact: "h-6 sm:h-8",
      large: "h-10 sm:h-12",
    }

    const gapClasses = {
      default: "gap-8 sm:gap-12",
      compact: "gap-6 sm:gap-8",
      large: "gap-10 sm:gap-16",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap items-center justify-center",
          gapClasses[variant],
          className
        )}
        {...props}
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={48}
              className={cn("w-auto", sizeClasses[variant])}
              style={{
                filter: "grayscale(1) invert(1) brightness(0.7) contrast(2)",
              }}
            />
          </div>
        ))}
      </div>
    )
  }
)

TrustStrip.displayName = "TrustStrip"

export { TrustStrip } 