import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      size: {
        default: "py-sectionY",
        small: "py-12 sm:py-16",
        large: "py-24 sm:py-32",
        none: "py-0",
      },
      background: {
        default: "bg-bg",
        subtle: "bg-bgSubtle",
        surface: "bg-surface",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      size: "default",
      background: "default",
    },
  }
)

const sectionInnerVariants = cva(
  "container mx-auto px-container",
  {
    variants: {
      width: {
        default: "max-w-[1440px]",
        narrow: "max-w-3xl",
        medium: "max-w-5xl",
        wide: "max-w-7xl",
        full: "max-w-none",
      },
    },
    defaultVariants: {
      width: "default",
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants>,
    VariantProps<typeof sectionInnerVariants> {
  as?: "section" | "div" | "article"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, size, background, width, as = "section", children, ...props }, ref) => {
    const Component = as
    
    return (
      <Component
        ref={ref as any}
        className={cn(sectionVariants({ size, background }), className)}
        {...props}
      >
        <div className={sectionInnerVariants({ width })}>
          {children}
        </div>
      </Component>
    )
  }
)

Section.displayName = "Section"

export { Section, sectionVariants, sectionInnerVariants } 