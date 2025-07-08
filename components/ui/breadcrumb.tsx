import * as React from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumb = React.forwardRef<
  HTMLElement,
  BreadcrumbProps
>(({ items, className, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      aria-label="Breadcrumb navigation"
      className={cn("flex items-center space-x-2 text-sm text-textSub", className)}
      {...props}
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-textSub/60" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-text transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-text font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
)
})

Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb }
export type { BreadcrumbItem }
