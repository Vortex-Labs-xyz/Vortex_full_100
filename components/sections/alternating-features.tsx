"use client"
import { products } from "@/lib/products-config"
import RocketLaunchIcon from "@/components/icons/RocketLaunchIcon"
import { useState } from "react"
import { Section } from "@/components/ui/section"
import { ProductCard } from "@/components/ui/product-card"

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

  return (
    <>
      <Section background="default" size="large">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-accent via-transparent to-blue-400 pointer-events-none" />
            
            {/* Header */}
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Our Product Suite
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive trading tools designed for speed, security, and seamless execution on Solana
              </p>
            </div>
            
            {/* Product Cards */}
            <div className="relative z-10 space-y-6">
          {products.map((product, index) => (
                <ProductCard
              key={product.id}
                  product={product}
                  index={index}
                  showDivider={index < products.length - 1}
                />
                  ))}
            </div>
          </div>
        </div>
      </Section>
      
      {showComingSoon && (
        <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
      )}
    </>
  )
}
