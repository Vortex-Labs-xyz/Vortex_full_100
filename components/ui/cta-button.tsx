import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white hover:bg-accent/90 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:scale-105",
        secondary: "border-2 border-gray-200 text-[#111] hover:bg-gray-50 hover:border-gray-300 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:scale-105",
        link: "text-accent underline-offset-4 hover:underline rounded-full px-2 py-1 hover:scale-105",
      },
      size: {
        default: "text-sm px-6 py-3",
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