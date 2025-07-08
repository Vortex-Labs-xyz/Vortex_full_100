import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardCustomProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const CardCustom = React.forwardRef<HTMLDivElement, CardCustomProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-24 bg-surface shadow-card border border-border p-6",
          hover && "card-lift",
          className
        )}
        {...props}
      />
    )
  }
)

CardCustom.displayName = "CardCustom"

export { CardCustom } 