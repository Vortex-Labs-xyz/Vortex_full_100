"use client"
import Image from "next/image"
import { products } from "@/lib/products-config"
import RocketLaunchIcon from "@/components/icons/RocketLaunchIcon"
import { useState, useEffect, useRef } from "react"
import { Section } from "@/components/ui/section"

function ComingSoonModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface rounded-card p-8 max-w-md mx-4 shadow-lg border border-border animate-scaleIn">
        <div className="text-center">
          <RocketLaunchIcon className="h-16 w-16 mx-auto mb-4 text-accent" />
          <h3 className="text-2xl font-bold text-text mb-2">Launchpad Coming Soon</h3>
          <p className="text-textSub mb-6">
            Our token launchpad is currently in development. Join our waitlist to be notified when it goes live!
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-lg bg-bgSubtle px-4 py-2 font-medium text-text hover:bg-border transition-colors"
            >
              Close
            </button>
            <button className="flex-1 rounded-lg bg-accent px-4 py-2 font-medium text-white hover:bg-accent/80 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AlternatingFeatures() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp")
          }
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Section background="subtle" size="large">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group relative opacity-0"
            >
              <a
                href={product.href}
                className="relative block h-full rounded-card bg-surface border border-border p-6 transition-all duration-300 hover:shadow-lift hover:-translate-y-1"
              >
                <div className="absolute -inset-px rounded-card bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {product.badge && (
                  <span className="absolute top-4 right-4 z-10 rounded-pill bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                    {product.badge}
                  </span>
                )}
                <div className="aspect-[4/3] relative overflow-hidden rounded-md mb-6">
                  {product.id === "launchpad" ? (
                    <div className="flex items-center justify-center h-full bg-bgSubtle">
                      <RocketLaunchIcon className="h-24 w-24 text-textSub group-hover:text-accent transition-colors duration-300" />
                    </div>
                  ) : (
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.alt || `${product.title} interface`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex gap-2 mb-4">
                  {product.icons.map((icon, i) => (
                    <div key={i} className="bg-bgSubtle rounded-full p-1.5">
                      <Image src={icon || "/placeholder.svg"} alt="" width={20} height={20} />
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{product.title}</h3>
                <p className="text-textSub leading-relaxed mb-4 flex-grow">{product.subtitle}</p>
                <span className="font-medium text-sm text-accent group-hover:underline">{product.ctaText}</span>
              </a>
            </div>
          ))}
        </div>
      </Section>
      
      {showComingSoon && (
        <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
      )}
    </>
  )
}
