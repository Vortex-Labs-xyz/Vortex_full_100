import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardWithNotchesProps extends React.HTMLAttributes<HTMLDivElement> {
  notchPosition?: "top" | "bottom" | "both"
  notchSize?: "small" | "medium" | "large"
}

const CardWithNotches = React.forwardRef<HTMLDivElement, CardWithNotchesProps>(
  ({ className, notchPosition = "both", notchSize = "medium", children, ...props }, ref) => {
    const notchSizes = {
      small: "w-16 h-1",
      medium: "w-24 h-1.5",
      large: "w-32 h-2",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-24 bg-surface shadow-card border border-border p-8",
          className
        )}
        {...props}
      >
        {/* Top notch */}
        {(notchPosition === "top" || notchPosition === "both") && (
          <div
            className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 bg-accent rounded-b-full",
              notchSizes[notchSize]
            )}
          />
        )}
        
        {/* Bottom notch */}
        {(notchPosition === "bottom" || notchPosition === "both") && (
          <div
            className={cn(
              "absolute bottom-0 left-1/2 -translate-x-1/2 bg-accent rounded-t-full",
              notchSizes[notchSize]
            )}
          />
        )}
        
        {children}
      </div>
    )
  }
)

CardWithNotches.displayName = "CardWithNotches"

export { CardWithNotches } 