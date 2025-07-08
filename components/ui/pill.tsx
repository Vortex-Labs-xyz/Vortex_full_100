import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const pillVariants = cva(
  "inline-flex items-center justify-center h-12 px-6 rounded-pill font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-bgSubtle text-text hover:bg-border",
        accent: "bg-accent-soft text-accent hover:bg-accent hover:text-white",
        outline: "border-2 border-border text-text hover:border-accent hover:text-accent",
      },
      size: {
        default: "text-sm",
        small: "h-10 px-4 text-xs",
        large: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface PillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pillVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Pill.displayName = "Pill"

export { Pill, pillVariants } 