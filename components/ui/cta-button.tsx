import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white hover:bg-accent/90 rounded-pill px-6 py-3 shadow-soft hover:shadow-card",
        secondary: "border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-pill px-6 py-3",
        link: "text-accent underline-offset-4 hover:underline px-1 py-0.5",
      },
      size: {
        default: "text-sm",
        small: "text-xs px-4 py-2",
        large: "text-base px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(ctaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

CTAButton.displayName = "CTAButton"

export { CTAButton, ctaButtonVariants } 