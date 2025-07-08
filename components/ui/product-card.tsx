import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import RocketLaunchIcon from "@/components/icons/RocketLaunchIcon"

interface ProductCardProps {
  product: {
    id: string
    title: string
    subtitle: string
    href: string
    ctaText: string
    icons: string[]
    image?: string
    alt?: string
    badge?: string
    isNew?: boolean
  }
  index: number
  showDivider?: boolean
  className?: string
}

export function ProductCard({ product, index, showDivider = true, className }: ProductCardProps) {
  return (
    <div 
      className={cn("group relative", className)}
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
      }}
    >
      <a
        href={product.href}
        className="relative block bg-white rounded-3xl p-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] overflow-hidden group"
      >
        {/* Gradient border overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent/20 via-blue-400/20 to-accent/20 rounded-3xl pointer-events-none" />
        
        {/* Subtle inner border gradient */}
        <div className="absolute inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent/10 to-blue-400/10 rounded-3xl pointer-events-none" />
        
        <div className="relative z-10 flex gap-4 items-start">
          {/* Enhanced Icon Container */}
          <div className="flex-shrink-0">
            <div className="bg-accentSoft rounded-xl p-3 text-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              {product.id === "launchpad" ? (
                <RocketLaunchIcon className="h-6 w-6 transition-transform duration-300 group-hover:animate-pulse" />
              ) : (
                <div className="flex gap-1">
                  {product.icons.slice(0, 1).map((icon, i) => (
                    <Image 
                      key={i} 
                      src={icon || "/placeholder.svg"} 
                      alt="" 
                      width={24} 
                      height={24}
                      className="rounded transition-transform duration-300 group-hover:scale-110"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight transition-colors duration-300 group-hover:text-gray-800">
                {product.title}
              </h3>
              {product.badge && (
                <span className="flex-shrink-0 ml-2 bg-gradient-to-r from-accent/10 to-blue-400/10 text-accent text-xs font-medium px-3 py-1.5 rounded-full border border-accent/20 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed mb-3 transition-colors duration-300 group-hover:text-gray-700">
              {product.subtitle}
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-accent transition-all duration-300 group-hover:text-accent/80">
                {product.ctaText}
              </span>
              <svg 
                className="w-4 h-4 text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent/80" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-accent/5 via-transparent to-blue-400/5 rounded-3xl pointer-events-none" />
      </a>
      
      {/* Enhanced Divider */}
      {showDivider && (
        <div className="mt-6 relative">
          <div className="border-b border-gray-200 transition-colors duration-300 group-hover:border-gray-300" />
          <div className="absolute inset-0 border-b border-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
    </div>
  )
} 