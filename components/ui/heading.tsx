import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva(
  "font-bold tracking-tight text-text",
  {
    variants: {
      level: {
        h1: "text-5xl leading-tight sm:text-6xl",
        h2: "text-4xl leading-tight sm:text-5xl", 
        h3: "text-2xl leading-snug sm:text-3xl",
        h4: "text-xl font-semibold leading-snug",
        h5: "text-lg font-semibold leading-normal",
        h6: "text-base font-semibold leading-normal",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      level: "h2",
      align: "left",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, align, as, ...props }, ref) => {
    const Component = as || level || "h2"
    
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level: level || as, align }), className)}
        {...props}
      />
    )
  }
)

Heading.displayName = "Heading"

export { Heading, headingVariants } 