import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const sectionIconVariants = cva(
  "flex items-center justify-center rounded-xl",
  {
    variants: {
      variant: {
        default: "bg-accent-soft text-accent",
        subtle: "bg-bgSubtle text-textSub",
        outline: "border-2 border-border text-text",
      },
      size: {
        default: "w-12 h-12",
        small: "w-10 h-10",
        large: "w-16 h-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface SectionIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionIconVariants> {}

const SectionIcon = React.forwardRef<HTMLDivElement, SectionIconProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sectionIconVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

SectionIcon.displayName = "SectionIcon"

export { SectionIcon, sectionIconVariants } 